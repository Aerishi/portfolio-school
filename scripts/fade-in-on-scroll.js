$(document).on("scroll", function () {
    var pageTop = $(document).scrollTop();
    var pageBottom = pageTop + $(window).height();
    var toFadeIn = $(".fade-in");

    for (var i = 0; i < toFadeIn.length; i++) {
        var container = toFadeIn[i];
        if ($(container).position().top < pageBottom) {
            $(container).addClass("is-visible");
        } else {
            $(container).removeClass("is-visible");
        }
    }
});