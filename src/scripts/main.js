import svg4everybody from "svg4everybody";
import Header from "../components/Header/main";
import Callback from "../components/Callback/main";
import Rollup from "../components/RollUp/main";
import Popup from "../components/Popup/main";
import MainPage from "../containers/PageMain/main";
import Contacts from "../containers/PageContacts/main";
import About from "../containers/PageAbout/main";
import Gallery from "../containers/PageGalleryInside/main";
import Menu from "../containers/PageMenu/main";
import Events from "../containers/PageEvents/main";
import PageReview from "../containers/PageReview/main";

document.addEventListener("DOMContentLoaded", () => {
  svg4everybody();

  const headerBlock = document.querySelector(".js-header");
  const callback = document.querySelector(".js-callback");
  const pageMain = document.querySelector(".js-main-page");
  const pageContacts = document.querySelector(".js-page-contacts");
  const pageAbout = document.querySelector(".js-page-about");
  const pageGalleryInside = document.querySelector(".js-page-gallery");
  const pageMenuScripts = document.querySelector(".js-page-menu");
  const pageEvents = document.querySelector(".js-page-events");
  const rollup = document.querySelector(".js-rollup");
  const popup = document.querySelector(".js-popup");
  const pageReview = document.querySelector(".js-page-review");

  new Header(headerBlock);

  if (pageMain) {
    new MainPage(pageMain);
  }

  if (callback) {
    new Callback(callback);
  }

  if (pageContacts) {
    new Contacts(pageContacts);
  }

  if (pageAbout) {
    new About(pageAbout);
  }

  if (pageGalleryInside) {
    new Gallery(pageGalleryInside);
  }

  if (pageMenuScripts) {
    new Menu(pageMenuScripts);
  }

  if (pageEvents) {
    new Events(pageEvents);
  }

  if (rollup) {
    new Rollup(rollup);
  }

  if (popup) {
    new Popup(popup);
  }

  if (pageReview) {
    new PageReview(pageReview);
  }
});
