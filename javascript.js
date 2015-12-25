$(document).ready(function() {
  $(".button-container > form > input").hover(function() {
    if ($(this).val().length > 1) {
      $(this).val($(this).data('fa'));
      $(this).css("font-family", "FontAwesome");
      $(this).css("font-size", "20px");
    } else {
      $(this).val($(this).data("text"));
      $(this).css("font-family", "inherit");
      $(this).css("font-size", "inherit");
    }
  });

  $(".bg-image").css("background-position", $(window).width()  + "px " + $(window).height() + "px");

  console.log($(".bg-image").width());
  $("html").mousemove(function(e){
    var pageX = $(window).width();
    var pageY = $(window).height();
    var x = pageX + ((e.pageX - pageX / 2) / 50);
    var y = pageY + ((e.pageY - pageY / 2) / 50);
    $(".bg-image").css("background-position", x  + "px " + y + "px");
  });
});
