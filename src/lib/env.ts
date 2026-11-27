import { z } from "zod";
const schema = z.object({ VITE_SUPABASE_URL: z.string().url(), VITE_SUPABASE_PUBLISHABLE_KEY: z.string().min(1), VITE_APP_URL: z.string().url().default("http://localhost:5173") });
export const env = schema.parse(import.meta.env);
