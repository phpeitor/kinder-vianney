# Guia de Desarrollo

## Flujo recomendado

1. Revisar el archivo afectado y sus dependencias antes de editar.
2. Hacer cambios pequenos y localizados.
3. Evitar tocar librerias vendorizadas o CSS global si existe un override propio.
4. Validar desktop y mobile cuando el cambio afecte UI.
5. Actualizar `?v=` cuando cambien archivos CSS o JS cargados por HTML.
6. Revisar `git diff` antes de cerrar el cambio.

## Frontend

- Para estilos de portada, priorizar `css/index.css`.
- Para comportamiento propio, priorizar `js/main.js` o crear un JS dedicado si la funcionalidad crece.
- No agregar scripts inline en HTML/PHP.
- No agregar estilos inline grandes.
- Mantener HTML como estructura, CSS como presentacion y JS como comportamiento.

## Slider

- No inicializar `LayerSlider` en mobile mientras exista el bug responsive del plugin.
- No forzar dimensiones de `.ls-bg` en desktop.
- No ocultar `.ls-l` en mobile sin reemplazo visual.
- Si se cambia `layersContainer` en `js/main.js`, actualizar el calculo de escala mobile.

## Cache busting

Actualizar versiones manuales cuando cambien estos archivos:

- `css/index.css?v=<numero>` en `index.html`.
- `js/main.js?v=<numero>` en `index.html`.

## Validacion minima

- Desktop: abrir `index.html` en ancho aproximado `1366px` o superior.
- Mobile: abrir `index.html` en ancho aproximado `390px`.
- Revisar consola del navegador.
- Confirmar que no exista scroll horizontal en mobile.
- Confirmar que el formulario de Libro de Reclamaciones no se haya visto afectado por cambios globales.
