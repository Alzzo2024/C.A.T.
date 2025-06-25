// Função para filtrar eventos
function filterEvents(category) {
    const eventCards = document.querySelectorAll('.event-card');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const noEventsMsg = document.getElementById('noEvents');
    let visibleEvents = 0;

    // Remover classe active de todos os botões
    filterBtns.forEach(btn => btn.classList.remove('active'));
    
    // Adicionar classe active ao botão clicado
    document.querySelector(`[data-filter="${category}"]`).classList.add('active');

    // Filtrar eventos
    eventCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        
        if (category === 'todos' || cardCategory === category) {
            card.style.display = 'block';
            card.classList.add('show');
            visibleEvents++;
        } else {
            card.style.display = 'none';
            card.classList.remove('show');
        }
    });

    // Mostrar/esconder mensagem "não há eventos"
    if (visibleEvents === 0) {
        noEventsMsg.style.display = 'block';
    } else {
        noEventsMsg.style.display = 'none';
    }
}

// Função para determinar se um evento é passado ou futuro
function categorizeEventsByDate() {
    const eventCards = document.querySelectorAll('.event-card');
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    eventCards.forEach(card => {
        const eventDateStr = card.getAttribute('data-date');
        const eventDate = new Date(eventDateStr);
        
        if (eventDate < today) {
            card.setAttribute('data-category', 'passados');
        } else {
            card.setAttribute('data-category', 'futuros');
        }
    });
}

// Inicializar quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    // Categorizar eventos por data
    categorizeEventsByDate();
    
    // Mostrar todos os eventos inicialmente
    filterEvents('todos');
});

// Função para smooth scroll (se necessário)
function smoothScroll(target) {
    document.querySelector(target).scrollIntoView({
        behavior: 'smooth'
    });
}

// Adicionar efeito de hover nos cards
document.addEventListener('DOMContentLoaded', function() {
    const eventCards = document.querySelectorAll('.event-card');
    
    eventCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

// Função para abrir detalhes do evento (pode ser expandida)
function openEventDetails(eventId) {
    // Aqui podes adicionar lógica para abrir um modal ou redirecionar
    console.log('Abrir detalhes do evento:', eventId);
}

// Adicionar funcionalidade aos botões dos eventos
document.addEventListener('DOMContentLoaded', function() {
    const eventBtns = document.querySelectorAll('.event-btn');
    
    eventBtns.forEach((btn, index) => {
        btn.addEventListener('click', function() {
            const eventCard = this.closest('.event-card');
            const eventTitle = eventCard.querySelector('.event-title').textContent;
            
            // Aqui podes adicionar lógica específica para cada tipo de botão
            if (this.textContent.includes('INSCREVER')) {
                // Lógica para inscrição
                alert(`Inscrição para: ${eventTitle}`);
            } else {
                // Lógica para ver detalhes
                alert(`Ver detalhes de: ${eventTitle}`);
            }
        });
    });
});