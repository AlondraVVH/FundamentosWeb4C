function Suma_indices() {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    alert(arr[0] + arr[arr.length - 1] + arr[arr.length - 2]);
}

function Producto_pares() {
    const arr = [2, 4, 6, 8, 10, 12];
    alert(arr.reduce((prod, val) => prod * val, 1));
}
