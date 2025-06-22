document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function(e) {
            e.stopPropagation();
            mobileMenu.classList.toggle('open');
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!mobileMenu.contains(event.target) && event.target !== mobileMenuButton) {
                mobileMenu.classList.remove('open');
            }
        });
    }

    // Category chips selection
    const chips = document.querySelectorAll('.category-chip');
    chips.forEach(chip => {
        chip.addEventListener('click', function() {
            chips.forEach(c => {
                c.classList.remove('active-chip');
                const icon = c.querySelector('i');
                if (icon) icon.classList.remove('text-white');
            });
            
            this.classList.add('active-chip');
            const icon = this.querySelector('i');
            if (icon) icon.classList.add('text-white');
        });
    });

    // Favorite buttons
    const favoriteButtons = document.querySelectorAll('.favorite-btn');
    favoriteButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const icon = this.querySelector('i');
            if (icon) {
                icon.classList.toggle('far');
                icon.classList.toggle('fas');
                icon.classList.toggle('favorite');
            }
        });
    });

    // Service card hover effect
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
    });

    // Carousel navigation
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const serviceGrid = document.querySelector('.grid.grid-cols-1.sm\\:grid-cols-2.lg\\:grid-cols-3.xl\\:grid-cols-4');
    
    if (prevBtn && nextBtn && serviceGrid) {
        let currentIndex = 0;
        const services = Array.from(serviceGrid.children);
        const totalServices = services.length;
        const servicesPerPage = 4; // Ajuste conforme necessário para responsividade
        
        function updateCarousel() {
            services.forEach((service, index) => {
                if (index >= currentIndex && index < currentIndex + servicesPerPage) {
                    service.style.display = 'block';
                } else {
                    service.style.display = 'none';
                }
            });
        }
        
        prevBtn.addEventListener('click', function() {
            if (currentIndex > 0) {
                currentIndex -= 1;
                updateCarousel();
            }
        });
        
        nextBtn.addEventListener('click', function() {
            if (currentIndex < totalServices - servicesPerPage) {
                currentIndex += 1;
                updateCarousel();
            }
        });
        
        // Initialize carousel
        updateCarousel();
    }

    // Floating Action Button
    const fabButton = document.getElementById('fab-button');
    if (fabButton) {
        fabButton.addEventListener('click', function() {
            // Simular cadastro de serviço
            const serviceName = prompt("Qual serviço você deseja oferecer?");
            if (serviceName) {
                alert(`Serviço "${serviceName}" cadastrado com sucesso!`);
            }
        });
    }

    // Click on service cards
    serviceCards.forEach(card => {
        card.addEventListener('click', function() {
            const serviceName = this.querySelector('h3').textContent;
            const servicePrice = this.querySelector('.font-bold.text-blue-600').textContent;
            
            // Criar modal de detalhes
            const modal = document.createElement('div');
            modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
            modal.innerHTML = `
                <div class="bg-white rounded-lg p-6 max-w-md w-full">
                    <div class="flex justify-between items-start mb-4">
                        <h3 class="text-2xl font-bold">${serviceName}</h3>
                        <button class="close-modal text-gray-500 hover:text-gray-700">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                    <div class="mb-4">
                        <p class="text-gray-600">${this.querySelector('p').textContent}</p>
                    </div>
                    <div class="flex items-center mb-4">
                        <i class="fas fa-star text-yellow-400 mr-1"></i>
                        <span class="font-medium">${this.querySelector('.font-medium').textContent}</span>
                        <span class="text-gray-500 text-sm ml-1">${this.querySelector('.text-gray-500').textContent}</span>
                    </div>
                    <div class="flex justify-between items-center mb-6">
                        <div class="flex items-center">
                            <i class="fas fa-map-marker-alt text-gray-400 mr-1"></i>
                            <span class="text-sm text-gray-600">${this.querySelector('.text-sm.text-gray-600').textContent}</span>
                        </div>
                        <span class="font-bold text-blue-600">${servicePrice}</span>
                    </div>
                    <button class="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition">
                        Contratar serviço
                    </button>
                </div>
            `;
            
            document.body.appendChild(modal);
            
            // Fechar modal
            modal.querySelector('.close-modal').addEventListener('click', function() {
                document.body.removeChild(modal);
            });
            
            // Fechar ao clicar fora
            modal.addEventListener('click', function(e) {
                if (e.target === modal) {
                    document.body.removeChild(modal);
                }
            });
        });
    });

    // Search functionality
    const searchButton = document.querySelector('button.bg-blue-600.text-white');
    if (searchButton) {
        searchButton.addEventListener('click', function() {
            const searchInput = document.querySelector('input[type="text"]');
            const locationInput = document.querySelector('input[placeholder="Localização"]');
            
            if (searchInput && locationInput) {
                const service = searchInput.value || 'serviços';
                const location = locationInput.value || 'sua região';
                alert(`Buscando por "${service}" em "${location}"...`);
            }
        });
    }
});