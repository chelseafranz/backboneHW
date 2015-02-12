Parse.initialize("f81UbbrmBBfy4h9hU5eB3014AnU8n9jYSOBgQOdP", "IiTpkKDPfSuPONnAo3MxVB0sig7ycmX05gpYVgAe");
(function () {
	

App.Bars= new App.Collections.Bars();

App.Bars.fetch().done( function(){
	console.log('success');
	App.router= new App.Routers.AppRouter
});


var self=this;

}());





// all_bars.find(function(x) {
//     return _.findWhere(x.get('location'), {'edgewood'});

// })




