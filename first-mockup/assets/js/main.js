$('.service-block_item .btn').click(function() {
  $('.contact-popup').addClass('active');

})

$('.contact-close').click(function() {
    $('.contact-popup').removeClass('active');
})

$('.contact-close').click(function() {
    $('.contact-popup').removeClass('active');
})

$('#submit').click(function() {
  $('#submit').val('');
  $('.btn-progress').addClass('active');
  setTimeout(() => {
      $('.btn-progress').removeClass('active');
      $('#submit').val("Sent");
      $('#submit').addClass('sent');
      $('#submit').attr('disabled', true);
  }, 3000);
});

$(".contact-input").keyup(function(event) {
  if ($(".contact-input").attr('invalid', true)) {
    $(".btn-progress").addClass('invalid');
    console.log ('just do it')
  }
});


 $('#slider').slick({
   dots: true,
   arrows: false,
 });

 $('#slider-main').slick({
  dots: true,
  arrows: false,
});

$('#articles').click(function() {
  $("div.blog-toggle").removeClass("active"); 
  $("#articles").addClass("active"); 
  $(".blog-news").addClass("hidden"); 
 });

 $('#news').click(function() {
  $("div.blog-toggle").removeClass("active"); 
  $("#news").addClass("active"); 
  $(".blog-news").removeClass("hidden"); 
 });




$('#benf-1').click(function() {
  console.log("text");
  $("h3.abt-title").removeClass("active"); 
  $('#benf-1').addClass('active');
  $('#about-title').text('We turn the idea of legal services');
  $( "#about-txt" ).text("Consolidating many years of experience and practice, the company's lawyers accompany complex projects and achieve a number of important decisions for the industry. Many of them form the practice of applying the law of the sea in Ukraine.");

 });

$('#benf-2').click(function() {
  console.log("text");
  $("h3.abt-title").removeClass("active"); 
  $('#benf-2').addClass('active');
  $('#about-title').text('Lorem ipsum dolor sit amet consectetur adipisic');
  $( "#about-txt" ).text("Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus minus illum ad molestiae cumque debitis numquam laboriosam! Soluta fugiat ex sequi praesentium officiis beatae sint nemo, omnis aliquam, consequuntur maxime.");

 });

 $('#benf-3').click(function() {
  console.log("text");
  $("h3.abt-title").removeClass("active"); 
  $('#benf-3').addClass('active');
  $('#about-title').text('Necessitatibus minus illum ad molestiae cumque debitis numquam');
  $( "#about-txt" ).text("Necessitatibus minus illum ad molestiae cumque debitis numquam laboriosam! Soluta fugiat ex sequi praesentium officiis beatae sint nemo, omnis aliquam, consequuntur maxime.Lorem ipsum dolor sit amet consectetur adipisicing elit. ");

 });

 $('#benf-2').click(function() {
  console.log("text");
  $("h3.abt-title").removeClass("active"); 
  $('#benf-2').addClass('active');
  $('#about-title').text('Lorem ipsum dolor sit amet consectetur adipisic');
  $( "#about-txt" ).text("Soluta fugiat ex sequi praesentium officiis beatae sint nemo, omnis aliquam, consequuntur maxime.Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus minus illum ad molestiae cumque debitis numquam laboriosam!");

 });

 $('#benf-4').click(function() {
  console.log("text");
  $("h3.abt-title").removeClass("active"); 
  $('#benf-4').addClass('active');
  $('#about-title').text('Soluta fugiat ex sequi praesentium officiis beatae sint nemo, omnis aliquam, consequuntur maxime');
  $( "#about-txt" ).text("Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus minus illum ad molestiae cumque debitis numquam laboriosam! Soluta fugiat ex sequi praesentium officiis beatae sint nemo, omnis aliquam, consequuntur maxime.");

 });











//  $('#submit').find('input[type="submit"]')
//                     .each(function () {
//                         $(this).val('');
//                     });


  


