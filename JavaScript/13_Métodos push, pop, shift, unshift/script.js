function ejercicio1() {
    let compras = [];
    compras.push("pan", "leche", "huevos");
    mostrarResultado("ejercicio1", `Arreglo de compras: [${compras.join(", ")}]`);
}

function ejercicio2() {
    let compras = ["pan", "leche", "huevos"];
    let ultimoProducto = compras.pop();
    mostrarResultado("ejercicio2", `Producto eliminado: ${ultimoProducto}<br>Arreglo actualizado: [${compras.join(", ")}]`);
}

function ejercicio3() {
    let colores = ["rojo", "azul"];
    colores.unshift("amarillo");
    mostrarResultado("ejercicio3", `Arreglo de colores: [${colores.join(", ")}]`);
}

function ejercicio4() {
    let colores = ["amarillo", "rojo", "azul"];
    let primerColor = colores.shift();
    mostrarResultado("ejercicio4", `Color eliminado: ${primerColor}<br>Arreglo actualizado: [${colores.join(", ")}]`);
}

function ejercicio5() {
    let numeros = [10, 20, 30];
    numeros.push(40);
    numeros.shift();
    numeros.unshift(5);
    numeros.pop();
    mostrarResultado("ejercicio5", `Arreglo final de números: [${numeros.join(", ")}]`);
}

function ejercicio6() {
    let orden = [];
    orden.unshift(1, 2, 3);
    mostrarResultado("ejercicio6", `Arreglo 'orden': [${orden.join(", ")}]`);
}

function ejercicio7() {
    let historial = [];
    historial.push("Hola", "¿Cómo estás?", "Adiós");
    let mensajeEliminado = historial.pop();
    mostrarResultado("ejercicio7", `Mensaje eliminado: ${mensajeEliminado}`);
}

function ejercicio8() {
    let cola = ["Cliente1", "Cliente2", "Cliente3"];
    cola.shift();
    cola.push("Cliente4");
    mostrarResultado("ejercicio8", `Cola actualizada: [${cola.join(", ")}]`);
}

function ejercicio9() {
    let nombres = ["Pedro", "Juan", "Luis"];
    nombres.pop();
    nombres.unshift("Mateo");
    nombres.push("Ana");
    mostrarResultado("ejercicio9", `Arreglo de nombres actualizado: [${nombres.join(", ")}]`);
}

function ejercicio10() {
    let pila = ["Elemento1", "Elemento2", "Elemento3"];
    let elemento1 = pila.pop();
    let elemento2 = pila.pop();
    let colaNueva = ["Persona1", "Persona2", "Persona3"];
    let atendido1 = colaNueva.shift();
    let atendido2 = colaNueva.shift();
    mostrarResultado("ejercicio10", `Elementos eliminados de la pila: ${elemento1}, ${elemento2}<br>Personas atendidas: ${atendido1}, ${atendido2}`);
}

function ejercicio11() {
    let dias = ["lunes", "miércoles", "jueves"];
    dias.splice(1, 0, "martes");
    dias.push("viernes");
    mostrarResultado("ejercicio11", `Días de la semana laboral: [${dias.join(", ")}]`);
}

function ejercicio12() {
    let personas = ["Carlos", "María", "Luis", "Ana", "Sofía"];
    personas.shift();
    personas.pop();
    personas.unshift("Pedro");
    personas.splice(3, 1, "Camila");
    mostrarResultado("ejercicio12", `Registro de personas actualizado: [${personas.join(", ")}]`);
}

function ejercicio13() {
    let tareas = ["comer", "estudiar", "dormir", "jugar", "ver TV", "navegar"];
    tareas.splice(2, 4, "lavar la ropa", "organizar escritorio");
    mostrarResultado("ejercicio13", `Lista de tareas actualizada: [${tareas.join(", ")}]`);
}

// Función auxiliar para mostrar resultados
function mostrarResultado(id, mensaje) {
    const div = document.getElementById(id);
    div.innerHTML = `<p>${mensaje}</p>`;
    div.style.display = "block";
}
