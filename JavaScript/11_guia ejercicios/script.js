// 1. Sumar los N primeros números naturales
function ejercicio1() {
    let n = parseInt(prompt("Ingresa un número N: "));
    let suma = 0;
    let array = [];
    for (let i = 1; i <= n; i++) {
    suma += i;
    array.push(i);
    }
    alert(`La suma de los numeros es: ${array.join(" + ")} es: ${suma}`);
}

// 2. Escribir los 100 primeros números pares
function ejercicio2() {
    let pares = [];
    for (let i = 1; i <= 200; i++) {
        if (i % 2 === 0) {
            pares.push(i)
    }
}
    alert(`Estos son los primeros 100 números pares: ${pares.join(" - ")}`);
}

// 3. Escribir los 100 primeros números impares
function ejercicio3() {
    let impares = [];
    for (let i = 1; i <= 200; i++) {
        if (i % 2 !== 0) {
            impares.push(i)
        }
    }
    alert(`Estos son los primeros 100 números impares: ${impares.join(" - ")}`);
}

// 4. Sumar 5 números leídos por teclado
function ejercicio4() {
    let suma = 0;
    let numeros = [];

    for (let i = 1; i <= 5; i++) {
        let n = parseInt(prompt(`Ingresa el número ${i}:`));
        numeros.push(n);
        suma += n;
    }

    alert(`Números ingresados: ${numeros.join(", ")} \nLa suma es: ${suma}`);

}


// 5. Sumar N números leídos por teclado
function ejercicio5() {
    let n = parseInt(prompt("¿Cuántos números deseas sumar?"));
    let suma = 0;
    let numeros = [];

    for (let i = 1; i <= n; i++) {
        let num = Number(prompt(`Número ${i}:`));
        numeros.push(num);
        suma += num;
    }

    alert(`Números ingresados: ${numeros.join(", ")}\nSuma total: ${suma}`);
}

// 6. Operaciones entre 2 números
function ejercicio6() {
    let a = prompt("6. Primer número:");
    let b = prompt("Segundo número:");
    const op = prompt("Operación (+, -, *, /):");

    if (!a || !b || !op) {
        alert("Faltan valores requeridos");
        return;
    }

    a = parseFloat(a);
    b = parseFloat(b);

    if (!a && a !== 0 || !b && b !== 0) {
        alert("Los valores ingresados no son válidos");
        return;
    }

    let resultado;
    if (op === "+") resultado = a + b;
    else if (op === "-") resultado = a - b;
    else if (op === "*") resultado = a * b;
    else if (op === "/") {
        if (b === 0) {
            alert("No se puede dividir por cero");
            return;
        }
        resultado = a / b;
    } else {
        alert("Operación no válida");
        return;
    }

    alert(`Operación: ${a} ${op} ${b} = ${resultado}`);
}

// 7. Sumar N números pares (ingresados por usuario)
function ejercicio7() {
    let n = parseInt(prompt("7. ¿Cuántos números pares deseas sumar?"));
    if (!n || n <= 0) {
        alert("Debe ser un número mayor a 0");
        return;
    }

    let suma = 0;
    let pares = [];
    for (let i = 1; i <= n; i++) {
        let num;
        do {
            num = parseInt(prompt(`Ingresa el número par #${i}:`));
            if (!num && num !== 0 || num % 2 !== 0) {
                alert("Solo se aceptan números pares");
                num = null;
            }
        } while (num === null);

        pares.push(num);
        suma += num;
    }
    alert(`Números ingresados: ${pares.join(", ")}\nSuma total: ${suma}`);
}

// 8. Sumar los N primeros pares
function ejercicio8() {
    let n = Number(prompt("8. ¿Cuántos pares (2,4,6...) sumar?"));
    if (n <= 0) return;
    let suma = 0;
    let pares = [];
    for (let i = 1; i <= n; i++) {
        let par = i * 2;
        pares.push(par);
        suma += par;
    }
    alert(`Números pares: ${pares.join(" + ")}\nSuma total: ${suma}`);
}

// 9. Sumar N números impares (ingresados por usuario)
function ejercicio9() {
    let n = Number(prompt("9. ¿Cuántos impares deseas sumar?"));
    if (!n || n <= 0) {
        alert("Ingresa un número positivo");
        return;
    }

    let suma = 0;
    let impares = [];
    for (let i = 1; i <= n; i++) {
        let num;
        do {
            num = Number(prompt(`Ingresa el impar #${i}:`));
            if (!num && num !== 0 || num % 2 === 0) {
                alert("Debe ser un número impar");
                num = undefined;
            }
        } while (num === undefined);

        impares.push(num);
        suma += num;
    }
    alert(`Números impares ingresados: ${impares.join(", ")}\nSuma total: ${suma}`);
}

// 10. Sumar los N primeros impares
function ejercicio10() {
    let n = Number(prompt("10. ¿Cuántos impares (1,3,5...) sumar?"));
    if (n <= 0) return;
    let suma = 0;
    let impares = [];
    for (let i = 0; i < n; i++) {
        let impar = 2 * i + 1;
        impares.push(impar);
        suma += impar;
    }
    alert(`Números impares: ${impares.join(" + ")}\nSuma total: ${suma}`);
}

// 11. Sumar los N primeros múltiplos de 3
function ejercicio11() {
    let n = Number(prompt("11. ¿Cuántos múltiplos de 3 sumar?"));
    if (n <= 0) return;
    let suma = 0;
    let multiplos = [];
    for (let i = 1; i <= n; i++) {
        let m3 = i * 3;
        multiplos.push(m3);
        suma += m3;
    }
    alert(`Múltiplos de 3: ${multiplos.join(" + ")}\nSuma total: ${suma}`);
}

// 12. Calcular factorial de N
function ejercicio12() {
    let n = Number(prompt("12. Factorial de:"));
    if (n < 0) return;
    let fact = 1;
    let pasos = [];
    for (let i = 1; i <= n; i++) {
        pasos.push(i);
        fact *= i;
    }
    alert(`${n}! = ${pasos.join(" × ")} = ${fact}`);
}

// 13. Celsius a Fahrenheit
function ejercicio13() {
    let celsius = parseFloat(prompt("13. Grados Celsius:"));
    if (!celsius && celsius !== 0) {
        alert("Ingresa solo números");
        return;
    }
    let fahrenheit = (celsius * 1.8) + 32;
    alert(`${celsius}°C = ${fahrenheit.toFixed(1)}°F`);
}

// 14. Palabra más larga
function ejercicio14() {
    let frase = prompt("14. Ingresa una frase:");
    let palabras = frase.split(" ");
    let larga = "";
    for (let p of palabras) if (p.length > larga.length) larga = p;
    alert(`Palabra más larga: ${larga}`);
}

// 15. Números primos hasta N
function ejercicio15() {
    let n = Number(prompt("15. Mostrar primos hasta:"));
    let primos = [];
    for (let i = 2; i <= n; i++) {
        let esPrimo = true;
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                esPrimo = false;
                break;
            }
        }
        if (esPrimo) primos.push(i);
    }
    alert(`Primos hasta ${n}: ${primos.join(", ")}`);
}

// 16. Contador de caracteres
function ejercicio16() {
    let texto = prompt("16. Ingresa un texto:");
    let conteo = {};
    for (let c of texto) {
        if (conteo[c]) conteo[c]++;
        else conteo[c] = 1;
    }
    let resumen = Object.entries(conteo).map(([k,v]) => `${k}: ${v}`).join("\n");
    alert(`Conteo de caracteres:\n${resumen}`);
}

// 17. Ingresar N valores e imprimir solo los pares
function ejercicio17() {
    let input = prompt("17. Ingresa números separados por comas:");
    if (!input) {
        alert("No ingresaste nada");
        return;
    }

    let numeros = [];
    for (let item of input.split(',')) {
        let num = Number(item.trim());
        if (!isNaN(num)) numeros.push(num);
    }

    let pares = numeros.filter(n => n % 2 === 0);

    if (pares.length === 0) {
        alert("No se encontraron números pares");
    } else {
        alert(`Números pares: ${pares.join(", ")}`);
    }
}
