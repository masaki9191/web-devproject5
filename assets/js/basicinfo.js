$(document).ready(function() {
    $('.order').click(function() {
        var id = $(this).attr("data-id");
        $("." + id).toggleClass("active");
        var top = $("#" + id).offset().top;
        top -= 105;
        $('html, body').animate({
            scrollTop: top
        }, 500);
    });
    $('.order').hover(function() {
        var id = $(this).attr("data-id");
        $(".c-map-piece .item").removeClass("active");
        $("." + id).toggleClass("active");
    });
    $('.order').mouseleave(function() {
        $(".c-map-piece .item").removeClass("active");
    });
});