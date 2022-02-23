$(document).ready(function() {
    $('.banner .content').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 1000,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 4000,
    });
    $('.article .content').slick({
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        variableWidth: true,
    });
    $('.p-topFeature .content').slick({
        dots: false,
        arrows: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        // variableWidth: true,
        centerMode: true,
        centerPadding: '25%',
        responsive: [{
            breakpoint: 768,
            settings: {
                arrows: true,
                centerPadding: '30px',
            }
        }]
    });
});