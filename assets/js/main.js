$(function($) {
    // $('.bg-switcher').bgSwitcher({
    //     images: ['assets/images/mansyuin1.jpg', 'assets/images/spring_hiei.jpg'],
    //     interval: 3000,
    //     loop: true
    // });

    $('.hamburger').click(function() {
        $('.hamburger, .navigation').toggleClass('active');
    });

    $('.nav-items-item').click(function() {
        $('.hamburger, .navigation').toggleClass('active');
    });

    $('.slider').slick({
        arrows: true,
        autoplay: false,
        dots: false,
        slidesToShow: 1,
        centerMode: true,
        centerPadding: '0%',
        slidesToScroll: 1,
    });

    $('.slider-card').slick({
        arrows: true,
        autoplay: false,
        dots: true,
        slidesToShow: 1,
        centerMode: false,
        centerPadding: '0%',
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                },
            }
        ]
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