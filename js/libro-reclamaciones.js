(function () {
  var form = document.getElementById("form-reclamaciones");
  if (!form) {
    return;
  }

  var requiredFields = form.querySelectorAll("input[required], select[required], textarea[required]");
  var submitButton = form.querySelector('input[type="submit"], button[type="submit"]');
  var captchaContainer = document.getElementById("turnstile-captcha");
  var captchaMessage = document.getElementById("captcha-message");
  var captchaWidgetId = null;
  var captchaVerified = !captchaContainer;
  var isSubmitting = false;

  function showMessage(type, message, onclose) {
    if (window.alertify) {
      window.alertify.alert(type === "success" ? "Mensaje enviado" : "Aviso", message, onclose);
      return;
    }

    window.alert(message);
    if (typeof onclose === "function") {
      onclose();
    }
  }

  function setSubmitLoading(isLoading) {
    var submitLabel = submitButton ? submitButton.querySelector(".submit-label") : null;

    isSubmitting = isLoading;

    if (submitButton) {
      submitButton.disabled = isLoading || (!!captchaContainer && !captchaVerified);
      submitButton.classList.toggle("is-loading", isLoading);
    }

    if (submitLabel) {
      submitLabel.textContent = isLoading ? "Enviando..." : "Enviar";
    }
  }

  if (submitButton && captchaContainer) {
    submitButton.disabled = true;
  }

  function setCaptchaMessage(message) {
    if (captchaMessage) {
      captchaMessage.textContent = message || "";
    }
  }

  function resetCaptcha() {
    captchaVerified = !captchaContainer;

    if (captchaWidgetId !== null && window.turnstile) {
      window.turnstile.reset(captchaWidgetId);
    }

    if (submitButton && captchaContainer) {
      submitButton.disabled = true;
    }
  }

  function loadTurnstile(siteKey) {
    window.onTurnstileLoaded = function () {
      captchaWidgetId = window.turnstile.render(captchaContainer, {
        sitekey: siteKey,
        action: "libro_reclamaciones",
        callback: function () {
          captchaVerified = true;
          setCaptchaMessage("");
          if (submitButton) {
            submitButton.disabled = false;
          }
        },
        "expired-callback": function () {
          captchaVerified = false;
          setCaptchaMessage("La verificacion expiro. Vuelve a completar el captcha.");
          if (submitButton) {
            submitButton.disabled = true;
          }
        },
        "error-callback": function () {
          captchaVerified = false;
          setCaptchaMessage("No se pudo validar el captcha. Intenta nuevamente.");
          if (submitButton) {
            submitButton.disabled = true;
          }
        }
      });
    };

    var script = document.createElement("script");
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onTurnstileLoaded&render=explicit";
    script.async = true;
    script.defer = true;
    script.onerror = function () {
      setCaptchaMessage("No se pudo cargar el captcha. Revisa tu conexion e intenta nuevamente.");
    };
    document.head.appendChild(script);
  }

  if (captchaContainer) {
    fetch("config/captcha_config.php", {
      headers: {
        "X-Requested-With": "XMLHttpRequest"
      }
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (result) {
        if (!result || !result.ok || !result.siteKey) {
          setCaptchaMessage((result && result.message) ? result.message : "Captcha no disponible.");
          return;
        }

        loadTurnstile(result.siteKey);
      })
      .catch(function () {
        setCaptchaMessage("Captcha no disponible. Intenta recargar la pagina.");
      });
  }

  function markFieldState(field) {
    if (!field.checkValidity()) {
      field.classList.add("input-error");
      return;
    }
    field.classList.remove("input-error");
  }

  requiredFields.forEach(function (field) {
    field.addEventListener("blur", function () {
      markFieldState(field);
    });

    field.addEventListener("input", function () {
      markFieldState(field);
    });

    field.addEventListener("change", function () {
      markFieldState(field);
    });
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    var isValid = true;
    requiredFields.forEach(function (field) {
      markFieldState(field);
      if (!field.checkValidity()) {
        isValid = false;
      }
    });

    if (!isValid) {
      return;
    }

    if (!captchaVerified) {
      setCaptchaMessage("Completa el captcha antes de enviar.");
      return;
    }

    setSubmitLoading(true);

    fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: {
        "X-Requested-With": "XMLHttpRequest"
      }
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (result) {
        if (result && result.ok) {
          showMessage("success", result.message || "Correo enviado correctamente.", function () {
            window.location.href = result.redirect || "index.html";
          });
          return;
        }

        resetCaptcha();
        setSubmitLoading(false);
        showMessage("error", (result && result.message) ? result.message : "No se pudo enviar el formulario.");
      })
      .catch(function () {
        resetCaptcha();
        setSubmitLoading(false);
        showMessage("error", "No se pudo enviar el formulario. Intenta nuevamente.");
      });
  });
})();
