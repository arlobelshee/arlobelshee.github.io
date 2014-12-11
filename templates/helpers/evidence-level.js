module.exports.register = function (Handlebars, options, params) {
	'use strict';

	var levels = [
		'idea',
		'anecdotal',
		'measured',
		'reproduced',
		'consistent'
	];

	Handlebars.registerHelper('evidence-level', function (level) {
		level = levels[Math.max(Math.min(level, levels.length-1), 0)];
		return new Handlebars.SafeString("<p class='evidence " + level + "'><span class='descriptor'>Evidence: </span>" + level + "</p>");
	});
};