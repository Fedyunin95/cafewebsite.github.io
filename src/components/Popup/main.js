function Popup(popup) {
  const closePopupBtns = popup.querySelectorAll(".js-close-popup");

  closePopupBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      popup.classList.remove("popup_active");
    });
  });
}

export default Popup;
