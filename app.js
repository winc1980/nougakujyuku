const mySwiper = new Swiper(".swiper", {
  autoplay: true,
  loop: true,
  loopedSlides: 6,

  spaceBetween: 30,
  breakpoints: {
    0: {
      slidesPerView: 1.5,
    },
    450: {
      slidesPerView: 2,
    },
    700: {
      slidesPerView: 3,
    },
  },

  centeredSlides: true,
  initialSlide: 1,

  pagination: {
    el: ".swiper-pagination",
  },

  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

const targets_fade = document.getElementsByClassName("fade");
for (let i = targets_fade.length; i--; ) {
  let observer = new IntersectionObserver((entries, observer) => {
    for (let j = entries.length; j--; ) {
      if (entries[j].isIntersecting) {
        entries[j].target.classList.add("active");
      } else {
        entries[j].target.classList.remove("active");
      }
    }
  });
  observer.observe(targets_fade[i]);
}

const targets_fadeleft = document.getElementsByClassName("fade-left");
for (let i = targets_fadeleft.length; i--; ) {
  let observer = new IntersectionObserver((entries, observer) => {
    for (let j = entries.length; j--; ) {
      if (entries[j].isIntersecting) {
        entries[j].target.classList.add("active");
      } else {
        entries[j].target.classList.remove("active");
      }
    }
  });
  observer.observe(targets_fadeleft[i]);
}
