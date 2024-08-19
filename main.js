import Lenis from "lenis";

function createScrollDirectionTracker() {
  let scrollDirection = "up";
  let lastScrollY = 0;

  function handleScroll() {
    const currentScrollY = window.pageYOffset;

    // console.log();

    if (currentScrollY > lastScrollY) {
      scrollDirection = "down";
    } else {
      scrollDirection = "up";
    }

    lastScrollY = currentScrollY;

    if (scrollDirection === "down") {
      document.getElementById("navbar").style.top = "-10rem";

      document.getElementById("navbar").style.transition = "all 0.5s ease";

      //   document
      //     .getElementById("navbar")
      //     .classList.add("shadow-[0_0_80px_0_#2B245D21]");
    } else {
      if (currentScrollY > document.getElementById("social").clientHeight) {
        // console.log(true);
        document.getElementById("navbar").style.top = 0;
      } else {
        document.getElementById("navbar").style.top =
          document.getElementById("social").clientHeight + "px";
        document.getElementById("navbar").style.transition = "all 0.5s ease";
      }
    }

    if (currentScrollY > 0) {
      document.getElementById("navbar").style.boxShadow =
        "0 0 20px 0 #2B245D21";
      document.getElementById("navbar").style.position = "fixed";
      document.getElementById("navbar").style.backgroundColor = "#FFF";
    } else {
      document.getElementById("navbar").style.boxShadow = "none";
      // document.getElementById("navbar").style.position = "absolute";
      document.getElementById("navbar").style.top =
        document.getElementById("social").clientHeight + "px";
      document.getElementById("navbar").style.backgroundColor = "#FFF0";
    }
  }
  // console.log(scrollDirection);

  window.addEventListener("scroll", handleScroll);

  return {
    getScrollDirection: () => scrollDirection,
    cleanup: () => {
      window.removeEventListener("scroll", handleScroll);
    },
  };
}

createScrollDirectionTracker();

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

document.getElementById("navbar").style.top =
  document.getElementById("social").clientHeight + "px";
