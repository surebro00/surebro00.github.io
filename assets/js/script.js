$(document).ready(function () {
    $("#more").click(function() {
        $('html,body').animate({
                scrollTop: $("#more_start").offset().top},
            'slow');
    });

    $(".link_1").click(function() {
        $('html,body').animate({
                scrollTop: $("#more_start").offset().top},
            'slow');
    });

    commentBox('my-project-id');
});