import React, { createContext, ReactNode, useState } from 'react'


type AuthProviderProps = {
  children: ReactNode;
}

type User = {
  name: string;
}

type AuthContextData = {
  user: User;
  signIn: () => void;
  signOut: () => void;
  loading: boolean;
  token: string;
}
export const AuthContext = createContext({} as AuthContextData)

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User>({} as User)
  const [loading, setLoading] = useState(false)
  const [token, setToken] = useState('')
  const signIn = () => {
    setLoading(true)
    setTimeout(() => {
      setUser({ name: "Bernardo" })
      setToken(String(Math.random()))
    }, 2000)
  }

  const signOut = () => {
    setUser({} as User)
  }

  return (
    <AuthContext.Provider value={{ user, signIn, signOut, loading, token }}>
      {children}
    </AuthContext.Provider>
  )
}