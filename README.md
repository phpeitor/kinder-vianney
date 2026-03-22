# Kinder Vianney 🏆
[![forthebadge](http://forthebadge.com/images/badges/uses-css.svg)](https://www.linkedin.com/in/drphp/)
[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](https://www.linkedin.com/in/drphp/)

<a href="https://www.instagram.com/amvsoft.tech/">
  <img src="https://cdn.dribbble.com/userupload/23784078/file/original-557570cce8dd3d0c1fe73eb5dd68d241.jpg" alt="Instagram" width="600">
</a>

Sitio web institucional con formulario de Libro de Reclamaciones y envio de correo via PHPMailer.

`Hello Everyone 🙌`

## Requisitos

- PHP 8.0 o superior (recomendado)
- Composer 2.x
- Servidor web con soporte PHP (Apache, Nginx, Laragon, etc.)
- Extensiones PHP necesarias para PHPMailer:
  - `ext-ctype`
  - `ext-filter`
  - `ext-hash`
- Extensiones recomendadas:
  - `ext-openssl` (SMTP seguro)
  - `ext-mbstring` (soporte completo UTF-8)

## Dependencias Composer

El proyecto usa Composer para cargar PHPMailer.

Dependencias actuales (composer.json):

- `phpmailer/phpmailer:^7.0`

No hay dependencias `require-dev` en este proyecto.

## Instalacion

1. Clona el repositorio:

```bash
git clone https://github.com/phpeitor/kinder-vianney.git
cd kinder-vianney
```

2. Instala dependencias PHP:

```bash
composer install
```

3. Verifica que se haya generado/cargado correctamente `vendor/autoload.php`.

## Configuracion de entorno (.env)

El envio de correos lee variables desde `.env` mediante `config/env.php`.

Define estas claves en el archivo `.env` de la raiz del proyecto:

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

Notas:

- `MAIL_SECURE` puede ser `tls` o `ssl`.
- El formulario tambien envia una copia al correo ingresado por el usuario.

## Ejecucion local (cualquier servidor PHP)

Puedes correr este proyecto en Apache, Nginx, Laragon o con el servidor embebido de PHP.

### Opcion 1: Laragon

1. Coloca el proyecto en la carpeta `www` de Laragon.
2. Inicia Laragon (Apache o Nginx).
3. Abre en navegador:

```text
http://kinder-vianney.test/
```

Nota: el dominio puede variar segun tu configuracion de Laragon.

### Opcion 2: Apache/Nginx (manual)

1. Configura el `document root` para apuntar a la carpeta del proyecto.
2. Habilita PHP en tu servidor.
3. Abre en navegador la URL configurada (por ejemplo):

```text
http://localhost/kinder/
```

### Opcion 3: Servidor embebido de PHP (rapido)

Desde la raiz del proyecto ejecuta:

```bash
php -S localhost:8000
```

Luego abre:

```text
http://localhost:8000/
```

## Prueba de formulario

1. Abre:

```text
http://localhost/kinder/libro-reclamaciones.html
```

2. Completa todos los campos.
3. Envia el formulario.
4. Resultado esperado:
   - Se deshabilita el boton mientras envia.
   - Se muestra loader durante el envio.
   - Si envia bien, redirige a `index.html`.
   - Si falla, se reactiva el boton y muestra mensaje de error.

## Solucion de problemas

- Error `Failed opening required vendor/autoload.php`:
  - Ejecuta `composer install` en la raiz del proyecto.

- No llegan correos:
  - Revisa credenciales SMTP del `.env`.
  - Verifica puerto y cifrado (`MAIL_PORT` + `MAIL_SECURE`).
  - Confirma que `ext-openssl` este habilitada en PHP.

- Composer no reconocido:
  - Instala Composer y reinicia terminal.