define(['handlebars'], function(Handlebars) {

this["JST"] = this["JST"] || {};

this["JST"]["example"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<header role=\"banner\"></header>\n<nav role=\"navigation\">\n    <a href=\"#home\">Home</a> |\n    <a id='todo' >Todo List</a> |\n    <a href=\"#jokes\">Jokes</a> |\n    <a href=\"#pizza\">Pizza</a>\n</nav>\n<section id=\"main\">d</section>\n<footer role=\"contentinfo\">\n    <a href=\"#\">"
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"name","hash":{},"data":data}) : helper)))
    + "</a> was made with <span style=\"color: red;font-weight: bold;\">❤</span> using <a href=\"https://github.com/omahajs/generator-omaha\">OMAHA JS</a>\n</footer>";
},"useData":true});

this["JST"]["todo"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "        <span class=\"todo-check checked icon\"></span>\n        <span class='todo-text cross-out'>"
    + container.escapeExpression(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"text","hash":{},"data":data}) : helper)))
    + "</span>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return "        <span class=\"todo-check unchecked icon\"></span>\n        <span class='todo-text'>"
    + container.escapeExpression(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"text","hash":{},"data":data}) : helper)))
    + "</span>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "<span class='todo-container' id="
    + container.escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + ">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.checked : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "    <span id='todo-icons'>\n        <span class=\"pencil icon\"></span>\n        <span class=\"bin icon\"></span>\n    </span>\n</span>";
},"useData":true});

this["JST"]["todoList"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h1>To Do List</h1>\n<div>\n    <input id='todo-input' type='text'></input>\n    <span class=\"plus icon\"></span>\n</div>\n<ul id='todo-list'></ul>";
},"useData":true});

return this["JST"];

});