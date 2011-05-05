(function( $ ){
	
	$.fn.fitText = function( kompressor ) {
	
			return this.each(function(){
				var $this = $(this);
				var origFontSize = $this.css('font-size');
				var fontResize = origFontSize;
				var compressor = kompressor || 1;
				
				var resizer = function ( obj ) {
					fontResize =  obj.width() / (compressor*10);
					console.log(fontResize);
					fontResize = (fontResize >= origFontSize)?  origFontSize : fontResize; 
					obj.css('font-size',fontResize);
				}

				resizer($this);
				
      	$(window).resize(function() {
					resizer($this);
      	});
      	
			});

	};

})( jQuery );