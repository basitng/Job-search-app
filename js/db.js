const notificationModal = document.getElementById("notificationModal");
const notifyModal = document.querySelector(".notification-modal");
const closeBtn = document.getElementById("close-modal");
const menu = document.getElementById("menu");
const sidebar = document.querySelector(".mobile-sidebar");
const nav = document.querySelector("nav");

menu.addEventListener("click", () => {
  sidebar.classList.toggle("mobile-sidebar-active");
});

notificationModal.addEventListener("click", () => {
  notifyModal.classList.toggle("notification-modal-active");
});
closeBtn.addEventListener("click", () => {
  notifyModal.classList.toggle("notification-modal-active");
});
