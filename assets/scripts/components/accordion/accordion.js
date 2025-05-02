import {
    qsa,toggleClass
} from '../../utils.js';

export function accordion(){
console.log('スクリプト読み込みOK！');

const accordionButtons = qsa('.accordion-btn');
console.log('ボタン数:', accordionButtons.length);

accordionButtons.forEach(button => {
    button.addEventListener('click', () => {
        console.log('クリックされた！');
        const accordion = button.parentElement;
        toggleClass(accordion,'open');
    });
});
}