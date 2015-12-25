$(document).ready(function() {
  $(".button-container > form > input").hover(function(){
    if ($(this).val().length > 1){
      $(this).val($(this).data('fa'));
      $(this).css("font-family", "FontAwesome");
      $(this).css("font-size", "20px");
    } else{
      $(this).val($(this).data("text"));
      $(this).css("font-family", "inherit");
      $(this).css("font-size", "inherit");
    }
  });
});
