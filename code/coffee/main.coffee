# MAIN.COFFEE

define (require) ->
  ko = require 'knockout'
  $ = require "jquery"
  menu = require "menu"

  # PAGE =
  #   SETTINGS: "settings"
  #   TIMERS: "timers"
  #   MAIN:   "main"

  class Main_Page
    constructor: ->
      #To magic here
      #@page = ko.observable PAGE.TIMERS

    SettingsBtn: =>
      menu.Open_Settings()

    HelpBtn: =>
      menu.Open_Help()
    # Open_Timers: (d, e) =>
    #   window.navigator?.vibrate? 3000   # DON'T EXECUTE IF FIELDS DONT EXIST
    #   @page PAGE.TIMERS

    # Open_Main: (d, e) =>
    #   @page PAGE.MAIN

    CalibrateBtn: =>
      menu.CalibrateBtn()

    SoundOnOffBtn: =>
    #   menu.Open_Settings()

  return new Main_Page()