import { useState, type FormEvent } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { supabase } from "@/lib/supabase";
import { getSafeInternalPath } from "@/lib/navigation";
export function SignInPage() {
 const [email,setEmail] = useState(""); const [password,setPassword] = useState(""); const [error,setError] = useState<string|null>(null); const [busy,setBusy] = useState(false); const navigate = useNavigate(); const location = useLocation();
 async function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setError(null); setBusy(true); try { const {error:authError} = await supabase.auth.signInWithPassword({email,password}); if (authError) { setError("Sign-in failed. Check your credentials and try again."); return; } const from = (location.state as {from?:{pathname?:string}}|null)?.from?.pathname; navigate(getSafeInternalPath(from),{replace:true}); } catch { setError("Unable to reach the authentication service. Check your connection and try again."); } finally { setBusy(false); } }
 return <main className="auth-page"><section className="panel"><p className="eyebrow">ACCOUNT</p><h1>Sign in</h1><form onSubmit={submit} className="form"><label>Email<input type="email" autoComplete="email" required value={email} onChange={e=>setEmail(e.target.value)} /></label><label>Password<input type="password" autoComplete="current-password" required value={password} onChange={e=>setPassword(e.target.value)} /></label>{error && <p role="alert" className="error">{error}</p>}<button disabled={busy}>{busy ? "Signing in…" : "Sign in"}</button></form><p className="muted">New user? <Link to="/sign-up">Create an account</Link></p></section></main>;
}
