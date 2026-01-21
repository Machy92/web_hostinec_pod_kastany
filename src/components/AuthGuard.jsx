import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import supabase from '../supabaseClient.js';

function AuthGuard({ children }) {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setSession(session);
      setLoading(false);
    };

    fetchSession();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (loading) {
    return <div className="page-container d-flex justify-content-center align-items-center"><p>Ověřuji přihlášení...</p></div>;
  }

  if (!session) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default AuthGuard;