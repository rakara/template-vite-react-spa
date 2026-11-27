import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "@/auth/AuthProvider";
export function RequireAuth() { const {user,loading} = useAuth(); const location = useLocation(); if (loading) return <main className="page"><p role="status">Checking session…</p></main>; return user ? <Outlet /> : <Navigate to="/sign-in" replace state={{from:location}} />; }
