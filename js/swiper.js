var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 15,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });
  
  var swiper2 = new Swiper('#swiper2', {
    effect: "cards",
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
    },
  });

  var swiper3 = new Swiper('#swiper3', {
    grabCursor: true,
  effect: 'creative',
  direction: 'vertical',
  creativeEffect: {
    prev: {
      shadow: true,
      translate: [0, 0, -800],
      rotate: [180, 0, 0],
    },
    next: {
      shadow: true,
      translate: [0, 0, -800],
      rotate: [-180, 0, 0]
    }
  },
  pagination: {
      el: ".swiper-pagination",
  },
});