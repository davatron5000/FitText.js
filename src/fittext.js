/*!
* FitText.js 1.2
*
* Copyright 2011, Dave Rupert http://daverupert.com
* Released under the WTFPL license
* http://sam.zoy.org/wtfpl/
* 
* Various modifications by Carlos Vergara <cfvergara@gmail.com>
* also released under the WTFPL license
* http://sam.zoy.org/wtfpl/
*/

if (Number.parseFloat === void 0) {
	Number.parseFloat = parseFloat;
}

const { NEGATIVE_INFINITY, POSITIVE_INFINITY, parseFloat } = Number;

const DEFAULT_OPTIONS = {
	minFontSize: NEGATIVE_INFINITY,
	maxFontSize: POSITIVE_INFINITY
};

export default function FitText(selectorOrNodes) {
	let workingNodes;
	if (!selectorOrNodes) {
		return;
	}
	if (selectorOrNodes instanceof NodeList) {
		workingNodes = [ ...selectorOrNodes ];
	}
	if (selectorOrNodes instanceof HTMLElement) {
		workingNodes = [ selectorOrNodes ];
	}
	if (selectorOrNodes.constructor === String) {
		workingNodes = [ ...document.querySelectorAll(selectorOrNodes) ];
	}

	return function ActualFitConstructor(compressionFactor = 1, options = {}) {
		const compressor = compressionFactor;
		const settings = {
			...DEFAULT_OPTIONS,
			...options
		};

		return workingNodes.forEach((node) => {
			const resizer = function() {
				node.style.fontSize =
					Math.max(
						Math.min(
							node.clientWidth / (compressor * 10),
							parseFloat(settings.maxFontSize)
						),
						parseFloat(settings.minFontSize)
					) + 'px';
			};

			resizer();

			window.addEventListener('resize', resizer);
			window.addEventListener('orientationchange', resizer);
		});
	};
}
