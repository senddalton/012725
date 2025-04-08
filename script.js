function reservar() {
    // Cambia esta URL por la de tu sistema de reservas
    window.location.href = "https://senddalton.ddns.net/sites/one_porcent";
}

// Carrusel mejorado (el mismo código anterior funciona perfecto)
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.getElementById('carousel');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const cards = document.querySelectorAll('.card');
    let currentIndex = 0;
    let scrollInterval;

    // Calcular el ancho de una tarjeta + gap
    const cardStyle = window.getComputedStyle(cards[0]);
    const cardWidth = cards[0].offsetWidth + parseInt(cardStyle.marginRight);

    // Función para mover el carrusel
    function moveCarousel(index) {
        currentIndex = index;
        carousel.scrollTo({
            left: index * cardWidth,
            behavior: 'smooth'
        });
    }

    // Controles del carrusel
    nextBtn.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % cards.length;
        moveCarousel(currentIndex);
        resetAutoScroll();
    });

    prevBtn.addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        moveCarousel(currentIndex);
        resetAutoScroll();
    });

    // Auto-scroll
    function startAutoScroll() {
        scrollInterval = setInterval(function() {
            currentIndex = (currentIndex + 1) % cards.length;
            moveCarousel(currentIndex);
        }, 4000);
    }

    function resetAutoScroll() {
        clearInterval(scrollInterval);
        startAutoScroll();
    }

    // Pausar al interactuar
    carousel.addEventListener('mouseenter', function() {
        clearInterval(scrollInterval);
    });

    carousel.addEventListener('mouseleave', startAutoScroll);

    carousel.addEventListener('touchstart', function() {
        clearInterval(scrollInterval);
    });

    carousel.addEventListener('touchend', function() {
        setTimeout(startAutoScroll, 5000);
    });

    // Iniciar auto-scroll
    startAutoScroll();

    // Detectar cambios de tamaño para ajustar el scroll
    window.addEventListener('resize', function() {
        moveCarousel(currentIndex);
    });
});