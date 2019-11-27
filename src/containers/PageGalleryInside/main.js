let xDown = null;
let yDown = null;

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
    prevImage(popup, images, prevImageBtn, nextImageBtn);
  });

  nextImageBtn.addEventListener("click", () => {
    nextImage(popup, images, prevImageBtn, nextImageBtn);
  });

  const handleTouchStart = e => {
    xDown = e.touches[0].clientX;
    yDown = e.touches[0].clientY;
  };

  function handleTouchMove(e) {
    if (!xDown || !yDown) {
      return;
    }

    const xUp = e.touches[0].clientX;
    const yUp = e.touches[0].clientY;

    const xDiff = xDown - xUp;
    const yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      if (xDiff > 0) {
        nextImage(popup, images, prevImageBtn, nextImageBtn);
      } else {
        prevImage(popup, images, prevImageBtn, nextImageBtn);
      }
    }
    xDown = null;
    yDown = null;
  }

  popup.addEventListener("touchstart", handleTouchStart, false);
  popup.addEventListener("touchmove", handleTouchMove, false);

  popup.addEventListener("click", e => {
    if (
      !e.target.closest(".js-popup-wrapper") &&
      e.target.closest("div") !== nextImageBtn &&
      e.target.closest("div") !== prevImageBtn
    ) {
      closePopup(popup);
    }
  });
}

function prevImage(popup, images, btnPrev, btnNext) {
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

  if (btnNext.classList.contains("page-gallery__popup__btn_disable")) {
    btnNext.classList.remove("page-gallery__popup__btn_disable");
  }

  if (currentImage === 1) {
    btnPrev.classList.add("page-gallery__popup__btn_disable");
  }
}

const nextImage = (popup, images, btnPrev, btnNext) => {
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

  if (btnPrev.classList.contains("page-gallery__popup__btn_disable")) {
    btnPrev.classList.remove("page-gallery__popup__btn_disable");
  }

  if (currentImage === images.length - 2) {
    btnNext.classList.add("page-gallery__popup__btn_disable");
  }
};

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
