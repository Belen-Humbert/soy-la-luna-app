import { useState } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import StarsCanvas from '../components/StarsCanvas'

export default function ForgotPassword() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    })
    if (error) {
      setError('No pudimos enviar el email. Verificá que sea correcto.')
    } else {
      setSent(true)
    }
    setLoading(false)
  }

  if (sent) {
    return (
      <div className="relative min-h-screen flex items-center justify-center px-5">
        <StarsCanvas />
        <div className="relative z-10 w-full max-w-sm text-center animate-fade-up">
          <div className="text-5xl mb-4">🌙</div>
          <h2 className="font-serif italic text-luna-rose text-2xl mb-3">
            Revisá tu email
          </h2>
          <p className="text-white/50 text-sm mb-6 leading-relaxed">
            Te enviamos un link para restablecer tu contraseña a <span className="text-luna-gold">{email}</span>. Revisá también la carpeta de spam.
          </p>
          <Link to="/login" className="btn-secondary inline-block text-center">
            Volver al inicio
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center px-5">
      <StarsCanvas />
      <div className="relative z-10 w-full max-w-sm animate-fade-up">
        <div className="text-center mb-10">
          <div className="text-4xl mb-3">🌙</div>
          <h1 className="font-serif italic text-luna-rose text-4xl mb-1">Soy La Luna</h1>
          <p className="text-white/40 text-xs tracking-widest uppercase">Recuperar contraseña</p>
        </div>

        <div className="card-luna">
          <div className="label-luna mb-2">
            <span>✦</span> Recuperar contraseña
          </div>
          <p className="text-white/40 text-xs mb-5 leading-relaxed">
            Ingresá tu email y te mandamos un link para crear una nueva contraseña.
          </p>

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

            {error && (
              <p className="text-red-400/80 text-xs text-center bg-red-400/10 rounded-lg py-2 px-3">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="btn-primary disabled:opacity-50"
            >
              {loading ? 'Enviando...' : 'Enviar link ✦'}
            </button>
          </form>

          <div className="mt-5 pt-4 border-t border-white/5 text-center">
            <Link to="/login" className="text-luna-gold hover:text-luna-gold-light text-xs transition-colors">
              ← Volver al login
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
