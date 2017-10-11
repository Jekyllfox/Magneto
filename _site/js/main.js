
// Preloader
  $(window).on('load',function(){
   $('.cssload-loader').fadeOut('slow',function(){
   $('.preloader').remove();
   $(".navbar").addClass("fixed-top");

 });
  });


// Auto Type
var typed = new Typed('.type', {
  strings: [
    "Creative",
    "Responsive",
    "Multipurpose"
  ],
  typeSpeed:30,
  backSpeed:30,
  backDelay:1500,
  smartBackspace:true,
  backDelay:200,
  loop:true,
  showCursor:false
});


// Icon-bar Clicked
$('.navbar').on('click',function() {
  $('.navbar').css('background-color','rgba(0,0,0,0.5)');
  $('.icon-bar').css('color','#fff');
});



//Header Scroller
$(window).on('scroll', function () {
       if ($(".navbar").offset().top > 1) {
         $('.navbar').css('background-color','rgba(0,0,0,0.5)');
         $('.icon-bar').css('color','#fff');
       } else {
         $('.navbar').css('background-color','transparent');
       }
   });



//Carousel
$('.owl-carousel').owlCarousel({
    center:true,
    items:2,
    loop:true,
    margin:20,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

// Smooth Scroll
$(document).on('click', 'a', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 800);
});
