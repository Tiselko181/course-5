import $ from 'jquery';
import 'slick-carousel';

const menu = $('#menu');

console.log($('menu').hasClass('ddsdfds'));

let isFixed = false;


$(window).on('scroll', function () {
    if($(this).scrollTop() > 300 && !isFixed) {
        $(document.body).css('padding-top', menu.outerHeight(true));
        menu.css({
            position: 'fixed',
            top: 0,
            right: 0,
            left: 0,
            'background-color': 'white',
        });
        isFixed = true;
    }else if ($(this).scrollTop() <= 300 && isFixed) {
        $(document.body).css('padding-top', '');
        menu.css(

            'position', 'static',
        );
        isFixed = false;
    }
});

$('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 2,
    dots: true,
    nextArrow: '<button type="button" class="my-next">Next</button>',
});

$('.slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    console.log(event, slick, currentSlide, nextSlide);
});

setTimeout(function () {
    $('.slide').slick('slickGoTo', 4);
    console.log(111)
}, 5000);