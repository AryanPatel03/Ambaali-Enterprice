
document.addEventListener('DOMContentLoaded', function () {
    // FAQ Toggle functionality - works for all FAQ sections
    function setupFAQToggles() {
        const faqToggles = document.querySelectorAll('.faq-toggle');
        faqToggles.forEach(toggle => {
            // Remove any existing listeners first
            const newToggle = toggle.cloneNode(true);
            toggle.parentNode.replaceChild(newToggle, toggle);
            
            newToggle.addEventListener('click', function (e) {
                e.preventDefault();
                e.stopPropagation();
                
                // Find the content element (next sibling)
                let content = this.nextElementSibling;
                
                // If not found, try to find within parent
                if (!content) {
                    const parent = this.closest('[class*="bg-white"]');
                    if (parent) {
                        content = parent.querySelector('.faq-content');
                    }
                }
                
                // Find the icon
                let icon = this.querySelector('.faq-icon');
                
                if (content && icon) {
                    if (content.classList.contains('hidden')) {
                        content.classList.remove('hidden');
                        icon.style.transform = 'rotate(180deg)';
                    } else {
                        content.classList.add('hidden');
                        icon.style.transform = 'rotate(0deg)';
                    }
                }
            });
        });
    }
    
    // Initialize on load
    setupFAQToggles();
    
    // Watch for page changes and reinitialize
    const originalShowPage = window.showPage;
    if (originalShowPage) {
        window.showPage = function(targetPage) {
            originalShowPage(targetPage);
            // Reinitialize FAQ toggles after page change
            setTimeout(() => {
                setupFAQToggles();
            }, 100);
        };
    }
});