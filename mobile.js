document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const hamburger = document.createElement('div');
    hamburger.className = 'hamburger';
    hamburger.innerHTML = `
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    `;
    
    const navMenu = document.querySelector('.nav-menu');
    const headerContainer = document.querySelector('.header-container');
    
    // Insert hamburger before language selector
    const languageSelector = document.querySelector('.language-selector');
    headerContainer.insertBefore(hamburger, languageSelector);
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('open');
        navMenu.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    });
    
    // Handle dropdown menus on mobile
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        const trigger = dropdown.querySelector('.dropdown-trigger');
        
        if (window.innerWidth <= 992) {
            trigger.addEventListener('click', function(e) {
                if (window.innerWidth <= 992) {
                    e.preventDefault();
                    dropdown.classList.toggle('active');
                }
            });
        }
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (navMenu.classList.contains('active') && 
            !navMenu.contains(e.target) && 
            !hamburger.contains(e.target)) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('open');
            document.body.classList.remove('no-scroll');
        }
    });
    
    // Close mobile menu when window is resized above breakpoint
    window.addEventListener('resize', function() {
        if (window.innerWidth > 992) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('open');
            document.body.classList.remove('no-scroll');
            
            // Reset dropdown active states
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    });
});
