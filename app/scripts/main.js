
(function () {
	$('.js-accordion-trigger').bind('click', function(e){
  jQuery(this).parent().find('.submenu').slideToggle('fast');  // apply the toggle to the ul
  jQuery(this).parent().toggleClass('is-expanded');
  e.preventDefault();
});


App.Bars= new App.Collections.Bars();

App.Bars.fetch().done( function(){
	App.router= new App.Routers.AppRouter
});


var self=this;

}());





// all_bars.find(function(x) {
//     return _.findWhere(x.get('location'), {'edgewood'});

// })




