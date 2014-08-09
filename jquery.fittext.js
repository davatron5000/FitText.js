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
			  'maxFontSize' : Number.POSITIVE_INFINITY,
			  'direction'   : String
			}, options);
		


		return this.each(function(){

			var d;
			if ( settings.direction === 'height' ) {
				d = 'height';
			} else if ( settings.direction === 'both') {
				d = 'both';
			}

			var $this = $(this);
			
			resizer = function () {
				if (d === 'height'){
					$this.css('font-size', Math.max(Math.min($(window).height() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
				} else if (d === 'both') {
					$this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
					$this.css('font-size', Math.max(Math.min($(window).height() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
				} else {
					$this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
				}
			};
			
			// Call once to set.
			resizer();

			// Call on resize. Opera debounces their resize by default.
			$(window).on('resize.fittext orientationchange.fittext', resizer);
		});

	};

})( jQuery );
