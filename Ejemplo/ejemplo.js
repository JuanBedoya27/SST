// script.js

document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de la manera convencional

    const feedback = document.getElementById('feedback').value;

    // Almacenar el feedback en Local Storage
    let feedbacks = JSON.parse(localStorage.getItem('feedbacks')) || [];
    feedbacks.push(feedback);
    localStorage.setItem('feedbacks', JSON.stringify(feedbacks));

    // Limpiar el formulario
    document.getElementById('feedback').value = '';

    // Mostrar mensaje de éxito
    const mensaje = document.getElementById('mensaje');
    mensaje.textContent = 'Gracias por tus comentarios!';
    mensaje.style.color = 'green';

    // Opción para mostrar todos los comentarios almacenados (opcional)
    // console.log(feedbacks);
});
