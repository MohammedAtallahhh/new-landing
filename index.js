new Swiper("#shops", {
  spaceBetween: 20,
  slidesPerView: 1,
  autoplay: true,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },

    991: {
      slidesPerView: 3,
    },
  },

  pagination: {
    el: ".shops__slider__controls",
    clickable: true,
  },
});

new Swiper("#sale", {
  spaceBetween: 20,
  slidesPerView: 2,
  autoplay: true,
  breakpoints: {
    541: {
      slidesPerView: 3,
    },

    768: {
      slidesPerView: 4,
    },

    991: {
      slidesPerView: "auto",
    },
  },

  pagination: {
    el: ".sale__slider__controls",
    clickable: true,
  },
});

new Swiper("#categories", {
  spaceBetween: 20,
  autoplay: true,

  pagination: {
    el: ".categories__slider__controls",
    clickable: true,
  },
});
