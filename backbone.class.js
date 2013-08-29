if(Backbone.Class) throw new Error("Something already exists at Backbone.Class!!")
Backbone.Class = function(){ this.initialize.apply(this, arguments) };
Backbone.Class.extend = Backbone.Model.extend;
_.extend(Backbone.Class.prototype, Backbone.Events);
Backbone.Class.prototype.initialize = function(){};
Backbone.Class.define = function(definition){
  var klass = this.extend(definition);
  return new klass();
}