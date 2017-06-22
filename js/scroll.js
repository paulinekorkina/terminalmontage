var currentAnchor = 0;
var isAnimating  = false;


function scrollUpDown(dir) {

  var sections = $('#top, #article1, #article2, #article3, #orderform');
  var currentScroll = $(document).scrollTop();
  var nearestEl = null;
  var defaultTop = 0;

  sections.each(function(i, el) {

    var el = $(el);

    if (dir == 'down') {
      if (currentScroll < el.offset().top) {
        if (nearestEl != null && nearestEl.offset().top > el.offset().top) {
          nearestEl = el;
        } else if (nearestEl == null) {
          nearestEl = el;
        }
      }
      defaultTop = $(document).outerHeight(true);
    }

    if (dir == 'up') {
      if (currentScroll > el.offset().top) {
        if (nearestEl != null && nearestEl.offset().top < el.offset().top) {
          nearestEl = el;
        } else if (nearestEl == null) {
          nearestEl = el;
        }
      }
      var defaultTop = 0;
    }

  });

  if (nearestEl != null) {
    return(nearestEl.offset().top);
  } else {
    return(defaultTop);
  }
}

$(function(){

  $('body').on('mousewheel', function(e){
    e.preventDefault();
    e.stopPropagation();
    if( isAnimating ) {
        return false;
    }
    isAnimating  = true;
    // Increase or reset current anchor
    if( e.originalEvent.wheelDelta >= 0 ) {
        currentAnchor = scrollUpDown('up');
    }else{
        currentAnchor = scrollUpDown('down');
    }

    isAnimating  = true;
    $('html, body').animate({
        scrollTop: currentAnchor
    }, 500, 'swing', function(){
        isAnimating  = false;
    });
  });

});
