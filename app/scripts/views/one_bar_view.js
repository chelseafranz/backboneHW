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

	updateBar:function (a){
		a.preventDefault();

		this.options.bar.set({
			name: $('#update_name').val(),
			location: $('#update_location').val(),
			type: $('#update_type').val(),
			specialties: $('#update_specialties').val()
		});
		this.$el.empty();
		this.options.bar.save();
		App.router.navigate('', {trigger: true});
	},

	deleteBar: function (){

		this.options.bar.destroy();
		App.router.navigate('', {trigger: true});
	}

  });
}());