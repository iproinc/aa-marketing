$(function() {
    //caches a jQuery object containing the header element
    var header = $(".right");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 1950) {
            header.addClass("fixed");
        }
        if (scroll <= 1950) {
            header.removeClass("fixed");
        }
    });
});
