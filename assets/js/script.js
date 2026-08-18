/* =========================================================
   Muthu Prasanna T — Portfolio
   Clean vanilla JS: data rendering + premium interactions
   ========================================================= */

(function () {
  "use strict";

  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------------------------------------------------------
     1. DATA — Live Websites, Web Applications, Mobile Apps
     --------------------------------------------------------- */

  var liveSites = [
    { name: "New Fathima Timbers", category: "Business Website", url: "https://www.newfathimatimbers.com/", img: "site-newfathimatimbers" },
    { name: "MR Motion Pictures", category: "Production House", url: "https://www.mrmotionpictures.com/", img: "site-mrmotionpictures" },
    { name: "Atmarai", category: "CRM / Corporate", url: "https://atmarai.com/", img: "site-atmarai" },
    { name: "Tool Fort", category: "Business Website", url: "https://tool-fort.com/", img: "site-toolfort" },
    { name: "Ample Solutions", category: "Corporate Website", url: "https://www.amplesolutions.in/", img: "site-amplesolutions" },
    { name: "Blessa Texports", category: "Business Website", url: "https://www.blessatexports.com/", img: "site-blessatexports" },
    { name: "Jertab Humanity", category: "Organization Website", url: "https://jertabhumanity.com/", img: "site-jertahumanity" },
    { name: "Wellspring Talent", category: "Business Website", url: "https://www.wellspring-talent.com/", img: "site-wellspringtalent" },
    { name: "Crystree Solutions", category: "Corporate Website", url: "https://crystreesolutions.com/", img: "site-crystreesolutions" },
    { name: "Trichy Rasi Travels", category: "Travel &amp; Tourism", url: "https://trichyrasitravels.com/", img: "site-trichyrasitravels" },
    { name: "Moor Technologies", category: "Corporate Website", url: "https://moortechnologies.in/", img: "site-moortechnologies" },
    { name: "Madurai Meenakshi Travels", category: "Travel &amp; Tourism", url: "https://www.maduraimeenakshitravels.in/", img: "site-maduraimeenakshitravels" },
    { name: "Swastika Aircons", category: "Business Website", url: "https://swastikaaircons.com/", img: "site-swastikaaircons" },
    { name: "Tery Global Investments", category: "Corporate Website", url: "https://www.teryglobalinvestments.in/", img: "site-teryglobalinvestments" }
  ];

  var webApps = [
    { name: "Atmarai CRM", category: "CRM", desc: "Lead, customer and expo management platform with dashboards and multi-channel communication.", tech: ["Laravel", "PHP", "MySQL", "JavaScript"], img: "app-atmaraicrm", url: "https://atmarai.com/" },
    { name: "SRM Examination Portal", category: "Education System", desc: "Role-based examination management system with dedicated staff and student portals.", tech: ["Laravel", "PHP", "MySQL"], img: "app-srmexam" },
    { name: "School Management Portal", category: "Education System", desc: "Custom management portal for school administration workflows.", tech: ["Laravel", "PHP", "MySQL"], img: "app-schoolmgmt" },
    { name: "Crystree Solutions HRMS", category: "HRMS", desc: "Internal HR management system for employee and workflow administration.", tech: ["Laravel", "PHP", "MySQL"], img: "app-crystreehrms" },
    { name: "Swastika Aircons CRM", category: "CRM", desc: "Customer relationship management platform for sales and service operations.", tech: ["Laravel", "PHP", "MySQL"], img: "app-swastikaaircons-crm" },
    { name: "Freshora Payroll System", category: "Business Application", desc: "Payroll processing and management application.", tech: ["Laravel", "PHP", "MySQL"], img: "app-freshorapayroll" },
    { name: "Freshora HRMS", category: "HRMS", desc: "Human resource management system for employee lifecycle administration.", tech: ["Laravel", "PHP", "MySQL"], img: "app-freshorahrms" }
  ];

  var mobileGroups = {
    freshora: [
      { name: "Taakshift Customer", img: "mobile-taakshiftcustomer", play: "https://play.google.com/store/apps/details?id=com.freshora.taakshiftcustomer" },
      { name: "Taakshift Vendor", img: "mobile-taakshiftvendor", play: "https://play.google.com/store/apps/details?id=com.freshora.taakshiftvendor" },
      { name: "CRM FSM", img: "mobile-crmfsm", play: "https://play.google.com/store/apps/details?id=com.freshora.crmfsm" },
      { name: "DTaxi Customer", img: "mobile-dtaxidemo", play: "https://play.google.com/store/apps/details?id=com.freshora.dtaxidemo" },
      { name: "DTaxi Driver", img: "mobile-dtaxidriver", play: "https://play.google.com/store/apps/details?id=com.freshora.dtaxidriver" },
      { name: "Siragugal", img: "mobile-siragugal", play: "https://play.google.com/store/apps/details?id=com.freshora.siragugal" }
    ],
    buildours: [
      { name: "Buildours Customer", img: "mobile-buildourscustomer", play: "https://play.google.com/store/apps/details?id=com.buildours.customer" },
      { name: "Buildours Retail", img: "mobile-buildoursretail", play: "https://play.google.com/store/apps/details?id=com.buildours.retail" },
      { name: "Buildours Riders", img: "mobile-buildoursriders", play: "https://play.google.com/store/apps/details?id=com.buildours.riders" },
      { name: "Buildours Warehouse", img: "mobile-buildourswarehouse", play: "https://play.google.com/store/apps/details?id=com.buildours.warehosue" }
    ],
    other: [
      { name: "Ramchand Developers", img: "mobile-ramchanddevelopers", play: "https://play.google.com/store/apps/details?id=com.ramchand.developers" },
      { name: "Dentor Consultant App", img: "mobile-dentorconsultant", play: null },
      { name: "Dentor Clinic App", img: "mobile-dentorclinic", play: null },
      { name: "Buildours Invoice App", img: "mobile-buildoursinvoice", play: null },
      { name: "Freshora Matrimony", img: "mobile-freshoramatrimony", play: null }
    ]
  };

  /* ---------------------------------------------------------
     2. RENDER — build cards from data
     --------------------------------------------------------- */

  function renderLiveSites() {
    var grid = document.getElementById("liveSitesGrid");
    if (!grid) return;
    var html = liveSites.map(function (site) {
      return (
        '<div class="col-sm-6 col-lg-4 col-xl-3" data-reveal>' +
          '<div class="site-card">' +
            '<div class="site-media">' +
              '<img src="assets/images/' + site.img + '.svg" alt="' + site.name + ' website preview" loading="lazy">' +
            '</div>' +
            '<div class="site-body">' +
              '<span class="site-category">' + site.category + '</span>' +
              '<h3>' + site.name + '</h3>' +
              '<a href="' + site.url + '" target="_blank" rel="noopener noreferrer" class="btn btn-live w-100">View Live Website <i class="bi bi-box-arrow-up-right"></i></a>' +
            '</div>' +
          '</div>' +
        '</div>'
      );
    }).join("");
    grid.innerHTML = html;
  }

  function renderWebApps() {
    var grid = document.getElementById("webAppsGrid");
    if (!grid) return;
    var html = webApps.map(function (app) {
      var techBadges = app.tech.map(function (t) { return "<span>" + t + "</span>"; }).join("");
      var liveBtn = app.url ? '<a href="' + app.url + '" target="_blank" rel="noopener noreferrer" class="btn btn-live">Live <i class="bi bi-box-arrow-up-right"></i></a>' : "";
      return (
        '<div class="col-md-6 col-lg-4" data-reveal>' +
          '<div class="webapp-card">' +
            '<div class="webapp-media">' +
              '<img src="assets/images/' + app.img + '.svg" alt="' + app.name + ' application preview" loading="lazy">' +
            '</div>' +
            '<div class="webapp-body">' +
              '<span class="site-category">' + app.category + '</span>' +
              '<h3>' + app.name + '</h3>' +
              '<p>' + app.desc + '</p>' +
              '<div class="project-tech mb-3">' + techBadges + '</div>' +
              '<div class="d-flex gap-2">' + liveBtn + '<button type="button" class="btn btn-details" data-app-detail="' + app.name + '">View Details</button></div>' +
            '</div>' +
          '</div>' +
        '</div>'
      );
    }).join("");
    grid.innerHTML = html;
  }

  function renderMobileApps() {
  var grid = document.getElementById("mobileApplications");
  if (!grid) return;

  var apps = []
    .concat(mobileGroups.freshora)
    .concat(mobileGroups.buildours)
    .concat(mobileGroups.other);

  var html = apps.map(function (app) {
    var playBtn = app.play
      ? '<a href="' + app.play + '" target="_blank" rel="noopener noreferrer" class="btn btn-play">' +
          '<i class="bi bi-google-play"></i> View on Google Play' +
        '</a>'
      : '<span class="play-unavailable">Play Store link not available</span>';

    return (
      '<div class="col-6 col-sm-4 col-lg-3" data-reveal>' +
        '<div class="mobile-card">' +

          '<div class="phone-frame">' +
            '<img src="assets/images/' + app.img + '.svg" ' +
            'alt="' + app.name + ' mobile app screenshot" loading="lazy">' +
          '</div>' +

          '<h3>' + app.name + '</h3>' +

          playBtn +

        '</div>' +
      '</div>'
    );
  }).join("");

  grid.innerHTML = html;
}

  /* ---------------------------------------------------------
     3. PRELOADER
     --------------------------------------------------------- */

  function initPreloader() {
    var preloader = document.getElementById("preloader");
    if (!preloader) return;
    window.addEventListener("load", function () {
      setTimeout(function () {
        preloader.classList.add("preloader-hidden");
        document.body.classList.add("loaded");
        setTimeout(function () { preloader.remove(); }, 700);
      }, prefersReducedMotion ? 100 : 650);
    });
    // Fallback in case 'load' already fired
    if (document.readyState === "complete") {
      preloader.classList.add("preloader-hidden");
      setTimeout(function () { preloader.remove(); }, 400);
    }
  }

  /* ---------------------------------------------------------
     4. NAVBAR — scroll state + close mobile menu on click
     --------------------------------------------------------- */

  function initNavbar() {
    var navbar = document.getElementById("siteNavbar");
    if (!navbar) return;
    function onScroll() {
      if (window.scrollY > 30) {
        navbar.classList.add("navbar-scrolled");
      } else {
        navbar.classList.remove("navbar-scrolled");
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    var navLinks = document.querySelectorAll(".nav-links .nav-link, .nav-links .btn-nav-cta");
    var collapseEl = document.getElementById("mainNav");
    navLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        if (collapseEl && collapseEl.classList.contains("show") && window.bootstrap) {
          var bsCollapse = window.bootstrap.Collapse.getOrCreateInstance(collapseEl);
          bsCollapse.hide();
        }
      });
    });
  }

  /* ---------------------------------------------------------
     5. SMOOTH SCROLL for in-page anchors
     --------------------------------------------------------- */

  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener("click", function (e) {
        var targetId = this.getAttribute("href");
        if (targetId.length < 2) return;
        var target = document.querySelector(targetId);
        if (!target) return;
        e.preventDefault();
        var offset = 76;
        var top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: top, behavior: prefersReducedMotion ? "auto" : "smooth" });
      });
    });
  }

  /* ---------------------------------------------------------
     6. SCROLL REVEAL — IntersectionObserver
     --------------------------------------------------------- */

  function initScrollReveal() {
    var items = document.querySelectorAll("[data-reveal]");
    if (!items.length) return;

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      items.forEach(function (el) { el.classList.add("revealed"); });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -60px 0px" });

    items.forEach(function (el) { observer.observe(el); });
  }

  /* ---------------------------------------------------------
     7. ANIMATED COUNTERS
     --------------------------------------------------------- */

  function initCounters() {
    var counters = document.querySelectorAll(".stat-number[data-count]");
    if (!counters.length) return;

    function animateCounter(el) {
      var target = parseInt(el.getAttribute("data-count"), 10) || 0;
      var suffix = el.getAttribute("data-suffix") || "";
      if (prefersReducedMotion) {
        el.textContent = target + suffix;
        return;
      }
      var duration = 1200;
      var startTime = null;

      function step(timestamp) {
        if (!startTime) startTime = timestamp;
        var progress = Math.min((timestamp - startTime) / duration, 1);
        var eased = 1 - Math.pow(1 - progress, 3);
        var value = Math.floor(eased * target);
        el.textContent = value + suffix;
        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          el.textContent = target + suffix;
        }
      }
      requestAnimationFrame(step);
    }

    if (!("IntersectionObserver" in window)) {
      counters.forEach(animateCounter);
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(function (el) { observer.observe(el); });
  }

  /* ---------------------------------------------------------
     8. HERO — typed line inside IDE panel
     --------------------------------------------------------- */

  function initHeroTyping() {
    var el = document.getElementById("typedLine");
    if (!el) return;

    var phrases = [
      'lead(); build(); ship();',
      'deliver("CRM/ERP/HRMS");',
      'coordinate(team, client);'
    ];

    if (prefersReducedMotion) {
      el.textContent = phrases[0];
      return;
    }

    var phraseIndex = 0;
    var charIndex = 0;
    var deleting = false;

    function tick() {
      var current = phrases[phraseIndex];
      if (!deleting) {
        charIndex++;
        el.textContent = current.slice(0, charIndex);
        if (charIndex === current.length) {
          deleting = true;
          setTimeout(tick, 1400);
          return;
        }
      } else {
        charIndex--;
        el.textContent = current.slice(0, charIndex);
        if (charIndex === 0) {
          deleting = false;
          phraseIndex = (phraseIndex + 1) % phrases.length;
        }
      }
      setTimeout(tick, deleting ? 28 : 46);
    }
    setTimeout(tick, 900);
  }

  /* ---------------------------------------------------------
     9. BACK TO TOP button visibility
     --------------------------------------------------------- */

  function initBackToTop() {
    var btn = document.querySelector(".back-to-top");
    if (!btn) return;
    function onScroll() {
      if (window.scrollY > 500) {
        btn.classList.add("visible");
      } else {
        btn.classList.remove("visible");
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ---------------------------------------------------------
     10. WEB APP DETAIL — lightweight inline expand (no dead buttons)
     --------------------------------------------------------- */

  function initWebAppDetails() {
    document.addEventListener("click", function (e) {
      var btn = e.target.closest("[data-app-detail]");
      if (!btn) return;
      var card = btn.closest(".webapp-card");
      if (!card) return;
      card.classList.toggle("expanded");
      btn.textContent = card.classList.contains("expanded") ? "Hide Details" : "View Details";
    });
  }

  /* ---------------------------------------------------------
     INIT
     --------------------------------------------------------- */

  document.addEventListener("DOMContentLoaded", function () {
    renderLiveSites();
    renderWebApps();
    renderMobileApps();
    initPreloader();
    initNavbar();
    initSmoothScroll();
    initScrollReveal();
    initCounters();
    initHeroTyping();
    initBackToTop();
    initWebAppDetails();
  });
})();
