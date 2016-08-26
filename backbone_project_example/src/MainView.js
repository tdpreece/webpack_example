var Backbone = require('backbone');
var _ = require('underscore');

module.exports = Backbone.View.extend({

  tagName: "div",

  template: require('./MainView.html'),

  events: {
  },

  initialize: function() {
  },

  render: function() {
	this.$el.html(
        this.template({ 'msg': 'This is the Main View' }));
	return this;
  }

});
