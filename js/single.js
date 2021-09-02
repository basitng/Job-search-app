// get the elements
const modal = document.getElementById("form");
const button = document.getElementById("modal-button");
const closeModal = document.querySelector(".close");

button.addEventListener("click", () => {
  modal.classList.add("form-active");
});

closeModal.onclick = () => {
  alert("hi");
  document.location.reload();
};
