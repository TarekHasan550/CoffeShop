import React, { createContext } from 'react'

export const AuthContext = React.createContext()
// export const AuthContext = createContext(null);


export const AuthProvider = ({ children}) =>{
  const value = {
    user: "thasan550"
  }
  return (
    <AuthContext.Provider value={value}>
      {children}
      </AuthContext.Provider>
  )
}

