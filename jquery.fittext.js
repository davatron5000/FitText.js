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
	
	$.fn.fitText = function( kompressor, minSize ) {
	
			return this.each(function(){
				var $this = $(this);                                     // store the object
				var maxFontSize = parseFloat($this.css('font-size'));    // simulate max-font-size based off of CSS specified font-size
				var minFontSize = parseFloat(minSize) || 0;              // Optional min-font-size simulator. Use pixels.
				var compressor = kompressor || 1;                        // set the compressor

        // Resizer() resizes items based on the object width divided by the compressor * 10
				var resizer = function () {
					$this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), maxFontSize), minFontSize));
				};

				// Call once to set.
				resizer();
				
				// Call on resize. Opera debounces their resize by default. 
      	$(window).resize(resizer);
      	
			});

	};

})( jQuery );