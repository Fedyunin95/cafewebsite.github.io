import Swiper from "swiper";

function PageEvents(events) {
  const slider = events.querySelector(".js-months-swiper");
  const nextBtn = events.querySelector(".js-next-month");
  const calendarMonths = events.querySelectorAll(".js-month");
  const tableWrap = events.querySelector(".js-table-wrap");
  const table = tableWrap.querySelector("table");

  calendarMonths.forEach(month => {
    month.addEventListener("click", () => {
      const url = "../data/month.json";
      events
        .querySelector(".js-month.calendar__months__item_active")
        .classList.remove("calendar__months__item_active");
      month.classList.add("calendar__months__item_active");

      fetch(url, {
        method: "GET"
      }).then(function(response) {
        if (response.ok) {
          table.remove();
          response.json().then(eventData => {
            tableWrap.innerHTML = eventData.html;
            initDaysHandler(events);
          });
        }
      });
    });
  });

  new Swiper(slider, {
    slidesPerView: "auto",
    navigation: {
      nextEl: nextBtn
    }
  });

  initCardsHandler(events);
  initDaysHandler(events);
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

function initDaysHandler(events) {
  const eventsBody = events.querySelector(".js-events-body");
  const cardsBlock = events.querySelector(".js-cards");
  const table = events.querySelector("table");
  const days = table.querySelectorAll(".js-day");

  days.forEach(day => {
    day.addEventListener("click", () => {
      const url = "../data/events.json";

      fetch(url, {
        method: "GET"
      }).then(function(response) {
        if (response.ok) {
          response.json().then(eventData => {
            cardsBlock.remove();
            eventsBody.innerHTML = "";
            eventsBody.innerHTML = eventData.html;
            initCardsHandler(events);
          });
        }
      });
    });
  });
}

export default PageEvents;
