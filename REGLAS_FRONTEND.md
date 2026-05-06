# Reglas Frontend

## Arquitectura

- No mezclar scripts inline dentro de archivos `.html` o `.php`; crear o reutilizar un archivo `.js` dedicado.
- No mezclar estilos inline salvo casos puntuales heredados del template o datos dinamicos inevitables.
- Para cada funcionalidad nueva, crear un archivo JS claro cuando el codigo no pertenezca a uno existente: por ejemplo `js/reclamaciones.js`, `js/slider-mobile.js` o `js/contacto.js`.
- Mantener el HTML como estructura, CSS como presentacion y JS como comportamiento.
- Evitar funciones grandes en archivos globales; agrupar comportamiento por componente o seccion.
- No duplicar logica entre paginas; extraer comportamiento comun a un archivo reutilizable.
- No agregar dependencias frontend nuevas si la misma tarea puede resolverse con JS/CSS existente.

## JavaScript

- Usar `DOMContentLoaded` o inicializadores controlados; no ejecutar codigo antes de que el DOM necesario exista.
- Evitar variables globales; usar scopes locales, closures o modulos simples cuando aplique.
- Si se usa jQuery por compatibilidad del tema, limitarlo a integraciones existentes y no mezclarlo innecesariamente con vanilla JS en el mismo bloque.
- Validar que los selectores existan antes de operar sobre ellos.
- No bloquear la carga inicial con scripts pesados si pueden ir al final del documento o cargarse diferidos.
- Nombrar funciones segun accion y contexto: `initMobileSlider`, `setupContactForm`, `toggleMenuState`.
- Mantener efectos y animaciones desacoplados: JS activa clases, CSS ejecuta la animacion.

## CSS

- Preferir clases especificas antes que selectores globales o demasiado amplios.
- Evitar `!important`; usarlo solo para sobreescribir librerias o estilos inline inevitables.
- Mantener media queries cerca de la regla que modifican o en una seccion responsive clara.
- No usar reglas globales sobre `img`, `a`, `div` o `section` si pueden afectar librerias o componentes existentes.
- Usar nombres de clase descriptivos y relacionados al componente: `.mobile-static-slider`, `.contact-form-status`, `.portfolio-card`.
- No esconder contenido visual en responsive sin definir que lo reemplaza o como se mantiene la informacion.
- Mantener animaciones simples en mobile para evitar jank: `opacity`, `transform`, `filter` ligero y duraciones razonables.

## HTML y PHP

- No agregar comportamiento JS directamente en atributos HTML como `onclick`, `onchange` o `onsubmit`.
- No agregar estilos grandes en atributos `style`; moverlos a CSS.
- Mantener atributos `alt` en imagenes informativas.
- Evitar markup duplicado para desktop/mobile salvo que sea necesario por compatibilidad.
- Si una pagina PHP genera HTML, separar preparacion de datos, render y comportamiento JS.
- No incluir credenciales, tokens ni configuracion sensible en HTML, JS o CSS.

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
- Optimizar imagenes antes de agregarlas al proyecto.
- Mantener nombres de archivos en minusculas, sin espacios y con guiones cuando sea necesario.
- Reutilizar assets existentes antes de agregar duplicados.
- No referenciar imagenes externas en produccion si pueden alojarse localmente.

## Validacion visual

- Validar siempre al menos dos anchos antes de cerrar cambios: desktop (`1366px` o superior) y mobile (`390px` aprox.).
- Verificar que fondos y capas superpuestas se mantengan visibles en mobile.
- Verificar que capas inferiores como `chalk-effect.png` y `name.png` no queden cortadas en desktop.
- Si se prueba redimensionando DevTools, confirmar que el breakpoint recargue correctamente el modo del slider.
- Probar navegacion basica, menu, enlaces principales y formularios afectados.
- Revisar consola del navegador y resolver errores JS antes de cerrar cambios.
- Verificar que no aparezca scroll horizontal en mobile.
- Confirmar que los cambios no dependan de cache local; actualizar `?v=` cuando corresponda.

## Accesibilidad y UX

- Mantener textos legibles en mobile y desktop.
- Asegurar contraste suficiente en botones, enlaces y textos sobre imagenes.
- Mantener estados visibles para hover, focus y errores de formulario.
- No depender solo de color para comunicar errores o estados importantes.
- Evitar animaciones excesivas o muy largas; deben apoyar la lectura, no distraer.
