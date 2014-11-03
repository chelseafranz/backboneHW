var barsView= Backbone.Views.extend({

	tagName: 'ul',
	className: 'bar'

	initialize: function(options){
		this.render(options.collection)
	};

	render: function(collection){
		var self= this;


	var template= $('#barsList').html();
	var rendered= _.template(template);
	}



});