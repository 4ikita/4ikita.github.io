;
// Начинать писать отсюда!!!!
$(document).ready(function() {

    // Slider at the main page 
   $('.slider1').bxSlider({
       pagerCustom: '.js-slider__pager',
       controls: false,
       auto: true,
       stopAutoOnClick: true,
       pager: true
   });

   $('.slider2').bxSlider({
    pagerCustom: '.js-slider__pager',
    controls: false,
    auto: true,
    stopAutoOnClick: true,
    pager: true
});

$('.slider3').bxSlider({
    pagerCustom: '.js-slider__pager',
    controls: false,
    auto: true,
    stopAutoOnClick: true,
    pager: true
});
});