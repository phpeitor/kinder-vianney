# Arquitectura del Proyecto

## Resumen

Este proyecto es un sitio web institucional estatico/dinamico ligero para I.E.P San Juan Maria Vianney. La portada principal esta en `index.html` y el flujo del Libro de Reclamaciones usa PHP, Composer y PHPMailer.

## Estructura principal

- `index.html`: pagina principal del sitio, incluye header, slider, secciones informativas, portafolio y footer.
- `libro-reclamaciones.html`: pagina del formulario de Libro de Reclamaciones.
- `css/`: estilos del tema, librerias y overrides propios.
- `js/`: scripts del tema, librerias y comportamiento propio.
- `img/`: imagenes locales del sitio, slider, portafolio e iconos.
- `config/`: configuracion PHP, incluyendo carga de variables de entorno.
- `vendor/`: dependencias Composer generadas por `composer install`.
- `README.md`: documentacion general del proyecto.
- `REGLAS_FRONTEND.md`: reglas de trabajo frontend.

## Archivos frontend clave

- `css/index.css`: overrides propios de la portada. Priorizar este archivo antes de modificar CSS global del tema.
- `js/main.js`: inicializaciones propias, incluyendo el manejo desktop/mobile del slider.
- `css/style.css`, `css/responsive.css`, `css/shortcodes.css`: estilos heredados del tema. Modificar con cuidado.
- `js/layerslider.*`, `js/jquery.*`: librerias vendorizadas. No modificar salvo caso extremo.

## Slider principal

El slider usa dos estrategias:

- Desktop: se mantiene `LayerSlider` activo para conservar efectos originales.
- Mobile: se usa modo estatico escalado con `.mobile-static-slider`, porque el plugin recalcula mal fondos y capas en responsive.

El alto desktop del slider debe permanecer en `610px` para evitar que capas bajas queden cortadas.

## Backend/formulario

El formulario de Libro de Reclamaciones envia correo usando PHPMailer. La configuracion sensible se lee desde `.env` mediante archivos en `config/`.

No se deben versionar credenciales, claves SMTP ni archivos `.env` reales.
