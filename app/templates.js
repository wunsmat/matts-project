define(['handlebars'], function(Handlebars) {

this["JST"] = this["JST"] || {};

this["JST"]["example"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<header role=\"banner\"></header>\n<nav role=\"navigation\">\n    <a href=\"#home\">Home</a> |\n    <a id='todo' >Todo List</a> |\n    <a href=\"#jokes\">Jokes</a> |\n    <a href=\"#pizza\">Pizza</a>\n</nav>\n<section id=\"main\">d</section>\n<footer role=\"contentinfo\">\n    <a href=\"#\">"
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"name","hash":{},"data":data}) : helper)))
    + "</a> was made with <span style=\"color: red;font-weight: bold;\">❤</span> using <a href=\"https://github.com/omahajs/generator-omaha\">OMAHA JS</a>\n</footer>";
},"useData":true});

this["JST"]["todo"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<span id="
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + ">"
    + alias4(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data}) : helper)))
    + "</span>";
},"useData":true});

this["JST"]["todoList"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h1>To Do List</h1>\n<ul id='todo-list'></ul>";
},"useData":true});

return this["JST"];

});