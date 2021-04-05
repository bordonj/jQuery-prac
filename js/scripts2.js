$(document).ready(function() {
  $("p#walrus").click(function() {
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();
  });

  $("p#doggy").click(function() {
    $("#doggy-showing").toggle();
    $("#doggy-hidden").toggle();
  });

  $('#hide').click(function() {
    $('p#all-img').hide();
  });
  $('#show').click(function() {
    $('p#all-img').show();
  })
});


// $("p").click(function() {
//   $("#walrus-showing").slideToggle();
//   $("#walrus-hidden").slideToggle();
//   $("#doggy-showing").fadeToggle();
//   $("#doggy-hidden").fadeToggle();
// });