# 調査資料と根拠の位置付け

確認日：2026年10月28〜29日（日本時間）。以下は主に発行者・研究著者・ツール作者の一次資料。リンク先の仕様は後から変わり得る。公開年は検索結果の「クロール日」でなく、論文・記事本文の年を優先した。

この一覧の件数は、独立した実験の数ではない。同じ研究の論文・実装、同じ提供元の複数文書を別々の効果検証に数えない。本文の [Rxx] は本一覧を参照する。

区分：**研究**＝対象と方法が示された研究、**実践**＝制作主体の経験報告、**仕様**＝機能・規範の確認、**作品**＝表現の分析対象。研究の結果も、その対象領域を超えて自動的に一般化しない。

| ID | 一次資料 | 確認できた内容と限界 |
|---|---|---|
| R01 | Anthropic, [Harness design for long-running apps](https://www.anthropic.com/research/harness-design-long-running-apps)（2026、実践） | 生成者・評価者の分離、実ブラウザによる評価、反復、評価者の調整、工程の除去を報告。本文確認。モデル・費用・実行時間も変わり、方式単独の因果効果を推定する統制実験ではない。 |
| R02 | Dow et al., [Parallel Prototyping Leads to Better Design Results, More Divergence, and Increased Self-Efficacy](https://doi.org/10.1145/1879831.1879836)（2010、研究） | 初学者がWeb広告を作る実験で並列試作の優位を報告。出版社の索引化された抄録と[著者側の掲載情報](https://hci.stanford.edu/publications/paper.php?id=153)を参照。本文の直接取得は403／タイムアウト。統計表の再解析はしていない。AIによる長大資料のサイト化とは対象が異なる。 |
| R03 | Si et al., [Design2Code](https://aclanthology.org/2025.naacl-long.199.pdf)（NAACL 2025、研究）／[著者のプロジェクト](https://salt-nlp.github.io/Design2Code/) | 484の既存Webページを使うスクリーンショットからの実装課題。視覚要素の再現とレイアウトを評価。新しい情報設計の発明を測る課題ではない。論文導入・抄録と著者ページを確認。 |
| R04 | Lei et al., [WebCompass](https://aclanthology.org/2026.emnlp-main.1669/)（EMNLP 2026、研究）／[著者実装](https://github.com/NJU-LINK/WebCompass) | 生成・編集・修復、テキスト・画像・動画入力、ブラウザを使う評価。視覚品質の弱点とタスク差を報告。論文ページ抄録・リポジトリを確認。全37ページの表の再監査はしていない。自分の資料でのモデル順位を保証しない。 |
| R05 | Huang et al., [Large Language Models Cannot Self-Correct Reasoning Yet](https://proceedings.iclr.cc/paper_files/paper/2024/hash/8b4add8b0aa8749d80a34ca5d941c355-Abstract-Conference.html)（ICLR 2024、研究） | 外部フィードバックのない推論の自己修正に限界。公式抄録確認。現在の全モデル・Webデザイン・実行結果付き修正に同じ結論を適用しない。 |
| R06 | Zheng et al., [Judging LLM-as-a-Judge with MT-Bench and Chatbot Arena](https://arxiv.org/abs/2306.05685)（2023、研究） | 位置・冗長さ・自己選好などの評価バイアスを分析。本文の評価方法・限界を確認。対話評価の結果であり、Webの美的評価におけるバイアス量は未確定。 |
| R07 | Cemri et al., [Why Do Multi-Agent LLM Systems Fail?](https://arxiv.org/abs/2503.13657)（2025、研究） | 複数エージェントの失敗を仕様、連携、検証・終了等に整理。本文冒頭・分類を確認。特定システム・課題の研究であり、単独が常に優れる証拠ではない。 |
| R08 | Doshi & Hauser, [Generative AI enhances individual creativity but reduces the collective diversity of novel content](https://doi.org/10.1126/sciadv.adn5290)（Science Advances 2024、研究） | 短編創作で個々の作品評価の向上と作品間の類似性増加を報告。出版社の索引化抄録確認、本文直接取得403。Web設計への転用は仮説。 |
| R09 | Segel & Heer, [Narrative Visualization: Telling Stories with Data](https://vis.stanford.edu/files/2010-Narrative-InfoVis.pdf)（2010、研究） | 58事例から語り手主導と読者主導の設計空間を整理。索引化PDF本文の導入を確認、直接取得タイムアウト。万能の最適形式を実証する研究ではない。 |
| R10 | [Heuristics for evaluating narrative visualization: a validation study](https://link.springer.com/article/10.1007/s12650-025-01051-y)（Journal of Visualization 2025、研究） | 実務家を用いた形成的・総括的評価。構成・読者体験・信頼性を含む評価の有用性を検討。公開本文の方法・限界を確認。指標だけで読者の理解や品質全体を測り切れない。 |
| R11 | Bret Victor, [Explorable Explanations](https://worrydream.com/ExplorableExplanations/)（2011、作品・論考） | 前提を操作し、具体例を探索する読み方を提示。本文確認。インタラクションを加えれば理解が必ず向上するという比較実験ではない。 |
| R12 | Olah et al., [Feature Visualization](https://distill.pub/2017/feature-visualization/)（2017、作品・研究） | 説明、可視化、実例、手法の限界が近接して配置される。本文と図の記述を分析。今回、同サイトの全操作や全デバイス表示は直接検証していない。 |
| R13 | The Pudding / Ilia Blinderman, [Making Internet Things, part 3: Storytelling](https://pudding.cool/process/how-to-make-dope-shit-part-3/)（実践） | 読者、主題、物語の範囲、文章と視覚表現の関係を制作側が説明。本文確認。個々の演出の因果効果ではなく、編集上の判断を学ぶ資料。 |
| R14 | Our World in Data, [Life expectancy — Grapher](https://ourworldindata.org/grapher/life-expectancy)（作品） | 指標の定義、単位、出典、期間、更新日、加工方法を可視化の近くに置く構成。ページ本文確認。今回はブラウザでの全操作を再現していない。 |
| R15 | Addy Osmani, [My LLM coding workflow going into 2026](https://addyosmani.com/blog/ai-coding-workflow/)（2026-01-04、実践） | 仕様・小さな実装単位・レビュー・履歴を用いる本人の制作経験。本文確認。第三者の統計や引用例は本調査の効果根拠に採用しない。人間に仕様作成を多く求める部分は今回の条件に合わせて変更する。 |
| R16 | Simon Willison, [Agentic manual testing](https://simonwillison.net/guides/agentic-engineering-patterns/agentic-manual-testing/)（実践） | コードを実行し、ブラウザ操作とスクリーンショット確認を行う本人の手法。本文確認。自動テスト通過と動作確認を区別する。 |
| R17 | Vercel, [Web Interface Guidelines](https://vercel.com/design/guidelines)（実践・仕様指針） | フォーカス、操作対象、状態、読み込みなど細部の確認項目。本文確認。Vercelの設計指針とWCAGの規範要件を同一視しない。 |
| R18 | Anthropic, [frontend-design skill](https://github.com/anthropics/skills/blob/main/skills/frontend-design/SKILL.md)（実践・設定） | 主題固有の視覚判断、文字組み、個性の指示。公開ファイル確認。設定自体は品質改善の独立した実験結果ではない。今回インストールしていない。 |
| R19 | OpenAI, [Frontend prompt instructions](https://developers.openai.com/api/docs/guides/frontend-prompt)（仕様・指針） | 用途別のUI、操作、既存文脈との整合に関するプロンプト。本文確認。特定モデル向けの指針を含み、角丸やアイコン等の細部を全サイトの普遍規則にはしない。 |
| R20 | OpenAI, [Custom instructions with AGENTS.md](https://learn.chatgpt.com/docs/agent-configuration/agents-md)（仕様） | プロジェクト単位の指示と階層的読込。本文確認。今回のAGENTS案の配置根拠。 |
| R21 | OpenAI, [Build skills](https://learn.chatgpt.com/docs/build-skills)（仕様） | スキルの段階的読込、SKILL.md、ローカルの `.agents/skills`。本文確認。能力・品質の向上を自動保証しない。 |
| R22 | OpenAI, [Model Context Protocol](https://learn.chatgpt.com/docs/extend/mcp?surface=cli)（仕様） | CodexからMCPを追加・確認する方法。本文確認。ツールを接続しただけで適切に利用されるとは限らない。 |
| R23 | OpenAI, [Subagents](https://learn.chatgpt.com/docs/agent-configuration/subagents)（仕様） | 現行ローカルCodexの明示的な分担、追加トークン消費、設定項目。本文確認。旧版にあった設定名のコピペを避け、手元の版を確認する。 |
| R24 | OpenAI, [Developer commands](https://learn.chatgpt.com/docs/developer-commands?surface=cli)（仕様） | `-C`、`--search`、`--image`、初期PROMPT等を確認。MacでのCLI実行は今回未実施。ChatGPT Webの操作とは異なる。 |
| R25 | Microsoft, [Playwright MCP](https://github.com/microsoft/playwright-mcp)／[Vision Mode](https://github.com/microsoft/playwright.dev/blob/main/mcp/vision-mode.mdx)（仕様） | ブラウザ接続、構造情報、スクリーンショット、座標操作の追加機能。本文確認。視覚検査には画像を見る指示が別途必要。 |
| R26 | Microsoft, [Visual comparisons](https://playwright.dev/docs/test-snapshots)（仕様） | スクリーンショット比較と基準画像。本文確認。基準との差分は、良いデザインかどうかを判定しない。 |
| R27 | W3C WAI, [Complex Images](https://www.w3.org/WAI/tutorials/images/complex/)（仕様指針） | 図の短い説明と内容を伝える長い説明、隣接するデータ・説明の提供。本文確認。 |
| R28 | W3C, [Understanding WCAG 2.2](https://www.w3.org/WAI/WCAG22/understanding/)／[Reflow](https://www.w3.org/WAI/WCAG21/Understanding/reflow)／[Focus not obscured](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum)（仕様） | 自動検査に加え、再配置・キーボード・フォーカスを確認する根拠。関連本文を確認。axe等の検査ゼロ件は適合宣言ではない。 |
| R29 | Google, [Web Vitals](https://web.dev/articles/vitals?content_language=English)（仕様指針） | LCP・INP・CLSとフィールド測定の75パーセンタイル。本文確認。ローカルの一回のLighthouseスコアと同義ではない。 |
| R30 | v0, [Design mode](https://v0.app/docs/design-mode)／[Screenshots and files](https://v0.app/docs/screenshots)（仕様） | 要素選択・画像を使った編集、参考画面の入力。公式文書で確認。今回は制作ツールとして未実行。 |
| R31 | Figma, [Explore Figma Make](https://help.figma.com/hc/en-us/articles/31304412302231-Explore-Figma-Make)（仕様） | プロンプトや既存デザインから機能する試作を作る機能。公式文書で確認。今回は未実行。性能・費用の比較をしていない。 |
| R32 | Google Labs Code, [Stitch SDK](https://github.com/google-labs-code/stitch-sdk)／[Stitch Skills](https://github.com/google-labs-code/stitch-skills)（仕様） | 画面生成・HTMLと画像取得・エージェント連携。作者リポジトリ確認。今回は未実行。出力の統合・保守性の優位は未検証。 |
| R33 | Astro, [Islands architecture](https://docs.astro.build/en/concepts/islands/)（仕様） | 静的HTMLと必要な箇所のクライアント処理。公式文書確認。設計の良し悪しをフレームワークが決めるわけではない。 |
| R34 | Next.js, [MDX](https://nextjs.org/docs/app/guides/mdx)／[Server and Client Components](https://nextjs.org/docs/app/getting-started/server-and-client-components)（仕様） | 文章とコンポーネント、サーバー・クライアント処理。公式文書確認。読み物だけに必須ではない。 |
| R35 | Playwrightコミュニティ, [Issue #449: Enable both snapshot and screen capture tools](https://github.com/microsoft/playwright-mcp/issues/449)（2025、当事者報告・議論） | 投稿者の要望とメンテナーの応答を確認。構造的な操作情報と画像の役割の違いを示す。古い設定への議論であり、現行版の制約として扱わない。 |
| R36 | Playwrightコミュニティ, [Issue #1581: screenshot response with filename](https://github.com/microsoft/playwright-mcp/issues/1581)（2026、当事者報告） | 画像の保存とモデルへの画像返却の重複に関する利用者報告。本文確認。Closed／移管の表示であり、現行版で同じ不具合が残るという根拠ではない。base64文字数をそのまま画像トークン数に換算しない。 |
| R37 | Microsoft, [Playwright CLI](https://github.com/microsoft/playwright-cli)／[公式READMEでの位置付け](https://github.com/microsoft/playwright/blob/main/README.md?plain=1)／[Snapshots](https://github.com/microsoft/playwright.dev/blob/main/mcp/snapshots.mdx)（仕様） | CLI、MCP、構造スナップショットと画像の使い分けを確認。CLIのコンテキスト効率は作者の説明であり、今回の費用比較実測ではない。 |

## 検索・採用の記録

- AI制作：`harness design long-running apps`、`Design2Code visual feedback`、`WebCompass web generation`、`multi-agent failure`、`LLM-as-a-judge bias`。
- 発想と表現：`parallel prototyping Dow`、`narrative visualization Segel Heer`、`heuristics narrative visualization validation`、`generative AI creativity diversity`。
- 実践：著者本人のAI coding workflow、agentic manual testing、The Puddingの制作解説、公開frontend-design設定。
- 実装：Codexの現行公式文書、Playwright、W3C、Web Vitals、Astro・Next.js、v0・Figma・Stitchの公式資料。
- コミュニティ：Playwrightの利用者が報告した画像・構造情報・コンテキストの問題を、メンテナーの応答と現行文書で照合。投稿を性能の一般的な証明として採用しない。

採用基準は「今回の失敗を説明するか」「検証条件が読めるか」「実装または評価の判断を変えるか」。広告・ランキングの数値だけ、出所の追えないSNS成功例、転載された同一情報は効果の根拠にしなかった。これらを独立の専門家の合意として数えていない。

これは構造化した探索的調査であり、全論文を網羅するシステマティックレビューではない。全文未取得の資料は上表に明記した。既存会話にあった「118作品の研究」等、著者と資料を特定できない主張は採用しなかった。WebCompassは2026年10月の論文掲載を確認できるが、[前身プレプリント](https://arxiv.org/abs/2604.18224)は4月公開であり「10月に初めて登場した研究」とは扱わない。
