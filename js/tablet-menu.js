(() => {
  const menuBtn = document.querySelector('.tablet-menu-btn');
  const menuList = document.querySelector('.tablet-down-menu-list');

  // Функція, яка відкриває або закриває меню
  function toggleMenu() {
    menuList.classList.toggle('show-menu');
  }

  // Додаємо обробник подій на клік по кнопці
  menuBtn.addEventListener('click', toggleMenu);
})();