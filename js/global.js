///#source 1 1 /js/custom.js

///#source 1 1 /js/modern-business.js
$(function() {
    // Activates the Carousel
    $('.carousel').carousel({
        interval: 5000
    });

    // Activates Tooltips for Social Links
    $('.tooltip-social').tooltip({
        selector: "a[data-toggle=tooltip]"
    });

    $(window).scroll(function () {
        // global scroll to top button
        if ($(this).scrollTop() > 300) {
            $('.scrolltop').fadeIn();
        } else {
            $('.scrolltop').fadeOut();
        }
    });

    // scroll nav
    $('.scroller').click(function () {
        var section = $($(this).data("section"));
        var top = section.offset().top - 82;
        $("html, body").animate({ scrollTop: top }, 700);
        return false;
    });

    var enableTwitterWidget = function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0], p = /^http:/.test(d.location) ? 'http' : 'https';
        if (!d.getElementById(id)) {
            js = d.createElement(s);
            js.id = id;
            js.src = p + "://platform.twitter.com/widgets.js";
            fjs.parentNode.insertBefore(js, fjs);
        }
    };

    enableTwitterWidget(document, "script", "twitter-wjs");
})
