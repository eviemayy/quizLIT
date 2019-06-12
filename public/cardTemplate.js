(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['card'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<article class=\"flash-card\">\r\n    <p class=\"front term visible\"> "
    + alias4(((helper = (helper = helpers.term || (depth0 != null ? depth0.term : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"term","hash":{},"data":data}) : helper)))
    + "</p>\r\n    <p class=\"back definition hidden\"> "
    + alias4(((helper = (helper = helpers.definition || (depth0 != null ? depth0.definition : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"definition","hash":{},"data":data}) : helper)))
    + " </p>\n</article>\n";
},"useData":true});
})();