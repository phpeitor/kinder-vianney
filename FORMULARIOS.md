# Formularios

## Libro de Reclamaciones

La pagina `libro-reclamaciones.html` contiene el formulario de Libro de Reclamaciones. El envio se procesa con PHP y PHPMailer.

## Configuracion SMTP

La configuracion sensible debe estar en `.env` y no debe versionarse.

Variables esperadas:

```env
MAIL_HOST=smtp.tudominio.com
MAIL_PORT=587
MAIL_SECURE=tls
MAIL_USERNAME=usuario@tudominio.com
MAIL_PASSWORD=tu_password
MAIL_FROM_EMAIL=usuario@tudominio.com
MAIL_FROM_NAME=Kinder Vianney
MAIL_TO=destino@tudominio.com
```

## Flujo esperado

1. Usuario completa todos los campos requeridos.
2. Al enviar, el boton se deshabilita.
3. Se muestra estado de carga.
4. Si el envio es exitoso, se redirige a `index.html`.
5. Si falla, se reactiva el boton y se muestra error.

## Reglas

- No poner credenciales SMTP en HTML, JS o PHP versionado.
- Validar campos requeridos en frontend y backend cuando aplique.
- Mantener mensajes claros para el usuario.
- No cambiar el flujo de redireccion sin actualizar README y esta guia.
- Probar el formulario despues de cambios globales en CSS o JS.

## Problemas comunes

- `vendor/autoload.php` no existe: ejecutar `composer install`.
- No llegan correos: revisar credenciales SMTP, puerto, cifrado y `ext-openssl`.
- Error de caracteres: revisar codificacion UTF-8 y `ext-mbstring`.
