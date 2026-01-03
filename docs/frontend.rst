Frontend - React + TypeScript
=============================

El frontend es una **SPA estática** construida con React 18, TypeScript y Vite,
desplegada en Cloudflare Workers.

Estructura del Proyecto
-----------------------

::

    frontend/
    ├── index.html            # HTML entry point
    ├── package.json          # Dependencias npm
    ├── vite.config.ts        # Configuración Vite
    ├── tsconfig.json         # Configuración TypeScript
    ├── wrangler.jsonc        # Configuración Cloudflare Workers
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
        ├── data/
        │   └── portfolio.ts  # Datos estáticos del portfolio
        └── utils/
            └── analytics.ts  # Logging en desarrollo

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
        "vite": "^5.x",
        "wrangler": "^4.x"
      }
    }

Datos Estáticos
^^^^^^^^^^^^^^^

Todos los datos del portfolio están en ``src/data/portfolio.ts``:

.. code-block:: typescript

    // Importar datos en componentes
    import * as portfolio from './data/portfolio'
    
    // Usar directamente
    <h1>{portfolio.personalInfo.name}</h1>
    <p>{portfolio.hero.headline}</p>

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

Build y Despliegue
------------------

.. code-block:: bash

    # Build de producción
    npm run build
    
    # Desplegar a Cloudflare Workers
    npx wrangler deploy
