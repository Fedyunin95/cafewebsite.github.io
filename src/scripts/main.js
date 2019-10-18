import svg4everybody from "svg4everybody";
import Header from "../components/Header/main";
import MainPage from "../containers/PageMain/main";

document.addEventListener("DOMContentLoaded", () => {
  svg4everybody();

  const headerBlock = document.querySelector(".js-header");
  const pageMain = document.querySelector(".js-main-page");

  new Header(headerBlock);

  if (pageMain) {
    new MainPage(pageMain);
  }
});
