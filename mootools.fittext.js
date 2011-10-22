/*
 * mootools.fittext.js 1.0
 *
 * Copyright 2011, Adam Bowen http://adamnbowen.com
 * Port of FitText.js by Dave Rupert http://daverupert.com
 * Released under the WTFPL license 
 * http://sam.zoy.org/wtfpl/
 *
 * Date: Fri Oct 22 00:27:00 2011 -0500
 */

(function(){
	Element.implement({
		fitText: function(kompressor, options) {
			var settings = {
				'minFontSize' : Number.NEGATIVE_INFINITY,
				'maxFontSize' : Number.POSITIVE_INFINITY
			}

			return $$(this).each(function() {
				var $this = $(this);              // store the object
				var compressor = kompressor || 1; // set the compressor

				if ( options ) {
					settings.append(options);
				}

				// Resizer() resizes items based on the object width divided by the compressor * 10
				var resizer = function() {
					$this.setStyle('font-size', Math.max(Math.min($this.getSize().x / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
				}

				// Call once to set.
				resizer();

				// Call on resize. Opera debounces their resize by default. 
				window.addEvent('resize', resizer);
			}, this);
		}
	});
})();
