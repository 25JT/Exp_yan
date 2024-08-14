document.addEventListener('DOMContentLoaded', () => {
    const image = document.getElementById('welcome-image');
    const welcomeMessage = document.getElementById('welcome-message');
    const mainContent = document.getElementById('main-content');
    
    // Verificar si la imagen ya ha sido tocada
    if (localStorage.getItem('imageClicked') === '')  { //true
        image.style.display = 'none'; // Ocultar la imagen si ya ha sido tocada
        mainContent.classList.remove('d-none');
        mainContent.classList.add('show');
    } else {
        image.style.display = 'block'; // Mostrar la imagen si no ha sido tocada
    }

    image.addEventListener('click', () => {
        image.style.opacity = '0';
        setTimeout(() => {
            welcomeMessage.classList.remove('d-none');
            setTimeout(() => {
                welcomeMessage.style.opacity = '1';
                setTimeout(() => {
                    welcomeMessage.style.opacity = '0';
                    setTimeout(() => {
                        welcomeMessage.classList.add('d-none');
                        mainContent.classList.remove('d-none');
                        mainContent.classList.add('show');
                        image.style.display = 'none'; // Ocultar la imagen permanentemente
                        localStorage.setItem('imageClicked', ''); // Guardar el estado en localStorage
                    }, 1000);
                }, 2000);
            }, 500);
        }, 1000);
    });
});
