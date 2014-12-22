module.exports.register = function (Handlebars, opt, params) {
	'use strict';

	var template = Handlebars.compile("<iframe class='github-btn' src='http://ghbtns.com/github-btn.html?user={{username}}&amp;type=follow'></iframe>" +
		"<a class='team-member' href='https://github.com/{{username}}'>" +
		"<img src='http://www.gravatar.com/avatar/{{gravitar_id}}' alt='@{{username}}'>" +
		"<strong>{{name}}</strong> <small>@{{username}}</small>" +
		"</a>"
	);

	Handlebars.registerHelper('gh_badge_helper', function (options) {
		return new Handlebars.SafeString(template(this, options));
	});
};