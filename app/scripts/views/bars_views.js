
(function () {
	
App.Views.BarsView= Backbone.View.extend({
	
	tagName: 'ul',
	className: 'bar',

	comparator: 'location',
	
	events:{
		'dblclick li': 'goodbye'
	},

	template: _.template($('#bars').html()),

	initialize: function(){

		this.render();

      this.collection.off();
      this.collection.on('sync', this.render, this);

      // Get our Element On Our Page
      $('#barsList').html(this.$el);
	},

	// comparator: 'location',

	goodbye: function(){
		console.log('goodbye');
	},

	render: function() {
		var self= this;

		this.$el.empty();

	this.collection.each(function (b) {
	self.$el.append(self.template(b.toJSON()));
	});

	return this;
	
	}

});
}());

  //   render: function () {
  //     var self = this;

  //     // Empty out 
  //     this.$el.empty();

  //     this.collection.each(function (c) {
  //       self.$el.append(self.template(c.toJSON()));
  //     });

  //     return this;
  //   }

  // });