
// (() => {
//   const refs = {
//     openModalBtn: document.querySelectorAll("[data-modal-open]"),
//     closeModalBtn: document.querySelector("[data-modal-close]"),
//     modal: document.querySelector("[data-modal]"),
//   };

//   refs.openModalBtn.forEach(btn => {
//     btn.addEventListener("click", toggleModal);
//   });
//   refs.closeModalBtn.addEventListener("click", toggleModal);

//   function toggleModal() {
//     refs.modal.classList.toggle("visually-hidden");
//   }
// })();



(() => {
  const refs = {
    openModalBtn: document.querySelectorAll("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    body: document.querySelector("body")
  };

  refs.openModalBtn.forEach(btn => {
    btn.addEventListener("click", toggleModal);
  });
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("visually-hidden");
    refs.body.classList.toggle("modal-open");
  }
})();


// (() => {
//   const refs = {
//     openModalBtn: document.querySelectorAll("[data-modal-open]"),
//     closeModalBtn: document.querySelector("[data-modal-close]"),
//     modal: document.querySelector("[data-modal]"),
//     body: document.querySelector("body")
//   };

//   refs.openModalBtn.forEach(btn => {
//     btn.addEventListener("click", toggleModal);
//   });
//   refs.closeModalBtn.addEventListener("click", toggleModal);

//   function toggleModal() {
//     refs.modal.classList.toggle("visually-hidden");
//     refs.body.classList.toggle("modal-open");

//     // Додати або видалити клас, що обмежує прокрутку сторінки
//     if (refs.body.classList.contains("modal-open")) {
//       refs.body.style.overflow = "hidden"; // Обмежити прокрутку
//     } else {
//       refs.body.style.overflow = ""; // Відмінити обмеження прокрутки
//     }
//   }
// })();