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

// Galería Slider
document.addEventListener('DOMContentLoaded', function() {
    // Configuración del slider
    const slider = document.querySelector('.gallery-slider');
    const slides = document.querySelectorAll('.gallery-slide');
    const prevBtn = document.querySelector('.gallery-prev');
    const nextBtn = document.querySelector('.gallery-next');
    const dotsContainer = document.querySelector('.gallery-dots');
    let currentSlide = 0;
    let slideInterval;

    // Crear puntos indicadores
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('gallery-dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.gallery-dot');

    // Mostrar slide actual
    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        slides[index].classList.add('active');
        dots[index].classList.add('active');
        currentSlide = index;
    }

    // Siguiente slide
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Slide anterior
    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    // Ir a slide específico
    function goToSlide(index) {
        showSlide(index);
        resetInterval();
    }

    // Auto-avance
    function startInterval() {
        slideInterval = setInterval(nextSlide, 5000);
    }

    function resetInterval() {
        clearInterval(slideInterval);
        startInterval();
    }

    // Event listeners
    nextBtn.addEventListener('click', () => {
        nextSlide();
        resetInterval();
    });

    prevBtn.addEventListener('click', () => {
        prevSlide();
        resetInterval();
    });

    // Iniciar
    showSlide(currentSlide);
    startInterval();

    // Pausar al interactuar
    slider.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });

    slider.addEventListener('mouseleave', startInterval);
});