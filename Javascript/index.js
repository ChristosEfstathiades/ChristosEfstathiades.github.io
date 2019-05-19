function readMore() {
  less = true;
  var info = $(".info p")
  $(".info span").click(function(){
    if (less) {
      info.css('display', 'block');
      $(this).text('read less');
      less = false;
    }
    else {
      info.css('display', 'none');
      $(this).text('read more');
      less = true;
    }
  })
}

readMore();
