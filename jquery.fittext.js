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

(function( $ ){

  $.fn.fitText = function( options ) {

    // Setup options
    var compressor,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);

    return this.each(function(){

      // Store the object & save previous position value
      var $this = $(this),
          oldPos = $this.css('position');

      // Temporarily force all the text onto one line and allow the element's width to expand to accommodate it
      $this.css({'white-space':'nowrap','position':'absolute'});

      // Calculate compressor ratio for this typeface
      compressor = parseFloat($this.width()) / parseFloat($this.css('font-size'));

      // Reset the position value. Leaving white-space:nowrap provides some wriggle room for rounding errors
      $this.css({'position':oldPos});

      // Resizer() resizes items based on the object width divided by the compressor
      // Using Math.floor helps avoid browser rounding errors.
      var resizer = function () {
        var fontSize = Math.floor(Math.max(Math.min($this.width() / compressor, parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
        $this.css('font-size', fontSize);
        //reset white-space property if minFontSize is being used
        $this.css({'white-space': (fontSize <= parseFloat(settings.minFontSize)) ? 'normal':'nowrap'}); 
      };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.fittext orientationchange.fittext', resizer);

    });

  };

})( jQuery );
