function parInpar() {
    let numero = parseInt(prompt("Introduce un número para verificar si es par o impar:"));
    if (numero % 2 === 0) {
        alert("El número es par.");
    } else {
        alert("El número es impar.");
    }
}

function calculadoraImc() {
    let peso = parseFloat(prompt ("Introduce tu peso en kg:"));
    let altura = parseFloat(prompt ("Introduce tu altura en centimetros:"));
    altura = altura / 100;
    let calculadoraImc = peso / (altura * altura);
        if ( calculadoraImc < 18.5) {
        alert("Bajo peso");
    }else if ( calculadoraImc >= 18.5 && calculadoraImc <= 24.9){
        alert("Peso normal");
    }else if ( calculadoraImc >= 25)
        alert("Sobrepeso");
}

function calculadoraNotas() {
    let nota1 = parseFloat(prompt("Introduce la primera nota:"));
    let nota2 = parseFloat(prompt("Introduce la segunda nota:"));
    let nota3 = parseFloat(prompt("Introduce la tercera nota:"));

    let promedio = (nota1 + nota2 + nota3) / 3;

    if (promedio >= 4) {
        alert("Aprobado ");
    } else {
        alert("Desaprobado");
    }
}

