//FitText.js
(function( $ ){

	$.fn.fitText = function( kompressor, options ) {

		var settings = {
			'minFontSize' : Number.NEGATIVE_INFINITY,
			'maxFontSize' : Number.POSITIVE_INFINITY,
			'event' : "resize.fitText"  //You can use any event e.g. bespoke debounced resize like 'smartresize'
			},
			$obj = (this);

		this
		.each(function(){

			var $this = $(this), // store the object
				compressor = kompressor || 1; // set the compressor

			if ( options ) { 
				$.extend( settings, options );
			}

			// Resizer() resizes items based on the object width divided by the compressor * 10
			var resizer = function () {
				$this
				.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
			};

			// Call once to set.
			resizer();

			// Call on resize. Opera debounces their resize by default.
			$(window)
			.bind(settings.event,resizer);

		});

		return {

			off: function() {

				//Unbind FitText event
				$(window)
				.unbind(settings.event);

				//Remove font-size inline style
				$obj
				.each(function(){
					
					$(this)
					.css('font-size',''); 
				});
			}
		}
	}
})( jQuery );