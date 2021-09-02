const menu = document.getElementById("menu");
const sidebar = document.querySelector(".mobile-sidebar");
const nav = document.querySelector("nav");
const banner = document.querySelector(".banner");
const preloader = document.querySelector(".preloader");

preloader.classList.add("preloader-active");

window.addEventListener("load", () => {
  preloader.classList.remove("preloader-active");
});

menu.addEventListener("click", () => {
  sidebar.classList.toggle("mobile-sidebar-active");
});

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      nav.classList.add("nav-scrolled");
    } else {
      nav.classList.remove("nav-scrolled");
    }
  });
});
observer.observe(banner);
