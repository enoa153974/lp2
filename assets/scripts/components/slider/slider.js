import {
    qs, qsa, addClass, removeClass, createElement
} from '../../utils.js';

export function slider() {
    const track = qs('.slider__track');
    const cards = Array.from(qsa('.card'));
    const prevBtn = qs('.prev');
    const nextBtn = qs('.next');
    const dotsContainer = qs('.slider__dots');

    const visibleCount = 3;
    const totalGroups = Math.ceil(cards.length / visibleCount);
    let currentIndex = 0;
    let slideCounter = 0;

    // === ドット生成（2つだけ） ===
    function createDots() {
        dotsContainer.innerHTML = '';
        for (let i = 0; i < totalGroups; i++) {
            const dot = createElement('button', 'slider__dot');
            if (i === 0) addClass(dot, 'active');

            dot.addEventListener('click', () => {
                const groupIndex = i * visibleCount;

                console.log('ドットクリック:', i, '→ target slide index:', groupIndex);
                console.log('現在のスライド位置:', slideCounter);

                let safeCounter = 0; // 安全装置（無限ループ対策）

                while (slideCounter !== groupIndex) {
                    if (slideCounter < groupIndex) {
                        rotateArrayLeft(cards);
                        slideCounter++;
                    } else {
                        rotateArrayRight(cards);
                        slideCounter--;
                    }
                }
                currentIndex = i;
                reRenderCards();
            });

            dotsContainer.appendChild(dot);
        }
    }

    // === ドット更新 ===
    function updateDots() {
        const dots = qsa('.slider__dot');
        const activeDotIndex = Math.floor(slideCounter / visibleCount);
        dots.forEach(dot => removeClass(dot, 'active'));
        if (dots[activeDotIndex]) addClass(dots[activeDotIndex], 'active');
    }

    // === スライダー位置更新
    function updateSlider() {
        const cardWidth = cards[0].offsetWidth;
        const offset = 0;
        track.style.transform = `translateX(-${offset}px)`;
    }

    // === 配列を1枚分ローテート
    function rotateArrayLeft(arr) {
        const first = arr.shift();
        arr.push(first);
        slideCounter = (slideCounter + 1) % cards.length;
    }

    function rotateArrayRight(arr) {
        const last = arr.pop();
        arr.unshift(last);
        slideCounter = (slideCounter - 1 + cards.length) % cards.length;
    }

    // === DOM再構築（スライド再描画）
    function reRenderCards() {
        track.innerHTML = '';
        cards.forEach(card => track.appendChild(card));
        updateSlider();
        updateDots();
    }

    // === イベント
    nextBtn.addEventListener('click', () => {
        rotateArrayLeft(cards);
        reRenderCards();
    });

    prevBtn.addEventListener('click', () => {
        rotateArrayRight(cards);
        reRenderCards();
    });

    window.addEventListener('resize', updateSlider);
    window.addEventListener('load', () => {
        updateSlider();
        createDots();
        updateDots();
    });
}
