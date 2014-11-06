(function () {

  App.Routers.AppRouter = Backbone.Router.extend({

    initialize: function () {

      Backbone.history.start();
    },

    routes: {
      '' : 'home',
     'edit/:id' : 'editBars',
     'add/:addBar': 'addNewBar'
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

    addNewBar: function(addBar){
      var c = App.Bars.get(addBar);
      new App.Views.AddBar({ bar: c});
    }

  });

}());