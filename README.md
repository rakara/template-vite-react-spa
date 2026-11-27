# Vite React SPA Starter

A reusable foundation for authenticated dashboards, admin panels and browser-based business applications.

## Stack

- Vite, React and strict TypeScript
- React Router
- Tailwind CSS and CSS Modules
- Supabase Auth
- TanStack Query for remote state
- Zustand for shared client-side UI state
- Zod, Vitest, ESLint and Prettier
- Vercel deployment

## Requirements

- Node.js 22 or newer
- npm 10 or newer
- A Supabase project for authentication
- A Vercel account for deployment

## Create an application from this template

Use GitHub's **Use this template** action to create a new repository, then clone it. Replace the starter name, app metadata and visual identity with your product's own values.

## Install and configure

```bash
cp .env.example .env
npm ci
```

Set these values in `.env`:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_PUBLISHABLE_KEY`
- `VITE_APP_URL`

Every `VITE_` variable is public in the browser bundle. Do not put service-role keys or server secrets in Vite environment variables.

## Run and validate

```bash
npm run dev
npm run format:check
npm run lint
npm run typecheck
npm test
npm run build
npm run preview
```

## Deploy to Vercel

Import the repository into Vercel and add the three environment variables for Preview and Production. The included `vercel.json` rewrite supports React Router deep links. Configure the Supabase Auth site URL and redirect allow list for each deployed origin.

## Included and intentionally excluded

Included: public landing route, email/password registration and sign-in, session restoration, protected application route, query client provider, persisted compact-layout preference, safe internal redirect validation and SPA deployment configuration.

Not included: a business-specific database schema, fake users, mocked API responses, demo records or service-role credentials. Add data queries and mutations against your actual schema, and enforce authorization through PostgreSQL RLS or trusted server-side functions.

See `docs/` and `TASKS.md` for architecture, environment, security and implementation status.
