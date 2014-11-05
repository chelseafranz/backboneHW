
(function () {

App.Bars= new App.Collections.Bars();

App.Bars.fetch().done( function(){
	App.router= new App.Routers.AppRouter
});


var self=this;

}());





// all_bars.find(function(x) {
//     return _.findWhere(x.get('location'), {'edgewood'});

// })




