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

  $.fn.fitText = function( options ) {

    // Setup options
    var fontRatio,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY,
          'lineCount' : 1,
          'scale': 100
        }, options);

    return this.each(function(){

      // Store the object & save previous position value
      var $this = $(this);

      // Temporarily force all the text onto one line and allow the element's width to expand to accommodate it
      $this.css({'white-space':'nowrap','position':'absolute','width':'auto'});

      // Calculate fontRatio ratio for this typeface
      fontRatio = parseFloat($this.width()) / parseFloat($this.css('font-size'));

      // Reset the temporary css values.
      $this.css({'position':'','width':'','white-space':''});

      // Resizer() resizes items based on the object width divided by the fontRatio
      // Subtract one px for each line to get around rounding errors
      var resizer = function () {
        $this.css('font-size', Math.max(Math.min( ((settings.scale/100) * settings.lineCount * $this.width() / fontRatio) - settings.lineCount, parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.fittext orientationchange.fittext', resizer);

    });

  };

})( jQuery );
