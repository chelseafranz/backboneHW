
(function () {
App.Views.BarsView= Backbone.View.extend({

	tagName: 'ul',
	className: 'bar',

	initialize: function(){
		this.render();

      this.collection.off();
      this.collection.on('sync', this.render, this);

      // Get our Element On Our Page
      $('#barsList').html(this.$el);
	},

	render: function(){
		var self= this;

		this.$el.empty();

	this.collection.each(function(b){
	self.$el.append(self.template(b.toJSON()));
});

	return this;
	
	}

});
}());
