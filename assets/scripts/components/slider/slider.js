import {
    qs,qsa,
} from '../../utils.js';


export function slider() {
    const track = qs('.slider__track');
    const cards = Array.from(qsa('.card'));
    const prevBtn = qs('.prev');
    const nextBtn = qs('.next');

    let currentIndex = 0;

    // スライダー更新処理
    function updateSlider() {
    const cardWidth = cards[0].offsetWidth;
    const offset = 0; // 中央表示しないなら0で固定
    track.style.transform = `translateX(-${offset}px)`;
    }

    // 配列を左にローテート
    function rotateArrayLeft(arr) {
    const first = arr.shift();
    arr.push(first);
    }

    // 配列を右にローテート
    function rotateArrayRight(arr) {
    const last = arr.pop();
    arr.unshift(last);
    }

    // DOMを再構築
    function reRenderCards() {
    track.innerHTML = "";
    cards.forEach(card => track.appendChild(card));
    updateSlider();
    }

    // イベント設定
    nextBtn.addEventListener('click', () => {
    rotateArrayLeft(cards);
    reRenderCards();
    });

    prevBtn.addEventListener('click', () => {
    rotateArrayRight(cards);
    reRenderCards();
    });

    window.addEventListener('resize', updateSlider);
    window.addEventListener('load', updateSlider);
}