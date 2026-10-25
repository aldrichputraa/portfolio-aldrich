
/* =================================
   ALDRICH PORTFOLIO — SCROLL REVEAL
================================= */

document.addEventListener("DOMContentLoaded", () => {
  const revealElements = document.querySelectorAll(
    ".section-label, .section-title, .section-description, .card, .education-item, .contact-box"
  );

  // Jika browser tidak mendukung animasi,
  // konten tetap ditampilkan seperti biasa.
  if (!("IntersectionObserver" in window)) {
    return;
  }

  document.documentElement.classList.add("js-reveal");

  revealElements.forEach((element) => {
    element.classList.add("reveal");
  });

  const observer = new IntersectionObserver(
    (entries, observerInstance) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observerInstance.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -35px 0px"
    }
  );

  revealElements.forEach((element) => {
    observer.observe(element);
  });
});

/* =================================
   ALDRICH PORTFOLIO — ACTIVE NAVBAR
================================= */

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-links a");

  const sections = document.querySelectorAll(
    "#beranda, #tentang, #keahlian, #pendidikan, #proyek, #sertifikat, #kontak"
  );

  if (!navLinks.length || !sections.length) {
    return;
  }

  const updateActiveLink = () => {
    let currentSection = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 120;

      if (window.scrollY >= sectionTop) {
        currentSection = section.id;
      }
    });

    navLinks.forEach((link) => {
      const isActive =
        link.getAttribute("href") === `#${currentSection}`;

      link.classList.toggle("active", isActive);

      if (isActive) {
        link.setAttribute("aria-current", "location");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  };

  window.addEventListener("scroll", updateActiveLink, {
    passive: true
  });

  updateActiveLink();
});

/* =================================
   ALDRICH PORTFOLIO — TAHUN FOOTER
================================= */

document.addEventListener("DOMContentLoaded", () => {
  const yearElement = document.getElementById("tahun");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});

