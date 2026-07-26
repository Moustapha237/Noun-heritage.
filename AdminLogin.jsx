import { useState } from 'react'
import { Lock } from 'lucide-react'
import { useAdminAuth } from '../context/AdminAuthContext.jsx'
import './Admin.css'

export default function AdminLogin() {
  const { login } = useAdminAuth()
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    const ok = login(password)
    if (!ok) setError(true)
  }

  return (
    <div className="container admin-login-page">
      <form className="admin-login-card" onSubmit={handleSubmit}>
        <Lock size={22} />
        <h1>Espace administrateur</h1>
        <p>Connectez-vous pour gérer le catalogue Noun Héritage.</p>
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
            setError(false)
          }}
          autoFocus
        />
        {error && <span className="admin-login-error">Mot de passe incorrect.</span>}
        <button type="submit" className="btn btn-primary">
          Se connecter
        </button>
      </form>
    </div>
  )
}
