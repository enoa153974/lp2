export function initSlider() {
    $(document).ready(function () {
        $('.autoplay').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            prevArrow: $('.prev'),
            nextArrow: $('.next'),
            dots: true,
            variableWidth: true
        });
    });
}