const registerBtn = document.querySelector('.register-button');
const modal = document.getElementById('successModal');
const closeBtn = document.querySelector('.close-btn');

// Mostrar modal al hacer click en register
registerBtn.addEventListener('click', function (e) {
  e.preventDefault(); 
  modal.classList.add('show'); 
});

// Cerrar modal al hacer click en la X
closeBtn.addEventListener('click', function () {
  modal.classList.remove('show');
});

window.addEventListener('click', function (e) {
  if (e.target === modal) {
    modal.classList.remove('show');
  }
});