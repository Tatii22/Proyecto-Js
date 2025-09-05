// Seleccionar elementos
const loginForm = document.querySelector(".login-form");
const togglePassword = document.querySelector(".toggle-password");
const messageContainer = document.createElement("p"); 
messageContainer.style.color = "red";
loginForm.appendChild(messageContainer); 


loginForm.addEventListener("submit", function (e) {
    e.preventDefault(); 

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    // Obtener usuarios del localStorage
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    // Buscar coincidencia
    const user = usuarios.find(
        (u) => (u.user === username || u.email === username) && u.contraseña === password
    );

    if (user) {
        // Guardar usuario activo
        localStorage.setItem("usuarioActivo", JSON.stringify(user));
        // Redirigir
        window.location.href = "/home/home.html";
    } else {
        messageContainer.textContent = "❌ Usuario o contraseña incorrectos";
    }
});

// Toggle de contraseña
togglePassword.addEventListener("click", function () {
    const input = document.getElementById("password");
    if (input.type === "password") {
        input.type = "text";
        this.src = "../public/src/icons/ojo.svg";
    } else {
        input.type = "password";
        this.src = "../public/src/icons/eye-slash.svg"; 
    }
});
