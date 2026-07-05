// Hamburger menu for mobile & tablet navigation.
// Kept in its own file (separate from main.js) so it always runs reliably.
(function () {
  const nav = document.querySelector("#nav");
  const toggle = document.querySelector("#navToggle");
  const menu = document.querySelector("#navMenu");
  const overlay = document.querySelector("#navOverlay");

  if (!nav || !toggle || !menu) return;

  const OPEN_CLASS = "nav-open";
  const MOBILE_BREAKPOINT = 1024;

  function openMenu() {
    nav.classList.add(OPEN_CLASS);
    document.body.classList.add(OPEN_CLASS);
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Menu sluiten");
  }

  function closeMenu() {
    nav.classList.remove(OPEN_CLASS);
    document.body.classList.remove(OPEN_CLASS);
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Menu openen");
  }

  function isOpen() {
    return nav.classList.contains(OPEN_CLASS);
  }

  toggle.addEventListener("click", () => {
    if (isOpen()) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Close the menu whenever a nav link is clicked (e.g. tapping "Projecten")
  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => closeMenu());
  });

  // Close when tapping the dimmed overlay behind the menu
  if (overlay) {
    overlay.addEventListener("click", () => closeMenu());
  }

  // Close on Escape for keyboard users
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && isOpen()) {
      closeMenu();
      toggle.focus();
    }
  });

  // If the viewport is resized past the mobile/tablet breakpoint while the
  // menu is open (e.g. rotating a tablet or resizing a desktop window),
  // reset it so it doesn't stay stuck open with the wrong layout.
  window.addEventListener("resize", () => {
    if (window.innerWidth > MOBILE_BREAKPOINT && isOpen()) {
      closeMenu();
    }
  });
})();   