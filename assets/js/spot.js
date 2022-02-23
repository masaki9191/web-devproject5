$(document).ready(function() {
    $('.slider-main_container').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav_container'
    });
    $('.slider-nav_container').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.slider-main_container',
        dots: false,
        arrows: true
    });
});