jQuery(document).ready(function($){
  $('.bxslider').bxSlider({
        auto: true,
        autoControls: false,
        controls: false,
        autoHover:true,
  });
    
     $(".slider").bxSlider({
         auto:true,
         controls:false,
         pager:false,
         mode:"vertical",
         speed:300,
         pause:300,
         autoHover:true,
         randomStart:true,
     });
});