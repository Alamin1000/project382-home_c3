(function ($) {
  "use strict";

  // owl-carousel
  $(".cl-slider-active").owlCarousel({
    loop: true,
    margin: 0,
    items: 1,
    responsiveClass: true,
    nav: false,
    dots: true,
    navText: [
      '<span class="fas fa-chevron-left fa-2x"></span>',
      '<span class="fas fa-chevron-right fa-2x"></span>',
    ],
    responsive: {
      0: {},
      600: {},
      1000: {},
    },
  });
  $(".im-slider-active").owlCarousel({
    loop: true,
    margin: 0,
    items: 4,
    responsiveClass: true,
    nav: true,
    dots: false,
    navText: [
      '<i class="fal fa-arrow-left"></i>',
      '<i class="fal fa-arrow-right"></i>',
    ],
    responsive: {
      0: {},
      600: {},
      1000: {},
    },
  });

  //magnificPopup
  $(".popup-img").magnificPopup({
    type: "image",
  });
  $(".popup-video").magnificPopup({
    type: "iframe",
  });
  // magnific-popup-img-gallery
  $(".album-img a").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });
  //multiple-img-gallery
  $(".image-box").each(function () {
    // the containers for all your galleries
    $(this).magnificPopup({
      delegate: ".img", // the selector for gallery item
      type: "image",
      gallery: {
        enabled: true,
      },
    });
  });
})(jQuery);

$(document).ready(function () {
  // nice-select
  $(".nice-select").niceSelect();

  // custom-nice-input
  $(".nice-input")
    .siblings(".minus-button")
    .click(function () {
      if (
        $(this).siblings(".nice-input").attr("value") >
        $(this).siblings(".nice-input").attr("min") * 1
      ) {
        $(this)
          .siblings(".nice-input")
          .attr("value", $(this).siblings(".nice-input").attr("value") - 1);
      }
    });
  $(".nice-input")
    .siblings(".plus-button")
    .click(function () {
      if (
        $(this).siblings(".nice-input").attr("value") <
        $(this).siblings(".nice-input").attr("max") * 1
      ) {
        $(this)
          .siblings(".nice-input")
          .attr("value", $(this).siblings(".nice-input").attr("value") - -1);
      }
    });
});
