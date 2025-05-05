module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recess-order'
  ],
  plugins: ['stylelint-scss', 'stylelint-prettier'],
  rules: {
    // Prettier連携（整形ルールをLint対象に）
    'prettier/prettier': true,

    'number-leading-zero': 'never',

    // 推奨Stylelintルール
    'block-no-empty': true,
    'color-no-invalid-hex': true,
    'declaration-block-no-duplicate-properties': true,
    'font-family-no-missing-generic-family-keyword': true,
    'media-feature-name-no-unknown': true,
    'property-no-unknown': true,
    'property-no-vendor-prefix': true,
    'selector-pseudo-class-no-unknown': true,
    'selector-pseudo-element-no-unknown': true,
    'selector-type-no-unknown': true,
    'no-empty-source': true,
    'no-invalid-double-slash-comments': null,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'include',
          'mixin',
          'extend',
          'if',
          'else',
          'for',
          'each',
          'function',
          'return'
        ]
      }
    ],

    //セレクタごとに空行を入れる
    'rule-empty-line-before': [
      'always-multi-line',
      {
        except: ['first-nested'],
        ignore: ['after-comment']
      }
    ]
  }
};
