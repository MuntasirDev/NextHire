import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { 
    createUserWithEmailAndPassword, 
    GoogleAuthProvider, 
    onAuthStateChanged, 
    signInWithEmailAndPassword, 
    signInWithPopup, 
    signOut 
} from 'firebase/auth';
import { auth } from '../../Firebase/Firebase.init';
import axios from 'axios';

const googleAuthProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
      
    // Register
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // SignIn
    const SignInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

   
    const signOutUser = () => {
        setLoading(true);
        return signOut(auth).then(() => {
            
            axios.post('http://localhost:3000/logout', {}, { withCredentials: true })
                .then(() => {
                    console.log("Logged out and cookie cleared");
                    setUser(null);
                    setLoading(false);
                });
        });
    }

    // Google SignIn
    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleAuthProvider);
    }

    // Auth State Observer
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            
            if (currentUser?.email) {
                const userData = { email: currentUser.email };
                
               
                axios.post('http://localhost:3000/jwt', userData, { withCredentials: true })
                    .then((res) => {
                        console.log("Cookie response from server:", res.data);
                        setLoading(false); 
                    })
                    .catch((error) => {
                        console.log("JWT Error:", error);
                        setLoading(false);
                    });
            } else {
               
                setLoading(false);
            }
            
            console.log('Current User Status:', currentUser);
        });

        return () => {
            unSubscribe();
        };
    }, []);

    const authInfo = {
        loading,
        user,
        createUser,
        SignInUser,
        signInWithGoogle,
        signOutUser,
    }

    return (
        <AuthContext.Provider value={authInfo}> 
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;