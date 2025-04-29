# プロジェクト名
- webサイト制作のテンプレート

## フォルダ構成（改訂版）
コーディングテンプレートセット/
├── assets/ ... 素材・コードまとめ
│ ├── image/ ... 画像素材（ロゴ、写真など）
│ ├── scripts/ ... JavaScript関連ファイル
│ │ ├── components/ ... UIパーツ・動きまとめ
│ │ │ ├── behaviors/ ... 動きだけ（スムーススクロール等）
│ │ │ ├── hamburger/ ... ハンバーガーメニュー
│ │ │ ├── tabMenu/ ... タブ切り替えメニュー
│ │ │ └── modal.js ... モーダルウィンドウ用JS
│ │ ├── script.js ... メイン初期化処理
│ │ ├── ui.js ... UI制御関数まとめ
│ │ └── utils.js ... 共通処理まとめ
│ └── style/ ... CSS / SCSS関連ファイル
│ ├── reset.css ... リセットCSS
│ ├── style.scss ... メインSCSS（ここから各パーツ読み込み）
│ ├── style.css ... コンパイル後のCSS
│ └── style.css.map ... デバッグ用マップファイル
├── node_modules/ ... npmでインストールしたパッケージ群
├── .gitignore ... Gitで無視するファイル設定
├── .prettierrc ... Prettier設定（コード整形ルール）
├── package.json ... プロジェクト管理・パッケージリスト
├── package-lock.json ... 依存関係管理ファイル（自動生成）
├── index.html ... メインのHTMLファイル
├── README.md ... このテンプレの使い方説明
├── stylelint.config.js ... stylelint設定ファイル
└── WebsitePractice.code-workspace ... VSCodeのワークスペース設定ファイル


## 🛠 使用ツール
- HTML / CSS / JavaScript（Vanilla）
- reset.css（自作）
- - Stylelint（設定ファイル .stylelintrc.jsを含む）

## テンプレートの使い方
1.このテンプレートフォルダをコピーして新しい案件フォルダを作成
2.VSCodeで案件フォルダを開く
3.ターミナルで npm install を実行して必要なパッケージをインストール
4.必要なコンポーネントのみ選んで、style.scssやscript.jsから読み込む
5.制作開始

## component機能一覧
- [x] ハンバーガーメニュー（SP）
- [x] タブ切り替え
- [x] スムーススクロール

## コーディングルール
- クラス名はBEM

## 📓 メモ
- LPデザインの構造ごとに拡張予定
- SassやCSSフレームワーク対応版も検討中

