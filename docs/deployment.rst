Despliegue
==========

Arquitectura de Despliegue
--------------------------

.. uml:: 06_deployment.puml

Desarrollo Local
----------------

Backend
^^^^^^^

.. code-block:: bash

    cd backend
    
    # Crear entorno virtual
    python -m venv .venv
    
    # Activar entorno (Windows)
    .venv\Scripts\activate
    
    # Instalar dependencias
    pip install -r requirements.txt
    
    # Ejecutar servidor
    uvicorn main:app --reload --port 8000

Frontend
^^^^^^^^

.. code-block:: bash

    cd frontend
    
    # Instalar dependencias
    npm install
    
    # Ejecutar servidor de desarrollo
    npm run dev

Puertos
^^^^^^^

.. list-table::
   :widths: 30 70
   :header-rows: 1

   * - Servicio
     - Puerto
   * - Frontend (Vite)
     - 5173 (o 5174 si ocupado)
   * - Backend (FastAPI)
     - 8000

Producción
----------

Build del Frontend
^^^^^^^^^^^^^^^^^^

.. code-block:: bash

    cd frontend
    npm run build

Los archivos estáticos se generan en ``frontend/dist/``.

Opciones de Despliegue
^^^^^^^^^^^^^^^^^^^^^^

**Frontend:**

- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

**Backend:**

- Railway
- Render
- AWS Lambda + API Gateway
- Google Cloud Run
- Azure App Service

Docker (Opcional)
^^^^^^^^^^^^^^^^^

**Dockerfile Backend:**

.. code-block:: dockerfile

    FROM python:3.14-slim
    WORKDIR /app
    COPY backend/requirements.txt .
    RUN pip install --no-cache-dir -r requirements.txt
    COPY backend/ .
    EXPOSE 8000
    CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]

**Dockerfile Frontend:**

.. code-block:: dockerfile

    FROM node:20-alpine as build
    WORKDIR /app
    COPY frontend/package*.json ./
    RUN npm ci
    COPY frontend/ .
    RUN npm run build

    FROM nginx:alpine
    COPY --from=build /app/dist /usr/share/nginx/html
    EXPOSE 80
    CMD ["nginx", "-g", "daemon off;"]

Variables de Entorno
--------------------

**Backend:**

.. list-table::
   :widths: 30 70
   :header-rows: 1

   * - Variable
     - Descripción
   * - PORT
     - Puerto del servidor (default: 8000)
   * - CORS_ORIGINS
     - Orígenes permitidos para CORS

**Frontend:**

.. list-table::
   :widths: 30 70
   :header-rows: 1

   * - Variable
     - Descripción
   * - VITE_API_URL
     - URL del backend API
