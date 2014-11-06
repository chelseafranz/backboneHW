(function () {
App.Views.OneBarView= Backbone.View.extend({

	tagName: 'ul',
	className: 'oneBar',

	events: {
		'submit #updateBar' : 'updateBar',
		'click #delete' : 'deleteBar'
	},

	template: _.template($('#editBarTemplate').html()),

	initialize: function(options){
		this.options=options;
		this.render();

		$('#updateBar').empty();
		$('#barForm').html(this.$el);
	},

	render: function(){
		$('#barsList').empty();
		this.$el.empty();

      this.$el.html(this.template(this.options.bar.toJSON()));
	},

	// updateBar:

	// deleteBar:




  });
}());