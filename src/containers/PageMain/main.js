import Swiper from "swiper";

function mainPage(page) {
  const bannerSliders = page.querySelectorAll(".js-banner-swiper");
  const horizontalSliders = page.querySelectorAll(".js-horizontal-swiper");
  const eventsSliders = page.querySelectorAll(".js-singl-swiper_horizontal");
  const teamSlider = page.querySelector(".js-team-swiper");

  for (let i = 0, len = bannerSliders.length; i < len; i++) {
    const nextBtn = bannerSliders[i].querySelector(".js-next-slide");
    const prevBtn = bannerSliders[i].querySelector(".js-prev-slide");
    new Swiper(bannerSliders[i], {
      loop: true,
      direction: "vertical",
      navigation: {
        nextEl: nextBtn,
        prevEl: prevBtn
      },
      breakpoints: {
        768: {
          direction: "horizontal",
          spaceBetween: 14
        }
      }
    });
  }

  for (let i = 0, len = horizontalSliders.length; i < len; i++) {
    const nextBtn = horizontalSliders[i].querySelector(".js-next-slide");
    const prevBtn = horizontalSliders[i].querySelector(".js-prev-slide");
    new Swiper(horizontalSliders[i], {
      loop: false,
      slidesPerView: 2,
      slidesPerColumn: 2,
      spaceBetween: 23,
      navigation: {
        nextEl: nextBtn,
        prevEl: prevBtn
      },
      breakpoints: {
        768: {
          spaceBetween: 10
        }
      }
    });
  }

  for (let i = 0, len = eventsSliders.length; i < len; i++) {
    const nextBtn = eventsSliders[i].querySelector(".js-next-slide");
    const prevBtn = eventsSliders[i].querySelector(".js-prev-slide");

    new Swiper(eventsSliders[i], {
      loop: false,
      slidesPerView: "auto",
      spaceBetween: 25,
      navigation: {
        nextEl: nextBtn,
        prevEl: prevBtn
      }
    });
  }

  const nextBtn = teamSlider.querySelector(".js-next-slide");
  const prevBtn = teamSlider.querySelector(".js-prev-slide");
  new Swiper(teamSlider, {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
      nextEl: nextBtn,
      prevEl: prevBtn
    },
    breakpoints: {
      768: {
        spaceBetween: 14
      }
    }
  });
}

export default mainPage;
