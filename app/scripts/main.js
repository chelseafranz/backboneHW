var all_bars= new Bars();

all_bars.fetch().done( function(){
	var barsview = new BarsView({
	collection: all_bars,
	});
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

$('#searchButton').on('click', function(){
	var search= $('#searchInput').val();
		
		


		if(search == 'edgewood'){
			console.log('find');
		}else{
			console.log('what');
		}

});
