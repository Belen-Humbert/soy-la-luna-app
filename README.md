# 🌙 Soy La Luna

App web progresiva (PWA) de astrología y bienestar. Muestra la fase lunar del día, arcano diario del Tarot Rider-Waite, rituales energéticos y eventos astronómicos. Construida con React, Vite, Tailwind y Supabase.

---

## ✨ Features

### 🌒 Fase lunar del día
Calcula en tiempo real la fase lunar usando el ciclo sinódico de 29.53 días. Muestra nombre, descripción, energía del día, ritual sugerido, porcentaje de iluminación y día del ciclo lunar. Incluye datos científicos expandibles: distancia exacta en km, velocidad orbital, diámetro aparente, fuerza mareal, días hasta próxima luna llena/nueva y constelación actual.

### 🔭 Dato curioso del día
130+ datos curiosos sobre astronomía y astrología que rotan automáticamente según el día del año, con rigor científico. Cubren luna, planetas, física, historia de la astronomía, mitología y culturas del mundo.

### 🃏 Arcano diario del Tarot
Cada usuaria recibe su propia carta del día (los 78 arcanos del Tarot Rider-Waite) basada en un seed único por usuaria + fecha. Cada carta tiene ilustración SVG inspirada en el Rider-Waite original, palabras clave, descripción y mensaje oráculo. Incluye historial completo guardado en Supabase y dorso ilustrado antes de revelar.

### ✨ Rituales cruzados
Rituales específicos para cada día de la semana según su planeta regente (Luna, Marte, Mercurio, Júpiter, Venus, Saturno, Sol) cruzados con la fase lunar del día. Detecta sinergias especiales cuando hay combinaciones energéticas poderosas.

### 🔭 Eventos astronómicos
Calendario cósmico con lunas llenas y nuevas calculadas en tiempo real con signo zodiacal, eclipses 2025-2026, lluvias de meteoros anuales y superlunas. Cada evento es expandible con descripción completa, visibilidad y duración. Incluye imagen del día de la NASA (APOD) con caché diario.

### 🔔 Notificaciones + PWA
Instalable en Android e iOS como app nativa. Notificación diaria con arcano y fase lunar a la hora que cada usuaria elija. Alertas de eventos cósmicos importantes un día antes.

### 🔐 Autenticación
Registro e inicio de sesión con email/contraseña y Google OAuth via Supabase Auth. Recuperación de contraseña por email. Historial de tarot personal por usuaria.

### 🧭 Navbar inteligente
Barra de navegación fija con links a las 4 secciones principales (Luna, Tarot, Rituales, Eventos). Se vuelve transparente al scrollear y resalta automáticamente la sección activa.

---

## 🛠 Stack tecnológico

| Capa | Tecnología |
|------|-----------|
| Frontend | React 18 + Vite |
| Estilos | Tailwind CSS |
| Auth + DB | Supabase |
| Routing | React Router DOM |
| PWA | vite-plugin-pwa + Workbox |
| Deploy | Vercel |
| API externa | NASA APOD |
| OAuth | Google |

---

## 📁 Estructura del proyecto

```
soy-la-luna/
├── public/
│   ├── moon-192.png          # Ícono PWA con constelaciones familiares
│   └── moon-512.png
├── src/
│   ├── components/
│   │   ├── StarsCanvas.jsx         # Fondo animado con estrellas y constelaciones
│   │   ├── ProtectedRoute.jsx      # Ruta protegida
│   │   ├── Navbar.jsx              # Navbar con scroll transparente
│   │   ├── MoonSVG.jsx             # Luna SVG según fase
│   │   ├── MoonPhaseCard.jsx       # Card de fase lunar + datos científicos
│   │   ├── DatoCurioso.jsx         # Dato curioso del día
│   │   ├── TarotCardSVG.jsx        # Ilustraciones SVG de los 78 arcanos
│   │   ├── TarotDailyCard.jsx      # Card de arcano diario + historial
│   │   ├── RitualesCard.jsx        # Card de rituales cruzados
│   │   ├── EventosAstronomicos.jsx # Calendario cósmico + NASA APOD
│   │   ├── NotificacionesConfig.jsx # Panel de notificaciones
│   │   └── Footer.jsx              # Footer con info de contacto
│   ├── hooks/
│   │   ├── useAuth.jsx             # Context y hook de autenticación
│   │   ├── useTarotDaily.js        # Hook de arcano diario con Supabase
│   │   └── useNasaApod.js          # Hook NASA APOD con caché diario
│   ├── lib/
│   │   ├── supabase.js             # Cliente de Supabase
│   │   ├── moonPhase.js            # Cálculo astronómico real
│   │   ├── tarotCards.js           # Los 78 arcanos con mensajes
│   │   ├── rituales.js             # Rituales por día y fase lunar
│   │   ├── datosCuriosos.js        # 130+ datos de astronomía y astrología
│   │   ├── eventosAstronomicos.js  # Eclipses, meteoros, superlunas
│   │   └── notifications.js        # Servicio de notificaciones PWA
│   ├── pages/
│   │   ├── Login.jsx               # Login con email y Google
│   │   ├── Register.jsx            # Registro con email y Google
│   │   ├── ForgotPassword.jsx      # Recuperar contraseña
│   │   ├── ResetPassword.jsx       # Nueva contraseña
│   │   └── Home.jsx                # Dashboard principal
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .env.example
├── vercel.json
├── tailwind.config.js
└── vite.config.js
```

---

## 🚀 Setup local

### 1. Instalar dependencias
```bash
npm install
```

### 2. Variables de entorno
```bash
cp .env.example .env.local
```

Completar `.env.local`:
```env
VITE_SUPABASE_URL=https://tu-proyecto.supabase.co
VITE_SUPABASE_ANON_KEY=tu-anon-key
VITE_NASA_API_KEY=tu-nasa-key  # gratis en api.nasa.gov
```

### 3. Configurar Supabase

En el SQL Editor de Supabase:
```sql
CREATE TABLE tarot_history (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  card_index INTEGER NOT NULL,
  card_name TEXT NOT NULL,
  drawn_date DATE NOT NULL DEFAULT CURRENT_DATE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, drawn_date)
);

ALTER TABLE tarot_history ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Ver historial propio"
  ON tarot_history FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Insertar carta propia"
  ON tarot_history FOR INSERT WITH CHECK (auth.uid() = user_id);
```

### 4. Correr en desarrollo
```bash
npm run dev
```

---

## 🌐 Deploy en Vercel

1. Subir el proyecto a GitHub
2. Ir a [vercel.com](https://vercel.com) → New Project → importar el repo
3. Agregar variables de entorno: `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`, `VITE_NASA_API_KEY`
4. Deploy

Cada `git push` redeploya automáticamente.

---

## 📱 Instalar como app (PWA)

**Android (Chrome):** Menú → "Agregar a pantalla de inicio"

**iPhone (Safari):** Compartir → "Agregar a pantalla de inicio"

---

## 🎨 Paleta de colores

| Variable | Hex | Uso |
|----------|-----|-----|
| `luna-bg` | `#0d1117` | Fondo principal |
| `luna-gold` | `#c9a84c` | Etiquetas, íconos, detalles |
| `luna-rose` | `#e8a4b0` | Títulos principales |

---

## Variables de entorno

```env
VITE_SUPABASE_URL=https://tu-proyecto.supabase.co
VITE_SUPABASE_ANON_KEY=tu-anon-key
VITE_NASA_API_KEY=DEMO_KEY
```

---

*Hecho con intención ✦ por Belén Humbert*
