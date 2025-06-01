document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('.menu-button');
    const navLinks = document.getElementById('nav-links');

    menuButton.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('is-open');
        menuButton.setAttribute('aria-expanded', isOpen);
    });

    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const button = dropdown.querySelector('.dropdown-button');
        const menu = dropdown.querySelector('.submenu');

        button.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = menu.classList.toggle('is-open');
            button.setAttribute('aria-expanded', isOpen);
        });
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('nav')) {
            navLinks.classList.remove('is-open');
            menuButton.setAttribute('aria-expanded', 'false');

            document.querySelectorAll('.submenu').forEach(menu => {
                menu.classList.remove('is-open');
                const button = menu.previousElementSibling;
                if (button) button.setAttribute('aria-expanded', 'false');
            });
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            navLinks.classList.remove('is-open');
            menuButton.setAttribute('aria-expanded', 'false');

            document.querySelectorAll('.submenu').forEach(menu => {
                menu.classList.remove('is-open');
                const button = menu.previousElementSibling;
                if (button) button.setAttribute('aria-expanded', 'false');
            });
        }
    });
});