const registerBtn = document.querySelector('.register-button');
const modal = document.getElementById('successModal');
const closeBtn = document.querySelector('.close-btn');

// Mostrar modal al hacer click en register
registerBtn.addEventListener('click', function (e) {
  e.preventDefault(); // evita recarga del formulario
  modal.style.display = 'flex';
});

// Cerrar modal al hacer click en la X
closeBtn.addEventListener('click', function () {
  modal.style.display = 'none';
});
