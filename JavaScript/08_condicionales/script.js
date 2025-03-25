function parInpar() {
    let numero = parseInt(prompt("Introduce un número para verificar si es par o impar:"));
    if (numero % 2 === 0) {
        alert("El número es par.");
    } else {
        alert("El número es impar.");
    }
}

function calculadoraImc() {
    let peso = parseInt(prompt ("Introduce tu peso en kg:"));
    let altura = parseInt(prompt ("Introduce tu altura en centimetros:"));
    altura = altura / 100;
    let calculadoraImc = peso / (altura * altura);
        if ( calculadoraImc < 18.5) {
            alert("Bajo peso");
    }else if ( calculadoraImc >= 18.5 && calculadoraImc <= 24.9){
        alert("Peso normal");
    }else if ( calculadoraImc >= 25)
        alert("Sobrepeso");
}

function calculadorNotas() {
    let nota1 = parseInt("introduce la primera nota");
    let nota2 = parseInt("introduce la segunta nota");
    let nota3 = parseInt("introduce la tercera nota");
    let promedio = (nota1 + nota2 + nota3) / 3;

    if (promedio >= 4.0) {
        alert("Aprobado con promedio:");
    } if else (promedio <=)
        alert("Reprobado con promedio:");
    }
}
