define (require) ->
  ko = require 'knockout'

  PAGE =
    SETTINGS: "settings"
    TIMERS: "timers"
    MAIN:   "main"

  class Main_App
    constructor: ->
      #To magic here
      #@page = ko.observable PAGE.TIMERS
      @page = ko.observable PAGE.MAIN

    Open_Settings: (d, e) =>
      @page PAGE.SETTINGS

    Open_Timers: (d, e) =>
      @page PAGE.TIMERS

    Open_Main: (d, e) =>
      @page PAGE.MAIN

    CalibrateBtn: () =>
      return



  return new Main_App()