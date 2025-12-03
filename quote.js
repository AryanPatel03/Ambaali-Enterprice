document.addEventListener('DOMContentLoaded', function () {
    const quoteModal = document.getElementById('quote-modal');
    const closeQuoteModal = document.getElementById('close-quote-modal');
    const quoteProductName = document.getElementById('quote-product-name');
    const quoteProductPrice = document.getElementById('quote-product-price');
    const quoteProductSize = document.getElementById('quote-product-size');
    const whatsappBtn = document.getElementById('whatsapp-quote');
    const emailBtn = document.getElementById('email-quote');
    let currentProduct = {};
    // Handle request quote button clicks
    document.addEventListener('click', function (e) {
        if (e.target.classList.contains('request-quote-btn')) {
            currentProduct = {
                name: e.target.getAttribute('data-product-name')
            };
            quoteProductName.textContent = currentProduct.name;
            quoteProductPrice.textContent = 'Price: Contact for pricing';
            quoteProductSize.textContent = 'Available in various sizes';
            quoteModal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }
    });
    // Close quote modal
    closeQuoteModal.addEventListener('click', function () {
        quoteModal.classList.add('hidden');
        document.body.style.overflow = '';
    });
    quoteModal.addEventListener('click', function (e) {
        if (e.target === quoteModal) {
            quoteModal.classList.add('hidden');
            document.body.style.overflow = '';
        }
    });
    // WhatsApp contact
    whatsappBtn.addEventListener('click', function () {
        const message = `Hi! I'm interested in getting a quote for:\nProduct: ${currentProduct.name}\nPlease provide me with more details and pricing information.\nThank you!`;
        const phoneNumber = '919157592174';
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
        quoteModal.classList.add('hidden');
        document.body.style.overflow = '';
    });
    // Email contact
    emailBtn.addEventListener('click', function () {
        const subject = `Quote Request for ${currentProduct.name}`;
        const body = `Dear AmbaaliEnterprise Team,\nI am interested in getting a quote for the following product:\nProduct Name: ${currentProduct.name}\nCould you please provide me with:\n- Detailed pricing information\n- Available sizes and quantities\n- Shipping costs and delivery time\n- Payment terms\n- Any bulk discount options\nI look forward to hearing from you soon.\nBest regards`;
        const emailUrl = `mailto:ambaalienterprise@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = emailUrl;
        quoteModal.classList.add('hidden');
        document.body.style.overflow = '';
    });
});