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

    return this.each(function(){

      // Store the object
      var $this = $(this);

      // Get initial letter & word spacing (converts to px units)
      var size  = parseInt($this.css('font-size')); 
      var space = parseInt($this.css('letter-spacing'));
      var word  = parseInt($this.css('word-spacing'));

      // Resizer() resizes items based on the object width divided by the 
      // compressor * 10
      var resizer = function () {

        var sizeNew = spaceNew = wordNew = 0;

        // Determine new font-size
        sizeNew  = Math.max(
          Math.min(
            $this.width() / (compressor*10), 
            parseFloat(settings.maxFontSize)
          ), 
          parseFloat(settings.minFontSize)
        );

        spaceNew = space * (Math.min(size, sizeNew) / Math.max(size, sizeNew));
        wordNew  = word  * (Math.min(size, sizeNew) / Math.max(size, sizeNew));

        $this.css({
          'font-size'      : sizeNew,
          'letter-spacing' : spaceNew,
          'word-spacing'   : wordNew
        });
      };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.fittext orientationchange.fittext', resizer);

    });

  };

})( jQuery );
