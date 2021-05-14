import React, { useContext, useState, useEffect } from "react"
import  firebaseConfig  from "./firebaseConfig"

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)

  function signup(email, password) {
    return firebaseConfig.createUserWithEmailAndPassword(email, password)
  }

  function login(email, password) {
    return firebaseConfig.signInWithEmailAndPassword(email, password)
  }

  function chat() {
    return firebaseConfig.signOut()
  }

  function logout() {
    return firebaseConfig.signOut()
  }

  useEffect(() => {
    const unsubscribe = firebaseConfig.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    login,
    signup,
    chat,
    logout,
   
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}