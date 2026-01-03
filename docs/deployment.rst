Despliegue
==========

Arquitectura de Despliegue
--------------------------

.. uml:: 06_deployment.puml

El sitio está desplegado en **Cloudflare Workers** con dominio personalizado.

- **URL**: https://alejandroquilez.dev
- **CDN**: Cloudflare (global edge network)
- **SSL**: Automático via Cloudflare

Desarrollo Local
----------------

.. code-block:: bash

    cd frontend
    
    # Instalar dependencias
    npm install
    
    # Ejecutar servidor de desarrollo
    npm run dev

El servidor de desarrollo estará en http://localhost:5173

Build de Producción
-------------------

.. code-block:: bash

    cd frontend
    
    # Generar build optimizado
    npm run build

Los archivos estáticos se generan en ``frontend/dist/``.

Despliegue a Cloudflare
-----------------------

**Requisitos:**

- Cuenta de Cloudflare
- Wrangler CLI (incluido en devDependencies)

**Comandos:**

.. code-block:: bash

    cd frontend
    
    # Login en Cloudflare (primera vez)
    npx wrangler login
    
    # Desplegar
    npm run build
    npx wrangler deploy

**Configuración** (``wrangler.jsonc``):

.. code-block:: json

    {
      "name": "cv",
      "compatibility_date": "2026-01-03",
      "assets": {
        "directory": "./dist"
      }
    }

Dominio Personalizado
---------------------

El dominio ``alejandroquilez.dev`` está registrado en Cloudflare Registrar y 
configurado para apuntar al Worker.

**Configuración DNS:**

- CNAME: ``@`` → ``cv.alexquilezz.workers.dev``
- Proxy: Activado (orange cloud)

Analytics
---------

Cloudflare proporciona analytics integrados sin necesidad de código adicional:

- Visitas y visitantes únicos
- Países de origen
- Dispositivos y navegadores
- Sin cookies, RGPD compliant

Acceso en: Cloudflare Dashboard → Workers → cv → Analytics
