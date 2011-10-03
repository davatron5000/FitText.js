/*global jQuery */
/*!	
* FitText.js 1.2
*
* Copyright 2011, Dave Rupert http://daverupert.com
* Contribution by Matt Wiebe http://somadesign.ca/
* Released under the WTFPL license 
* http://sam.zoy.org/wtfpl/
*
* Date: Mon Sep 05 12:31:00 2011 -0600
*/

(function( $ ){
	
	$.fn.fitText = function( kompressor, options ) {

		var settings = {
			'minFontSize' : Number.NEGATIVE_INFINITY,
			'maxFontSize' : Number.POSITIVE_INFINITY,
			'minWidth' : 0,
			'maxWidth': Number.POSITIVE_INFINITY
		 };

		return this.each(function(){
			var $this = $(this);				  // store the object
			var compressor = kompressor || 1; // set the compressor
  
				if ( options ) { 
				  $.extend( settings, options );
				}
  
				// Resizer() resizes items based on the object width divided by the compressor * 10
			var resizer = function () {
				var winWidth = $(window).width();
				// inside window threshold?
				if ( winWidth >= settings.minWidth && winWidth <= settings.maxWidth ) {
					$this.css('fontSize', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
				}
				else {
					$this.css('fontSize', '');
				}
			};

			// Call once to set.
			resizer();

			// Call on resize. Opera debounces their resize by default. 
			$(window).resize(resizer);

			});

	};

})( jQuery );