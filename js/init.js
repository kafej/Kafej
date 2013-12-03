$(document).ready(function(){
  $('.navbar-nav a').click(function(){
      $('html, body').animate({
          scrollTop: $( $.attr(this, 'href') ).offset().top
      }, 500);
      return false;
  });
  $('#languages').popover({
    html: true,
    trigger:'hover',
    content:'<div class="popovercontent">I made this wallpaper !!</div><div class="popovercontentbig">You will see here amazing wallpaper on bigger screen !</div>',
    placement:'auto'
  });
   // cache the window object
  $window = $(window);
 
  $('section[data-type="background"]').each(function(){
    // declare the variable to affect the defined data-type
    var $scroll = $(this);
                     
    $(window).scroll(function() {
      // HTML5 proves useful for helping with creating JS functions!
      // also, negative value because we're scrolling upwards                            
      var yPos = -($window.scrollTop() / $scroll.data('speed'));
         
      // background position
      var coords = '50% '+ yPos + 'px';
 
      // move the background
       $scroll.css({ backgroundPosition: coords });   
    }); // end window scroll
  });  // end section function
}); // close out script

/* Create HTML5 element for IE */
document.createElement("section");