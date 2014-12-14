module.exports.register = function (Handlebars, opt, params) {
	'use strict';

	Handlebars.registerHelper('section', function (name, options) {
		var body = options.fn(this);
		return new Handlebars.SafeString("<!-- " + name + " -->" +
			"<div class='bs-docs-section'>" +
				"<div class='page-header'>" +
					"<h1 id='" + Handlebars.helpers.plusify(name).toLowerCase() + "'>" + name + "</h1>" +
				"</div>" + body +
			"</div>"
		);
	});
};