/**
 * @file Example model and collection module
 * @author A. Developer
 * @module models/example
 * @requires app
**/
define(function(require, exports) {
    'use strict';

    var Backbone = require('backbone');
    var WebApp   = require('app');

    /**
     * @name ExampleModel
     * @description Example model
     * @constructor
     * @extends Backbone.Model
     * @prop {objects} defaults
     * @prop {string} defaults.name
    **/
    var ExampleModel = Backbone.Model.extend({
        defaults: {
            name: WebApp.model.get('name')
        }
    });
    /**
     * @name ExampleCollection
     * @description Example collection
     * @constructor
     * @extends Backbone.Collection
     * @prop {ExampleModel} model
    **/
    var ExampleCollection = Backbone.Collection.extend({
        model: ExampleModel
    });

    exports.Model = ExampleModel;
    exports.Collection = ExampleCollection;
});
