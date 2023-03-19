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

    $('.pin-btn').on('click', function() {
        if ($('.open-box').is(':hidden')) {
            $('.open-box').slideDown();
            document.getElementById('change').src='assets/images/close.png';
        }
    });

    const waveItems = document.querySelectorAll('.wave');
    
    waveItems.forEach(function(item) {
        item.animate(
            [
                {
                    offset: 0.00,
                    transform: 'translate(0, 0)'
                },
                {
                    offset: 0.05,
                    transform: 'translate(-5%, 0)'
                },
                {
                    offset: 0.10,
                    transform: 'translate(5%, 0)'
                },
                {
                    offset: 0.15,
                    transform: 'translate(-5%, 0)'
                },
                {
                    offset: 0.20,
                    transform: 'translate(5%, 0)'
                },
                {
                    offset: 0.25,
                    transform: 'translate(-5%, 0)'
                },
                {
                    offset: 0.30,
                    transform: 'translate(0, 0)'
                },
                {
                    offset: 1.00,
                    transform: 'translate(0, 0)'
                }
            ],
            {
                duration: 1500,
                iterations: Infinity
            }
        );
    });

    $('.pin-btn').click(function () {
        const speed = 600;
        let href = $(this).attr("href");
        let target = $(href == "#" || href == "" ? "html" : href);
        // ヘッダーの高さ分下げる
        let position = target.offset().top - 50;
        $("body,html").animate({ scrollTop: position }, speed, "swing");
        return false;
    });
});