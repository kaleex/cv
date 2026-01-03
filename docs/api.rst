API Reference
=============

El backend expone una API REST con los siguientes endpoints.

Endpoints
---------

GET /
^^^^^

Endpoint raíz que confirma que la API está funcionando.

**Response:**

.. code-block:: json

    {
      "message": "Portfolio API is running"
    }

GET /api/portfolio
^^^^^^^^^^^^^^^^^^

Retorna toda la información del portfolio.

**Response:**

.. code-block:: json

    {
      "personal_info": {
        "name": "Alejandro Quilez Asensio",
        "title": "Senior Data Engineer",
        "email": "alexquilezz@hotmail.com",
        "phone": "+34 674 449 806",
        "linkedin": "https://www.linkedin.com/in/alejandro-quilez/",
        "github": "https://github.com/alexquilez"
      },
      "hero": {
        "headline": "Data Platforms That Actually Work",
        "subheadline": "...",
        "cta_text": "Let's Talk"
      },
      "approach": { ... },
      "lakehouse": { ... },
      "medallion_layers": [ ... ],
      "governance": { ... },
      "cicd": { ... },
      "journey": { ... },
      "what_i_bring": { ... },
      "cta": { ... }
    }

GET /api/skills
^^^^^^^^^^^^^^^

Retorna las categorías de habilidades con niveles.

**Response:**

.. code-block:: json

    [
      {
        "category": "Cloud & Infrastructure",
        "skills": [
          { "name": "Azure (Data Factory, Synapse, Databricks)", "level": 95 },
          { "name": "AWS (S3, Glue, Redshift, Lambda)", "level": 85 },
          { "name": "GCP (BigQuery, Dataflow)", "level": 75 }
        ]
      },
      {
        "category": "Data Platforms",
        "skills": [ ... ]
      }
    ]

Flujo de Petición
-----------------

.. uml:: 04_sequence_api.puml

Códigos de Estado
-----------------

.. list-table::
   :widths: 15 85
   :header-rows: 1

   * - Código
     - Descripción
   * - 200
     - OK - Petición exitosa
   * - 404
     - Not Found - Recurso no encontrado
   * - 500
     - Internal Server Error - Error del servidor

CORS
----

El backend tiene CORS configurado para permitir peticiones desde el frontend en desarrollo:

.. code-block:: python

    app.add_middleware(
        CORSMiddleware,
        allow_origins=["http://localhost:5173", "http://localhost:5174"],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )
