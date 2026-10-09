# ISP10 · Aula de español B2

Sitio web estático listo para desplegar en `isp10.sokoli.eu`. No requiere PHP, base de datos ni un servicio de terceros.

## Archivos

- `index.html`: estructura y navegación del sitio.
- `assets/styles.css`: diseño adaptable a móviles y pantallas grandes.
- `assets/content.js`: Unidad 1, gramática, vocabulario, lectura y banco de ejercicios.
- `assets/app.js`: navegación, autocorrección, guardado local, búsqueda y exportación.
- `assets/favicon.svg`: icono del sitio.

## Publicar en isp10.sokoli.eu

1. Crea el subdominio `isp10` en el panel de tu proveedor de alojamiento web y asígnale un directorio raíz (por ejemplo, `public_html/isp10/`).
2. Sube **el contenido** de esta carpeta al directorio raíz del subdominio (no la carpeta contenedora).
3. Accede a `https://isp10.sokoli.eu` para comprobar el despliegue. Si usas HTTPS, asegúrate de tener un certificado para ese subdominio.
4. Los enlaces internos usan fragmentos (`#formas`, `#deseos`, etc.): funcionan incluso en alojamiento estático sin configuración especial.

## Funciones incluidas

- Siete bloques, con teoría, ejemplos originales y cuestionarios autocorregibles.
- 89 preguntas autocorregibles (incluye repaso de 22 preguntas).
- 48 entradas de vocabulario con categorías y buscador.
- Relato original, comprensión lectora y dos espacios para producción escrita.
- Registro de resultados y borradores en el almacenamiento local del navegador, distinguiendo las notas obtenidas con bancos de preguntas anteriores.
- Exportación a TXT de los resultados y producciones, e impresión de las páginas.
- Diseño responsive y navegación por teclado.

**Importante:** el progreso no se sincroniza entre dispositivos ni se envía al profesorado. Los datos se conservan solo en el navegador y pueden perderse si se limpia su almacenamiento. La evaluación automática solo corrige respuestas cerradas o formas esperadas; no puede valorar textos libres.

## Añadir nuevas unidades

La estructura permite crecer. Para cada unidad, crea un archivo de contenido propio (siguiendo las estructuras de `assets/content.js`), enlázalo desde `index.html` y añade sus rutas en `assets/app.js`. Mantén los identificadores de unidad en las claves del almacenamiento para no sobrescribir los resultados existentes. La sección `#proximas` está reservada para estas unidades. La incorporación de nuevas unidades requiere edición del código (no dispone todavía de panel de administración).

## Uso del manual y derechos de autor

Material de apoyo independiente, estructurado según los contenidos lingüísticos de la unidad 1 de *Nuevo Prisma B2* (pp. 8–21). Explicaciones, relato y ejercicios redactados originalmente para esta web. No se incluyen páginas escaneadas, archivos de audio originales del libro ni reproducciones de sus textos o actividades.

## Control de calidad de la revisión (octubre de 2026)

Se han contrastado las explicaciones y actividades con las páginas 8–21 del manual facilitadas para la asignatura. La segunda versión incorpora la probabilidad con futuro simple, futuro perfecto y condicional simple; amplía léxico audiovisual y emociones; mantiene el resto de los contenidos gramaticales y léxicos.

La autocorrección es **cerrada**: no detecta equivalencias no previstas y exige la forma y la tilde indicadas. Si el enunciado admite otro tiempo por un contexto diferente, no debe interpretarse una calificación automática como corrección docente definitiva. Esta edición incluye pruebas estáticas de los 89 ítems y pruebas de interacción en Chromium a partir de la vista previa autocontenida (las rutas locales directas están restringidas en el entorno de pruebas). Se comprobaron navegación, los siete cuestionarios, las soluciones programadas, un bloque con todas las respuestas erróneas, autocorrección, contador, búsqueda, exportación y diseño móvil. El comportamiento del almacenamiento se ensayó con una simulación de almacenamiento local, pero queda pendiente comprobar el despliegue real en el dominio.

La lección «Entonación y pragmática» y su pregunta específica de repaso no forman parte de esta variante.
