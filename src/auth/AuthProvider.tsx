import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import type { Session, User } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase";
type AuthValue = { session: Session | null; user: User | null; loading: boolean };
const AuthContext = createContext<AuthValue | null>(null);
export function AuthProvider({ children }: { children: ReactNode }) {
 const [session,setSession] = useState<Session|null>(null); const [loading,setLoading] = useState(true);
 useEffect(() => { let mounted = true; supabase.auth.getSession().then(({data}) => { if (mounted) { setSession(data.session); setLoading(false); } }); const {data:{subscription}} = supabase.auth.onAuthStateChange((_event,next) => { if (mounted) { setSession(next); setLoading(false); } }); return () => { mounted = false; subscription.unsubscribe(); }; }, []);
 const value = useMemo(() => ({session,user:session?.user ?? null,loading}),[session,loading]); return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
export function useAuth() { const value = useContext(AuthContext); if (!value) throw new Error("useAuth must be used within AuthProvider"); return value; }
