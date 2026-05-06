# Validacion Visual

## Portada desktop

- Abrir `index.html` en ancho `1366px` o superior.
- Confirmar que el slider tiene alto completo y no corta elementos inferiores.
- Confirmar que `LayerSlider` conserva efectos en desktop.
- Revisar que `chalk-effect.png`, `name.png` y capas inferiores no queden fuera del area visible.
- Confirmar que no se superponga el slider con la seccion `Actividades I.E. Vianney`.

## Portada mobile

- Abrir `index.html` en ancho aproximado `390px`.
- Confirmar que el fondo del slider se ve.
- Confirmar que las capas superpuestas se ven y se escalan con el fondo.
- Confirmar que existen efectos simples de entrada en capas.
- Confirmar que no hay franja blanca/gris sin imagen en el slider.
- Confirmar que no hay scroll horizontal.

## Breakpoints

- Probar desktop a mobile y mobile a desktop.
- Si se redimensiona en DevTools, confirmar que el cambio de breakpoint recarga el modo correcto.
- Validar al menos estos anchos: `1366px`, `768px`, `390px`.

## Formularios

- Abrir `libro-reclamaciones.html`.
- Confirmar que el formulario carga sin errores de consola.
- Confirmar que estados visuales de envio, loader y mensajes siguen funcionando.

## Checklist final

- No errores JS en consola.
- No imagenes rotas.
- No scroll horizontal en mobile.
- Navegacion principal funcional.
- Links a redes visibles.
- Cache busting actualizado si cambio CSS/JS.
