// 1 Bucle while: Imprimir del 1 a n
function imprimirUnoAN() {
    let n = parseInt(prompt("Ingresa un número límite (n):"));
    let count = 1;
    let array = [];
    while (count <= n) {
        array.push(n);// inseratar un valor al final del array
        count++; // incrementa 1 al contador 
    }
    alert(`Números del 1 al ${n}: ${array.join(" - ")}`);
}

// 2 Bucle while: Cuenta regresiva del n al 1
function cuentaRegresivaN() {
    let n = parseInt(prompt("Ingresa un número para la cuenta regresiva:"));
    let array = [];
    while (n >= 1) {
        array.push(n);
        n--;
    }
    alert(`Cuenta regresiva: ${array.join(" - ")}`);
}

// 3 Bucle for: Sumar los n primeros números
function sumarNPrimeros() {
    let n = parseInt(prompt("Ingresa un número para sumar los primeros n números:"));
    let suma = 0;
    let array = [];
    for (let i = 1; i <= n; i++) {
        suma += i;
        array.push(i);
    }
    alert(`Números sumados: ${array.join(" + ")} = ${suma}`);
}

// 4 Bucle for: Imprimir múltiplos de 2 del 1 al n
function imprimirMultiplosDeDosN() {
    let n = parseInt(prompt("Ingresa el límite (n) para encontrar múltiplos de 2:"));
    let array = [];
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            array.push(i);
        }
    }
    alert(`Múltiplos de 2 hasta ${n}: ${array.join(" - ")}`);
}
