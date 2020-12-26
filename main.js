let $screenFull = $(window).height();
let $buttonUp = $('.btn-up');


$(window).on('scroll', function () {
    if ($(window).scrollTop() >= $screenFull) {
        $buttonUp.fadeIn();
    } else {
        $buttonUp.fadeOut();
    }
});
$buttonUp.on('click', function () {
    $('body,html').animate({scrollTop: 0}, 1100);
});


$('.hideSection').on('click',function () {
 $('.clients').slideToggle();
});

$('a[href^="#"]').on('click', function () {
    let $target = $(this).attr('href'),
        $height = $($target).offset().top;
    $('body, html').animate({scrollTop: $height}, 700);
    return false;
});
