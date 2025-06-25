// JavaScript para garantir funcionamento do menu mobile
document.addEventListener('DOMContentLoaded', function() {
    
    // Elementos do menu
    const hamburgerBtn = document.querySelector('.hamburger-btn');
    const sideMenu = document.querySelector('.side-menu');
    const menuOverlay = document.querySelector('.menu-overlay');
    const closeBtn = document.querySelector('.close-btn');
    
    // Função para abrir menu
    function openMenu() {
        if (sideMenu) sideMenu.classList.add('active');
        if (menuOverlay) menuOverlay.classList.add('active');
        if (hamburgerBtn) hamburgerBtn.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    // Função para fechar menu
    function closeMenu() {
        if (sideMenu) sideMenu.classList.remove('active');
        if (menuOverlay) menuOverlay.classList.remove('active');
        if (hamburgerBtn) hamburgerBtn.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
    
    // Event listeners
    if (hamburgerBtn) {
        hamburgerBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('Hamburger clicado!'); // Para debug
            openMenu();
        });
    }
    
    if (closeBtn) {
        closeBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            closeMenu();
        });
    }
    
    if (menuOverlay) {
        menuOverlay.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            closeMenu();
        });
    }
    
    // Fechar menu com ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeMenu();
        }
    });
    
    // Dropdown do menu
    const dropdownItems = document.querySelectorAll('.menu-item-dropdown');
    dropdownItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const dropdown = this.querySelector('.dropdown-content');
            const arrow = this.querySelector('.dropdown-arrow');
            
            if (dropdown) {
                dropdown.classList.toggle('active');
            }
            if (arrow) {
                arrow.style.transform = dropdown.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0deg)';
            }
        });
    });
    
    // Debug - verificar se elementos existem
    console.log('Hamburger:', hamburgerBtn);
    console.log('Side Menu:', sideMenu);
    console.log('Overlay:', menuOverlay);
    console.log('Close Btn:', closeBtn);
});