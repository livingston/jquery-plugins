;(function($) {
	$.fn.truncateText = function(options) {
		var defaults = {
			length: 10,
			ellipsisText: "...", // can be string ot html element, change contentType accordingly
			contentType: 'text' // text or html
		}, options = $.extend(defaults, options);

		return this.each(function() {
			var $this = $(this), 
				textContent = '';

			if( options.contentType == "text" || options.contentType == "html") {
				textContent = $this[options.contentType]();
			} else {
				return;
			}

			if(textContent.length > options.length) {
				var splitPosition = textContent.indexOf(' ', options.length);
				if(splitPosition !== -1) {
					var truncatedText = textContent.substring(0, splitPosition);
					if( options.contentType == "text" ) {
						truncatedText += options.ellipsisText;
						$this.text(truncatedText);
						$this.attr({title : textContent});
					} else if( options.contentType == "html" ) {
						$this.html(truncatedText);
						$this.append(options.ellipsisText);
					}
				}
			}
		});
	}
})(jQuery);