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
	
	$.fn.fitText = function( kompressor ) {
	
			return this.each(function(){
				var $this = $(this);                                      // store the object
				var fontResize = origFontSize = $this.css('font-size');   // init the font sizes
				var compressor = kompressor || 1;                         // set the compressor

        // Resizer() resizes items based on the object width divided by the compressor * 10
				var resizer = function ( obj ) {
					fontResize =  obj.width() / (compressor*10);
					fontResize = (fontResize >= origFontSize)?  origFontSize : fontResize; 
					obj.css('font-size',fontResize);
				}

				// Call once to set.
				resizer($this);
				
				// Call on resize. Opera debounces their resize by default. 
      	$(window).resize(function() {
					resizer($this);
      	});
      	
			});

	};

})( jQuery );