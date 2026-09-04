import { useEffect, useMemo, useRef, useState } from "react";
import { CheckIcon, WhatsAppIcon } from "./Icons";
import { WHATSAPP_LINK } from "../whatsapp";
import { supabase, isSupabaseConfigured, WAITLIST_TABLE } from "../lib/supabase";

const TOTAL_STEPS = 4;
const STORAGE_KEY = "metamorfase_waitlist";

const CAMPOS_INICIAIS = {
  nome: "",
  email: "",
  whatsapp: "",
  cidade_estado: "",
  tempo_conhecendo: "",
  como_conheceu: "",
  como_conheceu_outro: "",
  decisao_intencao: "",
  traz_alguem: null,
  nome_convidado: "",
  whatsapp_convidado: "",
  faixa_renda: "",
  motivo: "",
  aceite_contato: false,
};

const OPCOES_TEMPO = [
  "Vi agora",
  "Acompanho há um tempo",
  "Já ia me inscrever na turma de agosto",
];
const OPCOES_ORIGEM = [
  "Instagram",
  "Indicação de amigo",
  "Já sou aluno de outro produto",
  "YouTube",
  "Google",
  "Outro",
];
const OPCOES_DECISAO = [
  "Já entraria",
  "Preciso me organizar financeiramente",
  "Só quero acompanhar por enquanto",
];
const OPCOES_RENDA = [
  "Até R$10 mil",
  "R$10 a 30 mil",
  "R$30 a 50 mil",
  "R$50 a 100 mil",
  "Acima de R$100 mil",
];

function novoId() {
  if (crypto.randomUUID) return crypto.randomUUID();
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
  });
}

function leSessaoSalva() {
  try {
    const cru = localStorage.getItem(STORAGE_KEY);
    if (!cru) return null;
    const salvo = JSON.parse(cru);
    if (!salvo || !salvo.id) return null;
    return salvo;
  } catch {
    return null;
  }
}

function gravaSessao(id, valores, etapa) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ id, valores, etapa }));
  } catch {
    // Navegação privada ou storage cheio: seguir sem persistir localmente.
  }
}

function limpaSessao() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // sem ação
  }
}

const emailValido = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());
const soDigitos = (v) => v.replace(/\D/g, "");

/* -------------------------------------------------------------------------- */
/* Campos                                                                      */
/* -------------------------------------------------------------------------- */

const baseCampo =
  "w-full rounded-xl border bg-bg-primary px-4 py-3 text-[15px] text-text-primary outline-none transition-colors placeholder:text-text-muted focus:border-accent-primary";

function Rotulo({ children, htmlFor, obrigatorio }) {
  return (
    <label htmlFor={htmlFor} className="mono-label block text-[12px] uppercase tracking-wide text-text-secondary">
      {children}
      {obrigatorio && <span className="text-accent-primary"> *</span>}
    </label>
  );
}

function Erro({ children }) {
  if (!children) return null;
  return <p className="mt-1.5 text-[13px] text-semantic-negative">{children}</p>;
}

function CampoTexto({ id, label, obrigatorio, erro, ...props }) {
  return (
    <div>
      <Rotulo htmlFor={id} obrigatorio={obrigatorio}>{label}</Rotulo>
      <input
        id={id}
        className={`${baseCampo} mt-2 ${erro ? "border-semantic-negative" : "border-border-subtle"}`}
        aria-invalid={Boolean(erro)}
        {...props}
      />
      <Erro>{erro}</Erro>
    </div>
  );
}

function CampoSelect({ id, label, opcoes, obrigatorio, erro, placeholder, ...props }) {
  return (
    <div>
      <Rotulo htmlFor={id} obrigatorio={obrigatorio}>{label}</Rotulo>
      <select
        id={id}
        className={`${baseCampo} mt-2 appearance-none ${erro ? "border-semantic-negative" : "border-border-subtle"}`}
        aria-invalid={Boolean(erro)}
        {...props}
      >
        <option value="">{placeholder || "Selecione"}</option>
        {opcoes.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
      <Erro>{erro}</Erro>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Progresso                                                                   */
/* -------------------------------------------------------------------------- */

function Progresso({ etapa }) {
  const pct = (etapa / TOTAL_STEPS) * 100;
  return (
    <div>
      <div className="flex items-baseline justify-between gap-4">
        <p className="mono-label text-[12px] uppercase tracking-wide text-accent-primary">
          Etapa {etapa} de {TOTAL_STEPS}
        </p>
        <p className="mono-label text-[12px] text-text-muted">{Math.round(pct)}%</p>
      </div>
      <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-border-subtle">
        <div
          className="h-full rounded-full bg-accent-primary transition-[width] duration-500 ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>
      <div className="mt-3 flex gap-2" aria-hidden="true">
        {Array.from({ length: TOTAL_STEPS }, (_, i) => (
          <span
            key={i}
            className={`h-1.5 flex-1 rounded-full transition-colors duration-300 ${
              i < etapa ? "bg-accent-primary/70" : "bg-border-subtle"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Formulário                                                                  */
/* -------------------------------------------------------------------------- */

export default function WaitlistForm() {
  const [etapa, setEtapa] = useState(1);
  const [valores, setValores] = useState(CAMPOS_INICIAIS);
  const [erros, setErros] = useState({});
  const [salvando, setSalvando] = useState(false);
  const [falha, setFalha] = useState("");
  const [concluido, setConcluido] = useState(false);
  const idRef = useRef(null);
  const topoRef = useRef(null);

  // Retoma um preenchimento interrompido.
  useEffect(() => {
    const salvo = leSessaoSalva();
    if (!salvo) return;
    idRef.current = salvo.id;
    setValores({ ...CAMPOS_INICIAIS, ...(salvo.valores || {}) });
    setEtapa(Math.min(Math.max(salvo.etapa || 1, 1), TOTAL_STEPS));
  }, []);

  const definir = (campo) => (e) => {
    const alvo = e.target;
    const valor = alvo.type === "checkbox" ? alvo.checked : alvo.value;
    setValores((v) => ({ ...v, [campo]: valor }));
    setErros((v) => ({ ...v, [campo]: undefined }));
  };

  const validaEtapa = (n) => {
    const e = {};
    if (n === 1) {
      if (!valores.nome.trim()) e.nome = "Informe seu nome completo.";
      if (!valores.email.trim()) e.email = "Informe seu e-mail.";
      else if (!emailValido(valores.email)) e.email = "E-mail em formato inválido.";
      if (!valores.whatsapp.trim()) e.whatsapp = "Informe seu WhatsApp.";
      else if (soDigitos(valores.whatsapp).length < 10)
        e.whatsapp = "Inclua DDD e número, com pelo menos 10 dígitos.";
    }
    if (n === 2) {
      if (!valores.cidade_estado.trim()) e.cidade_estado = "Informe cidade e estado.";
      if (!valores.tempo_conhecendo) e.tempo_conhecendo = "Escolha uma opção.";
      if (!valores.como_conheceu) e.como_conheceu = "Escolha uma opção.";
      if (valores.como_conheceu === "Outro" && !valores.como_conheceu_outro.trim())
        e.como_conheceu_outro = "Conte como você chegou até aqui.";
    }
    if (n === 3) {
      if (!valores.decisao_intencao) e.decisao_intencao = "Escolha uma opção.";
      if (valores.traz_alguem === null) e.traz_alguem = "Escolha uma opção.";
      if (valores.traz_alguem === true) {
        if (!valores.nome_convidado.trim()) e.nome_convidado = "Informe o nome da pessoa.";
        if (!valores.whatsapp_convidado.trim())
          e.whatsapp_convidado = "Informe o WhatsApp da pessoa.";
      }
    }
    if (n === 4) {
      if (!valores.faixa_renda) e.faixa_renda = "Escolha uma faixa.";
      if (!valores.motivo.trim()) e.motivo = "Conte o motivo, mesmo que em poucas linhas.";
      if (!valores.aceite_contato)
        e.aceite_contato = "É preciso aceitar para concluir a inscrição.";
    }
    setErros(e);
    return Object.keys(e).length === 0;
  };

  // Só envia ao banco o que pertence à etapa concluída.
  const dadosDaEtapa = (n) => {
    if (n === 1) {
      return {
        nome: valores.nome.trim(),
        email: valores.email.trim().toLowerCase(),
        whatsapp: valores.whatsapp.trim(),
      };
    }
    if (n === 2) {
      return {
        cidade_estado: valores.cidade_estado.trim(),
        tempo_conhecendo: valores.tempo_conhecendo,
        como_conheceu: valores.como_conheceu,
        como_conheceu_outro:
          valores.como_conheceu === "Outro" ? valores.como_conheceu_outro.trim() : null,
      };
    }
    if (n === 3) {
      const traz = valores.traz_alguem === true;
      return {
        decisao_intencao: valores.decisao_intencao,
        traz_alguem: traz,
        nome_convidado: traz ? valores.nome_convidado.trim() : null,
        whatsapp_convidado: traz ? valores.whatsapp_convidado.trim() : null,
      };
    }
    return {
      faixa_renda: valores.faixa_renda,
      motivo: valores.motivo.trim(),
      aceite_contato: Boolean(valores.aceite_contato),
    };
  };

  const persistir = async (n) => {
    if (!isSupabaseConfigured) {
      throw new Error(
        "A lista de espera ainda não está conectada ao banco de dados. Fale com a equipe pelo WhatsApp.",
      );
    }
    const ultima = n === TOTAL_STEPS;
    const payload = {
      ...dadosDaEtapa(n),
      etapa_atual: n,
      status: ultima ? "completo" : "incompleto",
    };

    if (n === 1 && !idRef.current) {
      // O id nasce no navegador: assim o insert nunca precisa ler de volta,
      // e a leitura da tabela pode ficar bloqueada para visitantes.
      const id = novoId();
      const { error } = await supabase
        .from(WAITLIST_TABLE)
        .insert({ id, ...payload });
      if (error) throw error;
      idRef.current = id;
      return;
    }

    const { error } = await supabase
      .from(WAITLIST_TABLE)
      .update(payload)
      .eq("id", idRef.current);
    if (error) throw error;
  };

  const avancar = async (e) => {
    e.preventDefault();
    if (salvando) return;
    if (!validaEtapa(etapa)) return;

    setSalvando(true);
    setFalha("");
    try {
      await persistir(etapa);
      const proxima = etapa + 1;
      if (etapa === TOTAL_STEPS) {
        limpaSessao();
        setConcluido(true);
      } else {
        gravaSessao(idRef.current, valores, proxima);
        setEtapa(proxima);
      }
      topoRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    } catch (err) {
      setFalha(
        err?.message ||
          "Não foi possível salvar agora. Tente de novo em instantes.",
      );
    } finally {
      setSalvando(false);
    }
  };

  const voltar = () => {
    setFalha("");
    setErros({});
    setEtapa((n) => Math.max(1, n - 1));
    topoRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const rotuloBotao = useMemo(
    () => (etapa === TOTAL_STEPS ? "Concluir inscrição na lista" : "Continuar"),
    [etapa],
  );

  /* ---------------------------- confirmação ---------------------------- */
  if (concluido) {
    return (
      <div
        ref={topoRef}
        className="mx-auto max-w-xl rounded-2xl border border-border-highlight bg-bg-card-elevated p-8 text-center shadow-[0_0_40px_#e8823c26] md:p-12"
      >
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-cta-green text-cta-text">
          <CheckIcon className="h-7 w-7" />
        </span>
        <h3 className="mt-6 font-serif text-[26px] font-medium leading-[1.2] text-text-primary md:text-[32px]">
          Você está na lista!
        </h3>
        <p className="mt-4 text-[16px] leading-[1.6] text-text-secondary">
          Vamos te avisar assim que a próxima turma abrir.
        </p>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-cta-green px-8 py-4 text-base font-semibold text-cta-text transition-all duration-200 hover:scale-[1.02] hover:bg-cta-green-hover"
        >
          <WhatsAppIcon className="h-5 w-5 shrink-0" />
          <span>Falar com a equipe no WhatsApp</span>
        </a>
      </div>
    );
  }

  /* ------------------------------ etapas ------------------------------- */
  return (
    <div
      ref={topoRef}
      className="mx-auto max-w-xl rounded-2xl border border-border-subtle bg-bg-card p-6 text-left md:p-10"
    >
      <Progresso etapa={etapa} />

      <form onSubmit={avancar} noValidate className="mt-8">
        {etapa === 1 && (
          <div className="space-y-5">
            <h3 className="font-serif text-[22px] font-medium text-text-primary md:text-[26px]">
              Seus dados
            </h3>
            <CampoTexto
              id="nome" label="Nome completo" obrigatorio autoComplete="name"
              value={valores.nome} onChange={definir("nome")} erro={erros.nome}
              placeholder="Como você se chama?"
            />
            <CampoTexto
              id="email" label="E-mail" obrigatorio type="email" autoComplete="email"
              value={valores.email} onChange={definir("email")} erro={erros.email}
              placeholder="voce@email.com"
            />
            <CampoTexto
              id="whatsapp" label="WhatsApp" obrigatorio type="tel" autoComplete="tel"
              value={valores.whatsapp} onChange={definir("whatsapp")} erro={erros.whatsapp}
              placeholder="(47) 99999-9999"
            />
          </div>
        )}

        {etapa === 2 && (
          <div className="space-y-5">
            <h3 className="font-serif text-[22px] font-medium text-text-primary md:text-[26px]">
              Seu momento
            </h3>
            <CampoTexto
              id="cidade_estado" label="Cidade e estado" obrigatorio
              value={valores.cidade_estado} onChange={definir("cidade_estado")}
              erro={erros.cidade_estado} placeholder="Ex: Joinville, SC"
            />
            <CampoSelect
              id="tempo_conhecendo" label="Conhece a Metamorfase há quanto tempo?"
              obrigatorio opcoes={OPCOES_TEMPO} value={valores.tempo_conhecendo}
              onChange={definir("tempo_conhecendo")} erro={erros.tempo_conhecendo}
            />
            <CampoSelect
              id="como_conheceu" label="Como conheceu a Metamorfase?" obrigatorio
              opcoes={OPCOES_ORIGEM} value={valores.como_conheceu}
              onChange={definir("como_conheceu")} erro={erros.como_conheceu}
            />
            {valores.como_conheceu === "Outro" && (
              <CampoTexto
                id="como_conheceu_outro" label="Conte como chegou até aqui" obrigatorio
                value={valores.como_conheceu_outro} onChange={definir("como_conheceu_outro")}
                erro={erros.como_conheceu_outro} placeholder="Escreva aqui"
              />
            )}
          </div>
        )}

        {etapa === 3 && (
          <div className="space-y-5">
            <h3 className="font-serif text-[22px] font-medium text-text-primary md:text-[26px]">
              Sua decisão
            </h3>
            <CampoSelect
              id="decisao_intencao" label="Se abrir uma nova turma, você:" obrigatorio
              opcoes={OPCOES_DECISAO} value={valores.decisao_intencao}
              onChange={definir("decisao_intencao")} erro={erros.decisao_intencao}
            />

            <div>
              <Rotulo obrigatorio>Gostaria de trazer alguém junto?</Rotulo>
              <div className="mt-3 flex gap-3">
                {[["Sim", true], ["Não", false]].map(([texto, val]) => (
                  <button
                    key={texto}
                    type="button"
                    onClick={() => {
                      setValores((v) => ({ ...v, traz_alguem: val }));
                      setErros((v) => ({ ...v, traz_alguem: undefined }));
                    }}
                    aria-pressed={valores.traz_alguem === val}
                    className={`flex-1 rounded-xl border px-4 py-3 text-[15px] font-medium transition-colors ${
                      valores.traz_alguem === val
                        ? "border-accent-primary bg-accent-primary/10 text-text-primary"
                        : "border-border-subtle bg-bg-primary text-text-secondary hover:border-text-muted"
                    }`}
                  >
                    {texto}
                  </button>
                ))}
              </div>
              <Erro>{erros.traz_alguem}</Erro>
            </div>

            {valores.traz_alguem === true && (
              <>
                <CampoTexto
                  id="nome_convidado" label="Nome da pessoa" obrigatorio
                  value={valores.nome_convidado} onChange={definir("nome_convidado")}
                  erro={erros.nome_convidado} placeholder="Nome de quem vem com você"
                />
                <CampoTexto
                  id="whatsapp_convidado" label="WhatsApp da pessoa" obrigatorio type="tel"
                  value={valores.whatsapp_convidado} onChange={definir("whatsapp_convidado")}
                  erro={erros.whatsapp_convidado} placeholder="(47) 99999-9999"
                />
              </>
            )}
          </div>
        )}

        {etapa === 4 && (
          <div className="space-y-5">
            <h3 className="font-serif text-[22px] font-medium text-text-primary md:text-[26px]">
              Últimos detalhes
            </h3>
            <CampoSelect
              id="faixa_renda" label="Renda atual" obrigatorio opcoes={OPCOES_RENDA}
              value={valores.faixa_renda} onChange={definir("faixa_renda")}
              erro={erros.faixa_renda}
            />
            <div>
              <Rotulo htmlFor="motivo" obrigatorio>
                Por que você quer fazer a Metamorfase?
              </Rotulo>
              <textarea
                id="motivo"
                rows={4}
                value={valores.motivo}
                onChange={definir("motivo")}
                placeholder="Escreva com suas palavras"
                className={`${baseCampo} mt-2 resize-y ${
                  erros.motivo ? "border-semantic-negative" : "border-border-subtle"
                }`}
              />
              <Erro>{erros.motivo}</Erro>
            </div>
            <div>
              <label className="flex cursor-pointer items-start gap-3">
                <input
                  type="checkbox"
                  checked={valores.aceite_contato}
                  onChange={definir("aceite_contato")}
                  className="mt-1 h-4 w-4 shrink-0 accent-[#2fbf6d]"
                />
                <span className="text-[15px] leading-[1.5] text-text-secondary">
                  Aceito receber novidades sobre a próxima turma.
                  <span className="text-accent-primary"> *</span>
                </span>
              </label>
              <Erro>{erros.aceite_contato}</Erro>
            </div>
          </div>
        )}

        {falha && (
          <p className="mt-6 rounded-xl border border-semantic-negative/40 bg-semantic-negative/10 px-4 py-3 text-[14px] leading-[1.5] text-text-primary">
            {falha}
          </p>
        )}

        <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:items-center">
          {etapa > 1 && (
            <button
              type="button"
              onClick={voltar}
              disabled={salvando}
              className="rounded-full border border-border-subtle px-6 py-3.5 text-[15px] font-medium text-text-secondary transition-colors hover:border-text-muted hover:text-text-primary disabled:opacity-50"
            >
              Voltar
            </button>
          )}
          <button
            type="submit"
            disabled={salvando}
            className="flex-1 rounded-full bg-cta-green px-8 py-4 text-base font-semibold text-cta-text transition-all duration-200 hover:scale-[1.02] hover:bg-cta-green-hover disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
          >
            {salvando ? "Salvando..." : rotuloBotao}
          </button>
        </div>

        <p className="mt-4 text-center text-[13px] leading-[1.5] text-text-muted">
          Suas respostas são salvas a cada etapa, então você pode voltar depois.
        </p>
      </form>
    </div>
  );
}
