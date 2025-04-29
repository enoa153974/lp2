// stylelint.config.js
module.exports = {
  extends: [
    'stylelint-config-standard',       // Stylelintの公式推奨ルールセット
    'stylelint-config-recess-order'    // CSSプロパティの並び順ルール（Recess準拠）
  ],
  rules: {
    'block-no-empty': true, // 空のブロック（{}）を禁止
    'color-no-invalid-hex': true, // 不正なカラーコード（例：#zzz）を禁止
    'declaration-block-no-duplicate-properties': true, // 同じプロパティの重複を禁止

    'font-family-no-missing-generic-family-keyword': true, // フォント指定には必ず汎用フォント（sans-serifなど）を含める

    'media-feature-name-no-unknown': true, // 存在しないメディア特性（例：max-wdith）を禁止

    'property-no-unknown': true, // 存在しないCSSプロパティの使用を禁止
    'property-no-vendor-prefix': true, // ベンダープレフィックス（-webkit-など）の使用を禁止

    'selector-pseudo-class-no-unknown': true, // 存在しない疑似クラス（:hoverr など）を禁止
    'selector-pseudo-element-no-unknown': true, // 存在しない疑似要素（::beforee など）を禁止
    'selector-type-no-unknown': true, // 存在しないHTMLタグセレクタ（例：bogus）を禁止

    // ↓↓↓ 以下のルールは stylelint v15 以降で unknown rule として認識されやすいため、一旦コメントアウト
    // 'string-quotes': 'double', // 文字列はダブルクオートで統一
    // 'number-leading-zero': 'never', // 小数点の前の0は省略（例：0.5 → .5）
    // 'number-no-trailing-zeros': true, // 小数の末尾の不要な0を禁止（例：1.00 → 1）
    // 'selector-max-empty-lines': 1, // セレクタの間の空行は最大1行までに制限

    'no-empty-source': true, // 空のCSSファイルを禁止
    'at-rule-no-unknown': true // 存在しない@ルール（例：@medai）を禁止
  }
};
