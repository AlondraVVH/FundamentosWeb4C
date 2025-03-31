// Tabla de multiplicar personalizada
function tablaDeMultiplicar() {
    let num = parseInt(prompt("Ingresa un número para ver su tabla de multiplicar:"));
    let resultado = [];
    for (let i = 1; i <= 10; i++) {
        resultado.push(`${num} x ${i} = ${num * i}`);
    }
    alert(resultado.join('\n'));
}

// Sumar N números ingresados por el usuario
function sumarNumeros() {
    let n = parseInt(prompt("¿Cuántos números deseas sumar?"));
    let suma = 0;
    for (let i = 0; i < n; i++) {
        let num = parseFloat(prompt(`Ingresa el número ${i + 1}:`));
        suma += num;
    }
    alert(`La suma total es: ${suma}`);
}

// Mostrar los números pares entre dos valores dados
function numerosPares() {
    let inicio = parseInt(prompt("Ingresa el número inicial:"));
    let fin = parseInt(prompt("Ingresa el número final:"));
    let resultado = [];
    for (let i = inicio; i <= fin; i++) {
        if (i % 2 === 0) {
            resultado.push(i);
        }
    }
    alert(`Números pares entre ${inicio} y ${fin}: ${resultado.join(', ')}`);
}
