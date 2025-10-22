// Buenas Prácticas: Usar eventos DOMContentLoaded para asegurar que todo el HTML está cargado
document.addEventListener('DOMContentLoaded', function() {
    
    // Función para añadir efecto de resaltado a las tarjetas de habilidades
    function addHoverEffect(element) {
        // 'this' hace referencia al elemento del DOM que disparó el evento (la tarjeta)
        element.addEventListener('mouseover', function() {
            this.classList.add('shadow-lg', 'border-primary', 'scale-up'); 
        });
        
        element.addEventListener('mouseout', function() {
            this.classList.remove('shadow-lg', 'border-primary', 'scale-up');
        });
    }

    // Seleccionar todas las tarjetas de habilidades (asumiendo que tienen la clase 'skill-card')
    const skillCards = document.querySelectorAll('.skill-card');
    
    // Iterar sobre ellas y aplicar el evento
    skillCards.forEach(card => {
        addHoverEffect(card);
    });

    // Otra interactividad: Mostrar/Ocultar un botón de "Volver Arriba"
    const backToTopButton = document.getElementById('backToTop');
    window.onscroll = function() {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    };
});