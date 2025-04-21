document.addEventListener('DOMContentLoaded', function() {
    // Filtro de eventos
    const filterButtons = document.querySelectorAll('.filter-btn');
    const eventCards = document.querySelectorAll('.event-card');
    const noEventsMessage = document.getElementById('noEvents');
    
    // Função para filtrar eventos
    function filterEvents(filter) {
        let visibleCount = 0;
        
        eventCards.forEach(card => {
            const category = card.getAttribute('data-category');
            
            if (filter === 'all' || category === filter) {
                card.style.display = 'block';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });
        
        // Mostrar mensagem se não houver eventos
        if (visibleCount === 0) {
            noEventsMessage.style.display = 'block';
        } else {
            noEventsMessage.style.display = 'none';
        }
    }
    
    // Event listeners para botões de filtro
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remover classe active de todos os botões
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Adicionar classe active ao botão clicado
            this.classList.add('active');
            
            // Filtrar eventos
            const filter = this.getAttribute('data-filter');
            filterEvents(filter);
        });
    });
    
    // Animação ao scroll
    const animateOnScroll = function() {
        const cards = document.querySelectorAll('.event-card');
        
        cards.forEach((card, index) => {
            const cardPosition = card.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (cardPosition < screenPosition) {
                setTimeout(() => {
                    card.classList.add('fade-in');
                }, index * 100);
            }
        });
    };
    
    // Executar animação ao carregar a página e ao scroll
    window.addEventListener('scroll', animateOnScroll);
    window.addEventListener('load', animateOnScroll);
    
    // Adicionar classe de animação aos cards de eventos
    eventCards.forEach(card => {
        card.classList.add('event-animate');
    });
    
    // Verificar se há eventos passados ou futuros
    function checkEventCategories() {
        let hasUpcoming = false;
        let hasPast = false;
        
        eventCards.forEach(card => {
            const category = card.getAttribute('data-category');
            if (category === 'upcoming') hasUpcoming = true;
            if (category === 'past') hasPast = true;
        });
        
        // Desabilitar botões de filtro se não houver eventos na categoria
        filterButtons.forEach(btn => {
            const filter = btn.getAttribute('data-filter');
            if (filter === 'upcoming' && !hasUpcoming) {
                btn.disabled = true;
                btn.classList.add('disabled');
            }
            if (filter === 'past' && !hasPast) {
                btn.disabled = true;
                btn.classList.add('disabled');
            }
        });
    }
    
    checkEventCategories();
    
    // Função para atualizar datas de eventos
    function updateEventDates() {
        const today = new Date();
        const upcomingEvents = document.querySelectorAll('.event-card[data-category="upcoming"]');
        
        upcomingEvents.forEach(event => {
            const dateElements = event.querySelectorAll('.event-date span');
            const day = parseInt(dateElements[0].textContent);
            const month = getMonthNumber(dateElements[1].textContent);
            const year = parseInt(dateElements[2].textContent);
            
            const eventDate = new Date(year, month, day);
            
            // Verificar se o evento já passou
            if (eventDate < today) {
                event.setAttribute('data-category', 'past');
                const statusElement = event.querySelector('.event-status');
                if (statusElement) {
                    statusElement.textContent = 'Realizado';
                    statusElement.classList.remove('upcoming');
                    statusElement.classList.add('past');
                }
            }
        });
    }
    
    // Função auxiliar para converter nome do mês em número
    function getMonthNumber(monthName) {
        const months = {
            'Jan': 0, 'Fev': 1, 'Mar': 2, 'Abr': 3, 'Mai': 4, 'Jun': 5,
            'Jul': 6, 'Ago': 7, 'Set': 8, 'Out': 9, 'Nov': 10, 'Dez': 11
        };
        return months[monthName] || 0;
    }
    
    updateEventDates();
    
    // Adicionar efeito de destaque aos eventos próximos
    const upcomingEvents = document.querySelectorAll('.event-card[data-category="upcoming"]');
    upcomingEvents.forEach(event => {
        event.classList.add('highlight-event');
        
        // Adicionar badge "Não perca" para eventos próximos
        const eventImage = event.querySelector('.event-image');
        const badge = document.createElement('div');
        badge.className = 'event-badge';
        badge.textContent = 'Não perca';
        eventImage.appendChild(badge);
    });
    
    // Adicionar funcionalidade de compartilhamento de eventos
    function addShareButtons() {
        const eventCards = document.querySelectorAll('.event-card');
        
        eventCards.forEach(card => {
            const footer = card.querySelector('.event-footer');
            const title = card.querySelector('h3').textContent;
            const shareBtn = document.createElement('button');
            shareBtn.className = 'share-event-btn';
            shareBtn.innerHTML = '<i class="fas fa-share-alt"></i>';
            shareBtn.title = 'Partilhar evento';
            
            shareBtn.addEventListener('click', function(e) {
                e.preventDefault();
                
                if (navigator.share) {
                    navigator.share({
                        title: title,
                        text: 'Confira este evento do Centro Académico Tradicionalista: ' + title,
                        url: window.location.href
                    })
                    .catch(err => console.error('Erro ao partilhar:', err));
                } else {
                    // Fallback para navegadores que não suportam a API Web Share
                    const tempInput = document.createElement('input');
                    document.body.appendChild(tempInput);
                    tempInput.value = window.location.href;
                    tempInput.select();
                    document.execCommand('copy');
                    document.body.removeChild(tempInput);
                    
                    alert('Link copiado para a área de transferência!');
                }
            });
            
            footer.appendChild(shareBtn);
        });
    }
    
    addShareButtons();
    
    // Adicionar contador regressivo para eventos próximos
    function addCountdowns() {
        const upcomingEvents = document.querySelectorAll('.event-card[data-category="upcoming"]');
        
        upcomingEvents.forEach(event => {
            const dateElements = event.querySelectorAll('.event-date span');
            const day = parseInt(dateElements[0].textContent);
            const month = getMonthNumber(dateElements[1].textContent);
            const year = parseInt(dateElements[2].textContent);
            
            const eventDate = new Date(year, month, day);
            const timeElement = event.querySelector('.event-time');
            const timeText = timeElement.textContent.split(' - ')[0].trim();
            const timeParts = timeText.replace('<i class="fas fa-clock"></i> ', '').split(':');
            
            if (timeParts.length === 2) {
                eventDate.setHours(parseInt(timeParts[0]), parseInt(timeParts[1]));
            }
            
            // Criar elemento para o contador
            const countdownElement = document.createElement('div');
            countdownElement.className = 'event-countdown';
            
            // Inserir após os detalhes do evento
            const eventDetails = event.querySelector('.event-details');
            eventDetails.parentNode.insertBefore(countdownElement, eventDetails.nextSibling);
            
            // Atualizar contador a cada segundo
            const countdownInterval = setInterval(function() {
                const now = new Date();
                const distance = eventDate - now;
                
                // Parar quando o evento passar
                if (distance < 0) {
                    clearInterval(countdownInterval);
                    countdownElement.innerHTML = '<span class="countdown-expired">Evento já ocorreu</span>';
                    return;
                }
                
                // Calcular dias, horas, minutos e segundos
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);
                
                // Atualizar HTML
                countdownElement.innerHTML = `
                    <div class="countdown-title">Faltam:</div>
                    <div class="countdown-timer">
                        <div class="countdown-item">
                            <span class="countdown-value">${days}</span>
                            <span class="countdown-label">dias</span>
                        </div>
                        <div class="countdown-item">
                            <span class="countdown-value">${hours}</span>
                            <span class="countdown-label">horas</span>
                        </div>
                        <div class="countdown-item">
                            <span class="countdown-value">${minutes}</span>
                            <span class="countdown-label">min</span>
                        </div>
                        <div class="countdown-item">
                            <span class="countdown-value">${seconds}</span>
                            <span class="countdown-label">seg</span>
                        </div>
                    </div>
                `;
            }, 1000);
        });
    }
    
    // Adicionar contadores regressivos após um pequeno atraso
    setTimeout(addCountdowns, 500);
    
    // Adicionar botão de inscrição para eventos futuros
    function addRegistrationButtons() {
        const upcomingEvents = document.querySelectorAll('.event-card[data-category="upcoming"]');
        
        upcomingEvents.forEach(event => {
            const footer = event.querySelector('.event-footer');
            const registerBtn = document.createElement('a');
            registerBtn.className = 'event-register-btn';
            registerBtn.innerHTML = '<i class="fas fa-user-plus"></i> Inscrever-se';
            registerBtn.href = 'contactos.html';
            
            footer.appendChild(registerBtn);
        });
    }
    
    addRegistrationButtons();
});

// Adicionar mais estilos CSS dinamicamente
document.addEventListener('DOMContentLoaded', function() {
    const styleElement = document.createElement('style');
    styleElement.textContent = `
        .event-animate {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .event-animate.fade-in {
            opacity: 1;
            transform: translateY(0);
        }
        
        .highlight-event {
            position: relative;
        }
        
        .event-badge {
            position: absolute;
            top: 15px;
            left: 15px;
            background-color: var(--accent-color);
            color: white;
            padding: 5px 10px;
            border-radius: 20px;
            font-size: 0.8rem;
            font-weight: bold;
            z-index: 1;
        }
        
        .share-event-btn {
            background: transparent;
            border: none;
            color: #666;
            cursor: pointer;
            font-size: 1.1rem;
            transition: color 0.3s ease;
        }
        
        .share-event-btn:hover {
            color: var(--accent-color);
        }
        
        .filter-btn.disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }
        
        .event-countdown {
            background-color: rgba(139, 0, 0, 0.05);
            border-radius: 8px;
            padding: 12px;
            margin: 15px 0;
            border: 1px dashed var(--accent-color);
        }
        
        .countdown-title {
            font-size: 0.9rem;
            color: var(--accent-color);
            margin-bottom: 8px;
            font-weight: 600;
            text-align: center;
        }
        
        .countdown-timer {
            display: flex;
            justify-content: space-between;
        }
        
        .countdown-item {
            text-align: center;
            flex: 1;
        }
        
        .countdown-value {
            display: block;
            font-size: 1.2rem;
            font-weight: 700;
            color: var(--accent-color);
            font-family: 'Cinzel', serif;
        }
        
        .countdown-label {
            font-size: 0.7rem;
            color: #666;
        }
        
        .countdown-expired {
            text-align: center;
            display: block;
            color: #666;
            font-style: italic;
        }
        
        .event-register-btn {
            display: inline-flex;
            align-items: center;
            gap: 5px;
            background-color: var(--accent-color);
            color: white;
            padding: 6px 12px;
            border-radius: 20px;
            text-decoration: none;
            font-size: 0.85rem;
            transition: all 0.3s ease;
        }
        
        .event-register-btn:hover {
            background-color: #7a1c2a;
            transform: translateY(-2px);
        }
        
        @media (max-width: 768px) {
            .countdown-timer {
                flex-wrap: wrap;
            }
            
            .countdown-item {
                flex: 0 0 50%;
                margin-bottom: 8px;
            }
        }
    `;
    document.head.appendChild(styleElement);
});