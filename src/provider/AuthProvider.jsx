import React, { createContext, useEffect, useState } from 'react';
import app from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut,updateProfile } from 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';


export const AuthContext = createContext();


const  googleprovider = new GoogleAuthProvider();
const signInWithGoogle = () => {
    return signInWithPopup(auth, googleprovider);
};


const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const[user,setUser] = useState(null);

    // console.log(user)

    const createUser=(email, password) =>{
        return createUserWithEmailAndPassword(auth,email,password);
    };

    const signIn =(email,password) =>{
        return signInWithEmailAndPassword(auth,email,password);
    };

    const logOut=()=>{

        return signOut(auth);
    };

     const updateUserProfile = (name, photoURL) => {
    if (auth.currentUser) {
      return updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photoURL,
      });
    }
    return Promise.reject(new Error("No user is signed in"));
  };

    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth,(currentUser) =>{
            setUser(currentUser);
        });
        return ()=>{
            unsubscribe();
        };
        
    },[]);

    const authData = {
        user,
        setUser,
        createUser,
        logOut,
        signIn,
        signInWithGoogle,
        updateUserProfile,
    };

   


    return <AuthContext.Provider value={authData}>
        {children}
    </AuthContext.Provider> ;
};

export default AuthProvider;