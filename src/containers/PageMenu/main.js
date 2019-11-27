import Swiper from "swiper";

function PageMenu(menu) {
  const menuSwiper = menu.querySelector(".js-menu");

  new Swiper(menuSwiper, {
    loop: true,
    autoHeight: true,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet(index, className) {
        const swiperBullets = menu.querySelectorAll(".js-swiper-bullet");
        return `<span class="menu__wrapper__nav ${className}">${
          index !== swiperBullets.length
            ? swiperBullets[index + 1].innerHTML
            : swiperBullets[0].innerHTML
        }</span>`;
      }
    }
  });
}

export default PageMenu;
