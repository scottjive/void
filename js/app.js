// Filename: app.js
define([
  'jquery',
  'underscore',
  'backbone',
  'router', // Request router.js
], function($, _, Backbone, Router){
  var initialize = function(){
    // Pass in our Router module and call it's initialize function
    Router.initialize();
  }

  return {
    initialize: initialize
  };
});

/*
define([
  'jquery',
  'underscore',
  'backbone',
  'bootstrap' // Request router.js
   ], function($, _, Backbone){
    var 
    $(".main.menu nav li a").on("click",function(){
      if(!$(".main.menu").first().hasClass("up")){
        $(".main.menu .col-xs-6.tab-content").animate({opacity: 1}, 200);
        $("body>.container-fluid .row.white").animate({opacity: 1, marginTop: "0px"}, 200).addClass("down");
        $(".main.menu").animate({height:"90vh"},200).addClass("up");
        $(".main.menu nav li a:not(:first)").off("click");
      }
    });

    $("body>.container-fluid .row.white").on("click",function(){
      $("body>.container-fluid .row.white").animate({opacity: 0, marginTop: "-10vh"}, 200).removeClass("down");
      $(".main.menu").animate({height:"150px"},200).removeClass("up");
        $(".main.menu .col-xs-6.tab-content").animate({opacity: 0}, 200);


      $(".main.menu nav li a").on("click",function(){
        if(!$(".main.menu").first().hasClass("up")){
        $(".main.menu .col-xs-6.tab-content").animate({opacity: 1}, 200);
          $("body>.container-fluid .row.white").animate({opacity: 1, marginTop: "0px"}, 200).addClass("down");
          $(".main.menu").animate({height:"90vh"},200).addClass("up");
          $(".main.menu nav li a:not(:first)").off("click");
        }
      });

    });

});

*/