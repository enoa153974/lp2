export function initSlider() {
    $(document).ready(function () {
        $('.autoplay').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            variableWidth: true, // PC時のみ
            arrows: true,
            prevArrow: $('.prev'),
            nextArrow: $('.next'),
            dots: true,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        variableWidth: false // ← ここ絶対必要！
                    }
                }
            ]
        });
    });
}
