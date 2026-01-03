Curriculum Web - Documentación
==============================

Bienvenido a la documentación del proyecto **Curriculum Web** de Alejandro Quilez Asensio.

Esta aplicación web fullstack presenta un portfolio profesional para un Senior Data Engineer,
construida con **FastAPI** (Python) en el backend y **React + TypeScript** en el frontend.

.. toctree::
   :maxdepth: 2
   :caption: Contenido:

   architecture
   backend
   frontend
   api
   analytics
   deployment

Índices y tablas
================

* :ref:`genindex`
* :ref:`modindex`
* :ref:`search`

Resumen del Proyecto
--------------------

.. list-table:: Stack Tecnológico
   :widths: 25 75
   :header-rows: 1

   * - Componente
     - Tecnología
   * - Backend
     - Python 3.14, FastAPI, Pydantic, Uvicorn
   * - Frontend
     - React 18, TypeScript, Vite, react-router-dom
   * - Estilos
     - CSS3 con diseño responsive
   * - Analytics
     - Google Analytics 4 (GA4)
   * - Documentación
     - Sphinx, PlantUML

Inicio Rápido
-------------

**Backend**::

    cd backend
    pip install -r requirements.txt
    uvicorn main:app --reload

**Frontend**::

    cd frontend
    npm install
    npm run dev

La aplicación estará disponible en:

- Frontend: http://localhost:5173
- Backend API: http://localhost:8000
- API Docs: http://localhost:8000/docs
