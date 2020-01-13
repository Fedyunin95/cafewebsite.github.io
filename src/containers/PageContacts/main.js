/* global ymaps:true */
/* eslint no-undef:"error" */

function Contacts() {
  ymaps.ready(function() {
    const myMap = new ymaps.Map("map", {
      center: [54.6358252, 21.806184],
      zoom: 14
    });

    const myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
      iconLayout: "default#image",
      iconImageHref: "../images/svg-icon/map-dot.svg",
      iconImageSize: [30, 42],
      iconImageOffset: [-5, -38]
    });

    myMap.geoObjects.add(myPlacemark);
  });
}

export default Contacts;
