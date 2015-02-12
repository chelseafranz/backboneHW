(function () {

  App.Routers.AppRouter = Parse.Router.extend({

    initialize: function () {

      Parse.history.start();
    },
    

    routes: {
      '' : 'home',
     'edit/:id' : 'editBars',
     'add/:AddBar': 'addNewBar'
    },

    home: function () {
      new App.Views.AddBar();
      new App.Views.BarsView({ collection: App.Bars });
    },

    editBars: function (id) {
      console.log('edit bars');

      var b = App.Bars.get(id);

      new App.Views.OneBarView({ bar: b });
    },

    addNewBar: function(AddBar){
      var c = App.Bars.get(addBar);
      new App.Views.AddBar({ bar: c});
    }

  });

}());