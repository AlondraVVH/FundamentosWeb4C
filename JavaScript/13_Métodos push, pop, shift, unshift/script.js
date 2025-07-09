
const resultado = document.getElementById("resultado");
function agregarElementoCompra(){
     //valor input
    let elemento = document.getElementById("lista").value;
    //Crear elemento HTML --> CreateElement
    let item = document.createElement("li");
    item.innerText = elemento; //<li>--InnerText--</li>
    //appendChild inserta valor hijo en Padre
    // resultado(<ul>(item(<li></li>))</ul>)
    resultado.appendChild(item);
}

let carrito = [];
function mostrarListaCompra(){
    const lista = document.getElementById("resultado2");
    lista.innerHTML = ""; // limpiar antes de mostrar

    for (let i = 0; i < carrito.length; i++){
        const li = document.createElement("li");
        li.className = "list-grup-item d-flex justify-content-between aling-items-center mb-2";
        li.textContent = `- ${carrito[i]}`;
        lista.appendChild(li);
    }
}

function agregarElemento2() {
    const input = document.getElementById("Lista2")
    const valor = input.value.trim(); // guardo valor sin espacios extras

    if (valor === "") return;
    carrito.push(valor); // agregar valor al final 

    input.value = "";
    input.focus(); // agrega foco hacia el input 

    mostrarListaCompra()
}

function eliminarUltimoElemento(){
    if (carrito.length > 0){
        carrito.pop();
    }
    mostrarListaCompra()
}

