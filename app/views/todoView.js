/**
 * @file Todo MarionetteJS View module
 * @author A. Developer
 * @module views/todoView
 * @requires models/todoModel
**/
define(function(require, exports, module) {
    'use strict';

    var Marionette = require('backbone.marionette');
    var Backbone   = require('backbone');
    var JST        = require('templates');

    var TodoView = Marionette.View.extend({
        //view code goes here
        template: JST.todo,
        tagName: 'li',
        initialize: function() {
            console.log('flag');
        }
    });

    var TodoCollectionView = Marionette.CollectionView.extend({
        tagName: 'ul',
        childView: TodoView
    });

    /**
     * @name TodoCollectionView
     * @description TodoCollectionView view
     * @constructor
     * @extends Marionette.View
    **/
    var TodoManager = Marionette.View.extend({
        //view code goes here
        tagName: 'section',
        template: JST.todoList,
        regions: {
            ul: {
                el: 'ul',
                replaceElement: true
            }
        },
        initialize: function() {
            console.log('flag');
        },
        onRender() {
            const list = new Backbone.Collection([
                {id: 1, text: 'Laundry'},
                {id: 2, text: 'Wash Car'}
            ]);
            this.showChildView('ul', new TodoCollectionView({
                collection: list
            }));
        }
    });

    module.exports = TodoManager;
});
