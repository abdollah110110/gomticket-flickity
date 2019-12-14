$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 1,
        padding: 0,
        margin: 5,
        nav: true,
        autoplay: true,
        autoplayTimeout: 4000,
        rtl: true,
        loop: true,
        dotsContainer: '.mj-dots',
        dotClass: 'mj-dot'
    });
    var owl = $('.owl-carousel');
    $('.mj-dot').on('click', function () {
        owl.trigger('to.owl.carousel', [$(this).index(), 300]);
    });
});