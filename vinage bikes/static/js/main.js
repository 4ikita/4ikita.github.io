;
// Начинать писать отсюда!!!!
    if($('.slider__body').length>0){
        $('.slider__body').slick({
            autoplay: true,
            infinite: true,
            dots: true,
            arrows:false,
            adaptiveHeight: true,
            accessebility:false,
            slidesToShow: 1,
            autoplaySpeed: 300000,

        })
    };


    $('.wrapper').addClass('loaded');

    $('.icon-menu').click(function(event){
        $(this).toggleClass('active');
        $('.menu__body').toggleClass('active');
        $('body').toggleClass('lock');
    });
   function ibg(){

    let ibg=document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
    if(ibg[i].querySelector('img')){
    ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
    }
    }
    }
    
    ibg();
