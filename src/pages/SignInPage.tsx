import { useState, type FormEvent } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { supabase } from "@/lib/supabase";
export function SignInPage() {
 const [email,setEmail] = useState(""); const [password,setPassword] = useState(""); const [error,setError] = useState<string|null>(null); const [busy,setBusy] = useState(false); const navigate = useNavigate(); const location = useLocation();
 async function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setError(null); setBusy(true); const {error:authError} = await supabase.auth.signInWithPassword({email,password}); setBusy(false); if (authError) { setError("Sign-in failed. Check your credentials and try again."); return; } const from = (location.state as {from?:{pathname?:string}}|null)?.from?.pathname; navigate(from?.startsWith("/") ? from : "/app",{replace:true}); }
 return <main className="auth-page"><section className="panel"><p className="eyebrow">ACCOUNT</p><h1>Sign in</h1><form onSubmit={submit} className="form"><label>Email<input type="email" autoComplete="email" required value={email} onChange={e=>setEmail(e.target.value)} /></label><label>Password<input type="password" autoComplete="current-password" required value={password} onChange={e=>setPassword(e.target.value)} /></label>{error && <p role="alert" className="error">{error}</p>}<button disabled={busy}>{busy ? "Signing in…" : "Sign in"}</button></form><p className="muted">New user? <Link to="/sign-up">Create an account</Link></p></section></main>;
}
