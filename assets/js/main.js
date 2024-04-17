// nice-select2
document.addEventListener("DOMContentLoaded", function (e) {
  var els = document.querySelectorAll(".selectize");
  els.forEach(function (select) {
    NiceSelect.bind(select);
    console.log(select);
  });
});

// swiper js
var swiper1 = new Swiper(".mySwiper1", {
  slidesPerView: 1,
  navigation: {
    nextEl: "#button-next-relacionados",
    prevEl: "#button-prev-relacionados",
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});

// AOS
AOS.init();