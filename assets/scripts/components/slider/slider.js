import {
    qs, qsa, addClass, removeClass, createElement
} from '../../utils.js';

export function slider() {
    const track = qs('.slider__track');
    const cards = Array.from(qsa('.card'));
    const prevBtn = qs('.prev');
    const nextBtn = qs('.next');
    const dotsContainer = qs('.slider__dots');

    let visibleCount = getVisibleCount();
    let totalGroups = Math.ceil(cards.length / visibleCount);
    let currentIndex = 0;
    let slideCounter = 0;

    function getVisibleCount() {
        return window.innerWidth <= 768 ? 1 : 3;
    }

    // === ドット生成 ===
    function createDots() {
        dotsContainer.innerHTML = '';
        totalGroups = Math.ceil(cards.length / visibleCount);

        for (let i = 0; i < totalGroups; i++) {
            const dot = createElement('button', 'slider__dot');
            if (i === 0) addClass(dot, 'active');

            dot.addEventListener('click', () => {
                const groupIndex = i * visibleCount;
                const diff = (groupIndex - slideCounter + cards.length) % cards.length;

                for (let j = 0; j < diff; j++) {
                    rotateArrayLeft(cards);
                    slideCounter = (slideCounter + 1) % cards.length;
                    reRenderCards();
                }

                currentIndex = i;
            });

            dotsContainer.appendChild(dot);
        }
    }

    // === ドット更新 ===
    function updateDots() {
        const dots = qsa('.slider__dot');
        const activeDotIndex = Math.floor(slideCounter / visibleCount) % totalGroups;
        dots.forEach(dot => removeClass(dot, 'active'));
        if (dots[activeDotIndex]) addClass(dots[activeDotIndex], 'active');
    }

    function updateSlider() {
        const cardWidth = cards[0].offsetWidth;
        const offset = 0;
        track.style.transform = `translateX(-${offset}px)`;
    }

    function rotateArrayLeft(arr) {
        const first = arr.shift();
        arr.push(first);
    }

    function rotateArrayRight(arr) {
        const last = arr.pop();
        arr.unshift(last);
    }

    function reRenderCards() {
        track.innerHTML = '';
        cards.forEach(card => track.appendChild(card));
        updateSlider();
        updateDots();
    }

    nextBtn.addEventListener('click', () => {
        rotateArrayLeft(cards);
        slideCounter = (slideCounter + 1) % cards.length;
        reRenderCards();
    });

    prevBtn.addEventListener('click', () => {
        rotateArrayRight(cards);
        slideCounter = (slideCounter - 1 + cards.length) % cards.length;
        reRenderCards();
    });

    window.addEventListener('resize', () => {
        visibleCount = getVisibleCount();
        totalGroups = Math.ceil(cards.length / visibleCount);
        createDots();
        updateDots();
        updateSlider();
    });

    window.addEventListener('load', () => {
        visibleCount = getVisibleCount();
        totalGroups = Math.ceil(cards.length / visibleCount);
        updateSlider();
        createDots();
        updateDots();
    });
}
