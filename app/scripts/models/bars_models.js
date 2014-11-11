(function () {
App.Models.Bar= Parse.Object.extend({
	className: 'Bar',
	idAttribute: 'objectId',
	defaults:{
		name:'',
		location:'',
		type: '',
		specialties: ''
	},

	
	initialize: function () {
		var added= this.get('name');
		console.log(added + ' has been added');
		

	},
});
}());