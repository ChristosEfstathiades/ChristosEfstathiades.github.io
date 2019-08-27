//all functions
function init() {
  //typeWriter
  const txtElement = $(".showcase h1 a");
  const words = txtElement.data('words');
  new typeWriter(txtElement, words);
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
  //form submissions
  ajaxForms();
}


function ajaxForms() {
  $(".signup-modal .signup-form .small-container form").submit(function(e) {
    e.preventDefault();
    let form = ".signup-modal .signup-form .small-container form";
    let first = $(form + " input[name=first-name]").val();
    let last = $(form + " input[name=last-name]").val();
    let email = $(form + " input[name=email]").val();
    let password = $(form + " input[name=password]").val();
    $.post("classes/user.php", {
      first: first,
      last: last,
      email: email,
      pwd: password,
      signup: true
    }, function(data, status) {
      if (data == "success") {
        $(".signup-modal").fadeTo(200, 0);
        $(".signup-modal").fadeOut()
        $(".success-modal").css("display", "flex")
        $(".success-modal").fadeTo(200, 1);
      }
      else {
        $(form + " .error").html(data);
      }
    })
  })

  $(".login-modal .signup-form .small-container form").submit(function(e) {
    e.preventDefault();
    let form = ".login-modal .signup-form .small-container form";
    let email = $(form + " input[name=email]").val();
    let password = $(form + " input[name=password]").val();
    $.post("classes/user.php", {
      email: email,
      pwd: password,
      login: true
    }, function(data, status) {
      if (data == "success") {
        $(".login-modal").fadeTo(200, 0);
        $(".login-modal").fadeOut()
        $(".success-modal").css("display", "flex")
        $(".success-modal").fadeTo(200, 1);
      }
      else {
        $(form + " .error").html(data);
      }
    })
  })
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

  $(".continue").click(() => {
    document.location.reload();
  })

  //fade out modal and set display to none
  $(".modal-close, .continue").click(() => {
    $(".signup-modal").fadeTo(200, 0);
    $(".signup-modal").fadeOut()
    $(".login-modal").fadeTo(200, 0);
    $(".login-modal").fadeOut()
    $(".success-modal").fadeTo(200, 0);
    $(".success-modal").fadeOut()
  })

  //close modal if outside area is clicked
  $(document).on('click', function(event) {
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
  $(document).on("click", function(event) {
    if (!$(event.target).closest("#side-menu, .fa-bars, .modal-close").length) {
      $("#side-menu").css("width", "0px");
      $("#side-menu ul li, #side-menu ul li a").css("opacity", "0");
    }
  });
}

const typeWriter = function(txtElement, words) {
  this.txtElement = txtElement;
  this.words = words;
  this.txt = '';
  this.type();
}

typeWriter.prototype.type = function() {
  //add char
  this.txt = this.words.substring(0, this.txt.length + 1)
  this.txtElement.text(this.txt);
  if (this.txt === this.words) {
    clearTimeout()
  }
  setTimeout(() => this.type(), 120);
}

document.addEventListener('DOMContentLoaded', init);
