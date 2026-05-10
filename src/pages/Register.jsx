import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { supabase } from '../lib/supabase'
import StarsCanvas from '../components/StarsCanvas'

export default function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)
  const [loadingGoogle, setLoadingGoogle] = useState(false)
  const { signUp } = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    if (password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres.')
      return
    }
    setLoading(true)
    const { error } = await signUp(email, password, name)
    if (error) {
      setError(error.message || 'Ocurrió un error al registrarte.')
    } else {
      setSuccess(true)
    }
    setLoading(false)
  }

  const handleGoogle = async () => {
    setLoadingGoogle(true)
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/`,
      },
    })
    if (error) {
      setError('No pudimos conectar con Google. Intentá de nuevo.')
      setLoadingGoogle(false)
    }
  }

  if (success) {
    return (
      <div className="relative min-h-screen flex items-center justify-center px-5">
        <StarsCanvas />
        <div className="relative z-10 w-full max-w-sm text-center animate-fade-up">
          <div className="text-5xl mb-4">🌙</div>
          <h2 className="font-serif italic text-luna-rose text-2xl mb-3">¡La luna te da la bienvenida!</h2>
          <p className="text-white/50 text-sm mb-6">
            Te enviamos un email de confirmación. Revisá tu bandeja de entrada y activá tu cuenta.
          </p>
          <Link to="/login" className="btn-secondary inline-block text-center">
            Ir a iniciar sesión
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center px-5 py-10">
      <StarsCanvas />

      <div className="relative z-10 w-full max-w-sm animate-fade-up">
        <div className="text-center mb-10">
          <div className="text-4xl mb-3">🌙</div>
          <h1 className="font-serif italic text-luna-rose text-4xl mb-1">Soy La Luna</h1>
          <p className="text-white/40 text-xs tracking-widest uppercase">La luna nos guía</p>
        </div>

        <div className="card-luna">
          <div className="label-luna mb-5">
            <span>✦</span> Crear cuenta
          </div>

          {/* Botón Google */}
          <button
            onClick={handleGoogle}
            disabled={loadingGoogle}
            className="w-full flex items-center justify-center gap-3 py-3 px-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-200 mb-4 disabled:opacity-50"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M17.64 9.205c0-.639-.057-1.252-.164-1.841H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4"/>
              <path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z" fill="#34A853"/>
              <path d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05"/>
              <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335"/>
            </svg>
            <span className="text-white/70 text-sm">
              {loadingGoogle ? 'Conectando...' : 'Registrarse con Google'}
            </span>
          </button>

          {/* Separador */}
          <div className="flex items-center gap-3 mb-4">
            <div className="flex-1 h-px bg-white/10"/>
            <span className="text-white/25 text-xs">o con email</span>
            <div className="flex-1 h-px bg-white/10"/>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-white/50 text-xs mb-1.5 block">Nombre</label>
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="¿Cómo te llamás?"
                required
                className="input-luna"
              />
            </div>

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
                placeholder="Mínimo 6 caracteres"
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
              {loading ? 'Creando tu cuenta...' : 'Comenzar mi viaje ✦'}
            </button>
          </form>

          <div className="mt-5 pt-4 border-t border-white/5 text-center">
            <p className="text-white/30 text-xs">
              ¿Ya tenés cuenta?{' '}
              <Link to="/login" className="text-luna-gold hover:text-luna-gold-light transition-colors">
                Iniciá sesión
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
