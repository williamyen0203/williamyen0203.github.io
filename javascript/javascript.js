$(document).ready(function(){
  $(".icon").tooltip({
    position: {my: "center top", at: "center bottom"},
    show: null,
    hide: {effect: "slideUp", duration: 100},
    open: function(event, ui){
      ui.tooltip.animate({top: ui.tooltip.position().top + 5}, "fast");
    }
  });

  // on-hover button text change
  $(".button-container > form > input").hover(function(){
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

  // mouse parallax
  var pageX = $(window).width();
  var pageY = $(window).height();

  $("html").mousemove(function(e){
    var mouseX = e.pageX - pageX / 2;
    var mouseY = e.pageY - pageY / 2;

    var x = 50 + mouseX / 100;
    var y = 50 + mouseY / 100;

    $(".bg-image").css("background-position", x + "% " + y + "%");
  });

  // accordion
  $(".image-container").on("click", function(){
    console.log($(this));
  });
});
