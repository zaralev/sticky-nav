$(document).ready(function() {
    // hamburger
    $(".mobile-dropdown").hide();

    $("#hamburger").click(function() {
        // $(".mobile-dropdown").fadeToggle("fast");
        $(".mobile-dropdown").toggle();
    });


    var stickyNavTop = $('.desktop').offset().top;

    var stickyNav = function() {
        var scrollTop = $(window).scrollTop();

        if (scrollTop > stickyNavTop) {
            $('.desktop').addClass('sticky');
        } else {
            $('.desktop').removeClass('sticky');
        }
    };

    stickyNav();

    $(window).scroll(function() {
        stickyNav();
    });

});
