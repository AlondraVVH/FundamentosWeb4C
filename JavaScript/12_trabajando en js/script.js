// Ejercicio 1: Registro de Participantes
function ejercicio1() {
    let participantes = [];
    let nombre = prompt("Ingrese un nombre (escriba 'salir' para terminar):");

    while (nombre.toLowerCase() !== "salir") {
        participantes.push(nombre);
        nombre = prompt("Ingrese un nombre (escriba 'salir' para terminar):");
    }

    let mensaje = `Total de participantes: ${participantes.length}\nLista: ${participantes.join(", ")}`;
    if (participantes.length > 5) {
        mensaje += `\n¡Gran asistencia! Más de 5 participantes registrados.`;
    }

    alert(mensaje);
}

// Ejercicio 2: Simulador de Caja Registradora
function ejercicio2() {
    let productos = ["manzana", "pan", "leche"];
    let mensaje = "";

    for (let i = 0; i < 5; i++) {
        if (productos.length > 0) {
            let productoVendido = productos.pop();
            mensaje += `Producto vendido: ${productoVendido}\n`;
        } else {
            mensaje += "Sin stock\n";
        }
    }

    alert(mensaje);
}

// Ejercicio 3: Calculadora de Promedios
function ejercicio3() {
    let notas = [];

    for (let i = 0; i < 5; i++) {
        let nota = parseFloat(prompt(`Ingresa la nota ${i + 1}:`));
        notas.push(nota);
    }

    let suma = notas.reduce((a, b) => a + b, 0);
    let promedio = suma / notas.length;
    let resultado = promedio >= 4.0 ? "Aprobado ✅" : "Reprobado ❌";

    alert(`Promedio: ${promedio.toFixed(2)} - ${resultado}`);
}

// Ejercicio 4: Separar Números Pares e Impares
function ejercicio4() {
    let numeros = [];
    let pares = [];
    let impares = [];

    for (let i = 0; i < 6; i++) {
        let numero = parseInt(prompt(`Ingresa el número ${i + 1}:`));
        numeros.push(numero);
    }

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            pares.push(numeros[i]);
        } else {
            impares.push(numeros[i]);
        }
    }

    let mensaje = `Números pares: ${pares.join(", ")}\nNúmeros impares: ${impares.join(", ")}`;
    alert(mensaje);
}
