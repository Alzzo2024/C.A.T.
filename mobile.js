// JavaScript simples para menu mobile
document.addEventListener('DOMContentLoaded', function() {
    
    const hamburgerBtn = document.querySelector('.hamburger-btn');
    const sideMenu = document.querySelector('.side-menu');
    const menuOverlay = document.querySelector('.menu-overlay');
    const closeBtn = document.querySelector('.close-btn');
    
    // Abrir menu
    if (hamburgerBtn) {
        hamburgerBtn.addEventListener('click', function() {
            console.log('Abrindo menu...');
            if (sideMenu) sideMenu.classList.add('active');
            if (menuOverlay) menuOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }
    
    // Fechar menu
    function closeMenu() {
        console.log('Fechando menu...');
        if (sideMenu) sideMenu.classList.remove('active');
        if (menuOverlay) menuOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
    
    if (closeBtn) {
        closeBtn.addEventListener('click', closeMenu);
    }
    
    if (menuOverlay) {
        menuOverlay.addEventListener('click', closeMenu);
    }
    
    // Dropdown
    const dropdownItems = document.querySelectorAll('.menu-item-dropdown');
    dropdownItems.forEach(item => {
        item.addEventListener('click', function(e) {
            if (e.target.tagName !== 'A') {
                e.preventDefault();
                const dropdown = this.querySelector('.dropdown-content');
                const arrow = this.querySelector('.dropdown-arrow');
                
                if (dropdown) {
                    dropdown.classList.toggle('active');
                }
                
                if (arrow) {
                    arrow.style.transform = dropdown && dropdown.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0deg)';
                }
            }
        });
    });
    
    // Fechar menu ao clicar em links
    const menuLinks = document.querySelectorAll('.side-menu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            setTimeout(closeMenu, 100);
        });
    });
    
    console.log('Menu mobile inicializado');
    console.log('Hamburger:', hamburgerBtn);
    console.log('Side Menu:', sideMenu);
});
