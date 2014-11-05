
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




