"use client"

import React, { ReactNode, useContext, useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { auth } from "@/firebase/firebaseApp"
import {
  browserLocalPersistence,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  setPersistence,
  signInWithEmailAndPassword,
  signOut,
  User,
  UserCredential,
} from "firebase/auth"

export interface AuthContextProps {
  currentUser: User | null
  loading: boolean
  setRedirect?(path: string): void
  login?(info: LoginInfo): Promise<UserCredential>
  signup?(info: SignupInfo): Promise<UserCredential>
  logout?(): Promise<void>
}

const AuthContext = React.createContext<AuthContextProps>({
  currentUser: null,
  loading: false,
})

export function useAuth() {
  return useContext(AuthContext)
}

export type SignupInfo = {
  username: string
  email: string
  password: string
}

export type LoginInfo = {
  email: string
  password: string
}

interface AuthProviderProps {
  children?: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [currentUser, setCurrentUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [redirect, setRedirect] = useState<null | string>(null)
  const router = useRouter()

  async function signup(info: SignupInfo): Promise<UserCredential> {
    await setPersistence(auth, browserLocalPersistence)
    return createUserWithEmailAndPassword(auth, info.email, info.password)
  }

  async function login(info: LoginInfo): Promise<UserCredential> {
    await setPersistence(auth, browserLocalPersistence)
    return signInWithEmailAndPassword(auth, info.email, info.password)
  }

  function logout(): Promise<void> {
    return signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user)
      setLoading(false)
      if (user && redirect) router.replace(redirect)
    })
    return unsubscribe
  }, [redirect, router])

  const value = {
    currentUser,
    loading,
    setRedirect,
    login,
    signup,
    logout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
