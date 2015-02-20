(function () {
	var update = function(base, extensions) {
		var result = {};
		var add = function(r, more) {
			for (var key in more) {
				r[key] = more[key];
			}
		};
		add(result, base || {});
		add(result, extensions || {});
		return result;
	};
	var default_conf = {
		paths: {
			'text': '../../../vendor/require/text',
			'durandal': '../../../vendor/durandal/js',
			'plugins': '../../../vendor/durandal/js/plugins',
			'transitions': '../../../vendor/durandal/js/transitions',
			'knockout': '../../../vendor/knockout/knockout-3.1.0',
			'bootstrap': '../../../vendor/bootstrap/js/bootstrap',
			'jquery': '../../../vendor/jquery/jquery-1.9.1'
		},
		shim: {
			'bootstrap': {
				deps: ['jquery'],
				exports: 'jQuery'
			}
		}
	}
	var conf = update(default_conf, require_app_config);

	requirejs.config(conf);
})();

define(['durandal/system', 'durandal/app', 'durandal/viewLocator'],  function (system, app, viewLocator) {
	//>>excludeStart("build", true);
	system.debug(true);
	//>>excludeEnd("build");

	app.title = 'Durandal Samples';

	//specify which plugins to install and their configuration
	app.configurePlugins({
		router:true,
		dialog: true,
		widget: {
			kinds: ['expander']
		}
	});

	app.start().then(function () {
		viewLocator.useConvention();
		app.setRoot('shell');
	});
});