# Security

Treat every VITE_ variable as public. Use Supabase publishable keys with restrictive RLS. Do not trust user IDs or roles in local storage or Zustand. Client route guards are UX only; enforce authorization in Postgres RLS and trusted server functions. Validate user input and constrain redirects.
