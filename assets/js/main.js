$(document).ready(function () {
  $(" .services-carousel ").owlCarousel({
    loop: true,
    rtl: true,
    margin: 30,
    nav: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 3,
        nav: true,
      },
      1000: {
        items: 3,
        nav: true,
        loop: true,
      },
    },
  });
});

$(document).ready(function () {
  $(" .owl-theme  ").owlCarousel({
    loop: true,
    rtl: true,
    margin: 30,
    nav: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 3,
        nav: true,
      },
      1000: {
        items: 4,
        nav: true,
        loop: true,
      },
    },
  });
});

$(document).ready(function () {
  $(".app-carousel").owlCarousel({
    loop: true,
    rtl: true,
    margin: 30,
    nav: true,
    autoWidth: true,
    center: true,
    responsive: {
      0: {
        items: 1,
        
      },
      600: {
        items: 1,
      
      },
      1000: {
        items: 4,
      },
    },
  });
});
