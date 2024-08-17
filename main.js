import Lenis from "lenis";
// initializing aos
AOS.init({
  once: true,
});

// initializing lenis
const lenis = new Lenis();

lenis.on("scroll", (e) => {
  // console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// Initializing owl-carousel with JQuery
$(document).ready(function () {
  // Initializing Owl Carousel
  $("#testimonials .owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    dots: false,
    nav: true,
  });

  $("#partners .owl-carousel").owlCarousel({
    // items: 5,
    loop: true,
    autoplay: true,
    margin: 96,
    dots: false,
    nav: true,
    center: true,
    autoplayTimeout: 2000,
    responsive: {
      0: { items: 2 },
      768: { items: 3 },
      1024: { items: 5 },
    },
  });

  // triggering owl's prev and next button with custom buttons
  $("#slider-prev").click(() => $(".owl-prev")[0].click());
  $("#slider-next").click(() => $(".owl-next")[0].click());
});
