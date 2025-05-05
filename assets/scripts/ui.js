//これはUI表示や見た目の処理をまとめたファイルです。
import { qs, qsa } from './utils.js';
import { toggleClass, removeClass } from './utils.js';
import { smoothScrollToTarget } from './utils.js';

//ハンバーガーメニューのスライドの処理(script.jsheへinitHamburger関数をエクスポートできるようにする)
//ハンバーガーメニューのボタンには.humburgerクラス、ナビゲーションメニューには.nav-menuクラスを付与して使用する
//ハンバーガーメニューのボタンをクリックすると、.activeクラスが付与され、ナビゲーションメニューがスライドする
export function initHamburger() {

    const btn = qs('.hamburger');
    const nav = qsa('.nav-menu');

    if (btn && nav) {
        btn.addEventListener('click', () => {
            toggleClass(btn, 'active');
            toggleClass(nav, 'active');
        });
    }
}

// ナビ内のリンクを押したら自動的にメニューを閉じる処理
export function closeNavOnLinkClick() {
    const nav = qs('.nav-menu');
    const btn = qs('.hamburger');
    const navLinks = qsa('.nav-menu a');

    if (!nav || !navLinks.length) return;

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            removeClass(nav, 'active');
            if (btn) removeClass(btn, 'active');
        });
    });
}


//タブメニューの処理
//タブメニューのボタンには.tab-buttonクラス、タブパネルには.tab-panelクラスを付与して使用する
//タブメニューのボタンをクリックすると、.activeクラスが付与され、タブパネルが表示される
export function initTabs() {
    const tabButtons = qsa('.tab-button');
    const tabPanels = qsa('.tab-panel');

    tabButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => removeClass(btn, 'active'));
            tabPanels.forEach(panel => removeClass(panel, 'active'));
            addClass(button, 'active');
            addClass(tabPanels[index], 'active');
        });
    });
};



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
                smoothScrollToTarget(href, scrollOffset);
            }
        });
    });
}