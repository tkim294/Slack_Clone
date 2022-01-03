// Fix Nav bar for min width 1024px
var distance = $("#second-body-section").offset().top,
  $window = $(window);

$window.scroll(function () {
  if (screen.width > 1024) {
    if ($window.scrollTop() >= distance) {
      // Your div has reached the top
      $("#main-nav").removeClass("is-dismissed").addClass("is-fixed");
      $("#main-nav-shadow-div").css(
        "box-shadow",
        "box-shadow: 0 4px 40px rgb(0 0 0 / 8%);"
      );
    } else {
      $("#main-nav").addClass("is-dismissed");
      setTimeout(function () {
        $("#main-nav").removeClass("is-fixed");
      }, 100);
      $("#main-nav-shadow-div").css("box-shadow", "none");
    }
  }
});

// Swiper
const swiper = new Swiper(".swiper-container", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  speed: 400,
  spaceBetween: 100,
  loop: true,
});

function onClickAccordion(id) {
  var button = document.getElementById(id);
  if (button.className.indexOf("v-show") == -1) {
    button.classList.add("v-show");
  } else {
    button.classList.remove("v-show");
  }
}
