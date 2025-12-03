document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuButton = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuIcon = document.getElementById('mobile-menu-icon');
    const mobileLinks = mobileMenu ? mobileMenu.querySelectorAll('a') : [];
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function () {
            const isHidden = mobileMenu.classList.contains('hidden');
            if (isHidden) {
                mobileMenu.classList.remove('hidden');
                if (mobileMenuIcon) mobileMenuIcon.className = 'ri-close-line text-xl transition-transform';
            } else {
                mobileMenu.classList.add('hidden');
                if (mobileMenuIcon) mobileMenuIcon.className = 'ri-menu-line text-xl transition-transform';
            }
        });
        // Close menu when clicking on links
        mobileLinks.forEach(link => {
            link.addEventListener('click', function () {
                mobileMenu.classList.add('hidden');
                if (mobileMenuIcon) mobileMenuIcon.className = 'ri-menu-line text-xl transition-transform';
            });
        });
        // Close menu when clicking outside
        document.addEventListener('click', function (event) {
            if (!mobileMenuButton.contains(event.target) && !mobileMenu.contains(event.target)) {
                mobileMenu.classList.add('hidden');
                if (mobileMenuIcon) mobileMenuIcon.className = 'ri-menu-line text-xl transition-transform';
            }
        });
    }
});