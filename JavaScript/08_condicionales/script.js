// Imprimir del 1 al 5 con while
function imprimirUnoACinco() {
    let num = 1;
    let resultado = [];
    while (num <= 5) {
        resultado.push(num);
        num++;
    }
    alert(`Números del 1 al 5: ${resultado.join(', ')}`);
}

// Cuenta regresiva del 10 al 1 con while
function cuentaRegresiva() {
    let num = 10;
    let resultado = [];
    while (num >= 1) {
        resultado.push(num);
        num--;
    }
    alert(`Cuenta regresiva: ${resultado.join(', ')}`);
}

// Sumar los primeros 5 números con for
function sumarPrimerosCinco() {
    let suma = 0;
    for (let i = 1; i <= 5; i++) {
        suma += i;
    }
    alert(`La suma de los primeros 5 números es: ${suma}`);
}

// Imprimir múltiplos de 2 del 1 al 10 con for
function imprimirMultiplosDeDos() {
    let resultado = [];
    for (let i = 1; i <= 10; i++) {
        if (i % 2 === 0) {
            resultado.push(i);
        }
    }
    alert(`Múltiplos de 2 del 1 al 10: ${resultado.join(', ')}`);
}