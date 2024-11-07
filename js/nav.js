// Asegúrate de que el script se ejecute después de que la página haya cargado
document.addEventListener('DOMContentLoaded', function() {
    // Obtén la URL actual
    const currentLocation = window.location.pathname;

    // Selecciona todos los enlaces del menú
    const navLinks = document.querySelectorAll('nav a');

    // Recorre todos los enlaces y verifica cuál corresponde a la página actual
    navLinks.forEach(link => {
        // Si el href del enlace coincide con la URL actual, agrega la clase 'active'
        if (currentLocation.includes(link.getAttribute('href'))) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});



    fetch('/HTML/nav.html')
        .then(response => response.text())
        .then(data => {
            // Inserta el contenido de nav.html
            document.getElementById('navegacion').innerHTML = data;

            // Ejecuta el script para resaltar el enlace activo
            setActiveLink();  // Llamamos a la función para aplicar el enlace activo
        })
        .catch(error => console.error('Error al cargar el archivo de navegación:', error));

    // Función para agregar la clase "active" al enlace correspondiente
    function setActiveLink() {
        // Obtén la URL actual
        const currentLocation = window.location.pathname;

        // Selecciona todos los enlaces de navegación
        const navLinks = document.querySelectorAll('nav a');

        // Recorrer todos los enlaces y agregar o quitar la clase 'active'
        navLinks.forEach(link => {
            if (currentLocation.includes(link.getAttribute('href'))) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

