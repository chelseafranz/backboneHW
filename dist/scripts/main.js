(function () {

  App.Routers.AppRouter = Backbone.Router.extend({

    initialize: function () {
      // Light the Fire
      Backbone.history.start();
    },

    routes: {
      '' : 'home',
     'edit/:id' : 'editBars'
    },

    home: function () {
      new App.Views.AddBar();
      new App.Views.BarsView({ collection: App.Bars });
    },

    editBars: function (id) {

      var b = App.Bars.get(id);

      new App.Views.OneBarView({ bar: b });
    }

  });

}());
(function () {
App.Models.Bar= Backbone.Model.extend({

	defaults:{
		name:'',
		location:'',
		type: '',
		specialties: ''
	},

	idAttribute: '_id',

	initialize: function () {
		var added= this.get('name');
		console.log(added + ' has been added');	

	},
});
}());
(function () {
App.Collections.Bars= Backbone.Collection.extend({

	model: App.Models.Bar,
	url: 'http://tiy-atl-fe-server.herokuapp.com/collections/mybars'

});
}());
(function () {

App.Views.AddBar = Backbone.View.extend({

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
		e.preventDefault();

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
// (function () {
// App.Views.OneBarView= Backbone.View.extend({
	
// }());

(function () {
App.Views.BarsView= Backbone.View.extend({

	tagName: 'ul',
	className: 'bar',

	events:{},

	template: _.template($('#bars').html()),

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


(function () {

App.Bars= new App.Collections.Bars();

App.Bars.fetch().done( function(){
	
});


var self=this;

}());





// all_bars.find(function(x) {
//     return _.findWhere(x.get('location'), {'edgewood'});

// })




