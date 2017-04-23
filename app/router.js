/**
 * @file Application Router and Controller
 * @author A. Developer
 * @module router
**/
define(function(require, exports) {
    'use strict';

    var Marionette = require('backbone.marionette');
    var TodoView   = require('views/todoView');

    /**
     * @name RouterController
     * @constructor
     * @extends Marionette.Object
     * @prop {function} foo Example callback function to be called by ExampleAppRouter
    **/
    var RouterController = Marionette.Object.extend({
        initialize: function(options) {
            this.view = options.view;
        },
        showTodoView: function() {
            console.log('flag');
            this.view.getRegion('main').show(new TodoView());
            Backbone.history.navigate('todoView');
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
            'todoView': 'showTodoView'
        },
        initialiizae: function(options) {
            this.controller = options.controller;
        }
    });

    exports.Controller = RouterController;
    exports.Router = ExampleAppRouter;
});
