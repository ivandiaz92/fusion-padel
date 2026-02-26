/**
 * Fusion Padel - Prototype behavior: nav, header scroll, gallery, reveal, form
 */
(function () {
  'use strict';

  var HEADER = document.querySelector('.header');
  var NAV_TOGGLE = document.querySelector('.nav-toggle');
  var NAV = document.querySelector('#nav-main');
  var NAV_LINKS = document.querySelectorAll('.nav a[href^="#"]');
  var YEAR_EL = document.getElementById('year');

  // Mobile nav
  if (NAV_TOGGLE && NAV) {
    NAV_TOGGLE.addEventListener('click', function () {
      var isOpen = NAV.classList.toggle('is-open');
      NAV_TOGGLE.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });
    NAV_LINKS.forEach(function (link) {
      link.addEventListener('click', function () {
        NAV.classList.remove('is-open');
        NAV_TOGGLE.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  // Footer year
  if (YEAR_EL) YEAR_EL.textContent = new Date().getFullYear();

  // Header solid on scroll
  function onScroll() {
    if (window.scrollY > 80) {
      HEADER.classList.add('header--solid');
    } else {
      HEADER.classList.remove('header--solid');
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Instalaciones thumbnail gallery: click thumb -> change main image
  var mainImg = document.getElementById('instalaciones-main');
  var thumbs = document.querySelectorAll('.instalaciones__thumbs img[data-instalacion]');
  if (mainImg && thumbs.length) {
    thumbs.forEach(function (thumb) {
      thumb.addEventListener('click', function () {
        var src = this.getAttribute('data-instalacion');
        if (src) {
          mainImg.src = src;
          mainImg.alt = 'Canchas climatizadas Fusion Padel';
        }
      });
    });
  }

  // Scroll reveal: all elements that get entrance animation
  var revealSelectors = [
    '.hero__title', '.hero__subtitle', '.hero__cta',
    '.services__title-wrap', '.service-card',
    '.instalaciones__content', '.instalaciones__media', '.stat',
    '.membresias__header', '.plan-card',
    '.consideraciones-card',
    '.class-cta__content',
    '.section-title', '.coaches__title', '.coach-card',
    '.contact__content', '.contact-form'
  ];
  var revealEls = document.querySelectorAll(revealSelectors.join(', '));
  var revealOpts = { root: null, rootMargin: '0px 0px -40px 0px', threshold: 0.06 };
  var revealObs = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        if (entry.target.classList.contains('stat')) {
          runStatSlot(entry.target);
        }
        revealObs.unobserve(entry.target);
      }
    });
  }, revealOpts);
  revealEls.forEach(function (el) {
    if (!el.classList.contains('reveal')) el.classList.add('reveal');
    if (el.classList.contains('stat')) {
      var n = el.querySelector('.stat__number');
      if (n && n.getAttribute('data-value')) {
        var p = n.getAttribute('data-prefix') || '';
        n.textContent = p + '0';
      }
    }
    revealObs.observe(el);
  });

  // Slot-machine counter for stats: count from 0 to data-value when stat is revealed
  function runStatSlot(statEl) {
    var numEl = statEl.querySelector('.stat__number');
    if (!numEl) return;
    var value = parseInt(numEl.getAttribute('data-value'), 10);
    var prefix = numEl.getAttribute('data-prefix') || '';
    if (isNaN(value)) return;
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      numEl.textContent = prefix + value;
      return;
    }
    var duration = 700;
    var start = performance.now();
    function tick(now) {
      var elapsed = now - start;
      var t = Math.min(elapsed / duration, 1);
      t = 1 - Math.pow(1 - t, 2.5);
      var current = Math.round(t * value);
      numEl.textContent = prefix + current;
      if (t < 1) requestAnimationFrame(tick);
      else numEl.textContent = prefix + value;
    }
    requestAnimationFrame(tick);
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var id = this.getAttribute('href');
      if (id === '#') return;
      var target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Form submit feedback
  var form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var btn = form.querySelector('button[type="submit"]');
      var originalText = btn.textContent;
      btn.textContent = 'Enviado';
      btn.disabled = true;
      setTimeout(function () {
        btn.textContent = originalText;
        btn.disabled = false;
        form.reset();
      }, 2000);
    });
  }
})();
