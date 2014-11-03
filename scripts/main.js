var Bars= Backbone.Collection.extend({

	model: Bar,
	url: 'http://tiy-atl-fe-server.herokuapp.com/collections/mybars'

});
var Bar= Backbone.Model.extend({

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






var all_bars= new Bars();