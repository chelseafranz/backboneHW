(function () {

  App.Routers.AppRouter = Backbone.Router.extend({

    initialize: function () {

      Backbone.history.start();
    },

    routes: {
      '' : 'home',
     'edit/:id' : 'editBars',
     'add/:AddBar': 'addNewBar'
    },

    home: function () {
      new App.Views.AddBar();
      new App.Views.BarsView({ collection: App.Bars });
    },

    editBars: function (id) {
      console.log('edit bars');

      var b = App.Bars.get(id);

      new App.Views.OneBarView({ bar: b });
    },

    addNewBar: function(AddBar){
      var c = App.Bars.get(addBar);
      new App.Views.AddBar({ bar: c});
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
		alert(added+ 'has been added!')	

	},
});
}());
(function () {
App.Collections.Bars= Backbone.Collection.extend({

	model: App.Models.Bar,
	url: 'http://tiy-atl-fe-server.herokuapp.com/collections/mybars',
	comparator: 'location',

});
}());
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
		//empty input after subimt.save
	}

});
}());
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

(function () {
	
App.Views.BarsView= Backbone.View.extend({
	
	tagName: 'ul',
	className: 'bar',
	
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

(function () {
	$('.js-accordion-trigger').bind('click', function(e){
  jQuery(this).parent().find('.submenu').slideToggle('fast');  // apply the toggle to the ul
  jQuery(this).parent().toggleClass('is-expanded');
  e.preventDefault();
});


App.Bars= new App.Collections.Bars();

App.Bars.fetch().done( function(){
	App.router= new App.Routers.AppRouter
});


var self=this;

}());





// all_bars.find(function(x) {
//     return _.findWhere(x.get('location'), {'edgewood'});

// })




