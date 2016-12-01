var prevIndex = -1;
var numCols;
var numElements;
var pageX = $(window).width();
var pageY = $(window).height();

$(document).ready(function() {
	$('[data-toggle="tooltip"]').tooltip();

    ////////////////////
    // scroll on page //
    ////////////////////
    $('input').click(function() {
        $('html, body').animate({
            scrollTop: $('#scroll-' + $(this).data('text').toLowerCase()).offset().top
        }, 'fast');
    });

    /////////////////////////////////
    // on-hover button text change //
    /////////////////////////////////
    $('.button-container input').hover(function() {
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
    $('html').mousemove(function(e) {
        var mouseX = e.pageX - pageX / 2;
        var mouseY = e.pageY - pageY / 2;

        var x = 50 + mouseX / 100;
        var y = 50 + mouseY / 100;

        $('.bg-image').css('background-position', x + '% ' + y + '%');
    });

    ///////////////
    // accordion //
    ///////////////
    $('.image-container').on('click', function() {
        var idName = $(this).attr('id');
        var index = $(this).index('.image-container');
        var lastElementOfRow = Math.floor(index / numCols) * numCols + numCols - 1;
        lastElementOfRow = (lastElementOfRow < numElements) ? lastElementOfRow : numElements - 1;

        if (prevIndex == index) { // same one
            animatePointerDown(function() {
                $('.expand-temp').slideUp('fast', function() {
                    $('.expand-temp').remove();
                    prevIndex = -1;
                });
            });
        } else { // different one
            if ($('.expand-temp').length > 0) {
                animatePointerDown(function() {
                    $('.expand-temp').slideUp('fast', function() {
                        $('.expand-temp').remove();
                        $('#' + idName + '-expand').clone().addClass('expand-temp').insertAfter($('.projects-container div.image-container:eq(' + lastElementOfRow + ')')).slideDown('fast', function() {
                            animatePointerUp();
							$('[data-toggle="tooltip"]').tooltip();
                        }).show();
                    });
                });
            } else {
                $('#' + idName + '-expand').clone().addClass('expand-temp').insertAfter($('.projects-container div.image-container:eq(' + lastElementOfRow + ')')).slideDown('fast', function() {
                    animatePointerUp();
					$('[data-toggle="tooltip"]').tooltip();
                }).show();
            }
        }
        prevIndex = $(this).index('.image-container');
    });

    ////////////////////////////////////
    // initial positioning of pointer //
    ////////////////////////////////////
    positionPointer();
});

///////////////
// on resize //
///////////////
$(window).on('resize orientationChange', function() {
    positionPointer();
    $('.expand-temp').slideUp('fast', function() {
        $('.expand-temp').remove();
    });
    prevIndex = -1;
});

function positionPointer() {
    numCols = ($(window).width() < 768) ? 2 : ($(window).width() < 992) ? 3 : 4;
    numElements = $('.image-container').length;
    var offset = $('.projects-container').width() / numCols;

    $('.pointer').each(function(index) {
        $(this).css('left', (offset * (index % numCols)) + (offset / 2) - ($('.pointer').width() / 2) + 'px');
        $(this).css('top', (getDiagonal($(this).height()) - $(this).height() / 2));
    });
}

function animatePointerUp() {
    $('.pointer').animate({
        opacity: 1,
        'top': (getDiagonal($('.pointer').height()) - $('.pointer').height() / 2) - (($('.image-container').css('margin-bottom')).replace('px', '') * 0.5) + 'px'
    }, 'fast');
}

function animatePointerDown(func) {
    $('.pointer').animate({
        opacity: 0,
        top: (getDiagonal($('.pointer').height()) - $('.pointer').height() / 2)
    }, 'fast', func);
}

function getDiagonal(side) {
    return (Math.sqrt(2 * side * side)) / 2;
}
