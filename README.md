# 原神 メインDPS研究アトラス

`source/report_2026-10-28.md`を探索・比較できるローカル専用Webサイト。React 19 / TypeScript / Vite 7、バックエンド不要。Node.js 22.12以降（検証環境：24.22.1）、npmを使用します。

```sh
npm ci
npm run dev
```

閲覧URL：<http://localhost:5173>（ループバックのみで待ち受け）。停止はCtrl+C。

```sh
npm test          # 原資料・採点・出典・感度分析の整合性
npm run build    # 型検査と静的成果物 dist/ の生成
```

概要、77運用の名前・元素・区分・確度・Tier検索、個別詳細、最大3運用の比較、4種の重みプリセット、論点・限界、資料室、原文全文・Markdown取得を備えます。個別URL例：<http://localhost:5173/#operation/entry-08>。URLのハッシュで移動するため、静的ホスティングに特別なルーティング設定は不要です。公開作業は実施していません。

## 原資料の更新

1. 原資料を保全し、修正・改版は意図と根拠を確認して行います。
2. `npm run extract`で`src/data.json`と`public/report_2026-10-28.md`を生成します。生成ファイルは直接編集しません。
3. `npm test`で個別詳細と付録A、件数、引用定義、加重平均、Tier境界、感度分析を照合します。改版で期待値が変わる場合は根拠を設計記録に残します。
4. `npm run build`と画面検証を行い、条件や留保の欠落を点検します。

抽出は`scripts/extract.mjs`、集計は`src/model.mjs`、表示は`src/main.tsx`、装飾は`src/style.css`に分離しています。全13章の本文を構造化し、専用画面と原文全文から閲覧できます。外部フォントや画像の取得は不要です。

## 画面検証

開発サーバー起動中、Chromeがインストールされている環境で実行します。

```sh
node scripts/browser-check.mjs
```

1440px・390pxで主要操作と横はみ出しを検査し、`artifacts/`にスクリーンショットと結果JSONを出力します。ブラウザー起動・ローカル通信には実行環境の許可が必要な場合があります。成果物はGit管理対象外です。

継続方針は[AGENTS.md](AGENTS.md)、設計・検証結果・章対応は[DESIGN.md](DESIGN.md)を参照してください。
