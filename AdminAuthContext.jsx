import { createContext, useContext, useState } from 'react'

const AdminAuthContext = createContext(null)
const SESSION_KEY = 'noun-heritage-admin-session'
// Mot de passe de démo — à remplacer par une vraie authentification côté serveur avant mise en production.
const ADMIN_PASSWORD = 'foumban2026'

export function AdminAuthProvider({ children }) {
  const [isAuthed, setIsAuthed] = useState(() => sessionStorage.getItem(SESSION_KEY) === 'true')

  function login(password) {
    if (password === ADMIN_PASSWORD) {
      sessionStorage.setItem(SESSION_KEY, 'true')
      setIsAuthed(true)
      return true
    }
    return false
  }

  function logout() {
    sessionStorage.removeItem(SESSION_KEY)
    setIsAuthed(false)
  }

  return (
    <AdminAuthContext.Provider value={{ isAuthed, login, logout }}>
      {children}
    </AdminAuthContext.Provider>
  )
}

export function useAdminAuth() {
  const ctx = useContext(AdminAuthContext)
  if (!ctx) throw new Error('useAdminAuth must be used within AdminAuthProvider')
  return ctx
}
