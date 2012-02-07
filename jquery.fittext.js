/*global jQuery */
/*!	
 * FitText.js 1.0
 *
 * Copyright 2011, Dave Rupert http://daverupert.com
 * Released under the WTFPL license 
 * http://sam.zoy.org/wtfpl/
 *
 * Date: Thu May 05 14:23:00 2011 -0600
 */

(function( $ ){
  var resizeOccurred = true;

  function setup_throttle() {
    $(window).resize(function() {
      resizeOccurred = true;
    });

    window.setInterval(function() {
      if(resizeOccurred) {
        resizeOccurred = false;
        $(document).trigger("fittext-resize");
      }
    }, 300);

    setup_throttle = function() {};
  }

  $.fn.fitText = function( kompressor, options ) {
    var settings = {
      'minFontSize' : Number.NEGATIVE_INFINITY,
      'maxFontSize' : Number.POSITIVE_INFINITY
    };

    return this.each(function(){
      var $this = $(this);              // store the object
      var compressor = kompressor || 1; // set the compressor
      if ( options ) { 
         $.extend( settings, options );
      }

      setup_throttle();

      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      };

      // Call once to set.
      resizer();

      var resetter = function() {
        var style = $this.attr("style");
        $this.attr("style", style.replace(/font-size:.*?;/, ""));
        $(document).unbind("fittext-resize", resizer);
        $(document).unbind("fittext-reset", resetter);
      };

      $(document).bind("fittext-resize", resizer);
      $(document).bind("fittext-reset", resetter);
    });
  };

})( jQuery );
