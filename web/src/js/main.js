const WHATSAPP_NUMBER = "5583988695122";

const mobileMenu = document.querySelector('#menu-mobile');
const mainNavigation = document.querySelector('#menu-principal');
const mobileLayout = window.matchMedia('(max-width: 1279px)');
const revealObserver = 'IntersectionObserver' in window
  ? new IntersectionObserver((entries, observer) => {
    for (const { target, isIntersecting } of entries) {
      if (!isIntersecting) continue;
      target.classList.add('is-revealed');
      observer.unobserve(target);
    }
  }, { rootMargin: '0px 0px -24px' })
  : null;

for (const group of document.querySelectorAll('[data-reveal]')) {
  revealObserver?.observe(group);
}

function closeMenu() {
  mobileMenu.setAttribute('aria-expanded', 'false');
  mainNavigation.hidden = mobileLayout.matches;
}

if (mobileMenu && mainNavigation) {
  closeMenu();
  mobileMenu.hidden = false;

  mobileMenu.addEventListener('click', () => {
    const expanded = mobileMenu.getAttribute('aria-expanded') === 'true';
    mobileMenu.setAttribute('aria-expanded', String(!expanded));
    mainNavigation.hidden = expanded;
  });

  mainNavigation.addEventListener('click', (event) => {
    if (event.target.closest('a')) closeMenu();
  });

  mobileMenu.parentElement.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && mobileMenu.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      mobileMenu.focus();
    }
  });

  mobileMenu.parentElement.addEventListener('focusout', (event) => {
    const nextTarget = event.relatedTarget;
    if (nextTarget && nextTarget !== mobileMenu && !mainNavigation.contains(nextTarget)) closeMenu();
  });

  mobileLayout.addEventListener('change', closeMenu);
}

// NAO MEXER NAS FUNCOES DE LAYOUT MOBILE E MENU (VAI QUEBRAR!!!!!!!)