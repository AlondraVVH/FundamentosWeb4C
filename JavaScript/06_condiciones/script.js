// Problema 2: Evaluación de Temperatura
function evaluarTemperatura() {
    let temperatura = 10; // Cambia este valor para probar diferentes escenarios

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
    let nombreUsuario = "usuario123";
    let contraseña = "secreto"; 
    if (nombreUsuario === "usuario123" && contraseña === "secreto") {
        alert("Acceso concedido.");
        } else {
            alert("Acceso denegado.");
        }
    }




// Problema 4: Determinar el Signo de un Número
function determinarSigno() {
    let numero = 5; // Cambia este valor para probar diferentes escenarios

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
    let puntuacion = 85; // Cambia este valor para probar diferentes escenarios

    if (puntuacion >= 90) {
        alert("Excelente.");
    } else if (puntuacion >= 70) {
        alert("Buen trabajo.");
    } else {
        alert("Necesitas mejorar.");
    }
} 