"use strict";
const listOfItems = document.querySelector(".btns");
const mnue = document.querySelector(".mnue");
const btns = document.querySelectorAll(".btn-window");
const model = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");

mnue.addEventListener("click", () => {
  listOfItems.classList.toggle("show");
});

const open_Window = function (e) {
  e.preventDefault();
  model.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const close_Window = function () {
  model.classList.add("hidden");
  overlay.classList.add("hidden");
};
btns.forEach((btn) => {
  btn.addEventListener("click", open_Window);
});
btnCloseModal.addEventListener("click", close_Window);
