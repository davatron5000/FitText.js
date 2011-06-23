
/* FitText.js 1.0 for Mootools
*
* Copyright 2011, René Domingue <rdomingue80 [at] gmail [dot] com>
* http://beta.rdsign.net/code/article_12
*
* Based on the jquery code of Dave Rupert
* Reference: Dave Rupert http://daverupert.com
*
* Date: June 04 2011 
*/


function fitText(el, kompressor){
	
															
		var el = $(el);													// store the object
		var origFontSize = parseFloat(el.getStyle('font-size')); 		// init the font sizes
		var compressor = kompressor || 1;								// set the compressor
		
		// Resizer() resizes items based on the object width divided by the compressor * 10
	
		function resizer(){		
			el.setStyle('font-size', Math.min(parseFloat(el.getStyle('width')) / (compressor*10), origFontSize));
		};
		
		// Call once to set.
		resizer();		
		window.addEvent('resize', resizer);
	
};	


 
 