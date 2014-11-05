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
      new App.Views.ListBar({ collection: App.bars });
    },

    editBars: function (id) {

      var b = App.bars.get(id);

      new App.Views.SingleBar({ bar: b });
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

// render: function () {
//       var self = this;

//       // Empty out 
//       this.$el.empty();

//       this.collection.each(function (c) {
//         self.$el.append(self.template(c.toJSON()));
//       });

//       return this;
//     }

(function () {

App.Bars= new App.Collections.Bars();

App.Bars.fetch().done( function(){
	App.Views.BarsView = new App.Views.BarsView({
	// collection: all_bars,
	});
});


var self=this;

$('#nameButton').on('click', function(a){
	a.preventDefault;
	var newBarName= $('#nameofBar').val();
	var newBarLocation=$('#locationofBar').val();
	var newBartype=$('#typeofBar').val();
	var newBarSpecialties=$('#specialtiesofBar').val();

	App.Models.newBar= new App.Models.Bar({
		name: newBarName,
		location: newBarLocation,
		type: newBartype,
		specialties: newBarSpecialties

	});
	App.Bars.add(App.Models.newBar);
	App.Models.newBar.save();

});

// App.Bars.fetch().done(function(){
// 		barsList= new App.Views.BarsView({
	
// 	});

}());




// $('#searchButton').on('click', function(){
// 	var search= $('#searchInput').val();
// 	var barsList;



// 	});
		
// });

// });

// all_bars.find(function(x) {
//     return _.findWhere(x.get('location'), {'edgewood'});

// })




