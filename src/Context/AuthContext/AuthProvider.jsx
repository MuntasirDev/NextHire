import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../../Firebase/Firebase.init";
import axios from "axios";

const googleAuthProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  // --- BASE URL ---
  const API_BASE_URL = "https://next-hire-server-steel.vercel.app";

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const SignInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signOutUser = () => {
    setLoading(true);
    return signOut(auth)
      .then(() => {
        return axios.post(`${API_BASE_URL}/logout`, {}, { withCredentials: true });
      })
      .then(() => {
        console.log("Logged out and cookie cleared");
        setUser(null);
      })
      .catch((err) => {
        console.error("Logout error", err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleAuthProvider);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, async (currentUser) => {
      console.log("Current User State Change:", currentUser?.email);

      if (currentUser?.email) {
        const userData = { email: currentUser.email };

        try {
          // JWT টোকেন জেনারেট এবং কুকি সেট হওয়ার জন্য অপেক্ষা করা
          const res = await axios.post(`${API_BASE_URL}/jwt`, userData, {
            withCredentials: true,
          });
          console.log("Cookie response from server:", res.data);
          setUser(currentUser);
        } catch (error) {
          console.error("JWT Error:", error);
          setUser(currentUser);
        } finally {
          setLoading(false);
        }
      } else {
        // ইউজার না থাকলে লগআউট করে কুকি ক্লিয়ার করা
        try {
          await axios.post(`${API_BASE_URL}/logout`, {}, { withCredentials: true });
        } catch (err) {
          console.error("Logout error on auth change", err);
        } finally {
          setUser(null);
          setLoading(false);
        }
      }
    });

    return () => unSubscribe();
  }, []);

  const authInfo = {
    loading,
    user,
    createUser,
    SignInUser,
    signInWithGoogle,
    signOutUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;