/*global jQuery */
/*!
* FitText.js 1.1
*
* Copyright 2011, Dave Rupert http://daverupert.com
* Released under the WTFPL license
* http://sam.zoy.org/wtfpl/
*
* Date: Thu May 05 14:23:00 2011 -0600
*/

(function( $, window ){

  window.requestAnimationFrame = window.requestAnimationFrame
    || window.webkitRequestAnimationFrame 
    || window.mozRequestAnimationFrame
    || function( callback ){ window.setTimeout(callback, 1000 / 60); };

  $.fn.fitText = function( kompressor, options ) {

    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);
        
    return this.each(function(){

      // Store the object
      var $this = $(this);

      // Is requestAnimationFrame running?
      var raf = false;
          
      var onResize = function() {
        // make sure we don't stack raf calls uselessly
        if( !raf ) {
          window.requestAnimationFrame(resizer);
        }
        raf = true;
      }

      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
        
        // start capturing events again
        raf = false;
      };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize orientationchange', onResize);

    });

  };

})( jQuery, window );
