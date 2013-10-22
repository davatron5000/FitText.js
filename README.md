# FitText.js, a jQuery plugin for inflating web type
FitText makes font-sizes flexible. Use this plugin on your responsive design for ratio-based resizing of your headlines.

## How it works
Here is a simple FitText setup:

```html
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
<script src="jquery.fittext.js"></script>
<script>
  jQuery("#responsive_headline").fitText();
</script>
```

Your text should now fluidly resize, by default: Font-size = 1/10th of the element's width.

## The Compressor
If your text is resizing poorly, you'll want to turn tweak up/down "The Compressor". It works a little like a guitar amp. The default is `1`.

```javascript
jQuery("#responsive_headline").fitText(1.2); // Turn the compressor up   (resizes more aggressively)
jQuery("#responsive_headline").fitText(0.8); // Turn the compressor down (resizes less aggressively)
```

This will hopefully give you a level of "control" that might not be pixel perfect, but resizes smoothly & nicely.

## minFontSize & maxFontSize
FitText now allows you to specify two optional pixel values: `minFontSize` and `maxFontSize`. Great for situations when you want to preserve hierarchy.

```javascript
jQuery("#responsive_headline").fitText(1.2, { minFontSize: '20px', maxFontSize: '40px' })
```

## CSS FAQ

- **Make sure your container has a width!**
  - `display: inline` elements don't have a width. Use `display: block` OR `display: inline-block`+ a specified width (i.e. `width: 100%`).
  - `position:absolute` elements need a specified width as well.
- Tweak until you like it.
- Set a No-JS fallback font-size in your CSS.

## Don't use jQuery?
That's okay. Check out these handy non-jQuery versions maintained by other people.

- [non-jQuery FitText](https://github.com/adactio/FitText.js) from @adactio
- [Angular.js FitText.js](https://github.com/patrickmarabeas/AngularJS-FitText.js) from @patrickmarabeas

## Changelog
* `v 1.2` - Added `onorientationchange` event
* `v 1.1` - FitText now ignores font-size and has minFontSize & maxFontSize options
* `v 1.0.1` - Fix for broken font-size.
* `v 1.0` - Initial Release

## In Use:
- [Trent Walton](http://trentwalton.com)

If you want more exact fitting text, there are plugins for that! We recommend checking out [BigText](https://github.com/zachleat/BigText) by Zach Leatherman or [SlabText](http://www.frequency-decoder.com/demo/slabText/) by Brian McAllister.

### Download, Fork, Commit.
If you think you can make this better, please Download, Fork, & Commit. We'd love to see your ideas.
