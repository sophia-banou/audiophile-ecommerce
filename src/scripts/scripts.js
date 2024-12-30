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
      if (!$("#mobilemenu").hasClass("active")) {
        $("#mobilemenu").addClass("active");
        $("#mobilemenu").show();
        $("#mobileoverlay").show();
        $("body").css("position", "fixed");
      } else {
        $("#mobilemenu").removeClass("active");
        $("#mobilemenu").hide();
        $("#mobileoverlay").hide();
        $("body").css("position", "static");
      }
    },
  });

  $(window).resize(function () {
    $("#mobilemenu").hide();
    $("#mobileoverlay").hide();
    $("body").css("position", "static");
  });
});

$(document).on("ready", function () {
  // initialization of aos
  AOS.init({
    duration: 650,
    once: true,
  });
});
