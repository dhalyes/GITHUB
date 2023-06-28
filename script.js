

document.querySelector("button.button-menu-toggle")
  .addEventListener("click", function() {
    document.querySelector(".nav-links")
      .classList.toggle("nav-links-responsive");
});

// Obtener el botón de menú y el contenedor de navegación
const menuToggleBtn = document.querySelector('.button-menu-toggle');
const navLinksContainer = document.querySelector('.nav-links');

// Agregar evento de clic al botón de menú
menuToggleBtn.addEventListener('click', () => {
  // Alternar la clase 'active' en el contenedor de enlaces de navegación
  navLinksContainer.classList.toggle('active');
});

// Obtener todos los elementos de imagen
const images = document.querySelectorAll('img');

// Agregar evento de clic a cada imagen
images.forEach(image => {
  image.addEventListener('click', () => {
    // Cambiar el tamaño de la imagen al hacer clic
    image.style.transform = 'scale(1.2)';
  });

  image.addEventListener('mouseout', () => {
    // Restaurar el tamaño original de la imagen al mover el mouse fuera de ella
    image.style.transform = 'scale(1)';
  });
});

// Obtener el botón de alerta
const alertBtn = document.querySelector('#alert-btn');

// Agregar evento de clic al botón de alerta
alertBtn.addEventListener('click', () => {
  // Mostrar una alerta con un mensaje personalizado
  alert('¡Has hecho clic en el botón!');
});

function showAlert() {
  alert('¡Hola, esta es una alerta desde JavaScript!');
}    
    
    
});