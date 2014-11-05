(function () {

App.Views.AddBar = Backbone.View.Extend({

	events: {
		'submit #AddBar' : 'addBar'

	},

	initialize: function(){
		this.render();
		$('#barForm').html(this.$el);
	},

	render: function (){
		this.$el.html($('#addTemplate').html());
	},

	addBar: function(e){
		e.preventDefault;

		var b= App.Models.Bar({
			name: $('#bar_name').val(),
			location: $('#bar_location').val(),
			type: $('#bar_type').val(),
			specialties: $('#bar_specialties').val()
		});

		App.Bars.add(b).save();
	}






});
}());