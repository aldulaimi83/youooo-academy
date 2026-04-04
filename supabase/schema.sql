-- Youooo Academy Database Schema
-- Run this in your Supabase project: SQL Editor → New Query → Paste → Run

-- ─────────────────────────────────────────
-- PROFILES (extends Supabase auth.users)
-- ─────────────────────────────────────────
create table public.profiles (
  id uuid references auth.users(id) on delete cascade primary key,
  name text,
  avatar_url text,
  plan text default 'free' check (plan in ('free', 'pro', 'lifetime')),
  stripe_customer_id text unique,
  stripe_subscription_id text,
  created_at timestamptz default now()
);

alter table public.profiles enable row level security;

create policy "Users can view own profile"
  on public.profiles for select
  using (auth.uid() = id);

create policy "Users can update own profile"
  on public.profiles for update
  using (auth.uid() = id);

-- Auto-create profile on signup
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, name)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'name', split_part(new.email, '@', 1))
  );
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- ─────────────────────────────────────────
-- ENROLLMENTS
-- ─────────────────────────────────────────
create table public.enrollments (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  course_id text not null,
  enrolled_at timestamptz default now(),
  unique(user_id, course_id)
);

alter table public.enrollments enable row level security;

create policy "Users can view own enrollments"
  on public.enrollments for select
  using (auth.uid() = user_id);

create policy "Users can enroll themselves"
  on public.enrollments for insert
  with check (auth.uid() = user_id);

-- ─────────────────────────────────────────
-- LESSON PROGRESS
-- ─────────────────────────────────────────
create table public.lesson_progress (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  course_id text not null,
  lesson_id text not null,
  completed_at timestamptz default now(),
  unique(user_id, lesson_id)
);

alter table public.lesson_progress enable row level security;

create policy "Users can view own progress"
  on public.lesson_progress for select
  using (auth.uid() = user_id);

create policy "Users can update own progress"
  on public.lesson_progress for insert
  with check (auth.uid() = user_id);

-- ─────────────────────────────────────────
-- CERTIFICATES
-- ─────────────────────────────────────────
create table public.certificates (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  course_id text not null,
  issued_at timestamptz default now(),
  unique(user_id, course_id)
);

alter table public.certificates enable row level security;

create policy "Users can view own certificates"
  on public.certificates for select
  using (auth.uid() = user_id);
