document.addEventListener('DOMContentLoaded', () => {
    const projectItems = document.querySelectorAll('.project-item');
    const fullscreenOverlay = document.getElementById('fullscreen-overlay');
    const zoomedImage = document.querySelector('.zoomed-image');
    const closeButton = document.querySelector('.close-button');

    projectItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent the default link behavior

            const fullImageUrl = item.getAttribute('data-image');
            if (fullImageUrl) {
                zoomedImage.src = fullImageUrl;
                fullscreenOverlay.classList.add('active'); // Show the overlay
                document.body.style.overflow = 'hidden'; // Prevent scrolling on main body
            }
        });
    });

    // Close the overlay when the close button is clicked
    closeButton.addEventListener('click', () => {
        fullscreenOverlay.classList.remove('active'); // Hide the overlay
        document.body.style.overflow = ''; // Restore scrolling on main body
    });

    // Close the overlay when clicking outside the image (on the overlay itself)
    fullscreenOverlay.addEventListener('click', (e) => {
        if (e.target === fullscreenOverlay) {
            fullscreenOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Close with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && fullscreenOverlay.classList.contains('active')) {
            fullscreenOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});