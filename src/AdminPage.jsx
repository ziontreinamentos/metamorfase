import { Fragment, useCallback, useEffect, useMemo, useState } from "react";
import Container from "./components/Container";
import { LogoFull } from "./components/Logo";
import { ChevronIcon } from "./components/Icons";
import { supabase, isSupabaseConfigured, WAITLIST_TABLE } from "./lib/supabase";

const COLUNAS_CSV = [
  ["created_at", "Criado em"],
  ["updated_at", "Atualizado em"],
  ["status", "Status"],
  ["etapa_atual", "Etapa"],
  ["nome", "Nome"],
  ["email", "E-mail"],
  ["whatsapp", "WhatsApp"],
  ["cidade_estado", "Cidade/Estado"],
  ["tempo_conhecendo", "Tempo conhecendo"],
  ["como_conheceu", "Como conheceu"],
  ["como_conheceu_outro", "Como conheceu (outro)"],
  ["decisao_intencao", "Decisão"],
  ["traz_alguem", "Traz alguém"],
  ["nome_convidado", "Nome do convidado"],
  ["whatsapp_convidado", "WhatsApp do convidado"],
  ["faixa_renda", "Faixa de renda"],
  ["motivo", "Motivo"],
  ["aceite_contato", "Aceite de contato"],
  ["id", "ID"],
];

const dataCurta = (iso) =>
  iso ? new Date(iso).toLocaleString("pt-BR", { dateStyle: "short", timeStyle: "short" }) : "";

const valorLegivel = (v) => {
  if (v === null || v === undefined || v === "") return "não informado";
  if (typeof v === "boolean") return v ? "Sim" : "Não";
  return String(v);
};

function baixarCsv(linhas) {
  const escapa = (v) => {
    const s = v === null || v === undefined ? "" : String(v);
    return /[";\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
  };
  const cabecalho = COLUNAS_CSV.map(([, titulo]) => escapa(titulo)).join(";");
  const corpo = linhas
    .map((l) => COLUNAS_CSV.map(([campo]) => escapa(l[campo])).join(";"))
    .join("\n");
  // BOM para o Excel abrir os acentos corretamente.
  const blob = new Blob(["﻿" + cabecalho + "\n" + corpo], {
    type: "text/csv;charset=utf-8;",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `lista-espera-${new Date().toISOString().slice(0, 10)}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/* -------------------------------------------------------------------------- */

const campoLogin =
  "w-full rounded-xl border border-border-subtle bg-bg-primary px-4 py-3 text-[15px] text-text-primary outline-none transition-colors placeholder:text-text-muted focus:border-accent-primary";

function TelaLogin({ aoEntrar }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(false);

  const enviar = async (e) => {
    e.preventDefault();
    setErro("");
    setCarregando(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password: senha });
    setCarregando(false);
    if (error) setErro("E-mail ou senha inválidos.");
    else aoEntrar();
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-bg-primary px-6">
      <form
        onSubmit={enviar}
        className="w-full max-w-sm rounded-2xl border border-border-subtle bg-bg-card p-8"
      >
        <LogoFull className="h-8" />
        <h1 className="mt-6 font-serif text-[24px] font-medium text-text-primary">
          Painel da lista de espera
        </h1>
        <p className="mt-2 text-[14px] text-text-secondary">Acesso restrito.</p>

        <div className="mt-6 space-y-4">
          <input
            type="email" required autoComplete="email" placeholder="E-mail"
            value={email} onChange={(e) => setEmail(e.target.value)} className={campoLogin}
          />
          <input
            type="password" required autoComplete="current-password" placeholder="Senha"
            value={senha} onChange={(e) => setSenha(e.target.value)} className={campoLogin}
          />
        </div>

        {erro && <p className="mt-4 text-[14px] text-semantic-negative">{erro}</p>}

        <button
          type="submit"
          disabled={carregando}
          className="mt-6 w-full rounded-full bg-cta-green px-8 py-3.5 text-[15px] font-semibold text-cta-text transition-all duration-200 hover:bg-cta-green-hover disabled:opacity-60"
        >
          {carregando ? "Entrando..." : "Entrar"}
        </button>
      </form>
    </div>
  );
}

/* -------------------------------------------------------------------------- */

function Contador({ rotulo, valor, destaque }) {
  return (
    <div className="rounded-xl border border-border-subtle bg-bg-card px-5 py-4">
      <p className="mono-label text-[11px] uppercase tracking-wide text-text-secondary">
        {rotulo}
      </p>
      <p
        className={`mt-1 font-serif text-[28px] leading-none ${
          destaque ? "text-accent-primary" : "text-text-primary"
        }`}
      >
        {valor}
      </p>
    </div>
  );
}

function Detalhe({ registro }) {
  return (
    <div className="grid gap-x-8 gap-y-3 border-t border-border-subtle bg-bg-primary/40 px-4 py-5 md:grid-cols-2">
      {COLUNAS_CSV.filter(([c]) => !["nome", "email", "whatsapp", "status", "etapa_atual"].includes(c)).map(
        ([campo, titulo]) => (
          <div key={campo}>
            <p className="mono-label text-[11px] uppercase tracking-wide text-text-muted">
              {titulo}
            </p>
            <p className="mt-1 whitespace-pre-wrap text-[14px] leading-[1.5] text-text-secondary">
              {campo === "created_at" || campo === "updated_at"
                ? dataCurta(registro[campo]) || "não informado"
                : valorLegivel(registro[campo])}
            </p>
          </div>
        ),
      )}
    </div>
  );
}

const seletor =
  "rounded-xl border border-border-subtle bg-bg-card px-3 py-2.5 text-[14px] text-text-primary outline-none focus:border-accent-primary";

export default function AdminPage() {
  const [sessao, setSessao] = useState(null);
  const [verificando, setVerificando] = useState(true);
  const [registros, setRegistros] = useState([]);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState("");
  const [aberto, setAberto] = useState(null);

  const [busca, setBusca] = useState("");
  const [fStatus, setFStatus] = useState("");
  const [fRenda, setFRenda] = useState("");
  const [fDecisao, setFDecisao] = useState("");
  const [fOrigem, setFOrigem] = useState("");

  useEffect(() => {
    if (!isSupabaseConfigured) {
      setVerificando(false);
      return undefined;
    }
    supabase.auth.getSession().then(({ data }) => {
      setSessao(data.session);
      setVerificando(false);
    });
    const { data: sub } = supabase.auth.onAuthStateChange((_e, s) => setSessao(s));
    return () => sub.subscription.unsubscribe();
  }, []);

  const carregar = useCallback(async () => {
    setCarregando(true);
    setErro("");
    const { data, error } = await supabase
      .from(WAITLIST_TABLE)
      .select("*")
      .order("created_at", { ascending: false });
    if (error) setErro(error.message);
    else setRegistros(data || []);
    setCarregando(false);
  }, []);

  useEffect(() => {
    if (sessao) carregar();
  }, [sessao, carregar]);

  const opcoes = useMemo(() => {
    const unicos = (campo) =>
      [...new Set(registros.map((r) => r[campo]).filter(Boolean))].sort();
    return {
      renda: unicos("faixa_renda"),
      decisao: unicos("decisao_intencao"),
      origem: unicos("como_conheceu"),
    };
  }, [registros]);

  const filtrados = useMemo(() => {
    const termo = busca.trim().toLowerCase();
    return registros.filter((r) => {
      if (fStatus && r.status !== fStatus) return false;
      if (fRenda && r.faixa_renda !== fRenda) return false;
      if (fDecisao && r.decisao_intencao !== fDecisao) return false;
      if (fOrigem && r.como_conheceu !== fOrigem) return false;
      if (!termo) return true;
      return ["nome", "email", "whatsapp"].some((c) =>
        String(r[c] || "").toLowerCase().includes(termo),
      );
    });
  }, [registros, busca, fStatus, fRenda, fDecisao, fOrigem]);

  const totais = useMemo(
    () => ({
      total: registros.length,
      completos: registros.filter((r) => r.status === "completo").length,
      incompletos: registros.filter((r) => r.status !== "completo").length,
      convidados: registros.filter((r) => r.traz_alguem === true).length,
    }),
    [registros],
  );

  if (!isSupabaseConfigured) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-bg-primary px-6 text-center">
        <div className="max-w-md">
          <h1 className="font-serif text-[24px] text-text-primary">Painel indisponível</h1>
          <p className="mt-3 text-[15px] leading-[1.6] text-text-secondary">
            Faltam as variáveis VITE_SUPABASE_URL e VITE_SUPABASE_ANON_KEY neste
            ambiente. Cadastre as duas e publique de novo.
          </p>
        </div>
      </div>
    );
  }

  if (verificando) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-bg-primary">
        <p className="text-[15px] text-text-secondary">Carregando...</p>
      </div>
    );
  }

  if (!sessao) return <TelaLogin aoEntrar={() => {}} />;

  return (
    <div className="min-h-screen bg-bg-primary py-10">
      <Container>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <LogoFull className="h-8" />
            <h1 className="font-serif text-[22px] font-medium text-text-primary">
              Lista de espera
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button" onClick={carregar} disabled={carregando}
              className="rounded-full border border-border-subtle px-5 py-2.5 text-[14px] text-text-secondary transition-colors hover:border-text-muted hover:text-text-primary disabled:opacity-50"
            >
              {carregando ? "Atualizando..." : "Atualizar"}
            </button>
            <button
              type="button" onClick={() => baixarCsv(filtrados)} disabled={!filtrados.length}
              className="rounded-full bg-cta-green px-5 py-2.5 text-[14px] font-semibold text-cta-text transition-colors hover:bg-cta-green-hover disabled:opacity-50"
            >
              Exportar CSV
            </button>
            <button
              type="button" onClick={() => supabase.auth.signOut()}
              className="rounded-full border border-border-subtle px-5 py-2.5 text-[14px] text-text-secondary transition-colors hover:border-text-muted hover:text-text-primary"
            >
              Sair
            </button>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          <Contador rotulo="Total de inscritos" valor={totais.total} destaque />
          <Contador rotulo="Completos" valor={totais.completos} />
          <Contador rotulo="Incompletos" valor={totais.incompletos} />
          <Contador rotulo="Trazem alguém" valor={totais.convidados} />
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <input
            type="search" value={busca} onChange={(e) => setBusca(e.target.value)}
            placeholder="Buscar por nome, e-mail ou WhatsApp"
            className={`${seletor} min-w-[260px] flex-1`}
          />
          <select value={fStatus} onChange={(e) => setFStatus(e.target.value)} className={seletor}>
            <option value="">Todos os status</option>
            <option value="completo">Completos</option>
            <option value="incompleto">Incompletos</option>
          </select>
          <select value={fRenda} onChange={(e) => setFRenda(e.target.value)} className={seletor}>
            <option value="">Todas as rendas</option>
            {opcoes.renda.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
          <select value={fDecisao} onChange={(e) => setFDecisao(e.target.value)} className={seletor}>
            <option value="">Todas as decisões</option>
            {opcoes.decisao.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
          <select value={fOrigem} onChange={(e) => setFOrigem(e.target.value)} className={seletor}>
            <option value="">Todas as origens</option>
            {opcoes.origem.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
        </div>

        {erro && (
          <p className="mt-6 rounded-xl border border-semantic-negative/40 bg-semantic-negative/10 px-4 py-3 text-[14px] text-text-primary">
            {erro}
          </p>
        )}

        <p className="mt-6 text-[13px] text-text-muted">
          Mostrando {filtrados.length} de {registros.length}. Clique numa linha para ver tudo.
        </p>

        <div className="mt-3 overflow-x-auto rounded-2xl border border-border-subtle">
          <table className="w-full min-w-[760px] border-collapse text-left">
            <thead>
              <tr className="bg-bg-card">
                {["Nome", "E-mail", "WhatsApp", "Status", "Etapa", "Criado em", ""].map((h) => (
                  <th
                    key={h}
                    className="mono-label px-4 py-3 text-[11px] uppercase tracking-wide text-text-secondary"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtrados.map((r) => (
                <Fragment key={r.id}>
                  <tr
                    onClick={() => setAberto(aberto === r.id ? null : r.id)}
                    className="cursor-pointer border-t border-border-subtle transition-colors hover:bg-bg-card/60"
                  >
                    <td className="px-4 py-3 text-[14px] text-text-primary">{r.nome || "sem nome"}</td>
                    <td className="px-4 py-3 text-[14px] text-text-secondary">{r.email}</td>
                    <td className="px-4 py-3 text-[14px] text-text-secondary">{r.whatsapp}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`mono-label rounded-full px-3 py-1 text-[11px] uppercase ${
                          r.status === "completo"
                            ? "bg-cta-green/15 text-cta-green"
                            : "bg-accent-primary/15 text-accent-primary"
                        }`}
                      >
                        {r.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-[14px] text-text-secondary">{r.etapa_atual}/4</td>
                    <td className="px-4 py-3 text-[14px] text-text-secondary">{dataCurta(r.created_at)}</td>
                    <td className="px-4 py-3">
                      <ChevronIcon open={aberto === r.id} className="h-4 w-4 text-text-muted" />
                    </td>
                  </tr>
                  {aberto === r.id && (
                    <tr>
                      <td colSpan={7} className="p-0">
                        <Detalhe registro={r} />
                      </td>
                    </tr>
                  )}
                </Fragment>
              ))}
              {!filtrados.length && !carregando && (
                <tr className="border-t border-border-subtle">
                  <td colSpan={7} className="px-4 py-10 text-center text-[14px] text-text-muted">
                    Nenhum registro encontrado.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </Container>
    </div>
  );
}
