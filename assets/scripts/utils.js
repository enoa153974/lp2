//これはよく使うDOM操作をまとめたファイルです。

//セレクタを取得して返す系のDOM操作
    //【const 変数名 = qs('クラス名');】でセレクタを取得して返す
    //【const 変数名 = qsa('クラス名');】でセレクタを取得して配列に変換して返す
    export function qs(selector, parent = document) {
        return parent.querySelector(selector);
        }
        
        export function qsa(selector, parent = document) {
            return [...parent.querySelectorAll(selector)];
        }


//クラスの付けはずし系のDOM操作
    //指定した要素(element)に対して、classNameを付けたり外したりする関数
    //【toggleClass(element, className) 】で使用
        export function toggleClass(element, className) {
            element.classList.toggle(className);
        }
    
    //指定した要素(element)に対して、classNameを付ける関数（こっちはつけるのみ）
    //【addClass(element, className) 】で使用
        export function addClass(element, className) {
            element.classList.add(className);
        }
    //指定した要素(element)に対して、classNameを外す関数（こっちは外すのみ）
    //【removeClass(element, className) 】で使用
        export function removeClass(element, className) {
            element.classList.remove(className);
        }

//スムーススクロールをさせる処理
/* 使用時は
    const scrollOffset = {
        pc: 数値,
        sp: 数値
    };
を定義してから、
【smoothScrollToTarget('#section2', scrollOffset;】で使用*/

export function smoothScrollToTarget(selector, offset = { pc: 101, sp: 70 }) {
    const target = document.querySelector(selector);
    if (!target) return;

        const isMobile = window.innerWidth <= 768;
        const headerOffset = isMobile ? offset.sp : offset.pc;

        const elementPosition = target.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
}