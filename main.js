const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector("#primary-nav");
const btn_hamburger = document.querySelector(".icon-hamburger");
const btn_close = document.querySelector(".icon-close");

navToggle.addEventListener("click", () => {
  navToggle.setAttribute("aria-expanded", !primaryNav.hasAttribute("data-visible"))

  btn_hamburger.toggleAttribute("data-visible");
  btn_close.toggleAttribute("data-visible");
  primaryNav.toggleAttribute("data-visible");
})

const slider = new A11YSlider(document.querySelector(".slider"), {
  adaptiveHeight: true,
  dots: false,
  arrows: false,
  autoplay: false,
  autoplaySpeed: 2500,
  skipBtn: false,
  responsive: {
    768: {
      slidesToShow: 1,
      dots: true
    },
    960: {
      // dots: false
    },
    1280: {
      dots: false,
      slidesToShow: 3,
    }
  }
});
