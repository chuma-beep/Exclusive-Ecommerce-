import { createContext, useContext, useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { useNavigate } from "react-router-dom";

const supabaseUrl = import.meta.env.VITE_SUPABASE_PROJECT_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_API_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const navigate = useNavigate();
  const [session, setSession] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");

  // SIGNUP FUNCTION
  const handleSignup = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");


     // Password strength requirements
     const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  
     if (!passwordRegex.test(password)) {
       setError('Password must contain at least one lowercase letter, one uppercase letter, one number, and be at least 8 characters long.');
       setLoading(false);
       return;
     }
     
    const { user, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          first_name: firstName,
        },
      },
    });

    if (error) {
      setError(error.message);
    } else {
      console.log("User signed up: ", firstName);
      alert("Please check your email for verification")
    }
    setLoading(false);
  };

  // SIGNIN WITH GOOGLE FUNCTION
  const handleGoogleSignin = async () => {
    setLoading(true);
    setError("");

    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });

    if (error) {
      setError(error.message);
    }
    setLoading(false);
  };

  // LOGIN FUNCTION
  const handleLogin = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else {
      console.log("Login Successful");
      navigate("/my-account");
    }
    setLoading(false);
  };

  // LOGOUT FUNCTION
  const handleLogout = async () => {
    try {
      setLoading(true);
      setError("");

      const { error } = await supabase.auth.signOut();
      if (error) {
        throw new Error(error.message);
      }

      setSession(null);
      navigate("/");
    } catch (error) {
      setError(error.message);
      console.error("Error logging out:", error.message);
    } finally {
      setLoading(false);
    }
  };

  // UPDATE USER PROFILE
  const updateProfile = async (formData) => {
    try {
      setLoading(true);
      setError("");

      const { data, error } = await supabase
        .from("users")
        .update({
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          address: formData.address,
        })
        .eq("id", session.user.id);

      if (error) {
        throw error;
      }

      console.log("Profile updated successfully:", data);
      alert("Profile updated successfully!");

      // Optionally, update local session data if needed
      setFirstName(formData.firstName); // Update firstName in context
    } catch (error) {
      console.error("Error updating profile:", error.message);
      alert("Failed to update profile. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // CHECK IF USER IS LOGGED IN
  const isLoggedIn = Boolean(session);
  
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        session,
        setSession,
        email,
        setEmail,
        password,
        setPassword,
        firstName,
        setFirstName,
        handleSignup,
        handleLogin,
        handleLogout,
        isLoggedIn,
        handleGoogleSignin,
        error,
        loading,
        updateProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within AuthContextProvider");
  }
  return context;
}
