import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import StarsCanvas from '../components/StarsCanvas'

export default function ResetPassword() {
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [ready, setReady] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    // Supabase maneja el token de la URL automáticamente
    // Solo verificamos que haya una sesión activa
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) setReady(true)
    })

    // Escuchar el evento de recovery
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event) => {
      if (event === 'PASSWORD_RECOVERY') setReady(true)
    })
    return () => subscription.unsubscribe()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    if (password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres.')
      return
    }
    if (password !== confirm) {
      setError('Las contraseñas no coinciden.')
      return
    }
    setLoading(true)
    const { error } = await supabase.auth.updateUser({ password })
    if (error) {
      setError('No pudimos actualizar la contraseña. Intentá pedir un nuevo link.')
    } else {
      navigate('/')
    }
    setLoading(false)
  }

  if (!ready) {
    return (
      <div className="relative min-h-screen flex items-center justify-center">
        <StarsCanvas />
        <div className="text-luna-gold text-2xl animate-pulse relative z-10">🌙</div>
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
          <p className="text-white/40 text-xs tracking-widest uppercase">Nueva contraseña</p>
        </div>

        <div className="card-luna">
          <div className="label-luna mb-5">
            <span>✦</span> Creá tu nueva contraseña
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-white/50 text-xs mb-1.5 block">Nueva contraseña</label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Mínimo 6 caracteres"
                required
                className="input-luna"
              />
            </div>

            <div>
              <label className="text-white/50 text-xs mb-1.5 block">Confirmá la contraseña</label>
              <input
                type="password"
                value={confirm}
                onChange={e => setConfirm(e.target.value)}
                placeholder="Repetí tu contraseña"
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
              {loading ? 'Guardando...' : 'Guardar nueva contraseña ✦'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
