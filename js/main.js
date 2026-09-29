/* =============================================================================
 * Hotel GrooveStreet — main.js
 * Vanilla JavaScript. No jQuery, no Bootstrap, no third-party plugins.
 * Each feature is an independent module and no-ops if its markup is absent.
 * ========================================================================== */
(function () {
  "use strict";

  const $ = (sel, ctx) => (ctx || document).querySelector(sel);
  const $$ = (sel, ctx) => Array.from((ctx || document).querySelectorAll(sel));

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  /* ---------------------------------------------------------------------
   * 1. Header — transparent over hero, solid once scrolled
   * ------------------------------------------------------------------ */
  function initHeader() {
    const header = $("[data-header]");
    if (!header) return;

    const setSolid = () => {
      const solid = window.scrollY > 24;
      header.classList.toggle("is-solid", solid);
      header.classList.toggle("text-white", !solid);
      header.classList.toggle("bg-ink-900/95", solid);
      header.classList.toggle("backdrop-blur-md", solid);
      header.classList.toggle("shadow-lg", solid);
    };

    setSolid();
    window.addEventListener("scroll", setSolid, { passive: true });
  }

  /* ---------------------------------------------------------------------
   * 2. Mobile navigation
   * ------------------------------------------------------------------ */
  function initMobileNav() {
    const toggle = $("[data-nav-toggle]");
    const panel = $("[data-nav-panel]");
    const overlay = $("[data-nav-overlay]");
    if (!toggle || !panel) return;

    const setOpen = (open) => {
      toggle.setAttribute("aria-expanded", String(open));
      panel.classList.toggle("translate-x-full", !open);
      panel.setAttribute("aria-hidden", String(!open));
      document.body.classList.toggle("overflow-hidden", open);
      if (overlay) overlay.classList.toggle("hidden", !open);
    };

    toggle.addEventListener("click", () => {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });

    if (overlay) {
      overlay.addEventListener("click", () => setOpen(false));
    }

    // Any element marked data-nav-close dismisses the panel
    $$("[data-nav-close]", panel).forEach((btn) => {
      btn.addEventListener("click", () => setOpen(false));
    });

    panel.addEventListener("click", (e) => {
      if (e.target.closest("a")) setOpen(false);
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") setOpen(false);
    });
  }

  /* ---------------------------------------------------------------------
   * 3. Dropdown / mega-menu submenus (mobile)
   * ------------------------------------------------------------------ */
  function initSubmenus() {
    $$("[data-submenu-toggle]").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const submenu = btn.nextElementSibling;
        if (!submenu) return;
        const open = btn.getAttribute("aria-expanded") !== "true";
        btn.setAttribute("aria-expanded", String(open));
        submenu.classList.toggle("hidden", !open);
        btn.querySelector("[data-chevron]")?.classList.toggle("rotate-180", open);
      });
    });
  }

  /* ---------------------------------------------------------------------
   * 4. Hero slider
   * ------------------------------------------------------------------ */
  function initHeroSlider() {
    const root = $("[data-hero-slider]");
    if (!root) return;

    const slides = $$("[data-hero-slide]", root);
    if (slides.length < 2) return;

    const dots = $$("[data-hero-dot]");
    let index = 0;
    let timer = null;
    const DURATION = 6000;

    const show = (next) => {
      index = (next + slides.length) % slides.length;

      slides.forEach((slide, i) => {
        const active = i === index;
        slide.classList.toggle("opacity-100", active);
        slide.classList.toggle("opacity-0", !active);
        slide.setAttribute("aria-hidden", String(!active));

        const content = $("[data-hero-content]", slide);
        if (content) {
          content.classList.toggle("translate-y-6", !active);
          content.classList.toggle("opacity-0", !active);
        }
      });

      dots.forEach((dot, i) => {
        dot.classList.toggle("bg-gold-500", i === index);
        dot.classList.toggle("bg-white/40", i !== index);
        dot.setAttribute("aria-current", String(i === index));
      });
    };

    const start = () => {
      if (prefersReducedMotion) return;
      stop();
      timer = setInterval(() => show(index + 1), DURATION);
    };
    const stop = () => timer && (clearInterval(timer), (timer = null));

    dots.forEach((dot, i) =>
      dot.addEventListener("click", () => {
        show(i);
        start();
      })
    );

    $("[data-hero-prev]")?.addEventListener("click", () => {
      show(index - 1);
      start();
    });
    $("[data-hero-next]")?.addEventListener("click", () => {
      show(index + 1);
      start();
    });

    root.addEventListener("mouseenter", stop);
    root.addEventListener("mouseleave", start);

    show(0);
    start();
  }
  /* ---------------------------------------------------------------------
   * 5. Scroll-triggered reveal (IntersectionObserver)
   * ------------------------------------------------------------------ */
  function initReveal() {
    const items = $$("[data-reveal]");
    if (!items.length) return;

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("is-revealed"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    items.forEach((el) => observer.observe(el));
  }

  /* ---------------------------------------------------------------------
   * 6. Horizontal room / testimonial rail
   * ------------------------------------------------------------------ */
  function initRail() {
    $$("[data-rail]").forEach((rail) => {
      const track = $("[data-rail-track]", rail);
      if (!track) return;

      const step = () => {
        const first = track.firstElementChild;
        if (!first) return track.clientWidth * 0.8;
        const gap = parseFloat(getComputedStyle(track).columnGap || "24") || 24;
        return first.getBoundingClientRect().width + gap;
      };

      $("[data-rail-prev]", rail)?.addEventListener("click", () => {
        track.scrollBy({ left: -step(), behavior: "smooth" });
      });

      $("[data-rail-next]", rail)?.addEventListener("click", () => {
        track.scrollBy({ left: step(), behavior: "smooth" });
      });
    });
  }

  /* ---------------------------------------------------------------------
   * 7. Reservation bar — validate + summarise without a backend
   * ------------------------------------------------------------------ */
  function initBooking() {
    const form = $("[data-booking-form]");
    if (!form) return;

    const output = $("[data-booking-summary]", form);

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const data = new FormData(form);
      const checkIn = (data.get("checkIn") || "").trim();
      const checkOut = (data.get("checkOut") || "").trim();

      if (!checkIn || !checkOut) {
        if (output) {
          output.textContent = "Please choose both a check-in and check-out date.";
          output.classList.remove("text-gold-200", "text-green-700");
          output.classList.add("text-red-600");
        }
        return;
      }

      if (new Date(checkOut) <= new Date(checkIn)) {
        if (output) {
          output.textContent = "Check-out must be after check-in.";
          output.classList.remove("text-gold-200", "text-green-700");
          output.classList.add("text-red-600");
        }
        return;
      }

      if (output) {
        output.textContent =
          "Request received. Our reservations team will confirm your stay shortly.";
        output.classList.remove("text-red-600", "text-gold-200");
        output.classList.add("text-green-700");
      }
      form.reset();
    });
  }

  /* ---------------------------------------------------------------------
   * 8. Contact + newsletter forms (demo submit)
   * ------------------------------------------------------------------ */
  function initForms() {
    $$("[data-demo-form]").forEach((form) => {
      const output = $("[data-form-status]", form);
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        if (!output) return;
        output.textContent =
          form.dataset.demoForm || "Thank you. We'll be in touch soon.";
        form.reset();
      });
    });
  }
  /* ---------------------------------------------------------------------
   * 9. Google Maps — lazy-loaded, degrades to a static link
   * ------------------------------------------------------------------ */
  function initMap() {
    const mapEl = $("[data-map]");
    if (!mapEl) return;

    const status = $("[data-map-status]");

    const load = () => {
      const key = mapEl.dataset.mapKey;
      if (!key) return;

      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${key}&callback=initGroveStreetMap`;
      script.async = true;
      script.onerror = () => {
        if (status) status.hidden = false;
      };
      document.head.appendChild(script);
    };

    window.initGroveStreetMap = function () {
      if (typeof google === "undefined" || !google.maps) {
        if (status) status.hidden = false;
        return;
      }

      const map = new google.maps.Map(mapEl, {
        center: { lat: 0.3476, lng: 32.5825 }, // Kampala, Uganda
        zoom: 14,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
        styles: [
          { elementType: "geometry", stylers: [{ color: "#ebe7e2" }] },
          { elementType: "labels.text.fill", stylers: [{ color: "#52525b" }] },
          { elementType: "labels.text.stroke", stylers: [{ color: "#f7f7f8" }] },
          { featureType: "road", elementType: "geometry", stylers: [{ color: "#ffffff" }] },
          { featureType: "water", elementType: "geometry", stylers: [{ color: "#c5d8e0" }] },
        ],
      });

      new google.maps.Marker({
        position: map.getCenter(),
        map: map,
        title: "Hotel GrooveStreet Uganda",
      });
    };

    // Only pull in the Maps API once the section is near the viewport.
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries) => {
          if (entries.some((e) => e.isIntersecting)) {
            io.disconnect();
            load();
          }
        },
        { rootMargin: "300px" }
      );
      io.observe(mapEl);
    } else {
      load();
    }
  }

  /* ---------------------------------------------------------------------
   * 10. Current year in footer
   * ------------------------------------------------------------------ */
  function initYear() {
    $$("[data-year]").forEach((el) => {
      el.textContent = new Date().getFullYear();
    });
  }

  /* ---------------------------------------------------------------------
   * 11. Back to top
   * ------------------------------------------------------------------ */
  function initBackToTop() {
    const btn = $("[data-back-to-top]");
    if (!btn) return;

    const toggle = () => {
      btn.classList.toggle("opacity-0", window.scrollY < 400);
      btn.classList.toggle("pointer-events-none", window.scrollY < 400);
    };

    toggle();
    window.addEventListener("scroll", toggle, { passive: true });
    btn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
    });
  }

  /* ---------------------------------------------------------------------
   * 12. "Reserve" links scroll to the booking form
   * ------------------------------------------------------------------ */
  function initReserveLinks() {
    $$("[data-reserve-link]").forEach((link) => {
      link.addEventListener("click", (e) => {
        const target = $("[data-booking-form]");
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth" });
        target.querySelector("select, input")?.focus({ preventScroll: true });
      });
    });
  }

  /* ------------------------------------------------------------------ */
  function init() {
    initHeader();
    initMobileNav();
    initSubmenus();
    initHeroSlider();
    initReveal();
    initRail();
    initBooking();
    initForms();
    initMap();
    initYear();
    initBackToTop();
    initReserveLinks();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
