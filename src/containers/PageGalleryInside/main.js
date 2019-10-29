export default function GalleryInside(gallery) {
  const images = gallery.querySelectorAll(".js-image");
  const popup = gallery.querySelector(".js-gallery-popup");
  const closePopupBtn = popup.querySelector(".js-close-popup");
  const prevImageBtn = popup.querySelector(".js-prev-image");
  const nextImageBtn = popup.querySelector(".js-next-image");

  for (let i = 0, len = images.length; i < len; i++) {
    images[i].addEventListener("click", () => {
      const image = images[i].querySelector("img");
      const imageUrl = image.getAttribute("src");

      nextImageBtn.classList.remove("page-gallery__popup__btn_disable");
      prevImageBtn.classList.remove("page-gallery__popup__btn_disable");
      openPopup(popup, imageUrl, i, prevImageBtn, nextImageBtn, len - 1);
    });
  }

  closePopupBtn.addEventListener("click", () => {
    closePopup(popup);
  });

  prevImageBtn.addEventListener("click", () => {
    const currentImage = +popup.getAttribute("active-image");
    const popupImage = popup.querySelector("img");

    if (currentImage !== 0) {
      const image = changeImage(currentImage, "prev", images, popup);
      if (image) {
        popupImage.setAttribute("src", image);
      } else {
        return;
      }
    }

    if (nextImageBtn.classList.contains("page-gallery__popup__btn_disable")) {
      nextImageBtn.classList.remove("page-gallery__popup__btn_disable");
    }

    if (currentImage === 1) {
      prevImageBtn.classList.add("page-gallery__popup__btn_disable");
    }
  });

  nextImageBtn.addEventListener("click", () => {
    const currentImage = +popup.getAttribute("active-image");
    const popupImage = popup.querySelector("img");

    if (currentImage !== images.length - 1) {
      const image = changeImage(currentImage, "next", images, popup);
      if (image) {
        popupImage.setAttribute("src", image);
      } else {
        return;
      }
    }

    if (prevImageBtn.classList.contains("page-gallery__popup__btn_disable")) {
      prevImageBtn.classList.remove("page-gallery__popup__btn_disable");
    }

    if (currentImage === images.length - 2) {
      nextImageBtn.classList.add("page-gallery__popup__btn_disable");
    }
  });
}

function openPopup(popup, imageURL, imageIndex, prevBtn, nextBtn, imageLength) {
  const popupImage = popup.querySelector("img");

  popupImage.setAttribute("src", imageURL);

  popup.classList.add("page-gallery__popup_active");

  if (imageIndex === 0) {
    prevBtn.classList.add("page-gallery__popup__btn_disable");
  } else if (imageIndex === imageLength) {
    nextBtn.classList.add("page-gallery__popup__btn_disable");
  }

  popup.setAttribute("active-image", imageIndex);
}

function closePopup(popup) {
  popup.classList.remove("page-gallery__popup_active");
}

function changeImage(currentImg, type, images, popup) {
  let nextSlide = null;

  if (type === "next") {
    const nextSlideNum = currentImg + 1;
    nextSlide = images[nextSlideNum].querySelector("img").getAttribute("src");
    popup.setAttribute("active-image", nextSlideNum);
  } else if (type === "prev") {
    const nextSlideNum = currentImg - 1;
    nextSlide = images[nextSlideNum].querySelector("img").getAttribute("src");
    popup.setAttribute("active-image", nextSlideNum);
  }

  return nextSlide;
}
