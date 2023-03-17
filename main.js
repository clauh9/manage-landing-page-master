const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector("#primary-nav");

navToggle.addEventListener("click", () => {
  navToggle.setAttribute("aria-expanded", !primaryNav.hasAttribute("data-visible"))
  primaryNav.toggleAttribute("data-visible");
})