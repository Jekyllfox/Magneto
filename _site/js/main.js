
// Preloader
  $(window).on('load',function(){
   $('.cssload-loader').fadeOut('slow',function(){
   $('.preloader').remove();
 });
  });


  // wow initilize
  new WOW().init();
