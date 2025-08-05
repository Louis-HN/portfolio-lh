document.addEventListener('DOMContentLoaded', function() {
    // Sélectionner tous les headers d'accordéon
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const accordionItem = this.parentElement;
            const accordionBody = accordionItem.querySelector('.accordion-body');
            const isActive = accordionItem.classList.contains('active');
            
            // Fermer tous les autres accordéons
            document.querySelectorAll('.accordion-item').forEach(item => {
                if (item !== accordionItem) {
                    item.classList.remove('active');
                    const body = item.querySelector('.accordion-body');
                    body.style.maxHeight = '0';
                }
            });
            
            // Toggle l'accordéon cliqué
            if (isActive) {
                accordionItem.classList.remove('active');
                accordionBody.style.maxHeight = '0';
            } else {
                accordionItem.classList.add('active');
                // Calculer la hauteur nécessaire
                accordionBody.style.maxHeight = accordionBody.scrollHeight + 'px';
            }
        });
    });
    
    // Ajuster la hauteur lors du redimensionnement de la fenêtre
    window.addEventListener('resize', function() {
        document.querySelectorAll('.accordion-item.active .accordion-body').forEach(body => {
            body.style.maxHeight = body.scrollHeight + 'px';
        });
    });
});