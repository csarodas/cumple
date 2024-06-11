const nombreCumpleañero = document.getElementById('nombre-cumpleañero');

const botonEnviarDeseo = document.getElementById('boton-enviar-deseo');
const mensajesDeseos = document.getElementById('mensajes-deseos');

// Inicializar el nombre del cumpleañero
nombreCumpleañero.textContent = '**Dayana**'; // Reemplazar con el nombre real

// Mostrar el área de deseos al hacer clic en el botón
botonDeseo.addEventListener('click', () => {
    areaDeseo.style.display = 'block';
});

// Enviar el mensaje de deseo
botonEnviarDeseo.addEventListener('click', () => {
    const mensaje = textoDeseo.value.trim();

    if (mensaje) {
        const nuevoMensaje = document.createElement('div');
        nuevoMensaje.classList.add('mensaje-deseo-individual');
        nuevoMensaje.textContent = mensaje;

        mensajesDeseos.appendChild(nuevoMensaje);

        // Limpiar el área de texto y ocultar el área de deseos
        textoDeseo.value = '';
        areaDeseo.style.display = 'none';
    }
});
