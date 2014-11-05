(function () {

App.Views.AddBar = Backbone.View.extend({

	events: {
		'submit #addBar' : 'addBar'

	},

	initialize: function(){
		this.render();
		$('#barForm').html(this.$el);
	},

	render: function (){
		this.$el.html($('#addTemplate').html());
	},

	addBar: function(e){
		e.preventDefault();

		var b= new App.Models.Bar({
			name: $('#bar_name').val(),
			location: $('#bar_location').val(),
			type: $('#bar_type').val(),
			specialties: $('#bar_specialties').val()
		});

		App.Bars.add(b).save();
	}

});
}());