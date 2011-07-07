# FitText.js, a jQuery plugin for inflating web type
FitText makes font-sizes flexible. Use this plugin on your fluid or responsive layout to achieve scalable headlines that fill the width of a parent element.

## How it works
If you're working on a responsive design, take whatever headline you'd like to scale and set the item to FitText. Oh. and you'll want to include jQuery n' all that too.

    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
   	<script src="jquery.fittext.js"></script>
   	<script>
      $("#responsive_headline").fitText();
    </script>

[Pretty Cool](http://www.hulu.com/watch/194733/saturday-night-live-miley-cyrus-show). Your text will now resize based on the width of the item. (by default: ~1/10th of the element's width).

### The Compressor
The default setting works pretty well, but when it doesn't FitText has one setting you can adjust. If your text resizes poorly or is resizing all hurdy gurdy, you'll want to turn tweak up/down the compressor. It works a little like a guitar amp.

    $("#responsive_headline").fitText(1.2); // turn the compressor up (font will shrink a bit more aggressively)
    $("#responsive_headline").fitText(0.8); // turn the compressor down (font will shrink less aggressively)
    
This will hopefully give you a level of "control" that might not be pixel perfect, but scales smoothly & nicely.

## 3-Step Setup

* Add all the Javascripts (jQuery, FitText and `$(element).fitText();` block) as described above.
* Set your `font-size` in your CSS.  This will make act like a max-font-size.
* Squeeze your browser.

## CSS Tips

* Set your target headline to `width: 100%` in your CSS. 
* Set a font-size, this will act like a `max-font-size`.
* Be ready to tweak till everything balances out.
* So far, FitText seems to work with other fun properties like text-shadow
* It also works with [Lettering.js #synergy](http://github.com/davatron5000/Lettering.js)!

## Disclaimers
This is the part of the show where we cover our butts.

### Intended for Fluid Width Designs
We built this to satisfy a need for fluid resizing text on responsive designs. Mostly for use on [Trent Walton's blog](http://trentwalton.com), which he's using it all over. If you're not going fluid and/or want exact fitting text, we recommend checking out [BigText](https://github.com/zachleat/BigText) by Zach Leatherman.

### window.resize() tsk tsk tsk...
If you oppose `window.resize()`, it's worth mentioning that @chriscoyier created a fork of [FitText using a debounced resize method](https://github.com/chriscoyier/FitText.js). 

### Fallbacks
As always, use JavaScript with caution: plan for no-js fallbacks that you are comfortable with.

### For Forks' Sake
If you think you can make this better, please Download, Fork, & Commit. We'd love your see your ideas.
