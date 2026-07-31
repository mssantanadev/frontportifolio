document.addEventListener('DOMContentLoaded', function () {
    var header = document.querySelector('.site-header');
    var menuButton = document.querySelector('.menu-button');
    var nav = document.querySelector('.nav');
    var navLinks = document.querySelectorAll('.nav a');
    var year = document.getElementById('year');

    if (year) year.textContent = new Date().getFullYear();

    function updateHeader() {
        header.classList.toggle('is-scrolled', window.scrollY > 20);
    }

    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });

    if (menuButton && nav) {
        menuButton.addEventListener('click', function () {
            var isOpen = menuButton.getAttribute('aria-expanded') === 'true';
            menuButton.setAttribute('aria-expanded', String(!isOpen));
            nav.classList.toggle('is-open', !isOpen);
            document.body.classList.toggle('menu-open', !isOpen);
        });

        navLinks.forEach(function (link) {
            link.addEventListener('click', function () {
                menuButton.setAttribute('aria-expanded', 'false');
                nav.classList.remove('is-open');
                document.body.classList.remove('menu-open');
            });
        });
    }

    var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var revealItems = document.querySelectorAll('.reveal');

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
        revealItems.forEach(function (item) { item.classList.add('is-visible'); });
        return;
    }

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px' });

    revealItems.forEach(function (item) { observer.observe(item); });
});
