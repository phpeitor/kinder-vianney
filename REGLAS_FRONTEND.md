# Reglas Frontend

## Slider principal

- Mantener desktop y mobile como comportamientos separados cuando el plugin no responda bien.
- Desktop debe conservar `LayerSlider` activo para mantener sus efectos originales.
- Mobile debe usar `.mobile-static-slider` para los ajustes especiales del slider.
- No forzar `width`, `height`, `max-width` u `object-fit` directamente sobre `.ls-bg` en desktop; LayerSlider calcula esas medidas.
- No ocultar `.ls-l` en mobile salvo que exista un fallback visual equivalente.
- El alto desktop del slider debe permanecer en `610px` salvo que tambien se reajusten las coordenadas de las capas.
- El modo mobile escala desde el lienzo base de `1170px`; si cambia `layersContainer`, actualizar tambien el calculo de escala en `js/main.js`.

## CSS y assets

- Preferir cambios pequeños y localizados en `css/index.css` antes de editar CSS global del tema.
- No modificar librerias vendorizadas (`layerslider.*`, `jquery.*`) salvo que no exista otra alternativa.
- Actualizar los parametros de cache (`?v=`) cuando cambien `css/index.css` o `js/main.js`.
- Evitar reglas globales de imagen que afecten al slider; excluir `.ls-bg` y `.ls-l` cuando sea necesario.

## Validacion visual

- Validar siempre al menos dos anchos antes de cerrar cambios: desktop (`1366px` o superior) y mobile (`390px` aprox.).
- Verificar que fondos y capas superpuestas se mantengan visibles en mobile.
- Verificar que capas inferiores como `chalk-effect.png` y `name.png` no queden cortadas en desktop.
- Si se prueba redimensionando DevTools, confirmar que el breakpoint recargue correctamente el modo del slider.
