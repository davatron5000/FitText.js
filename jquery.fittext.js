/*jshint jquery:true strict:false*/
/*!
* FitText.js 1.0
*
* Copyright 2011, Dave Rupert http://daverupert.com
* Released under the WTFPL license
* http://sam.zoy.org/wtfpl/
*
* Date: Thu May 05 14:23:00 2011 -0600
*/

(function($){
  var defaults = {
    'minFontSize' : -9e99,
    'maxFontSize' : +9e99
  };

  // Resizer() resizes items based on the object width divided by the compressor * 10
  function resizer (self, settings) {
    return function () {
      self.css('font-size', Math.max(Math.min(
        self.width() / (settings.compressor * 10),
        parseFloat(settings.maxFontSize)),
        parseFloat(settings.minFontSize)));
    };
  }
	
  $.fn.fitText = function(compressor, options) {
    // Setup options
    var settings = $.extend({'compressor' : compressor || 1}, defaults, options);

    return this
      .each(function(){
        // Call on resize. Opera debounces their resize by default.
        $(window)
          .on('resize', resizer($(this), settings))
          .trigger('resize');
      });

  };

}(jQuery));
