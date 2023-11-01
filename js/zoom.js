
    const zoomableElements = document.querySelectorAll('.zoomable');

    zoomableElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            element.style.transform = 'scale(1.25)';
        });

        element.addEventListener('mouseleave', () => {
            element.style.transform = 'scale(1)';
        });
    });