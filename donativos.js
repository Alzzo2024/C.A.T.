document.addEventListener('DOMContentLoaded', function() {
    const amountButtons = document.querySelectorAll('.amount-option');
    const customAmountInput = document.getElementById('customAmount');
    const displayAmount = document.getElementById('displayAmount');
    const wiseLink = document.getElementById('wiseLink');

    let selectedAmount = 0;

    // Handle amount button clicks
    amountButtons.forEach(button => {
        button.addEventListener('click', () => {
            amountButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            selectedAmount = parseFloat(button.dataset.amount);
            customAmountInput.value = '';
            updateDisplay();
            updateWiseLink();
        });
    });

    // Handle custom amount input
    customAmountInput.addEventListener('input', () => {
        amountButtons.forEach(btn => btn.classList.remove('active'));
        selectedAmount = parseFloat(customAmountInput.value) || 0;
        updateDisplay();
        updateWiseLink();
    });

    // Update amount display
    function updateDisplay() {
        displayAmount.textContent = `€${selectedAmount.toFixed(2)}`;
    }

    // Update Wise payment link
    function updateWiseLink() {
        if (selectedAmount > 0) {
            const wiseUrl = `https://wise.com/pay/me/gild145?amount=${selectedAmount}`;
            wiseLink.href = wiseUrl;
            wiseLink.classList.add('active');
        } else {
            wiseLink.href = '#';
            wiseLink.classList.remove('active');
        }
    }

    // Add animation classes
    function addAnimations() {
        document.querySelector('.donation-card').classList.add('fade-in');
        document.querySelectorAll('.amount-option').forEach((button, index) => {
            setTimeout(() => {
                button.classList.add('slide-up');
            }, index * 100);
        });
    }

    // Initialize animations
    addAnimations();

    // Initialize with default values
    updateDisplay();
    updateWiseLink();
});