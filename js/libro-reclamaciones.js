(function () {
  var form = document.getElementById("form-reclamaciones");
  if (!form) {
    return;
  }

  var requiredFields = form.querySelectorAll("input[required], select[required], textarea[required]");

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

    var isValid = true;
    var submitButton = form.querySelector('input[type="submit"], button[type="submit"]');
    var loader = form.querySelector(".ajax-loader");

    requiredFields.forEach(function (field) {
      markFieldState(field);
      if (!field.checkValidity()) {
        isValid = false;
      }
    });

    if (!isValid) {
      return;
    }

    if (submitButton) {
      submitButton.disabled = true;
    }

    if (loader) {
      loader.innerHTML = '<img src="./img/ajax-loader.gif" alt="Enviando" style="vertical-align:middle; margin-left:8px;">';
      loader.style.display = "inline-block";
    }

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
          window.location.href = "index.html";
          return;
        }

        if (submitButton) {
          submitButton.disabled = false;
        }
        if (loader) {
          loader.style.display = "none";
          loader.innerHTML = "";
        }
        alert((result && result.message) ? result.message : "No se pudo enviar el formulario.");
      })
      .catch(function () {
        if (submitButton) {
          submitButton.disabled = false;
        }
        if (loader) {
          loader.style.display = "none";
          loader.innerHTML = "";
        }
        alert("No se pudo enviar el formulario. Intenta nuevamente.");
      });
  });
})();
