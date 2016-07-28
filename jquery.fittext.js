/*global jQuery */
/*!
* FitText.js 1.2
*
* Copyright 2011, Dave Rupert http://daverupert.com
* Released under the WTFPL license
* http://sam.zoy.org/wtfpl/
*
* Date: Thu May 05 14:23:00 2011 -0600
*/

(function( $ ){

  $.fn.fitText = function( kompressor, options ) {

    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);

    return this.each(function(index, element){

      // Store the object - now accepts classes for multiple objects to be resized
      var $resizeArray = new Array();
	    $resizeArray.push($(this));
	  
      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        // Cycle through items captured in init
  		  for(i = 0; i < $resizeArray.length; i++) {
  			  $resizeArray[i].css('font-size', Math.max(Math.min($resizeArray[i].parents().eq(3).width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
  		  }
      };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.fittext orientationchange.fittext', resizer);

    });

  };

})( jQuery );
