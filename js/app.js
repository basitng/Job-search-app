const menu = document.getElementById("menu");
const sidebar = document.querySelector(".mobile-sidebar");
const nav = document.querySelector("nav");
const banner = document.querySelector(".banner");
// const preloader = document.querySelector(".preloader");
const passwordValidator = document.getElementById("password-validator");
const progress = document.querySelectorAll(".progress");


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


function validatePassword() {
  passwordValidator.onkeyup = (e) => {
    let password = passwordValidator.value;
    let searchForNumber = password.match(/\d+/g);
    if (password.length > 6) {
      progress[0].classList.add("success");
    }
    if (searchForNumber != null) {
      progress[1].classList.add("success");
    }
    if (password.includes("@")) {
      progress[2].classList.remove("warning");
      progress[2].classList.add("success");
    }
    if (!password.includes("@")) {
      progress[2].classList.add("warning");
    }
  };
}
validatePassword();
