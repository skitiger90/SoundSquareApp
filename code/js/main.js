(function() {
  var bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  define(function(require) {
    var $, Main_Page, ko, menu;
    ko = require('knockout');
    $ = require("jquery");
    menu = require("menu");
    Main_Page = (function() {
      function Main_Page() {
        this.SoundOnOffBtn = bind(this.SoundOnOffBtn, this);
        this.CalibrateBtn = bind(this.CalibrateBtn, this);
        this.HelpBtn = bind(this.HelpBtn, this);
        this.SettingsBtn = bind(this.SettingsBtn, this);
      }

      Main_Page.prototype.SettingsBtn = function() {
        return menu.Open_Settings();
      };

      Main_Page.prototype.HelpBtn = function() {
        return menu.Open_Help();
      };

      Main_Page.prototype.CalibrateBtn = function() {
        return menu.CalibrateBtn();
      };

      Main_Page.prototype.SoundOnOffBtn = function() {};

      return Main_Page;

    })();
    return new Main_Page();
  });

}).call(this);
