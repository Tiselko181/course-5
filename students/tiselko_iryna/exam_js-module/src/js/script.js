import $ from "jquery";
import "slick-carousel";



$('.hero-slider').slick({
    dots: true,
    vertical: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    verticalSwiping: false,
    arrows: false,
    autoplay: true,
    pauseOnFocus: false,
});

$('.news__row').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    autoplay: true,
    infinite: true,
    variableWidth: true,
    prevArrow: `<button type="button" class="slick-prev"><svg class="icon">
    <use xlink:href="#arrow"></use></svg></button>`,
    nextArrow: `<button type="button" class="slick-next"><svg class="icon">
    <use xlink:href="#arrow"></use></svg></button>`,
});


// burger menu
const menu = $('.menu__list');
let isOpenMenu = false;

menu.on('transitionend', function () {
    if (!isOpenMenu) {
        menu.css({ display: '' });
    }
});

$('.menu-open-btn').on('click', function (e) {
    e.preventDefault();

    if (!isOpenMenu) {
        menu.css({ display: 'flex' });
        setTimeout(function () {
            $(this).closest('.menu').toggleClass('_open', !isOpenMenu);

            isOpenMenu = true;
        }.bind(this), 0);
        return;
    }

    $(this).closest('.menu').toggleClass('_open', !isOpenMenu);

    isOpenMenu = false;
})


// bg-menu-scroll
const header = $('.header');

let isHeaderBg = false;

const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.25,
};

const callback = function (entries, observer) {
    entries.forEach((entry) => {
        if (entry.boundingClientRect.top < -20 && !entry.isIntersecting && !isHeaderBg) {
            header.addClass('bg-header');
            isHeaderBg = true;

            return;
        }

        if (entry.boundingClientRect.top < -20 && entry.isIntersecting && isHeaderBg) {
            header.removeClass('bg-header');
            isHeaderBg = false;
        }
    })
};


const observer = new IntersectionObserver(callback, options);
const target = document.querySelector(".hero");
observer.observe(target);



// scroll to top
const body = $("html, body");
const scrollToTopBtn = document.querySelector('.scroll-to-top');

const optionsScroll = {
    root: null,
    rootMargin: '-150px',
    threshold: .1
};

function scrollToTop([entry], observer) {
    if (entry.isIntersecting === true) {
        scrollToTopBtn.classList.add('show-scroll');
    } else {
        scrollToTopBtn.classList.remove('show-scroll');
    }
};


const observerScroll = new IntersectionObserver(scrollToTop, optionsScroll);
const scrollTarget = document.querySelector('.gallery');
observerScroll.observe(scrollTarget);

$('.scroll-to-top').on('click', function (e) {
    e.preventDefault();

    body.stop().animate({ scrollTop: 0 }, 200);
});