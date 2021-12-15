
$(document).ready(function(){
 alert ("helloo ssb")
});

// $(document).ready(function(){
//   $('.btn').click(function(){
//     alert("wellcome to ssb");
//   });

// });

// hide part
$(document).ready(function(){
  $('#hide').click(function(){
    $('img').hide(1000);
  });
// show
$('#show').click(function(){
  $('img').show(1000);
});
// toggle
$('#toggle').click(function(){
  $('img').toggle("slow");
});


});