import Swiper from "swiper";

function PageEvents(events) {
  const slider = events.querySelector(".js-months-swiper");
  const nextBtn = events.querySelector(".js-next-month");
  // const popup = events.querySelector(".js-popup");

  new Swiper(slider, {
    slidesPerView: "auto",
    navigation: {
      nextEl: nextBtn
    }
  });

  initCardsHandler(events);
}

function initCardsHandler(wrapper) {
  const cardButtons = wrapper.querySelectorAll(".js-reserve");
  const url = "../../data/eventCardData.json";

  cardButtons.forEach(card => {
    card.addEventListener("click", () => {
      const popup = wrapper.querySelector(".js-popup");
      const popupData = {
        date: popup.querySelector(".js-date"),
        title: popup.querySelector(".js-title"),
        description: popup.querySelector(".js-description")
      };

      fetch(url, {
        method: "GET"
      }).then(function(response) {
        if (response.ok) {
          response.json().then(eventData => {
            popupData.date.innerHTML = eventData.date;
            popupData.title.innerHTML = eventData.title;
            popupData.description.innerHTML = "";
            eventData.description.forEach(text => {
              popupData.description.innerHTML += `<p class='popup__description__paragraph'>${text}</p>`;
            });

            popup.classList.add("popup_active");
          });
        }
      });
    });
  });
}

export default PageEvents;
