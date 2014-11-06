(function () {
App.Collections.Bars= Backbone.Collection.extend({

	model: App.Models.Bar,
	url: 'http://tiy-atl-fe-server.herokuapp.com/collections/mybars',
	comparator: 'location',

});
}());