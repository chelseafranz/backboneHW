var BarsView= Backbone.View.extend({

	tagName: 'ul',
	className: 'bar',

	initialize: function(options){
		this.render(options.collection)
	},

	render: function(collection){
		var self= this;


	var template= $('#bars').html();
	var rendered= _.template(template);

	_.each(collection.models, function(x){

		self.$el.append(rendered(x.attributes));
	});

	$('.listofBars').html(this.el);
	return this;
	}

});

