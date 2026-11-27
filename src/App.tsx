import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { AppProviders } from "@/providers/AppProviders";
import { RequireAuth } from "@/auth/RequireAuth";
import { SignInPage } from "@/pages/SignInPage";
import { SignUpPage } from "@/pages/SignUpPage";
import { AppPage } from "@/pages/AppPage";
function HomePage() {
  return (
    <main className="home">
      <p className="eyebrow">APPLICATION STARTER</p>
      <h1>Build your next product on a sound foundation.</h1>
      <p className="muted">Vite, React, TypeScript and Supabase, ready to configure.</p>
      <div className="actions">
        <Link className="button" to="/sign-in">
          Sign in
        </Link>
        <Link className="button secondary" to="/sign-up">
          Create account
        </Link>
      </div>
    </main>
  );
}
export default function App() {
  return (
    <AppProviders>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route element={<RequireAuth />}>
            <Route path="/app" element={<AppPage />} />
          </Route>
          <Route
            path="*"
            element={
              <main className="page">
                <h1>Page not found</h1>
                <Link to="/">Return home</Link>
              </main>
            }
          />
        </Routes>
      </BrowserRouter>
    </AppProviders>
  );
}
