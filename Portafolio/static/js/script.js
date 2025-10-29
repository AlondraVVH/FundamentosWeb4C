document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Efecto Hover en Tarjetas (Uso de 'this')
    const interactiveCards = document.querySelectorAll('.skill-card, .portfolio-item');
    
    interactiveCards.forEach(card => {
        // Al pasar el ratón (mouseover)
        card.addEventListener('mouseover', function() {
            // 'this' se refiere al elemento DOM que activó el evento (la tarjeta)
            this.classList.add('shadow-lg', 'scale-up-effect'); 
        });
        
        // Al quitar el ratón (mouseout)
        card.addEventListener('mouseout', function() {
            // 'this' nuevamente se refiere a la tarjeta
            this.classList.remove('shadow-lg', 'scale-up-effect');
        });
    });

    // 2. Control del Botón "Volver Arriba"
    const backToTopButton = document.getElementById('backToTop');
    
    window.addEventListener('scroll', function() {
        // Muestra/oculta el botón basado en el scroll
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    });

    backToTopButton.addEventListener('click', function() {
        // Desplazamiento suave hacia la parte superior
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // 3. Cerrar el menú de navegación en móviles después de hacer clic en un enlace
    const navLinks = document.querySelectorAll('.nav-link');
    const navbarCollapse = document.getElementById('navbarResponsive');
    const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navbarCollapse.classList.contains('show')) {
                bsCollapse.hide();
            }
        });
    });
});