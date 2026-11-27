# Architecture

React Router owns client navigation. AuthProvider subscribes to Supabase session changes. Use TanStack Query for remote server state and Zustand only for shared client state. The Supabase browser key is public by design; PostgreSQL RLS is the data access boundary. Vercel rewrite configuration supports deep links.
