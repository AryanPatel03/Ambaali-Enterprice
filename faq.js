document.addEventListener('DOMContentLoaded', function () {
    // FAQ Category Filter
    const faqCategoryBtns = document.querySelectorAll('.faq-category-btn');
    const faqItems = document.querySelectorAll('.faq-item');
    faqCategoryBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            // Update active button
            faqCategoryBtns.forEach(b => {
                b.classList.remove('active', 'bg-primary', 'text-white');
                b.classList.add('text-gray-600', 'hover:text-gray-900');
            });
            this.classList.add('active', 'bg-primary', 'text-white');
            this.classList.remove('text-gray-600', 'hover:text-gray-900');
            // Filter FAQ items
            const category = this.getAttribute('data-category');
            faqItems.forEach(item => {
                if (category === 'all' || item.getAttribute('data-category') === category) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
    // Product Interest Dropdown
    const productInterestBtn = document.getElementById('product-interest-btn');
    const productInterestDropdown = document.getElementById('product-interest-dropdown');
    const productInterestText = document.getElementById('product-interest-text');
    const productInterestIcon = document.getElementById('product-interest-icon');
    const productInterestInput = document.getElementById('product-interest-input');
    const productCheckboxes = document.querySelectorAll('.product-interest-checkbox');
    if (productInterestBtn) {
        productInterestBtn.addEventListener('click', function (e) {
            e.preventDefault();
            const isOpen = !productInterestDropdown.classList.contains('hidden');
            productInterestDropdown.classList.toggle('hidden');
            productInterestIcon.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(180deg)';
        });
        // Handle checkbox changes
        productCheckboxes.forEach(checkbox => {
            checkbox.addEventListener('change', function () {
                const checkedBoxes = Array.from(productCheckboxes).filter(cb => cb.checked);
                const selectedValues = checkedBoxes.map(cb => cb.value);
                const selectedLabels = checkedBoxes.map(cb => cb.nextElementSibling.textContent);
                if (selectedLabels.length > 0) {
                    productInterestText.textContent = selectedLabels.length === 1
                        ? selectedLabels[0]
                        : `${selectedLabels.length} products selected`;
                    productInterestText.classList.remove('text-gray-500');
                    productInterestText.classList.add('text-gray-900');
                } else {
                    productInterestText.textContent = 'Select products you\'re interested in';
                    productInterestText.classList.add('text-gray-500');
                    productInterestText.classList.remove('text-gray-900');
                }
                productInterestInput.value = selectedValues.join(',');
            });
        });
        // Close dropdown when clicking outside
        document.addEventListener('click', function (e) {
            if (!productInterestBtn.contains(e.target) && !productInterestDropdown.contains(e.target)) {
                productInterestDropdown.classList.add('hidden');
                productInterestIcon.style.transform = 'rotate(0deg)';
            }
        });
    }
    // Contact Form
    const contactForm = document.getElementById('contact-form');
    const messageTextarea = contactForm.querySelector('textarea[name="message"]');
    // Character counter for message
    if (messageTextarea) {
        messageTextarea.addEventListener('input', function () {
            const maxLength = 500;
            const currentLength = this.value.length;
            const counter = this.parentNode.querySelector('.text-xs');
            counter.textContent = `${currentLength}/${maxLength} characters`;
            counter.classList.toggle('text-red-500', currentLength > maxLength);
        });
    }
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            // Form validation
            const firstName = this.querySelector('[name="firstName"]').value.trim();
            const lastName = this.querySelector('[name="lastName"]').value.trim();
            const email = this.querySelector('[name="email"]').value.trim();
            const message = this.querySelector('[name="message"]').value.trim();
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            if (!firstName || !lastName || !email || !message) {
                showNotification('Please fill in all required fields', 'error');
                return;
            }
            if (message.length > 500) {
                showNotification('Message must be 500 characters or less', 'error');
                return;
            }
            // Show loading state
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            // Simulate form submission (replace with actual form handling)
            setTimeout(() => {
                showNotification('Thank you! Your message has been sent successfully. We will get back to you within 24 hours.', 'success');
                contactForm.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                if (messageTextarea) {
                    messageTextarea.parentNode.querySelector('.text-xs').textContent = 'Maximum 500 characters';
                }
                // Reset product interest dropdown
                productInterestText.textContent = 'Select products you\'re interested in';
                productInterestText.classList.add('text-gray-500');
                productInterestText.classList.remove('text-gray-900');
                productCheckboxes.forEach(cb => cb.checked = false);
                productInterestInput.value = '';
            }, 1000);
        });
    }
    function showNotification(message, type) {
        const notification = document.createElement('div');
        notification.className = `fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg ${type === 'success' ? 'bg-green-500' : 'bg-red-500'} text-white max-w-md`;
        notification.innerHTML = `
<div class="flex items-center gap-3">
<i class="ri-${type === 'success' ? 'check' : 'error-warning'}-line text-xl"></i>
<span>${message}</span>
</div>
`;
        document.body.appendChild(notification);
        setTimeout(() => notification.remove(), 5000);
    }
});