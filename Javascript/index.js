//all functions
function init() {
  //mobile touch effects
  var mq = window.matchMedia("(pointer:coarse)");
  if (mq.matches) {
    touchscreen()
  }
  //controls info block functionality
  readMore();
  //controls side menu functionality
  sideMenu();
  //controls modal functionality
  modals();
}


function modals() {

  //set display to flex and fade in modal
  $(document).on('click', '#signup', () => {
    $(".signup-modal").css("display", "flex")
    $(".signup-modal").fadeTo(200, 1);
  })

  $(document).on('click', '#login', () => {
    $(".login-modal").css("display", "flex")
    $(".login-modal").fadeTo(200, 1);
  })

  //fade out modal and set display to none
  $(".modal-close").click(() => {
    $(".signup-modal").fadeTo(200, 0);
    $(".signup-modal").fadeOut()
    $(".login-modal").fadeTo(200, 0);
    $(".login-modal").fadeOut()
  })

  //close modal if outside area is clicked
  $(document).click(function(event) {
    if (!$(event.target).closest(".signup-form, #signup, #login").length) {
      $(".signup-modal").fadeTo(200, 0);
      $(".signup-modal").fadeOut()
      $(".login-modal").fadeTo(200, 0);
      $(".login-modal").fadeOut()
    }
  });
}


function touchscreen() {
  $(".testimonial").on("click", () => {
    $(this).css({
      "fontSize": "0px",
      "border": "0"
    });
    $(this).css("boxShadow", "inset 0 0 0 0 rgba(0, 0, 0, 0.75)")
  });

  $(".img0").on("click", () => {
    $(this).css("filter", "grayscale(0)");
    $(".img0::after").css({
      "transform": "scaleX(1)",
      "transformOrigin": "left"
    });
    $(this + " a").css("color", "rgba(255, 255, 255, 0.9)");
  });
}


function readMore() {
  less = true;
  var info = $(".info p")
  $(".info span").click(() => {
    if (less) {
      info.css({
        'display': 'block'
      });
      $(".info").css('gridArea', '1/1/1/1')
      $('.about').css("gridTemplateRows", "1fr")
      $('.fa-arrow-circle-down').css("transform", "rotate(180deg)");
      less = false;
      $(".testimonial").hide();
    } else {
      info.css('display', 'none');
      $(".info").css('gridArea', '3/1/4/2')
      $('.about').css("gridTemplateRows", "1fr 1fr 1fr")
      $('.fa-arrow-circle-down').css("transform", "rotate(0deg)");
      less = true;
      $(".testimonial").show();
    }
  })
}


function sideMenu() {

  //open side menu
  $(".fa-bars").click(() => {
    $("#side-menu").css("width", "250px");
    $("#side-menu ul li, #side-menu ul li a").css("opacity", "1");
  })

  //close side menu
  $(".close").click(() => {
    $("#side-menu").css("width", "0px");
    $("#side-menu ul li, #side-menu ul li a").css("opacity", "0");
  })

  //close side menu when outside area is clicked
  $(document).click(function(event) {
    if (!$(event.target).closest("#side-menu, .fa-bars, .modal-close").length) {
      $("#side-menu").css("width", "0px");
      $("#side-menu ul li, #side-menu ul li a").css("opacity", "0");
    }
  });
}

init();
