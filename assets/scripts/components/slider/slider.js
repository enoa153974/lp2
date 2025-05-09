export function initSlider() {
    $(document).ready(function () {
        $('.autoplay').slick({
            slidesToShow: 3, // PC時は3枚表示
            slidesToScroll: 1, // スクロール時に1枚ずつ動かす
            variableWidth: false, // 幅はCSS任せにせず等分する
            autoplay: false, // ← 自動再生なし。
            arrows: true, // 左右の矢印を表示
            prevArrow: $('.prev'), // 前へボタンの指定
            nextArrow: $('.next'), // 次へボタンの指定
            dots: true, // 下部のドットナビゲーションを表示
            responsive: [
                {
                    breakpoint: 768, // 767px以下の画面幅になったら
                    settings: {
                        slidesToShow: 1, // スライドを1枚ずつ表示
                        variableWidth: false // ← SPではCSSの幅無視して自動調整。これ超重要！
                        // ※これが無いと、variableWidth:true のままで表示が崩れる！
                    }
                }
            ]
        });
    });
}
