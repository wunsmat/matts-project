/**
 * @file Application Router and Controller
 * @author A. Developer
 * @module router
**/
define(function(require, exports) {
    'use strict';

    var Marionette = require('backbone.marionette');
    var View = require('views/example');

    /**
     * @name RouterController
     * @constructor
     * @extends Marionette.Object
     * @prop {function} foo Example callback function to be called by ExampleAppRouter
    **/
    var RouterController = Marionette.Object.extend({
        initialiizae: function() {
            var view = new View();
            view.render();
            this.options.view = view;
        },
        fun: function() {
            //code to be executed for 'foo' route
            
        }
    });
    /**
     * @name ExampleAppRouter
     * @description Example application router
     * @constructor
     * @extends Marionette.AppRouter
     * @prop {object} appRoutes
     * @prop {string} appRoutes.foo
    **/
    var ExampleAppRouter = Marionette.AppRouter.extend({
        appRoutes: {
            'fun': 'fun'
        },
        controller: new RouterController()
    });

    exports.Controller = RouterController;
    exports.Router = ExampleAppRouter;
});
