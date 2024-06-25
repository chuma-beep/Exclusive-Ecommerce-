import { createContext, useContext, useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_PROJECT_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_API_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);


const AuthContext = createContext();


export function AuthContextProvider({ children }) {
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ session, setSession }}>{children}</AuthContext.Provider>
  );
}

export function useAuthContext() {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error('useAuthContext must be used within AuthContextProvider');
    }
    return context;
  }
  
