document.addEventListener('DOMContentLoaded', function () {
    // Blog modal elements
    const blogModal = document.getElementById('blog-modal');
    const blogModalTitle = document.getElementById('blog-modal-title');
    const blogModalImage = document.getElementById('blog-modal-image');
    const blogModalContent = document.getElementById('blog-modal-content');
    const closeBlogModal = document.getElementById('close-blog-modal');

    function getArticleContent(articleEl) {
        if (!articleEl) return '';
        const articleId = articleEl.getAttribute('data-article') || '';
        const directContent = articleEl.querySelector('.blog-content');
        if (directContent) return directContent.innerHTML.trim();

        if (articleId) {
            const matchingArticles = document.querySelectorAll(`article[data-article="${articleId}"]`);
            for (const match of matchingArticles) {
                if (match === articleEl) continue;
                const matchContent = match.querySelector('.blog-content');
                if (matchContent) return matchContent.innerHTML.trim();
            }
        }

        const directExcerpt = articleEl.querySelector('.blog-excerpt');
        if (directExcerpt) return directExcerpt.innerHTML.trim();

        if (articleId) {
            const matchingArticles = document.querySelectorAll(`article[data-article="${articleId}"]`);
            for (const match of matchingArticles) {
                if (match === articleEl) continue;
                const matchExcerpt = match.querySelector('.blog-excerpt');
                if (matchExcerpt) return matchExcerpt.innerHTML.trim();
            }
        }
        return '';
    }

    function openBlogModalFromArticle(articleEl) {
        if (!articleEl) return;
        const titleEl = articleEl.querySelector('h3');
        const imgEl = articleEl.querySelector('img');
        const contentHtml = getArticleContent(articleEl);

        blogModalTitle.textContent = titleEl ? titleEl.textContent.trim() : '';
        blogModalImage.innerHTML = imgEl ? `<img src="${imgEl.src}" alt="${imgEl.alt || ''}" class="w-full h-64 object-cover rounded-lg">` : '';
        blogModalContent.innerHTML = contentHtml;

        blogModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }

    // Close modal handlers
    if (closeBlogModal) {
        closeBlogModal.addEventListener('click', function () {
            blogModal.classList.add('hidden');
            document.body.style.overflow = '';
        });
    }

    blogModal.addEventListener('click', function (e) {
        if (e.target === blogModal) {
            blogModal.classList.add('hidden');
            document.body.style.overflow = '';
        }
    });

    // Attach handlers: Read More (within article) and Read Article (grid buttons)
    const readMoreBtns = document.querySelectorAll('.read-more-btn, .read-article-btn');
    readMoreBtns.forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            const article = this.closest('article');
            if (article) {
                openBlogModalFromArticle(article);
            }
        });
    });

    // Featured Read Full Article button: open the first article's modal
    const featuredReadBtns = document.querySelectorAll('.featured-read-btn');
    featuredReadBtns.forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            const firstArticle = document.querySelector('#blog-articles-grid article');
            if (firstArticle) openBlogModalFromArticle(firstArticle);
        });
    });

    // Load More Articles functionality
    const loadMoreBtn = document.getElementById('load-more-articles');
    const articlesGrid = document.querySelectorAll('#blog-articles-grid article');

    function getColumns() {
        const w = window.innerWidth;
        if (w >= 1024) return 3; // lg
        if (w >= 768) return 2; // md
        return 1; // sm
    }

    function showInitialArticles() {
        const cols = getColumns();
        const initialVisible = cols * 2; // 2 rows
        articlesGrid.forEach((art, idx) => {
            if (idx < initialVisible) {
                art.style.display = '';
            } else {
                art.style.display = 'none';
            }
        });
        if (loadMoreBtn) loadMoreBtn.textContent = 'Load More Articles';
    }

    // Initial hide/show
    if (articlesGrid.length > 0) showInitialArticles();

    // Recalculate on resize
    window.addEventListener('resize', function () {
        // Only adjust if currently in collapsed state
        if (loadMoreBtn && loadMoreBtn.dataset.expanded !== 'true') {
            showInitialArticles();
        }
    });

    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function (e) {
            e.preventDefault();
            const expanded = this.dataset.expanded === 'true';
            if (!expanded) {
                // show all
                articlesGrid.forEach(art => art.style.display = '');
                this.textContent = 'Show Less';
                this.dataset.expanded = 'true';
            } else {
                // collapse back
                showInitialArticles();
                this.dataset.expanded = 'false';
            }
        });
    }
});