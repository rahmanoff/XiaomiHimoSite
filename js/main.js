$(function(){
    $('.bike-slider, .slider__items').slick({
        arrows: false,
        dots: true,
        fade: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000
      });

      $('.menu, .bike__column').on('click','a', function(event) {
        /*
        Be careful!!!
        Links to other sites will NOT work!!!
        s*/
        event.preventDefault();
        var id = $(this).attr('href'),
        top = $(id).offset().top;
        $('body, html').animate({scrollTop: top}, 1500);
      });
});