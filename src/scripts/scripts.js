$(document).ready(function () {
  $(".ficon").on({
    mouseenter: function () {
      var source = $(this).attr("src");
      console.log(source);
      $(this).attr("src", source.replace(/\.svg$/, "-active.svg"));
    },
    mouseleave: function () {
      var source = $(this).attr("src");
      $(this).attr("src", source.replace(/-active\.svg$/, ".svg"));
    },
  });

  $(".hamburger").on({
    click: function () {
      if (!$("#mobilemenu").hasClass("active1")) {
        $("#mobilemenu").addClass("active1");
        $("#mobilemenu").show();
        $("#mobileoverlay").show();
        $("body").css("position", "fixed");
      } else {
        $("#mobilemenu").removeClass("active1");
        $("#mobilemenu").hide();
        $("#mobileoverlay").hide();
        $("body").css("position", "static");
      }
    },
  });

  $("#headercart").on({
    click: function () {
      if (!$("#cartmodal").hasClass("active1")) {
        $("#cartmodal").addClass("active1");
        $("#cartmodal").show();
        $("#cartoverlay").show();
        $("body").css("position", "fixed");
      } else {
        $("#cartmodal").removeClass("active1");
        $("#cartmodal").hide();
        $("#cartoverlay").hide();
        $("body").css("position", "static");
      }
    },
  });

  $(window).resize(function () {
    $("#mobilemenu").hide();
    $("#mobileoverlay").hide();
    $("body").css("position", "static");
  });

  $("#prev-nav").on({
    click: function (e) {
      e.preventDefault();
      window.history.back();
    },
  });
  $(".active").on({
    click: function (e) {
      e.preventDefault();
    },
  });
});
