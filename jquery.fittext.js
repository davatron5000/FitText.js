/*global jQuery */
/*!	
* FitText.js 1.1
*
* Copyright 2011, Dave Rupert http://daverupert.com, Armin Rosu http://about.me/arminrosu
* Released under the WTFPL license 
* http://sam.zoy.org/wtfpl/
*
* Date: Thu Aug 11 14:30:00 2011 +0200
*/

(function( $ ){
	
	$.fn.fitText = function( kompressor ) {
	
		return this.each(function(){
			// store the object
			var $this = $(this);
			
			// Resizer() resizes items based on the object width divided by the compressor * 10
			var resizer = function () {
				// original dimensions
				var original = {
					'height':	$this.height(),
					'size':		parseFloat( $this.css('font-size') ),
					'width':	$this.width()
				};
				
				// parental boundaries
				var container = $this.parent();
				var parent = {
					'height':	container.height(),
					'width':	container.width()
				};
				
				// get character dimensions     
				var character = {
					'height':	(original.height / original.size),
					'width':	(original.width / original.size)
				}
				
				// aproximate optimal size
				var optimal = {
					'height':	Math.floor( parent.height / character.height ),
					'width':	Math.floor( parent.width / character.width )		        	
				};
			
				// check which fits better
				if ( optimal.width <= optimal.height ) {
					// fit width
					$this.css('font-size', optimal.width );
				} else {
					// fit height
					$this.css('font-size', optimal.height );
				}
			};

			// Call once to set.
			resizer();
			
			// Call on resize. Opera debounces their resize by default. 
		  	$(window).resize(resizer);
		});
		
	};

})( jQuery );