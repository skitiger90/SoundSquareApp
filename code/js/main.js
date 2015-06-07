(function() {
  var bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  define(function(require) {
    var $, Main_Page, PAGE, ko;
    ko = require('knockout');
    $ = require("jquery");
    PAGE = {
      SETTINGS: "settings",
      TIMERS: "timers",
      MAIN: "main"
    };
    Main_Page = (function() {
      function Main_Page() {
        this.CalibrateBtn = bind(this.CalibrateBtn, this);
        this.Open_Main = bind(this.Open_Main, this);
        this.Open_Timers = bind(this.Open_Timers, this);
        this.Open_Settings = bind(this.Open_Settings, this);
        this.page = ko.observable(PAGE.MAIN);
      }

      Main_Page.prototype.Open_Settings = function(d, e) {
        return Main_App.page = 'settings';
      };

      Main_Page.prototype.Open_Timers = function(d, e) {
        return this.page(PAGE.TIMERS);
      };

      Main_Page.prototype.Open_Main = function(d, e) {
        return this.page(PAGE.MAIN);
      };

      Main_Page.prototype.CalibrateBtn = function(d, e) {
        return this.page(PAGE.SETTINGS);
      };

      return Main_Page;

    })();
    return new Main_Page();
  });

}).call(this);
