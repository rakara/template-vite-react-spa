import { useAuth } from "@/auth/AuthProvider";
import { supabase } from "@/lib/supabase";
import { useUiStore } from "@/stores/ui-store";

export function AppPage() {
  const { user } = useAuth();
  const compactMode = useUiStore((state) => state.compactMode);
  const toggleCompactMode = useUiStore((state) => state.toggleCompactMode);

  async function signOut() {
    await supabase.auth.signOut();
  }

  return (
    <main className={compactMode ? "shell compact" : "shell"}>
      <header className="topbar">
        <a className="brand" href="/">Application Starter</a>
        <div className="actions">
          <button className="secondary" type="button" onClick={toggleCompactMode} aria-pressed={compactMode}>
            {compactMode ? "Comfortable layout" : "Compact layout"}
          </button>
          <button className="secondary" type="button" onClick={signOut}>Sign out</button>
        </div>
      </header>
      <section className="content">
        <p className="eyebrow">WORKSPACE</p>
        <h1>Dashboard</h1>
        <div className="panel">
          <h2>Authenticated session</h2>
          <p className="muted">Signed in as {user?.email}</p>
          <p className="muted">Client route guards are UX only. Protect data with PostgreSQL RLS.</p>
        </div>
      </section>
    </main>
  );
}
