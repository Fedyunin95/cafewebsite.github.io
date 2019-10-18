import Swiper from "swiper";

function mainPage(page) {
  const bannerSliders = page.querySelectorAll(".js-banner-swiper");
  const horizontalSliders = page.querySelectorAll(".js-horizontal-swiper");
  const eventsSliders = page.querySelectorAll(".js-singl-swiper_horizontal");
  let bannerSwiper;

  for (let i = 0, len = bannerSliders.length; i < len; i++) {
    const nextBtn = bannerSliders[i].querySelector(".js-next-slide");
    const prevBtn = bannerSliders[i].querySelector(".js-prev-slide");
    bannerSwiper = new Swiper(bannerSliders[i], {
      loop: true,
      direction: "vertical",
      navigation: {
        nextEl: nextBtn,
        prevEl: prevBtn
      }
    });
  }

  for (let i = 0, len = horizontalSliders.length; i < len; i++) {
    const nextBtn = horizontalSliders[i].querySelector(".js-next-slide");
    const prevBtn = horizontalSliders[i].querySelector(".js-prev-slide");
    bannerSwiper = new Swiper(horizontalSliders[i], {
      loop: false,
      slidesPerView: 2,
      slidesPerColumn: 2,
      spaceBetween: 23,
      navigation: {
        nextEl: nextBtn,
        prevEl: prevBtn
      }
    });
  }

  for (let i = 0, len = eventsSliders.length; i < len; i++) {
    const nextBtn = eventsSliders[i].querySelector(".js-next-slide");
    const prevBtn = eventsSliders[i].querySelector(".js-prev-slide");

    bannerSwiper = new Swiper(eventsSliders[i], {
      loop: false,
      slidesPerView: "auto",
      spaceBetween: 25,
      navigation: {
        nextEl: nextBtn,
        prevEl: prevBtn
      }
    });
  }
}

export default mainPage;
