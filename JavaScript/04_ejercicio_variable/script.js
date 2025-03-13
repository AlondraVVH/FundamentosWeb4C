console.log("Vinculado correctamente...")
// Ejercicio 1: Declaración de variables
// Instrucciones: Declara dos variables numéricas llamadas 'ahora' y 'fecha_nac'.
// Luego, calcula y muestra en un mensaje la edad actual basada en el año de nacimiento.

function declararVariables() {
    // Tu código aquí

    let ahora = parseInt ( prompt ("Ingrese Año Actual:")); // Año actual
    let fecha_nac = parseInt ( prompt ("Ingrese Año de Nacimiento:"));
    let edad = ahora - fecha_nac;
    alert("Tu edad es: " + edad);
    }
    
    // Ejercicio 2: Asignación de valores
    // Instrucciones: Completa la función para asignar el valor de 'var1' a 'var2' y luego muestra el valor de 'var2'.
    function asignarValores() {
        // Tu código aquí
        let var1 = parseInt(prompt("Ingrese el valor de var1:"));
        let var2 = var1;    
        alert("El valor de var2 es: " + var2);
    }
    
    // Ejercicio 3: Operaciones matemáticas
    // Instrucciones: Completa la función para realizar las siguientes operaciones:
    // Suma 'num1','num2' y 'num3', resta 'num1' de 'num3', multiplica 'num2' por 'num3', y divide 'num1' entre '120'.
    // Muestra los resultados en un mensaje.
    function realizarOperaciones() {
        // Tu código aquí
        let num1 = parseInt(prompt("Ingrese el primer número:"));
        let num2 = parseInt(prompt("Ingrese el segundo número:"));
        let num3 = parseInt(prompt("Ingrese el tercer número:"));
        let suma = num1 + num2 + num3;
        let resta = num1 - num3;
        let multiplicacion = num2 * num3;
        let division = num1 / 120;
        let resultados = "La suma de los tres números es: " + suma + "\n" +
        "La resta de num1 y num3 es: " + resta + "\n" +
        "La multiplicación de num2 y num3 es: " + multiplicacion + "\n" +
        "La división de num1 entre 120 es: " + division
        alert(resultados);
    }
    
    // Ejercicio 4: Manipulación de cadenas
    // Instrucciones: Completa la función para construir un mensaje utilizando las variables 'direccion' y 'n_casa'.
    // Luego, muestra la longitud del mensaje y el antepenultimo en el mensaje. (.length)
    function manipularCadenas() {
    
    // Tu código aquí
    let direccion = prompt("Ingrese su dirección:");
    let n_casa = prompt("Ingrese el número de casa:");
    let mensaje = "" + direccion + " " + n_casa;
    alert("La dirección es: " + mensaje + "\nCantidad de caracteres: " + mensaje.length 
    + "\nCarácter antepenúltimo: " + mensaje[mensaje.length - 3]);
    } 