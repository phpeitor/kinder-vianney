<?php
require __DIR__ . "/env.php";

header("Content-Type: application/json");

$siteKey = env("TURNSTILE_SITE_KEY", "");

if ($siteKey === "") {
  http_response_code(500);
  echo json_encode([
    "ok" => false,
    "message" => "Captcha no configurado.",
  ]);
  exit;
}

echo json_encode([
  "ok" => true,
  "siteKey" => $siteKey,
]);
