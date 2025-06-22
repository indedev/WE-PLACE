document.addEventListener('DOMContentLoaded', function() {
    // Menu Mobile
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    mobileMenuButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
    });
    
    // Fechar menu ao clicar em um link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
        });
    });
    
    // Botão de favorito
    const favoriteButtons = document.querySelectorAll('.favorite-btn');
    favoriteButtons.forEach(button => {
        button.addEventListener('click', function() {
            const icon = this.querySelector('i');
            this.classList.toggle('active');
            
            if (this.classList.contains('active')) {
                icon.classList.remove('far');
                icon.classList.add('fas');
            } else {
                icon.classList.remove('fas');
                icon.classList.add('far');
            }
        });
    });
    
    // Botão flutuante (FAB)
    const fabButton = document.getElementById('fab-button');
    fabButton.addEventListener('click', function() {
        alert('Ação do botão flutuante! Pode ser usado para criar novo serviço ou outra ação importante.');
    });
    
    // Navegação suave para links âncora
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Simulação de carrossel (serviços em destaque)
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const servicesContainer = document.querySelector('.grid.grid-cols-1');
    
    if (prevBtn && nextBtn && servicesContainer) {
        let currentIndex = 0;
        const services = Array.from(servicesContainer.children);
        const totalServices = services.length;
        
        function updateServices() {
            services.forEach((service, index) => {
                if (index >= currentIndex && index < currentIndex + 4) {
                    service.style.display = 'block';
                } else {
                    service.style.display = 'none';
                }
            });
        }
        
        prevBtn.addEventListener('click', function() {
            if (currentIndex > 0) {
                currentIndex -= 1;
                updateServices();
            }
        });
        
        nextBtn.addEventListener('click', function() {
            if (currentIndex < totalServices - 4) {
                currentIndex += 1;
                updateServices();
            }
        });
        
        // Inicializar
        updateServices();
    }
    
    // Efeito hover nos chips de categoria
    const categoryChips = document.querySelectorAll('.category-chip');
    categoryChips.forEach(chip => {
        chip.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        chip.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});