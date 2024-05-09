import React, { createContext, useContext, useEffect, useState } from 'react'
// import { GoogleAuthProvider } from 'firebase/auth/cordova'
import { GoogleAuthProvider, onAuthStateChanged, signInWithRedirect } from 'firebase/auth'
import { auth } from '../Firebase';
const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [currentUser, setCurrentUser] = useState(null)
  const [loading, setLoading] = useState(false)

  // sign in iwth google
  const signInWithGoogle = () => {
      const provider = new GoogleAuthProvider();
      signInWithRedirect(auth, provider);
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
      setLoading(false)
    });
    return unsubscribe;
  }, [])
  const value = {
    currentUser, setCurrentUser, signInWithGoogle
  }
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

export const UserAuth = () => {
  return useContext(AuthContext)
}
