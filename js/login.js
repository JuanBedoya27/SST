// Referencias a los elementos del DOM
const loginForm = document.getElementById('loginForm');
const loginStatus = document.getElementById('loginStatus');

// Función para obtener usuarios desde localStorage
function getUsers() {
    return JSON.parse(localStorage.getItem('usuarios')) || [];
}

// Manejo del formulario de inicio de sesión
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.getElementById('loginUsername').value.trim();
    const password = document.getElementById('loginPassword').value.trim();

    if (username && password) {
        const users = getUsers();
        // Verificar credenciales
        const user = users.find(user => user.username === username && user.password === password);

        if (user) {
            loginStatus.textContent = `¡Bienvenido, ${user.username}!`;
            loginStatus.className = 'success';
        } else {
            loginStatus.textContent = 'Nombre de usuario o contraseña incorrectos.';
            loginStatus.className = 'error';
        }
    } else {
        loginStatus.textContent = 'Por favor, complete todos los campos.';
        loginStatus.className = 'error';
    }
});
