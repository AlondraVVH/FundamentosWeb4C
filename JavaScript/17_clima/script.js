// Datos originales en Celsius para la conversión (ya no se usan para dibujar el HTML)
const weatherDataC = [
    { max: 24, min: 18 }, // Day 0: Today
    { max: 27, min: 19 }, // Day 1: Tomorrow
    { max: 21, min: 16 }, // Day 2: Friday
    { max: 26, min: 21 }  // Day 3: Saturday
];

// Función para convertir Celsius a Fahrenheit
function cToF(c) {
    return Math.round((c * 9 / 5) + 32);
}

// --------------------- Lógica de Interacción ---------------------

// 1. Ocultar la política de cookies
function dismissCookie() {
    const cookie = document.getElementById('cookie-policy');
    if (cookie) {
        cookie.style.display = 'none'; 
    }
}

// 2. Mostrar un modal (diálogo) de carga de ciudad
function showCityLoading(cityName) {
    const modal = document.getElementById('loading-modal');
    const message = document.getElementById('loading-message');
    
    if (modal && message) {
        message.innerText = `Cargando informe meteorológico para ${cityName}...`;
        modal.style.display = 'flex';
    }
}

// 3. Ocultar un modal (diálogo)
function dismissModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.style.display = 'none';
    }
}

// 4. Cambiar la unidad de temperatura (Desafío)
function changeTempUnit(element) {
    const unit = element.value; 
    
    // Iterar sobre los 4 días de pronóstico
    weatherDataC.forEach((dayData, index) => {
        // Obtener los elementos HTML por su ID (e.g., "temp-max-0")
        const maxElement = document.getElementById(`temp-max-${index}`);
        const minElement = document.getElementById(`temp-min-${index}`);
        
        let maxTemp;
        let minTemp;
        
        if (unit === 'F') {
            maxTemp = cToF(dayData.max);
            minTemp = cToF(dayData.min);
        } else {
            // Si es 'C', usamos el valor original de los datos
            maxTemp = dayData.max;
            minTemp = dayData.min;
        }
        
        // Actualizar el contenido de los elementos HTML
        if (maxElement) maxElement.innerText = `${maxTemp}°`;
        if (minElement) minElement.innerText = `${minTemp}°`;
    });
}