(function() {
  var bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  define(function(require) {
    var Main_App, PAGE, ko;
    ko = require('knockout');
    PAGE = {
      SETTINGS: "settings",
      TIMERS: "timers",
      MAIN: "main"
    };
    Main_App = (function() {
      function Main_App() {
        this.CalibrateBtn = bind(this.CalibrateBtn, this);
        this.Open_Main = bind(this.Open_Main, this);
        this.Open_Timers = bind(this.Open_Timers, this);
        this.Open_Settings = bind(this.Open_Settings, this);
        this.page = ko.observable(PAGE.MAIN);
      }

      Main_App.prototype.Open_Settings = function(d, e) {
        return this.page(PAGE.SETTINGS);
      };

      Main_App.prototype.Open_Timers = function(d, e) {
        return this.page(PAGE.TIMERS);
      };

      Main_App.prototype.Open_Main = function(d, e) {
        return this.page(PAGE.MAIN);
      };

      Main_App.prototype.CalibrateBtn = function() {};

      return Main_App;

    })();
    return new Main_App();
  });

}).call(this);
