(function() {
  var bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  define(function(require) {
    var $, Menu, PAGE, ko;
    ko = require('knockout');
    $ = require("jquery");
    PAGE = {
      SETTINGS: "settings",
      TIMERS: "timers",
      MAIN: "main"
    };
    Menu = (function() {
      function Menu() {
        this.CalibrateBtn = bind(this.CalibrateBtn, this);
        this.Open_Main = bind(this.Open_Main, this);
        this.Open_Timers = bind(this.Open_Timers, this);
        this.Open_Settings = bind(this.Open_Settings, this);
        this.page = ko.observable(PAGE.MAIN);
      }

      Menu.prototype.Open_Settings = function(d, e) {
        return this.page(PAGE.SETTINGS);
      };

      Menu.prototype.Open_Timers = function(d, e) {
        return this.page(PAGE.TIMERS);
      };

      Menu.prototype.Open_Main = function(d, e) {
        return this.page(PAGE.MAIN);
      };

      Menu.prototype.CalibrateBtn = function(d, e) {
        return this.page(PAGE.SETTINGS);
      };

      return Menu;

    })();
    return new Menu();
  });

}).call(this);
