$(function($) {
    // $('.bg-switcher').bgSwitcher({
    //     images: ['assets/images/mansyuin1.jpg', 'assets/images/spring_hiei.jpg'],
    //     interval: 3000,
    //     loop: true
    // });

    $('.slider').slick({
        arrows: true,
        autoplay: false,
        dots: false,
        slidesToShow: 1,
        centerMode: true,
        centerPadding: '0px',
        slidesToScroll: 1,
    });

    $('.slider-card').slick({
        arrows: true,
        autoplay: false,
        dots: false,
        slidesToShow: 1,
        centerMode: true,
        centerPadding: '0px',
        slidesToScroll: 1,
    });

    $('.open-btn').on('click', function() {
        if ($('.open-box').is(':hidden')) {
            $('.open-box').slideDown();
            document.getElementById('change').src='assets/images/close.png';
        } else {
            $('.open-box').slideUp();
            document.getElementById('change').src='assets/images/open.png';
        }
    });
});