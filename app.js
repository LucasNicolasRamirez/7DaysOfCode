
document.addEventListener('DOMContentLoaded', function() {
    const labelToggle = document.getElementById('label__toggle');
    const resultadoDiv = document.getElementById('resultado');
    const preguntasDiv = document.getElementById('preguntas');
    const labelNuevo = document.getElementById('label__nuevo');
    const nuevoCuadro = document.getElementById('nuevo-cuadro');
    const nuevaPreguntaTexto = document.getElementById('nueva-pregunta-texto');
    const labelNuevo2 = document.getElementById('label__nuevo2');
    const mensajeDiv = document.getElementById('mensaje');
    const volverAPreguntaBtn = document.getElementById('volver-a-pregunta');

    // Añadimos un event listener al primer label
    labelToggle.addEventListener('click', function() {
        const nombre = document.getElementById('nombre').value;
        const edad = document.getElementById('edad').value;
        const lenguaje = document.getElementById('lenguaje').value;

        if (nombre && edad && lenguaje) {
            const respuesta = `Hola ${nombre} 😁, tienes ${edad} años y ya estás aprendiendo ${lenguaje}!🥳`;

            preguntasDiv.style.display = 'none';
            resultadoDiv.style.display = 'flex';
            resultadoDiv.querySelector('.resultado-texto').textContent = respuesta;

            // Actualiza el texto de la nueva pregunta
            nuevaPreguntaTexto.textContent = `¿Te gusta estudiar ${lenguaje}? Responde con el número 1 para SÍ o 2 para NO.`;
        } else {
            alert("Por favor, complete todos los campos.");
        }
    });

    // Añadimos un event listener al segundo label
    labelNuevo.addEventListener('click', function() {
        resultadoDiv.style.display = 'none';
        nuevoCuadro.style.display = 'flex';
    });

    // Añadimos un event listener al tercer label
    labelNuevo2.addEventListener('click', function() {
        const respuesta = document.getElementById('nueva-pregunta').value.trim(); // .trim() para eliminar espacios en blanco

        // Muestra el mensaje basado en la respuesta
        if (respuesta === '1') {
            mensajeDiv.querySelector('#mensaje-texto').textContent = '¡Muy bien! Sigue estudiando y tendrás mucho éxito.😊';
            volverAPreguntaBtn.style.display = 'none'; // Oculta el botón
        } else if (respuesta === '2') {
            mensajeDiv.querySelector('#mensaje-texto').textContent = 'Oh, qué pena...😞 ¿Ya intentaste aprender otros lenguajes?';
            volverAPreguntaBtn.style.display = 'none'; // Oculta el botón
        } else {
            mensajeDiv.querySelector('#mensaje-texto').textContent = 'Respuesta no válida.🤔 Por favor, responde con 1 o 2.';
            volverAPreguntaBtn.style.display = 'block'; // Muestra el botón
        }

        // Ocultamos el cuadro de la pregunta y mostramos el mensaje
        nuevoCuadro.style.display = 'none';
        mensajeDiv.style.display = 'flex';
    });

    // Añadimos un event listener al botón "Volver a preguntar"
    volverAPreguntaBtn.addEventListener('click', function() {
        mensajeDiv.style.display = 'none';
        nuevoCuadro.style.display = 'flex';
        document.getElementById('nueva-pregunta').value = ''; // Limpia el textarea
    });
});
