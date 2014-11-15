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
    
    var $body   = $('body'),
        $parent = $(this).parent(),
        variableFontSize;

    // Get sizing units
    var getUnits = function(fontSize){
        return String(fontSize).replace(/[0-9.]/g, '').toLowerCase();
    };
    
    var calculateUnits = {
      
      // Calculate em
      em: function(size){
        var parentFontSize = parseInt($parent.css('font-size'));
        return parentFontSize * size;
      },
    
      // Calculate rem (Set root size on <html>)
      rem: function(size){
        var rootFontSize = parseInt($body.css('font-size'));
        return rootFontSize * size;
      },

      // Calculate vw (View based on $('body') width)
      // This works acurately with compressor set to 0.1 and allows for fixed pixel minimum
      vw: function(size){
        var viewWidth = $body.width();
        return Math.ceil((viewWidth / 100) * size);
      },

      // Calculate pw (Works like vw, but is a percentage of parent width)
      pw: function(size){
        var parentWidth = $parent.width();
        return Math.ceil((parentWidth / 100) * size);
      }
    };
    
    variableFontSize = (getUnits() === 'vw' || 'pw') ? true : false; // Bool, indicates whether to recalculate font size inside resizer()
    
    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);

    var recalculate = function(options){

      if(!options) { return; }

      // Iterate over options
      for(var fontSetting in options){
        var size  = parseFloat(options[fontSetting]),
            units = getUnits(options[fontSetting]);
        
        // If a function to calculate the given unit exists, call it and pass in the size argument
        if(typeof calculateUnits[units] === 'function') {

          // *Update the settings with calculated pixel values, options remain untouched
          settings[fontSetting] = calculateUnits[units](size) + 'px';
        }
      }
    };

    return this.each(function(){

      // Store the object
      var $this = $(this);
      
      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {

        // If variableFontSize is true, we have vw or pw units
        // which require recalculating the font size.
        if(variableFontSize) { recalculate(options); }
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      
      };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.fittext orientationchange.fittext', resizer);
      
    });

  };

})( jQuery );
