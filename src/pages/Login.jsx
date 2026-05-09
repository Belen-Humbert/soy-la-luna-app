import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import StarsCanvas from '../components/StarsCanvas'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { signIn } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    const { error } = await signIn(email, password)
    if (error) {
      setError('Email o contraseña incorrectos.')
    } else {
      navigate('/')
    }
    setLoading(false)
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center px-5">
      <StarsCanvas />

      <div className="relative z-10 w-full max-w-sm animate-fade-up">
        {/* Logo */}
        <div className="text-center mb-10">
          <div className="text-4xl mb-3">🌙</div>
          <h1 className="font-serif italic text-luna-rose text-4xl mb-1">Soy La Luna</h1>
          <p className="text-white/40 text-xs tracking-widest uppercase">La luna nos guía</p>
        </div>

        {/* Card */}
        <div className="card-luna">
          <div className="label-luna mb-5">
            <span>✦</span> Iniciar sesión
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-white/50 text-xs mb-1.5 block">Email</label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="tu@email.com"
                required
                className="input-luna"
              />
            </div>

            <div>
              <label className="text-white/50 text-xs mb-1.5 block">Contraseña</label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="input-luna"
              />
            </div>

            {error && (
              <p className="text-red-400/80 text-xs text-center bg-red-400/10 rounded-lg py-2 px-3">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="btn-primary mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Entrando...' : 'Entrar ✦'}
            </button>
          </form>

          <div className="mt-5 pt-4 border-t border-white/5 text-center">
            <p className="text-white/30 text-xs">
              ¿No tenés cuenta?{' '}
              <Link to="/register" className="text-luna-gold hover:text-luna-gold-light transition-colors">
                Registrate
              </Link>
            </p>
          </div>
        </div>

        <p className="text-center text-white/15 text-[10px] mt-6 tracking-wider">
          Lecturas conscientes para momentos de claridad
        </p>
      </div>
    </div>
  )
}
