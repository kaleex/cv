Analytics y Métricas
====================

El proyecto incluye un **sistema de analytics propio**, 100% RGPD compliant.

Características de Privacidad
-----------------------------

✅ **Sin cookies** - No se almacenan cookies en el navegador del usuario

✅ **Sin scripts de terceros** - No Google Analytics, no Facebook Pixel

✅ **Datos anonimizados** - IP hasheada, no se guarda PII

✅ **Self-hosted** - Los datos se quedan en tu servidor

✅ **RGPD/GDPR compliant** - No necesitas banner de cookies

✅ **Sin fingerprinting** - No se rastrea al usuario entre sesiones

Cómo Funciona
-------------

El sistema usa un hash anónimo basado en IP + User-Agent + fecha actual:

.. code-block:: python

    # El hash cambia cada día y no se puede revertir
    raw = f"{ip}-{user_agent}-{date.today()}"
    visitor_hash = sha256(raw).hexdigest()[:16]

Esto permite contar **visitantes únicos diarios** sin identificar a nadie.

Métricas Disponibles
--------------------

.. list-table::
   :widths: 30 70
   :header-rows: 1

   * - Métrica
     - Descripción
   * - **Visitas totales**
     - Número total de page views
   * - **Visitantes únicos**
     - Visitantes únicos (por día)
   * - **Visitas hoy**
     - Page views del día actual
   * - **Páginas vistas**
     - Ranking de páginas más visitadas
   * - **Eventos/Clicks**
     - Clicks en botones y CTAs
   * - **Países**
     - Ubicación (requiere CDN con headers)
   * - **Dispositivos**
     - Desktop, mobile, tablet
   * - **Referrers**
     - De dónde vienen los visitantes
   * - **Scroll Depth**
     - % de página vista (25, 50, 75, 90, 100)

API Endpoints
-------------

POST /api/analytics/track
^^^^^^^^^^^^^^^^^^^^^^^^^

Registra un evento de analytics.

**Request:**

.. code-block:: json

    {
      "event_type": "pageview",
      "event_name": "/skills",
      "timestamp": "2026-01-03T12:00:00Z"
    }

**Event types:**

- ``pageview`` - Vista de página
- ``click`` - Click en elemento
- ``scroll`` - Profundidad de scroll

GET /api/analytics/stats
^^^^^^^^^^^^^^^^^^^^^^^^

Obtiene estadísticas del dashboard.

**Response:**

.. code-block:: json

    {
      "total_visits": 1234,
      "unique_visitors": 456,
      "today_visits": 23,
      "page_views": {
        "/": 500,
        "/skills": 300,
        "/contact": 200
      },
      "top_events": {
        "cta:get-in-touch": 45,
        "contact:linkedin": 30
      },
      "countries": {
        "ES": 200,
        "US": 150
      },
      "devices": {
        "desktop": 400,
        "mobile": 300
      },
      "scroll_depth": {
        "25": 400,
        "50": 300,
        "75": 200,
        "90": 100,
        "100": 50
      }
    }

Eventos Trackeados
------------------

**Automáticamente:**

- Page views en cada cambio de ruta
- Scroll depth (25%, 50%, 75%, 90%, 100%)

**Clicks manuales:**

- ``nav:home``, ``nav:skills``, ``nav:contact``
- ``cta:get-in-touch``, ``cta:linkedin-cta``
- ``contact:email``, ``contact:phone``, ``contact:linkedin``, ``contact:github``

Almacenamiento
--------------

Los datos se guardan en ``backend/analytics_data.json``:

.. code-block:: json

    {
      "total_visits": 1234,
      "unique_visitors": 456,
      "visitor_hashes": ["abc123...", "def456..."],
      "daily_visits": {"2026-01-03": 23},
      "page_views": {"/": 500},
      "events": {"cta:get-in-touch": 45},
      "countries": {"ES": 200},
      "devices": {"desktop": 400},
      "scroll_depth": {"25": 400}
    }

Para producción, considera migrar a PostgreSQL o SQLite.

Ver Estadísticas
----------------

Accede al endpoint de stats:

.. code-block:: bash

    curl http://localhost:8000/api/analytics/stats | jq

O visita http://localhost:8000/docs y usa el endpoint interactivo.

Comparación con Google Analytics
--------------------------------

.. list-table::
   :widths: 30 35 35
   :header-rows: 1

   * - Característica
     - Google Analytics
     - Este Sistema
   * - Cookies
     - ✗ Sí (requiere consentimiento)
     - ✓ No
   * - RGPD Banner
     - ✗ Requerido
     - ✓ No necesario
   * - Datos en tu servidor
     - ✗ No
     - ✓ Sí
   * - Scripts externos
     - ✗ Sí
     - ✓ No
   * - Gratis
     - ✓ Sí
     - ✓ Sí
   * - Dashboards avanzados
     - ✓ Muy completo
     - ~ Básico
   * - Tiempo real
     - ✓ Sí
     - ~ Limitado
