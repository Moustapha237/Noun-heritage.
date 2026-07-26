import { AdminAuthProvider, useAdminAuth } from '../context/AdminAuthContext.jsx'
import AdminLogin from './AdminLogin.jsx'
import AdminDashboard from './AdminDashboard.jsx'

function AdminGateInner() {
  const { isAuthed } = useAdminAuth()
  return isAuthed ? <AdminDashboard /> : <AdminLogin />
}

export default function AdminGate() {
  return (
    <AdminAuthProvider>
      <AdminGateInner />
    </AdminAuthProvider>
  )
}
