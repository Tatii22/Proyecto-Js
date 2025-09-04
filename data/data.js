// data.js

// Plantilla de usuario
function crearUsuarioBase() {
  return {
    id: null,
    user: "",
    email: "",
    contraseña: "",
    shippingAddress: {
      firstName: "",
      lastName: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      phoneNumber: ""
    },
    shippingMethod: "",
    paymentMethod: {
      nameOnCard: "",
      cardNumber: "",
      expMonth: "",
      expYear: "",
      cvv: ""
    },
    carrito: [],
    totalCarrito: 0
  };
}

// Inicializa la lista de usuarios
function inicializarUsuarios() {
  if (!localStorage.getItem("usuarios")) {
    localStorage.setItem("usuarios", JSON.stringify([]));
  }
}

// Obtener todos los usuarios
function obtenerUsuarios() {
  return JSON.parse(localStorage.getItem("usuarios"));
}

// Guardar nuevo usuario
function guardarUsuario(nuevoUsuario) {
  let usuarios = obtenerUsuarios();
  usuarios.push(nuevoUsuario);
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
}

// Exportar funciones
window.inicializarUsuarios = inicializarUsuarios;
window.obtenerUsuarios = obtenerUsuarios;
window.guardarUsuario = guardarUsuario;
window.crearUsuarioBase = crearUsuarioBase;
