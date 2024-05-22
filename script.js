    // JavaScript code to toggle dropdown menu
    document.addEventListener('DOMContentLoaded', function() {
        const menuToggle = document.querySelector('.menu-toggle');
        const dropdownMenu = document.querySelector('.dropdown-menu');

        menuToggle.addEventListener('click', function() {
            dropdownMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    });
