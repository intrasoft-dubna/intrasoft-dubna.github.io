setTimeout("ymaps.ready(init)", 1000);

function init() {
  var myMap = new ymaps.Map("map", {
    center: [56.753110, 37.166460],
    zoom: 17
  });

  myMap.geoObjects
    .add(new ymaps.Placemark([56.753110, 37.166460], {
      balloonContent: '<strong>офис 301</strong>'
    }, {
      iconLayout: 'default#imageWithContent',
      iconImageHref: '../img/point.svg',
      iconImageSize: [50, 50],
      iconImageOffset: [-25, -25],
      iconContentOffset: [15, 15],
    }));
}