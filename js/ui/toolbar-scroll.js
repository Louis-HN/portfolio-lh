// PAGE PROJET
// Gestion de l'affichage de la toolbar selon le scroll
// Compatible avec toutes vos pages existantes

document.addEventListener('DOMContentLoaded', function() {
    // Sélectionner les éléments
    const toolbar = document.querySelector('.resume-toolbar');
    const heroSection = document.querySelector('.image-hero');
    
    // Vérifier que les éléments existent (pour les pages sans hero)
    if (!toolbar) return;
    
    // Si pas de section hero sur cette page, garder la toolbar visible
    if (!heroSection) {
        toolbar.style.opacity = '1';
        return;
    }
    
    // Configuration
    const heroHeight = heroSection.offsetHeight;
    const showToolbarAt = heroHeight * 1.10; // Apparaît à 110% du scroll de la hero
    
    // État initial : cacher la toolbar sur desktop/tablette uniquement
    function initializeToolbar() {
        if (window.innerWidth >= 768) { // Tablette et desktop
            toolbar.style.opacity = '0';
            toolbar.style.transform = 'translateY(-10px)';
            toolbar.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        } else { // Mobile
            toolbar.style.opacity = '1';
            toolbar.style.transform = 'translateY(0)';
        }
    }
    
    // Fonction de scroll
    function handleScroll() {
        // Ne pas traiter sur mobile
        if (window.innerWidth < 768) return;
        
        const scrollPosition = window.scrollY;
        
        if (scrollPosition > showToolbarAt) {
            // Afficher la toolbar
            toolbar.style.opacity = '1';
            toolbar.style.transform = 'translateY(0)';
        } else {
            // Cacher la toolbar
            toolbar.style.opacity = '0';
            toolbar.style.transform = 'translateY(-10px)';
        }
    }
    
    // Fonction de resize pour gérer les changements d'orientation
    function handleResize() {
        initializeToolbar();
        handleScroll(); // Re-calculer immédiatement
    }
    
    // Initialiser
    initializeToolbar();
    
    // Event listeners
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    
    // Optimisation : throttle pour les performances
    let ticking = false;
    
    function optimizedScroll() {
        if (!ticking) {
            requestAnimationFrame(function() {
                handleScroll();
                ticking = false;
            });
            ticking = true;
        }
    }
    
    // Remplacer l'event listener simple par la version optimisée
    window.removeEventListener('scroll', handleScroll);
    window.addEventListener('scroll', optimizedScroll, { passive: true });
});