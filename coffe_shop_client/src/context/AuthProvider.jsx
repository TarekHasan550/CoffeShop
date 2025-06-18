import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { createContext } from 'react'
import { auth } from '../firebase/firebase.init'

export const AuthContext = React.createContext()
// export const AuthContext = createContext(null);


export const AuthProvider = ({ children}) =>{
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth,email, password)
  }
  const value = {
    createUser
  }
  return (
    <AuthContext.Provider value={value}>
      {children}
      </AuthContext.Provider>
  )
}

