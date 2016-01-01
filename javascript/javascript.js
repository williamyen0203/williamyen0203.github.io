var prevIndex = -1;
var numCols;
var numElements;
var pageX = $(window).width();
var pageY = $(window).height();

$(document).ready(function(){
  //////////////////
  // icon tooltip //
  //////////////////
  $('.icon').tooltip({
    position: {my: 'center top', at: 'center bottom'},
    show: null,
    hide: {effect: 'slideUp', duration: 100},
    open: function(event, ui){
      ui.tooltip.animate({top: ui.tooltip.position().top + 5}, 'fast');
    }
  });

  /////////////////////////////////
  // on-hover button text change //
  /////////////////////////////////
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

  ////////////////////
  // mouse parallax //
  ////////////////////
  $('html').mousemove(function(e){
    var mouseX = e.pageX - pageX / 2;
    var mouseY = e.pageY - pageY / 2;

    var x = 50 + mouseX / 100;
    var y = 50 + mouseY / 100;

    $('.bg-image').css('background-position', x + '% ' + y + '%');
  });

  ///////////////
  // accordion //
  ///////////////
  $('.image-container').on('click', function(){
    var idName = $(this).attr('id');
    var index = $(this).index(".image-container");
    var lastElementOfRow = Math.floor(index / numCols) * numCols + numCols - 1;
    lastElementOfRow = (lastElementOfRow < numElements) ? lastElementOfRow : numElements - 1;

    if (prevIndex == index){
      console.log("same one");
      $(".expand-temp").slideUp("fast", function(){
        $(".expand-temp").remove();
        prevIndex = -1;
      });
    // } else if (Math.floor(prevIndex / numCols) == Math.floor(index / numCols)){
    //   console.log("same row");
    //
    //   $(".expand-temp").height(0);
    //   $(".expand-temp").html($('#' + idName + '-expand').html());
    //
    //   $('.expand-temp').animate({'height': $('.expand-temp').get(0).scrollHeight}, 'fast');
    //   $('.expand-temp').height($('.expand-temp').height() + 50);
    } else{
      console.log("diff row");
      if ($('.expand-temp').length > 0){
        $(".expand-temp").slideUp("fast", function(){
          $(".expand-temp").remove();
          $('#' + idName + '-expand').clone().addClass('expand-temp').insertAfter($('.projects-container div.image-container:eq(' + lastElementOfRow +')')).slideDown().show();
        });
      } else{
        $('#' + idName + '-expand').clone().addClass('expand-temp').insertAfter($('.projects-container div.image-container:eq(' + lastElementOfRow +')')).slideDown().show();
      }
    }

    prevIndex = $(this).index(".image-container");
  });
  ////////////////////////////////////
  // initial positioning of pointer //
  ////////////////////////////////////
  positionPointer();
});

///////////////
// on resize //
///////////////
$(window).on('resize orientationChange', function(){
  positionPointer();
  $(".expand-temp").slideUp("fast", function(){
    $(".expand-temp").remove();
  });
});

function positionPointer(){
  numCols = ($(window).width() < 768) ? 2 : ($(window).width() < 992) ? 3 : 4;
  numElements = $('.image-container').length;
  var offset = $('.projects-container').width() / numCols;

  $('.pointer').each(function(index){
    $(this).css('left', (offset * (index % numCols)) + (offset / 2) - ($('.pointer').width() / 2) + 'px');

    var diagonalHeight = getDiagonal($(this).height());
    $(this).css('top', (getDiagonal($(this).height()) - $(this).height() / 2) - (($('.image-container').css('margin-bottom')).replace('px', '') * 0.75) + 'px');
  });
}

function getDiagonal(side){
  return (Math.sqrt(2 * side * side)) / 2;
}
