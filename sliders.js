new Swiper("#categories", {
  spaceBetween: 40,
  autoplay: true,

  breakpoints: {
    768: {
      slidesPerView: 4,
    },

    991: {
      slidesPerView: 6,
    },

    1200: {
      slidesPerView: 7,
    },

    1400: {
      slidesPerView: 8,
    },
  },

  pagination: {
    el: ".categories__slider__controls",
    clickable: true,
  },
});

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

    1200: {
      slidesPerView: 4,
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
      slidesPerView: 5,
    },

    1200: {
      slidesPerView: 6,
    },
  },

  pagination: {
    el: ".sale__slider__controls",
    clickable: true,
  },
});

new Swiper("#offers", {
  spaceBetween: 20,
  autoplay: true,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },

    991: {
      slidesPerView: 3,
    },

    1400: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },

  pagination: {
    el: ".offers__slider__controls",
    clickable: true,
  },
});

new Swiper("#stores", {
  spaceBetween: 20,
  autoplay: true,

  breakpoints: {
    768: {
      slidesPerView: 2,
    },

    1200: {
      slidesPerView: 3,
    },
  },

  navigation: {
    nextEl: ".stores .prev",
    prevEl: ".stores .next",
  },

  pagination: {
    el: ".stores__slider__controls",
    clickable: true,
  },
});

new Swiper("#testimonials", {
  spaceBetween: 20,
  autoplay: true,

  navigation: {
    nextEl: "#testimonials .prev",
    prevEl: "#testimonials .next",
  },
});
