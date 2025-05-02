    import {
        qs, qsa, addClass, removeClass, createElement
    } from '../../utils.js';
    
    export function slider() {
        const track = qs('.slider__track');
        const cards = Array.from(qsa('.card'));
        const prevBtn = qs('.prev');
        const nextBtn = qs('.next');
        const dotsContainer = qs('.slider__dots');
    
        let currentIndex = 0;
    
        // === ドット生成 ===
        function createDots() {
        dotsContainer.innerHTML = '';
        cards.forEach((_, index) => {
            const dot = createElement('span', 'slider__dot');
            if (index === 0) addClass(dot, 'active');
    
            dot.addEventListener('click', () => {
            const diff = index - currentIndex;
            if (diff > 0) {
                for (let i = 0; i < diff; i++) rotateArrayLeft(cards);
            } else if (diff < 0) {
                for (let i = 0; i < Math.abs(diff); i++) rotateArrayRight(cards);
            }
            currentIndex = index;
            reRenderCards();
            });
    
            dotsContainer.appendChild(dot);
        });
        }
    
        // === ドット更新 ===
        function updateDots() {
        const dots = qsa('.slider__dot');
        dots.forEach(dot => removeClass(dot, 'active'));
        addClass(dots[currentIndex], 'active');
        }
    
        // === スライダー位置更新
        function updateSlider() {
        const cardWidth = cards[0].offsetWidth;
        const offset = 0; // 中央表示しないなら0で固定
        track.style.transform = `translateX(-${offset}px)`;
        }
    
        // === 配列をローテート
        function rotateArrayLeft(arr) {
        const first = arr.shift();
        arr.push(first);
        currentIndex = (currentIndex + 1) % arr.length;
        }
    
        function rotateArrayRight(arr) {
        const last = arr.pop();
        arr.unshift(last);
        currentIndex = (currentIndex - 1 + arr.length) % arr.length; 
        }
    
        // === DOM再構築（スライド再描画）
        function reRenderCards() {
        track.innerHTML = "";
        cards.forEach(card => track.appendChild(card));
        updateSlider();
        updateDots(); //ここでドット更新！
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
        updateDots(); // 初期アクティブ設定（念のため）
        });
    }
    