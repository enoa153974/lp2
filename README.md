# プロジェクト名

- 模擬案件lp2

## フォルダ構成
LP2/
├── assets/ ... 素材・コードまとめ  
│   ├── image/ ... 画像素材（ロゴ、写真など）  
│   ├── scripts/ ... JavaScript関連ファイル  
│   │   ├── components/ ... UIパーツごとの処理  
│   │   │   ├── accordion/ ... アコーディオンのJS  
│   │   │   ├── behaviors/ ... 汎用的な動き（スムーススクロールなど）  
│   │   │   └── slider/ ... カルーセル・スライダー処理  
│   │   ├── script.js ... 全体の初期化スクリプト  
│   │   ├── ui.js ... UI操作系の関数  
│   │   └── utils.js ... 汎用関数（ユーティリティ）  
│   └── style/ ... CSS関連ファイル  
│       ├── reset.css ... リセットCSS  
│       ├── style.css ... メインのスタイル定義  
│       ├── utilities.css ... ユーティリティクラスまとめ  
│       └── variables.css ... 変数（カラー、フォントなど）定義  
├── index.html ... メインHTMLファイル  
├── package.json ... パッケージ管理ファイル  
├── package-lock.json ... 依存関係管理ファイル（自動生成）  
├── .gitignore ... Git管理で除外するファイル設定  
├── .stylelintrc.json ... stylelintのルール定義  
├── eslint.config.mjs ... JavaScriptの静的解析設定（ESLint）  
├── README.md ... このテンプレートの使い方説明（本ファイル）  
└── WebsitePractice.code-workspace ... VS Codeのワークスペース設定

## 🛠 使用ツール

- HTML / CSS / JavaScript（Vanilla）/jQuery/slick
- reset.css（自作）
- Stylelint（設定ファイル .stylelintrc.jsを含む）

## component機能一覧

- カルーセル(slickライブラリ使用)
- アコーディオンメニュー
- スムーススクロール

## コーディングルール

- クラス名はBEM

## 使用フォント

- 日本語フォント:Noto Serif JP（Regular, Medium, SemiBold）
- 英語フォント:EB Garamond
- ロゴフォント:Marcellus

## 📓 メモ

-
-
