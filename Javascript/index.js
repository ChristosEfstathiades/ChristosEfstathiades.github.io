
//all functions
function init() {
  //controls info block functionality
  readMore();
  //controls side menu functionality
  sideMenu();
  //controls modal functionality
  modals();
}


function modals() {

  //set display to flex and fade in modal
  $(document).on('click', '#signup', function(){
    $(".signup-modal").css("display", "flex")
    $(".signup-modal").fadeTo(200, 1);
  })

  //fade out modal and set display to none
  $(".modal-close").click(function(){
    $(".signup-modal").fadeTo(200, 0);
    $(".signup-modal").fadeOut()
  })

  //close modal if outside area is clicked
  $(document).click(function(event) {
    if (!$(event.target).closest(".signup-form, #signup").length) {
      $(".signup-modal").fadeTo(200, 0);
      $(".signup-modal").fadeOut()
    }
  });
}


function readMore() {
  less = true;
  var info = $(".info p")
  $(".info span").click(function() {
    if (less) {
      info.css({
        'display': 'block'
      });
      $(".info").css('gridArea', '1/1/1/1')
      $('.about').css("gridTemplateRows", "1fr")
      $(this).html('<i class="fas fa-arrow-circle-up"></i>');
      less = false;
      $(".testimonial, .info h2").hide();
    } else {
      info.css('display', 'none');
      $(".info").css('gridArea', '3/1/4/2')
      $('.about').css("gridTemplateRows", "1fr 1fr 1fr")
      $(this).html('<i class="fas fa-arrow-circle-down"></i>');
      less = true;
      $(".testimonial, .info h2").show();
    }
  })
}


function sideMenu() {

  //open side menu
  $(".fa-bars").click(function() {
    $("#side-menu").css("width", "250px");
    $("#side-menu ul li, #side-menu ul li a").css("opacity", "1");
  })

  //close side menu
  $(".close").click(function() {
    $("#side-menu").css("width", "0px");
    $("#side-menu ul li, #side-menu ul li a").css("opacity", "0");
  })

  //close side menu when outside area is clicked
  $(document).click(function(event) {
    if (!$(event.target).closest("#side-menu, .fa-bars").length) {
      $("#side-menu").css("width", "0px");
      $("#side-menu ul li, #side-menu ul li a").css("opacity", "0");
    }
  });
}

init();
