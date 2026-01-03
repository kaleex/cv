Frontend - React + TypeScript
=============================

El frontend es una **SPA** construida con React 18, TypeScript y Vite.

Estructura del Proyecto
-----------------------

::

    frontend/
    ├── index.html            # HTML entry point
    ├── package.json          # Dependencias npm
    ├── vite.config.ts        # Configuración Vite
    ├── tsconfig.json         # Configuración TypeScript
    ├── .env                  # Variables de entorno (no commitear)
    ├── .env.example          # Plantilla de variables
    ├── public/               # Assets estáticos
    └── src/
        ├── main.tsx          # Entry point React
        ├── App.tsx           # Componente principal + Home
        ├── App.css           # Estilos App
        ├── index.css         # Estilos globales
        ├── components/
        │   ├── Navbar.tsx    # Barra de navegación
        │   └── Navbar.css
        ├── pages/
        │   ├── Skills.tsx    # Página de habilidades
        │   ├── Skills.css
        │   ├── Contact.tsx   # Página de contacto
        │   └── Contact.css
        └── utils/
            └── analytics.ts  # Google Analytics 4

Configuración
-------------

Dependencias Principales
^^^^^^^^^^^^^^^^^^^^^^^^

.. code-block:: json

    {
      "dependencies": {
        "react": "^18.2.0",
        "react-dom": "^18.2.0",
        "react-router-dom": "^6.x"
      },
      "devDependencies": {
        "@vitejs/plugin-react": "^4.x",
        "typescript": "^5.x",
        "vite": "^5.x"
      }
    }

Proxy de API
^^^^^^^^^^^^

Configurado en ``vite.config.ts``:

.. code-block:: typescript

    export default defineConfig({
      plugins: [react()],
      server: {
        proxy: {
          '/api': {
            target: 'http://localhost:8000',
            changeOrigin: true
          }
        }
      }
    })

Componentes
-----------

Navbar
^^^^^^

Barra de navegación fija con enlaces a las páginas principales.

.. code-block:: tsx

    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/skills">Skills</Link>
      <Link to="/contact">Contact</Link>
    </nav>

Páginas
-------

Home (/)
^^^^^^^^

Página principal con:

- Hero section
- Approach
- Lakehouse Architecture
- Medallion layers
- Governance & Security
- CI/CD
- Journey
- What I Bring
- CTA

Skills (/skills)
^^^^^^^^^^^^^^^^

6 categorías de habilidades con barras de progreso:

1. Cloud & Infrastructure
2. Data Platforms
3. Programming
4. Data Engineering
5. DevOps & MLOps
6. Soft Skills

Contact (/contact)
^^^^^^^^^^^^^^^^^^

Información de contacto con:

- Email
- Teléfono
- LinkedIn
- GitHub

Flujo de Navegación
-------------------

.. uml:: 05_sequence_navigation.puml
