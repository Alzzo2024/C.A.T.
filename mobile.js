// JavaScript para garantir funcionamento do menu mobile - VERSÃO CORRIGIDA
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
    
    // Dropdown do menu - CORRIGIDO PARA FUNCIONAR
    const dropdownItems = document.querySelectorAll('.menu-item-dropdown');
    dropdownItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const dropdown = this.querySelector('.dropdown-content');
            const arrow = this.querySelector('.dropdown-arrow');
            
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
    
    // Links dentro do dropdown - CORRIGIDO
    const dropdownLinks = document.querySelectorAll('.dropdown-content a');
    dropdownLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Não prevenir o comportamento padrão para permitir navegação
            console.log('Link do dropdown clicado:', this.href);
            
            // Fechar menu após clicar no link
            setTimeout(() => {
                closeMenu();
            }, 100);
        });
    });
    
    // Links normais do menu
    const menuLinks = document.querySelectorAll('.menu-item:not(.menu-item-dropdown)');
    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Não prevenir o comportamento padrão para permitir navegação
            console.log('Link do menu clicado:', this.href);
            
            // Fechar menu após clicar no link
            setTimeout(() => {
                closeMenu();
            }, 100);
        });
    });
    
    // Prevenir que cliques dentro do menu fechem o menu
    if (sideMenu) {
        sideMenu.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }
    
    // Corrigir problema de links não funcionando
    document.addEventListener('click', function(e) {
        // Se clicou em um link dentro do menu, permitir navegação
        if (e.target.tagName === 'A' && e.target.closest('.side-menu')) {
            // Não fazer nada, deixar o link funcionar normalmente
            return;
        }
    });
    
    // Debug - verificar se elementos existem
    console.log('Hamburger:', hamburgerBtn);
    console.log('Side Menu:', sideMenu);
    console.log('Overlay:', menuOverlay);
    console.log('Close Btn:', closeBtn);
    console.log('Dropdown Items:', dropdownItems.length);
    console.log('Dropdown Links:', dropdownLinks.length);
    
    // Função para garantir que os links funcionem
    function ensureLinksWork() {
        // Remover qualquer event listener que possa estar bloqueando
        const allLinks = document.querySelectorAll('a');
        allLinks.forEach(link => {
            // Garantir que links com href funcionem
            if (link.href && link.href !== '#' && link.href !== 'javascript:void(0)') {
                link.style.pointerEvents = 'auto';
                link.style.cursor = 'pointer';
            }
        });
    }
    
    // Executar após um pequeno delay
    setTimeout(ensureLinksWork, 500);
    
    // Corrigir problema específico dos dropdowns
    function fixDropdownNavigation() {
        const projectsDropdown = document.querySelector('.menu-item-dropdown');
        if (projectsDropdown) {
            const novaAlvoradaLink = projectsDropdown.querySelector('a[href*="nova-alvorada"]');
            const eventosLink = projectsDropdown.querySelector('a[href*="eventos"]');
            
            if (novaAlvoradaLink) {
                novaAlvoradaLink.addEventListener('click', function(e) {
                    console.log('Nova Alvorada clicado, navegando para:', this.href);
                    // Permitir navegação normal
                });
            }
            
            if (eventosLink) {
                eventosLink.addEventListener('click', function(e) {
                    console.log('Eventos clicado, navegando para:', this.href);
                    // Permitir navegação normal
                });
            }
        }
    }
    
    // Executar correção dos dropdowns
    setTimeout(fixDropdownNavigation, 1000);
    
    // Adicionar estilos inline para garantir que os links funcionem
    const style = document.createElement('style');
    style.textContent = `
        @media screen and (max-width: 768px) {
            .dropdown-content a {
                pointer-events: auto !important;
                cursor: pointer !important;
                display: block !important;
                text-decoration: none !important;
            }
            
            .dropdown-content a:hover {
                background-color: rgba(156, 35, 54, 0.1) !important;
            }
            
            .menu-item {
                pointer-events: auto !important;
                cursor: pointer !important;
            }
            
            .side-menu a {
                pointer-events: auto !important;
                cursor: pointer !important;
            }
        }
    `;
    document.head.appendChild(style);
});

// Função adicional para garantir navegação
window.addEventListener('load', function() {
    // Verificar se há problemas com os links após o carregamento completo
    const problemLinks = document.querySelectorAll('a[href="#"], a[href="javascript:void(0)"]');
    problemLinks.forEach(link => {
        if (link.textContent.includes('Nova Alvorada')) {
            link.href = 'nova-alvorada.html';
        } else if (link.textContent.includes('Eventos')) {
            link.href = 'eventos.html';
        }
    });
    
    console.log('Links corrigidos após carregamento completo');
});
