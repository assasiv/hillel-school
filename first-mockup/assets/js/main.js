$('.service-block_item .btn').click(function() {
  $('.contact-popup').addClass('active');

})

$('.contact-close').click(function() {
    $('.contact-popup').removeClass('active');
  })


// $('.service-block_item .btn').click(function(event) {
//     $(".contact-popup").fadeIn('4000');
// });

// $('.contact-close').click(function(event) {
//     $(".contact-popup").fadeOut('slow');
// });

$('#submit').click(function(){
    // find('input[type="submit"]')
    $('#submit').val('');
    $('.btn-progress').addClass('active');

    if($('#submit').val() == 'Sent') {
        $('.btn-progress').removeClass('active');}
 });







//  $('#submit').find('input[type="submit"]')
//                     .each(function () {
//                         $(this).val('');
//                     });


  


