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
  $(".fa-bars").click(function() {
    $("#side-menu").css("width", "250px");
    $("#side-menu ul li, #side-menu ul li a").css("opacity", "1");
  })

  $(".close").click(function() {
    $("#side-menu").css("width", "0px");
    $("#side-menu ul li, #side-menu ul li a").css("opacity", "0");
  })

  $(document).click(function(event) {
    if (!$(event.target).closest("#side-menu, .fa-bars").length) {
      $("#side-menu").css("width", "0px");
      $("#side-menu ul li, #side-menu ul li a").css("opacity", "0");
    }
  });
}

function init() {
  readMore();
  sideMenu();
}

init();
