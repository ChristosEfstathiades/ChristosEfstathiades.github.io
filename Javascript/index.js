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
      $(".testimonial").hide();
    } else {
      info.css('display', 'none');
      $(".info").css('gridArea', '3/1/4/2')
      $('.about').css("gridTemplateRows", "1fr 1fr 1fr")
      $(this).html('<i class="fas fa-arrow-circle-down"></i>');
      less = true;
      $(".testimonial").show();
    }
  })
}

  readMore();
 //else {
//   $('*').removeAttr('style');
// }
