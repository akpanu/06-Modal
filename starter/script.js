'use strict';

const modal = document.querySelector(`.modal`);
const overlay = document.querySelector(`.overlay`);
const btnCloseModal = document.querySelector(`.close-modal`);
const btnsOpenModal = document.querySelectorAll(`.show-modal`);
console.log(btnsOpenModal);

// function to show the modal dialog
const openModal = function () {
  modal.classList.remove(`hidden`);
  overlay.classList.remove(`hidden`);
};

// function to close the modal dialog
const closeModal = function () {
  modal.classList.add(`hidden`);
  overlay.classList.add(`hidden`);
};

// recursively adding event listeners to the buttons in the list
for (let i = 0; i < btnsOpenModal.length; i++) {
  const title = btnsOpenModal[i].textContent; // redundant code
  btnsOpenModal[i].addEventListener('click', openModal);
}
// event listeners to close the modal dialog using the x button and clicking out
btnCloseModal.addEventListener(`click`, closeModal);
overlay.addEventListener(`click`, closeModal);

// hnadling esc keypress on modal
document.addEventListener('keydown', function (event) {
  if (event.key === `Escape` && !modal.classList.contains(`hidden`)) {
    closeModal();
    console.log(`${event.key} was clicked`);
  }
  //   console.log(`${ev.key} was clicked`);
});
