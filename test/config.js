var tests = [];
for (var file in window.__karma__.files) {
    // Our test modules are named "<something>Spec.js"
    // If you decide to change the format of the file name this Regex
    // must reflect it.
    if (/\.spec\.js$/.test(file)) {
        tests.push(file);
    }
}

requirejs.config({
    // Karma serves files from '/base'
    baseUrl: '/base/./app',
    deps: tests,
    paths: {
        //Project Dependencies
        handlebars: '../node_modules/handlebars/dist/handlebars',
        //Backbone Libraries, Frameworks and Dependencies
        jquery:                '../node_modules/jquery/dist/jquery',
        underscore:            '../node_modules/underscore/underscore',
        'backbone':            '../node_modules/backbone/backbone',
        'backbone.radio':      '../node_modules/backbone.radio/build/backbone.radio',
        'backbone.marionette': '../node_modules/backbone.marionette/lib/backbone.marionette',
        //Helpers and extensions
        'handlebars.helpers': './helpers/handlebars.helpers',
        'jquery.extensions':  './helpers/jquery.extensions',
        'underscore.mixins':  './helpers/underscore.mixins',
        // Testing dependencies (Mocha is loaded by Karma plugin)
        sinon: '../node_modules/sinon/pkg/sinon',
        chai:  '../node_modules/chai/chai'
    },
    // start test run, once Require.js is done
    callback: window.__karma__.start
});
