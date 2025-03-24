// Función para verificar acceso según la edad y una verificación previa
function verificacion() {
    let verificacion = false; // Se define una variable booleana 'verificacion' y se inicializa en 'false'
    let edad = prompt("Ingresa tu edad: "); // Se solicita la edad al usuario (devuelve un string)

    // Se evalúa si la edad es mayor o igual a 18 Y si 'verificacion' es 'true'
    if (edad >= 18 && verificacion == true) { 
        alert("Acceso permitido"); // Si ambas condiciones se cumplen, muestra este mensaje
    } else {
        alert("Acceso denegado"); // Si alguna condición falla, muestra este mensaje
    }
}

// Función para determinar si un usuario es elegible para un descuento
function elegibilidad() {
    let edad = parseInt(prompt("Ingresa tu edad: "), 10); // Se solicita la edad y se convierte a número entero
    let esEstudiante = confirm("¿Eres estudiante? (Aceptar para Sí, Cancelar para No)"); // Pregunta si es estudiante (true o false)

    // Si la edad es 60 o más, o si es estudiante, se aplica el descuento
    if (edad >= 60 || esEstudiante) { 
        alert("Descuento aplicado");
    } else {
        alert("No tienes descuento");
    }
}

// Función para verificar si una máquina puede encender
function encenderMaquina() {
    let energiaSuficiente = confirm("¿La máquina tiene suficiente energía? (Aceptar para Sí, Cancelar para No)"); 
    // Pregunta si la máquina tiene suficiente energía (true o false)

    let interruptorEncendido = confirm("¿El interruptor está encendido? (Aceptar para Sí, Cancelar para No)"); 
    // Pregunta si el interruptor está encendido (true o false)

    // La máquina solo se enciende si ambas condiciones son verdaderas
    if (energiaSuficiente && interruptorEncendido) {
        alert("Máquina encendida"); // Si ambas son 'true', se enciende
    } else {
        alert("No se puede encender la máquina"); // Si alguna es 'false', no se enciende
    }
}

// Función para verificar si un usuario tiene acceso restringido
function accesoRestringido() {
    let bloqueado = confirm("¿Está bloqueado? (Aceptar para Sí, Cancelar para No)"); 
    // Pregunta si el usuario está bloqueado (true o false)

    let tieneCredencial = confirm("¿Tiene credencial? (Aceptar para Sí, Cancelar para No)"); 
    // Pregunta si el usuario tiene credencial (true o false)

    // Si el usuario está bloqueado o NO tiene credencial, el acceso es denegado
    if (bloqueado || !tieneCredencial) {
        alert("Acceso denegado");
    } else {
        alert("Acceso permitido"); // Si no está bloqueado y tiene credencial, el acceso es permitido
    }
}
