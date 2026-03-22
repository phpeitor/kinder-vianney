<?php
require __DIR__ . "/env.php";
require __DIR__ . "/../vendor/autoload.php";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

date_default_timezone_set("America/Lima");
$fechaActual = date("d/m/Y H:i:s");

$contentType = $_SERVER["CONTENT_TYPE"] ?? "";
$isJsonRequest = stripos($contentType, "application/json") !== false;
$isAjaxRequest = ($_SERVER["HTTP_X_REQUESTED_WITH"] ?? "") === "XMLHttpRequest";

$data = [];
if ($isJsonRequest) {
  $data = json_decode(file_get_contents("php://input"), true);
  if (!is_array($data)) {
    $data = [];
  }
} else {
  $data = $_POST;
}

$documento = trim($data["documento"] ?? "");
$apellidos = trim($data["apellidos"] ?? "");
$nombres = trim($data["nombres"] ?? "");
$telefono = trim($data["telefono"] ?? "");
$email = trim($data["email"] ?? "");
$tipo = trim($data["tipo"] ?? "");
$motivo = trim($data["motivo"] ?? "");
$mensaje = trim($data["mensaje"] ?? "");
$pedido = trim($data["pedido"] ?? "");

$requiredFields = [
  "documento" => $documento,
  "apellidos" => $apellidos,
  "nombres" => $nombres,
  "telefono" => $telefono,
  "email" => $email,
  "tipo" => $tipo,
  "motivo" => $motivo,
  "mensaje" => $mensaje,
  "pedido" => $pedido,
];

$missingFields = [];
foreach ($requiredFields as $fieldName => $fieldValue) {
  if ($fieldValue === "") {
    $missingFields[] = $fieldName;
  }
}

if (!empty($missingFields)) {
  $message = "Faltan campos obligatorios: " . implode(", ", $missingFields);

  if ($isJsonRequest || $isAjaxRequest) {
    header("Content-Type: application/json");
    http_response_code(400);
    echo json_encode([
      "ok" => false,
      "message" => $message,
    ]);
  } else {
    header("Content-Type: text/html; charset=UTF-8");
    echo "<h2>Error</h2><p>$message</p><p><a href='../libro-reclamaciones.html'>Volver al formulario</a></p>";
  }
  exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  $message = "El correo electronico ingresado no es valido.";

  if ($isJsonRequest || $isAjaxRequest) {
    header("Content-Type: application/json");
    http_response_code(400);
    echo json_encode([
      "ok" => false,
      "message" => $message,
    ]);
  } else {
    header("Content-Type: text/html; charset=UTF-8");
    echo "<h2>Error</h2><p>$message</p><p><a href='../libro-reclamaciones.html'>Volver al formulario</a></p>";
  }
  exit;
}

$emailEscaped = htmlspecialchars($email, ENT_QUOTES, "UTF-8");
$documentoEscaped = htmlspecialchars($documento, ENT_QUOTES, "UTF-8");
$apellidosEscaped = htmlspecialchars($apellidos, ENT_QUOTES, "UTF-8");
$nombresEscaped = htmlspecialchars($nombres, ENT_QUOTES, "UTF-8");
$telefonoEscaped = htmlspecialchars($telefono, ENT_QUOTES, "UTF-8");
$tipoEscaped = htmlspecialchars($tipo, ENT_QUOTES, "UTF-8");
$motivoEscaped = htmlspecialchars($motivo, ENT_QUOTES, "UTF-8");
$mensajeEscaped = nl2br(htmlspecialchars($mensaje, ENT_QUOTES, "UTF-8"));
$pedidoEscaped = nl2br(htmlspecialchars($pedido, ENT_QUOTES, "UTF-8"));
$fechaActualEscaped = htmlspecialchars($fechaActual, ENT_QUOTES, "UTF-8");

try {
    $mail = new PHPMailer(true);
    $mail->CharSet = "UTF-8";
    $mail->isSMTP();
    $mail->Host       = env("MAIL_HOST");
    $mail->SMTPAuth   = true;
    $mail->Username   = env("MAIL_USERNAME");
    $mail->Password   = env("MAIL_PASSWORD");
    $mail->SMTPSecure = env("MAIL_SECURE") === "ssl" 
    ? PHPMailer::ENCRYPTION_SMTPS 
    : PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = env("MAIL_PORT");

    $mail->setFrom(env("MAIL_FROM_EMAIL"), env("MAIL_FROM_NAME"));
    $mail->addAddress(env("MAIL_TO"));
    $mail->addAddress(env("MAIL_FROM_EMAIL"));
    $mail->addAddress($email, "$nombres $apellidos");
    $mail->addReplyTo($email, "$nombres $apellidos");
    
    $headPath = __DIR__ . "/../img/head.png";

    if (file_exists($headPath)) $mail->addEmbeddedImage($headPath, "head", "head.png");

    $mail->isHTML(true);
    $mail->Subject = "Nuevo mensaje de Libro de Reclamaciones - $documentoEscaped";

    $mail->Body = "
    <div style='width:100%; background:#f5f7fa; padding:20px 0;'>
      <div style='max-width:600px; margin:auto; background:white; border-radius:10px; overflow:hidden;
                  box-shadow:0 3px 10px rgba(0,0,0,0.1);'>

        <div style='width:100%; text-align:center; background:white; position:relative;'>
            <img src='cid:head'
                style='display:block; width:100%; border:0; outline:none; text-decoration:none; margin:0;'>
        </div>

        <div style='padding:0 25px 25px; font-family:Arial, sans-serif;'>
          <h2 style='color:#333; text-align:center;'>Nuevo mensaje recibido</h2>
          <table style='width:100%; margin-top:20px; font-size:16px; color:#333;'>
            <tr><td>Fecha:</td><td>$fechaActualEscaped</td></tr>
            <tr><td>Documento:</td><td>$documentoEscaped</td></tr>
            <tr><td>Apellidos:</td><td>$apellidosEscaped</td></tr>
            <tr><td>Nombres:</td><td>$nombresEscaped</td></tr>
            <tr><td>Telefono:</td><td>$telefonoEscaped</td></tr>
            <tr><td>Email:</td><td>$emailEscaped</td></tr>
            <tr><td>Tipo:</td><td>$tipoEscaped</td></tr>
            <tr><td>Motivo:</td><td>$motivoEscaped</td></tr>
            <tr><td>Mensaje:</td><td>$mensajeEscaped</td></tr>
            <tr><td>Pedido:</td><td>$pedidoEscaped</td></tr>
          </table>
        </div>

        <div style='text-align:center; padding:15px; background:#fafafa; color:#777; font-size:12px;'>
          © I.E.P San Juan Maria Vianney - Libro de Reclamaciones
        </div>

      </div>
    </div>
    ";

    $mail->send();
  if ($isJsonRequest || $isAjaxRequest) {
    header("Content-Type: application/json");
    echo json_encode([
      "ok" => true,
      "message" => "Correo enviado correctamente",
      "redirect" => "index.html"
    ]);
  } else {
    header("Location: ../index.html");
    exit;
  }

} catch (Exception $e) {
  if ($isJsonRequest || $isAjaxRequest) {
    header("Content-Type: application/json");
    http_response_code(500);
    echo json_encode([
      "ok" => false,
      "message" => "Error enviando correo",
      "error" => $mail->ErrorInfo
    ]);
  } else {
    header("Content-Type: text/html; charset=UTF-8");
    echo "<h2>Error enviando correo</h2><p>No se pudo enviar el mensaje. Detalle: " . htmlspecialchars($mail->ErrorInfo, ENT_QUOTES, "UTF-8") . "</p><p><a href='../libro-reclamaciones.html'>Volver al formulario</a></p>";
  }
}
