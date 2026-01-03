Arquitectura del Sistema
========================

Visión General
--------------

El proyecto es una **aplicación web 100% estática** desplegada en Cloudflare Workers.
No requiere backend - todos los datos están embebidos en el bundle de JavaScript.

.. uml:: 01_architecture_overview.puml

Componentes Principales
-----------------------

Frontend (React + Vite)
^^^^^^^^^^^^^^^^^^^^^^^

El frontend es una **Single Page Application (SPA)** construida con React y TypeScript.

**Características:**

- Bundling con Vite para desarrollo rápido
- Routing con react-router-dom
- Diseño responsive con CSS puro
- Datos estáticos en ``src/data/portfolio.ts``
- Analytics via Cloudflare (sin cookies, RGPD compliant)

Estructura de Datos
^^^^^^^^^^^^^^^^^^^

Los datos del portfolio están definidos como constantes TypeScript en ``frontend/src/data/portfolio.ts``:

- ``personalInfo`` - Información de contacto
- ``hero`` - Sección principal con headline
- ``skills`` - Categorías de habilidades técnicas
- ``journey`` - Experiencia laboral
- ``approach``, ``lakehouse``, ``medallion``, etc.

Stack Tecnológico
-----------------

.. uml:: 07_tech_stack.puml

Ventajas de la Arquitectura Estática
------------------------------------

.. list-table::
   :widths: 30 70
   :header-rows: 1

   * - Ventaja
     - Descripción
   * - Rendimiento
     - Sin latencia de API, todo se sirve desde CDN
   * - Coste
     - Cloudflare Workers free tier (100k requests/día)
   * - Seguridad
     - Sin servidor que atacar, sin base de datos
   * - Mantenimiento
     - Cero infraestructura que gestionar
   * - SEO
     - Contenido disponible inmediatamente
