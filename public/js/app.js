$("html").mousemove(function(e) {
  if (e.pageX > 0) {
    left = -250-(e.pageX/10);
    $(".visual-frame").css("margin-left", left + "px");
  }
});