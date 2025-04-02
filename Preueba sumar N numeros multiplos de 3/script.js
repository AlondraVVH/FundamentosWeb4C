function sumarNMultiplosDeTres() {
    let n = parseInt(prompt("Ingresa cuántos múltiplos de 3 deseas sumar:"));

    if (n == "" || n <= 0) {
        alert("Por favor, ingresa un número válido.");
        return;
    }

    let suma = 0;
    let arrayInicial = [];
    let arrayMultiploTres = [];

    for (let i = 0; i < n; i++) {  // Corregido: empieza desde 0 y usa < en lugar de <=
        let numero = parseInt(prompt(`Número ${i + 1} de ${n}:`));

        arrayInicial.push(numero);  // Guarda TODOS los números ingresados

        if (numero % 3 === 0) {
            suma += numero;
            arrayMultiploTres.push(numero);  // Guarda solo los múltiplos de 3
            alert(`${numero} es múltiplo de 3 ✔️`);
        } else {
            alert(`${numero} NO es múltiplo de 3 ❌`);
        }
    }

    alert(`
        RESULTADOS:
        
        Todos los números ingresados: ${arrayInicial.join(", ")}
        Múltiplos de 3 encontrados: ${arrayMultiploTres.join(", ")}
        Suma de múltiplos de 3: ${arrayMultiploTres.join(" + ")} = ${suma}
        `);
    }

