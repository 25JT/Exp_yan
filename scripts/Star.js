
// Animaciones con Anime.js
document.addEventListener('DOMContentLoaded', function() {
    anime({
        targets: '.etapa .card',
        translateY: [50, 0],
        opacity: [0, 1],
        duration: 1500,
        delay: anime.stagger(300) // delay entre las tarjetas
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Animaciones para la sección de beneficios
    anime({
        targets: '.benefits-item',
        translateY: [50, 0],
        opacity: [0, 1],
        duration: 1500,
        delay: anime.stagger(200) // delay entre los items de beneficios
    });

    // Animaciones para la Ruta de Sueños
    anime({
        targets: '.etapa .card',
        translateY: [50, 0],
        opacity: [0, 1],
        duration: 1500,
        delay: anime.stagger(300) // delay entre las tarjetas
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var typed = new Typed('#Unete', {
      strings: ["EL PODER DE NOSTORAS", " BIENVENIDAS FUTURAS CONSULTORAS"],
      typeSpeed: 60,
      backSpeed: 40,
      loop: false,
      smartBackspace: true,
      showCursor: false
    });
  });
