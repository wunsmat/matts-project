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
        ui: {
            todoText: '.todo-text',
            todoCheck: '.todo-check',
            pencil: '.pencil',
            bin: '.bin'
        },
        events: {
            'click @ui.todoCheck': 'setTodoCheck',
            'click @ui.pencil': 'editTodoText',
            'blur @ui.todoText': 'setText'
        },
        triggers: {
            'click @ui.bin': 'remove:todo'
        },
        template: JST.todo,
        tagName: 'li',

        editTodoText: function() {
            this.ui.todoText.attr('contenteditable', 'true');
            this.ui.todoText.focus();
            this.ui.todoText.selectText();
        },

        setTodoCheck: function() {
            if(this.model.get('checked')) {
                this.model.set('checked', false);
            } else {
                this.model.set('checked', true);
            }
            this.render();
        },

        setText: function() {
            this.ui.todoText.attr('contenteditable', 'false');
            var newText = this.ui.todoText.text();
            if(newText !== this.model.get('text')) {
                this.model.set('text', newText);
            }
        }
    });

    var TodoCollectionView = Marionette.CollectionView.extend({
        tagName: 'ul',
        childView: TodoView,
        childViewEvents: {
            'remove:todo': 'removeTodo'
        },
        removeTodo: function(childView) {
            this.removeChildView(childView);
        }
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
        ui: {
            plus: '.plus',
            todoInput: '#todo-input'
        },
        events: {
            'click @ui.plus': 'addTodo'
        },
        regions: {
            ul: {
                el: 'ul',
                replaceElement: true
            }
        },
        initialize: function() {
            this.collection = new Backbone.Collection([
                {id: 1, text: 'Laundry', checked: true},
                {id: 2, text: 'Wash Car',  checked: false}
            ]);
        },
        addTodo: function() {
            console.log('Adding todo');
            this.collection.add({
                id: this.collection.length,
                text: this.ui.todoInput,
                checked: false
            });
            this.render();
        },
        onRender() {
            this.showChildView('ul', new TodoCollectionView({
                collection: this.collection
            }));
        }
    });

    module.exports = TodoManager;
});
