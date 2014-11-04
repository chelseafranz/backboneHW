var all_bars= new Bars();

all_bars.fetch().done( function(a){
	var barsview = new BarsView({
	collection: all_bars,
	});

var findWhere=all_bars.where({location: 'edgewood'});
console.log(findWhere);

});


var self=this;

$('#nameButton').on('click', function(a){
	a.preventDefault;
	var newBarName= $('#nameofBar').val();
	var newBarLocation=$('#locationofBar').val();
	var newBartype=$('#typeofBar').val();
	var newBarSpecialties=$('#specialtiesofBar').val();

	var newBar= new Bar({
		name: newBarName,
		location: newBarLocation,
		type: newBartype,
		specialties: newBarSpecialties

	});
	all_bars.add(newBar);
	newBar.save();

});





// $('#searchButton').on('click', function(){
// 	var search= $('#searchInput').val();
// 	var barsList;

// 	all_bars.fetch().done(function(){
// 		barsList= new BarsView({
// 		collection: all_bars
// 	});

// 	});
		
// });

// });

// all_bars.find(function(x) {
//     return _.findWhere(x.get('location'), {'edgewood'});

// })




