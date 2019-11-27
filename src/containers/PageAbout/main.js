import Swiper from "swiper";

function pageAbout(page) {
  const eventsSliders = page.querySelectorAll(".js-singl-swiper_horizontal");

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
}

export default pageAbout;
