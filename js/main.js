 document.addEventListener('DOMContentLoaded', function() {
            const chips = document.querySelectorAll('.category-chip');
            chips.forEach(chip => {
                chip.addEventListener('click', function() {
                    chips.forEach(c => c.classList.remove('active-chip'));
                    this.classList.add('active-chip');
                });
            });
            
            const serviceCards = document.querySelectorAll('.service-card');
            serviceCards.forEach(card => {
                card.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
            });
        });