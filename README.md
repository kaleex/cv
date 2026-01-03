# Curriculum Web

Aplicación web fullstack para mostrar tu curriculum/portafolio personal.

## 🛠 Tech Stack

- **Backend**: Python con FastAPI
- **Frontend**: React con TypeScript
- **Build Tool**: Vite

## 📁 Estructura del Proyecto

```
curriweb/
├── backend/
│   ├── main.py           # API FastAPI
│   └── requirements.txt  # Dependencias Python
├── frontend/
│   ├── src/
│   │   ├── App.tsx       # Componente principal
│   │   ├── App.css       # Estilos
│   │   ├── main.tsx      # Entry point
│   │   └── index.css     # Estilos globales
│   ├── index.html
│   ├── package.json
│   └── vite.config.ts
└── README.md
```

## 🚀 Inicio Rápido

### Backend

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

El servidor API estará disponible en `http://localhost:8000`

### Frontend

```bash
cd frontend
npm install
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

## 📝 Personalización

Edita los datos de tu curriculum en `backend/main.py` en la variable `curriculum_data`.

## 🔗 API Endpoints

- `GET /api/curriculum` - Obtener curriculum completo
- `GET /api/personal-info` - Obtener información personal
- `GET /api/experience` - Obtener experiencia laboral
- `GET /api/education` - Obtener educación
- `GET /api/skills` - Obtener habilidades
