# Lista de espera: o que falta configurar

O código da rota `/lista-espera` e do painel `/admin` já está pronto e publicado.
Para os dados começarem a ser gravados, faltam três passos que dependem de acesso
ao Supabase e à Vercel.

## 1. Criar a tabela no Supabase

No painel do Supabase, abra **SQL Editor**, cole o conteúdo de
`supabase/migrations/0001_waitlist_entries.sql` e rode uma vez.

Isso cria a tabela `waitlist_entries`, o gatilho que mantém `updated_at`
atualizado e as políticas de RLS:

- visitante anônimo pode **inserir** e **atualizar** o próprio registro,
  identificado pelo `id` gerado no navegador na etapa 1;
- o registro para de aceitar escrita depois que vira `status = 'completo'`;
- **ler** a tabela exige estar autenticado, e é isso que protege o painel.

## 2. Cadastrar as variáveis de ambiente

Em **Project Settings > API** do Supabase, copie a *Project URL* e a chave
*anon public*. Cadastre as duas na Vercel, em **Settings > Environment
Variables**, com estes nomes exatos:

```
VITE_SUPABASE_URL
VITE_SUPABASE_ANON_KEY
```

Depois de salvar, faça um novo deploy para que o build enxergue as variáveis.
Para rodar localmente, copie `.env.example` para `.env` e preencha os mesmos
valores.

A chave *anon* é pública por natureza: ela vai no JavaScript do site de
qualquer forma. Quem protege os dados é o RLS do passo 1, não a chave. Nunca
use a chave *service_role* aqui.

## 3. Criar o seu usuário de administrador

O painel usa o Supabase Auth. Como qualquer conta autenticada consegue ler a
tabela, o cadastro público precisa ficar desligado:

1. Em **Authentication > Providers > Email**, desligue **Enable email
   signups**.
2. Em **Authentication > Users**, clique em **Add user** e crie o seu usuário
   com e-mail e senha.

Pronto. Acesse `/admin`, entre com esse usuário e os dados aparecem.

Se mais pessoas precisarem de acesso no futuro, crie cada uma pelo mesmo
**Add user**, sem reabrir o cadastro público.

## Como o salvamento progressivo funciona

O `id` do registro é gerado no navegador, não no banco. Isso permite que a
etapa 1 grave sem precisar ler nada de volta, e é o que deixa a leitura
totalmente fechada para visitantes.

Cada botão "Continuar" grava apenas os campos daquela etapa e avança o
`etapa_atual`. Se a pessoa fechar a aba no meio, o que já foi preenchido está
salvo com `status = 'incompleto'`, e ela aparece no painel assim. O navegador
guarda o `id` e as respostas localmente, então reabrir a página retoma de onde
parou.
