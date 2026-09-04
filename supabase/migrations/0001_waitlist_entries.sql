-- Lista de espera da Metamorfase.
-- Rode este arquivo no SQL Editor do Supabase (uma vez).

create table if not exists public.waitlist_entries (
  id                  uuid primary key default gen_random_uuid(),
  created_at          timestamptz not null default now(),
  updated_at          timestamptz,
  nome                text,
  email               text,
  whatsapp            text,
  cidade_estado       text,
  tempo_conhecendo    text,
  como_conheceu       text,
  como_conheceu_outro text,
  decisao_intencao    text,
  traz_alguem         boolean,
  nome_convidado      text,
  whatsapp_convidado  text,
  faixa_renda         text,
  motivo              text,
  aceite_contato      boolean,
  status              text not null default 'incompleto',
  etapa_atual         integer not null default 1,
  constraint waitlist_entries_status_check
    check (status in ('incompleto', 'completo'))
);

create index if not exists waitlist_entries_created_at_idx
  on public.waitlist_entries (created_at desc);
create index if not exists waitlist_entries_status_idx
  on public.waitlist_entries (status);

-- Mantém updated_at sempre coerente, sem depender do client.
create or replace function public.waitlist_touch_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists waitlist_entries_touch on public.waitlist_entries;
create trigger waitlist_entries_touch
  before update on public.waitlist_entries
  for each row execute function public.waitlist_touch_updated_at();

-- ---------------------------------------------------------------------------
-- RLS
-- ---------------------------------------------------------------------------
alter table public.waitlist_entries enable row level security;

drop policy if exists "anon insere o proprio registro"   on public.waitlist_entries;
drop policy if exists "anon atualiza o proprio registro" on public.waitlist_entries;
drop policy if exists "admin le tudo"                    on public.waitlist_entries;

-- O visitante cria o registro na etapa 1. O id é gerado no navegador e
-- guardado localmente, então o insert nunca precisa ler nada de volta.
create policy "anon insere o proprio registro"
  on public.waitlist_entries
  for insert
  to anon, authenticated
  with check (true);

-- Etapas 2 a 4 atualizam o mesmo registro. O id é um uuid aleatório que só
-- quem preencheu a etapa 1 conhece: como a leitura é bloqueada para anon,
-- não há como descobrir ids de terceiros.
-- O registro para de aceitar escrita depois de concluído.
create policy "anon atualiza o proprio registro"
  on public.waitlist_entries
  for update
  to anon, authenticated
  using (status = 'incompleto')
  with check (true);

-- Leitura apenas para quem estiver autenticado: é o que protege o painel.
-- Deixe o cadastro de novos usuários desligado no Supabase e crie o seu
-- usuário administrador na mão (veja o README).
create policy "admin le tudo"
  on public.waitlist_entries
  for select
  to authenticated
  using (true);
