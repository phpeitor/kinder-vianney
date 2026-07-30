# Decisiones Tecnicas

## LayerSlider desktop y modo mobile propio

Decision: mantener `LayerSlider` en desktop y usar modo mobile propio con CSS/JS.

Motivo:

- En desktop el plugin conserva efectos y posicionamiento correctos.
- En mobile el plugin recalculaba mal fondos y capas superpuestas.
- Forzar CSS sobre `.ls-bg` arreglaba una parte pero rompia otra.
- El modo mobile propio permite escalar fondo y elementos juntos desde el lienzo base.

Implementacion:

- `js/main.js` detecta `(max-width: 767px)`.
- En mobile agrega `body.mobile-static-slider` y evita inicializar `LayerSlider`.
- `css/index.css` escala los slides con `--mobile-slider-scale`.
- Desktop sigue inicializando `LayerSlider` normalmente.

## Alto desktop fijo del slider

Decision: usar `height: 610px` en desktop.

Motivo:

- Las capas originales fueron ubicadas en un lienzo de 610px de alto.
- Un alto proporcional menor cortaba capas como `chalk-effect.png`, `name.png`, `b-bulb.png` y otros elementos inferiores.

## Cache busting manual

Decision: mantener parametros `?v=` en CSS/JS modificados.

Motivo:

- El proyecto no tiene pipeline de build.
- Los navegadores pueden servir CSS/JS cacheado.
- Subir `?v=` reduce falsos negativos durante QA visual.

## No modificar librerias vendorizadas

Decision: no editar `layerslider.*`, `jquery.*` ni librerias de terceros.

Motivo:

- Son archivos minificados o empaquetados.
- Es dificil mantener parches internos.
- Los overrides propios son mas seguros y reversibles.
