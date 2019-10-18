function HeaderScripts(header) {
  const menuOpenBtn = header.querySelector(".js-header-open");
  const menuCloseBtn = header.querySelector(".js-header-close");
  const menuBlock = header.querySelector(".js-header-menu");

  menuOpenBtn.addEventListener("click", () => {
    menuBlock.classList.add("header__menu_active");
  });

  menuCloseBtn.addEventListener("click", () => {
    menuBlock.classList.remove("header__menu_active");
  });
}

export default HeaderScripts;
