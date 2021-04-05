$(document).ready(function() {
  $("p").click(function() {
    $("#walrus-showing").slideToggle();
    $("#walrus-hidden").slideToggle();
    $("#doggy-showing").fadeToggle();
    $("#doggy-hidden").fadeToggle();
  });
});