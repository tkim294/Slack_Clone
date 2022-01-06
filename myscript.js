var searchBarActive = false;

// Fix Nav bar for min width 1024px
var distance = $("#second-body-section").offset().top,
  $window = $(window);

$window.scroll(function () {
  if ($window.scrollTop() >= distance - 200) {
    // Your div has reached the top
    if (!searchBarActive) {
      $("#main-nav").removeClass("is-dismissed").addClass("is-fixed");
      if (screen.width >= 1024) {
        $("#main-nav-shadow-div").css(
          "box-shadow",
          "0 4px 40px rgb(0 0 0 / 8%)"
        );
      }
    }
  } else {
    if (!searchBarActive) {
      $("#main-nav").addClass("is-dismissed");
      setTimeout(function () {
        $("#main-nav").removeClass("is-fixed");
      }, 100);

      $("#main-nav-shadow-div").css("box-shadow", "none");
    }
  }
  // }
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

// add class when hovering
$("#dropdown-main-menu").hover(
  function () {
    $(this).addClass("v-show");
    $("#dropdown-main-menu .dropdown-contents").css("display", "block");
  },
  function () {
    $(this).removeClass("v-show");
    $("#dropdown-main-menu .dropdown-contents").css("display", "none");
  }
);

// Labtop - Show searh bar
function openSearchBar() {
  searchBarActive = true;
  if ($("#main-nav").hasClass("is-dismissed")) {
    $("#main-nav").removeClass("is-dismissed");
  }
  $(".c-nav-primary .nav-level-1").css("display", "none");
  $(".c-nav-primary .nav-sign-out").css("display", "none");
  $(".c-nav-primary .search_form").removeClass("hide");
  $(".c-nav-primary .search-form-submit-button").removeClass("hide");
  $("#main-nav").addClass("is-search-bar-fixed");
  $("#search-icon-button").css("margin-left", "0");
  $("#main-nav-shadow-div").css("box-shadow", "0 4px 40px rgb(0 0 0 / 8%)");
}

// Labtop - Show original nav bar
function closeSearchBar() {
  searchBarActive = false;
  console.log("close clicked");
  $(".c-nav-primary .nav-level-1").css("display", "flex");
  $(".c-nav-primary .nav-sign-out").css("display", "flex");
  $(".c-nav-primary .search_form").addClass("hide");
  $(".c-nav-primary .search-form-submit-button").addClass("hide");
  $("#main-nav").removeClass("is-search-bar-fixed");
  $("#search-icon-button").css("margin-left", "6rem");
  $("#main-nav-shadow-div").css("box-shadow", "none");
}

// Mobile - Show Search Bar
function showMobileSearchBar() {
  searchBarActive = true;
  $(".c-nav-primary .slack-logo").addClass("hide");
  $(".c-nav-primary .mobile-search-container .nav-menu-btn").addClass("hide");
  $("#main-nav").addClass("is-search-bar-fixed");
  $(".c-nav-primary .mobile-search-container .search-form-mobile").removeClass(
    "hide"
  );
  $("#main-nav-shadow-div").css("box-shadow", "0 4px 40px rgb(0 0 0 / 8%)");
}

// Mobile - Close Search Bar
function closeMobileSearchBar() {
  searchBarActive = false;
  $(".c-nav-primary .slack-logo").removeClass("hide");
  $(".c-nav-primary .mobile-search-container .nav-menu-btn").removeClass(
    "hide"
  );
  $(".c-nav-primary .mobile-search-container .search-form-mobile").addClass(
    "hide"
  );
  $("#main-nav").removeClass("is-search-bar-fixed");
  $("#main-nav-shadow-div").css("box-shadow", "none");
}

// Mobile Menu Open
function openMobileMenu() {
  if ($("#main-nav-mobile").hasClass("is-closed")) {
    $("#main-nav-mobile").removeClass("is-closed");
  }
  $("#main-nav-mobile").addClass("is-open");
}

// Mobile Menu Close
function closeMobileMenu() {
  $("#main-nav-mobile").addClass("is-closed");
  setTimeout(function () {
    $("#main-nav-mobile").removeClass("is-open");
  }, 10);
}

/* Close mobile menu when resize to desktop
 * Keep tracking search bar open status and
 * keep it open until a user closes it
 */
$(window).resize(function () {
  if (screen.width > 1024) {
    if ($("#main-nav-mobile").hasClass("is-open")) {
      closeMobileMenu();
    }
    if (searchBarActive) {
      closeMobileSearchBar();
      openSearchBar();
    }
  } else {
    if (searchBarActive) {
      closeSearchBar();
      showMobileSearchBar();
    }
  }
});
