/* eslint no-restricted-globals:0 */

function HeaderScripts(header) {
  const menuOpenBtn = header.querySelector(".js-header-open");
  const menuCloseBtn = header.querySelector(".js-header-close");
  const menuBlock = header.querySelector(".js-header-menu");
  const path = document.location.pathname;
  const menuImages = header.querySelectorAll(".js-list-item-bg");
  const menuLinks = header.querySelectorAll(".js-list-item");

  if (pageYOffset > 50) {
    header.classList.add("header_scroll");
  }

  if (
    path.indexOf("gallery") !== -1 ||
    path.indexOf("about") !== -1 ||
    path.indexOf("events") !== -1 ||
    path.indexOf("review") !== -1 ||
    path.indexOf("contacts") !== -1 ||
    path.indexOf("menu") !== -1
  ) {
    header.classList.add("header_black");
  }

  menuLinks.forEach(link => {
    link.addEventListener("mouseenter", event => {
      const { imageNum } = event.target.dataset;
      const activeImage = header.querySelector(
        ".js-list-item-bg.image-slide_active"
      );

      if (activeImage !== menuImages[imageNum]) {
        activeImage.classList.add("image-slide_hide");
        menuImages[imageNum].classList.add("image-slide_active");

        setTimeout(() => {
          activeImage.classList.remove("image-slide_active");
          activeImage.classList.remove("image-slide_hide");
        }, 300);
      }
    });
  });

  menuOpenBtn.addEventListener("click", () => {
    menuBlock.classList.add("header__menu_active");
  });

  menuCloseBtn.addEventListener("click", () => {
    menuBlock.classList.remove("header__menu_active");
  });

  document.addEventListener("scroll", function() {
    if (pageYOffset > 30) {
      header.classList.add("header_scroll");
    } else if (header.classList.contains("header_scroll")) {
      header.classList.remove("header_scroll");
    }
  });
}

export default HeaderScripts;
