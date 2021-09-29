(function () {
  new Swiper(".section-slider", {
    cssMode: true,
    centeredSlides: true,
    mousewheel: {
      invert: false,
    },
    autoplay: {
      delay: 5000,
    },
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });

  new Swiper(".posts-slider-container", {
    cssMode: true,
    centeredSlides: true,
    watchSlidesProgress: false,
    watchSlidesVisibility: false,
    slidesPerView: 3,
    breakpoints: {
      1025: {
        slidesPerView: 3,
      },

      769: {
        slidesPerView: 2,
      },

      320: {
        slidesPerView: 1,
      },
    },

    navigation: {
      nextEl: ".post-controller-right-arrow",
      prevEl: ".post-controller-left-arrow",
    },
    mousewheel: {
      invert: false,
    },
  });
})();
