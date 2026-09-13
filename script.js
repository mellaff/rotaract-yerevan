/* =========================================================================
   ROTARACT CLUB OF YEREVAN — SHARED SCRIPT
   Used by all pages. Handles:
   1. Mobile hamburger menu open/close
   2. Highlighting the current page's nav link as "active"
   3. A subtle fade-in-on-scroll effect for elements with class "fade-in"
   No edits needed here unless you want to change behavior.
   ========================================================================= */

document.addEventListener('DOMContentLoaded', function () {
  /* -----------------------------------------------------------------------
     1. MOBILE NAV TOGGLE
     ----------------------------------------------------------------------- */
  var toggleBtn = document.querySelector('.nav-toggle');
  var navLinks = document.querySelector('.nav-links');

  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener('click', function () {
      var isOpen = navLinks.classList.toggle('is-open');
      toggleBtn.classList.toggle('is-open', isOpen);
      toggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    /* Close the menu automatically when a link is tapped (mobile) */
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('is-open');
        toggleBtn.classList.remove('is-open');
        toggleBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* -----------------------------------------------------------------------
     2. HIGHLIGHT CURRENT PAGE IN NAV
     Compares each nav link's href to the current page filename and
     adds the "active" class automatically — no manual editing needed.
     ----------------------------------------------------------------------- */
  var currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(function (link) {
    var linkPage = link.getAttribute('href');
    if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
      link.classList.add('active');
    }
  });

  /* -----------------------------------------------------------------------
     3. FADE-IN ON SCROLL
     Any element with class="fade-in" will smoothly appear as the user
     scrolls to it. Uses IntersectionObserver (supported in all modern
     browsers); falls back gracefully to "always visible" if unsupported.
     ----------------------------------------------------------------------- */
  var fadeEls = document.querySelectorAll('.fade-in');

  if ('IntersectionObserver' in window && fadeEls.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    fadeEls.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    fadeEls.forEach(function (el) {
      el.classList.add('is-visible');
    });
  }
});
