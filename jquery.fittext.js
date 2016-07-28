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

(function($){
	//jquery fitText([number compressor,] object options)
	$.fn.fitText=function(compressor, options){
		options=options || {};
		
		if(compressor){
			if(typeof compressor=="object"){
				//If the options object was specified using the first arguments, the second argument is ignored.
				options=compressor;
			}else{
				//If the compressor was specified using the first arguments, that value is used, regardless of the options object.
				options.compressor=compressor;
			}
		}
		
		//Setup options
		var settings=$.extend({
				//Number
				"compressor":1,
				//Must be parseable by `parseFloat()`
				"minFontSize":Number.NEGATIVE_INFINITY,
				//Must be parseable by `parseFloat()`
				"maxFontSize":Number.POSITIVE_INFINITY,
				//A function called before the new font-size is applied. The font-size
				//is passed as first argument and `this` belongs to the DOM element.
				//If `false` (checked using `===`) is returned, the font-size won't be applied.
				"before":$.noop,
				//A function called after the new font-size was applied. The font-size
				//is passed as first argument and `this` belongs to the DOM element.
				"after":$.noop,
				//A jQuery object used instead of the object this function was called on.
				//Does not affect `this` in "before" and "after".
				"proxy":null
			}, options);
		
		return this.each(function(){
			//Store the object
			var $this=$(this);

			//Resizer() resizes items based on the object width divided by the compressor * 10
			var resizer=function(){
					var size=Math.max(Math.min($this.width()/(settings.compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize));
					
					if(settings.before.apply($this.get(0), [size])!==false){
						(settings.proxy || $this).css("font-size", size);
					}
					settings.after.apply($this.get(0), [size]);
				};

			//Call once to set.
			resizer();

			//Call on resize. Opera debounces their resize by default.
			$(window).on("resize.fittext orientationchange.fittext", resizer);
		});
	};
})(jQuery);
