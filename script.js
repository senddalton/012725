function reservar() {
            alert('Reserva realizada con éxito. ¡Gracias por elegirnos!');
        }

        // Auto-scroll y deslizamiento táctil
        const carousel = document.getElementById('carousel');
        let scrollInterval;

        const startAutoScroll = () => {
            scrollInterval = setInterval(() => {
                carousel.scrollBy({ left: 260, behavior: 'smooth' });
                if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth) {
                    carousel.scrollTo({ left: 0, behavior: 'smooth' });
                }
            }, 2000);
        };

        const stopAutoScroll = () => {
            clearInterval(scrollInterval);
        };

        carousel.addEventListener('mousedown', stopAutoScroll);
        carousel.addEventListener('touchstart', stopAutoScroll);
        carousel.addEventListener('mouseup', startAutoScroll);
        carousel.addEventListener('touchend', startAutoScroll);

        startAutoScroll();
