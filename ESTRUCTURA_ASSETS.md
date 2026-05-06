# Estructura de Assets

## Carpetas

- `img/`: imagenes propias del sitio.
- `css/`: hojas de estilo del tema, librerias y overrides.
- `js/`: scripts propios, tema y librerias.
- `fonts/`: fuentes e iconos usados por el tema.

## Imagenes

- Usar nombres en minusculas, sin espacios y preferentemente con guiones.
- Optimizar imagenes antes de agregarlas.
- Reutilizar imagenes existentes antes de duplicar archivos.
- Mantener imagenes del slider en `img/` para evitar dependencias externas.
- No reemplazar imagenes del slider sin validar desktop y mobile.

## CSS

- `css/index.css` contiene overrides propios de portada y slider.
- Evitar editar `css/layerslider.css` salvo necesidad extrema.
- Evitar reglas globales que afecten `.ls-bg`, `.ls-l` o imagenes del slider.

## JavaScript

- `js/main.js` contiene inicializaciones propias del sitio.
- Crear archivos JS dedicados si una nueva funcionalidad crece o no pertenece a `main.js`.
- No editar `jquery.*` ni librerias empaquetadas.

## Cache

Cuando se modifiquen assets enlazados directamente desde HTML, actualizar el parametro `?v=` correspondiente.

Ejemplos:

- `./css/index.css?v=18`
- `./js/main.js?v=6`
