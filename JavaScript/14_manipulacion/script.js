// Ejercicio 1: Registro de Estudiante
const estudiantes = [];

// Función para capitalizar nombres
function capitalizarNombre(nombre) {
    return nombre
        .trim()
        .toLowerCase()
        .split(' ')
        .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1))
        .join(' ');
}

// Función para mostrar resumen de jornadas
function mostrarResumenJornadas() {
    const contadorJornadas = { Mañana: 0, Tarde: 0 };
    
    // Contar estudiantes por jornada
    for (const estudiante of estudiantes) {
        contadorJornadas[estudiante.jornada]++;
    }
    
    // Mostrar resumen
    const resumenElement = document.getElementById('resumenJornadas');
    resumenElement.textContent = `Registrados: ${contadorJornadas.Mañana} en Mañana, ${contadorJornadas.Tarde} en Tarde`;
}

// Función para validar y procesar el formulario de estudiante
function procesarFormularioEstudiante(event) {
    event.preventDefault();
    
    // Obtener elementos de resultado y error
    const resultadoElement = document.querySelector('#formEstudiante + .resultados .resultado');
    const errorElement = document.querySelector('#formEstudiante + .resultados .error');
    
    // Limpiar mensajes anteriores
    resultadoElement.textContent = '';
    errorElement.textContent = '';
    
    // Obtener valores del formulario
    const nombreInput = document.getElementById('nombre');
    const edadInput = document.getElementById('edad');
    const cursoSelect = document.getElementById('curso');
    const jornadaRadios = document.getElementsByName('jornada');
    const reglamentoCheckbox = document.getElementById('aceptaReglamento');
    
    const nombre = capitalizarNombre(nombreInput.value);
    const edad = parseInt(edadInput.value);
    const curso = cursoSelect.value;
    
    // Obtener la jornada seleccionada
    let jornada = '';
    for (const radio of jornadaRadios) {
        if (radio.checked) {
            jornada = radio.value;
            break;
        }
    }
    
    const aceptaReglamento = reglamentoCheckbox.checked;
    
    // Validaciones
    const errores = [];
    
    if (nombre.length < 2) {
        errores.push('El nombre debe tener al menos 2 caracteres.');
    }
    
    if (isNaN(edad) || edad < 14 || edad > 100) {
        errores.push('La edad debe estar entre 14 y 100 años.');
    }
    
    if (!curso) {
        errores.push('Debe seleccionar un curso.');
    }
    
    if (!jornada) {
        errores.push('Debe seleccionar una jornada.');
    }
    
    if (!aceptaReglamento) {
        errores.push('Debe aceptar el reglamento estudiantil.');
    }
    
    // Mostrar errores o procesar formulario
    if (errores.length > 0) {
        errorElement.textContent = errores.join(' ');
    } else {
        // Crear objeto estudiante y agregar al arreglo
        const estudiante = { nombre, edad, curso, jornada };
        estudiantes.push(estudiante);
        
        // Mostrar resultado
        resultadoElement.textContent = `¡Bienvenido/a ${nombre}! Has sido registrado/a en ${curso} (${jornada}) a los ${edad} años.`;
        
        // Actualizar resumen de jornadas
        mostrarResumenJornadas();
        
        // Limpiar formulario
        document.getElementById('formEstudiante').reset();
    }
}

// Función para limpiar el formulario de estudiante
function limpiarFormularioEstudiante() {
    document.getElementById('formEstudiante').reset();
    
    // Limpiar mensajes
    document.querySelector('#formEstudiante + .resultados .resultado').textContent = '';
    document.querySelector('#formEstudiante + .resultados .error').textContent = '';
}

// Event listeners para el ejercicio 1
document.getElementById('formEstudiante').addEventListener('submit', procesarFormularioEstudiante);
document.getElementById('limpiarEstudiante').addEventListener('click', limpiarFormularioEstudiante);

// Ejercicio 2: Calculadora de Promedio de Notas
const notas = [];

// Función para agregar una nota
function agregarNota() {
    const notaInput = document.getElementById('nota');
    const errorElement = document.querySelector('#formNotas + .notas-agregadas + .resultados .error');
    const listaNotas = document.getElementById('listaNotas');
    
    // Limpiar mensajes anteriores
    errorElement.textContent = '';
    
    // Obtener y validar la nota
    const nota = parseFloat(notaInput.value);
    
    if (isNaN(nota) || nota < 1.0 || nota > 7.0) {
        errorElement.textContent = 'La nota debe ser un número entre 1.0 y 7.0';
        return;
    }
    
    // Agregar la nota al arreglo
    notas.push(nota);
    
    // Actualizar la lista de notas
    const li = document.createElement('li');
    li.textContent = `Nota: ${nota.toFixed(1)}`;
    listaNotas.appendChild(li);
    
    // Limpiar el campo de entrada
    notaInput.value = '';
    notaInput.focus();
}

// Función para eliminar la última nota
function eliminarUltimaNota() {
    if (notas.length > 0) {
        notas.pop();
        const listaNotas = document.getElementById('listaNotas');
        listaNotas.removeChild(listaNotas.lastChild);
    }
}

// Función para limpiar TODAS las notas
function limpiarTodasLasNotas() {
    // Vaciar el arreglo de notas
    notas.length = 0;
    
    // Limpiar la lista visual de notas
    const listaNotas = document.getElementById('listaNotas');
    listaNotas.innerHTML = '';
    
    // Limpiar el campo de entrada
    document.getElementById('nota').value = '';
    
    // Limpiar resultados y errores
    const resultadoElement = document.querySelector('#formNotas + .notas-agregadas + .resultados .resultado');
    const errorElement = document.querySelector('#formNotas + .notas-agregadas + .resultados .error');
    resultadoElement.textContent = '';
    errorElement.textContent = '';
}

// Función para calcular el promedio
function calcularPromedio() {
    const resultadoElement = document.querySelector('#formNotas + .notas-agregadas + .resultados .resultado');
    const errorElement = document.querySelector('#formNotas + .notas-agregadas + .resultados .error');
    
    // Limpiar mensajes anteriores
    resultadoElement.textContent = '';
    errorElement.textContent = '';
    
    // Validar que hay notas
    if (notas.length === 0) {
        errorElement.textContent = 'Debe agregar al menos una nota para calcular el promedio.';
        return;
    }
    
    // Calcular el promedio
    let suma = 0;
    for (const nota of notas) {
        suma += nota;
    }
    
    const promedio = suma / notas.length;
    
    // Determinar si está aprobado o reprobado
    const estado = promedio >= 4.0 ? 'Aprobado' : 'Reprobado';
    const claseEstado = promedio >= 4.0 ? 'aprobado' : 'reprobado';
    
    // Mostrar resultado
    resultadoElement.innerHTML = `
        <strong>Total de notas:</strong> ${notas.length}<br>
        <strong>Promedio:</strong> ${promedio.toFixed(2)}<br>
        <strong class="${claseEstado}">Estado: ${estado}</strong>
    `;
}

// Función para borrar el promedio mostrado
function borrarPromedio() {
    const resultadoElement = document.querySelector('#formNotas + .notas-agregadas + .resultados .resultado');
    resultadoElement.textContent = '';
    
    // También limpiamos el mensaje de error por si existe
    const errorElement = document.querySelector('#formNotas + .notas-agregadas + .resultados .error');
    errorElement.textContent = '';
}

// Event listeners para el ejercicio 2
document.getElementById('agregarNota').addEventListener('click', agregarNota);
document.getElementById('calcularPromedio').addEventListener('click', calcularPromedio);
document.getElementById('eliminarUltima').addEventListener('click', eliminarUltimaNota);
document.getElementById('borrarPromedio').addEventListener('click', borrarPromedio);
document.getElementById('limpiarTodo').addEventListener('click', limpiarTodasLasNotas);

// Permitir agregar nota con Enter
document.getElementById('nota').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        agregarNota();
    }
});