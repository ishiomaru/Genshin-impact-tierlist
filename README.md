# TEYVAT ATLAS — 原神 戦力研究室

提供された研究資料から、77運用のTier・編成・制約を探索する非公式Webサイト。新しい実装はリポジトリルートにあります。

## 起動

Node.js 22.12以上とPython 3を使用します。

```sh
npm ci
npm run dev
```

表示されたローカルURL（通常 `http://127.0.0.1:5173`）を開いてください。

```sh
npm run build       # 原文の厳格なデータ照合 → 型検査 → distに本番ビルド
npm run preview     # ビルドしたサイトをローカル配信
npm test            # 計算境界・データ・URL・検索・名前照合
npm run test:browser # 開発サーバー起動中に実行。操作・画面・axe検査
npm run test:edges   # ポート4173の本番プレビューで保存失敗等の境界検査
```

ブラウザ検査はインストール済みGoogle ChromeをPlaywrightの `channel: 'chrome'` で使用します。別ポートなら `ATLAS_TEST_URL=http://127.0.0.1:ポート番号` を設定してください。

## できること

- 77運用のTierボード／採点表、名前・元素・主対象／派生の絞り込み
- 原文の4つの重み設定を切り替える感度分析、変動した運用の表示
- 最大3運用の比較、スマートフォンでの要点比較表、比較URLの共有
- 詳細の強み・制約・代表的な味方・参照先から研究原文の該当箇所への移動
- マイリスト、自分用のメモの端末内保存、JSON書き出し

マイリストとメモは `localStorage` に保存します。共有リンクに含まれるのは比較対象と重みのみです。クラウド同期はありません。保存に失敗した場合は明示して画面内に一時保持します。

## 素材と更新

情報源は [研究原文](web-quality-research/source/report.md)。Tier・点数・確度は原著者の判断で、実測DPSや入手・育成優先度ではありません。素材のゲーム内容や参照URLをこのサイトで独立に検証していません。

`npm run data` は原文から必要な構造を抽出します。77運用、主53＋派生24、点数・総合コード・Tier、詳細との一致、代表例13件、感度分析の変動数を照合し、不一致では失敗します。更新で対象数が変わった場合は検査を外さず、変換仕様と検査を見直してください。

画像・フォントは `public/` に同梱しており、表示時に外部APIや画像CDNを呼びません。画像を更新する場合だけ `python3 scripts/fetch-assets.py` を使用します。取得後に開発サーバー上で `node scripts/optimize-images.mjs`、`npm run data` を実行するとWebPへ最適化します。名称は画像の識別にのみ使用し、評価データは外部APIで上書きしません。

静的ビルドを一般的なWebサーバーへ配置できます。ハッシュによる画面遷移なのでSPA用のリライトルールは不要です。公開・デプロイは今回行っていません。

## 制作・検証記録

- [現在の状態と再開点](work/state.md)
- [設計判断・改善の記録](work/review.md)
- [画像・フォントの出所](work/assets.md)
- [データ監査](work/data-audit.json) / [ブラウザ監査](work/browser-audit.json) / [境界検査](work/edge-audit.json)
- [操作できる比較試作](work/prototypes/index.html)（開発サーバーの `/work/prototypes/`）
- 実画面は `work/screenshots/`。以前の `artifacts/` は今回の検証結果ではありません。

自動検査の通過は、使いやすさ・美しさ・WCAG全項目への適合の証明ではありません。Safari・Firefox・実機・支援技術での確認と、利用者による理解度評価は未実施です。
