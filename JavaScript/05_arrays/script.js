// Crear un array con los números 1, 2, 3, 4, 5, 6, 7
function Suma_indices() {
    const arreglo = [1, 2, 3, 4, 5, 6, 7];
    const resultado = arreglo[arreglo.length - 1] + arreglo[arreglo.length - 2] + arreglo[0];
    alert(`El array es: ${arreglo}\nEl resultado de la suma es: ${resultado}`);
}

function Producto_pares() {
    const arreglo = [2, 4, 6, 8, 10, 12];
    const resultado = arreglo.reduce((producto, valor) => valor % 2 === 0 ? producto * valor : producto, 1);
    alert(`El array es: ${arreglo}\nEl producto de los valores pares es: ${resultado}`);
}
