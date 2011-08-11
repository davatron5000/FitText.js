# FitText.js, a jQuery plugin for inflating web type
FitText makes font-sizes flexible. Use this plugin on your fluid or responsive layout to achieve scalable headlines that fill the width of a parent element.

## How it works
If you're working on a responsive design, take whatever headline you'd like to scale and set the item to FitText. Oh. and you'll want to include jQuery n' all that too.

    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
   	<script src="jquery.fittext.js"></script>
   	<script>
      $("#responsive_headline").fitText();
    </script>

[Pretty Cool](http://www.hulu.com/watch/194733/saturday-night-live-miley-cyrus-show). Your text will now resize based on the width and height of the item.

## 2-Step Setup

* Add all the Javascripts (jQuery, FitText and `$(element).fitText();` block) as described above.
* Squeeze your browser.

## CSS Tips

* Set your target headline to `white-space: nowrap; width: auto;`
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
