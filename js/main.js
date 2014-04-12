// The function is wrapped, so that we can use strict within it.
(function () {
    'use strict';

    console.log('go go gadget main!');
	// Place third party dependencies in the lib folder
	//
	// Configure loading modules from the lib directory,
	// except 'app' ones, 
	requirejs.config({
		baseUrl: "js/",
	    "paths": {
	      /*"app": "../app",*/
	      jquery: 'libs/jquery/jquery',
	      bootstrap: 'libs/bootstrap/bootstrap',
	      underscore: 'libs/underscore/underscore',
	      backbone: 'libs/backbone/backbone'
	    },
	    "shim": {
			'backbone': {
			    //These script dependencies should be loaded before loading
			    //backbone.js
			    deps: ['underscore', 'jquery'],
			    //Once loaded, use the global 'Backbone' as the
			    //module value.
			    exports: 'Backbone'
			},
			'underscore': {
			    exports: '_'
			},
			'jquery': {
			    exports: '$'
			},
			'bootstrap' : {
				deps: ["jquery"]
			}
	    }
	});

	// Load the main app module to start the app
	require(["app"], function(){
		App.initialize();



	});  
}());
