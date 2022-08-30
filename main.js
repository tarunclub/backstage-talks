var $target = $(".container");
inView(".section").on("enter", function (el) {
  var color = $(el).attr("data-background-color");
  $target.css("background-color", color);
});
