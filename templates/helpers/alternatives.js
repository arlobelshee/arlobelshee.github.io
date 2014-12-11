module.exports.register = function (Handlebars, options, params) {
	'use strict';

	Handlebars.registerHelper('alternatives', function () {
		var join_without_last = function (ary, separator) {
			if (ary.length === 0) {
				return "";
			}
			var result = ary[0];
			for (var i = 1; i < ary.length - 1; i++) {
				result += separator + ary[i];
			}
			return result;
		};
		if (!arguments) {
			return new Handlebars.SafeString("");
		}
		return new Handlebars.SafeString("<p class='descriptor alternatives'>Alternatives:</p><ul class='alternatives'><li>" + join_without_last(arguments, '</li><li>') + "</li></ul>");
	});
};