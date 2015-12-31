$(document).ready(function(){
  $('.icon').tooltip({
    position: {my: 'center top', at: 'center bottom'},
    show: null,
    hide: {effect: 'slideUp', duration: 100},
    open: function(event, ui){
      ui.tooltip.animate({top: ui.tooltip.position().top + 5}, 'fast');
    }
  });

  // on-hover button text change
  $('.button-container > form > input').hover(function(){
    if ($(this).val().length > 1) {
      $(this).val($(this).data('fa'));
      $(this).css('font-family', 'FontAwesome');
      $(this).css('font-size', '20px');
    } else {
      $(this).val($(this).data('text'));
      $(this).css('font-family', 'inherit');
      $(this).css('font-size', 'inherit');
    }
  });

  // mouse parallax
  var pageX = $(window).width();
  var pageY = $(window).height();

  $('html').mousemove(function(e){
    var mouseX = e.pageX - pageX / 2;
    var mouseY = e.pageY - pageY / 2;

    var x = 50 + mouseX / 100;
    var y = 50 + mouseY / 100;

    $('.bg-image').css('background-position', x + '% ' + y + '%');
  });

  // accordion
  var prevIndex = -1;

  $('.image-container').on('click', function(){
    var idName = $(this).attr('id');
    var numCols = ($(window).width() < 768) ? 2 : ($(window).width() < 992) ? 3 : 4;
    var index = $(this).index(".image-container");
    var numElements = $('.image-container').length;
    var lastElementOfRow = Math.floor(index / numCols) * numCols + numCols - 1;
    lastElementOfRow = (lastElementOfRow < numElements) ? lastElementOfRow : numElements - 1;

    console.log(lastElementOfRow);

    if (prevIndex == index){
      console.log("same one");
    } else if (Math.floor(prevIndex / numCols) == Math.floor(index / numCols)){
      console.log("same row");
      $(".expand-temp").remove();
      $('#' + idName + '-expand').clone().addClass('expand-temp').insertAfter($('.projects-container div.image-container:eq(' + lastElementOfRow +')')).show();
    } else{
      console.log("diff row");
      $(".expand-temp").remove();
      $('#' + idName + '-expand').clone().addClass('expand-temp').insertAfter($('.projects-container div.image-container:eq(' + lastElementOfRow +')')).show();
    }

    prevIndex = $(this).index(".image-container");
  });
});
