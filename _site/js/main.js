
// Auto Type
var typed = new Typed('.type', {
  strings: [
    "Creative",
    "Responsive",
    "Multipurpose"
  ],
  typeSpeed:50,
  backSpeed:30,
  backDelay:300,
  smartBackspace:true,
  backDelay:200,
  loop:true,
  showCursor:false
});


// Preloader
  $(window).on('load',function(){
   $('.cssload-loader').fadeOut('slow',function(){
   $('.preloader').remove();
 });
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
