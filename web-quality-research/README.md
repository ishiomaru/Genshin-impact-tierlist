# 高品質Web制作の研究・実行キット

作成：2026年10月29日（日本時間）／調査期間：2026年10月28〜29日。

このキットは、素材の意味を理解し、異なるWeb体験を試し、実画面から改善するための指示と評価手順です。制作方式の最適性を実証済みとするものではありません。研究・実践からの根拠と、今回の小規模検証と、今後確かめる仮説を分けています。

## まず使う

1. [研究レポート](RESEARCH_REPORT.md) の第1・4節で、推奨方式とその根拠の限界を確認します。
2. [表示試作](experiment/prototype.html) をブラウザで開き、上部のA/B/Cで「読む・比べる・条件を考える」を切り替えます。HTML単体で動き、ネット接続は外部出典を開くとき以外不要です。
3. 実際のサイト制作は、Codex CLIをプロジェクトのフォルダで起動し、[開始指示](prompts/00-start.md)を使います。素材は `source/` にあります。

試作の外観や機能を、今後作るサイトの正解にしないでください。最終サイトは、別の情報設計・視覚表現・素材を選んで構いません。

## MacのCodex CLIで開始する

既存のサイトプロジェクトがある場合、必要な文書をコピーし、既存のAGENTS.mdと統合します。全体の設定ファイルや作業中の変更を上書きしないでください。

新しい作業フォルダとして、このキットを使う場合は次のように開始できます。

```bash
# 展開したキットのフォルダに移動してから実行
codex --version
codex --help
codex --search 'prompts/00-start.mdを読んで実行してください。素材はsource/report.mdです。'
```

`--search`、初期プロンプト、`-C`等の意味は [公式CLI文書](https://learn.chatgpt.com/docs/developer-commands?surface=cli)で確認しました。手元のCLIが古い場合は `--help` の対応状況を優先してください。今回、あなたのMacでこのコマンドを実行したわけではありません。モデル名や権限設定は強制せず、利用中の構成を使います。

継続制作で共通の契約を保持したい場合は、[templates/AGENTS.md](templates/AGENTS.md)を新規プロジェクトのルートに `AGENTS.md` として配置します。既存ファイルがある場合は置換せず、必要な項目だけ統合します。最初から専用Skillや多数のエージェント設定を追加する必要はありません。

## ブラウザを扱う手段がない場合

既にブラウザ用のツールが使えるなら、それを利用します。Playwright MCPを追加する場合の公式構文に沿った例は次のとおりです。

```bash
codex mcp add playwright -- npx -y @playwright/mcp@latest
codex mcp list
```

これは任意のセットアップ例で、今回あなたの環境へ追加していません。再現実験では `@latest` を使い続けず、実際に使ったバージョンを記録・固定します。通常のDOM操作とスクリーンショット確認を始点にし、キャンバスなど座標操作が必要な場合にVision Modeを検討します。接続しただけで視覚レビューが済むわけではありません。[公式Playwright MCP](https://github.com/microsoft/playwright-mcp)

画像生成・検索、Figma・v0・Stitch等も必須ではありません。どの問題を解決するために導入するかを先に決めます。具体的な選択条件は研究レポート第8節にあります。

## 指示の使い分け

| ファイル | 使う場面 |
|---|---|
| [00-start.md](prompts/00-start.md) | まずこれで制作を開始。計画だけで終わらず完成へ進める |
| [01-explore.md](prompts/01-explore.md) | 表現が単調、一案に固定される、完成像がまだ見えない |
| [02-build.md](prompts/02-build.md) | 採択した方向から、中心体験と全体を実装する |
| [03-review.md](prompts/03-review.md) | 新しいセッションで、成果物を独立にレビューする |
| [04-improve.md](prompts/04-improve.md) | 指摘を確かめ、原因に応じて改善する |
| [05-direct-baseline.md](prompts/05-direct-baseline.md) | 比較実験の対照条件。研究フロー全体を一緒に読ませない |

全指示を一度に貼り付ける必要はありません。開始指示が主入口で、他は必要なときに使います。

別セッションでのレビュー例：

```bash
codex 'prompts/03-review.mdに従ってレビューしてください。対象はsite/です。起動方法はwork/state.mdを確認し、生成者の自己評価を先に読んで追認しないでください。'
```

この例の `site/` と `work/state.md` は制作後にできる予定のパスです。キットに完成サイトがあると偽装したものではありません。現在すぐ開けるものは `experiment/prototype.html` の研究用試作です。

## 成果物と依頼との対応

| 求められた成果物 | ファイル |
|---|---|
| ① 調査・分析レポート | [RESEARCH_REPORT.md](RESEARCH_REPORT.md)、[SOURCES.md](SOURCES.md) |
| ② 制作方式の比較・推奨 | レポート第4・7・8節 |
| ③ 実行ワークフロー | [WORKFLOW.md](WORKFLOW.md) |
| ④ プロンプト・設定 | `prompts/`、`templates/AGENTS.md`、本README |
| ⑤ 品質評価・改善 | [EVALUATION.md](EVALUATION.md)、レビュー・改善指示 |
| ⑥ 検証計画・未解決課題 | [EXPERIMENT.md](EXPERIMENT.md)、`evidence/` |

## 付属する表示試作を再ビルド・再検査する

完成したHTMLを見るだけなら、NodeもPythonも不要です。コードや素材を変更して追試する場合は、Node.js 20以上、Python 3、npmを使います。

```bash
npm install
python3 scripts/extract.py
npm run build
npx playwright install chromium
```

別のターミナルで、キットのルートからローカルサーバーを起動します。

```bash
python3 -m http.server 8765 --bind 127.0.0.1
```

元のターミナルで検査します。

```bash
npm run verify
```

結果は `evidence/data-audit.json` と `evidence/browser-audit.json`。画面確認用の画像はキットの親フォルダの `qa-screenshots/` に出力します。配布時の検査はLinux上のChromiumで行い、Mac・Safariでの確認は未実施です。

専用の抽出スクリプトは、この原神レポートの構造と77運用を厳格に検査するもので、任意のMarkdownへの汎用変換器ではありません。別の素材へ変える場合は意味構造と入力検査を設計し直します。件数が変わった際に検査を無視して通す使い方はしません。

## 今回の検証の要点

77運用のデータ・総合コード・Tierと、重み変更の変動数を照合しました。ブラウザの最終検査は50チェック通過。人間の理解度、選好、制作方式の因果的な優位、画像追加の効果は未測定です。詳しい範囲と限界はEXPERIMENT.mdに記載しています。
