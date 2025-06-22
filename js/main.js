document.addEventListener('DOMContentLoaded', function() {
            // Mobile menu toggle
            const mobileMenuButton = document.getElementById('mobile-menu-button');
            const mobileMenu = document.getElementById('mobile-menu');
            
            mobileMenuButton.addEventListener('click', function() {
                mobileMenu.classList.toggle('open');
            });

            // Close mobile menu when clicking outside
            document.addEventListener('click', function(event) {
                if (!mobileMenu.contains(event.target) && event.target !== mobileMenuButton) {
                    mobileMenu.classList.remove('open');
                }
            });

            // Category chips selection
            const chips = document.querySelectorAll('.category-chip');
            chips.forEach(chip => {
                chip.addEventListener('click', function() {
                    chips.forEach(c => c.classList.remove('active-chip'));
                    this.classList.add('active-chip');
                    
                    // Change icon color when active
                    const icon = this.querySelector('i');
                    if (icon) {
                        icon.classList.toggle('text-white');
                    }
                });
            });

            // Favorite buttons
            const favoriteButtons = document.querySelectorAll('.favorite-btn');
            favoriteButtons.forEach(button => {
                button.addEventListener('click', function(e) {
                    e.stopPropagation();
                    const icon = this.querySelector('i');
                    icon.classList.toggle('far');
                    icon.classList.toggle('fas');
                    icon.classList.toggle('favorite');
                });
            });

            // Service card hover effect
            const serviceCards = document.querySelectorAll('.service-card');
            serviceCards.forEach(card => {
                card.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
            });

            // Carousel navigation (simplified)
            const prevBtn = document.getElementById('prev-btn');
            const nextBtn = document.getElementById('next-btn');
            
            if (prevBtn && nextBtn) {
                prevBtn.addEventListener('click', function() {
                    alert('Navegação para o slide anterior');
                });
                
                nextBtn.addEventListener('click', function() {
                    alert('Navegação para o próximo slide');
                });
            }

            // Floating Action Button
            const fabButton = document.getElementById('fab-button');
            if (fabButton) {
                fabButton.addEventListener('click', function() {
                    alert('Abrir formulário para cadastrar novo serviço');
                });
            }

            // Click on service cards
            serviceCards.forEach(card => {
                card.addEventListener('click', function() {
                    alert('Abrir detalhes do serviço: ' + this.querySelector('h3').textContent);
                });
            });
        });