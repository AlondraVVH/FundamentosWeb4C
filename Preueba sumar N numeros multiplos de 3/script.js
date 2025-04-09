// Función principal
function sumarNMultiplosDeTres() {
    // Pedir al usuario cuántos números quiere ingresar
    let n = parseInt(prompt("Ingresa cuántos múltiplos de 3 deseas sumar:"));

    // Validar que el número sea mayor a 0
    if (n == "" || n <= 0) {
        alert("Por favor, ingresa un número válido.");
        return;
    }

    // Inicializar variables
    let suma = 0;
    let arrayInicial = [];       // Guarda todos los números
    let arrayMultiploTres = [];  // Guarda solo los múltiplos de 3

    // Repetir hasta que se ingresen N números
    for (let i = 0; i < n; i++) {
        let numero = parseInt(prompt(`Número ${i + 1} de ${n}:`));

        arrayInicial.push(numero); // Guardar el número ingresado

        // Verificar si es múltiplo de 3
        if (numero % 3 === 0) {
            suma += numero;
            arrayMultiploTres.push(numero); // Guardar si es múltiplo
            alert(`${numero} es múltiplo de 3 ✔️`);
        } else {
            alert(`${numero} NO es múltiplo de 3 ❌`);
        }
    }

    // Mostrar resultados
    alert(`
        RESULTADOS:
        
        Todos los números ingresados: ${arrayInicial.join(", ")}
        Múltiplos de 3 encontrados: ${arrayMultiploTres.join(", ")}
        Suma de múltiplos de 3: ${arrayMultiploTres.join(" + ")} = ${suma}
    `);
}