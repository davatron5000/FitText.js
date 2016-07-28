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
    if (kompressor === 'destroy') {
        return this.each(function(){
            var uid = $(this).data('fitText.uid');
            if (uid) {
                $(window).off('.' + uid);
            }
        });
        return;
    }

    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);

    return this.each(function(){

      // Store the object
      var $this = $(this);

      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      };

      // Call once to set.
      resizer();
      
      // Create an event unique ID to allow unbinding 
      var uid = Math.random().toString().replace(/^[0\.]+/, 'uid-');
      $this.data('fitText.uid', uid);

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.fittext.' + uid + ' orientationchange.fittext.' + uid, resizer);

    });

  };

})( jQuery );
