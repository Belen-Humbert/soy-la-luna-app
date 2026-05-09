# 🌙 Soy La Luna

Tu cosmos personal — fases lunares, tarot diario y rituales.

## Stack

- **React + Vite** — frontend
- **Tailwind CSS** — estilos
- **Supabase** — autenticación y base de datos
- **React Router** — navegación

## Cómo arrancar

### 1. Instalar dependencias

```bash
npm install
```

### 2. Configurar Supabase

1. Entrá a [supabase.com](https://supabase.com) y creá un proyecto nuevo
2. Andá a **Settings → API**
3. Copiá el archivo `.env.example` como `.env.local`:

```bash
cp .env.example .env.local
```

4. Pegá tu **Project URL** y **anon key** en `.env.local`

### 3. Configurar la base de datos en Supabase

En el SQL Editor de Supabase, ejecutá:

```sql
-- Tabla de arcanos diarios por usuaria
CREATE TABLE tarot_history (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  card_index INTEGER NOT NULL,        -- 0 a 77 (los 78 arcanos)
  card_name TEXT NOT NULL,
  drawn_date DATE NOT NULL DEFAULT CURRENT_DATE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, drawn_date)         -- una carta por día por usuaria
);

-- Seguridad: solo cada usuaria ve sus propias cartas
ALTER TABLE tarot_history ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Usuarias ven su propio historial"
  ON tarot_history FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Usuarias insertan su propia carta"
  ON tarot_history FOR INSERT
  WITH CHECK (auth.uid() = user_id);
```

### 4. Correr en desarrollo

```bash
npm run dev
```

La app va a estar en `http://localhost:5173`

### 5. Deploy en Vercel (opcional)

```bash
npm install -g vercel
vercel
```

Acordate de agregar las variables de entorno en el dashboard de Vercel.

## Estructura del proyecto

```
src/
├── components/
│   ├── StarsCanvas.jsx     # Fondo animado con estrellas y constelaciones
│   └── ProtectedRoute.jsx  # Ruta protegida (requiere auth)
├── hooks/
│   └── useAuth.jsx         # Context y hook de autenticación
├── lib/
│   └── supabase.js         # Cliente de Supabase
├── pages/
│   ├── Login.jsx           # Pantalla de login
│   ├── Register.jsx        # Pantalla de registro
│   └── Home.jsx            # Dashboard principal (en construcción)
├── App.jsx                 # Router principal
├── main.jsx                # Entry point
└── index.css               # Estilos globales + Tailwind
```

## Features en desarrollo

- [x] Base del proyecto + autenticación
- [ ] Fase lunar del día
- [ ] Arcano diario personal + historial
- [ ] Rituales cruzados con fase lunar
- [ ] Eventos astronómicos (NASA API)
- [ ] Notificaciones diarias
```
