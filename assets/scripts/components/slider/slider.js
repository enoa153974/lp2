import {
    qs, qsa, addClass, removeClass, createElement
} from '../../utils.js';

export function slider() {
    const track = qs('.slider__track');
    const originalCards = Array.from(qsa('.card'));
    const prevBtn = qs('.prev');
    const nextBtn = qs('.next');
    const dotsContainer = qs('.slider__dots');

    let visibleCount = getVisibleCount();
    let totalGroups = Math.ceil(originalCards.length / visibleCount);
    let slideCounter = visibleCount;

    // クローン含めた配列
    let cards = [];

    function getVisibleCount() {
        return window.innerWidth <= 768 ? 1 : 3;
    }

    function cloneCards() {
        track.innerHTML = '';
        cards = [];

        const prepend = originalCards.slice(-visibleCount).map(card => card.cloneNode(true));
        const append = originalCards.slice(0, visibleCount).map(card => card.cloneNode(true));

        prepend.forEach(clone => {
            track.appendChild(clone);
            cards.push(clone);
        });

        originalCards.forEach(card => {
            track.appendChild(card);
            cards.push(card);
        });

        append.forEach(clone => {
            track.appendChild(clone);
            cards.push(clone);
        });

        setInitialPosition();
    }

    function setInitialPosition() {
        const offset = getCardOffset() * slideCounter;
        track.style.transition = 'none';
        track.style.transform = `translateX(-${offset}px)`;
    }

    function createDots() {
        dotsContainer.innerHTML = '';
        totalGroups = Math.ceil(originalCards.length / visibleCount);

        for (let i = 0; i < totalGroups; i++) {
            const dot = createElement('button', 'slider__dot');
            if (i === 0) addClass(dot, 'active');

            dot.addEventListener('click', () => {
                slideCounter = visibleCount + (i * visibleCount);
                updateSlider();
            });

            dotsContainer.appendChild(dot);
        }
    }

    function updateDots() {
        const dots = qsa('.slider__dot');
        const activeIndex = Math.floor((slideCounter - visibleCount) / visibleCount) % totalGroups;
        dots.forEach(dot => removeClass(dot, 'active'));
        if (dots[activeIndex]) addClass(dots[activeIndex], 'active');
    }

    function getCardOffset() {
        const cardStyle = getComputedStyle(cards[0]);
        const cardWidth = cards[0].offsetWidth;
        const marginRight = parseFloat(cardStyle.marginRight) || 0;
        return cardWidth + marginRight;
    }

    function updateSlider() {
        const cardOffset = getCardOffset();
        const offset = cardOffset * slideCounter;

        track.style.transition = 'transform 0.4s ease';
        track.style.transform = `translateX(-${offset}px)`;

        updateDots();
    }

    function handleTransitionEnd() {
        const total = originalCards.length;
        if (slideCounter >= total + visibleCount) {
            slideCounter = visibleCount;
            setInitialPosition();
        } else if (slideCounter < visibleCount) {
            slideCounter = total + visibleCount - 1;
            setInitialPosition();
        }
    }

    nextBtn.addEventListener('click', () => {
        slideCounter++;
        updateSlider();
    });

    prevBtn.addEventListener('click', () => {
        slideCounter--;
        updateSlider();
    });

    track.addEventListener('transitionend', handleTransitionEnd);

    window.addEventListener('resize', () => {
        visibleCount = getVisibleCount();
        slideCounter = visibleCount;
        cloneCards();
        createDots();
    });

    window.addEventListener('load', () => {
        visibleCount = getVisibleCount();
        slideCounter = visibleCount;
        cloneCards();
        createDots();
    });
}
