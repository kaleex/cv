Arquitectura del Sistema
========================

Visión General
--------------

El proyecto sigue una arquitectura **cliente-servidor** con separación clara entre frontend y backend.

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
- Proxy de API configurado en Vite

.. uml:: 02_component_diagram.puml

Backend (FastAPI)
^^^^^^^^^^^^^^^^^

El backend es una API REST construida con FastAPI.

**Características:**

- Validación automática con Pydantic
- Documentación OpenAPI automática
- Alto rendimiento con ASGI (Uvicorn)
- CORS configurado para desarrollo

Stack Tecnológico
-----------------

.. uml:: 07_tech_stack.puml

Modelo de Datos
---------------

El backend utiliza modelos Pydantic para definir la estructura de datos:

.. uml:: 03_data_model.puml

Descripción de Modelos
^^^^^^^^^^^^^^^^^^^^^^

.. list-table:: Modelos Principales
   :widths: 25 75
   :header-rows: 1

   * - Modelo
     - Descripción
   * - PersonalInfo
     - Información de contacto (nombre, email, teléfono, redes)
   * - Hero
     - Sección principal con headline y CTA
   * - PortfolioData
     - Modelo agregado con toda la información del portfolio
   * - SkillCategory
     - Categoría de habilidades con lista de skills y niveles
