Backend - FastAPI
=================

El backend está construido con **FastAPI**, un framework moderno de Python para APIs.

Estructura del Proyecto
-----------------------

::

    backend/
    ├── main.py           # Aplicación principal
    ├── requirements.txt  # Dependencias Python
    └── __pycache__/      # Cache de Python

Configuración
-------------

Requisitos
^^^^^^^^^^

.. code-block:: text

    fastapi>=0.100.0
    uvicorn[standard]>=0.22.0
    pydantic>=2.0.0

Instalación
^^^^^^^^^^^

.. code-block:: bash

    cd backend
    pip install -r requirements.txt

Ejecución
^^^^^^^^^

**Desarrollo:**

.. code-block:: bash

    uvicorn main:app --reload --port 8000

**Producción:**

.. code-block:: bash

    uvicorn main:app --host 0.0.0.0 --port 8000 --workers 4

Modelos de Datos
----------------

PersonalInfo
^^^^^^^^^^^^

.. code-block:: python

    class PersonalInfo(BaseModel):
        name: str        # Nombre completo
        title: str       # Título profesional
        email: str       # Email de contacto
        phone: str       # Teléfono
        linkedin: str    # URL de LinkedIn
        github: str      # URL de GitHub

SkillCategory
^^^^^^^^^^^^^

.. code-block:: python

    class Skill(BaseModel):
        name: str       # Nombre de la habilidad
        level: int      # Nivel (0-100)

    class SkillCategory(BaseModel):
        category: str           # Nombre de la categoría
        skills: list[Skill]     # Lista de habilidades

Documentación API
-----------------

FastAPI genera documentación automática:

- **Swagger UI**: http://localhost:8000/docs
- **ReDoc**: http://localhost:8000/redoc
- **OpenAPI JSON**: http://localhost:8000/openapi.json
