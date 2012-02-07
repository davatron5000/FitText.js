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
    function setup_listener() {
        $(window).resize(function() {
            $(document).trigger("fittext-resize");
        });
        // only once
        setup_listener = function(){};
    }
	$.fn.fitText = function( kompressor, options ) {
	    
	    var settings = {
        'minFontSize' : Number.NEGATIVE_INFINITY,
        'maxFontSize' : Number.POSITIVE_INFINITY
      };

      setup_listener();
	
			return this.each(function(){
				var $this = $(this);              // store the object
				var compressor = kompressor || 1; // set the compressor
        
        if ( options ) { 
          $.extend( settings, options );
        }
        
        // Resizer() resizes items based on the object width divided by the compressor * 10
				var resizer = function () {
					$this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
				};
      // resetter() wipes out inline fonts and stops listening
        var resetter = function() {
            var style = $this.attr("style");
            $this.attr("style", style.replace(/font-size:.*?;/, ""));
            $(document).unbind("fittext-resize", resizer);
            $(document).unbind("fittext-reset", resetter);
        };

				// Call once to set.
				resizer();
				
				// Call on resize. Opera debounces their resize by default. 
      	$(document).bind("fittext-resize", resizer);
      	$(document).bind("fittext-reset", resetter);
      	
			});

	};

})( jQuery );
