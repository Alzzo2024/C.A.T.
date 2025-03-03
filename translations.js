const translations = {
    'pt': {
        // Header/Navigation
        'site-title': 'Centro Académico Tradicionalista',
        'header-title': 'Centro Académico',
        'header-subtitle': 'Tradicionalista',
        'nav-home': 'Início',
        'nav-join': 'Junta-te',
        'nav-contacts': 'Contactos',
        'nav-donations': 'Donativos',
        'join-cat': 'Centro Académico Tradicionalista',
        'join-tl': 'Tradicionalismo Lusitano',

        // Homepage
        'hero-title': 'Centro Académico',
        'hero-subtitle': 'Tradicionalista',
        'hero-motto': 'Tradicionalismo não é obscurantismo.',
        'about-title': 'Sobre Nós',
        'about-description': 'O Centro Académico Tradicionalista (C.A.T.) é uma corporação de estudantes tradicionalistas, voltada para unir os tradicionalistas e promover os valores catholicos e portuguezes, por via de coloquios, conferências, palestras, Grémios litherarios e outros.',
        'download-values': 'Descarregar a Carta de Princípios',
        'feature-1-title': 'Leicturas',
        'feature-2-title': 'Communidade',
        'feature-3-title': '...',
        'feature-1-desc': 'Ajudamos e estudamos obras litherarias portuguezas e da Egreja.',
        'feature-2-desc': 'Temos uma communidade activa e participactiva entre vários estudantes da Universidade de Lisboa.',
        'feature-3-desc': '...',
        'join-button': 'Junta-te',
        'magazine-title': 'Revista Nova Alvorada',
        'view-button': 'Ver',

        // Donations Page
        'donations-page-title': 'Donativos - Centro Académico Tradicionalista',
        'donate-hero-title': 'Apoie o Tradicionalismo',
        'donate-hero-subtitle': 'Contribua para a preservação dos valores tradicionaes',
        'choose-amount-title': 'Escolha o Montante',
        'other-amount-placeholder': 'Outro valor',
        'selected-amount': 'Montante seleccionado:',
        'donate-button': 'Doar',
        'currency-eur': 'EUR (€)',
        'currency-usd': 'USD ($)',
        'currency-gbp': 'GBP (£)',
        'currency-brl': 'BRL (R$)',

        // Contact Page
        'contacts-page-title': 'Contactos - Centro Académico Tradicionalista',
        'contact-hero-title': 'Entre em Contacto',
        'contact-hero-subtitle': 'Estamos aqui para responder às suas questões',
        'contact-email-title': 'Email',
        'contact-form-title': 'Envie-nos uma Mensagem',
        'contact-name': 'Nome Complecto',
        'contact-email': 'Email',
        'contact-subject': 'Assumpto',
        'contact-message': 'Mensagem',
        'contact-send': 'Enviar Mensagem',

        // Social Media Section
        'social-title': 'Siga-nos nas Redes Sociaes',
        'social-facebook': 'Facebook',
        'social-instagram': 'Instagram',
        'social-twitter': 'Twitter',

        // Footer
        'footer-title': 'Centro Académico',
        'footer-subtitle': 'Tradicionalista',
        'footer-motto': 'Tradicionalismo não é obscurantismo.',
        'footer-links': 'Hiperligações',
        'footer-actions': 'Acções',
        'footer-join-tl': 'Juntar-se ao Tradicionalismo Lusitano',
        'footer-join-cat': 'Juntar-se ao Centro Académico',
        'footer-donations': 'Donativos',
        'footer-social': 'Redes Sociaes',
        'footer-rights': 'Todos os direictos reservados.'
    },
    'en': {
        // Header/Navigation
        'site-title': 'Traditionalist Academic Center',
        'header-title': 'Academic Center',
        'header-subtitle': 'Traditionalist',
        'nav-home': 'Home',
        'nav-join': 'Join Us',
        'nav-contacts': 'Contacts',
        'nav-donations': 'Donations',
        'join-cat': 'Traditionalist Academic Center',
        'join-tl': 'Lusitanian Traditionalism',

        // Homepage
        'hero-title': 'Academic Center',
        'hero-subtitle': 'Traditionalist',
        'hero-motto': 'Traditionalism is not obscurantism.',
        'about-title': 'About Us',
        'about-description': 'The Traditionalist Academic Center (C.A.T.) is a corporation of traditionalist students, aimed at uniting traditionalists and promoting Catholic and Portuguese values through colloquiums, conferences, lectures, literary guilds and others.',
        'download-values': 'Download Charter of Principles',
        'feature-1-title': 'Readings',
        'feature-2-title': 'Community',
        'feature-3-title': '...',
        'feature-1-desc': 'We help and study Portuguese literary works and those of the Church.',
        'feature-2-desc': 'We have an active and participative community among various students from the University of Lisbon.',
        'feature-3-desc': '...',
        'join-button': 'Join Us',
        'magazine-title': 'Nova Alvorada Magazine',
        'view-button': 'View',

        // Donations Page
        'donations-page-title': 'Donations - Traditionalist Academic Center',
        'donate-hero-title': 'Support Traditionalism',
        'donate-hero-subtitle': 'Contribute to the preservation of traditional values',
        'choose-amount-title': 'Choose Amount',
        'other-amount-placeholder': 'Other amount',
        'selected-amount': 'Selected amount:',
        'donate-button': 'Donate',
        'currency-eur': 'EUR (€)',
        'currency-usd': 'USD ($)',
        'currency-gbp': 'GBP (£)',
        'currency-brl': 'BRL (R$)',

        // Contact Page
        'contacts-page-title': 'Contacts - Traditionalist Academic Center',
        'contact-hero-title': 'Contact Us',
        'contact-hero-subtitle': 'We are here to answer your questions',
        'contact-email-title': 'Email',
        'contact-form-title': 'Send Us a Message',
        'contact-name': 'Full Name',
        'contact-email': 'Email',
        'contact-subject': 'Subject',
        'contact-message': 'Message',
        'contact-send': 'Send Message',

        // Social Media Section
        'social-title': 'Follow Us on Social Media',
        'social-facebook': 'Facebook',
        'social-instagram': 'Instagram',
        'social-twitter': 'Twitter',

        // Footer
        'footer-title': 'Academic Center',
        'footer-subtitle': 'Traditionalist',
        'footer-motto': 'Traditionalism is not obscurantism.',
        'footer-links': 'Links',
        'footer-actions': 'Actions',
        'footer-join-tl': 'Join Lusitanian Traditionalism',
        'footer-join-cat': 'Join Academic Center',
        'footer-donations': 'Donations',
        'footer-social': 'Social Media',
        'footer-rights': 'All rights reserved.'
    }
};

// Language switcher functionality
document.addEventListener('DOMContentLoaded', function() {
    const languageButtons = document.querySelectorAll('.language-option');
    
    // Set initial language
    let currentLanguage = localStorage.getItem('selectedLanguage') || 'pt';
    updateContent(currentLanguage);

    // Language button click handlers
    languageButtons.forEach(button => {
        button.addEventListener('click', function() {
            const language = this.getAttribute('data-lang');
            currentLanguage = language;
            localStorage.setItem('selectedLanguage', language);
            updateContent(language);
            
            // Update active state of buttons
            languageButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Update all translatable content
    function updateContent(language) {
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[language][key]) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translations[language][key];
                } else {
                    element.textContent = translations[language][key];
                }
            }
        });
    }

    // Initialize with stored language preference
    const storedLanguage = localStorage.getItem('selectedLanguage');
    if (storedLanguage) {
        updateContent(storedLanguage);
        document.querySelector(`[data-lang="${storedLanguage}"]`).classList.add('active');
    }
});