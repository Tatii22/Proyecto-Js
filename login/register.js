document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".login-form");
  const modal = document.getElementById("successModal");
  const closeBtn = document.querySelector(".close-btn");
  const registerBtn = document.querySelector(".register-button");

  const username = document.getElementById("username");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const repeatPassword = document.getElementById("repeatPassword");

  const errorMsg = document.createElement("p");
  errorMsg.style.color = "red";
  errorMsg.style.fontSize = "14px";
  errorMsg.style.marginTop = "5px";
  form.appendChild(errorMsg);

  // Inicializar lista de usuarios
  inicializarUsuarios();

  registerBtn.disabled = true;

  function validarFormulario() {
    if (
      username.value.trim() !== "" &&
      email.value.trim() !== "" &&
      password.value.trim() !== "" &&
      repeatPassword.value.trim() !== ""
    ) {
      registerBtn.disabled = false;
    } else {
      registerBtn.disabled = true;
    }
  }

  [username, email, password, repeatPassword].forEach((input) => {
    input.addEventListener("input", validarFormulario);
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    errorMsg.textContent = "";

    const usuarios = obtenerUsuarios();

    // Validar contraseñas
    if (password.value !== repeatPassword.value) {
      errorMsg.textContent = "❌ Las contraseñas no coinciden.";
      return;
    }

    // Validar si ya existe
    const existe = usuarios.some(
      (u) => u.user === username.value || u.email === email.value
    );
    if (existe) {
      errorMsg.textContent = "⚠️ El usuario o email ya está registrado.";
      return;
    }

    // Crear y guardar usuario
    const nuevoUsuario = crearUsuarioBase();
    nuevoUsuario.id = Date.now();
    nuevoUsuario.user = username.value;
    nuevoUsuario.email = email.value;
    nuevoUsuario.contraseña = password.value;

    guardarUsuario(nuevoUsuario);

    // Mostrar modal si todo está bien
    modal.style.display = "flex";
    modal.style.visibility = "visible";
    modal.style.opacity = "1";

    form.reset();
    registerBtn.disabled = true;
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    modal.style.visibility = "hidden";
    modal.style.opacity = "0";
  });
});
document.querySelectorAll(".toggle-password").forEach((icon) => {
  icon.addEventListener("click", () => {
    const input = icon.previousElementSibling; 
    if (input.type === "password") {
      input.type = "text";
      icon.src = "../public/src/icons/ojo.svg";
    } else {
      input.type = "password";
      icon.src = "../public/src/icons/eye-slash.svg"; 
    }
  });
});