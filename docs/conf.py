# Configuration file for the Sphinx documentation builder.

# -- Project information -----------------------------------------------------
project = 'Curriculum Web - Alejandro Quilez'
copyright = '2026, Alejandro Quilez Asensio'
author = 'Alejandro Quilez Asensio'
release = '1.0.0'

# -- General configuration ---------------------------------------------------
extensions = [
    'sphinx.ext.autodoc',
    'sphinx.ext.viewcode',
    'sphinx.ext.napoleon',
    'sphinxcontrib.plantuml',
]

# PlantUML configuration
plantuml = 'java -jar ../plantuml.jar'
plantuml_output_format = 'png'

templates_path = ['_templates']
exclude_patterns = ['_build', 'Thumbs.db', '.DS_Store']

language = 'es'

# -- Options for HTML output -------------------------------------------------
html_theme = 'sphinx_rtd_theme'
html_static_path = ['_static']

html_theme_options = {
    'navigation_depth': 4,
    'titles_only': False,
    'logo_only': False,
    'display_version': True,
    'prev_next_buttons_location': 'both',
    'style_external_links': True,
}

# -- Extension configuration -------------------------------------------------
# Napoleon settings for Google/NumPy style docstrings
napoleon_google_docstring = True
napoleon_numpy_docstring = True
napoleon_include_init_with_doc = True
