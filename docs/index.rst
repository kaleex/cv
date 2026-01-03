Curriculum Web - Documentación
==============================

Bienvenido a la documentación del proyecto **Curriculum Web** de Alejandro Quilez Asensio.

Esta es una aplicación web **100% estática** que presenta un portfolio profesional para un 
Senior Data Engineer, construida con **React + TypeScript** y desplegada en **Cloudflare Workers**.

.. toctree::
   :maxdepth: 2
   :caption: Contenido:

   architecture
   frontend
   deployment

Índices y tablas
================

* :ref:`genindex`
* :ref:`search`

Resumen del Proyecto
--------------------

.. list-table:: Stack Tecnológico
   :widths: 25 75
   :header-rows: 1

   * - Componente
     - Tecnología
   * - Frontend
     - React 18, TypeScript, Vite, react-router-dom
   * - Estilos
     - CSS3 con diseño responsive
   * - Hosting
     - Cloudflare Workers (free tier)
   * - Dominio
     - alejandroquilez.dev (Cloudflare Registrar)
   * - Analytics
     - Cloudflare Analytics (RGPD compliant, sin cookies)
   * - Documentación
     - Sphinx, PlantUML

Inicio Rápido
-------------

**Desarrollo local**::

    cd frontend
    npm install
    npm run dev

**Build y despliegue**::

    cd frontend
    npm run build
    npx wrangler deploy

La aplicación estará disponible en:

- Local: http://localhost:5173
- Producción: https://alejandroquilez.dev
