document.documentElement.classList.add("js");

const themeToggle = document.querySelector(".theme-toggle");
const themePreference = window.matchMedia("(prefers-color-scheme: dark)");

function readThemePreference() {
  try {
    return localStorage.getItem("wag-theme");
  } catch (error) {
    if (error instanceof DOMException && error.name === "SecurityError") return null;
    throw error;
  }
}

function saveThemePreference(theme) {
  try {
    localStorage.setItem("wag-theme", theme);
  } catch (error) {
    if (error instanceof DOMException && error.name === "SecurityError") {
      console.warn("Theme preference could not be saved because browser storage is unavailable.");
      return;
    }
    throw error;
  }
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  if (!themeToggle) return;
  const nextTheme = theme === "dark" ? "light" : "dark";
  themeToggle.setAttribute("aria-label", `Switch to ${nextTheme} mode`);
  themeToggle.setAttribute("title", `Switch to ${nextTheme} mode`);
}

const savedTheme = readThemePreference();
applyTheme(savedTheme === "dark" || savedTheme === "light" ? savedTheme : themePreference.matches ? "dark" : "light");

themeToggle?.addEventListener("click", () => {
  const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  applyTheme(nextTheme);
  saveThemePreference(nextTheme);
});

themePreference.addEventListener("change", (event) => {
  if (readThemePreference() === null) applyTheme(event.matches ? "dark" : "light");
});

const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");

function closeMenu() {
  if (!menuToggle || !siteNav) return;
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation menu");
  siteNav.classList.remove("is-open");
  document.body.classList.remove("menu-open");
}

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const willOpen = menuToggle.getAttribute("aria-expanded") !== "true";
    menuToggle.setAttribute("aria-expanded", String(willOpen));
    menuToggle.setAttribute("aria-label", willOpen ? "Close navigation menu" : "Open navigation menu");
    siteNav.classList.toggle("is-open", willOpen);
    document.body.classList.toggle("menu-open", willOpen);
  });

  siteNav.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 760) closeMenu();
  });
}

const header = document.querySelector(".site-header");
const updateHeader = () => header?.classList.toggle("is-scrolled", window.scrollY > 8);
updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

document.querySelectorAll("[data-year]").forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});
