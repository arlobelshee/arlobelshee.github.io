/*
 * Scale-Out-Agile
 * 
 * Arlo Belshee
 * https://github.com/Scale-Out-Agile/Scale-Out-Agile.github.io
 * 
 * Copyright (c) 2014
 * Licensed under the MIT license.
 */

module.exports = function (grunt) {
	'use strict';

	var now = new Date();
	function print_date(when) {
		return pad_num(when.getFullYear()) +
			pad_num(1 + when.getMonth()) +
			pad_num(when.getDate()) +
			pad_num(when.getHours()) +
			pad_num(when.getMinutes()) +
			pad_num(when.getSeconds());
	}
	function pad_num(i) {
		return (i < 10) ? "0" + i : "" + i;
	}

	grunt.initConfig({

		// Project metadata
		pkg: grunt.file.readJSON('package.json'),
		vendor: grunt.file.readJSON('.bowerrc').directory,
		site: grunt.file.readYAML('_config.yml'),
		bootstrap: '<%= vendor %>/bootstrap',
		durandal: '<%= vendor %>/durandal',
		cache_bust: '<%= pkg.version %>-' + print_date(now),

		// Before generating any new files, remove files from previous build.
		clean: {
			site: ['<%= site.dest %>/**/.*', '<%= site.dest %>/**/*', '!<%= site.dest %>/.git']
		},

		// Lint JavaScript
		jshint: {
			all: ['Gruntfile.js', 'templates/helpers/*.js'],
			options: {
				jshintrc: '.jshintrc'
			}
		},

		// Build HTML from templates and data
		assemble: {
			options: {
				flatten: true,
				production: true,
				cache_bust: '<%= cache_bust %>',
				assets: '<%= site.assets %>',
				//				postprocess: require('pretty'),

				// Metadata
				pkg: '<%= pkg %>',
				site: '<%= site %>',
				data: ['<%= site.data %>'],

				// Templates
				partials: '<%= site.includes %>',
				layoutdir: '<%= site.layouts %>',
				layout: '<%= site.layout %>',

				// Extensions
				helpers: '<%= site.helpers %>',
				plugins: '<%= site.plugins %>'
			},
			site: {
				files: {
					'<%= site.dest %>/': ['<%= site.templates %>/*.hbs', '<%= site.content %>/*.md']
				}
			}
		},

		// Compile LESS to CSS
		less: {
			options: {
				vendor: 'vendor',
				paths: [
					'<%= site.theme %>',
					'<%= site.theme %>/readable',
					'<%= site.theme %>/bootstrap',
					'<%= site.theme %>/components',
					'<%= site.theme %>/utils'
				]
			},
			site: {
				src: ['<%= site.theme %>/site.less'],
				dest: '<%= site.assets %>/css/site.<%= cache_bust %>.css'
			}
		},

		copy: {
			// Copy vendor assets to site assets
			assets: {
				files: [
					{ expand: true, cwd: '<%= vendor %>/font-awesome/fonts', src: ['*.*'], dest: '<%= site.assets %>/fonts/' },
					{ expand: true, cwd: '<%= bootstrap %>/dist/fonts', src: ['*.*'], dest: '<%= site.assets %>/fonts/' },
					{ expand: true, cwd: '<%= bootstrap %>/dist/js', src: ['*.min.*'], dest: '<%= site.assets %>/js/' },
					{ expand: true, cwd: '<%= bootstrap %>/dist/css', src: ['*.min.*'], dest: '<%= site.assets %>/css/' },
					{ expand: true, cwd: '<%= durandal %>/js', src: ['**/*.*'], dest: '<%= site.assets %>/js/durandal/' },
					{ expand: true, cwd: '<%= durandal %>/img', src: ['*.*'], dest: '<%= site.assets %>/img/' },
					{ expand: true, cwd: '<%= durandal %>/css', src: ['**/*.*'], dest: '<%= site.assets %>/css/' },
					{ expand: true, cwd: '<%= vendor %>/require', src: ['require.js'], dest: '<%= site.assets %>/js/' },
					{ expand: true, cwd: '<%= vendor %>/require', src: ['text.js'], dest: '<%= site.assets %>/js/' },
					{ expand: true, cwd: '<%= vendor %>/knockout', src: ['knockout-3.1.0.js'], dest: '<%= site.assets %>/js/' },
					{ expand: true, cwd: '<%= vendor %>/jquery', src: ['*.min.*'], dest: '<%= site.assets %>/js/' },
					{ expand: true, cwd: '<%= vendor %>/font-awesome/css', src: ['*.min.css'], dest: '<%= site.assets %>/css/' },
				]
			},
			apps: {
				files: [
					{ expand: true, cwd: '<%= site.apps %>', src: ['*/**/*.*'], dest: '<%= site.dest %>' },
				]
			},
			ghpages: {
				files: [
					{ src: ['README.md'], dest: '<%= site.dest %>/' },
					{ expand: true, cwd: 'static', src: ['*.*', '**/*.*', '*'], dest: '<%= site.dest %>/', dot: true }
				]
			},
			production_only: {
				files: [
					{ expand: true, cwd: 'static_production_only', src: ['*.*', '**/*.*', '*'], dest: '<%= site.dest %>/', dot: true }
				]
			}
		},

		watch: {
			all: {
				files: ['<%= jshint.all %>'],
				tasks: ['jshint', 'nodeunit']
			},
			site: {
				files: ['Gruntfile.js', '<%= less.options.paths %>/*.less', 'templates/**/*.hbs', 'content/**/*.*'],
				tasks: ['design']
			}
		},

		gitcommit: {
			version_bump: {
				options: {
					message: 'Updating version as part of shipping version <%= pkg.version %>.',
					verbose: true,
					noStatus: true
				},
				files: { src: ['package.json', 'bower.json'] }
			}
		},

		gitadd: {
			version_bump: {
				options: {
					verbose: true
				},
				files: { src: ['package.json', 'bower.json'] }
			}
		},

		gitcheckout: {
			src: {
				options: {
					verbose: true,
					branch: 'src'
				}
			}
		},

		gitfetch: {
			upstream: {
				options: {
					verbose: true,
					prune: true,
					repository: 'upstream'
				}
			}
		},

		gitmerge: {
			upstream: {
				options: {
					verbose: true,
					branch: 'upstream/src',
					ffOnly: true
				}
			}
		},

		gitpush: {
			upstream: {
				options: {
					verbose: true,
					remote: 'upstream',
					branch: 'src'
				}
			},
			origin: {
				options: {
					verbose: true,
					remote: 'origin',
					branch: 'src'
				}
			}
		},

		buildcontrol: {
			options: {
				dir: '<%= site.dest %>',
				commit: true,
				push: true,
				message: 'Built %sourceName% <%= pkg.version %> from %sourceCommit%.'
			},
			local: {
				options: {
					branch: 'gh-pages',
					remote: 'origin'
				}
			},
			live: {
				options: {
					tag: '<%= pkg.version %>',
					branch: 'master',
					remote: 'upstream'
				}
			}
		}
	});

	// Load npm plugins to provide necessary tasks.
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-sync-pkg');
	grunt.loadNpmTasks('grunt-git');
	grunt.loadNpmTasks('grunt-build-control');
	grunt.loadNpmTasks('grunt-verb');
	grunt.loadNpmTasks('assemble-less');
	grunt.loadNpmTasks('assemble');

	grunt.registerTask('confirm_ship', 'Ask the user to confirm whether the site is ready to ship.', function () {
		grunt.log.writeln('');
		grunt.log.writeln('Please review the site and determine whether it is ready to ship.');
		grunt.log.writeln('If so, update the version number in package.json using semantic versioning rules.');
		grunt.log.writeln('When you are done, run grunt ship-go to finish shipping.');
		grunt.log.writeln('To abandon a ship, simply do nothing.');
	});

	grunt.registerTask('build', ['copy:assets', 'verb', 'assemble', 'less', 'copy:apps', 'copy:ghpages']);

	// Build everything and watch for changes. You must first run "bower install"
	// or install Bootstrap to the "vendor" directory before running this command.
	grunt.registerTask('design', ['clean', 'build', 'watch:site']);

	grunt.registerTask('default', ['clean', 'jshint', 'build']);

	grunt.registerTask('deploy', ['buildcontrol:local']);
	grunt.registerTask('integrate', ['gitcheckout:src', 'gitfetch:upstream', 'gitmerge:upstream', 'default', 'gitpush:origin']);
	grunt.registerTask('ship-prep', ['gitcheckout:src', 'gitfetch:upstream', 'gitmerge:upstream', 'default', 'copy:production_only', 'confirm_ship']);
	grunt.registerTask('ship-go', ['sync', 'default', 'copy:production_only', 'gitadd:version_bump', 'gitcommit:version_bump', 'gitpush:upstream', 'gitpush:origin', 'buildcontrol:live']);
};