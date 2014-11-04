var all_bars= new Bars();
var newSearch;
var searchResults=[];

$('#searchButton').on('click', function(){
	newSearch= $('#searchInput').val();

var findbars=all_bars.where({location: newSearch});
console.log(findbars);

findbars.forEach(function (a){
	var b= a.get('name');
	console.log(b);
	searchResults.push(b);
	console.log(searchResults);
	$('.listofResults').html('<li class="results">' + searchResults + '</li>');
});
});

all_bars.fetch().done( function(a){
	var barsview = new BarsView({
	collection: all_bars,
	});
});

// var findbars=all_bars.where({location: newSearch});
// console.log(findbars);


// findbars.forEach(function (a){
// 	var b= a.get('name');
// 	console.log(b);
// });










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




