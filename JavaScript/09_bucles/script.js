function imprimirUnoACinco() {
    let i = 1;
    let resultado = "";
    while (i <= 5) {
        resultado += i + "\n";
        i++;
    }
    alert(resultado);
}

function cuentaRegresiva() {
    let i = 10;
    let resultado = "";
    while (i >= 1) {
        resultado += i + "\n";
        i--;
    }
    alert(resultado);
}

function sumarPrimerosCinco() {
    let suma = 0;
    for (let i = 1; i <= 5; i++) {
        suma += i;
    }
    alert("Suma de los primeros 5 números: " + suma);
}

function imprimirMultiplosDeDos() {
    let resultado = "";
    for (let i = 1; i <= 10; i++) {
        if (i % 2 === 0) {
            resultado += i + "\n";
        }
    }
    alert(resultado);
}