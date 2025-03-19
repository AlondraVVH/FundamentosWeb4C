// Problema 2: Evaluación de Temperatura
function evaluarTemperatura() {
    let temperatura = parseInt(prompt("Introduce la temperatura para evaluar:"));
    if (temperatura < 0) {
        alert("Hace frío.");
    } else if (temperatura >= 0 && temperatura < 25) {
        alert("La temperatura es agradable.");
    } else {
        alert("Hace calor.");
    }
}

// Problema 3: Verificación de Usuario y Contraseña
function verificarUsuario() {
    let nombreUsuario =parseInt(prompt("Introduce el nombre de usuario:"));
    let contraseña = parseInt(prompt("Introduce la contraseña:"));
    if (nombreUsuario === "usuario123" && contraseña === "secreto") {
        alert("Acceso concedido.");
    } else {
        alert("Acceso denegado.");
    }
}

// Problema 1: Solicitar un número y verificar si es par o impar
function verificarParidad() {
    let numero = parseInt(prompt("Introduce un número para verificar si es par o impar:"));
    if (numero % 2 === 0) {
        alert("El número es par.");
    } else {
        alert("El número es impar.");
    }
}

// Problema 4: Determinar el Signo de un Número
function determinarSigno() {
    let numero = parseInt(prompt("Introduce un número para determinar su signo:"));
    if (numero > 0) {
        alert("El número es positivo.");
    } else if (numero < 0) {
        alert("El número es negativo.");
    } else {
        alert("El número es cero.");
    }
}

// Problema 5: Evaluación de Puntuación en un Juego
function evaluarPuntuacion() {
    let puntuacion = parseInt(prompt("Introduce la puntuación del juego:"));
    if (puntuacion >= 90) {
        alert("Excelente.");
    } else if (puntuacion >= 70) {
        alert("Buen trabajo.");
    } else {
        alert("Necesitas mejorar.");
    }
}
