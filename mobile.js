// JavaScript corrigido para menu mobile
document.addEventListener('DOMContentLoaded', function() {
    
    const hamburgerBtn = document.querySelector('.hamburger-btn');
    const sideMenu = document.querySelector('.side-menu');
    const menuOverlay = document.querySelector('.menu-overlay');
    const closeBtn = document.querySelector('.close-btn');
    
    // Abrir menu
    if (hamburgerBtn) {
        hamburgerBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
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
    
    // Dropdown - CORRIGIDO PARA NÃO FECHAR O MENU
    const dropdownItems = document.querySelectorAll('.menu-item-dropdown');
    dropdownItems.forEach(item => {
        // Adicionar evento apenas ao elemento principal, não aos links filhos
        item.addEventListener('click', function(e) {
            // Se clicou em um link (tag A), não fazer nada (deixar navegar)
            if (e.target.tagName === 'A') {
                console.log('Clicou em link, permitindo navegação...');
                return; // Deixar o link funcionar normalmente
            }
            
            // Se clicou no dropdown (não no link), toggle o dropdown
            e.preventDefault();
            e.stopPropagation();
            
            const dropdown = this.querySelector('.dropdown-content');
            const arrow = this.querySelector('.dropdown-arrow');
            
            console.log('Toggling dropdown...');
            
            // Fechar outros dropdowns
            dropdownItems.forEach(otherItem => {
                if (otherItem !== this) {
                    const otherDropdown = otherItem.querySelector('.dropdown-content');
                    const otherArrow = otherItem.querySelector('.dropdown-arrow');
                    if (otherDropdown) {
                        otherDropdown.classList.remove('active');
                    }
                    if (otherArrow) {
                        otherArrow.style.transform = 'rotate(0deg)';
                    }
                }
            });
            
            // Toggle dropdown atual
            if (dropdown) {
                dropdown.classList.toggle('active');
                
                if (arrow) {
                    arrow.style.transform = dropdown.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0deg)';
                }
            }
        });
    });
    
    // Links dentro do dropdown - permitir navegação normal
    const dropdownLinks = document.querySelectorAll('.dropdown-content a');
    dropdownLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // NÃO prevenir o comportamento padrão
            console.log('Navegando para:', this.href);
            
            // Fechar menu após um pequeno delay para permitir navegação
            setTimeout(() => {
                closeMenu();
            }, 100);
        });
    });
    
    // Links normais do menu - permitir navegação normal
    const normalMenuLinks = document.querySelectorAll('.menu-item:not(.menu-item-dropdown)');
    normalMenuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // NÃO prevenir o comportamento padrão
            console.log('Navegando para:', this.href);
            
            // Fechar menu após um pequeno delay
            setTimeout(() => {
                closeMenu();
            }, 100);
        });
    });
    
    // Fechar menu com ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeMenu();
        }
    });
    
    // Ajustar posição da linha do header dinamicamente
    function adjustHeaderDivider() {
        const header = document.querySelector('.header');
        const headerDivider = document.querySelector('.header-divider');
        const mainContent = document.querySelector('.main-content');
        
        if (header && headerDivider && window.innerWidth <= 768) {
            const headerHeight = header.offsetHeight;
            headerDivider.style.top = headerHeight + 'px';
            
            if (mainContent) {
                mainContent.style.marginTop = (headerHeight + 5) + 'px';
            }
        }
    }
    
    // Executar ao carregar e ao redimensionar
    adjustHeaderDivider();
    window.addEventListener('resize', adjustHeaderDivider);
    
    console.log('Menu mobile inicializado');
    console.log('Hamburger:', hamburgerBtn);
    console.log('Side Menu:', sideMenu);
    console.log('Dropdown Items:', dropdownItems.length);
    console.log('Dropdown Links:', dropdownLinks.length);
});

// Função adicional para garantir que emails longos não saiam da tela
window.addEventListener('load', function() {
    const emailLinks = document.querySelectorAll('a[href^="mailto"]');
    emailLinks.forEach(link => {
        const email = link.textContent;
        if (email.length > 25 && window.innerWidth <= 768) {
            // Quebrar email em partes menores visualmente
            const parts = email.split('@');
            if (parts.length === 2) {
                link.innerHTML = parts[0] + '<br>@' + parts[1];
            }
        }
    });
});
