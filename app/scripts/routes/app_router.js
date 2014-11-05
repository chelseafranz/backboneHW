(function () {

  App.Routers.AppRouter = Backbone.Router.extend({

    initialize: function () {
      // Light the Fire
      Backbone.history.start();
    },

    routes: {
      '' : 'home',
     'edit/:id' : 'editBars'
    },

    home: function () {
      new App.Views.AddBar();
      new App.Views.BarsView({ collection: App.Bars });
    },

    editBars: function (id) {

      var b = App.Bars.get(id);

      new App.Views.OneBarView({ bar: b });
    }

  });

}());