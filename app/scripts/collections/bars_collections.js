(function () {
App.Collections.Bars= Parse.Collection.extend({

	model: App.Models.Bar,
	comparator: 'location',

});
}());