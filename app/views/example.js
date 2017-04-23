/**
 * @file Example MarionetteJS View module
 * @author A. Developer
 * @module views/example
 * @requires models/example
**/
define(function(require, exports, module) {
    'use strict';

    var Marionette = require('backbone.marionette');
    var Backbone   = require('backbone');
    var TodoView   = require('views/todoView');
    var JST        = require('templates');
    var Example    = require('models/example');
    var Router     = require('router');

    /**
     * @name ExampleView
     * @description Example view
     * @constructor
     * @extends Marionette.View
    **/
    var ExampleView = Marionette.View.extend({
        //view code goes here
        template: JST.example,
        model: new Example.Model(),  
        ui: {
            todo: '#todo',
        },
        events: {
            'click @ui.todo': 'showTodoView'
        },
        regions: {
            main: '#main'
        },
        initialize: function() {
            var controller = new Router.Controller({view: this});
            this.router = new Router.Router({controller: controller});
        },
        showTodoView: function() {
            this.getRegion('main').show(new TodoView());
        }
    });

    module.exports = ExampleView;
});
