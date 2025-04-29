import { qsa } from '../../utils.js';
import { smoothScrollToTarget } from '../../utils.js';

// ヘッダーアンカーリンクのスムーススクロールの処理
    export function initSmoothAnchorScroll() {
        const scrollOffset = {
            pc: 101,//PC表示のヘッダーの高さ
            sp: 70//SP表示のヘッダーの高さ
        };

        const anchorLinks = qsa('a[href^="#"]');

            anchorLinks.forEach(link => {
                link.addEventListener("click", e => {
                    const href = link.getAttribute("href");
                    if (href.startsWith("#")) {
                        e.preventDefault();
                        smoothScrollToTarget(href,scrollOffset);
                    }
                });
            });
    }