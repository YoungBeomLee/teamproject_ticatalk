document.addEventListener("DOMContentLoaded", function () {
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 32,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      1400: {
        slidesPerView: 5,
      },
      990: {
        slidesPerView: 5,
      },
      768: {
        slidesPerView: 3,
      }
    },
  });
});