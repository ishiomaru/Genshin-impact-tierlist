# 素材の記録

## キャラクター画像

- 役割：運用一覧・比較・詳細での対象の識別。ヒーローは、条件による変化を説明できるヌヴィレットを採用。原著者の最上位5運用の中での順位を示す選択ではない。
- 名称対応：genshin-db 公開API v5、2026-10-29取得。原文の全77名称を対応、主人公3元素は空の共通アイコンを使用。画像メタデータは `src/data/assets.json`、照合する名称一覧は `src/data/identities.json`。
- 識別元のプロジェクト：https://github.com/theBowja/genshin-db （コードのライセンスとゲーム画像の権利は別）。
- アイコン：ヌヴィレットはEnka.Networkの公開アイコン。それ以外は公式HoYoverse CDNのゲーム記録用画像を始点に、取得不可の場合は公式HoYoWikiの画像へフォールバック。実際の取得URLは各 `assetUrl` に保持。ゲーム仕様・点数の取得には使用していない。
- ヒーロー：https://enka.network/ui/UI_Gacha_AvatarImg_Neuvillette.png
- 加工：アスペクト比を維持してアイコン最大160px、スプラッシュ最大1100pxへ縮小、WebP品質0.87へ圧縮。肖像はCSSで円形表示。原画像は圧縮時に `/private/tmp/teyvat-atlas-raw-assets/` へ退避。
- 容量：76画像（75種類の肖像＋ヒーロー）、9,427,800 → 1,050,066 bytes（約88.9%削減）。77運用の対応は共有画像3件を含む。
- 代替テキスト：カード名・見出しに対象名があるため画像自体は `alt=""`。取得失敗時は同じ領域へ名称の先頭文字を表示。名前のラベルは常に残す。
- 権利：ゲーム画像 © HoYoverse。非公式・非商用のローカルファンサイトとして使用し、公式サイト・公認順位と誤認させない表示を付けた。CDNで取得できることを再利用権の譲渡とみなしていない。
- 使用条件確認の入口：公式ヘルプ https://support.hoyoverse.com/hc/en-us/articles/51005649400729-What-are-the-guidelines-for-creating-and-selling-fan-made-content 、公式利用規約 https://genshin.hoyoverse.com/en-us/company/terms 。公開・商用利用の包括的な権利処理を完了したという主張はしない。

## 書体と図形

- 見出し：Google FontsのNoto Serif JPを表示文字にサブセット化して同梱。SIL Open Font License、ライセンスは `public/fonts/OFL.txt`。500/600ウェイト。追加された文字にサブセットがない場合はシステムの日本語明朝体へフォールバック。
- 本文：端末の日本語ゴシック・システム書体。表示時のGoogle Fonts接続はない。
- コンパスのブランド、UIアイコン、軌道線：独自SVG/CSS。公式の元素紋章は使用せず、色と元素名を併用。色だけで元素やTierを区別しない。
- モード点の図：原文の0〜5の序数からコードで長さを計算。レーダー面積・DPS換算・推定成功率は使わない。
- 画像生成：未使用。実キャラクターの識別を創作画像へ置き換える必要がなかったため。
