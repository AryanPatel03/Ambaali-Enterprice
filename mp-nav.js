document.addEventListener('DOMContentLoaded', function () {
    const pages = {
        home: document.getElementById('home-page'),
        about: document.getElementById('about-page'),
        blog: document.getElementById('blog-page'),
        categories: document.getElementById('categories-page'),
        faq: document.getElementById('faq-page'),
        contact: document.getElementById('contact-page')
    };

    // Make showPage function global so it can be called from onclick handlers
    window.showPage = function (targetPage) {
        // Hide all pages
        Object.values(pages).forEach(page => {
            if (page) {
                page.style.display = 'none';
                page.classList.add('hidden');
            }
        });
        // Show target page
        if (pages[targetPage]) {
            pages[targetPage].style.display = 'block';
            pages[targetPage].classList.remove('hidden');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }

    // Handle navigation links
    document.addEventListener('click', function (e) {
        const link = e.target.closest('[data-page]');
        if (link) {
            e.preventDefault();
            const targetPage = link.getAttribute('data-page');
            showPage(targetPage);
            return;
        }

        // Handle section links within home page
        const sectionLink = e.target.closest('a[href^="#"]:not([data-page])');
        if (sectionLink && !sectionLink.getAttribute('data-page')) {
            const href = sectionLink.getAttribute('href');
            if (href.startsWith('#') && href !== '#') {
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    // Show home page first
                    showPage('home');
                    // Wait for page transition then scroll to section
                    setTimeout(() => {
                        targetElement.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }, 100);
                }
            }
        }
    });

    // Blog filter functionality
    const blogFilters = document.querySelectorAll('.blog-filter');
    const blogArticles = document.querySelectorAll('.blog-article');

    blogFilters.forEach(filter => {
        filter.addEventListener('click', function () {
            blogFilters.forEach(f => {
                f.classList.remove('active', 'bg-primary', 'text-white');
                f.classList.add('text-gray-600', 'hover:text-gray-900');
            });
            this.classList.add('active', 'bg-primary', 'text-white');
            this.classList.remove('text-gray-600', 'hover:text-gray-900');
            const category = this.getAttribute('data-category');
            
            blogArticles.forEach(article => {
                if (category === 'all' || article.getAttribute('data-category') === category) {
                    article.style.display = 'block';
                } else {
                    article.style.display = 'none';
                }
            });
        });
    });

    // Initialize filter styles
    blogFilters.forEach(filter => {
        if (filter.classList.contains('active')) {
            filter.classList.add('bg-primary', 'text-white');
        } else {
            filter.classList.add('text-gray-600', 'hover:text-gray-900');
        }
    });

    // Initialize - show home page by default
    showPage('home');
});
