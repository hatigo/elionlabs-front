// menu.js - controla o menu mobile e comportamento da navbar fixa
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.getElementById('nav');
    const header = document.getElementById('site-header');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', function () {
            nav.classList.toggle('open');
            menuToggle.setAttribute('aria-expanded', nav.classList.contains('open'));
        });
    }

    // Sticky header shadow on scroll
    let lastScroll = 0;
    window.addEventListener('scroll', function () {
        const sc = window.scrollY || document.documentElement.scrollTop;
        if (sc > 10) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        lastScroll = sc;
    });
});
