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

    $.cookieBar({
        message: 'We don\'t use cookies but we suggest to read this copyright notice',
        acceptButton: true,
        acceptText: 'Ok, done',
        policyButton: true,
        policyText: 'Read more',
        policyURL: 'copyright-notify.html',
        effect: 'slide',
        fixed: true,
        bottom: true,
        zindex: '999',
        domain: 'www.ripfred.it',
        referrer: 'www.ripfred.it'
    });

});