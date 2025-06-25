// Toggle do menu lateral
function toggleMenu() {
    const sideMenu = document.getElementById('sideMenu');
    const menuOverlay = document.getElementById('menuOverlay');
    
    sideMenu.classList.toggle('active');
    menuOverlay.classList.toggle('active');
    
    // Prevenir scroll do body quando menu está aberto
    if (sideMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
}

// Toggle do dropdown "Projectos" - corrigido para não fechar o menu
function toggleDropdown(event) {
    event.preventDefault();
    event.stopPropagation(); // Impede que o evento se propague
    
    const clickedElement = event.currentTarget;
    const dropdownContent = clickedElement.nextElementSibling;
    const arrow = clickedElement.querySelector('.dropdown-arrow');
    
    dropdownContent.classList.toggle('active');
    
    if (dropdownContent.classList.contains('active')) {
        arrow.style.transform = 'rotate(180deg)';
    } else {
        arrow.style.transform = 'rotate(0deg)';
    }
}

// Função para mudar idioma
function setLanguage(lang) {
    const langButtons = document.querySelectorAll('.lang-btn');
    
    langButtons.forEach(btn => {
        btn.classList.remove('active');
    });
    
    event.target.closest('.lang-btn').classList.add('active');
    
    // Aqui podes adicionar a lógica para mudar o idioma do site
    console.log('Idioma selecionado:', lang);
}

// Fechar menu ao clicar em links - corrigido para não fechar no dropdown
document.addEventListener('DOMContentLoaded', function() {
    // Adicionar event listeners apenas aos itens que devem fechar o menu
    const menuItems = document.querySelectorAll('.menu-item:not(.dropdown-trigger), .dropdown-item');
    
    menuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            // Fecha o menu apenas se não for o trigger do dropdown
            if (!e.target.classList.contains('dropdown-trigger')) {
                toggleMenu();
            }
        });
    });
    
    // Prevenir que cliques no dropdown fechem o menu
    const dropdownTrigger = document.querySelector('.dropdown-trigger');
    if (dropdownTrigger) {
        dropdownTrigger.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }
});

// Fechar menu ao redimensionar janela
window.addEventListener('resize', () => {
    const sideMenu = document.getElementById('sideMenu');
    const menuOverlay = document.getElementById('menuOverlay');
    
    if (window.innerWidth > 768 && sideMenu.classList.contains('active')) {
        sideMenu.classList.remove('active');
        menuOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Fechar dropdown ao clicar fora dele
document.addEventListener('click', function(event) {
    const dropdown = document.querySelector('.dropdown-content');
    const dropdownTrigger = document.querySelector('.dropdown-trigger');
    const arrow = document.querySelector('.dropdown-arrow');
    
    if (dropdown && dropdownTrigger && arrow) {
        if (!dropdownTrigger.contains(event.target) && !dropdown.contains(event.target)) {
            dropdown.classList.remove('active');
            arrow.style.transform = 'rotate(0deg)';
        }
    }
});

// Função para abrir modal de contactos
function openContactModal() {
    document.getElementById('contactModal').style.display = 'block';
    document.body.style.overflow = 'hidden'; // Impede scroll da página
}

// Função para fechar modal de contactos
function closeContactModal() {
    document.getElementById('contactModal').style.display = 'none';
    document.body.style.overflow = 'auto'; // Restaura scroll da página
}

// Fechar modal com tecla ESC
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeContactModal();
    }
});
