import { Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <div className="min-h-screen bg-luna-bg flex items-center justify-center">
        <div className="text-luna-gold text-2xl animate-pulse">🌙</div>
      </div>
    )
  }

  return user ? children : <Navigate to="/login" replace />
}
