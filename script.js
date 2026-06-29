// ============================================================
//  Sreeharsha Dandamudi — Personal Site interactions
// ============================================================

(function () {
  "use strict";

  const nav = document.getElementById("nav");
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");
  const themeToggle = document.getElementById("themeToggle");

  // ---- Theme (persisted, respects system preference) ----
  const root = document.documentElement;
  const stored = localStorage.getItem("theme");
  if (stored) {
    root.setAttribute("data-theme", stored);
  } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
    root.setAttribute("data-theme", "light");
  }
  themeToggle.addEventListener("click", function () {
    const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  });

  // ---- Mobile menu ----
  navToggle.addEventListener("click", function () {
    navToggle.classList.toggle("open");
    navLinks.classList.toggle("open");
  });
  navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      navToggle.classList.remove("open");
      navLinks.classList.remove("open");
    });
  });

  // ---- Hide/show nav on scroll + shadow ----
  let lastY = window.scrollY;
  window.addEventListener("scroll", function () {
    const y = window.scrollY;
    nav.classList.toggle("scrolled", y > 20);
    if (y > lastY && y > 200 && !navLinks.classList.contains("open")) {
      nav.classList.add("hidden");
    } else {
      nav.classList.remove("hidden");
    }
    lastY = y;
  }, { passive: true });

  // ---- Current year ----
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
