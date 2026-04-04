# Youooo Academy

A modern online learning platform built with Next.js 16, Tailwind CSS, Supabase, and Stripe.

## Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **Auth + Database**: Supabase
- **Payments**: Stripe
- **Hosting**: Vercel

## Getting Started

1. Clone the repo and install dependencies:
   ```bash
   npm install
   ```

2. Copy the env template and fill in your keys:
   ```bash
   cp .env.local.example .env.local
   ```

3. Run the dev server:
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Environment Variables

See `.env.local.example` for all required variables:
- `NEXT_PUBLIC_SUPABASE_URL` + `NEXT_PUBLIC_SUPABASE_ANON_KEY` — from your Supabase project
- `STRIPE_SECRET_KEY` + `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` — from your Stripe dashboard
- `STRIPE_WEBHOOK_SECRET` — from `stripe listen --forward-to localhost:3000/api/stripe/webhook`

## Pages

| Route | Description |
|---|---|
| `/` | Landing page |
| `/courses` | Course catalog |
| `/courses/[slug]` | Course detail + curriculum |
| `/pricing` | Pricing plans |
| `/dashboard` | User dashboard |
| `/auth/login` | Login |
| `/auth/signup` | Sign up |

## Roadmap

- [ ] Wire up Supabase auth (login, signup, session)
- [ ] User progress tracking
- [ ] Course player with video/text lessons
- [ ] Certificate generation (PDF)
- [ ] Admin dashboard
- [ ] Blog / SEO pages
