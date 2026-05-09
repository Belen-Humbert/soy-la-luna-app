# 🌙 Soy La Luna

**La luna nos guía** — fases lunares, tarot diario, rituales y eventos astronómicos.

App web progresiva (PWA) instalable en celular, construida con React + Vite + Supabase.

---

##  Features

### 🌒 Fase lunar del día
Calcula en tiempo real la fase lunar usando el ciclo sinódico de 29.53 días. Muestra nombre, descripción, energía del día, ritual sugerido, porcentaje de iluminación y día del ciclo lunar.

### 🃏 Arcano diario del Tarot
Cada usuaria recibe su propia carta del día (los 78 arcanos del Tarot Rider-Waite) basada en un seed único por usuaria + fecha. La carta se revela con animación, muestra palabras clave, descripción y mensaje oráculo. Incluye historial completo guardado en Supabase.

### ✨ Rituales cruzados
Rituales específicos para cada día de la semana según su planeta regente (Luna, Marte, Mercurio, Júpiter, Venus, Saturno, Sol) cruzados con la fase lunar del día. Detecta sinergias especiales cuando hay combinaciones energéticas poderosas.

### 🔭 Eventos astronómicos
Calendario cósmico con lunas llenas y nuevas calculadas en tiempo real con signo zodiacal, eclipses 2025-2026, lluvias de meteoros anuales y superlunas. Incluye imagen del día de la NASA (APOD).

### 🔔 Notificaciones + PWA
Instalable en Android e iOS como app nativa. Notificación diaria con arcano y fase lunar a la hora que cada usuaria elija. Alertas de eventos cósmicos importantes un día antes.

### 🔐 Autenticación
Registro e inicio de sesión con email y contraseña via Supabase Auth. Historial de tarot personal por usuaria.

---

##  Stack tecnológico

| Capa | Tecnología |
|------|-----------|
| Frontend | React 18 + Vite |
| Estilos | Tailwind CSS |
| Auth + DB | Supabase |
| Routing | React Router DOM |
| PWA | vite-plugin-pwa + Workbox |
| Deploy | Vercel |
| API externa | NASA APOD |

---

##  Estructura del proyecto

```
soy-la-luna/
├── public/
│   ├── moon-192.png          # Ícono PWA 192x192
│   └── moon-512.png          # Ícono PWA 512x512
├── src/
│   ├── components/
│   │   ├── StarsCanvas.jsx         # Fondo animado con estrellas y constelaciones
│   │   ├── ProtectedRoute.jsx      # Ruta protegida (requiere auth)
│   │   ├── MoonSVG.jsx             # Luna SVG dibujada según fase
│   │   ├── MoonPhaseCard.jsx       # Card de fase lunar del día
│   │   ├── TarotDailyCard.jsx      # Card de arcano diario + historial
│   │   ├── RitualesCard.jsx        # Card de rituales cruzados
│   │   ├── EventosAstronomicos.jsx # Calendario cósmico + NASA APOD
│   │   └── NotificacionesConfig.jsx # Panel de configuración de notificaciones
│   ├── hooks/
│   │   ├── useAuth.jsx             # Context y hook de autenticación
│   │   ├── useTarotDaily.js        # Hook de arcano diario con Supabase
│   │   └── useNasaApod.js          # Hook para NASA APOD API
│   ├── lib/
│   │   ├── supabase.js             # Cliente de Supabase
│   │   ├── moonPhase.js            # Cálculo astronómico de fases lunares
│   │   ├── tarotCards.js           # Los 78 arcanos con mensajes
│   │   ├── rituales.js             # Rituales por día y fase lunar
│   │   ├── eventosAstronomicos.js  # Eclipses, meteoros, superlunas
│   │   └── notifications.js        # Servicio de notificaciones PWA
│   ├── pages/
│   │   ├── Login.jsx               # Pantalla de login
│   │   ├── Register.jsx            # Pantalla de registro
│   │   └── Home.jsx                # Dashboard principal
│   ├── App.jsx                     # Router principal
│   ├── main.jsx                    # Entry point
│   └── index.css                   # Estilos globales + Tailwind
├── .env.example                    # Template de variables de entorno
├── vercel.json                     # Configuración de deploy
├── tailwind.config.js              # Paleta de colores Soy La Luna
└── vite.config.js                  # Config Vite + PWA
```

---

##  Setup local

### Requisitos
- Node.js v20+
- Cuenta en [supabase.com](https://supabase.com) (gratis)
- API key de NASA (opcional, gratis en [api.nasa.gov](https://api.nasa.gov))

### 1. Instalar dependencias

```bash
npm install
```

### 2. Configurar variables de entorno

```bash
cp .env.example .env.local
```

Completar `.env.local` con tus valores:

```env
VITE_SUPABASE_URL=https://tu-proyecto.supabase.co
VITE_SUPABASE_ANON_KEY=tu-anon-key
VITE_NASA_API_KEY=DEMO_KEY  # o tu key propia
```

### 3. Configurar Supabase

En el **SQL Editor** de tu proyecto de Supabase, ejecutar:

```sql
-- Tabla de historial de tarot por usuaria
CREATE TABLE tarot_history (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  card_index INTEGER NOT NULL,
  card_name TEXT NOT NULL,
  drawn_date DATE NOT NULL DEFAULT CURRENT_DATE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, drawn_date)
);

-- Seguridad (Row Level Security)
ALTER TABLE tarot_history ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Ver historial propio"
  ON tarot_history FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Insertar carta propia"
  ON tarot_history FOR INSERT
  WITH CHECK (auth.uid() = user_id);
```

### 4. Correr en desarrollo

```bash
npm run dev
```

La app corre en `http://localhost:5173`

---

##  Deploy en Vercel

### Primera vez

1. Subir el proyecto a GitHub
2. Ir a [vercel.com](https://vercel.com) → New Project → importar el repo
3. Agregar las variables de entorno en Vercel:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
   - `VITE_NASA_API_KEY`
4. Click en Deploy

### Actualizaciones

Cada `git push` redeploya automáticamente:

```bash
git add .
git commit -m "descripción del cambio"
git push
```

---

##  Instalar como app (PWA)

**Android (Chrome):**
1. Abrir la URL en Chrome
2. Menú (tres puntitos) → "Agregar a pantalla de inicio"

**iPhone (Safari):**
1. Abrir la URL en Safari
2. Botón compartir → "Agregar a pantalla de inicio"

---

##  Paleta de colores

| Variable | Hex | Uso |
|----------|-----|-----|
| `luna-bg` | `#0d1117` | Fondo principal |
| `luna-surface` | `#1a2030` | Superficies |
| `luna-card` | `#1e2838` | Cards |
| `luna-gold` | `#c9a84c` | Etiquetas, íconos, detalles |
| `luna-rose` | `#e8a4b0` | Títulos principales |

---

##  Contenido

### Tarot
Los 78 arcanos del Tarot Rider-Waite en español: 22 arcanos mayores (El Loco al Mundo) y 56 menores (Copas, Oros, Espadas y Bastos). Cada carta tiene nombre, numeral, emoji, palabras clave, descripción y mensaje oráculo.

### Rituales
7 días de la semana con su planeta regente y 4 rituales cada uno. 8 fases lunares con rituales específicos. Sistema de sinergias que detecta combinaciones energéticas especiales entre fase y día.

### Eventos astronómicos
Eclipses 2025-2026, lluvias de meteoros anuales (Perseidas, Gemínidas, etc.), superlunas y microlunas, lunas llenas y nuevas calculadas en tiempo real con signo zodiacal.

---

## Variables de entorno

```env
# Supabase (requerido)
VITE_SUPABASE_URL=https://tu-proyecto.supabase.co
VITE_SUPABASE_ANON_KEY=tu-anon-key

# NASA API (opcional — sin key usa DEMO_KEY con límite de 30 req/hora)
VITE_NASA_API_KEY=DEMO_KEY
```

---

*Hecho con amor ✦ por Belén Humbert*
