(function($) {
    "use strict"

    // Mobile dropdown
    $('.has-dropdown>a').on('click', function() {
        $(this).parent().toggleClass('active');
    });

    // Aside Nav
    $(document).click(function(event) {
        if (!$(event.target).closest($('#nav-aside')).length) {
            if ( $('#nav-aside').hasClass('active') ) {
                $('#nav-aside').removeClass('active');
                $('#nav').removeClass('shadow-active');
            } else {
                if ($(event.target).closest('.aside-btn').length) {
                    $('#nav-aside').addClass('active');
                    $('#nav').addClass('shadow-active');
                }
            }
        }
    });

    $('.nav-aside-close').on('click', function () {
        $('#nav-aside').removeClass('active');
        $('#nav').removeClass('shadow-active');
    });

    $('.search-btn').on('click', function() {
        $('#nav-search').toggleClass('active');
    });

    $('.search-close').on('click', function () {
        $('#nav-search').removeClass('active');
    });



    // Marquee- Section

    $(function (){

        /* Example options:
        
            let options = {
                autostart: true,
                property: 'value',
                onComplete: null,
                duration: 20000,
                padding: 10,
                marquee_class: '.marquee',
                container_class: '.simple-marquee-container',
                sibling_class: 0,
                hover: true,
                velocity: 0.1
                direction: 'right'
            }

            $('.simple-marquee-container').SimpleMarquee(options);
            
        */

        $('.simple-marquee-container').SimpleMarquee();
        
    });


	/*------------------------------------------------------------------------------*/
	/* Back to top
	/*------------------------------------------------------------------------------*/

	// ===== Scroll to Top ==== 
	jQuery('#totop').hide();
	jQuery(window).scroll(function() {
	  "use strict";
	  if (jQuery(this).scrollTop() >= 100) {        // If page is scrolled more than 50px
	    jQuery('#totop').fadeIn(200);    // Fade in the arrow
	    jQuery('#totop').addClass('top-visible');
	  } else {
	    jQuery('#totop').fadeOut(200);   // Else fade out the arrow
	    jQuery('#totop').removeClass('top-visible');
	  }
	});
	jQuery('#totop').on('click', function() {      // When arrow is clicked
	  jQuery('body,html').animate({
	    scrollTop : 0                       // Scroll to top of body
	  }, 500);
	  return false;
	});


	// Select all links with hashes
	$('a[href*="#"]')
	  // Remove links that don't actually link to anything
	  .not('[href="#"]')
	  .not('[href="#0"]')
	  .click(function(event) {
	    // On-page links
	    if (
	      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
	      && 
	      location.hostname == this.hostname
	    ) {
	      // Figure out element to scroll to
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
	      // Does a scroll target exist?
	      if (target.length) {
	        // Only prevent default if animation is actually gonna happen
	        event.preventDefault();
	        $('html, body').animate({
	          scrollTop: target.offset().top
	        }, 1000, function() {
	          // Callback after animation
	          // Must change focus!
	          var $target = $(target);
	          $target.focus();
	          if ($target.is(":focus")) { // Checking if the target was focused
	            return false;
	          } else {
	            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
	            $target.focus(); // Set focus again
	          };
	        });
	      }
	    }
	  });


	  
    // Header Full Date 
    // $(function(){
    //     var theFullDate = Date().getTime();
    //     $('#FullDate').html(theFullDate);
    // });


    // Footer Year 
    $(function(){
        var theYear = new Date().getFullYear();
        $('#year').html(theYear);
    });


})(jQuery);

