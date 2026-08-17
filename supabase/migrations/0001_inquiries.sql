-- Medke inquiry lead table.
-- Writes go through the inquiry-submit Edge Function (service role).
-- Direct REST access (anon/authenticated) is fully revoked.

create table if not exists public.inquiries (
  id bigint generated always as identity primary key,
  ref text not null unique,
  name text not null,
  company text,
  country text,
  email text not null,
  phone text,
  product_name text,
  quantity integer,
  message text not null,
  status text not null default 'new',
  created_at timestamptz not null default now()
);

alter table public.inquiries enable row level security;

revoke all on table public.inquiries from anon;
revoke all on table public.inquiries from authenticated;

create index inquiries_created_at_idx on public.inquiries (created_at desc);
