$(document).ready(function() {

    if ($(window).width() > 992) {
        $('#fullpage').fullpage({
            autoScrolling: true,
            scrollHorizontally: true,
            sectionSelector: '.section',
        });
    }
});
