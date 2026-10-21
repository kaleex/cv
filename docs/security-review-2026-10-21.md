# Revisión de seguridad del CV — 2026-10-21

## Estado tras la corrección local

Los apartados siguientes conservan la evidencia de la revisión inicial. Después se aplicaron estas correcciones:

- La rama local se sincronizó por fast-forward con `origin/main` (`2b5db7d`), incorporando el Worker y las cabeceras ya presentes en producción.
- Se actualizaron ambos lockfiles sin forzar cambios de versión mayor. React Router queda en 7.18.4 y Vite en 7.3.7; sus rangos mínimos se actualizaron también en ambos `package.json`.
- `npm audit --audit-level=low` devuelve cero vulnerabilidades conocidas en `frontend` y `frontend_old`, incluidas dependencias de desarrollo.
- Ambos servidores Vite escuchan en `127.0.0.1`; se eliminó el proxy al puerto 8000.
- Se retiró `cv_old.pdf` de ambos directorios públicos. El Worker devuelve 410, sin cuerpo, con `Cache-Control: no-store`, `X-Robots-Tag: noindex` y las cabeceras de seguridad para esa URL, también con query string.
- Se documentaron el túnel SSH para desarrollo y la retirada del PDF en el README.

Validación: instalación limpia con `npm ci --ignore-scripts`, build, lint y auditoría correctos en ambos frontends. Ambos builds conservan `cv.pdf` y excluyen `cv_old.pdf`. La configuración cargada por Vite confirma localhost y ausencia de proxy. Las comprobaciones directas del Worker cubren GET/HEAD del PDF retirado, query strings, ausencia de acceso al binding de assets para esa URL, conservación del comportamiento de los assets normales, cabeceras y redirección HTTPS.

El despliegue automático se activa al publicar los cambios en `main`, según el README. Para comprobar la retirada en producción, verificar que `https://alejandroquilez.dev/cv_old.pdf` devuelve 410 y purgar su entrada de caché si todavía se sirve el PDF anterior. El borrado no elimina copias del histórico Git ni copias descargadas por terceros.

## Alcance y resultado

Repositorio existente en Atenea: `/home/kaleex/miweb/cv`, remoto `https://github.com/kaleex/cv.git`.
La rama local está en `bb4ca21`; `origin/main`, actualizado mediante fetch, está en `2b5db7d` y contiene cuatro commits adicionales de seguridad.
Se revisó este último commit en un worktree temporal independiente, conservando la rama y los documentos locales preexistentes.

Se revisaron código frontend, Worker, configuración de despliegue, los dos lockfiles, navegación, patrones de secretos y respuestas HTTP de producción.
No se ha confirmado una vulnerabilidad remota explotable en la aplicación desplegada. Hay dependencias con avisos conocidos, exposición condicional del entorno de desarrollo y un documento antiguo público que conviene revisar.

## 1. Dependencias con avisos conocidos — prioridad media

Evidencia: `frontend/package-lock.json:2868` fija `react-router` en 7.14.0; `frontend/package-lock.json:2890` fija `react-router-dom` en 7.14.0; `frontend/package-lock.json:3210` fija Vite en 7.3.2.
Los lockfiles de la copia local y de `origin/main` son idénticos.

`npm audit --package-lock-only --ignore-scripts --json` devuelve, tanto en `frontend` como en `frontend_old`:

| Severidad del registro npm | Paquetes marcados |
| --- | ---: |
| Crítica | 0 |
| Alta | 9 |
| Moderada | 2 |
| Baja | 1 |
| Total | 12 |

Son paquetes marcados, no doce fallos independientes ni doce vulnerabilidades demostradas en esta web.
Los paquetes son `@babel/core`, `@humanfs/node`, `baseline-browser-mapping`, `brace-expansion`, `browserslist`, `js-yaml`, `nanoid`, `postcss`, `react-router`, `react-router-dom` y `source-map-js`, además de `vite`.
Todos aparecen con `fixAvailable: true` en la consulta realizada.

Con `--omit=dev`, quedan dos entradas de severidad alta: `react-router` y `react-router-dom`; la segunda propaga los avisos de la primera.
La aplicación usa `<BrowserRouter>` en `frontend/src/main.tsx:15`, con rutas y navegación controladas por el código.

- El [aviso de ejecución remota GHSA-49rj-9fvp-4h2h](https://github.com/advisories/GHSA-49rj-9fvp-4h2h) excluye expresamente aplicaciones con BrowserRouter. Requiere Framework Mode y una vulnerabilidad previa de contaminación de prototipos.
- El [aviso de denegación de servicio GHSA-chx6-hx7r-mcp5](https://github.com/advisories/GHSA-chx6-hx7r-mcp5) también excluye Declarative Mode y Data Mode.
- El [aviso de redirección abierta GHSA-wrjc-x8rr-h8h6](https://github.com/advisories/GHSA-wrjc-x8rr-h8h6) requiere rutas suministradas por un atacante a los mecanismos de navegación. No se encontró ese flujo: los destinos proceden de constantes y traducciones locales, incluidos `frontend/src/hooks/useSwipeNavigation.ts:6` y `frontend/src/pages/Blog.tsx:68`.

El resto de paquetes pertenece a herramientas de desarrollo o compilación; no se ejecuta como servidor Node en el Worker estático. Los avisos de Vite enumerados por npm incluyen escenarios específicos de Windows, que no deben atribuirse automáticamente al host Linux Atenea.

Acción recomendada: actualizar dependencias y lockfiles en un cambio específico; repetir auditoría, compilación y lint. Para React Router, seleccionar una versión mantenida que quede fuera de todos los rangos afectados devueltos por la auditoría del momento. No basta con actualizar únicamente al parche del aviso de RCE. Evitar `npm audit fix --force` sin revisar cambios.
Decidir también si mantener y actualizar `frontend_old` o retirarlo del árbol activo, conservando el histórico Git.

## 2. Servidor de desarrollo accesible desde la red y proxy local — prioridad media, condicional

Evidencia: `frontend/vite.config.ts:8` establece `host: true`; `frontend/vite.config.ts:10` publica un proxy `/api` hacia `http://localhost:8000`.
La aplicación revisada no contiene llamadas a esa API.

Cuando se ejecuta `npm run dev`, el servidor escucha en todas las interfaces. Si otro equipo puede alcanzar el puerto 5173, también puede intentar acceder a `/api`, que Vite reenvía al servicio del puerto 8000 de Atenea. El alcance real depende del firewall y de la autenticación y rutas del servicio de destino.
No se detectaron sockets escuchando en 5173 ni 8000 durante la revisión; no se demuestra una exposición activa. Esta configuración no se incorpora al despliegue estático de Cloudflare.

Acción recomendada: limitar Vite a `127.0.0.1` por defecto y eliminar el proxy si no tiene uso. Habilitar acceso de red solo de forma explícita cuando se necesite.

## 3. CV antiguo disponible públicamente — prioridad baja, privacidad

Evidencia: `frontend/public/cv_old.pdf` se copia a `dist` al compilar. La petición HEAD a `https://alejandroquilez.dev/cv_old.pdf` devolvió `200` y `Content-Type: application/pdf`.
La extracción local de texto confirma que tanto el PDF actual como el antiguo contienen correo y teléfono; no se reproducen esos datos aquí.

No es un fallo de autorización si su publicación es intencionada. Sí permite descargar y recopilar una versión antigua aunque no tenga un enlace visible.

Acción recomendada: decidir si esa versión y sus datos deben seguir públicos; si no, retirar el archivo de `public`, comprobar la respuesta tras desplegar y purgar su caché cuando corresponda. Quitar el archivo del despliegue no elimina copias históricas en Git ni copias ya descargadas.

## 4. Copia local anterior al endurecimiento — observación operativa

La copia de trabajo local carece del Worker y de las cabeceras añadidas en los cuatro commits posteriores. Desplegar manualmente desde esta copia podría revertir las protecciones, dependiendo de la configuración de Cloudflare.
Esto no describe el estado actual de producción: allí las protecciones están presentes.

Acción recomendada: sincronizar la copia local con `origin/main` antes de preparar un despliegue y conservar los documentos locales existentes. La revisión solo hizo fetch; no cambió la rama local.

## Protecciones verificadas

- Producción responde con CSP restrictiva, `frame-ancestors 'none'`, `object-src 'none'`, HSTS, `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, Referrer-Policy y Permissions-Policy.
- HTTP redirige a HTTPS con 301; `/.well-known/security.txt` está disponible y declara vencimiento en mayo de 2027.
- El Worker revisado solo delega en `env.ASSETS.fetch` y añade cabeceras; no contiene acceso a base de datos, ejecución de comandos ni autenticación propia.
- No se encontraron usos de `dangerouslySetInnerHTML`, `eval`, ejecución dinámica de código ni llamadas de red en el código frontend revisado. Los enlaces externos examinados usan `noopener noreferrer`.
- La búsqueda heurística de claves privadas, tokens GitHub, claves AWS y asignaciones de secretos no produjo coincidencias en los archivos versionados actuales. Esto no equivale a una auditoría exhaustiva de secretos del historial.

## Validación y límites

En el worktree de `2b5db7d`, con Node 22.22.1 y npm 9.2.0:

- `npm ci --ignore-scripts --no-audit --no-fund`: correcto.
- `npm run build`: correcto; genera `index-B8WpKvY7.js` e `index-SCd6G8C1.css`, los mismos nombres de assets referenciados por el HTML de producción observado.
- `npm run lint`: correcto.
- Comprobación directa del Worker con respuestas simuladas: redirección HTTPS, conservación de estado/cuerpo/ETag y cabeceras de seguridad correctas en respuestas 200 y 404.
- Peticiones HTTP pasivas a la portada, redirección HTTPS, PDF antiguo y `security.txt`.

No se ejecutaron pruebas de carga, explotación activa, escaneo de puertos ni pruebas completas en navegador. No se inspeccionaron permisos, secretos, reglas WAF o configuración privada de GitHub/Cloudflare; tampoco se verificó cada aviso transitivo de npm de forma individual.
Los resultados de npm dependen del registro consultado en la fecha indicada y no prueban qué dependencias exactas se usaron en un despliegue histórico.
La revisión inicial no modificó código ni dependencias. Las correcciones posteriores y su validación se describen al inicio de este documento. La validación local y la comprobación del despliegue son pasos distintos.
