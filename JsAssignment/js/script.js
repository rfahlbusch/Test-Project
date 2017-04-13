// greyscale and blur

//$(document).ready(function() {
//            $('filter2').click(function() {
//                $(this).addClass('.filter');
//  });
// });     




$('img').click(function (){
  $(this).addClass('.filter');
});

$('img').click(function (){
  $(this).addClass('filter');
});

$().data('key');
$().data('key', 'value')



// trying to make it bigger


//$('enlarge').ready(function(){
//  $('img').click(function() {
//   $(this).height(400);
//   $(this).width(400);
//   $(this).off(); 
//}); 

$('img').click(function() {
    $(this).height(400);
    $(this).width(400);
    $(this).off(); 
})


// hide images associated with datafilter 1

$('img[data-filter="1"]').click(function (){
  $(this).addClass('.hide');
});

$('img[data-filter="1"]').click(function (){
  $(this).addClass('hide');
});

$().data('key');
$().data('key', 'value')



// below is the reset ... 

$(document).ready(function() {
  $('#reset').click(function() {
  location.reload();
  });
 });     