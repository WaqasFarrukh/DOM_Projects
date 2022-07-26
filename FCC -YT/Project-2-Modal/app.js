// Variables

let openBtn = document.getElementById("open-btn");
let modalContainer = document.getElementById("modal-container");
let closeBtn = document.getElementById("close-btn");

// Event Listeners

openBtn.addEventListener("click", () => {
  modalContainer.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  modalContainer.style.display = "none";
});

// Adding an event listener on the window object which goes even above the dom tree
window.addEventListener("click", (e) => {
  if (e.target === modalContainer) {
    modalContainer.style.display = "none";
  }
});
