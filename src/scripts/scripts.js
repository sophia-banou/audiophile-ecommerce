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
});
