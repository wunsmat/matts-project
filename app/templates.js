define(['handlebars'], function(Handlebars) {

this["JST"] = this["JST"] || {};

this["JST"]["example"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<header role=\"banner\"></header>\n<nav role=\"navigation\">\n    <a href=\"/home/\">Home</a> |\n    <a href=\"/fun/\">Fun</a> |\n    <a href=\"/jokes/\">Jokes</a> |\n    <a href=\"/pizza/\">Pizza</a>\n</nav>\n<section id=\"main\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut volutpat est. Duis sed vulputate elit. Praesent a viverra enim. Pellentesque ante sapien, mollis vel mollis eget, fermentum at eros. Nam lacus justo, laoreet eu justo ac, tempor consequat leo. Aliquam non ipsum eget dui placerat tincidunt nec non odio. Duis tempus ipsum et orci semper, ac molestie enim tempor. Suspendisse potenti. Pellentesque magna urna, vehicula vel mattis at, lacinia eget velit. Quisque vitae pharetra elit. Phasellus sed quam sit amet tellus iaculis ultricies vel in tortor. Fusce rutrum efficitur vestibulum. Etiam a velit eu augue varius condimentum. Nullam quis volutpat leo, eu pretium diam. Curabitur mauris sapien, dapibus quis nisi sed, aliquam dictum sapien. Duis ultrices blandit vestibulum. Aliquam id nibh nec massa sodales sagittis et vitae nulla. Morbi bibendum lobortis purus sed varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in ultrices nunc. Nunc mollis, odio eget condimentum laoreet, eros quam congue nisi, vel ultricies velit leo at ante. Donec pretium velit dui, vitae varius odio egestas quis.</section>\n<footer role=\"contentinfo\">\n    <a href=\"#\">"
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"name","hash":{},"data":data}) : helper)))
    + "</a> was made with <span style=\"color: red;font-weight: bold;\">❤</span> using <a href=\"https://github.com/omahajs/generator-omaha\">OMAHA JS</a>\n</footer>";
},"useData":true});

return this["JST"];

});