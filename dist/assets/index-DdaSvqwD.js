import{c as O,j as n,R as $,r as h,M as z,a as Y}from"./vendor-B-HPuSN-.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))C(a);new MutationObserver(a=>{for(const d of a)if(d.type==="childList")for(const p of d.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&C(p)}).observe(document,{childList:!0,subtree:!0});function o(a){const d={};return a.integrity&&(d.integrity=a.integrity),a.referrerPolicy&&(d.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?d.credentials="include":a.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function C(a){if(a.ep)return;a.ep=!0;const d=o(a);fetch(a.href,d)}})();const X=JSON.parse('[{"id":"entry-01","name":"サンドローネ","category":"主","scores":[5,5,3],"code":4.6,"tier":"SS","confidence":"中","detailTier":"SS","element":"氷","role":"H","detailCategory":"主対象","detailConfidence":"中","judgment":"持続範囲火力と比較的単純な操作を両立。星電導を主軸とし、星拡散にも移行できる。","constraint":"八重1凸込みの公開値を無凸値として採用しない。敵の氷耐性と編成成立条件に注意。","team":"八重神子／オデット／エスコフィエ。","detailScores":[5,5,3],"refs":["C01","C02","C03"]},{"id":"entry-02","name":"ヴェスナ","category":"主","scores":[5,4.5,3.5],"code":4.525,"tier":"SS","confidence":"中","detailTier":"SS","element":"風","role":"H","detailCategory":"主対象","detailConfidence":"中","judgment":"星拡散の範囲火力が強く、支援込みで攻撃継続と生存をまとめられる。氷側の控え火力も有効。","constraint":"後半の強化攻撃まで通す必要がある。非モチーフ武器での爆発毎回使用はエネルギー条件を確認。","team":"オデット／ヴォジャニーツァ／ファルザン。","detailScores":[5,4.5,3.5],"refs":["C04","C05","C06","C07"]},{"id":"entry-03","name":"フリンズ","category":"主","scores":[4.5,5,3.5],"code":4.475,"tier":"SS","confidence":"中","detailTier":"SS","element":"雷","role":"H","detailCategory":"主対象","detailConfidence":"中","judgment":"短い爆発を軸に高い月感電火力を出し、イネファの防御と控え火力も活かす。範囲にも対応。","constraint":"月反応と月兆を成立させる味方の制約があり、自由枠だけで完全に代替できるわけではない。","team":"イネファ／コロンビーナ／スクロース。","detailScores":[4.5,5,3.5],"refs":["C08","C09"]},{"id":"entry-04","name":"ネフェル","category":"主","scores":[5,5,2],"code":4.4,"tier":"SS","confidence":"中","detailTier":"SS","element":"草","role":"H","detailCategory":"主対象","detailConfidence":"中","judgment":"月開花を専用の重撃火力へ変換し、完成編成での攻略余裕が大きい。短い移動を挟む攻撃も実用的。","constraint":"ラウマ等を欠くと下落が大きい。無回復スクロース型は攻撃偏重の別条件。炎付着固定の敵も苦手。","team":"ラウマ／コロンビーナ／ヨォーヨまたは白朮。","detailScores":[5,5,2],"refs":["C10","C11","C09","C12"]},{"id":"entry-05","name":"兹白","category":"主","scores":[5,5,2.5],"code":4.5,"tier":"SS","confidence":"中","detailTier":"SS","element":"岩","role":"H","detailCategory":"主対象","detailConfidence":"中","judgment":"月結晶の高い個人火力に、控えの月反応火力と支援を重ねられる。行動に調整余地がある。","constraint":"岩だから無条件に汎用的という評価はしない。水・月反応と専用支援が揃う条件での最上位。","team":"イルーガ／リンネア／コロンビーナ。","detailScores":[5,5,2.5],"refs":["C13","C14"]},{"id":"entry-06","name":"マーヴィカ","category":"主","scores":[4.5,4.5,3.5],"code":4.3,"tier":"S","confidence":"中","detailTier":"S","element":"炎","role":"H","detailCategory":"主対象","detailConfidence":"中","judgment":"初撃の大火力とその後の持続範囲火力があり、爆発中の強い中断耐性が実戦の損失を抑える。","constraint":"戦意供給・反応・支援の時間管理が条件。最適化した特殊コンボの値は通常操作の値と分ける。","team":"シロネン／シトラリ／ベネット。","detailScores":[4.5,4.5,3.5],"refs":["C15","C16"]},{"id":"entry-07","name":"スカーク","category":"主","scores":[4.5,4.5,2.5],"code":4.1,"tier":"S","confidence":"中","detailTier":"S","element":"氷","role":"H/Q","detailCategory":"主対象","detailConfidence":"中","judgment":"通常攻撃主体と短出場の爆発を使い分けられ、非凍結ボスでも戦える。自由な位置取りも長所。","constraint":"水氷制約とエスコフィエ依存がシアターの不完全編成で重い。凍結不可を一律の致命傷とはしない。","team":"フリーナ／エスコフィエ／ヴォジャニーツァまたは夜蘭。","detailScores":[4.5,4.5,2.5],"refs":["C17","C18"]},{"id":"entry-08","name":"ヌヴィレット","category":"主","scores":[4.5,3.5,5],"code":4.25,"tier":"S","confidence":"高","detailTier":"S","element":"水","role":"H","detailCategory":"主対象","detailConfidence":"高","judgment":"広い射程、移動しながらの範囲攻撃、自前回復、分割できる攻撃時間が複数ウェーブで強い。","constraint":"無凸の中断リスクを計上。最高火力型と鍾離入り安定型を同じ火力として扱わない。高HP単体だけなら相対低下。","team":"フリーナ／シロネン／楓原万葉、または鍾離＋異元素2枠型。","detailScores":[4.5,3.5,5],"refs":["C19"]},{"id":"entry-09","name":"アルレッキーノ","category":"主","scores":[4.5,4,4],"code":4.225,"tier":"S","confidence":"高","detailTier":"S","element":"炎","role":"H","detailCategory":"主対象","detailConfidence":"高","judgment":"高い炎火力と、交代・対象変更後も扱いやすい攻撃資源が実戦で有用。蒸発・溶解・過負荷も選べる。","constraint":"戦闘中の外部回復制限と無凸の被弾を考慮。回復目的の爆発使用には攻撃資源上の代償がある。","team":"シトラリ／ベネット／楓原万葉またはシロネン。","detailScores":[4.5,4,4],"refs":["C20"]},{"id":"entry-10","name":"ムアラニ","category":"主","scores":[4,5,3],"code":4.15,"tier":"S","confidence":"中","detailTier":"S","element":"水","role":"H","detailCategory":"主対象","detailConfidence":"中","judgment":"蒸発を大きな一撃へ集中でき、短い攻撃可能時間や少ない手数で倒せるボスに強い。","constraint":"接触・マーク・反応の失敗が一撃分の大きな損失になる。多ウェーブでは過剰ダメージと準備時間を考慮。","team":"マーヴィカ／シロネン／スクロース。","detailScores":[4,5,3],"refs":["C21"]},{"id":"entry-11","name":"ヴァレサ","category":"主","scores":[4.5,4,3.5],"code":4.125,"tier":"S","confidence":"中","detailTier":"S","element":"雷","role":"H","detailCategory":"主対象","detailConfidence":"中","judgment":"広い落下攻撃と柔軟な攻撃列が増援処理に強い。過負荷型などで高い火力を発揮する。","constraint":"モチーフと代替武器の差が大きい。紀行R1・非モチーフ条件なので最高投資の値を移植しない。","team":"ドゥリン／ニコ／イアンサ、またはシュヴルーズ・マーヴィカ型。","detailScores":[4.5,4,3.5],"refs":["C22"]},{"id":"entry-12","name":"リオセスリ","category":"主","scores":[4,4.5,3],"code":3.975,"tier":"S","confidence":"中","detailTier":"S","element":"氷","role":"H","detailCategory":"主対象","detailConfidence":"中","judgment":"強化後は星電導の有力アタッカー。爆発に偏らず、通常・重撃と自己回復で継続攻撃できる。","constraint":"主に単体向け。星電導型では過剰な回復が強化重撃を減らし得るため、防御は盾を中心に組む。","team":"オデット／八重神子／ニコ。","detailScores":[4,4.5,3],"refs":["C23","C02"]},{"id":"entry-13","name":"夢見月瑞希","category":"主","scores":[4.5,4,3],"code":4.025,"tier":"S","confidence":"中","detailTier":"S","element":"風","role":"H","detailCategory":"主対象","detailConfidence":"中","judgment":"星拡散対応後は単なる低火力の回復ドライバーではない。簡単な継続操作と自前回復が長所。","constraint":"星拡散変換役を本人だけでは代替できない。無凸評価に1～2凸の公開計算を混ぜない。","team":"オデット／氷主人公／スクロースまたはファルザン。","detailScores":[4.5,4,3],"refs":["C24","C25"]},{"id":"entry-14","name":"キィニチ","category":"主","scores":[4,4.5,3],"code":3.975,"tier":"S","confidence":"中","detailTier":"S","element":"草","role":"H","detailCategory":"主対象","detailConfidence":"中","judgment":"燃焼を維持しながら大砲を撃つ対単体戦力。ニコの全体支援と移動に追従する編成で実戦性が向上。","constraint":"大砲一発の欠落と操作・通信条件の影響が大きい。広く散った複数敵に一律に強いわけではない。","team":"ドゥリン／ニコ／エミリエまたはイアンサ。","detailScores":[4,4.5,3],"refs":["C26","C27"]},{"id":"entry-15","name":"ナヴィア","category":"主","scores":[4,3.5,4],"code":3.825,"tier":"S","confidence":"中","detailTier":"S","element":"岩","role":"H/Q","detailCategory":"主対象","detailConfidence":"中","judgment":"短い時間にまとまったダメージを出し、交代を挟みやすい。月結晶型や従来型を使い分けられる。","constraint":"攻撃を外すと損失が集中。月結晶支援の利益と本人の岩直撃ダメージを混同しない。","team":"リンネア／コロンビーナ／イネファ、またはシロネン軸。","detailScores":[4,3.5,4],"refs":["C28"]},{"id":"entry-16","name":"クレー","category":"主","scores":[4,4,3],"code":3.8,"tier":"S","confidence":"中","detailTier":"S","element":"炎","role":"H","detailCategory":"主対象","detailConfidence":"中","judgment":"魔導秘儀後は旧来の操作難と火力評価を引き継げない。多い炎付着で味方の反応火力も作る。","constraint":"無凸の位置。無料選択があることを理由に1凸を自動付与しない。魔導相方・エネルギー・吹き飛ばしが制約。","team":"ニコ／フリーナ／シロネン、または魔導過負荷型。","detailScores":[4,4,3],"refs":["C29","C27"]},{"id":"entry-17","name":"スクロース","category":"派生","scores":[4,4,3.5],"code":3.9,"tier":"S","confidence":"中","detailTier":"S","element":"風","role":"D","detailCategory":"派生・ドライバー","detailConfidence":"中","judgment":"能動的な拡散・翠緑・熟知配布で高い控え火力を動かす。魔導相方と組む型も成立する。","constraint":"これは本人の直接ダメージが専任上位並みという意味ではない。前衛変更時の反応・支援差を根拠に評価。","team":"イネファ／コロンビーナ／フィッシュル。","detailScores":[4,4,3.5],"refs":["C74","C09"]},{"id":"entry-18","name":"ファルカ","category":"主","scores":[4,4,2.5],"code":3.7,"tier":"A","confidence":"中","detailTier":"A","element":"風","role":"H","detailCategory":"主対象","detailConfidence":"中","judgment":"風と味方に応じた元素で攻撃し、炎型と魔導支援の組み合わせで高い総火力を得る。","constraint":"編成条件と適正4★武器の少なさを反映。複数元素を使えることと各元素型が同じ強さであることは別。","team":"プルーネ／ドゥリン／ニコ。","detailScores":[4,4,2.5],"refs":["C30"]},{"id":"entry-19","name":"コロンビーナ","category":"主","scores":[4,4,2.5],"code":3.7,"tier":"A","confidence":"中","detailTier":"A","element":"水","role":"H","detailCategory":"主対象","detailConfidence":"中","judgment":"無凸でも月開花の特殊重撃で前に出る運用が成立し、月反応の混合型も組める。","constraint":"支援役としての価値をこの位置に加算しない。月開花の専任アタッカーとしてはネフェルに優位がある。","team":"ラウマ／イネファ／アイノ。","detailScores":[4,4,2.5],"refs":["C09"]},{"id":"entry-20","name":"ローエン","category":"主","scores":[3.5,4,2.5],"code":3.475,"tier":"A","confidence":"中","detailTier":"A","element":"氷","role":"H/D","detailCategory":"主対象","detailConfidence":"中","judgment":"高頻度の氷付着により、本人の攻撃と控えのドゥリンの順溶解を両立する。単体で有力。","constraint":"総火力を本人の氷ダメージだけで判断しない。攻撃範囲、適正武器、ニコ等への依存を減点。","team":"ドゥリン／ニコ／シトラリ。","detailScores":[3.5,4,2.5],"refs":["C31"]},{"id":"entry-21","name":"嘉明","category":"主","scores":[4,4,2.5],"code":3.7,"tier":"A","confidence":"中","detailTier":"A","element":"炎","role":"H","detailCategory":"主対象","detailConfidence":"中","judgment":"完凸と反応支援で大きな落下攻撃を反復できる。最新の氷付着・攻撃支援で選択肢も増えた。","constraint":"完凸前提。落下中の水付着や反応継続を確認し、見た目の水付着の多さだけで相方を選ばない。","team":"シトラリ／閑雲／ベネット、またはオデット・ニコ型。","detailScores":[4,4,2.5],"refs":["C32"]},{"id":"entry-22","name":"アルハイゼン","category":"主","scores":[3.5,3.5,3.5],"code":3.5,"tier":"A","confidence":"中","detailTier":"A","element":"草","role":"H/D","detailCategory":"主対象","detailConfidence":"中","judgment":"本人の草火力と反応の両方で戦い、分割ローテーションも選べる。旧来の超開花だけに限定しない。","constraint":"現行最高峰との火力差はある。鏡・出場時間・ナヒーダの再付着などの実行条件を考慮。","team":"ラウマ／フリーナ／久岐忍、またはナヒーダ激化型。","detailScores":[3.5,3.5,3.5],"refs":["C33","C11","C34"]},{"id":"entry-23","name":"クロリンデ","category":"主","scores":[4,3.5,3.5],"code":3.725,"tier":"A","confidence":"中","detailTier":"A","element":"雷","role":"H/D","detailCategory":"主対象","detailConfidence":"中","judgment":"移動・自己回復・通常攻撃連動を同時にこなし、反応と控え火力を引き出す。複数系統を選べる。","constraint":"スキルの有効時間と待ち時間、中断、入力・遅延の影響を含める。理論最速の攻撃列を全員に要求しない。","team":"イネファ／コロンビーナ／スクロース、または過負荷型。","detailScores":[4,3.5,3.5],"refs":["C35","C09"]},{"id":"entry-24","name":"セノ","category":"主","scores":[3.5,4,2.5],"code":3.475,"tier":"A","confidence":"中","detailTier":"A","element":"雷","role":"H","detailCategory":"主対象","detailConfidence":"中","judgment":"星電導強化とスキルからの強化状態移行で、以前の爆発依存・長時間拘束の評価が変わった。","constraint":"古い4.2クイックガイドを現行結論の根拠にしない。特殊スキルのタイミングと非モチーフ武器の条件が残る。","team":"オデット／八重神子／ニコ。","detailScores":[3.5,4,2.5],"refs":["C36","C37","C02"]},{"id":"entry-25","name":"胡桃","category":"主","scores":[3.5,4,3],"code":3.575,"tier":"A","confidence":"中","detailTier":"A","element":"炎","role":"H","detailCategory":"主対象","detailConfidence":"中","judgment":"蒸発重撃を軸に対単体で強く、落下型も選べる。適正反応を保てる編成で戦力になる。","constraint":"無凸のスタミナとキャンセルの負担を計上。回復を一律に禁止せず、フリーナ・落下型は別の最適化として扱う。","team":"夜蘭／フリーナ／閑雲、または行秋・シロネン型。","detailScores":[3.5,4,3],"refs":["C38","C39"]},{"id":"entry-26","name":"魈","category":"主","scores":[3.5,3.5,2.5],"code":3.3,"tier":"A","confidence":"中","detailTier":"A","element":"風","role":"H","detailCategory":"主対象","detailConfidence":"中","judgment":"落下の範囲、移動、敵の怯ませを活かして複数敵を処理できる。専用支援で火力も十分。","constraint":"長い爆発出場とエネルギー、限られた支援枠が制約。吹き飛んだ小型敵への追跡も実戦に含む。","team":"ファルザン／閑雲／フリーナ。","detailScores":[3.5,3.5,2.5],"refs":["C40"]},{"id":"entry-27","name":"雷電将軍","category":"主","scores":[3.5,3.5,3],"code":3.4,"tier":"A","confidence":"中","detailTier":"A","element":"雷","role":"H/D","detailCategory":"主対象","detailConfidence":"中","judgment":"本人の爆発火力だけでなく、味方の要求チャージを下げる利益を持つ。月感電型でも意味のある前衛。","constraint":"2凸の印象を無凸に移さない。熟知スキル設置だけの超開花運用は、このメインDPS評価の対象外。","team":"イネファ／コロンビーナ／スクロース、または過負荷型。","detailScores":[3.5,3.5,3],"refs":["C41","C09"]},{"id":"entry-28","name":"レザー","category":"主","scores":[3.5,3.5,2.5],"code":3.3,"tier":"A","confidence":"中","detailTier":"A","element":"雷","role":"H","detailCategory":"主対象","detailConfidence":"中","judgment":"完凸と魔導秘儀によって、旧来の物理専任という分類から外れる。炎付与を使う過負荷型も有力。","constraint":"本人・シュヴルーズ・ベネットの凸を明示。未完凸版を同じ位置に置かず、旧物理型への評価でもない。","team":"ニコ／シュヴルーズ／ベネット。","detailScores":[3.5,3.5,2.5],"refs":["C27","C42"]},{"id":"entry-29","name":"ティナリ","category":"主","scores":[3.5,3.5,3],"code":3.4,"tier":"A","confidence":"中","detailTier":"A","element":"草","role":"Q","detailCategory":"主対象","detailConfidence":"中","judgment":"短い出場と追尾する重撃で、単体・移動する敵・細かな攻撃可能時間に対応しやすい。","constraint":"広い多ウェーブでは付着や対象の再設定が必要。激化型の長所を活かし、低相性の月開花型の数値で代表させない。","team":"八重神子／ナヒーダ／鍾離。","detailScores":[3.5,3.5,3],"refs":["C43","C44"]},{"id":"entry-30","name":"チャスカ","category":"主","scores":[3.5,4,4],"code":3.775,"tier":"A","confidence":"中","detailTier":"A","element":"風","role":"H","detailCategory":"主対象","detailConfidence":"中","judgment":"射程と複数元素の攻撃で、接近しにくい敵や特定元素耐性に対応しやすい。味方の組み替えも可能。","constraint":"無凸は主に単体向け。複数元素弾が複数敵へ分散しても範囲火力が増えるとは限らず、2凸の長所と区別する。","team":"シトラリ／ベネット／フリーナ、またはニコ型。","detailScores":[3.5,4,4],"refs":["C45"]},{"id":"entry-31","name":"リネ","category":"主","scores":[3.5,4,2.5],"code":3.475,"tier":"A","confidence":"中","detailTier":"A","element":"炎","role":"H","detailCategory":"主対象","detailConfidence":"中","judgment":"重撃とスキル・爆発を短い強化時間へまとめやすく、単体火力を伸ばせる。魔導支援を受ける型も候補。","constraint":"本人は魔導キャラではない。狙い撃ち中断、炎付着条件、近距離スキルへの移行を考慮する。","team":"ニコ／ドゥリン／シトラリ、またはベネット・楓原万葉型。","detailScores":[3.5,4,2.5],"refs":["C46","C27"]},{"id":"entry-32","name":"神里綾華","category":"主","scores":[3.5,3.5,2.5],"code":3.3,"tier":"A","confidence":"中","detailTier":"A","element":"氷","role":"H/Q","detailCategory":"主対象","detailConfidence":"中","judgment":"爆発を当て切れる相手には高いまとまり火力。強い氷水支援で非凍結戦も改善する。","constraint":"爆発の空振り・移動・ウェーブをまたぐ過剰ダメージが主要制約。非凍結と氷無効は別に扱う。","team":"フリーナ／エスコフィエ／ヴォジャニーツァ。","detailScores":[3.5,3.5,2.5],"refs":["C47","C18"]},{"id":"entry-33","name":"神里綾人","category":"主","scores":[3.5,3,4],"code":3.425,"tier":"A","confidence":"中","detailTier":"A","element":"水","role":"H/D","detailCategory":"主対象","detailConfidence":"中","judgment":"扱いやすい範囲水付着と短いスキル出場が反応編成で有用。月感電や氷水型への適応もある。","constraint":"瞬間火力とローテーション同期、非モチーフ武器との差が制約。単体の平均DPSだけで汎用性を否定しない。","team":"イネファ／コロンビーナ／スクロース、または凍結型。","detailScores":[3.5,3,4],"refs":["C48"]},{"id":"entry-34","name":"タルタリヤ","category":"主","scores":[3.5,3,3],"code":3.225,"tier":"A","confidence":"中","detailTier":"A","element":"水","role":"H/D","detailCategory":"主対象","detailConfidence":"中","judgment":"密集相手への断流と高速水付着で、自分と香菱の両方の火力を作る。蒸発爆発も初動に寄与。","constraint":"敵を集められること、出場時間とクールタイム管理が前提。凍結編成の低い単体値だけで代表させない。","team":"香菱／ベネット／楓原万葉。","detailScores":[3.5,3,3],"refs":["C49"]},{"id":"entry-35","name":"ディルック","category":"主","scores":[3.5,3.5,2.5],"code":3.3,"tier":"A","confidence":"中","detailTier":"A","element":"炎","role":"H","detailCategory":"主対象","detailConfidence":"中","judgment":"高い落下倍率を活かした溶解・蒸発型なら、古い通常連打型より大きく改善する。","constraint":"閑雲等を欠く場合は下がる。古い3.6ガイドだけでは落下型を説明できないため、閑雲側の資料と照合する。","team":"閑雲／シトラリ／ベネット。","detailScores":[3.5,3.5,2.5],"refs":["C50","C51"]},{"id":"entry-36","name":"刻晴","category":"主","scores":[3.5,3,3.5],"code":3.325,"tier":"A","confidence":"中","detailTier":"A","element":"雷","role":"H/D","detailCategory":"主対象","detailConfidence":"中","judgment":"短い攻撃・交代・爆発無敵で状況に適応しやすく、付着回数を要求する相手にも対応する。","constraint":"本人の火力は新しい上位勢より控えめ。味方の反応火力を含める一方、刻晴固有の利益も別途確認する。","team":"フィッシュル／ナヒーダ／楓原万葉、または月感電型。","detailScores":[3.5,3,3.5],"refs":["C52"]},{"id":"entry-37","name":"荒瀧一斗","category":"主","scores":[3.5,3.5,2.5],"code":3.3,"tier":"A","confidence":"中","detailTier":"A","element":"岩","role":"H","detailCategory":"主対象","detailConfidence":"中","judgment":"重撃の範囲と中断耐性を活かす。現行では純岩だけでなく月結晶・複合型も検討対象。","constraint":"月結晶編成でも本人の攻撃がすべて直接月反応化するわけではない。エネルギーと出場制約が残る。","team":"リンネア／コロンビーナ／イルーガ、またはシロネン型。","detailScores":[3.5,3.5,2.5],"refs":["C53","C09","C14"]},{"id":"entry-38","name":"ウェンティ","category":"主","scores":[3.5,3,4],"code":3.425,"tier":"A","confidence":"中","detailTier":"A","element":"風","role":"H/D","detailCategory":"主対象","detailConfidence":"中","judgment":"魔導強化による風付与の前衛運用を含める。吸引可能な敵では集敵そのものがチームの有効火力を増やす。","constraint":"吸引不能ボスと無凸・非モチーフ条件では評価を抑える。支援専任時の価値と混同しない。","team":"ドゥリン／ニコ／ファルザン。","detailScores":[3.5,3,4],"refs":["C54"]},{"id":"entry-39","name":"放浪者","category":"主","scores":[3.5,3,3.5],"code":3.325,"tier":"A","confidence":"中","detailTier":"A","element":"風","role":"H","detailCategory":"主対象","detailConfidence":"中","judgment":"射程と狙い先変更の容易さがあり、攻撃を分配しやすい。スキル主体で小戦闘にも入りやすい。","constraint":"無凸の空中被弾と中断が重い。盾入りと火力最大型の性能を同一視しない。新支援の寄与は推論を含む。","team":"ファルザン／ニコ／ベネット、またはフリーナ型。","detailScores":[3.5,3,3.5],"refs":["C55","C27"]},{"id":"entry-40","name":"甘雨","category":"主","scores":[3.5,3,3],"code":3.225,"tier":"A","confidence":"中","detailTier":"A","element":"氷","role":"H/Q","detailCategory":"主対象","detailConfidence":"中","judgment":"溶解重撃と凍結・爆発型を選べ、射程と範囲が強み。攻撃可能時間を選んで撃てる。","constraint":"重撃中断と準備時間が制約。強い氷サポーターが増えた事実だけで専用星反応アタッカーと同じ扱いにはしない。","team":"エミリエ／ドゥリン／ニコ、またはエスコフィエ型。","detailScores":[3.5,3,3],"refs":["C56"]},{"id":"entry-41","name":"宵宮","category":"主","scores":[3,3.5,3.5],"code":3.275,"tier":"A","confidence":"中","detailTier":"A","element":"炎","role":"H/D","detailCategory":"主対象","detailConfidence":"中","judgment":"遠距離の通常連打で攻撃・反応を成立させやすい。盾と組み合わせた安定性、動く単体への射程が長所。","constraint":"主に単体であり、攻撃列の中断は蒸発の対応にも影響。過負荷・控え範囲火力は検討するが本人の範囲とは分ける。","team":"イネファ／コロンビーナ／ベネット、または過負荷型。","detailScores":[3,3.5,3.5],"refs":["C57","C09"]},{"id":"entry-42","name":"ノエル","category":"主","scores":[3.5,3,4],"code":3.425,"tier":"A","confidence":"中","detailTier":"A","element":"岩","role":"H/D","detailCategory":"主対象","detailConfidence":"中","judgment":"完凸の範囲攻撃、盾、全体回復を兼任し、現行の控え火力・月結晶を動かす。編成の防御枠を節約できる。","constraint":"高HP単体を速く倒す能力とエネルギーは上位専任に劣る。旧来の岩単色だけで評価しない。","team":"コロンビーナ／リンネア／フィッシュルまたはフリーナ。","detailScores":[3.5,3,4],"refs":["C58"]},{"id":"entry-43","name":"主人公・氷","category":"主","scores":[3.5,4,3],"code":3.575,"tier":"A","confidence":"中","detailTier":"A","element":"氷","role":"H/Q","detailCategory":"主対象","detailConfidence":"中","judgment":"星反応変換、特殊重撃、爆発に加え、専用配布武器と任務由来の能力強化を含めて評価する。","constraint":"現行取得範囲の4凸で判定し、6凸の味方バフは使わない。上限はWikiの記載を採用し一次資料確認が残る。","team":"オデット／八重神子／ニコまたはアリョーシャ。","detailScores":[3.5,4,3],"refs":["C60","C61","C62"]},{"id":"entry-44","name":"ナヒーダ","category":"派生","scores":[3.5,3.5,4],"code":3.6,"tier":"A","confidence":"中","detailTier":"A","element":"草","role":"D","detailCategory":"派生・ドライバー","detailConfidence":"中","judgment":"能動的な草付着と追撃・熟知支援で反応を動かす。本人だけの通常攻撃倍率では測れない前衛。","constraint":"低耐久とウェーブごとの再マーキングに注意。控えでも発揮できる支援価値を前衛固有の加点として重複させない。","team":"行秋／久岐忍／ラウマ、またはニィロウ型。","detailScores":[3.5,3.5,4],"refs":["C73","C11"]},{"id":"entry-45","name":"珊瑚宮心海","category":"派生","scores":[3.5,3,4.5],"code":3.525,"tier":"A","confidence":"中","detailTier":"A","element":"水","role":"D","detailCategory":"派生・ドライバー","detailConfidence":"中","judgment":"前衛の水付着と全体回復を一人で担い、開花・水主体編成で生存しながら反応を継続できる。","constraint":"会心不能を月反応で自動解決できるわけではない。高HPボスの速度は専任火力型に劣る。","team":"ニィロウ／ラウマ／ナヒーダ、またはフリーナ水主体型。","detailScores":[3.5,3,4.5],"refs":["C75"]},{"id":"entry-46","name":"イファ","category":"派生","scores":[3.5,3.5,4],"code":3.6,"tier":"A","confidence":"中","detailTier":"A","element":"風","role":"D","detailCategory":"派生・ドライバー","detailConfidence":"中","judgment":"前衛拡散と全体回復をまとめ、月感電対応の支援もある。射程・移動で実戦の攻撃継続を助ける。","constraint":"星拡散の瑞希と同じ固有火力は持たない。夜魂や反応条件を満たした型で評価する。","team":"イネファ／コロンビーナ／オロルンまたはフィッシュル。","detailScores":[3.5,3.5,4],"refs":["C76","C09"]},{"id":"entry-47","name":"八重神子","category":"派生","scores":[3.5,3.5,3.5],"code":3.5,"tier":"A","confidence":"中","detailTier":"A","element":"雷","role":"D","detailCategory":"派生・ドライバー","detailConfidence":"中","judgment":"強化後の星電導の高い控え火力を持ち、通常・重撃で前衛運用もできる。相方へ交代しやすい。","constraint":"主力は控えでも出せる。この位置は前衛型の攻略性能であり、サブDPSランキングではない。1凸は未採用。","team":"オデット／ニコ／フィッシュル、または激化型。","detailScores":[3.5,3.5,3.5],"refs":["C80"]},{"id":"entry-48","name":"ドゥリン","category":"派生","scores":[3.5,3.5,3],"code":3.4,"tier":"A","confidence":"中","detailTier":"A","element":"炎","role":"H/Q","detailCategory":"派生・ドライバー","detailConfidence":"中","judgment":"黒形態の反応火力を中心に、前衛に残って支援と炎付与通常・重撃を活かす運用が成立する。","constraint":"評価は前衛型。ローエンと組んで控えから溶解する場合の強さを、そのまま本人の前衛型の点数にはしない。","team":"ベネット／ニコ／夜蘭、または氷付着型。","detailScores":[3.5,3.5,3],"refs":["C85"]},{"id":"entry-49","name":"ラウマ","category":"派生","scores":[3.5,3.5,3],"code":3.4,"tier":"A","confidence":"中","detailTier":"A","element":"草","role":"D","detailCategory":"派生・ドライバー","detailConfidence":"中","judgment":"無凸でも草通常攻撃で開花を動かす前衛運用がある。控えでも使える支援に追加の付着を重ねる。","constraint":"主なダメージ所有者が水側になる編成もある。6凸の専用前衛火力を無凸に持ち込まない。","team":"ニィロウ／行秋／白朮またはヨォーヨ。","detailScores":[3.5,3.5,3],"refs":["C11"]},{"id":"entry-50","name":"リンネア","category":"派生","scores":[3.5,3.5,3],"code":3.4,"tier":"A","confidence":"低","detailTier":"A","element":"岩","role":"Q/D","detailCategory":"派生・ドライバー","detailConfidence":"低","judgment":"月結晶の短時間大火力と、必要に応じた岩重撃付着を使う派生型。回復も兼ねる。","constraint":"主役割は控え支援。短出場型の本人火力と長く居座る利益を区別し、通常攻撃を主火力とは評価しない。","team":"コロンビーナ／イルーガ／ゴロー。","detailScores":[3.5,3.5,3],"refs":["C14","C09"]},{"id":"entry-51","name":"セトス","category":"主","scores":[3,3,3.5],"code":3.1,"tier":"B","confidence":"中","detailTier":"B","element":"雷","role":"H/Q","detailCategory":"主対象","detailConfidence":"中","judgment":"完凸で通常入力型と短時間の狙い撃ち型を選べる。熟知・反応を活かし、出場時間を調節できる。","constraint":"二つの型でエネルギー消費と持続火力が異なる。最新反応型の順位は直接比較資料が少ない。","team":"フィッシュル／ナヒーダ／楓原万葉、または月感電型。","detailScores":[3,3,3.5],"refs":["C59","C09"]},{"id":"entry-52","name":"煙緋","category":"主","scores":[2.5,2.5,3.5],"code":2.7,"tier":"B","confidence":"中","detailTier":"B","element":"炎","role":"H/D","detailCategory":"主対象","detailConfidence":"中","judgment":"射程と通常・重撃の反復で反応を起こせ、完凸ならスタミナと盾も補える。扱える相方は多い。","constraint":"攻撃準備とスタミナ、爆発回転、本人火力の差が高HP相手で表面化する。盾サポート評価ではない。","team":"行秋／ニコ／ベネット、または過負荷型。","detailScores":[2.5,2.5,3.5],"refs":["C63","C27"]},{"id":"entry-53","name":"凝光","category":"主","scores":[3,3,3],"code":3,"tier":"B","confidence":"低","detailTier":"B","element":"岩","role":"H/Q","detailCategory":"主対象","detailConfidence":"低","judgment":"短い交代と遠距離攻撃を活かし、月結晶支援を含む編成も選べる。単体に火力をまとめられる。","constraint":"狭い範囲と地形・遮蔽物の影響、現在の直接比較不足がある。月結晶型への再評価は推論の比率が高い。","team":"リンネア／コロンビーナ／イルーガ。","detailScores":[3,3,3],"refs":["C64","C14","C09"]},{"id":"entry-54","name":"鹿野院平蔵","category":"主","scores":[3,3,3.5],"code":3.1,"tier":"B","confidence":"中","detailTier":"B","element":"風","role":"H/D","detailCategory":"主対象","detailConfidence":"中","judgment":"短い高倍率スキルと能動的な拡散で、前衛兼反応役として戦える。交代も挟みやすい。","constraint":"純風の個人火力とドライバー型は別。スクロースの全体支援や瑞希の専用星拡散火力をそのまま代替しない。","team":"イネファ／コロンビーナ／フィッシュル、または激化拡散型。","detailScores":[3,3,3.5],"refs":["C65","C09"]},{"id":"entry-55","name":"カーヴェ","category":"主","scores":[2.5,2.5,3],"code":2.6,"tier":"B","confidence":"中","detailTier":"B","element":"草","role":"D","detailCategory":"主対象","detailConfidence":"中","judgment":"草付与と自分の開花被ダメージ回復を活かす前衛。ラウマ等の支援も受けられる。","constraint":"本人の開花起爆が反応所有権を奪うわけではない。前衛を他の草キャラにした場合との差とエネルギーが制約。","team":"ラウマ／コロンビーナ／久岐忍、またはニィロウ型。","detailScores":[2.5,2.5,3],"refs":["C66","C11"]},{"id":"entry-56","name":"フレミネ","category":"主","scores":[2.5,3,2.5],"code":2.675,"tier":"B","confidence":"中","detailTier":"B","element":"氷／物理","role":"H","detailCategory":"主対象","detailConfidence":"中","judgment":"完凸で氷スキル型と物理型を選べ、新しい水氷支援も受けられる。小刻みなスキルを反復できる。","constraint":"氷砕きが成立しない相手、エネルギー、操作最適化で差が出る。従来の物理型だけには固定しない。","team":"フリーナ／エスコフィエ／ヴォジャニーツァ、または超電導型。","detailScores":[2.5,3,2.5],"refs":["C68"]},{"id":"entry-57","name":"モナ","category":"派生","scores":[3,3,3],"code":3,"tier":"B","confidence":"中","detailTier":"B","element":"水","role":"D","detailCategory":"派生・ドライバー","detailConfidence":"中","judgment":"魔導相方との水付着・デバフ維持により、控えの反応を動かす前衛型が成立する。","constraint":"無凸なので2凸の熟知支援等は使わない。爆発一撃型、サポート専任、6凸重撃型を混ぜない。","team":"ドゥリン／ニコ／アルベド、または月感電型。","detailScores":[3,3,3],"refs":["C77","C27"]},{"id":"entry-58","name":"バーバラ","category":"派生","scores":[2.5,2.5,3.5],"code":2.7,"tier":"B","confidence":"中","detailTier":"B","element":"水","role":"D","detailCategory":"派生・ドライバー","detailConfidence":"中","judgment":"能動的な水付着と回復で開花系を動かせる。個人会心火力を求めない型なら高難度でも役割を持つ。","constraint":"スキルの自己水付着、射程と付着の管理が制約。会心蒸発型の最大値を標準運用にしない。","team":"ニィロウ／ラウマ／ナヒーダ、または超開花型。","detailScores":[2.5,2.5,3.5],"refs":["C78","C11"]},{"id":"entry-59","name":"リサ","category":"派生","scores":[3,3,3],"code":3,"tier":"B","confidence":"中","detailTier":"B","element":"雷","role":"H/D","detailCategory":"派生・ドライバー","detailConfidence":"中","judgment":"激化・燃焼混合や月感電で、元素付着と防御低下を活かす前衛。新しい控え火力との相性も検討。","constraint":"長押しスキルの隙と爆発回転が実戦上の制約。敵防御を参照しない反応部分へ防御低下の価値を過大に加算しない。","team":"フィッシュル／ドゥリン／ナヒーダ、または月感電型。","detailScores":[3,3,3],"refs":["C79"]},{"id":"entry-60","name":"リネット","category":"派生","scores":[3,3,3],"code":3,"tier":"B","confidence":"低","detailTier":"B","element":"風","role":"D","detailCategory":"派生・ドライバー","detailConfidence":"低","judgment":"完凸の風付与で能動的な拡散・反応ドライバーになる。挑発と交代のしやすさもある。","constraint":"完凸未満では同じ前衛運用にならない。最新月反応型は旧ガイドと反応資料からの推論を含む。","team":"イネファ／コロンビーナ／フィッシュル、または超開花型。","detailScores":[3,3,3],"refs":["C81","C09"]},{"id":"entry-61","name":"ドリー","category":"派生","scores":[2.5,2.5,3],"code":2.6,"tier":"B","confidence":"低","detailTier":"B","element":"雷","role":"D","detailCategory":"派生・ドライバー","detailConfidence":"低","judgment":"完凸の雷付与・回復と、雷怒等によるスキル反復で反応前衛を担う。","constraint":"短い付与時間と回転・範囲の管理が必要。最新編成の横断比較が乏しく、前衛としての評価確度は低め。","team":"ナヒーダ／フリーナ／フィッシュル、または激化型。","detailScores":[2.5,2.5,3],"refs":["C82"]},{"id":"entry-62","name":"主人公・炎","category":"派生","scores":[2.5,2.5,3],"code":2.6,"tier":"B","confidence":"低","detailTier":"B","element":"炎","role":"H","detailCategory":"派生・ドライバー","detailConfidence":"低","judgment":"完凸の炎転換と現行の旅人用武器・能力強化を使う前衛型。","constraint":"本来の控え付着役からの派生。新武器込みの最新比較は不足し、古い5.5時点の火力評価を直接移植していない。","team":"シトラリ／ニコ／ベネット、または蒸発型。","detailScores":[2.5,2.5,3],"refs":["C83","C62"]},{"id":"entry-63","name":"主人公・岩","category":"派生","scores":[2.5,2.5,3],"code":2.6,"tier":"B","confidence":"低","detailTier":"B","element":"岩","role":"Q/D","detailCategory":"派生・ドライバー","detailConfidence":"低","judgment":"短いスキル・爆発を使い、月結晶編成で前衛の岩付着も提供する。旅人用配布武器も利用。","constraint":"岩創造物による動線・狙いへの干渉と本人火力が制約。現行月結晶型の評価は支援側資料からの推論を含む。","team":"リンネア／コロンビーナ／イルーガ。","detailScores":[2.5,2.5,3],"refs":["C84","C09","C62"]},{"id":"entry-64","name":"キャンディス","category":"派生","scores":[2.5,2.5,3],"code":2.6,"tier":"B","confidence":"低","detailTier":"B","element":"水","role":"D","detailCategory":"派生・ドライバー","detailConfidence":"低","judgment":"自分の水付与と追加スキルで前衛運用でき、水氷支援や開花の反応役を担える。","constraint":"自分では自身の6凸追撃を発動できない。前衛型の個人火力は低く、支援型の全価値を加算しない。","team":"フリーナ／エスコフィエ／ヴォジャニーツァ、または開花型。","detailScores":[2.5,2.5,3],"refs":["C86"]},{"id":"entry-65","name":"ガイア","category":"派生","scores":[3,2.5,3],"code":2.825,"tier":"B","confidence":"低","detailTier":"B","element":"氷","role":"H/Q","detailCategory":"派生・ドライバー","detailConfidence":"低","judgment":"完凸の高頻度氷付着と爆発を活かし、前衛に残る氷水型や外部付与型を選べる。","constraint":"主力は爆発なので居座る利益は限定的。低相性の重雲型だけで全運用を代表させないが、専任上位との差は残る。","team":"フリーナ／申鶴／エスコフィエ、または重雲型。","detailScores":[3,2.5,3],"refs":["C88"]},{"id":"entry-66","name":"ロサリア","category":"派生","scores":[3,3,2.5],"code":2.9,"tier":"B","confidence":"低","detailTier":"B","element":"氷／物理","role":"H/Q","detailCategory":"派生・ドライバー","detailConfidence":"低","judgment":"溶解爆発を軸に、外部氷付与や物理通常を補う派生も持つ。短い交代で動ける。","constraint":"設置範囲と、本人が前に出る場合の上積みが制約。控えの溶解サブDPSとしての評価とは分ける。","team":"フリーナ／エスコフィエ／重雲、または溶解短出場型。","detailScores":[3,3,2.5],"refs":["C89"]},{"id":"entry-67","name":"フィッシュル","category":"派生","scores":[3,2.5,3],"code":2.825,"tier":"B","confidence":"低","detailTier":"B","element":"雷／物理","role":"D","detailCategory":"派生・ドライバー","detailConfidence":"低","judgment":"前衛の通常攻撃とオズを両立する派生。魔導強化は使用可能な相方がいる型で適用する。","constraint":"控えでほぼ同じ主火力を出せるため、前衛としての固有利益は小さい。物理武器の旧評価だけで判定しない。","team":"イネファ／コロンビーナ／スクロース、または物理型。","detailScores":[3,2.5,3],"refs":["C91","C74"]},{"id":"entry-68","name":"鍾離","category":"派生","scores":[3,2.5,3.5],"code":2.925,"tier":"B","confidence":"低","detailTier":"B","element":"岩／物理","role":"D","detailCategory":"派生・ドライバー","detailConfidence":"低","judgment":"強い盾と近距離の全耐性低下を維持し、通常攻撃で追撃・反応編成を動かす。","constraint":"サポートとしての最上位評価ではない。本人の攻撃火力は低く、高HP戦は控え火力への依存が大きい。","team":"イネファ／コロンビーナ／シロネン、または物理型。","detailScores":[3,2.5,3.5],"refs":["C92","C09"]},{"id":"entry-69","name":"ベネット","category":"派生","scores":[3,2.5,2.5],"code":2.725,"tier":"B","confidence":"低","detailTier":"B","element":"炎","role":"H/D","detailCategory":"派生・ドライバー","detailConfidence":"低","judgment":"短いスキルを連発して反応とエネルギーを作る前衛型を評価する。","constraint":"基準は6凸。重雲の氷付与を使う5凸止めの順溶解型は別条件。支援役としての重要性は点数に入れない。","team":"キャンディス／香菱／行秋、または炎落下型。","detailScores":[3,2.5,2.5],"refs":["C93","C86"]},{"id":"entry-70","name":"閑雲","category":"派生","scores":[3,3,3.5],"code":3.1,"tier":"B","confidence":"低","detailTier":"B","element":"風","role":"H/D","detailCategory":"派生・ドライバー","detailConfidence":"低","judgment":"無凸にも自己落下型と回復を兼ねる風ドライバー型がある。前衛として継続生存を確保できる。","constraint":"6凸の連続スキル型は含めない。現行反応ドライバー型の判断は一般反応とキットからの推論が多い。","team":"ファルザン／フリーナ／ベネット、または月感電ドライバー型。","detailScores":[3,3,3.5],"refs":["C51","C09"]},{"id":"entry-71","name":"エウルア","category":"主","scores":[2.5,2.5,2],"code":2.4,"tier":"C","confidence":"中","detailTier":"C","element":"物理","role":"H","detailCategory":"主対象","detailConfidence":"中","judgment":"物理のまとまった爆発と範囲があり、現在の支援や星電導の物理耐性低下も利用できる。","constraint":"遅れて出る主砲、無敵移行・増援・エネルギーが同時に効く。大きな一発の画像を平均攻略性能にはしない。","team":"八重神子／オデット／ニコ、またはフリーナ・ミカ型。","detailScores":[2.5,2.5,2],"refs":["C67","C02"]},{"id":"entry-72","name":"ディシア","category":"主","scores":[2,2,2.5],"code":2.1,"tier":"C","confidence":"中","detailTier":"C","element":"炎","role":"H","detailCategory":"主対象","detailConfidence":"中","judgment":"強化爆発中の中断への強さと耐久を活かす。支援の改善により前衛型を成立させる余地がある。","constraint":"無凸の火力とエネルギー、通常攻撃連動との相性が制約。控えの耐久・燃焼役としての価値はこのTierに含めない。","team":"ニコ／フリーナ／ベネット、または過負荷型。","detailScores":[2,2,2.5],"refs":["C69","C27"]},{"id":"entry-73","name":"アーロイ","category":"主","scores":[2,2,2],"code":2,"tier":"C","confidence":"低","detailTier":"C","element":"氷","role":"H/Q","detailCategory":"主対象","detailConfidence":"低","judgment":"スキル・爆発の短時間ダメージと、条件付きの氷付与で攻撃役を担える。","constraint":"通常攻撃型はコイル獲得・付与の再現性が課題。凸による改善も基準にできず、短出場型を含めても制約が大きい。","team":"シトラリ／ニコ／ベネット、または氷水型。","detailScores":[2,2,2],"refs":["C72"]},{"id":"entry-74","name":"シロネン","category":"派生","scores":[2.5,2.5,2],"code":2.4,"tier":"C","confidence":"低","detailTier":"C","element":"岩","role":"H","detailCategory":"派生・ドライバー","detailConfidence":"低","judgment":"無凸にも岩攻撃を続ける分岐はある。月結晶支援を使う派生を評価範囲に入れた。","constraint":"通常の支援型とは必要な元素構成が異なる。無凸の本人火力は低く、6凸の前衛性能は対象外。","team":"リンネア／イルーガ／コロンビーナ等、岩を多めにした型。","detailScores":[2.5,2.5,2],"refs":["C87","C14"]},{"id":"entry-75","name":"重雲","category":"派生","scores":[2.5,2.5,2.5],"code":2.5,"tier":"C","confidence":"低","detailTier":"C","element":"氷","role":"H/Q","detailCategory":"派生・ドライバー","detailConfidence":"低","judgment":"氷付与と短い爆発で、氷通常型・反応爆発型の攻撃役になれる。","constraint":"支援として付与を渡す価値と本人の前衛火力は別。低い通常火力、場の制約と現行比較不足がある。","team":"申鶴／エスコフィエ／フリーナ、または溶解型。","detailScores":[2.5,2.5,2.5],"refs":["C90"]},{"id":"entry-76","name":"辛炎","category":"主","scores":[1.5,1.5,2],"code":1.6,"tier":"D","confidence":"低","detailTier":"D","element":"炎／物理","role":"H/Q","detailCategory":"主対象","detailConfidence":"低","judgment":"完凸の重撃・爆発型に加え、外部炎付与と落下を使う別型も検討できる。","constraint":"物理・炎・盾の要求が噛み合いにくい。最新支援下の比較が不足し、最下位近辺の並びは確定しない。","team":"ベネット／閑雲／フリーナ、または物理型。","detailScores":[1.5,1.5,2],"refs":["C70","C51"]},{"id":"entry-77","name":"アンバー","category":"主","scores":[1.5,2,2],"code":1.775,"tier":"D","confidence":"低","detailTier":"D","element":"炎","role":"H/Q","detailCategory":"主対象","detailConfidence":"低","judgment":"手動起爆や溶解重撃で狙った瞬間の火力は作れる。弱点狙撃が機能する相手にも長所がある。","constraint":"主力操作の条件と範囲・時間効率が現行の高HP戦で重い。希少な成功動画から一般化しない。","team":"シトラリ／ニコ／ベネット、または重撃・人形型。","detailScores":[1.5,2,2],"refs":["C71"]}]'),U=JSON.parse(`[{"id":"G01","title":"HoYoverse日本法人：Ver.7.1実装・新キャラ説明","url":"https://prtimes.jp/main/html/rd/p/000000449.000096124.html","note":"公式発表。実装日と役割・天賦概略に使用。火力順位の証拠ではない。"},{"id":"G02","title":"公式：Ver.7.1前半イベント祈願","url":"https://genshin.hoyoverse.com/m/ja/news/detail/166228","note":"実装済みと将来予定の境界に使用。"},{"id":"G03","title":"公式：兹白・イルーガの実装説明","url":"https://prtimes.jp/main/html/rd/p/000000382.000096124.html","note":"兹白の正式表記と月結晶の専任役を確認。"},{"id":"G04","title":"公式：Stellar Swirl告知","url":"https://genshin.hoyoverse.com/news/detail/165478","note":"反応の追加時期を確認。本文は画像主体で取得制約あり。"},{"id":"G05","title":"KQM GINews：ゲーム内公式告知のアーカイブ","url":"https://github.com/KQM-git/GINews","note":"公式文章の保存版。7.1の螺旋補正と不具合修正を参照。公式運営サイトそのものではない。"},{"id":"G06","title":"KQM：Stellar Glimmer Reaction Guide","url":"https://keqingmains.com/misc/stellar-reaction-guide/","note":"7.0の意図された反応仕様、ダメージ分類・防御・耐性・バフ適用範囲。7.1新規キャラ一覧には未対応部分がある。"},{"id":"G07","title":"talah：Stellar-Conduct Reaction Guide","url":"https://mobalytics.gg/genshin-impact/guides/stellar-conduct","note":"2026-09-22更新。星電導の専門的な編成比較。C0付近の比較見解として扱い、順位をそのまま転載しない。"},{"id":"G08","title":"talah：Stellar Swirl Reaction Guide","url":"https://mobalytics.gg/genshin-impact/guides/stellar-swirl","note":"星拡散と付着、ヴォジャニーツァの水付着による機会損失を照合。"},{"id":"G09","title":"KQM Calculation Standard","url":"https://compendium.keqingmains.com/","note":"聖遺物・育成の比較規範。反応率や範囲命中率を保証しないという限界も採用。"},{"id":"G10","title":"gcsim開発者：Introduction","url":"https://docs.gcsim.app/","note":"シミュレーターの対象とモデル誤差の注意を確認。本研究で全キャラの再シミュレーションは実施していない。"},{"id":"G11","title":"Lightkeepers：Team Simulationsの説明","url":"https://lightkeepers.moe/teams","note":"平均的プレイヤー向けの回しとKQM聖遺物基準を掲げる。最速コンボ型の資料との違いを確認。"},{"id":"G12","title":"Lightkeepers：アルハイゼン・ラウマ型の設定例","url":"https://lightkeepers.moe/teams/configs/Alhaitham~C0~IronSting~R5__Furina~C0~FavoniusSword~R5__KukiShinobu~C6~IronSting~R1__Lauma~C0~FavoniusCodex~R5","note":"レベル・凸・装備・敵条件・回しのコードまで確認可能な例。掲載DPSを他方式の数値とは比較しない。"},{"id":"G13","title":"Gwisted：ヴェスナ／ファルザン／ヴォジャニーツァ／オデット","url":"https://gwisted.com/games/genshin-impact/calculations/dd5a89b6-d3ac-4550-aaae-a1dd4e1911ba","note":"公開171.05K DPS、19秒。回し・装備は見えるが全計算仮定は十分でなく、順位の定量根拠には採用しない。"},{"id":"G14","title":"Gwisted：サンドローネ／八重1凸／オデット／七七2凸","url":"https://gwisted.com/games/genshin-impact/calculations/510c773f-db9e-4428-a4aa-0f93aa8cdf63","note":"凸混在の検出例。無凸標準の値には変換しない。"},{"id":"G15","title":"genshin.im：Measured DPS Rankings","url":"https://genshin.im/measured-dps","note":"59件・2026-10-27更新の自己申告計測表。装備・凸の統一や一部編成が確認できず、数値序列を不採用。"},{"id":"G16","title":"中国語TapTap：V7.1ヴェスナ詳細検討","url":"https://www.taptap.cn/moment/851859733571699624","note":"操作時間・生成粒子・爆発頻度の仮定が明示される。外部バフを省いた個人計算なので実チーム比較には移植しない。"},{"id":"G17","title":"中国語TapTap：V7.0オデット詳細検討","url":"https://www.taptap.cn/moment/836558201024416220","note":"星反応の式と仮定を照合。更新・転載の重複を独立した証拠数に数えない。"},{"id":"G18","title":"日本語原神Wiki：幻想シアター","url":"https://wikiwiki.jp/genshinwiki/%E5%B9%BB%E6%83%B3%E3%82%B7%E3%82%A2%E3%82%BF%E3%83%BC","note":"活力・元素制限・選択仕様。ゲーム内説明を含むコミュニティ資料。"},{"id":"G19","title":"日本語原神Wiki：氷主人公","url":"https://wikiwiki.jp/genshinwiki/%E4%B8%BB%E4%BA%BA%E5%85%AC/%E6%B0%B7","note":"7.1現在4凸までという取得上限の記載。一次公式資料で上限の直接確認が残る。"},{"id":"G20","title":"日本語原神Wiki：星鋒の剣","url":"https://wikiwiki.jp/genshinwiki/%E7%89%87%E6%89%8B%E5%89%A3/%E6%98%9F%E9%8B%92%E3%81%AE%E5%89%A3","note":"少なくとも7.0時点で90・R3が取得可能という記載を採用。将来のR5は不採用。"},{"id":"G21","title":"AZA.GG：幽境の激戦統計","url":"https://genshin.aza.gg/leyline?l=ja","note":"使用率とUse/Ownの区別を確認。画像主体で対応名・母集団を十分監査できず、数値は採点に使わない。"},{"id":"G22","title":"genshin-build：Tier表の出典説明","url":"https://genshin-build.com/tier-list","note":"Prydwenからの許諾転載である旨を明記。同じ元データを複数票に数えないための確認例。"},{"id":"G23","title":"ゲームウィズ：7.1幽境の激戦","url":"https://gamewith.jp/genshin/article/show/501914","note":"現行ボスの攻略条件の補助確認。キャラ順位の根拠ではなく、公式の新ボス説明と照合。"},{"id":"G24","title":"KQM：更新履歴","url":"https://keqingmains.com/changelog/","note":"サイト全体の新しさと個別ガイドの更新版が一致しないことを確認。"},{"id":"G25","title":"BWIKI：サンドローネ攻略","url":"https://wiki.biligame.com/ys/%E6%A1%91%E5%A4%9A%E6%B6%85/%E6%94%BB%E7%95%A5","note":"中国語の具体的な配装・回しと控え爆発の省略を照合。掲載装備は本稿の武器上限と異なる。"},{"id":"G26","title":"BWIKI：ネフェル攻略","url":"https://wiki.biligame.com/ys/%E5%A5%88%E8%8A%99%E5%B0%94/%E6%94%BB%E7%95%A5","note":"ラウマ・コロンビーナの役割、回復がラウマ1凸である点を照合。"},{"id":"G27","title":"BWIKI：ヴェスナ攻略","url":"https://wiki.biligame.com/ys/%E8%96%87%E6%96%AF%E7%BA%B3/%E6%94%BB%E7%95%A5","note":"強化スタックと退場リセットを照合。画像・未記入箇所もあり、その部分を推測で埋めない。"},{"id":"G28","title":"DPSLeaders：gcsimリンク集","url":"https://dpsleaders.augmeneco.ru/?page=0","note":"回し・凍結条件・初動例外の記載を確認。リンク先計算の本文取得に制約があり、横断順位の数値には不採用。"},{"id":"C01","title":"Sandrone Quick Guide - KQM","url":"https://keqingmains.com/q/sandrone-quickguide/","note":"基礎仕様・編成の追跡用。古い資料は現行の最適性を保証しない。本文取得範囲は資料ごとに異なる。"},{"id":"C02","title":"Stellar Conduct Reaction Guide - Genshin Impact","url":"https://mobalytics.gg/genshin-impact/guides/stellar-conduct","note":"基礎仕様・編成の追跡用。古い資料は現行の最適性を保証しない。本文取得範囲は資料ごとに異なる。"},{"id":"C03","title":"桑多涅 / 攻略","url":"https://wiki.biligame.com/ys/%E6%A1%91%E5%A4%9A%E6%B6%85/%E6%94%BB%E7%95%A5","note":"基礎仕様・編成の追跡用。古い資料は現行の最適性を保証しない。本文取得範囲は資料ごとに異なる。"},{"id":"C04","title":"Vesna Build Guide - Weapons, Artifacts, & More - Genshin","url":"https://mobalytics.gg/genshin-impact/characters/vesna-build-guide","note":"基礎仕様・編成の追跡用。古い資料は現行の最適性を保証しない。本文取得範囲は資料ごとに異なる。"},{"id":"C05","title":"〖V7.1〗详谈薇斯纳的玩法、配队、抽取建议（平民玩家视角） - 原神7.1版本攻略征集 - TapTap 原神论坛","url":"https://www.taptap.cn/moment/851859733571699624","note":"基礎仕様・編成の追跡用。古い資料は現行の最適性を保証しない。本文取得範囲は資料ごとに異なる。"},{"id":"C06","title":"『原神』Ver.7.1アップデートを本日9月23日に実施。新★5「ヴェスナ」（CV:平野綾）、「ヴォジャニーツァ」（CV:伊藤かな恵）が登場！6周年記念の特典も盛りだくさん！ | 株式会社COGNOSPHEREのプレスリリース","url":"https://prtimes.jp/main/html/rd/p/000000449.000096124.html","note":"基礎仕様・編成の追跡用。古い資料は現行の最適性を保証しない。本文取得範囲は資料ごとに異なる。"},{"id":"C07","title":"薇斯纳 / 攻略","url":"https://wiki.biligame.com/ys/%E8%96%87%E6%96%AF%E7%BA%B3/%E6%94%BB%E7%95%A5","note":"基礎仕様・編成の追跡用。古い資料は現行の最適性を保証しない。本文取得範囲は資料ごとに異なる。"},{"id":"C08","title":"Flins Quick Guide - KQM","url":"https://keqingmains.com/q/flins-quickguide/","note":"基礎仕様・編成の追跡用。古い資料は現行の最適性を保証しない。本文取得範囲は資料ごとに異なる。"},{"id":"C09","title":"Columbina Quick Guide - KQM","url":"https://keqingmains.com/q/columbina-quickguide/","note":"基礎仕様・編成の追跡用。古い資料は現行の最適性を保証しない。本文取得範囲は資料ごとに異なる。"},{"id":"C10","title":"Nefer Quick Guide - KQM","url":"https://keqingmains.com/q/nefer-quickguide/","note":"基礎仕様・編成の追跡用。古い資料は現行の最適性を保証しない。本文取得範囲は資料ごとに異なる。"},{"id":"C11","title":"Lauma Quick Guide - KQM","url":"https://keqingmains.com/q/lauma-quickguide/","note":"基礎仕様・編成の追跡用。古い資料は現行の最適性を保証しない。本文取得範囲は資料ごとに異なる。"},{"id":"C12","title":"奈芙尔 / 攻略","url":"https://wiki.biligame.com/ys/%E5%A5%88%E8%8A%99%E5%B0%94/%E6%94%BB%E7%95%A5","note":"基礎仕様・編成の追跡用。古い資料は現行の最適性を保証しない。本文取得範囲は資料ごとに異なる。"},{"id":"C13","title":"Zibai Quick Guide - KQM","url":"https://keqingmains.com/q/zibai-quickguide/","note":"基礎仕様・編成の追跡用。古い資料は現行の最適性を保証しない。本文取得範囲は資料ごとに異なる。"},{"id":"C14","title":"Linnea Quick Guide - KQM","url":"https://keqingmains.com/q/linnea-quickguide/","note":"基礎仕様・編成の追跡用。古い資料は現行の最適性を保証しない。本文取得範囲は資料ごとに異なる。"},{"id":"C15","title":"Mavuika Quick Guide - KQM","url":"https://keqingmains.com/q/mavuika-quickguide/","note":"基礎仕様・編成の追跡用。古い資料は現行の最適性を保証しない。本文取得範囲は資料ごとに異なる。"},{"id":"C16","title":"DPSLeaders","url":"https://dpsleaders.augmeneco.ru/?page=0","note":"基礎仕様・編成の追跡用。古い資料は現行の最適性を保証しない。本文取得範囲は資料ごとに異なる。"},{"id":"C17","title":"Skirk Quick Guide - KQM","url":"https://keqingmains.com/q/skirk-quickguide/","note":"基礎仕様・編成の追跡用。古い資料は現行の最適性を保証しない。本文取得範囲は資料ごとに異なる。"},{"id":"C18","title":"Vodyanitsa Quick Guide - KQM","url":"https://keqingmains.com/q/vodyanitsa-quickguide/","note":"基礎仕様・編成の追跡用。古い資料は現行の最適性を保証しない。本文取得範囲は資料ごとに異なる。"},{"id":"C19","title":"Neuvillette Quick Guide - KQM","url":"https://keqingmains.com/q/neuvillette-quickguide/","note":"基礎仕様・編成の追跡用。古い資料は現行の最適性を保証しない。本文取得範囲は資料ごとに異なる。"},{"id":"C20","title":"Arlecchino Quick Guide - KQM","url":"https://keqingmains.com/q/arlecchino-quickguide/","note":"基礎仕様・編成の追跡用。古い資料は現行の最適性を保証しない。本文取得範囲は資料ごとに異なる。"},{"id":"C21","title":"Mualani Quick Guide - KQM","url":"https://keqingmains.com/q/mualani-quickguide/","note":"基礎仕様・編成の追跡用。古い資料は現行の最適性を保証しない。本文取得範囲は資料ごとに異なる。"},{"id":"C22","title":"Varesa Quick Guide - KQM","url":"https://keqingmains.com/q/varesa-quickguide/","note":"基礎仕様・編成の追跡用。古い資料は現行の最適性を保証しない。本文取得範囲は資料ごとに異なる。"},{"id":"C23","title":"Wriothesley Quick Guide - KQM","url":"https://keqingmains.com/q/wriothesley-quickguide/","note":"基礎仕様・編成の追跡用。古い資料は現行の最適性を保証しない。本文取得範囲は資料ごとに異なる。"},{"id":"C24","title":"Mizuki Quick Guide - KQM","url":"https://keqingmains.com/q/mizuki-quickguide/","note":"基礎仕様・編成の追跡用。古い資料は現行の最適性を保証しない。本文取得範囲は資料ごとに異なる。"},{"id":"C25","title":"Stellar Swirl Reaction Guide - Genshin Impact","url":"https://mobalytics.gg/genshin-impact/guides/stellar-swirl","note":"基礎仕様・編成の追跡用。古い資料は現行の最適性を保証しない。本文取得範囲は資料ごとに異なる。"},{"id":"C26","title":"Kinich Quick Guide - KQM","url":"https://keqingmains.com/q/kinich-quickguide/","note":"基礎仕様・編成の追跡用。古い資料は現行の最適性を保証しない。本文取得範囲は資料ごとに異なる。"},{"id":"C27","title":"Nicole Quick Guide - KQM","url":"https://keqingmains.com/q/nicole-quickguide/","note":"基礎仕様・編成の追跡用。古い資料は現行の最適性を保証しない。本文取得範囲は資料ごとに異なる。"},{"id":"C28","title":"Navia Guide: The Soaring Yellow Rose - KQM","url":"https://keqingmains.com/navia/","note":"基礎仕様・編成の追跡用。古い資料は現行の最適性を保証しない。本文取得範囲は資料ごとに異なる。"},{"id":"C29","title":"Klee Quick Guide - KQM","url":"https://keqingmains.com/q/klee-quickguide/","note":"基礎仕様・編成の追跡用。古い資料は現行の最適性を保証しない。本文取得範囲は資料ごとに異なる。"},{"id":"C30","title":"Varka Quick Guide - KQM","url":"https://keqingmains.com/q/varka-quickguide/","note":"基礎仕様・編成の追跡用。古い資料は現行の最適性を保証しない。本文取得範囲は資料ごとに異なる。"},{"id":"C31","title":"Lohen Quick Guide - KQM","url":"https://keqingmains.com/q/lohen-quickguide/","note":"基礎仕様・編成の追跡用。古い資料は現行の最適性を保証しない。本文取得範囲は資料ごとに異なる。"},{"id":"C32","title":"Gaming Quick Guide - KQM","url":"https://keqingmains.com/q/gaming-quickguide/","note":"基礎仕様・編成の追跡用。古い資料は現行の最適性を保証しない。本文取得範囲は資料ごとに異なる。"},{"id":"C33","title":"Alhaitham Quick Guide - KQM","url":"https://keqingmains.com/q/alhaitham-quickguide/","note":"基礎仕様・編成の追跡用。古い資料は現行の最適性を保証しない。本文取得範囲は資料ごとに異なる。"},{"id":"C34","title":"Lightkeepers","url":"https://lightkeepers.moe/teams/configs/Alhaitham~C0~IronSting~R5__Furina~C0~FavoniusSword~R5__KukiShinobu~C6~IronSting~R1__Lauma~C0~FavoniusCodex~R5","note":"基礎仕様・編成の追跡用。古い資料は現行の最適性を保証しない。本文取得範囲は資料ごとに異なる。"},{"id":"C35","title":"Clorinde Quick Guide - KQM","url":"https://keqingmains.com/q/clorinde-quickguide/","note":"基礎仕様・編成の追跡用。古い資料は現行の最適性を保証しない。本文取得範囲は資料ごとに異なる。"},{"id":"C36","title":"Cyno | KQM TCL","url":"https://library.keqingmains.com/cyno/","note":"基礎仕様・編成の追跡用。古い資料は現行の最適性を保証しない。本文取得範囲は資料ごとに異なる。"},{"id":"C37","title":"Cyno Build Guide - Weapons, Artifacts, & More - Genshin","url":"https://mobalytics.gg/genshin-impact/characters/cyno-build-guide","note":"基礎仕様・編成の追跡用。古い資料は現行の最適性を保証しない。本文取得範囲は資料ごとに異なる。"},{"id":"C38","title":"Hu Tao Guide: Butterfly's Embrace - KQM","url":"https://keqingmains.com/hu-tao/","note":"基礎仕様・編成の追跡用。古い資料は現行の最適性を保証しない。本文取得範囲は資料ごとに異なる。"},{"id":"C39","title":"Hu Tao Quick Guide - KQM","url":"https://keqingmains.com/q/hu-tao-quickguide/","note":"基礎仕様・編成の追跡用。古い資料は現行の最適性を保証しない。本文取得範囲は資料ごとに異なる。"},{"id":"C40","title":"Xiao Quick Guide - KQM","url":"https://keqingmains.com/q/xiao-quickguide/","note":"基礎仕様・編成の追跡用。古い資料は現行の最適性を保証しない。本文取得範囲は資料ごとに異なる。"},{"id":"C41","title":"Raiden Shogun Quick Guide - KQM","url":"https://keqingmains.com/q/raiden-quickguide/","note":"基礎仕様・編成の追跡用。古い資料は現行の最適性を保証しない。本文取得範囲は資料ごとに異なる。"},{"id":"C42","title":"Razor Build Guide - Weapons, Artifacts, & More - Genshin","url":"https://mobalytics.gg/genshin-impact/characters/razor-build-guide","note":"基礎仕様・編成の追跡用。古い資料は現行の最適性を保証しない。本文取得範囲は資料ごとに異なる。"},{"id":"C43","title":"Tighnari Quick Guide - KQM","url":"https://keqingmains.com/q/tighnari-quickguide/","note":"基礎仕様・編成の追跡用。古い資料は現行の最適性を保証しない。本文取得範囲は資料ごとに異なる。"},{"id":"C44","title":"Tighnari: Verdant Strider - KQM","url":"https://keqingmains.com/tighnari/","note":"基礎仕様・編成の追跡用。古い資料は現行の最適性を保証しない。本文取得範囲は資料ごとに異なる。"},{"id":"C45","title":"Chasca Quick Guide - KQM","url":"https://keqingmains.com/q/chasca-quickguide/","note":"基礎仕様・編成の追跡用。古い資料は現行の最適性を保証しない。本文取得範囲は資料ごとに異なる。"},{"id":"C46","title":"Lyney Quick Guide - KQM","url":"https://keqingmains.com/q/lyney-quickguide/","note":"基礎仕様・編成の追跡用。古い資料は現行の最適性を保証しない。本文取得範囲は資料ごとに異なる。"},{"id":"C47","title":"Ayaka Quick Guide - KQM","url":"https://keqingmains.com/q/ayaka-quickguide/","note":"基礎仕様・編成の追跡用。古い資料は現行の最適性を保証しない。本文取得範囲は資料ごとに異なる。"},{"id":"C48","title":"Ayato Quick Guide - KQM","url":"https://keqingmains.com/q/ayato-quickguide/","note":"基礎仕様・編成の追跡用。古い資料は現行の最適性を保証しない。本文取得範囲は資料ごとに異なる。"},{"id":"C49","title":"Tartaglia Quick Guide - KQM","url":"https://keqingmains.com/q/tartaglia-quickguide/","note":"基礎仕様・編成の追跡用。古い資料は現行の最適性を保証しない。本文取得範囲は資料ごとに異なる。"},{"id":"C50","title":"Diluc Quick Guide - KQM","url":"https://keqingmains.com/q/diluc-quickguide/","note":"基礎仕様・編成の追跡用。古い資料は現行の最適性を保証しない。本文取得範囲は資料ごとに異なる。"},{"id":"C51","title":"Xianyun Quick Guide - KQM","url":"https://keqingmains.com/q/xianyun-quickguide/","note":"基礎仕様・編成の追跡用。古い資料は現行の最適性を保証しない。本文取得範囲は資料ごとに異なる。"},{"id":"C52","title":"Keqing Guide | Endless Starlight - KQM","url":"https://keqingmains.com/keqing/","note":"基礎仕様・編成の追跡用。古い資料は現行の最適性を保証しない。本文取得範囲は資料ごとに異なる。"},{"id":"C53","title":"Itto Quick Guide - KQM","url":"https://keqingmains.com/q/itto-quickguide/","note":"基礎仕様・編成の追跡用。古い資料は現行の最適性を保証しない。本文取得範囲は資料ごとに異なる。"},{"id":"C54","title":"Venti Quick Guide - KQM","url":"https://keqingmains.com/q/venti-quickguide/","note":"基礎仕様・編成の追跡用。古い資料は現行の最適性を保証しない。本文取得範囲は資料ごとに異なる。"},{"id":"C55","title":"Wanderer Quick Guide - KQM","url":"https://keqingmains.com/q/wanderer-quickguide/","note":"基礎仕様・編成の追跡用。古い資料は現行の最適性を保証しない。本文取得範囲は資料ごとに異なる。"},{"id":"C56","title":"Ganyu Quick Guide - KQM","url":"https://keqingmains.com/q/ganyu-quickguide/","note":"基礎仕様・編成の追跡用。古い資料は現行の最適性を保証しない。本文取得範囲は資料ごとに異なる。"},{"id":"C57","title":"Yoimiya Quick Guide - KQM","url":"https://keqingmains.com/q/yoimiya-quickguide/","note":"基礎仕様・編成の追跡用。古い資料は現行の最適性を保証しない。本文取得範囲は資料ごとに異なる。"},{"id":"C58","title":"Noelle Quick Guide - KQM","url":"https://keqingmains.com/q/noelle-quickguide/","note":"基礎仕様・編成の追跡用。古い資料は現行の最適性を保証しない。本文取得範囲は資料ごとに異なる。"},{"id":"C59","title":"Sethos Quick Guide - KQM","url":"https://keqingmains.com/q/sethos-quickguide/","note":"基礎仕様・編成の追跡用。古い資料は現行の最適性を保証しない。本文取得範囲は資料ごとに異なる。"},{"id":"C60","title":"Traveler (Cryo) | KQM TCL","url":"https://library.keqingmains.com/characters/cryo/traveler/","note":"基礎仕様・編成の追跡用。古い資料は現行の最適性を保証しない。本文取得範囲は資料ごとに異なる。"},{"id":"C61","title":"主人公/氷 - 原神 Wiki*","url":"https://wikiwiki.jp/genshinwiki/%E4%B8%BB%E4%BA%BA%E5%85%AC/%E6%B0%B7","note":"基礎仕様・編成の追跡用。古い資料は現行の最適性を保証しない。本文取得範囲は資料ごとに異なる。"},{"id":"C62","title":"片手剣/星鋒の剣 - genshinwiki","url":"https://wikiwiki.jp/genshinwiki/%E7%89%87%E6%89%8B%E5%89%A3/%E6%98%9F%E9%8B%92%E3%81%AE%E5%89%A3","note":"基礎仕様・編成の追跡用。古い資料は現行の最適性を保証しない。本文取得範囲は資料ごとに異なる。"},{"id":"C63","title":"Yanfei Quick Guide - KQM","url":"https://keqingmains.com/q/yanfei-quickguide/","note":"基礎仕様・編成の追跡用。古い資料は現行の最適性を保証しない。本文取得範囲は資料ごとに異なる。"},{"id":"C64","title":"Ningguang Quick Guide - KQM","url":"https://keqingmains.com/q/ningguang-quickguide/","note":"基礎仕様・編成の追跡用。古い資料は現行の最適性を保証しない。本文取得範囲は資料ごとに異なる。"},{"id":"C65","title":"Heizou Quick Guide - KQM","url":"https://keqingmains.com/q/heizou-quickguide/","note":"基礎仕様・編成の追跡用。古い資料は現行の最適性を保証しない。本文取得範囲は資料ごとに異なる。"},{"id":"C66","title":"Kaveh Quick Guide - KQM","url":"https://keqingmains.com/q/kaveh-quickguide/","note":"基礎仕様・編成の追跡用。古い資料は現行の最適性を保証しない。本文取得範囲は資料ごとに異なる。"},{"id":"C67","title":"Eula Quick Guide - KQM","url":"https://keqingmains.com/q/eula-quickguide/","note":"基礎仕様・編成の追跡用。古い資料は現行の最適性を保証しない。本文取得範囲は資料ごとに異なる。"},{"id":"C68","title":"Freminet Quick Guide - KQM","url":"https://keqingmains.com/q/freminet-quickguide/","note":"基礎仕様・編成の追跡用。古い資料は現行の最適性を保証しない。本文取得範囲は資料ごとに異なる。"},{"id":"C69","title":"Dehya Quick Guide - KQM","url":"https://keqingmains.com/q/dehya-quickguide/","note":"基礎仕様・編成の追跡用。古い資料は現行の最適性を保証しない。本文取得範囲は資料ごとに異なる。"},{"id":"C70","title":"Xinyan Guide: Save Rock 'n' Roll - KQM","url":"https://keqingmains.com/xinyan/","note":"基礎仕様・編成の追跡用。古い資料は現行の最適性を保証しない。本文取得範囲は資料ごとに異なる。"},{"id":"C71","title":"Amber Quick Guide - KQM","url":"https://keqingmains.com/q/amber-quickguide/","note":"基礎仕様・編成の追跡用。古い資料は現行の最適性を保証しない。本文取得範囲は資料ごとに異なる。"},{"id":"C72","title":"Aloy Quick Guide - KQM","url":"https://keqingmains.com/q/aloy-quickguide/","note":"基礎仕様・編成の追跡用。古い資料は現行の最適性を保証しない。本文取得範囲は資料ごとに異なる。"},{"id":"C73","title":"Nahida Quick Guide - KQM","url":"https://keqingmains.com/q/nahida-quickguide/","note":"基礎仕様・編成の追跡用。古い資料は現行の最適性を保証しない。本文取得範囲は資料ごとに異なる。"},{"id":"C74","title":"Sucrose Quick Guide - KQM","url":"https://keqingmains.com/q/sucrose-quickguide/","note":"基礎仕様・編成の追跡用。古い資料は現行の最適性を保証しない。本文取得範囲は資料ごとに異なる。"},{"id":"C75","title":"Kokomi Quick Guide - KQM","url":"https://keqingmains.com/q/kokomi-quickguide/","note":"基礎仕様・編成の追跡用。古い資料は現行の最適性を保証しない。本文取得範囲は資料ごとに異なる。"},{"id":"C76","title":"Ifa Quick Guide - KQM","url":"https://keqingmains.com/q/ifa-quickguide/","note":"基礎仕様・編成の追跡用。古い資料は現行の最適性を保証しない。本文取得範囲は資料ごとに異なる。"},{"id":"C77","title":"Mona Quick Guide - KQM","url":"https://keqingmains.com/q/mona-quickguide/","note":"基礎仕様・編成の追跡用。古い資料は現行の最適性を保証しない。本文取得範囲は資料ごとに異なる。"},{"id":"C78","title":"Barbara Quick Guide - KQM","url":"https://keqingmains.com/q/barbara-quickguide/","note":"基礎仕様・編成の追跡用。古い資料は現行の最適性を保証しない。本文取得範囲は資料ごとに異なる。"},{"id":"C79","title":"Lisa Quick Guide - KQM","url":"https://keqingmains.com/q/lisa-quickguide/","note":"基礎仕様・編成の追跡用。古い資料は現行の最適性を保証しない。本文取得範囲は資料ごとに異なる。"},{"id":"C80","title":"Yae Miko Quick Guide - KQM","url":"https://keqingmains.com/q/yae-quickguide/","note":"基礎仕様・編成の追跡用。古い資料は現行の最適性を保証しない。本文取得範囲は資料ごとに異なる。"},{"id":"C81","title":"Lynette Quick Guide - KQM","url":"https://keqingmains.com/q/lynette-quickguide/","note":"基礎仕様・編成の追跡用。古い資料は現行の最適性を保証しない。本文取得範囲は資料ごとに異なる。"},{"id":"C82","title":"Dori Quick Guide - KQM","url":"https://keqingmains.com/q/dori-quickguide/","note":"基礎仕様・編成の追跡用。古い資料は現行の最適性を保証しない。本文取得範囲は資料ごとに異なる。"},{"id":"C83","title":"Pyro Traveler Quick Guide - KQM","url":"https://keqingmains.com/q/pyro-traveler-quickguide/","note":"基礎仕様・編成の追跡用。古い資料は現行の最適性を保証しない。本文取得範囲は資料ごとに異なる。"},{"id":"C84","title":"Geo Traveler Guide: Meteorite Impact - KQM","url":"https://keqingmains.com/geo-traveler/","note":"基礎仕様・編成の追跡用。古い資料は現行の最適性を保証しない。本文取得範囲は資料ごとに異なる。"},{"id":"C85","title":"Durin Quick Guide - KQM","url":"https://keqingmains.com/q/durin-quickguide/","note":"基礎仕様・編成の追跡用。古い資料は現行の最適性を保証しない。本文取得範囲は資料ごとに異なる。"},{"id":"C86","title":"Candace Quick Guide - KQM","url":"https://keqingmains.com/q/candace-quickguide/","note":"基礎仕様・編成の追跡用。古い資料は現行の最適性を保証しない。本文取得範囲は資料ごとに異なる。"},{"id":"C87","title":"Xilonen Quick Guide - KQM","url":"https://keqingmains.com/q/xilonen-quickguide/","note":"基礎仕様・編成の追跡用。古い資料は現行の最適性を保証しない。本文取得範囲は資料ごとに異なる。"},{"id":"C88","title":"Kaeya Quick Guide - KQM","url":"https://keqingmains.com/q/kaeya-quickguide/","note":"基礎仕様・編成の追跡用。古い資料は現行の最適性を保証しない。本文取得範囲は資料ごとに異なる。"},{"id":"C89","title":"Rosaria Quick Guide - KQM","url":"https://keqingmains.com/q/rosaria-quickguide/","note":"基礎仕様・編成の追跡用。古い資料は現行の最適性を保証しない。本文取得範囲は資料ごとに異なる。"},{"id":"C90","title":"Chongyun Quick Guide - KQM","url":"https://keqingmains.com/q/chongyun-quickguide/","note":"基礎仕様・編成の追跡用。古い資料は現行の最適性を保証しない。本文取得範囲は資料ごとに異なる。"},{"id":"C91","title":"Fischl Quick Guide - KQM","url":"https://keqingmains.com/q/fischl-quickguide/","note":"基礎仕様・編成の追跡用。古い資料は現行の最適性を保証しない。本文取得範囲は資料ごとに異なる。"},{"id":"C92","title":"Zhongli Quick Guide - KQM","url":"https://keqingmains.com/q/zhongli-quickguide/","note":"基礎仕様・編成の追跡用。古い資料は現行の最適性を保証しない。本文取得範囲は資料ごとに異なる。"},{"id":"C93","title":"Bennett Quick Guide - KQM","url":"https://keqingmains.com/q/bennett-quickguide/","note":"基礎仕様・編成の追跡用。古い資料は現行の最適性を保証しない。本文取得範囲は資料ごとに異なる。"}]`),Z=JSON.parse(`[{"id":"chapter-0","title":"Ver.7.1・2026年10月28日（日本時間）時点","body":"**研究形式：公開資料の検証と独自比較による文献調査版。** ゲーム内での一斉実測、全編成の再シミュレーション、統計的な勝率推定は実施していない。以下のTier、モード点、比較結論は筆者の判断であり、公式・攻略サイト・理論計算コミュニティの公認順位ではない。\\n\\n主対象53運用と、前衛ドライバー・短出場・外部付与などの派生24運用、計77運用を同じ総合基準で評価した。主人公は氷・炎・岩を別運用として扱う。入手・育成優先度ではなく、記載条件で編成を完成させた場合の攻略戦力を評価する。\\n\\n**最上位の採択：サンドローネ、ヴェスナ、フリンズ、ネフェル、兹白。** SSとSの境界は確定的な性能差ではない。特にマーヴィカはSS/S境界、ヌヴィレットはシアターを重くすると最上位へ上がる。無凸・非モチーフ条件での同一基準の直接比較は不足しており、最上位内の1位から5位までの順番は付けない。"},{"id":"chapter-1","title":"1. 総合Tier表","body":"| Tier | 意味 | 主対象53運用（順不同） | 派生・ドライバー24運用（同じ評価基準） |\\n|---|---|---|---|\\n| **SS** | 完成編成で最上位候補 | サンドローネ、ヴェスナ、フリンズ、ネフェル、兹白 | — |\\n| **S** | 極めて強い総合戦力 | マーヴィカ、スカーク、ヌヴィレット、アルレッキーノ、ムアラニ、ヴァレサ、リオセスリ、夢見月瑞希、キィニチ、ナヴィア、クレー | スクロース |\\n| **A** | 高難度で十分強い | ファルカ、コロンビーナ、ローエン、嘉明、アルハイゼン、クロリンデ、セノ、胡桃、魈、雷電将軍、レザー、ティナリ、チャスカ、リネ、神里綾華、神里綾人、タルタリヤ、ディルック、刻晴、荒瀧一斗、ウェンティ、放浪者、甘雨、宵宮、ノエル、主人公・氷 | ナヒーダ、珊瑚宮心海、イファ、八重神子、ドゥリン、ラウマ、リンネア |\\n| **B** | 条件選択・運用上の工夫が増える | セトス、煙緋、凝光、鹿野院平蔵、カーヴェ、フレミネ | モナ、バーバラ、リサ、リネット、ドリー、主人公・炎、主人公・岩、キャンディス、ガイア、ロサリア、フィッシュル、鍾離、ベネット、閑雲 |\\n| **C** | 攻略余裕を作るうえで大きな代償 | エウルア、ディシア、アーロイ | シロネン、重雲 |\\n| **D** | 標準条件では特殊運用向け | 辛炎、アンバー | — |\\n\\n\\nA以下でも、相性のよい敵に対して高難度を攻略できる。低Tierは「攻略不能」「支援役として弱い」を意味しない。例えばベネット、鍾離、シロネンを前衛として低く置くことは、通常の支援運用の価値を否定するものではない。\\n\\n主対象と派生を列で分けたのは役割を明示するためであり、別Tier表ではない。スクロースのSは、本人の直接攻撃だけでS相当のダメージを出すという意味ではなく、能動的な拡散・支援で編成全体を成立させる前衛としての評価である。カーヴェや平蔵など、通常から前衛役として扱われるドライバーは主対象側にも含む。"},{"id":"chapter-2","title":"2. 調査と情報の扱い","body":"### 調査した領域\\n\\n公式の実装・反応・敵・更新情報、英語圏のKQMとtalahの専門ガイド、日本語Wikiの仕様・取得制限、中国語のTapTapとBWIKIの回し・計算条件、公開gcsim設定、自己申告の木桩計測、使用率統計、一般攻略サイトを照合した。調査は2026年10月28日に行い、本文取得ができた範囲と検索要約のみの範囲を区別した。\\n\\n既存Tier表は結論の多数決には使っていない。仕様、操作列、編成制約、計算条件の違いから比較し、食い違いが生じた場合は元の条件を確認した。\\n\\n### 証拠を使い分けた方法\\n\\n| 情報 | 主な用途 | その情報だけでは分からないこと |\\n|---|---|---|\\n| 公式天賦・実装告知 | 何が実装済みか、効果の成立条件 | 実戦の最適編成や最速順位 |\\n| 検証・理論ガイド | 付着、回し、エネルギー、支援との相互作用 | 全コンテンツでの優劣 |\\n| 仮定が見える計算・設定 | 同じ条件内での武器・回し・編成差 | 別の計算方式のDPSとの単純比較 |\\n| 実戦計測 | 操作・命中・ウェーブへの対応の補助 | 装備・凸・試行選別が不明なままの一般化 |\\n| 使用率・攻略報告 | 現行ギミックと採用される組み合わせの探索 | 強さの因果効果や全プレイヤーの成功率 |\\n| 一般Tier表・短評 | 見落とした論点や反対例の探索 | 根拠を伴わない順位の採用 |\\n\\n動画はBilibiliの412エラーやYouTube取得制限があり、一部は本文・全映像・装備を確認できなかった。タイトルや検索要約だけで「実戦検証済み」とは扱っていない。NGAの詳細スレッドも本調査では十分取得できていない。\\n\\n### 残った情報源の偏り\\n\\n個別評価欄で参照したURLは93件。そのうちKQM本体・TCLが79件で、仕様参照は同コミュニティに大きく依存する。複数著者のガイドではあるが、完全に独立した79件の実験ではない。talah、BWIKI、日本語Wikiについても、元の仕様や検証が共有されている可能性を排除できない。\\n\\nこの偏りを隠して「多言語で一致したから確定」とはしない。最新上位勢の反応・編成条件は複数系統で照合した一方、旧キャラの最新支援下の横断比較には不足が残る。個別Tierの確度を高としたのは2件、中57件、低18件。これらは統計的な確率ではなく、評価の安定性についての自己評価である。\\n\\n### 主要資料\\n\\n| ID | 資料・発行者 | 採用範囲・留保 |\\n|---|---|---|\\n| G01 | [HoYoverse日本法人：Ver.7.1実装・新キャラ説明](https://prtimes.jp/main/html/rd/p/000000449.000096124.html) | 公式発表。実装日と役割・天賦概略に使用。火力順位の証拠ではない。 |\\n| G02 | [公式：Ver.7.1前半イベント祈願](https://genshin.hoyoverse.com/m/ja/news/detail/166228) | 実装済みと将来予定の境界に使用。 |\\n| G03 | [公式：兹白・イルーガの実装説明](https://prtimes.jp/main/html/rd/p/000000382.000096124.html) | 兹白の正式表記と月結晶の専任役を確認。 |\\n| G04 | [公式：Stellar Swirl告知](https://genshin.hoyoverse.com/news/detail/165478) | 反応の追加時期を確認。本文は画像主体で取得制約あり。 |\\n| G05 | [KQM GINews：ゲーム内公式告知のアーカイブ](https://github.com/KQM-git/GINews) | 公式文章の保存版。7.1の螺旋補正と不具合修正を参照。公式運営サイトそのものではない。 |\\n| G06 | [KQM：Stellar Glimmer Reaction Guide](https://keqingmains.com/misc/stellar-reaction-guide/) | 7.0の意図された反応仕様、ダメージ分類・防御・耐性・バフ適用範囲。7.1新規キャラ一覧には未対応部分がある。 |\\n| G07 | [talah：Stellar-Conduct Reaction Guide](https://mobalytics.gg/genshin-impact/guides/stellar-conduct) | 2026-09-22更新。星電導の専門的な編成比較。C0付近の比較見解として扱い、順位をそのまま転載しない。 |\\n| G08 | [talah：Stellar Swirl Reaction Guide](https://mobalytics.gg/genshin-impact/guides/stellar-swirl) | 星拡散と付着、ヴォジャニーツァの水付着による機会損失を照合。 |\\n| G09 | [KQM Calculation Standard](https://compendium.keqingmains.com/) | 聖遺物・育成の比較規範。反応率や範囲命中率を保証しないという限界も採用。 |\\n| G10 | [gcsim開発者：Introduction](https://docs.gcsim.app/) | シミュレーターの対象とモデル誤差の注意を確認。本研究で全キャラの再シミュレーションは実施していない。 |\\n| G11 | [Lightkeepers：Team Simulationsの説明](https://lightkeepers.moe/teams) | 平均的プレイヤー向けの回しとKQM聖遺物基準を掲げる。最速コンボ型の資料との違いを確認。 |\\n| G12 | [Lightkeepers：アルハイゼン・ラウマ型の設定例](https://lightkeepers.moe/teams/configs/Alhaitham~C0~IronSting~R5__Furina~C0~FavoniusSword~R5__KukiShinobu~C6~IronSting~R1__Lauma~C0~FavoniusCodex~R5) | レベル・凸・装備・敵条件・回しのコードまで確認可能な例。掲載DPSを他方式の数値とは比較しない。 |\\n| G13 | [Gwisted：ヴェスナ／ファルザン／ヴォジャニーツァ／オデット](https://gwisted.com/games/genshin-impact/calculations/dd5a89b6-d3ac-4550-aaae-a1dd4e1911ba) | 公開171.05K DPS、19秒。回し・装備は見えるが全計算仮定は十分でなく、順位の定量根拠には採用しない。 |\\n| G14 | [Gwisted：サンドローネ／八重1凸／オデット／七七2凸](https://gwisted.com/games/genshin-impact/calculations/510c773f-db9e-4428-a4aa-0f93aa8cdf63) | 凸混在の検出例。無凸標準の値には変換しない。 |\\n| G15 | [genshin.im：Measured DPS Rankings](https://genshin.im/measured-dps) | 59件・2026-10-27更新の自己申告計測表。装備・凸の統一や一部編成が確認できず、数値序列を不採用。 |\\n| G16 | [中国語TapTap：V7.1ヴェスナ詳細検討](https://www.taptap.cn/moment/851859733571699624) | 操作時間・生成粒子・爆発頻度の仮定が明示される。外部バフを省いた個人計算なので実チーム比較には移植しない。 |\\n| G17 | [中国語TapTap：V7.0オデット詳細検討](https://www.taptap.cn/moment/836558201024416220) | 星反応の式と仮定を照合。更新・転載の重複を独立した証拠数に数えない。 |\\n| G18 | [日本語原神Wiki：幻想シアター](https://wikiwiki.jp/genshinwiki/%E5%B9%BB%E6%83%B3%E3%82%B7%E3%82%A2%E3%82%BF%E3%83%BC) | 活力・元素制限・選択仕様。ゲーム内説明を含むコミュニティ資料。 |\\n| G19 | [日本語原神Wiki：氷主人公](https://wikiwiki.jp/genshinwiki/%E4%B8%BB%E4%BA%BA%E5%85%AC/%E6%B0%B7) | 7.1現在4凸までという取得上限の記載。一次公式資料で上限の直接確認が残る。 |\\n| G20 | [日本語原神Wiki：星鋒の剣](https://wikiwiki.jp/genshinwiki/%E7%89%87%E6%89%8B%E5%89%A3/%E6%98%9F%E9%8B%92%E3%81%AE%E5%89%A3) | 少なくとも7.0時点で90・R3が取得可能という記載を採用。将来のR5は不採用。 |\\n| G21 | [AZA.GG：幽境の激戦統計](https://genshin.aza.gg/leyline?l=ja) | 使用率とUse/Ownの区別を確認。画像主体で対応名・母集団を十分監査できず、数値は採点に使わない。 |\\n| G22 | [genshin-build：Tier表の出典説明](https://genshin-build.com/tier-list) | Prydwenからの許諾転載である旨を明記。同じ元データを複数票に数えないための確認例。 |\\n| G23 | [ゲームウィズ：7.1幽境の激戦](https://gamewith.jp/genshin/article/show/501914) | 現行ボスの攻略条件の補助確認。キャラ順位の根拠ではなく、公式の新ボス説明と照合。 |\\n| G24 | [KQM：更新履歴](https://keqingmains.com/changelog/) | サイト全体の新しさと個別ガイドの更新版が一致しないことを確認。 |\\n| G25 | [BWIKI：サンドローネ攻略](https://wiki.biligame.com/ys/%E6%A1%91%E5%A4%9A%E6%B6%85/%E6%94%BB%E7%95%A5) | 中国語の具体的な配装・回しと控え爆発の省略を照合。掲載装備は本稿の武器上限と異なる。 |\\n| G26 | [BWIKI：ネフェル攻略](https://wiki.biligame.com/ys/%E5%A5%88%E8%8A%99%E5%B0%94/%E6%94%BB%E7%95%A5) | ラウマ・コロンビーナの役割、回復がラウマ1凸である点を照合。 |\\n| G27 | [BWIKI：ヴェスナ攻略](https://wiki.biligame.com/ys/%E8%96%87%E6%96%AF%E7%BA%B3/%E6%94%BB%E7%95%A5) | 強化スタックと退場リセットを照合。画像・未記入箇所もあり、その部分を推測で埋めない。 |\\n| G28 | [DPSLeaders：gcsimリンク集](https://dpsleaders.augmeneco.ru/?page=0) | 回し・凍結条件・初動例外の記載を確認。リンク先計算の本文取得に制約があり、横断順位の数値には不採用。 |"},{"id":"chapter-3","title":"3. 評価条件と、その採用理由","body":"### 育成・凸・武器\\n\\n| 項目 | 採用条件 |\\n|---|---|\\n| キャラ・武器レベル | 原則90。95・100への上限突破は基準外 |\\n| 天賦 | 基本9、凸由来の+3は反映。通常攻撃を使わない型へ不必要な通常火力を加算しない |\\n| ★5 | 本人・味方とも無凸。恒常★5も無凸。周年配布や無料選択を理由に自動で1凸にしない |\\n| ★4 | 本人・味方とも6凸。完成編成を比較するための統一条件であり、全プレイヤーが所持するとの仮定ではない |\\n| 主人公 | 氷は4凸、炎・岩は6凸。任務由来の恒常強化は反映。氷6凸の味方バフは不採用 |\\n| 武器上限 | 鍛造・配布・★3はR5、通常祈願★4はR3、紀行はR1を基本。限定祈願★4の高精錬を標準にしない |\\n| ★5武器の例外 | 配布「星鋒の剣」90・R3は使用可。全員が取得可能な恒常報酬であるため。未取得の将来R5は使わない |\\n| 聖遺物 | 適正メイン・セット・チャージを優先。比較規範はKQMSの40サブステ配分。会心だけを同じ値に固定しない |\\n| 確率・維持条件 | 流浪楽章の当たり効果だけ、黎明の神剣の常時HP90%以上、螭龍の剣の無損失維持などを無条件に保証しない |\\n\\n武器・聖遺物の条件は**比較判断の基準**である。全77運用について、この条件の完全な最適化ビルドとDPSを新規計算したわけではない。外部の計算がこの基準と違う場合、数値を補正式で機械的に換算せず、採用範囲を限定した。\\n\\n★4完凸は、低凸の限定★5と比較する際に結果を左右する。嘉明、レザー、ノエル、ファルザン、シュヴルーズ、イルーガ、プルーネなどは特に注意が必要。未完凸★4を多く使う条件への変更は、第7節に分けて扱う。\\n\\nレベル90は現在の育成上限という意味ではない。100への強化は現行でも存在するが、無凸・一般的な完成育成の比較を保つため除いた。直接星反応ダメージと、レベル補正を使う反応ダメージも同一扱いにはしていない。\\n\\n### 編成と操作\\n\\n- 4人編成。★5の人数上限を設けず、全員無凸・非モチーフの範囲で、そのキャラに適した実用編成を認める。これは所持難度や獲得コストの比較ではないため。\\n- 回復・盾・自己回復など、連戦を可能にする生存手段を含む型を基準にする。無回復の最大火力型は別条件とする。ネフェルはラウマ・コロンビーナにヨォーヨ／白朮等を組み合わせる型を含めた。\\n- 同じ支援3人を全キャラに固定しない。キャラごとに反応とローテーションが違うので、固定すると特定系統を不当に有利にする。\\n- 通常のキャンセル、付着管理、敵の攻撃回避は認める。フレーム単位の最速操作、特殊な衝突挙動、何十回ものリセットを成功前提にはしない。\\n- 最初だけ満エネルギーの一巡で終わらず、次巡の回復と再始動を考慮。平均DPSを参照するときは90秒程度の連戦を比較規範とする。\\n- 個別欄の「代表編成」は最強固定の断定ではない。敵・装備・操作によって入れ替えを認める。同じ評価帯の代替候補も併記する。\\n\\n### 対象環境\\n\\n螺旋12層の星獲得、幽境の激戦エクストラの安定攻略と有利な相手でのアルティメット対応、幻想シアターの高難度公演・アルカナ挑戦を主対象とする。アルティメットの全期・全ボスを標準投資で必ずクリアできるという保証ではない。\\n\\n単体静止ボス、移動する単体、密集複数敵、分散複数敵、複数ウェーブ、短い攻撃可能時間、付着回数や元素を要求するギミックを確認項目とした。これらを同じ実測データセットで全員に実施したわけではなく、キットと資料を当てはめる比較場面である。\\n\\n通常の比較では、期間限定の地脈・淵月・開幕キャストの追加強化は外す。キャラと武器・聖遺物・恒常反応の効果は含む。キャラは相性のよい側に配置できるとし、水無効ボスへ水アタッカーを強制して点数をゼロにするような比較はしない。ただし、炎固定付着で反応を起こせない等の追加的な対応範囲の狭さは考慮する。\\n\\nVer.7.1にはTPS形式の「絶境挑戦」もあるが、通常の4人キャラ編成の強さを測るのに適さないため、通常メインDPSの採点には含めない。"},{"id":"chapter-4","title":"4. 強さの評価体系","body":"### 評価対象は「その前衛を中心にした編成が、どの程度の余裕で攻略できるか」\\n\\n本人の最大ダメージとチーム全体のDPSを同じ点として二重加算しない。本人が敵に直接大ダメージを与える型に加え、付着・追撃起動・反応・支援によって編成火力を作る前衛も評価する。ただし、強い控え3人を置くだけで全ての前衛を同点にはしない。\\n\\n具体的には、その前衛を似た代替キャラへ替えた場合に、付着、支援、エネルギー、防御、攻撃時間がどう変わるかを確認する。これは差分DPSを新規実測したという意味ではなく、編成内での役割を確認する比較である。\\n\\n### 各モードを採点するときの確認項目\\n\\n| 確認項目 | 攻略へ与える影響 | 二重計上を避ける扱い |\\n|---|---|---|\\n| 必要時間内に届く有効ダメージ | 瞬間火力、持続火力、初動、過剰ダメージ | 最終的な攻略余裕にまとめる |\\n| 命中・対象切替・範囲 | 射程、追跡、分散、増援、設置の移動 | 「範囲が広い」だけの独立加点にしない |\\n| ローテーション継続 | 粒子、爆発頻度、交代、強化状態の再始動 | 理論DPSから既に引かれた待ち時間を再減点しない |\\n| 生存と中断 | 回避による攻撃損失、盾・回復の枠、自己回復 | 盾の有無だけで安全性を決めない |\\n| 成立条件と適応範囲 | 必須元素、反応変換、固定付着、ドラフト制限 | 所持コストを減点せず、編成不成立の性能損失を扱う |\\n\\nこの5項目に別々の細かな点数を付けて合算する方法は採用しなかった。例えば範囲、命中率、操作容易性、安定性を別加点すると、同じ実戦上の利益を何度も数えやすいためである。\\n\\n### モード点と重み\\n\\n各モードで0〜5の序数コードを0.5刻みで付けた。5は現行の最上位候補、4は有力な攻略戦力、3は相性や運用条件を選ぶ競争力、2は大きな制約、1は標準条件では厳しい、0はその評価条件で機能しない、という目安である。\\n\\n総合コード = 0.45 × 螺旋点 + 0.35 × 幽境点 + 0.20 × シアター点\\n\\n| 統合先 | 総合コード |\\n|---|---|\\n| SS | 4.4以上 |\\n| S | 3.8以上4.4未満 |\\n| A | 3.2以上3.8未満 |\\n| B | 2.6以上3.2未満 |\\n| C | 2.0以上2.6未満 |\\n| D | 2.0未満 |\\n\\n螺旋45%は、多ウェーブと複数部屋を含む一般的な攻略性能を重くするため。幽境35%は、高HP単体と固有ギミックを強く反映するため。シアター20%は、不完全編成での能力を反映しつつ、育成人数・所持範囲という本来の入手育成評価が総合表を支配しないためである。\\n\\nこの比率はプレイヤー人口から推定した値ではなく、依頼の目的に合わせた価値判断である。また序数を加重平均すること自体が近似であり、「4点は2点の2倍強い」「4.0と3.9に測定可能な差がある」とは解釈しない。小数は計算監査のために付録へ残すだけとする。\\n\\nシアターは、そのキャラが出場可能な期を条件に、専用支援を欠く場合や支援の活力を温存する場合の戦力を考える。出場不可の月を0点にして特定元素を罰することはしない。専用支援が完全に揃う公演なら、この点は上がる。"},{"id":"chapter-5","title":"5. 再検証した重要な論点","body":"### 5.1 今期の数字をそのまま長期評価にしない\\n\\n7.1の10月16日更新の公式告知保存版では、螺旋12層の前半は星反応ダメージ+75%、後半は氷元素ダメージ+75%。淵月の追加ダメージも氷・星反応に関連する［G05］。\\n\\nこの環境で星・氷系の採用率やクリア速度が高いことは、本体性能の上昇と期間補正が重なった観測になる。本表では期間補正を外し、専用反応の恒常的な火力・操作・編成の性質を残した。それでも上位に残るという判断であり、+75%をそのまま能力として採点したのではない。\\n\\n### 5.2 公開DPSを横に並べると、味方の凸で結論が変わる\\n\\n| 公開例 | 記載DPS | 検出した比較上の問題 | 採用判断 |\\n|---|---:|---|---|\\n| Gwistedのヴェスナ／ファルザン／ヴォジャニーツァ／オデット | 171.05K | 19秒、編成と武器は見えるがチャージ・粒子・敵などの完全条件の監査は未完 | 回しの比較材料。確定DPS序列には不採用 |\\n| Gwistedのサンドローネ／八重／オデット／七七 | 180.56K | 八重1凸・七七2凸で、本表の★5無凸と異なる | 無凸サンドローネの標準DPSとして不採用 |\\n| genshin.imのサンドローネ／ヴェスナ | 247K／223K | 複数巡計測との説明はあるが、装備・凸の統一や一部編成の情報が不足。「Estimated」も混在 | 採点数値に不採用 |\\n\\n八重神子1凸には、現行の星電導編成で大きな意味を持つチーム支援がある。サンドローネだけ無凸でも、味方が1凸なら「全員無凸の比較」にはならない。無料の1凸選択が存在することは、それを全員の基準にしてよい根拠にはならない。\\n\\n参考の感度例として、公開例の3.25M程度のダメージを19秒で出すと約171Kだが、同じダメージのまま立て直しに2秒増えると約155Kになる。これは**仮の算術例**であり、ヴェスナが実際に必ず2秒遅れるという測定結果ではない。数秒の条件差で公表値の小さな差を超えることを示している。\\n\\n### 5.3 ヴェスナとサンドローネは「新しい方が自動的に上」ではない\\n\\n採択した比較判断は、サンドローネは持続範囲火力と操作再現性、ヴェスナは星拡散の範囲火力と対応する支援の組み合わせに強みがある、というもの。総合では同じSSに置き、単純な新旧の上下関係は付けない。\\n\\n中国語TapTapでは、ヴェスナの操作時間と粒子を細かく仮定してサンドローネと比較している。ただし外部バフを外した個人計算で、ファルザンの供給や実チームの支援を含む場合と一致しない。talah側はファルザンを含む編成で爆発頻度が変わる点を述べる。この食い違いは多数決で解消せず、「本人だけの計算」と「チーム供給込み」の前提差として扱った［G16、個別ヴェスナ資料］。\\n\\n### 5.4 リオセスリの耐久強化は、単純な回復追加ではない\\n\\n星電導型では、HP条件を満たして出す強化重撃が重要になる。過剰な外部回復は、その機会を減らす場合がある。従来型の「無凸は回復が必要」という一般説明を、星電導型にそのまま使うと誤る。\\n\\nしたがってニコ等の盾を評価し、回復最大の編成を自動的な安定最適とはしない。一方で被弾が激しく自己回復だけでは足りない対面なら、火力を落として回復を入れる判断も合理的である。単体への強さは高いが、分散敵・中断・HP管理の条件からSに留めた。八重1凸込みの数値を使わないことも同じ評価条件に含む。\\n\\n### 5.5 瑞希とセノは、昔の弱点をそのまま持ち越さない\\n\\n瑞希は星拡散に直接対応するようになり、回復と簡単な継続操作を両立する前衛としてSに評価した。セノもスキルから強化状態へ移る仕組みと星電導により、旧来の爆発だけに依存した評価が変わっている。\\n\\nただし、変換役や付着・支援は必要。瑞希1〜2凸の計算を無凸に置き換えず、セノの旧4.2ガイドを現行の最適編成の証拠にはしなかった。セノは武器・タイミング・専用支援への制約を残すのでAという判断である。\\n\\n### 5.6 凍結不可と、氷アタッカー不適性は同じではない\\n\\nスカークは水氷制約とエスコフィエへの依存が大きい。しかし通常の氷風セットだけに縛られるキャラではなく、凍結できないボスにも戦える。凍結不可という条件だけで大きく降格させない。\\n\\n綾華は主力爆発を当て切れるか、甘雨は重撃や爆発の設置を成立させられるかがより重要になる。同じ氷でもダメージの出し方が違うため、元素だけで横並びに評価しなかった。\\n\\n### 5.7 ローエンとタルタリヤは、個人DPSだけだと誤評価しやすい\\n\\nローエンは本人の氷攻撃だけでなく、控えのドゥリンに順溶解を起こさせる役割を持つ。タルタリヤも水付着で香菱の反応火力を作りつつ自分でも攻撃する。\\n\\n一方、控えの火力を全て前衛個人の功績にするのも不適切である。その前衛の付着・攻撃列が実際に必要か、他の前衛で代替すると何が失われるかを確認する。この考え方で両者を評価し、本人の大きな一撃だけで優劣を決めなかった。\\n\\n### 5.8 同じ支援役でも、強化できるダメージの範囲が違う\\n\\n星反応扱いのダメージは、通常の元素ダメージバフ・共通ダメージバフと同じようには伸びない。敵防御を参照しない一方、元素耐性は参照する［G06］。\\n\\nこのため、風キャラだから風杯、氷キャラだから氷杯、強いダメージバフ役だから誰にでも最適、という選び方はできない。攻撃力・熟知・会心・耐性低下・専用反応バフを、実際に作用するダメージ成分へ結び付けて評価した。ただし、防御を無視するから自動的に他の攻撃の2倍強い、とは結論していない。"},{"id":"chapter-6","title":"6. 各キャラクターの評価根拠","body":"以下の「評価理由・留保・モード点」は筆者の比較判断。「仕様・回し」の参照先を末尾に付ける。代表編成の組み合わせには、別々の現行資料を接続した推論も含む。全てが同じ条件で実測された編成ではない。\\n\\nH = 本人の継続攻撃、Q = 短い出場を繰り返す攻撃、D = 反応・付着を動かす前衛。複合は兼任。主対象／派生の区別はTierの上下とは関係しない。\\n\\n### SS：完成編成で最上位候補\\n\\n#### サンドローネ — SS（氷、H、主対象、確度中）\\n\\n**判定：** 持続範囲火力と比較的単純な操作を両立。星電導を主軸とし、星拡散にも移行できる。\\n\\n**制約・比較上の注意：** 八重1凸込みの公開値を無凸値として採用しない。敵の氷耐性と編成成立条件に注意。\\n\\n**代表的な味方3枠：** 八重神子／オデット／エスコフィエ。\\n\\n**モード点（螺旋／幽境／シアター）：** 5／5／3。参照：[C01]、[C02]、[C03]。\\n\\n#### ヴェスナ — SS（風、H、主対象、確度中）\\n\\n**判定：** 星拡散の範囲火力が強く、支援込みで攻撃継続と生存をまとめられる。氷側の控え火力も有効。\\n\\n**制約・比較上の注意：** 後半の強化攻撃まで通す必要がある。非モチーフ武器での爆発毎回使用はエネルギー条件を確認。\\n\\n**代表的な味方3枠：** オデット／ヴォジャニーツァ／ファルザン。\\n\\n**モード点（螺旋／幽境／シアター）：** 5／4.5／3.5。参照：[C04]、[C05]、[C06]、[C07]。\\n\\n#### フリンズ — SS（雷、H、主対象、確度中）\\n\\n**判定：** 短い爆発を軸に高い月感電火力を出し、イネファの防御と控え火力も活かす。範囲にも対応。\\n\\n**制約・比較上の注意：** 月反応と月兆を成立させる味方の制約があり、自由枠だけで完全に代替できるわけではない。\\n\\n**代表的な味方3枠：** イネファ／コロンビーナ／スクロース。\\n\\n**モード点（螺旋／幽境／シアター）：** 4.5／5／3.5。参照：[C08]、[C09]。\\n\\n#### ネフェル — SS（草、H、主対象、確度中）\\n\\n**判定：** 月開花を専用の重撃火力へ変換し、完成編成での攻略余裕が大きい。短い移動を挟む攻撃も実用的。\\n\\n**制約・比較上の注意：** ラウマ等を欠くと下落が大きい。無回復スクロース型は攻撃偏重の別条件。炎付着固定の敵も苦手。\\n\\n**代表的な味方3枠：** ラウマ／コロンビーナ／ヨォーヨまたは白朮。\\n\\n**モード点（螺旋／幽境／シアター）：** 5／5／2。参照：[C10]、[C11]、[C09]、[C12]。\\n\\n#### 兹白 — SS（岩、H、主対象、確度中）\\n\\n**判定：** 月結晶の高い個人火力に、控えの月反応火力と支援を重ねられる。行動に調整余地がある。\\n\\n**制約・比較上の注意：** 岩だから無条件に汎用的という評価はしない。水・月反応と専用支援が揃う条件での最上位。\\n\\n**代表的な味方3枠：** イルーガ／リンネア／コロンビーナ。\\n\\n**モード点（螺旋／幽境／シアター）：** 5／5／2.5。参照：[C13]、[C14]。\\n\\n### S：極めて強い総合戦力\\n\\n#### マーヴィカ — S（炎、H、主対象、確度中）\\n\\n**判定：** 初撃の大火力とその後の持続範囲火力があり、爆発中の強い中断耐性が実戦の損失を抑える。\\n\\n**制約・比較上の注意：** 戦意供給・反応・支援の時間管理が条件。最適化した特殊コンボの値は通常操作の値と分ける。\\n\\n**代表的な味方3枠：** シロネン／シトラリ／ベネット。\\n\\n**モード点（螺旋／幽境／シアター）：** 4.5／4.5／3.5。参照：[C15]、[C16]。\\n\\n#### スカーク — S（氷、H/Q、主対象、確度中）\\n\\n**判定：** 通常攻撃主体と短出場の爆発を使い分けられ、非凍結ボスでも戦える。自由な位置取りも長所。\\n\\n**制約・比較上の注意：** 水氷制約とエスコフィエ依存がシアターの不完全編成で重い。凍結不可を一律の致命傷とはしない。\\n\\n**代表的な味方3枠：** フリーナ／エスコフィエ／ヴォジャニーツァまたは夜蘭。\\n\\n**モード点（螺旋／幽境／シアター）：** 4.5／4.5／2.5。参照：[C17]、[C18]。\\n\\n#### ヌヴィレット — S（水、H、主対象、確度高）\\n\\n**判定：** 広い射程、移動しながらの範囲攻撃、自前回復、分割できる攻撃時間が複数ウェーブで強い。\\n\\n**制約・比較上の注意：** 無凸の中断リスクを計上。最高火力型と鍾離入り安定型を同じ火力として扱わない。高HP単体だけなら相対低下。\\n\\n**代表的な味方3枠：** フリーナ／シロネン／楓原万葉、または鍾離＋異元素2枠型。\\n\\n**モード点（螺旋／幽境／シアター）：** 4.5／3.5／5。参照：[C19]。\\n\\n#### アルレッキーノ — S（炎、H、主対象、確度高）\\n\\n**判定：** 高い炎火力と、交代・対象変更後も扱いやすい攻撃資源が実戦で有用。蒸発・溶解・過負荷も選べる。\\n\\n**制約・比較上の注意：** 戦闘中の外部回復制限と無凸の被弾を考慮。回復目的の爆発使用には攻撃資源上の代償がある。\\n\\n**代表的な味方3枠：** シトラリ／ベネット／楓原万葉またはシロネン。\\n\\n**モード点（螺旋／幽境／シアター）：** 4.5／4／4。参照：[C20]。\\n\\n#### ムアラニ — S（水、H、主対象、確度中）\\n\\n**判定：** 蒸発を大きな一撃へ集中でき、短い攻撃可能時間や少ない手数で倒せるボスに強い。\\n\\n**制約・比較上の注意：** 接触・マーク・反応の失敗が一撃分の大きな損失になる。多ウェーブでは過剰ダメージと準備時間を考慮。\\n\\n**代表的な味方3枠：** マーヴィカ／シロネン／スクロース。\\n\\n**モード点（螺旋／幽境／シアター）：** 4／5／3。参照：[C21]。\\n\\n#### ヴァレサ — S（雷、H、主対象、確度中）\\n\\n**判定：** 広い落下攻撃と柔軟な攻撃列が増援処理に強い。過負荷型などで高い火力を発揮する。\\n\\n**制約・比較上の注意：** モチーフと代替武器の差が大きい。紀行R1・非モチーフ条件なので最高投資の値を移植しない。\\n\\n**代表的な味方3枠：** ドゥリン／ニコ／イアンサ、またはシュヴルーズ・マーヴィカ型。\\n\\n**モード点（螺旋／幽境／シアター）：** 4.5／4／3.5。参照：[C22]。\\n\\n#### リオセスリ — S（氷、H、主対象、確度中）\\n\\n**判定：** 強化後は星電導の有力アタッカー。爆発に偏らず、通常・重撃と自己回復で継続攻撃できる。\\n\\n**制約・比較上の注意：** 主に単体向け。星電導型では過剰な回復が強化重撃を減らし得るため、防御は盾を中心に組む。\\n\\n**代表的な味方3枠：** オデット／八重神子／ニコ。\\n\\n**モード点（螺旋／幽境／シアター）：** 4／4.5／3。参照：[C23]、[C02]。\\n\\n#### 夢見月瑞希 — S（風、H、主対象、確度中）\\n\\n**判定：** 星拡散対応後は単なる低火力の回復ドライバーではない。簡単な継続操作と自前回復が長所。\\n\\n**制約・比較上の注意：** 星拡散変換役を本人だけでは代替できない。無凸評価に1～2凸の公開計算を混ぜない。\\n\\n**代表的な味方3枠：** オデット／氷主人公／スクロースまたはファルザン。\\n\\n**モード点（螺旋／幽境／シアター）：** 4.5／4／3。参照：[C24]、[C25]。\\n\\n#### キィニチ — S（草、H、主対象、確度中）\\n\\n**判定：** 燃焼を維持しながら大砲を撃つ対単体戦力。ニコの全体支援と移動に追従する編成で実戦性が向上。\\n\\n**制約・比較上の注意：** 大砲一発の欠落と操作・通信条件の影響が大きい。広く散った複数敵に一律に強いわけではない。\\n\\n**代表的な味方3枠：** ドゥリン／ニコ／エミリエまたはイアンサ。\\n\\n**モード点（螺旋／幽境／シアター）：** 4／4.5／3。参照：[C26]、[C27]。\\n\\n#### ナヴィア — S（岩、H/Q、主対象、確度中）\\n\\n**判定：** 短い時間にまとまったダメージを出し、交代を挟みやすい。月結晶型や従来型を使い分けられる。\\n\\n**制約・比較上の注意：** 攻撃を外すと損失が集中。月結晶支援の利益と本人の岩直撃ダメージを混同しない。\\n\\n**代表的な味方3枠：** リンネア／コロンビーナ／イネファ、またはシロネン軸。\\n\\n**モード点（螺旋／幽境／シアター）：** 4／3.5／4。参照：[C28]。\\n\\n#### クレー — S（炎、H、主対象、確度中）\\n\\n**判定：** 魔導秘儀後は旧来の操作難と火力評価を引き継げない。多い炎付着で味方の反応火力も作る。\\n\\n**制約・比較上の注意：** 無凸の位置。無料選択があることを理由に1凸を自動付与しない。魔導相方・エネルギー・吹き飛ばしが制約。\\n\\n**代表的な味方3枠：** ニコ／フリーナ／シロネン、または魔導過負荷型。\\n\\n**モード点（螺旋／幽境／シアター）：** 4／4／3。参照：[C29]、[C27]。\\n\\n#### スクロース — S（風、D、派生・ドライバー、確度中）\\n\\n**判定：** 能動的な拡散・翠緑・熟知配布で高い控え火力を動かす。魔導相方と組む型も成立する。\\n\\n**制約・比較上の注意：** これは本人の直接ダメージが専任上位並みという意味ではない。前衛変更時の反応・支援差を根拠に評価。\\n\\n**代表的な味方3枠：** イネファ／コロンビーナ／フィッシュル。\\n\\n**モード点（螺旋／幽境／シアター）：** 4／4／3.5。参照：[C74]、[C09]。\\n\\n### A：高難度で十分強い\\n\\n#### ファルカ — A（風、H、主対象、確度中）\\n\\n**判定：** 風と味方に応じた元素で攻撃し、炎型と魔導支援の組み合わせで高い総火力を得る。\\n\\n**制約・比較上の注意：** 編成条件と適正4★武器の少なさを反映。複数元素を使えることと各元素型が同じ強さであることは別。\\n\\n**代表的な味方3枠：** プルーネ／ドゥリン／ニコ。\\n\\n**モード点（螺旋／幽境／シアター）：** 4／4／2.5。参照：[C30]。\\n\\n#### コロンビーナ — A（水、H、主対象、確度中）\\n\\n**判定：** 無凸でも月開花の特殊重撃で前に出る運用が成立し、月反応の混合型も組める。\\n\\n**制約・比較上の注意：** 支援役としての価値をこの位置に加算しない。月開花の専任アタッカーとしてはネフェルに優位がある。\\n\\n**代表的な味方3枠：** ラウマ／イネファ／アイノ。\\n\\n**モード点（螺旋／幽境／シアター）：** 4／4／2.5。参照：[C09]。\\n\\n#### ローエン — A（氷、H/D、主対象、確度中）\\n\\n**判定：** 高頻度の氷付着により、本人の攻撃と控えのドゥリンの順溶解を両立する。単体で有力。\\n\\n**制約・比較上の注意：** 総火力を本人の氷ダメージだけで判断しない。攻撃範囲、適正武器、ニコ等への依存を減点。\\n\\n**代表的な味方3枠：** ドゥリン／ニコ／シトラリ。\\n\\n**モード点（螺旋／幽境／シアター）：** 3.5／4／2.5。参照：[C31]。\\n\\n#### 嘉明 — A（炎、H、主対象、確度中）\\n\\n**判定：** 完凸と反応支援で大きな落下攻撃を反復できる。最新の氷付着・攻撃支援で選択肢も増えた。\\n\\n**制約・比較上の注意：** 完凸前提。落下中の水付着や反応継続を確認し、見た目の水付着の多さだけで相方を選ばない。\\n\\n**代表的な味方3枠：** シトラリ／閑雲／ベネット、またはオデット・ニコ型。\\n\\n**モード点（螺旋／幽境／シアター）：** 4／4／2.5。参照：[C32]。\\n\\n#### アルハイゼン — A（草、H/D、主対象、確度中）\\n\\n**判定：** 本人の草火力と反応の両方で戦い、分割ローテーションも選べる。旧来の超開花だけに限定しない。\\n\\n**制約・比較上の注意：** 現行最高峰との火力差はある。鏡・出場時間・ナヒーダの再付着などの実行条件を考慮。\\n\\n**代表的な味方3枠：** ラウマ／フリーナ／久岐忍、またはナヒーダ激化型。\\n\\n**モード点（螺旋／幽境／シアター）：** 3.5／3.5／3.5。参照：[C33]、[C11]、[C34]。\\n\\n#### クロリンデ — A（雷、H/D、主対象、確度中）\\n\\n**判定：** 移動・自己回復・通常攻撃連動を同時にこなし、反応と控え火力を引き出す。複数系統を選べる。\\n\\n**制約・比較上の注意：** スキルの有効時間と待ち時間、中断、入力・遅延の影響を含める。理論最速の攻撃列を全員に要求しない。\\n\\n**代表的な味方3枠：** イネファ／コロンビーナ／スクロース、または過負荷型。\\n\\n**モード点（螺旋／幽境／シアター）：** 4／3.5／3.5。参照：[C35]、[C09]。\\n\\n#### セノ — A（雷、H、主対象、確度中）\\n\\n**判定：** 星電導強化とスキルからの強化状態移行で、以前の爆発依存・長時間拘束の評価が変わった。\\n\\n**制約・比較上の注意：** 古い4.2クイックガイドを現行結論の根拠にしない。特殊スキルのタイミングと非モチーフ武器の条件が残る。\\n\\n**代表的な味方3枠：** オデット／八重神子／ニコ。\\n\\n**モード点（螺旋／幽境／シアター）：** 3.5／4／2.5。参照：[C36]、[C37]、[C02]。\\n\\n#### 胡桃 — A（炎、H、主対象、確度中）\\n\\n**判定：** 蒸発重撃を軸に対単体で強く、落下型も選べる。適正反応を保てる編成で戦力になる。\\n\\n**制約・比較上の注意：** 無凸のスタミナとキャンセルの負担を計上。回復を一律に禁止せず、フリーナ・落下型は別の最適化として扱う。\\n\\n**代表的な味方3枠：** 夜蘭／フリーナ／閑雲、または行秋・シロネン型。\\n\\n**モード点（螺旋／幽境／シアター）：** 3.5／4／3。参照：[C38]、[C39]。\\n\\n#### 魈 — A（風、H、主対象、確度中）\\n\\n**判定：** 落下の範囲、移動、敵の怯ませを活かして複数敵を処理できる。専用支援で火力も十分。\\n\\n**制約・比較上の注意：** 長い爆発出場とエネルギー、限られた支援枠が制約。吹き飛んだ小型敵への追跡も実戦に含む。\\n\\n**代表的な味方3枠：** ファルザン／閑雲／フリーナ。\\n\\n**モード点（螺旋／幽境／シアター）：** 3.5／3.5／2.5。参照：[C40]。\\n\\n#### 雷電将軍 — A（雷、H/D、主対象、確度中）\\n\\n**判定：** 本人の爆発火力だけでなく、味方の要求チャージを下げる利益を持つ。月感電型でも意味のある前衛。\\n\\n**制約・比較上の注意：** 2凸の印象を無凸に移さない。熟知スキル設置だけの超開花運用は、このメインDPS評価の対象外。\\n\\n**代表的な味方3枠：** イネファ／コロンビーナ／スクロース、または過負荷型。\\n\\n**モード点（螺旋／幽境／シアター）：** 3.5／3.5／3。参照：[C41]、[C09]。\\n\\n#### レザー — A（雷、H、主対象、確度中）\\n\\n**判定：** 完凸と魔導秘儀によって、旧来の物理専任という分類から外れる。炎付与を使う過負荷型も有力。\\n\\n**制約・比較上の注意：** 本人・シュヴルーズ・ベネットの凸を明示。未完凸版を同じ位置に置かず、旧物理型への評価でもない。\\n\\n**代表的な味方3枠：** ニコ／シュヴルーズ／ベネット。\\n\\n**モード点（螺旋／幽境／シアター）：** 3.5／3.5／2.5。参照：[C27]、[C42]。\\n\\n#### ティナリ — A（草、Q、主対象、確度中）\\n\\n**判定：** 短い出場と追尾する重撃で、単体・移動する敵・細かな攻撃可能時間に対応しやすい。\\n\\n**制約・比較上の注意：** 広い多ウェーブでは付着や対象の再設定が必要。激化型の長所を活かし、低相性の月開花型の数値で代表させない。\\n\\n**代表的な味方3枠：** 八重神子／ナヒーダ／鍾離。\\n\\n**モード点（螺旋／幽境／シアター）：** 3.5／3.5／3。参照：[C43]、[C44]。\\n\\n#### チャスカ — A（風、H、主対象、確度中）\\n\\n**判定：** 射程と複数元素の攻撃で、接近しにくい敵や特定元素耐性に対応しやすい。味方の組み替えも可能。\\n\\n**制約・比較上の注意：** 無凸は主に単体向け。複数元素弾が複数敵へ分散しても範囲火力が増えるとは限らず、2凸の長所と区別する。\\n\\n**代表的な味方3枠：** シトラリ／ベネット／フリーナ、またはニコ型。\\n\\n**モード点（螺旋／幽境／シアター）：** 3.5／4／4。参照：[C45]。\\n\\n#### リネ — A（炎、H、主対象、確度中）\\n\\n**判定：** 重撃とスキル・爆発を短い強化時間へまとめやすく、単体火力を伸ばせる。魔導支援を受ける型も候補。\\n\\n**制約・比較上の注意：** 本人は魔導キャラではない。狙い撃ち中断、炎付着条件、近距離スキルへの移行を考慮する。\\n\\n**代表的な味方3枠：** ニコ／ドゥリン／シトラリ、またはベネット・楓原万葉型。\\n\\n**モード点（螺旋／幽境／シアター）：** 3.5／4／2.5。参照：[C46]、[C27]。\\n\\n#### 神里綾華 — A（氷、H/Q、主対象、確度中）\\n\\n**判定：** 爆発を当て切れる相手には高いまとまり火力。強い氷水支援で非凍結戦も改善する。\\n\\n**制約・比較上の注意：** 爆発の空振り・移動・ウェーブをまたぐ過剰ダメージが主要制約。非凍結と氷無効は別に扱う。\\n\\n**代表的な味方3枠：** フリーナ／エスコフィエ／ヴォジャニーツァ。\\n\\n**モード点（螺旋／幽境／シアター）：** 3.5／3.5／2.5。参照：[C47]、[C18]。\\n\\n#### 神里綾人 — A（水、H/D、主対象、確度中）\\n\\n**判定：** 扱いやすい範囲水付着と短いスキル出場が反応編成で有用。月感電や氷水型への適応もある。\\n\\n**制約・比較上の注意：** 瞬間火力とローテーション同期、非モチーフ武器との差が制約。単体の平均DPSだけで汎用性を否定しない。\\n\\n**代表的な味方3枠：** イネファ／コロンビーナ／スクロース、または凍結型。\\n\\n**モード点（螺旋／幽境／シアター）：** 3.5／3／4。参照：[C48]。\\n\\n#### タルタリヤ — A（水、H/D、主対象、確度中）\\n\\n**判定：** 密集相手への断流と高速水付着で、自分と香菱の両方の火力を作る。蒸発爆発も初動に寄与。\\n\\n**制約・比較上の注意：** 敵を集められること、出場時間とクールタイム管理が前提。凍結編成の低い単体値だけで代表させない。\\n\\n**代表的な味方3枠：** 香菱／ベネット／楓原万葉。\\n\\n**モード点（螺旋／幽境／シアター）：** 3.5／3／3。参照：[C49]。\\n\\n#### ディルック — A（炎、H、主対象、確度中）\\n\\n**判定：** 高い落下倍率を活かした溶解・蒸発型なら、古い通常連打型より大きく改善する。\\n\\n**制約・比較上の注意：** 閑雲等を欠く場合は下がる。古い3.6ガイドだけでは落下型を説明できないため、閑雲側の資料と照合する。\\n\\n**代表的な味方3枠：** 閑雲／シトラリ／ベネット。\\n\\n**モード点（螺旋／幽境／シアター）：** 3.5／3.5／2.5。参照：[C50]、[C51]。\\n\\n#### 刻晴 — A（雷、H/D、主対象、確度中）\\n\\n**判定：** 短い攻撃・交代・爆発無敵で状況に適応しやすく、付着回数を要求する相手にも対応する。\\n\\n**制約・比較上の注意：** 本人の火力は新しい上位勢より控えめ。味方の反応火力を含める一方、刻晴固有の利益も別途確認する。\\n\\n**代表的な味方3枠：** フィッシュル／ナヒーダ／楓原万葉、または月感電型。\\n\\n**モード点（螺旋／幽境／シアター）：** 3.5／3／3.5。参照：[C52]。\\n\\n#### 荒瀧一斗 — A（岩、H、主対象、確度中）\\n\\n**判定：** 重撃の範囲と中断耐性を活かす。現行では純岩だけでなく月結晶・複合型も検討対象。\\n\\n**制約・比較上の注意：** 月結晶編成でも本人の攻撃がすべて直接月反応化するわけではない。エネルギーと出場制約が残る。\\n\\n**代表的な味方3枠：** リンネア／コロンビーナ／イルーガ、またはシロネン型。\\n\\n**モード点（螺旋／幽境／シアター）：** 3.5／3.5／2.5。参照：[C53]、[C09]、[C14]。\\n\\n#### ウェンティ — A（風、H/D、主対象、確度中）\\n\\n**判定：** 魔導強化による風付与の前衛運用を含める。吸引可能な敵では集敵そのものがチームの有効火力を増やす。\\n\\n**制約・比較上の注意：** 吸引不能ボスと無凸・非モチーフ条件では評価を抑える。支援専任時の価値と混同しない。\\n\\n**代表的な味方3枠：** ドゥリン／ニコ／ファルザン。\\n\\n**モード点（螺旋／幽境／シアター）：** 3.5／3／4。参照：[C54]。\\n\\n#### 放浪者 — A（風、H、主対象、確度中）\\n\\n**判定：** 射程と狙い先変更の容易さがあり、攻撃を分配しやすい。スキル主体で小戦闘にも入りやすい。\\n\\n**制約・比較上の注意：** 無凸の空中被弾と中断が重い。盾入りと火力最大型の性能を同一視しない。新支援の寄与は推論を含む。\\n\\n**代表的な味方3枠：** ファルザン／ニコ／ベネット、またはフリーナ型。\\n\\n**モード点（螺旋／幽境／シアター）：** 3.5／3／3.5。参照：[C55]、[C27]。\\n\\n#### 甘雨 — A（氷、H/Q、主対象、確度中）\\n\\n**判定：** 溶解重撃と凍結・爆発型を選べ、射程と範囲が強み。攻撃可能時間を選んで撃てる。\\n\\n**制約・比較上の注意：** 重撃中断と準備時間が制約。強い氷サポーターが増えた事実だけで専用星反応アタッカーと同じ扱いにはしない。\\n\\n**代表的な味方3枠：** エミリエ／ドゥリン／ニコ、またはエスコフィエ型。\\n\\n**モード点（螺旋／幽境／シアター）：** 3.5／3／3。参照：[C56]。\\n\\n#### 宵宮 — A（炎、H/D、主対象、確度中）\\n\\n**判定：** 遠距離の通常連打で攻撃・反応を成立させやすい。盾と組み合わせた安定性、動く単体への射程が長所。\\n\\n**制約・比較上の注意：** 主に単体であり、攻撃列の中断は蒸発の対応にも影響。過負荷・控え範囲火力は検討するが本人の範囲とは分ける。\\n\\n**代表的な味方3枠：** イネファ／コロンビーナ／ベネット、または過負荷型。\\n\\n**モード点（螺旋／幽境／シアター）：** 3／3.5／3.5。参照：[C57]、[C09]。\\n\\n#### ノエル — A（岩、H/D、主対象、確度中）\\n\\n**判定：** 完凸の範囲攻撃、盾、全体回復を兼任し、現行の控え火力・月結晶を動かす。編成の防御枠を節約できる。\\n\\n**制約・比較上の注意：** 高HP単体を速く倒す能力とエネルギーは上位専任に劣る。旧来の岩単色だけで評価しない。\\n\\n**代表的な味方3枠：** コロンビーナ／リンネア／フィッシュルまたはフリーナ。\\n\\n**モード点（螺旋／幽境／シアター）：** 3.5／3／4。参照：[C58]。\\n\\n#### 主人公・氷 — A（氷、H/Q、主対象、確度中）\\n\\n**判定：** 星反応変換、特殊重撃、爆発に加え、専用配布武器と任務由来の能力強化を含めて評価する。\\n\\n**制約・比較上の注意：** 現行取得範囲の4凸で判定し、6凸の味方バフは使わない。上限はWikiの記載を採用し一次資料確認が残る。\\n\\n**代表的な味方3枠：** オデット／八重神子／ニコまたはアリョーシャ。\\n\\n**モード点（螺旋／幽境／シアター）：** 3.5／4／3。参照：[C60]、[C61]、[C62]。\\n\\n#### ナヒーダ — A（草、D、派生・ドライバー、確度中）\\n\\n**判定：** 能動的な草付着と追撃・熟知支援で反応を動かす。本人だけの通常攻撃倍率では測れない前衛。\\n\\n**制約・比較上の注意：** 低耐久とウェーブごとの再マーキングに注意。控えでも発揮できる支援価値を前衛固有の加点として重複させない。\\n\\n**代表的な味方3枠：** 行秋／久岐忍／ラウマ、またはニィロウ型。\\n\\n**モード点（螺旋／幽境／シアター）：** 3.5／3.5／4。参照：[C73]、[C11]。\\n\\n#### 珊瑚宮心海 — A（水、D、派生・ドライバー、確度中）\\n\\n**判定：** 前衛の水付着と全体回復を一人で担い、開花・水主体編成で生存しながら反応を継続できる。\\n\\n**制約・比較上の注意：** 会心不能を月反応で自動解決できるわけではない。高HPボスの速度は専任火力型に劣る。\\n\\n**代表的な味方3枠：** ニィロウ／ラウマ／ナヒーダ、またはフリーナ水主体型。\\n\\n**モード点（螺旋／幽境／シアター）：** 3.5／3／4.5。参照：[C75]。\\n\\n#### イファ — A（風、D、派生・ドライバー、確度中）\\n\\n**判定：** 前衛拡散と全体回復をまとめ、月感電対応の支援もある。射程・移動で実戦の攻撃継続を助ける。\\n\\n**制約・比較上の注意：** 星拡散の瑞希と同じ固有火力は持たない。夜魂や反応条件を満たした型で評価する。\\n\\n**代表的な味方3枠：** イネファ／コロンビーナ／オロルンまたはフィッシュル。\\n\\n**モード点（螺旋／幽境／シアター）：** 3.5／3.5／4。参照：[C76]、[C09]。\\n\\n#### 八重神子 — A（雷、D、派生・ドライバー、確度中）\\n\\n**判定：** 強化後の星電導の高い控え火力を持ち、通常・重撃で前衛運用もできる。相方へ交代しやすい。\\n\\n**制約・比較上の注意：** 主力は控えでも出せる。この位置は前衛型の攻略性能であり、サブDPSランキングではない。1凸は未採用。\\n\\n**代表的な味方3枠：** オデット／ニコ／フィッシュル、または激化型。\\n\\n**モード点（螺旋／幽境／シアター）：** 3.5／3.5／3.5。参照：[C80]。\\n\\n#### ドゥリン — A（炎、H/Q、派生・ドライバー、確度中）\\n\\n**判定：** 黒形態の反応火力を中心に、前衛に残って支援と炎付与通常・重撃を活かす運用が成立する。\\n\\n**制約・比較上の注意：** 評価は前衛型。ローエンと組んで控えから溶解する場合の強さを、そのまま本人の前衛型の点数にはしない。\\n\\n**代表的な味方3枠：** ベネット／ニコ／夜蘭、または氷付着型。\\n\\n**モード点（螺旋／幽境／シアター）：** 3.5／3.5／3。参照：[C85]。\\n\\n#### ラウマ — A（草、D、派生・ドライバー、確度中）\\n\\n**判定：** 無凸でも草通常攻撃で開花を動かす前衛運用がある。控えでも使える支援に追加の付着を重ねる。\\n\\n**制約・比較上の注意：** 主なダメージ所有者が水側になる編成もある。6凸の専用前衛火力を無凸に持ち込まない。\\n\\n**代表的な味方3枠：** ニィロウ／行秋／白朮またはヨォーヨ。\\n\\n**モード点（螺旋／幽境／シアター）：** 3.5／3.5／3。参照：[C11]。\\n\\n#### リンネア — A（岩、Q/D、派生・ドライバー、確度低）\\n\\n**判定：** 月結晶の短時間大火力と、必要に応じた岩重撃付着を使う派生型。回復も兼ねる。\\n\\n**制約・比較上の注意：** 主役割は控え支援。短出場型の本人火力と長く居座る利益を区別し、通常攻撃を主火力とは評価しない。\\n\\n**代表的な味方3枠：** コロンビーナ／イルーガ／ゴロー。\\n\\n**モード点（螺旋／幽境／シアター）：** 3.5／3.5／3。参照：[C14]、[C09]。\\n\\n### B：条件選択・運用上の工夫が増える\\n\\n#### セトス — B（雷、H/Q、主対象、確度中）\\n\\n**判定：** 完凸で通常入力型と短時間の狙い撃ち型を選べる。熟知・反応を活かし、出場時間を調節できる。\\n\\n**制約・比較上の注意：** 二つの型でエネルギー消費と持続火力が異なる。最新反応型の順位は直接比較資料が少ない。\\n\\n**代表的な味方3枠：** フィッシュル／ナヒーダ／楓原万葉、または月感電型。\\n\\n**モード点（螺旋／幽境／シアター）：** 3／3／3.5。参照：[C59]、[C09]。\\n\\n#### 煙緋 — B（炎、H/D、主対象、確度中）\\n\\n**判定：** 射程と通常・重撃の反復で反応を起こせ、完凸ならスタミナと盾も補える。扱える相方は多い。\\n\\n**制約・比較上の注意：** 攻撃準備とスタミナ、爆発回転、本人火力の差が高HP相手で表面化する。盾サポート評価ではない。\\n\\n**代表的な味方3枠：** 行秋／ニコ／ベネット、または過負荷型。\\n\\n**モード点（螺旋／幽境／シアター）：** 2.5／2.5／3.5。参照：[C63]、[C27]。\\n\\n#### 凝光 — B（岩、H/Q、主対象、確度低）\\n\\n**判定：** 短い交代と遠距離攻撃を活かし、月結晶支援を含む編成も選べる。単体に火力をまとめられる。\\n\\n**制約・比較上の注意：** 狭い範囲と地形・遮蔽物の影響、現在の直接比較不足がある。月結晶型への再評価は推論の比率が高い。\\n\\n**代表的な味方3枠：** リンネア／コロンビーナ／イルーガ。\\n\\n**モード点（螺旋／幽境／シアター）：** 3／3／3。参照：[C64]、[C14]、[C09]。\\n\\n#### 鹿野院平蔵 — B（風、H/D、主対象、確度中）\\n\\n**判定：** 短い高倍率スキルと能動的な拡散で、前衛兼反応役として戦える。交代も挟みやすい。\\n\\n**制約・比較上の注意：** 純風の個人火力とドライバー型は別。スクロースの全体支援や瑞希の専用星拡散火力をそのまま代替しない。\\n\\n**代表的な味方3枠：** イネファ／コロンビーナ／フィッシュル、または激化拡散型。\\n\\n**モード点（螺旋／幽境／シアター）：** 3／3／3.5。参照：[C65]、[C09]。\\n\\n#### カーヴェ — B（草、D、主対象、確度中）\\n\\n**判定：** 草付与と自分の開花被ダメージ回復を活かす前衛。ラウマ等の支援も受けられる。\\n\\n**制約・比較上の注意：** 本人の開花起爆が反応所有権を奪うわけではない。前衛を他の草キャラにした場合との差とエネルギーが制約。\\n\\n**代表的な味方3枠：** ラウマ／コロンビーナ／久岐忍、またはニィロウ型。\\n\\n**モード点（螺旋／幽境／シアター）：** 2.5／2.5／3。参照：[C66]、[C11]。\\n\\n#### フレミネ — B（氷／物理、H、主対象、確度中）\\n\\n**判定：** 完凸で氷スキル型と物理型を選べ、新しい水氷支援も受けられる。小刻みなスキルを反復できる。\\n\\n**制約・比較上の注意：** 氷砕きが成立しない相手、エネルギー、操作最適化で差が出る。従来の物理型だけには固定しない。\\n\\n**代表的な味方3枠：** フリーナ／エスコフィエ／ヴォジャニーツァ、または超電導型。\\n\\n**モード点（螺旋／幽境／シアター）：** 2.5／3／2.5。参照：[C68]。\\n\\n#### モナ — B（水、D、派生・ドライバー、確度中）\\n\\n**判定：** 魔導相方との水付着・デバフ維持により、控えの反応を動かす前衛型が成立する。\\n\\n**制約・比較上の注意：** 無凸なので2凸の熟知支援等は使わない。爆発一撃型、サポート専任、6凸重撃型を混ぜない。\\n\\n**代表的な味方3枠：** ドゥリン／ニコ／アルベド、または月感電型。\\n\\n**モード点（螺旋／幽境／シアター）：** 3／3／3。参照：[C77]、[C27]。\\n\\n#### バーバラ — B（水、D、派生・ドライバー、確度中）\\n\\n**判定：** 能動的な水付着と回復で開花系を動かせる。個人会心火力を求めない型なら高難度でも役割を持つ。\\n\\n**制約・比較上の注意：** スキルの自己水付着、射程と付着の管理が制約。会心蒸発型の最大値を標準運用にしない。\\n\\n**代表的な味方3枠：** ニィロウ／ラウマ／ナヒーダ、または超開花型。\\n\\n**モード点（螺旋／幽境／シアター）：** 2.5／2.5／3.5。参照：[C78]、[C11]。\\n\\n#### リサ — B（雷、H/D、派生・ドライバー、確度中）\\n\\n**判定：** 激化・燃焼混合や月感電で、元素付着と防御低下を活かす前衛。新しい控え火力との相性も検討。\\n\\n**制約・比較上の注意：** 長押しスキルの隙と爆発回転が実戦上の制約。敵防御を参照しない反応部分へ防御低下の価値を過大に加算しない。\\n\\n**代表的な味方3枠：** フィッシュル／ドゥリン／ナヒーダ、または月感電型。\\n\\n**モード点（螺旋／幽境／シアター）：** 3／3／3。参照：[C79]。\\n\\n#### リネット — B（風、D、派生・ドライバー、確度低）\\n\\n**判定：** 完凸の風付与で能動的な拡散・反応ドライバーになる。挑発と交代のしやすさもある。\\n\\n**制約・比較上の注意：** 完凸未満では同じ前衛運用にならない。最新月反応型は旧ガイドと反応資料からの推論を含む。\\n\\n**代表的な味方3枠：** イネファ／コロンビーナ／フィッシュル、または超開花型。\\n\\n**モード点（螺旋／幽境／シアター）：** 3／3／3。参照：[C81]、[C09]。\\n\\n#### ドリー — B（雷、D、派生・ドライバー、確度低）\\n\\n**判定：** 完凸の雷付与・回復と、雷怒等によるスキル反復で反応前衛を担う。\\n\\n**制約・比較上の注意：** 短い付与時間と回転・範囲の管理が必要。最新編成の横断比較が乏しく、前衛としての評価確度は低め。\\n\\n**代表的な味方3枠：** ナヒーダ／フリーナ／フィッシュル、または激化型。\\n\\n**モード点（螺旋／幽境／シアター）：** 2.5／2.5／3。参照：[C82]。\\n\\n#### 主人公・炎 — B（炎、H、派生・ドライバー、確度低）\\n\\n**判定：** 完凸の炎転換と現行の旅人用武器・能力強化を使う前衛型。\\n\\n**制約・比較上の注意：** 本来の控え付着役からの派生。新武器込みの最新比較は不足し、古い5.5時点の火力評価を直接移植していない。\\n\\n**代表的な味方3枠：** シトラリ／ニコ／ベネット、または蒸発型。\\n\\n**モード点（螺旋／幽境／シアター）：** 2.5／2.5／3。参照：[C83]、[C62]。\\n\\n#### 主人公・岩 — B（岩、Q/D、派生・ドライバー、確度低）\\n\\n**判定：** 短いスキル・爆発を使い、月結晶編成で前衛の岩付着も提供する。旅人用配布武器も利用。\\n\\n**制約・比較上の注意：** 岩創造物による動線・狙いへの干渉と本人火力が制約。現行月結晶型の評価は支援側資料からの推論を含む。\\n\\n**代表的な味方3枠：** リンネア／コロンビーナ／イルーガ。\\n\\n**モード点（螺旋／幽境／シアター）：** 2.5／2.5／3。参照：[C84]、[C09]、[C62]。\\n\\n#### キャンディス — B（水、D、派生・ドライバー、確度低）\\n\\n**判定：** 自分の水付与と追加スキルで前衛運用でき、水氷支援や開花の反応役を担える。\\n\\n**制約・比較上の注意：** 自分では自身の6凸追撃を発動できない。前衛型の個人火力は低く、支援型の全価値を加算しない。\\n\\n**代表的な味方3枠：** フリーナ／エスコフィエ／ヴォジャニーツァ、または開花型。\\n\\n**モード点（螺旋／幽境／シアター）：** 2.5／2.5／3。参照：[C86]。\\n\\n#### ガイア — B（氷、H/Q、派生・ドライバー、確度低）\\n\\n**判定：** 完凸の高頻度氷付着と爆発を活かし、前衛に残る氷水型や外部付与型を選べる。\\n\\n**制約・比較上の注意：** 主力は爆発なので居座る利益は限定的。低相性の重雲型だけで全運用を代表させないが、専任上位との差は残る。\\n\\n**代表的な味方3枠：** フリーナ／申鶴／エスコフィエ、または重雲型。\\n\\n**モード点（螺旋／幽境／シアター）：** 3／2.5／3。参照：[C88]。\\n\\n#### ロサリア — B（氷／物理、H/Q、派生・ドライバー、確度低）\\n\\n**判定：** 溶解爆発を軸に、外部氷付与や物理通常を補う派生も持つ。短い交代で動ける。\\n\\n**制約・比較上の注意：** 設置範囲と、本人が前に出る場合の上積みが制約。控えの溶解サブDPSとしての評価とは分ける。\\n\\n**代表的な味方3枠：** フリーナ／エスコフィエ／重雲、または溶解短出場型。\\n\\n**モード点（螺旋／幽境／シアター）：** 3／3／2.5。参照：[C89]。\\n\\n#### フィッシュル — B（雷／物理、D、派生・ドライバー、確度低）\\n\\n**判定：** 前衛の通常攻撃とオズを両立する派生。魔導強化は使用可能な相方がいる型で適用する。\\n\\n**制約・比較上の注意：** 控えでほぼ同じ主火力を出せるため、前衛としての固有利益は小さい。物理武器の旧評価だけで判定しない。\\n\\n**代表的な味方3枠：** イネファ／コロンビーナ／スクロース、または物理型。\\n\\n**モード点（螺旋／幽境／シアター）：** 3／2.5／3。参照：[C91]、[C74]。\\n\\n#### 鍾離 — B（岩／物理、D、派生・ドライバー、確度低）\\n\\n**判定：** 強い盾と近距離の全耐性低下を維持し、通常攻撃で追撃・反応編成を動かす。\\n\\n**制約・比較上の注意：** サポートとしての最上位評価ではない。本人の攻撃火力は低く、高HP戦は控え火力への依存が大きい。\\n\\n**代表的な味方3枠：** イネファ／コロンビーナ／シロネン、または物理型。\\n\\n**モード点（螺旋／幽境／シアター）：** 3／2.5／3.5。参照：[C92]、[C09]。\\n\\n#### ベネット — B（炎、H/D、派生・ドライバー、確度低）\\n\\n**判定：** 短いスキルを連発して反応とエネルギーを作る前衛型を評価する。\\n\\n**制約・比較上の注意：** 基準は6凸。重雲の氷付与を使う5凸止めの順溶解型は別条件。支援役としての重要性は点数に入れない。\\n\\n**代表的な味方3枠：** キャンディス／香菱／行秋、または炎落下型。\\n\\n**モード点（螺旋／幽境／シアター）：** 3／2.5／2.5。参照：[C93]、[C86]。\\n\\n#### 閑雲 — B（風、H/D、派生・ドライバー、確度低）\\n\\n**判定：** 無凸にも自己落下型と回復を兼ねる風ドライバー型がある。前衛として継続生存を確保できる。\\n\\n**制約・比較上の注意：** 6凸の連続スキル型は含めない。現行反応ドライバー型の判断は一般反応とキットからの推論が多い。\\n\\n**代表的な味方3枠：** ファルザン／フリーナ／ベネット、または月感電ドライバー型。\\n\\n**モード点（螺旋／幽境／シアター）：** 3／3／3.5。参照：[C51]、[C09]。\\n\\n### C：攻略余裕を作るうえで大きな代償\\n\\n#### エウルア — C（物理、H、主対象、確度中）\\n\\n**判定：** 物理のまとまった爆発と範囲があり、現在の支援や星電導の物理耐性低下も利用できる。\\n\\n**制約・比較上の注意：** 遅れて出る主砲、無敵移行・増援・エネルギーが同時に効く。大きな一発の画像を平均攻略性能にはしない。\\n\\n**代表的な味方3枠：** 八重神子／オデット／ニコ、またはフリーナ・ミカ型。\\n\\n**モード点（螺旋／幽境／シアター）：** 2.5／2.5／2。参照：[C67]、[C02]。\\n\\n#### ディシア — C（炎、H、主対象、確度中）\\n\\n**判定：** 強化爆発中の中断への強さと耐久を活かす。支援の改善により前衛型を成立させる余地がある。\\n\\n**制約・比較上の注意：** 無凸の火力とエネルギー、通常攻撃連動との相性が制約。控えの耐久・燃焼役としての価値はこのTierに含めない。\\n\\n**代表的な味方3枠：** ニコ／フリーナ／ベネット、または過負荷型。\\n\\n**モード点（螺旋／幽境／シアター）：** 2／2／2.5。参照：[C69]、[C27]。\\n\\n#### アーロイ — C（氷、H/Q、主対象、確度低）\\n\\n**判定：** スキル・爆発の短時間ダメージと、条件付きの氷付与で攻撃役を担える。\\n\\n**制約・比較上の注意：** 通常攻撃型はコイル獲得・付与の再現性が課題。凸による改善も基準にできず、短出場型を含めても制約が大きい。\\n\\n**代表的な味方3枠：** シトラリ／ニコ／ベネット、または氷水型。\\n\\n**モード点（螺旋／幽境／シアター）：** 2／2／2。参照：[C72]。\\n\\n#### シロネン — C（岩、H、派生・ドライバー、確度低）\\n\\n**判定：** 無凸にも岩攻撃を続ける分岐はある。月結晶支援を使う派生を評価範囲に入れた。\\n\\n**制約・比較上の注意：** 通常の支援型とは必要な元素構成が異なる。無凸の本人火力は低く、6凸の前衛性能は対象外。\\n\\n**代表的な味方3枠：** リンネア／イルーガ／コロンビーナ等、岩を多めにした型。\\n\\n**モード点（螺旋／幽境／シアター）：** 2.5／2.5／2。参照：[C87]、[C14]。\\n\\n#### 重雲 — C（氷、H/Q、派生・ドライバー、確度低）\\n\\n**判定：** 氷付与と短い爆発で、氷通常型・反応爆発型の攻撃役になれる。\\n\\n**制約・比較上の注意：** 支援として付与を渡す価値と本人の前衛火力は別。低い通常火力、場の制約と現行比較不足がある。\\n\\n**代表的な味方3枠：** 申鶴／エスコフィエ／フリーナ、または溶解型。\\n\\n**モード点（螺旋／幽境／シアター）：** 2.5／2.5／2.5。参照：[C90]。\\n\\n### D：標準条件では特殊運用向け\\n\\n#### 辛炎 — D（炎／物理、H/Q、主対象、確度低）\\n\\n**判定：** 完凸の重撃・爆発型に加え、外部炎付与と落下を使う別型も検討できる。\\n\\n**制約・比較上の注意：** 物理・炎・盾の要求が噛み合いにくい。最新支援下の比較が不足し、最下位近辺の並びは確定しない。\\n\\n**代表的な味方3枠：** ベネット／閑雲／フリーナ、または物理型。\\n\\n**モード点（螺旋／幽境／シアター）：** 1.5／1.5／2。参照：[C70]、[C51]。\\n\\n#### アンバー — D（炎、H/Q、主対象、確度低）\\n\\n**判定：** 手動起爆や溶解重撃で狙った瞬間の火力は作れる。弱点狙撃が機能する相手にも長所がある。\\n\\n**制約・比較上の注意：** 主力操作の条件と範囲・時間効率が現行の高HP戦で重い。希少な成功動画から一般化しない。\\n\\n**代表的な味方3枠：** シトラリ／ニコ／ベネット、または重撃・人形型。\\n\\n**モード点（螺旋／幽境／シアター）：** 1.5／2／2。参照：[C71]。"},{"id":"chapter-7","title":"7. 評価条件を変えるとどう動くか","body":"### コンテンツの重みだけを変えた再集計\\n\\n同じモード点を固定し、重みを変更した算術上の感度分析である。そのコンテンツだけの実測Tier表ではない。\\n\\n| 設定 | 螺旋 | 幽境 | シアター | 基準からTierが変わる運用数 |\\n|---|---:|---:|---:|---:|\\n| 基準 | 45% | 35% | 20% | — |\\n| 螺旋重視 | 60% | 30% | 10% | 10 |\\n| 幽境重視 | 30% | 60% | 10% | 14 |\\n| シアター重視 | 30% | 20% | 50% | 28 |\\n\\n| 代表例 | 基準 | 螺旋重視 | 幽境重視 | シアター重視 |\\n|---|---|---|---|---|\\n| サンドローネ | SS | SS | SS | S |\\n| ヴェスナ | SS | SS | SS | S |\\n| フリンズ | SS | SS | SS | S |\\n| ネフェル | SS | SS | SS | A |\\n| 兹白 | SS | SS | SS | A |\\n| マーヴィカ | S | SS | SS | S |\\n| スカーク | S | S | S | A |\\n| ヌヴィレット | S | S | S | SS |\\n| ムアラニ | S | S | SS | A |\\n| ファルカ | A | S | S | A |\\n| 嘉明 | A | S | S | A |\\n| チャスカ | A | A | S | S |\\n| 珊瑚宮心海 | A | A | A | S |\\n\\n螺旋重視・幽境重視の再集計では、基準のSS5運用は全てSSに残る。ただし、モード点そのものを1軸0.5だけ見直せば、SS/S境界をまたぐ例がある。したがって「上位グループの候補は比較的安定」と「SS5運用の判定が測定で確定した」は別である。\\n\\nシアターを半分の重みにすると、ヌヴィレットが上がり、専用支援を要求するネフェル・兹白等は下がる。この結果はシアター点に置いた“不完全編成への耐性”を強く反映する。専用支援を2戦とも確保できる公演では、実際の差はこれより小さくなる。\\n\\n### 敵・操作・投資条件の変更\\n\\n| 条件 | 上がりやすい候補 | 下がりやすい候補・留保 |\\n|---|---|---|\\n| 高HPの単体・短い弱点時間 | ムアラニ、キィニチ、ローエン、リネ、ティナリ等 | 範囲の利益は小さくなる。必要な反応や初動が通るかは別途確認 |\\n| 分散増援と頻繁な対象変更 | ヌヴィレット、ナヴィア、チャスカ等 | 特定の敵への準備・主砲の打ち切りに依存する型 |\\n| 密集し集敵が有効 | タルタリヤ、ウェンティ、魈、開花系前衛等 | 吸えない敵に対して同じ伸びは期待しない |\\n| 操作・通信遅延が大きい | 単純な継続操作、盾付き通常型、瑞希等 | 最適入力のクロリンデ、キィニチ、キャンセル依存型は理論値との差が増え得る |\\n| 専用支援を1枠欠く | ヌヴィレット等の代替編成が残る候補 | ネフェルのラウマ、スカークのエスコフィエ、星反応の変換役などは下落が大きい |\\n| ★4が0〜2凸中心 | 無凸★5の自己完結した型が相対上昇 | 嘉明・レザー・ノエル本人、ファルザン・シュヴルーズ・イルーガ等の支援に影響。全員同幅ではない |\\n| 1凸・モチーフを追加 | ヴェスナ、兹白、ヴァレサ、ファルカ、リオセスリ等に大きな変化の余地 | 伸び方は異なる。無凸表から同じ倍率で外挿できない |\\n| 今期7.1の補正込み | 星反応と氷主体の編成 | 補正がない時期の総合差とは区別 |\\n| 全員6凸・高精錬 | 多数のキャラで攻撃列・支援役・耐久が変わる | 本表の対象外。単に数段階ずつ上げて対応できない |\\n\\n1凸・モチーフ追加の行は方向の予測であり、全員を同じ追加ガチャ予算で再計算した結果ではない。特定キャラを必ず何Tier上げるとまでは断定しない。\\n\\n### 複数編成では、最強チームをそのまま並べられない\\n\\nフリンズ、ネフェル、兹白はコロンビーナ等を共有しやすく、サンドローネ、リオセスリ、ヴェスナ、瑞希はオデット等を共有する。単体のTierが高いことと、螺旋2編成・幽境3編成の最適な組み合わせであることは異なる。\\n\\n例えば、サンドローネ／八重神子／オデット／七七、フリンズ／イネファ／コロンビーナ／スクロース、マーヴィカ／シロネン／シトラリ／ベネットなら、支援の重複を避けて3編成を作れる。これは分配の説明例であり、今期の3ボスをその並びで攻略できると実測した例ではない。実際には各ボスのギミックへ割り当て直す必要がある。\\n\\nこのアカウント全体の最適化を、所持情報なしで各キャラの固定減点にしなかった。その代わり、本表が「同時に最高編成を組める保証」ではないことを明示する。"},{"id":"chapter-8","title":"8. 特に重要だった独自の考察","body":"1. **最大DPSより、ダメージを配り直せることが効く場面がある。** 高い一撃が敵の残りHPを大きく超えたり、次ウェーブに攻撃資源を持ち越せなければ、木桩DPSの差が攻略差にならない。ヌヴィレットやナヴィアを持続・短出場の性質込みで評価する理由になる。\\n2. **耐久の価値は、攻撃継続との因果関係で測る。** 盾は常に同じ加点ではない。中断で最後の主砲が失われる型ほど価値が高く、リオセスリのように回復が出力条件と競合する例もある。\\n3. **新反応の強さは、従来の支援市場を変える。** 会心・熟知・耐性・専用反応バフの適用先が変わるので、既存の「最強サポーター」を全キャラへ同じ価値で配れない。\\n4. **旧キャラの評価更新は、本人の強化と新しい控え火力の追加を分ける必要がある。** 瑞希・セノ・リオセスリ・クレー・レザー・ウェンティは、以前の運用と評価構造が変わっている。一方で、強い控え3人を借りているだけかも確認すべきである。\\n5. **「最新」と「比較可能」は別。** 最新の計算一覧に未実装キャラの事前計算が混ざることがある。更新日だけで正式環境の検証と判断せず、実装版・凸・回し・不具合修正前後を確認する方が重要だった。\\n6. **シアターを重くするほど、Tierは火力表から編成成立性の表へ近づく。** これは誤りではなく、目的が変わった結果である。ゆえに総合表にはコンテンツの重みを必ず添えるべきだと考える。"},{"id":"chapter-9","title":"9. 不確実性・限界と今後の検証","body":"### 確認済みの事実、他者の見解、本稿の推論\\n\\n- **確認した事実：** 公式の7.1実装、告知保存版の当期補正と修正、参照した天賦・装備・反応の仕様、公開計算に書かれた凸・装備・回し。\\n- **他者の見解：** ガイドの最適編成・武器比較・相対評価。専門家の見解でも全条件へ一般化しない。\\n- **本稿の推論：** 全Tier、モード点、コンテンツ比率、実戦上の長短を統合した位置付け、資料を組み合わせた一部の派生編成。\\n- **未確認・不足：** 全編成を統一条件で再計算したDPS、公開動画の全装備と試行選別、ギミック別の成功率、未取得の計算シートの内部仮定。\\n\\n特に、得点を固定した重み変更だけでは、元の得点が正しいことは検証できない。採点モデルの内部整合性の点検にすぎず、外部妥当性はゲーム内実測や統一計算で別に確かめる必要がある。\\n\\n### 優先して追加検証すべきこと\\n\\n| 優先 | 検証内容 | 判定に必要なデータ |\\n|---|---|---|\\n| 1 | SS5運用とマーヴィカ・スカーク・ヌヴィレットの統一比較 | 同じ育成・武器上限、各人の適正編成、初動と90秒、単体・複数・増援のログ |\\n| 2 | 無凸八重神子と1凸八重神子を分離した星電導比較 | 他3人固定、チャージと回しを維持した差分。単純に表示バフを引くだけにしない |\\n| 3 | ヴェスナの武器・粒子・爆発頻度 | 敵粒子少なめ、ファルザン有無、毎巡／隔巡の長期エネルギーログ |\\n| 4 | リオセスリの回復量と強化重撃回数 | 被弾あり／なし、盾型／回復型、HP時系列と中断・失敗回数 |\\n| 5 | 最新支援下の旧キャラ・派生型 | C0ニコ・ドゥリン・ラウマ・リンネア等を用いた同条件比較 |\\n| 6 | シアターの現実的な不完全編成 | 反応役や支援役が欠ける場合の複数デッキ・複数試行。架空の出現確率を置かない |\\n| 7 | 氷主人公の取得上限と恒常強化の一次確認 | 7.1ゲーム内の実取得状態、任務・神像報酬、武器精錬の記録 |\\n\\nゲーム内試験を行うなら、条件を固定したうえで成功した1回だけを選ばず、同じ部屋で複数回のクリア時間、失敗、被弾、中断、エネルギー不足を記録する。中央値と悪い試行側の時間を分け、装備画面と回しを公開する。これは今後の検証設計であり、本稿で実施済みとの主張ではない。"},{"id":"chapter-10","title":"付録A. 採点一覧","body":"小数点以下は加重平均の計算結果であり、実測精度を表していない。同Tier内の優劣や境界の僅差は確定しない。\\n\\n| 対象 | 区分 | 螺旋 | 幽境 | シアター | 総合コード | Tier | 確度 |\\n|---|---|---:|---:|---:|---:|---|---|\\n| サンドローネ | 主 | 5.0 | 5.0 | 3.0 | 4.600 | SS | 中 |\\n| ヴェスナ | 主 | 5.0 | 4.5 | 3.5 | 4.525 | SS | 中 |\\n| フリンズ | 主 | 4.5 | 5.0 | 3.5 | 4.475 | SS | 中 |\\n| ネフェル | 主 | 5.0 | 5.0 | 2.0 | 4.400 | SS | 中 |\\n| 兹白 | 主 | 5.0 | 5.0 | 2.5 | 4.500 | SS | 中 |\\n| マーヴィカ | 主 | 4.5 | 4.5 | 3.5 | 4.300 | S | 中 |\\n| スカーク | 主 | 4.5 | 4.5 | 2.5 | 4.100 | S | 中 |\\n| ヌヴィレット | 主 | 4.5 | 3.5 | 5.0 | 4.250 | S | 高 |\\n| アルレッキーノ | 主 | 4.5 | 4.0 | 4.0 | 4.225 | S | 高 |\\n| ムアラニ | 主 | 4.0 | 5.0 | 3.0 | 4.150 | S | 中 |\\n| ヴァレサ | 主 | 4.5 | 4.0 | 3.5 | 4.125 | S | 中 |\\n| リオセスリ | 主 | 4.0 | 4.5 | 3.0 | 3.975 | S | 中 |\\n| 夢見月瑞希 | 主 | 4.5 | 4.0 | 3.0 | 4.025 | S | 中 |\\n| キィニチ | 主 | 4.0 | 4.5 | 3.0 | 3.975 | S | 中 |\\n| ナヴィア | 主 | 4.0 | 3.5 | 4.0 | 3.825 | S | 中 |\\n| クレー | 主 | 4.0 | 4.0 | 3.0 | 3.800 | S | 中 |\\n| ファルカ | 主 | 4.0 | 4.0 | 2.5 | 3.700 | A | 中 |\\n| コロンビーナ | 主 | 4.0 | 4.0 | 2.5 | 3.700 | A | 中 |\\n| ローエン | 主 | 3.5 | 4.0 | 2.5 | 3.475 | A | 中 |\\n| 嘉明 | 主 | 4.0 | 4.0 | 2.5 | 3.700 | A | 中 |\\n| アルハイゼン | 主 | 3.5 | 3.5 | 3.5 | 3.500 | A | 中 |\\n| クロリンデ | 主 | 4.0 | 3.5 | 3.5 | 3.725 | A | 中 |\\n| セノ | 主 | 3.5 | 4.0 | 2.5 | 3.475 | A | 中 |\\n| 胡桃 | 主 | 3.5 | 4.0 | 3.0 | 3.575 | A | 中 |\\n| 魈 | 主 | 3.5 | 3.5 | 2.5 | 3.300 | A | 中 |\\n| 雷電将軍 | 主 | 3.5 | 3.5 | 3.0 | 3.400 | A | 中 |\\n| レザー | 主 | 3.5 | 3.5 | 2.5 | 3.300 | A | 中 |\\n| ティナリ | 主 | 3.5 | 3.5 | 3.0 | 3.400 | A | 中 |\\n| チャスカ | 主 | 3.5 | 4.0 | 4.0 | 3.775 | A | 中 |\\n| リネ | 主 | 3.5 | 4.0 | 2.5 | 3.475 | A | 中 |\\n| 神里綾華 | 主 | 3.5 | 3.5 | 2.5 | 3.300 | A | 中 |\\n| 神里綾人 | 主 | 3.5 | 3.0 | 4.0 | 3.425 | A | 中 |\\n| タルタリヤ | 主 | 3.5 | 3.0 | 3.0 | 3.225 | A | 中 |\\n| ディルック | 主 | 3.5 | 3.5 | 2.5 | 3.300 | A | 中 |\\n| 刻晴 | 主 | 3.5 | 3.0 | 3.5 | 3.325 | A | 中 |\\n| 荒瀧一斗 | 主 | 3.5 | 3.5 | 2.5 | 3.300 | A | 中 |\\n| ウェンティ | 主 | 3.5 | 3.0 | 4.0 | 3.425 | A | 中 |\\n| 放浪者 | 主 | 3.5 | 3.0 | 3.5 | 3.325 | A | 中 |\\n| 甘雨 | 主 | 3.5 | 3.0 | 3.0 | 3.225 | A | 中 |\\n| 宵宮 | 主 | 3.0 | 3.5 | 3.5 | 3.275 | A | 中 |\\n| ノエル | 主 | 3.5 | 3.0 | 4.0 | 3.425 | A | 中 |\\n| セトス | 主 | 3.0 | 3.0 | 3.5 | 3.100 | B | 中 |\\n| 主人公・氷 | 主 | 3.5 | 4.0 | 3.0 | 3.575 | A | 中 |\\n| 煙緋 | 主 | 2.5 | 2.5 | 3.5 | 2.700 | B | 中 |\\n| 凝光 | 主 | 3.0 | 3.0 | 3.0 | 3.000 | B | 低 |\\n| 鹿野院平蔵 | 主 | 3.0 | 3.0 | 3.5 | 3.100 | B | 中 |\\n| カーヴェ | 主 | 2.5 | 2.5 | 3.0 | 2.600 | B | 中 |\\n| エウルア | 主 | 2.5 | 2.5 | 2.0 | 2.400 | C | 中 |\\n| フレミネ | 主 | 2.5 | 3.0 | 2.5 | 2.675 | B | 中 |\\n| ディシア | 主 | 2.0 | 2.0 | 2.5 | 2.100 | C | 中 |\\n| 辛炎 | 主 | 1.5 | 1.5 | 2.0 | 1.600 | D | 低 |\\n| アンバー | 主 | 1.5 | 2.0 | 2.0 | 1.775 | D | 低 |\\n| アーロイ | 主 | 2.0 | 2.0 | 2.0 | 2.000 | C | 低 |\\n| ナヒーダ | 派生 | 3.5 | 3.5 | 4.0 | 3.600 | A | 中 |\\n| スクロース | 派生 | 4.0 | 4.0 | 3.5 | 3.900 | S | 中 |\\n| 珊瑚宮心海 | 派生 | 3.5 | 3.0 | 4.5 | 3.525 | A | 中 |\\n| イファ | 派生 | 3.5 | 3.5 | 4.0 | 3.600 | A | 中 |\\n| モナ | 派生 | 3.0 | 3.0 | 3.0 | 3.000 | B | 中 |\\n| バーバラ | 派生 | 2.5 | 2.5 | 3.5 | 2.700 | B | 中 |\\n| リサ | 派生 | 3.0 | 3.0 | 3.0 | 3.000 | B | 中 |\\n| 八重神子 | 派生 | 3.5 | 3.5 | 3.5 | 3.500 | A | 中 |\\n| リネット | 派生 | 3.0 | 3.0 | 3.0 | 3.000 | B | 低 |\\n| ドリー | 派生 | 2.5 | 2.5 | 3.0 | 2.600 | B | 低 |\\n| 主人公・炎 | 派生 | 2.5 | 2.5 | 3.0 | 2.600 | B | 低 |\\n| 主人公・岩 | 派生 | 2.5 | 2.5 | 3.0 | 2.600 | B | 低 |\\n| ドゥリン | 派生 | 3.5 | 3.5 | 3.0 | 3.400 | A | 中 |\\n| ラウマ | 派生 | 3.5 | 3.5 | 3.0 | 3.400 | A | 中 |\\n| リンネア | 派生 | 3.5 | 3.5 | 3.0 | 3.400 | A | 低 |\\n| キャンディス | 派生 | 2.5 | 2.5 | 3.0 | 2.600 | B | 低 |\\n| シロネン | 派生 | 2.5 | 2.5 | 2.0 | 2.400 | C | 低 |\\n| ガイア | 派生 | 3.0 | 2.5 | 3.0 | 2.825 | B | 低 |\\n| ロサリア | 派生 | 3.0 | 3.0 | 2.5 | 2.900 | B | 低 |\\n| 重雲 | 派生 | 2.5 | 2.5 | 2.5 | 2.500 | C | 低 |\\n| フィッシュル | 派生 | 3.0 | 2.5 | 3.0 | 2.825 | B | 低 |\\n| 鍾離 | 派生 | 3.0 | 2.5 | 3.5 | 2.925 | B | 低 |\\n| ベネット | 派生 | 3.0 | 2.5 | 2.5 | 2.725 | B | 低 |\\n| 閑雲 | 派生 | 3.0 | 3.0 | 3.5 | 3.100 | B | 低 |"},{"id":"chapter-11","title":"付録B. 全プレイアブルの役割確認と対象外の扱い","body":"KQM TCLの実装済み一覧［下記URL］は主人公7元素を別項目とした127項目。本表はそのうち77運用を採点し、残り50項目（46キャラ＋主人公の他4元素）はNRとした。したがってキャラ一覧の見落としと、評価対象外の判断を区別している。\\n\\n[KQM TCL Characters](https://library.keqingmains.com/characters)\\n\\nNRはDより下という意味ではない。主な役割が控え火力・支援・耐久である、基準の無凸では専用前衛モードが解放されない、または本調査で前衛として継続使用する利益の検証が不足する、という範囲上の判断である。全キャラへ外部付与・物理通常を持たせる全派生までは対象にしていない。\\n\\n| 主な役割で整理したNR対象 | この表での扱い |\\n|---|---|\\n| アルベド、北斗、エミリエ、エスコフィエ、オデット、オロルン、香菱、行秋、夜蘭、千織、イネファ | 主に控え火力。無凸前衛の個別評価はNR。千織等の高凸前衛化も基準外 |\\n| アイノ、アリョーシャ、シュヴルーズ、シトラリ、ファルザン、フリーナ、ゴロー、イアンサ、イルーガ、楓原万葉、九条裟羅、ニコ、ニィロウ、プルーネ、申鶴、雲菫 | 主に付着・バフ・反応変換・条件成立。支援としての強さは味方の評価に反映し、前衛Tierを付けない |\\n| 白朮、シャルロット、ダリア、ディオナ、ジン、綺良々、久岐忍、藍硯、レイラ、ミカ、七七、早柚、シグウィン、ヴォジャニーツァ、ヨォーヨ、トーマ | 主に耐久・付着支援。前衛の特殊型を全部網羅したとはしない |\\n| カチーナ、コレイ、ヤフォダ | 主に支援・控え。現在の前衛性能を採点する根拠を十分確保できずNR |\\n| 主人公・風／草／雷／水 | この研究では前衛としての採点をしない。控えの草付着等の価値を低評価と解釈しない |\\n\\nニィロウはチームの主な反応ダメージを成立させる核心だが、通常の短いスキル使用だけでは本表の前衛枠を占めない。ニィロウ開花編成の強さは、心海・ナヒーダ・ラウマ・カーヴェ等を前衛に置いた評価に含める。氷主人公と異なり他の主人公をすべて一つの順位へ合算することもしない。"},{"id":"chapter-12","title":"付録C. 個別資料の参照先","body":"本文のC番号は該当キャラの仕様・編成を追跡するためのもの。古いガイドは基礎キットや操作だけに使用し、現行の最適性は新しい支援側・反応側の資料と組み合わせて判断した。本文を取得できた範囲は資料によって異なる。\\n\\n| ID | 資料 |\\n|---|---|\\n| C01 | [Sandrone Quick Guide - KQM](https://keqingmains.com/q/sandrone-quickguide/) |\\n| C02 | [Stellar Conduct Reaction Guide - Genshin Impact](https://mobalytics.gg/genshin-impact/guides/stellar-conduct) |\\n| C03 | [桑多涅 / 攻略](https://wiki.biligame.com/ys/%E6%A1%91%E5%A4%9A%E6%B6%85/%E6%94%BB%E7%95%A5) |\\n| C04 | [Vesna Build Guide - Weapons, Artifacts, & More - Genshin](https://mobalytics.gg/genshin-impact/characters/vesna-build-guide) |\\n| C05 | [〖V7.1〗详谈薇斯纳的玩法、配队、抽取建议（平民玩家视角） - 原神7.1版本攻略征集 - TapTap 原神论坛](https://www.taptap.cn/moment/851859733571699624) |\\n| C06 | [『原神』Ver.7.1アップデートを本日9月23日に実施。新★5「ヴェスナ」（CV:平野綾）、「ヴォジャニーツァ」（CV:伊藤かな恵）が登場！6周年記念の特典も盛りだくさん！ | 株式会社COGNOSPHEREのプレスリリース](https://prtimes.jp/main/html/rd/p/000000449.000096124.html) |\\n| C07 | [薇斯纳 / 攻略](https://wiki.biligame.com/ys/%E8%96%87%E6%96%AF%E7%BA%B3/%E6%94%BB%E7%95%A5) |\\n| C08 | [Flins Quick Guide - KQM](https://keqingmains.com/q/flins-quickguide/) |\\n| C09 | [Columbina Quick Guide - KQM](https://keqingmains.com/q/columbina-quickguide/) |\\n| C10 | [Nefer Quick Guide - KQM](https://keqingmains.com/q/nefer-quickguide/) |\\n| C11 | [Lauma Quick Guide - KQM](https://keqingmains.com/q/lauma-quickguide/) |\\n| C12 | [奈芙尔 / 攻略](https://wiki.biligame.com/ys/%E5%A5%88%E8%8A%99%E5%B0%94/%E6%94%BB%E7%95%A5) |\\n| C13 | [Zibai Quick Guide - KQM](https://keqingmains.com/q/zibai-quickguide/) |\\n| C14 | [Linnea Quick Guide - KQM](https://keqingmains.com/q/linnea-quickguide/) |\\n| C15 | [Mavuika Quick Guide - KQM](https://keqingmains.com/q/mavuika-quickguide/) |\\n| C16 | [DPSLeaders](https://dpsleaders.augmeneco.ru/?page=0) |\\n| C17 | [Skirk Quick Guide - KQM](https://keqingmains.com/q/skirk-quickguide/) |\\n| C18 | [Vodyanitsa Quick Guide - KQM](https://keqingmains.com/q/vodyanitsa-quickguide/) |\\n| C19 | [Neuvillette Quick Guide - KQM](https://keqingmains.com/q/neuvillette-quickguide/) |\\n| C20 | [Arlecchino Quick Guide - KQM](https://keqingmains.com/q/arlecchino-quickguide/) |\\n| C21 | [Mualani Quick Guide - KQM](https://keqingmains.com/q/mualani-quickguide/) |\\n| C22 | [Varesa Quick Guide - KQM](https://keqingmains.com/q/varesa-quickguide/) |\\n| C23 | [Wriothesley Quick Guide - KQM](https://keqingmains.com/q/wriothesley-quickguide/) |\\n| C24 | [Mizuki Quick Guide - KQM](https://keqingmains.com/q/mizuki-quickguide/) |\\n| C25 | [Stellar Swirl Reaction Guide - Genshin Impact](https://mobalytics.gg/genshin-impact/guides/stellar-swirl) |\\n| C26 | [Kinich Quick Guide - KQM](https://keqingmains.com/q/kinich-quickguide/) |\\n| C27 | [Nicole Quick Guide - KQM](https://keqingmains.com/q/nicole-quickguide/) |\\n| C28 | [Navia Guide: The Soaring Yellow Rose - KQM](https://keqingmains.com/navia/) |\\n| C29 | [Klee Quick Guide - KQM](https://keqingmains.com/q/klee-quickguide/) |\\n| C30 | [Varka Quick Guide - KQM](https://keqingmains.com/q/varka-quickguide/) |\\n| C31 | [Lohen Quick Guide - KQM](https://keqingmains.com/q/lohen-quickguide/) |\\n| C32 | [Gaming Quick Guide - KQM](https://keqingmains.com/q/gaming-quickguide/) |\\n| C33 | [Alhaitham Quick Guide - KQM](https://keqingmains.com/q/alhaitham-quickguide/) |\\n| C34 | [Lightkeepers](https://lightkeepers.moe/teams/configs/Alhaitham~C0~IronSting~R5__Furina~C0~FavoniusSword~R5__KukiShinobu~C6~IronSting~R1__Lauma~C0~FavoniusCodex~R5) |\\n| C35 | [Clorinde Quick Guide - KQM](https://keqingmains.com/q/clorinde-quickguide/) |\\n| C36 | [Cyno | KQM TCL](https://library.keqingmains.com/cyno/) |\\n| C37 | [Cyno Build Guide - Weapons, Artifacts, & More - Genshin](https://mobalytics.gg/genshin-impact/characters/cyno-build-guide) |\\n| C38 | [Hu Tao Guide: Butterfly's Embrace - KQM](https://keqingmains.com/hu-tao/) |\\n| C39 | [Hu Tao Quick Guide - KQM](https://keqingmains.com/q/hu-tao-quickguide/) |\\n| C40 | [Xiao Quick Guide - KQM](https://keqingmains.com/q/xiao-quickguide/) |\\n| C41 | [Raiden Shogun Quick Guide - KQM](https://keqingmains.com/q/raiden-quickguide/) |\\n| C42 | [Razor Build Guide - Weapons, Artifacts, & More - Genshin](https://mobalytics.gg/genshin-impact/characters/razor-build-guide) |\\n| C43 | [Tighnari Quick Guide - KQM](https://keqingmains.com/q/tighnari-quickguide/) |\\n| C44 | [Tighnari: Verdant Strider - KQM](https://keqingmains.com/tighnari/) |\\n| C45 | [Chasca Quick Guide - KQM](https://keqingmains.com/q/chasca-quickguide/) |\\n| C46 | [Lyney Quick Guide - KQM](https://keqingmains.com/q/lyney-quickguide/) |\\n| C47 | [Ayaka Quick Guide - KQM](https://keqingmains.com/q/ayaka-quickguide/) |\\n| C48 | [Ayato Quick Guide - KQM](https://keqingmains.com/q/ayato-quickguide/) |\\n| C49 | [Tartaglia Quick Guide - KQM](https://keqingmains.com/q/tartaglia-quickguide/) |\\n| C50 | [Diluc Quick Guide - KQM](https://keqingmains.com/q/diluc-quickguide/) |\\n| C51 | [Xianyun Quick Guide - KQM](https://keqingmains.com/q/xianyun-quickguide/) |\\n| C52 | [Keqing Guide | Endless Starlight - KQM](https://keqingmains.com/keqing/) |\\n| C53 | [Itto Quick Guide - KQM](https://keqingmains.com/q/itto-quickguide/) |\\n| C54 | [Venti Quick Guide - KQM](https://keqingmains.com/q/venti-quickguide/) |\\n| C55 | [Wanderer Quick Guide - KQM](https://keqingmains.com/q/wanderer-quickguide/) |\\n| C56 | [Ganyu Quick Guide - KQM](https://keqingmains.com/q/ganyu-quickguide/) |\\n| C57 | [Yoimiya Quick Guide - KQM](https://keqingmains.com/q/yoimiya-quickguide/) |\\n| C58 | [Noelle Quick Guide - KQM](https://keqingmains.com/q/noelle-quickguide/) |\\n| C59 | [Sethos Quick Guide - KQM](https://keqingmains.com/q/sethos-quickguide/) |\\n| C60 | [Traveler (Cryo) | KQM TCL](https://library.keqingmains.com/characters/cryo/traveler/) |\\n| C61 | [主人公/氷 - 原神 Wiki*](https://wikiwiki.jp/genshinwiki/%E4%B8%BB%E4%BA%BA%E5%85%AC/%E6%B0%B7) |\\n| C62 | [片手剣/星鋒の剣 - genshinwiki](https://wikiwiki.jp/genshinwiki/%E7%89%87%E6%89%8B%E5%89%A3/%E6%98%9F%E9%8B%92%E3%81%AE%E5%89%A3) |\\n| C63 | [Yanfei Quick Guide - KQM](https://keqingmains.com/q/yanfei-quickguide/) |\\n| C64 | [Ningguang Quick Guide - KQM](https://keqingmains.com/q/ningguang-quickguide/) |\\n| C65 | [Heizou Quick Guide - KQM](https://keqingmains.com/q/heizou-quickguide/) |\\n| C66 | [Kaveh Quick Guide - KQM](https://keqingmains.com/q/kaveh-quickguide/) |\\n| C67 | [Eula Quick Guide - KQM](https://keqingmains.com/q/eula-quickguide/) |\\n| C68 | [Freminet Quick Guide - KQM](https://keqingmains.com/q/freminet-quickguide/) |\\n| C69 | [Dehya Quick Guide - KQM](https://keqingmains.com/q/dehya-quickguide/) |\\n| C70 | [Xinyan Guide: Save Rock 'n' Roll - KQM](https://keqingmains.com/xinyan/) |\\n| C71 | [Amber Quick Guide - KQM](https://keqingmains.com/q/amber-quickguide/) |\\n| C72 | [Aloy Quick Guide - KQM](https://keqingmains.com/q/aloy-quickguide/) |\\n| C73 | [Nahida Quick Guide - KQM](https://keqingmains.com/q/nahida-quickguide/) |\\n| C74 | [Sucrose Quick Guide - KQM](https://keqingmains.com/q/sucrose-quickguide/) |\\n| C75 | [Kokomi Quick Guide - KQM](https://keqingmains.com/q/kokomi-quickguide/) |\\n| C76 | [Ifa Quick Guide - KQM](https://keqingmains.com/q/ifa-quickguide/) |\\n| C77 | [Mona Quick Guide - KQM](https://keqingmains.com/q/mona-quickguide/) |\\n| C78 | [Barbara Quick Guide - KQM](https://keqingmains.com/q/barbara-quickguide/) |\\n| C79 | [Lisa Quick Guide - KQM](https://keqingmains.com/q/lisa-quickguide/) |\\n| C80 | [Yae Miko Quick Guide - KQM](https://keqingmains.com/q/yae-quickguide/) |\\n| C81 | [Lynette Quick Guide - KQM](https://keqingmains.com/q/lynette-quickguide/) |\\n| C82 | [Dori Quick Guide - KQM](https://keqingmains.com/q/dori-quickguide/) |\\n| C83 | [Pyro Traveler Quick Guide - KQM](https://keqingmains.com/q/pyro-traveler-quickguide/) |\\n| C84 | [Geo Traveler Guide: Meteorite Impact - KQM](https://keqingmains.com/geo-traveler/) |\\n| C85 | [Durin Quick Guide - KQM](https://keqingmains.com/q/durin-quickguide/) |\\n| C86 | [Candace Quick Guide - KQM](https://keqingmains.com/q/candace-quickguide/) |\\n| C87 | [Xilonen Quick Guide - KQM](https://keqingmains.com/q/xilonen-quickguide/) |\\n| C88 | [Kaeya Quick Guide - KQM](https://keqingmains.com/q/kaeya-quickguide/) |\\n| C89 | [Rosaria Quick Guide - KQM](https://keqingmains.com/q/rosaria-quickguide/) |\\n| C90 | [Chongyun Quick Guide - KQM](https://keqingmains.com/q/chongyun-quickguide/) |\\n| C91 | [Fischl Quick Guide - KQM](https://keqingmains.com/q/fischl-quickguide/) |\\n| C92 | [Zhongli Quick Guide - KQM](https://keqingmains.com/q/zhongli-quickguide/) |\\n| C93 | [Bennett Quick Guide - KQM](https://keqingmains.com/q/bennett-quickguide/) |\\n\\n---\\n\\n本稿の結論は、期間補正を除き、育成・凸・編成を明示した場合の独自総合評価である。更新時には、上位の評判だけを差し替えるのではなく、反応仕様・支援の凸・実行可能な回し・敵条件から再点検する。"}]`),u={entries:X,sources:U,sections:Z},J=`# 原神 メインDPS総合Tier研究
## Ver.7.1・2026年10月28日（日本時間）時点

**研究形式：公開資料の検証と独自比較による文献調査版。** ゲーム内での一斉実測、全編成の再シミュレーション、統計的な勝率推定は実施していない。以下のTier、モード点、比較結論は筆者の判断であり、公式・攻略サイト・理論計算コミュニティの公認順位ではない。

主対象53運用と、前衛ドライバー・短出場・外部付与などの派生24運用、計77運用を同じ総合基準で評価した。主人公は氷・炎・岩を別運用として扱う。入手・育成優先度ではなく、記載条件で編成を完成させた場合の攻略戦力を評価する。

**最上位の採択：サンドローネ、ヴェスナ、フリンズ、ネフェル、兹白。** SSとSの境界は確定的な性能差ではない。特にマーヴィカはSS/S境界、ヌヴィレットはシアターを重くすると最上位へ上がる。無凸・非モチーフ条件での同一基準の直接比較は不足しており、最上位内の1位から5位までの順番は付けない。

## 1. 総合Tier表

| Tier | 意味 | 主対象53運用（順不同） | 派生・ドライバー24運用（同じ評価基準） |
|---|---|---|---|
| **SS** | 完成編成で最上位候補 | サンドローネ、ヴェスナ、フリンズ、ネフェル、兹白 | — |
| **S** | 極めて強い総合戦力 | マーヴィカ、スカーク、ヌヴィレット、アルレッキーノ、ムアラニ、ヴァレサ、リオセスリ、夢見月瑞希、キィニチ、ナヴィア、クレー | スクロース |
| **A** | 高難度で十分強い | ファルカ、コロンビーナ、ローエン、嘉明、アルハイゼン、クロリンデ、セノ、胡桃、魈、雷電将軍、レザー、ティナリ、チャスカ、リネ、神里綾華、神里綾人、タルタリヤ、ディルック、刻晴、荒瀧一斗、ウェンティ、放浪者、甘雨、宵宮、ノエル、主人公・氷 | ナヒーダ、珊瑚宮心海、イファ、八重神子、ドゥリン、ラウマ、リンネア |
| **B** | 条件選択・運用上の工夫が増える | セトス、煙緋、凝光、鹿野院平蔵、カーヴェ、フレミネ | モナ、バーバラ、リサ、リネット、ドリー、主人公・炎、主人公・岩、キャンディス、ガイア、ロサリア、フィッシュル、鍾離、ベネット、閑雲 |
| **C** | 攻略余裕を作るうえで大きな代償 | エウルア、ディシア、アーロイ | シロネン、重雲 |
| **D** | 標準条件では特殊運用向け | 辛炎、アンバー | — |


A以下でも、相性のよい敵に対して高難度を攻略できる。低Tierは「攻略不能」「支援役として弱い」を意味しない。例えばベネット、鍾離、シロネンを前衛として低く置くことは、通常の支援運用の価値を否定するものではない。

主対象と派生を列で分けたのは役割を明示するためであり、別Tier表ではない。スクロースのSは、本人の直接攻撃だけでS相当のダメージを出すという意味ではなく、能動的な拡散・支援で編成全体を成立させる前衛としての評価である。カーヴェや平蔵など、通常から前衛役として扱われるドライバーは主対象側にも含む。

## 2. 調査と情報の扱い

### 調査した領域

公式の実装・反応・敵・更新情報、英語圏のKQMとtalahの専門ガイド、日本語Wikiの仕様・取得制限、中国語のTapTapとBWIKIの回し・計算条件、公開gcsim設定、自己申告の木桩計測、使用率統計、一般攻略サイトを照合した。調査は2026年10月28日に行い、本文取得ができた範囲と検索要約のみの範囲を区別した。

既存Tier表は結論の多数決には使っていない。仕様、操作列、編成制約、計算条件の違いから比較し、食い違いが生じた場合は元の条件を確認した。

### 証拠を使い分けた方法

| 情報 | 主な用途 | その情報だけでは分からないこと |
|---|---|---|
| 公式天賦・実装告知 | 何が実装済みか、効果の成立条件 | 実戦の最適編成や最速順位 |
| 検証・理論ガイド | 付着、回し、エネルギー、支援との相互作用 | 全コンテンツでの優劣 |
| 仮定が見える計算・設定 | 同じ条件内での武器・回し・編成差 | 別の計算方式のDPSとの単純比較 |
| 実戦計測 | 操作・命中・ウェーブへの対応の補助 | 装備・凸・試行選別が不明なままの一般化 |
| 使用率・攻略報告 | 現行ギミックと採用される組み合わせの探索 | 強さの因果効果や全プレイヤーの成功率 |
| 一般Tier表・短評 | 見落とした論点や反対例の探索 | 根拠を伴わない順位の採用 |

動画はBilibiliの412エラーやYouTube取得制限があり、一部は本文・全映像・装備を確認できなかった。タイトルや検索要約だけで「実戦検証済み」とは扱っていない。NGAの詳細スレッドも本調査では十分取得できていない。

### 残った情報源の偏り

個別評価欄で参照したURLは93件。そのうちKQM本体・TCLが79件で、仕様参照は同コミュニティに大きく依存する。複数著者のガイドではあるが、完全に独立した79件の実験ではない。talah、BWIKI、日本語Wikiについても、元の仕様や検証が共有されている可能性を排除できない。

この偏りを隠して「多言語で一致したから確定」とはしない。最新上位勢の反応・編成条件は複数系統で照合した一方、旧キャラの最新支援下の横断比較には不足が残る。個別Tierの確度を高としたのは2件、中57件、低18件。これらは統計的な確率ではなく、評価の安定性についての自己評価である。

### 主要資料

| ID | 資料・発行者 | 採用範囲・留保 |
|---|---|---|
| G01 | [HoYoverse日本法人：Ver.7.1実装・新キャラ説明](https://prtimes.jp/main/html/rd/p/000000449.000096124.html) | 公式発表。実装日と役割・天賦概略に使用。火力順位の証拠ではない。 |
| G02 | [公式：Ver.7.1前半イベント祈願](https://genshin.hoyoverse.com/m/ja/news/detail/166228) | 実装済みと将来予定の境界に使用。 |
| G03 | [公式：兹白・イルーガの実装説明](https://prtimes.jp/main/html/rd/p/000000382.000096124.html) | 兹白の正式表記と月結晶の専任役を確認。 |
| G04 | [公式：Stellar Swirl告知](https://genshin.hoyoverse.com/news/detail/165478) | 反応の追加時期を確認。本文は画像主体で取得制約あり。 |
| G05 | [KQM GINews：ゲーム内公式告知のアーカイブ](https://github.com/KQM-git/GINews) | 公式文章の保存版。7.1の螺旋補正と不具合修正を参照。公式運営サイトそのものではない。 |
| G06 | [KQM：Stellar Glimmer Reaction Guide](https://keqingmains.com/misc/stellar-reaction-guide/) | 7.0の意図された反応仕様、ダメージ分類・防御・耐性・バフ適用範囲。7.1新規キャラ一覧には未対応部分がある。 |
| G07 | [talah：Stellar-Conduct Reaction Guide](https://mobalytics.gg/genshin-impact/guides/stellar-conduct) | 2026-09-22更新。星電導の専門的な編成比較。C0付近の比較見解として扱い、順位をそのまま転載しない。 |
| G08 | [talah：Stellar Swirl Reaction Guide](https://mobalytics.gg/genshin-impact/guides/stellar-swirl) | 星拡散と付着、ヴォジャニーツァの水付着による機会損失を照合。 |
| G09 | [KQM Calculation Standard](https://compendium.keqingmains.com/) | 聖遺物・育成の比較規範。反応率や範囲命中率を保証しないという限界も採用。 |
| G10 | [gcsim開発者：Introduction](https://docs.gcsim.app/) | シミュレーターの対象とモデル誤差の注意を確認。本研究で全キャラの再シミュレーションは実施していない。 |
| G11 | [Lightkeepers：Team Simulationsの説明](https://lightkeepers.moe/teams) | 平均的プレイヤー向けの回しとKQM聖遺物基準を掲げる。最速コンボ型の資料との違いを確認。 |
| G12 | [Lightkeepers：アルハイゼン・ラウマ型の設定例](https://lightkeepers.moe/teams/configs/Alhaitham~C0~IronSting~R5__Furina~C0~FavoniusSword~R5__KukiShinobu~C6~IronSting~R1__Lauma~C0~FavoniusCodex~R5) | レベル・凸・装備・敵条件・回しのコードまで確認可能な例。掲載DPSを他方式の数値とは比較しない。 |
| G13 | [Gwisted：ヴェスナ／ファルザン／ヴォジャニーツァ／オデット](https://gwisted.com/games/genshin-impact/calculations/dd5a89b6-d3ac-4550-aaae-a1dd4e1911ba) | 公開171.05K DPS、19秒。回し・装備は見えるが全計算仮定は十分でなく、順位の定量根拠には採用しない。 |
| G14 | [Gwisted：サンドローネ／八重1凸／オデット／七七2凸](https://gwisted.com/games/genshin-impact/calculations/510c773f-db9e-4428-a4aa-0f93aa8cdf63) | 凸混在の検出例。無凸標準の値には変換しない。 |
| G15 | [genshin.im：Measured DPS Rankings](https://genshin.im/measured-dps) | 59件・2026-10-27更新の自己申告計測表。装備・凸の統一や一部編成が確認できず、数値序列を不採用。 |
| G16 | [中国語TapTap：V7.1ヴェスナ詳細検討](https://www.taptap.cn/moment/851859733571699624) | 操作時間・生成粒子・爆発頻度の仮定が明示される。外部バフを省いた個人計算なので実チーム比較には移植しない。 |
| G17 | [中国語TapTap：V7.0オデット詳細検討](https://www.taptap.cn/moment/836558201024416220) | 星反応の式と仮定を照合。更新・転載の重複を独立した証拠数に数えない。 |
| G18 | [日本語原神Wiki：幻想シアター](https://wikiwiki.jp/genshinwiki/%E5%B9%BB%E6%83%B3%E3%82%B7%E3%82%A2%E3%82%BF%E3%83%BC) | 活力・元素制限・選択仕様。ゲーム内説明を含むコミュニティ資料。 |
| G19 | [日本語原神Wiki：氷主人公](https://wikiwiki.jp/genshinwiki/%E4%B8%BB%E4%BA%BA%E5%85%AC/%E6%B0%B7) | 7.1現在4凸までという取得上限の記載。一次公式資料で上限の直接確認が残る。 |
| G20 | [日本語原神Wiki：星鋒の剣](https://wikiwiki.jp/genshinwiki/%E7%89%87%E6%89%8B%E5%89%A3/%E6%98%9F%E9%8B%92%E3%81%AE%E5%89%A3) | 少なくとも7.0時点で90・R3が取得可能という記載を採用。将来のR5は不採用。 |
| G21 | [AZA.GG：幽境の激戦統計](https://genshin.aza.gg/leyline?l=ja) | 使用率とUse/Ownの区別を確認。画像主体で対応名・母集団を十分監査できず、数値は採点に使わない。 |
| G22 | [genshin-build：Tier表の出典説明](https://genshin-build.com/tier-list) | Prydwenからの許諾転載である旨を明記。同じ元データを複数票に数えないための確認例。 |
| G23 | [ゲームウィズ：7.1幽境の激戦](https://gamewith.jp/genshin/article/show/501914) | 現行ボスの攻略条件の補助確認。キャラ順位の根拠ではなく、公式の新ボス説明と照合。 |
| G24 | [KQM：更新履歴](https://keqingmains.com/changelog/) | サイト全体の新しさと個別ガイドの更新版が一致しないことを確認。 |
| G25 | [BWIKI：サンドローネ攻略](https://wiki.biligame.com/ys/%E6%A1%91%E5%A4%9A%E6%B6%85/%E6%94%BB%E7%95%A5) | 中国語の具体的な配装・回しと控え爆発の省略を照合。掲載装備は本稿の武器上限と異なる。 |
| G26 | [BWIKI：ネフェル攻略](https://wiki.biligame.com/ys/%E5%A5%88%E8%8A%99%E5%B0%94/%E6%94%BB%E7%95%A5) | ラウマ・コロンビーナの役割、回復がラウマ1凸である点を照合。 |
| G27 | [BWIKI：ヴェスナ攻略](https://wiki.biligame.com/ys/%E8%96%87%E6%96%AF%E7%BA%B3/%E6%94%BB%E7%95%A5) | 強化スタックと退場リセットを照合。画像・未記入箇所もあり、その部分を推測で埋めない。 |
| G28 | [DPSLeaders：gcsimリンク集](https://dpsleaders.augmeneco.ru/?page=0) | 回し・凍結条件・初動例外の記載を確認。リンク先計算の本文取得に制約があり、横断順位の数値には不採用。 |

## 3. 評価条件と、その採用理由

### 育成・凸・武器

| 項目 | 採用条件 |
|---|---|
| キャラ・武器レベル | 原則90。95・100への上限突破は基準外 |
| 天賦 | 基本9、凸由来の+3は反映。通常攻撃を使わない型へ不必要な通常火力を加算しない |
| ★5 | 本人・味方とも無凸。恒常★5も無凸。周年配布や無料選択を理由に自動で1凸にしない |
| ★4 | 本人・味方とも6凸。完成編成を比較するための統一条件であり、全プレイヤーが所持するとの仮定ではない |
| 主人公 | 氷は4凸、炎・岩は6凸。任務由来の恒常強化は反映。氷6凸の味方バフは不採用 |
| 武器上限 | 鍛造・配布・★3はR5、通常祈願★4はR3、紀行はR1を基本。限定祈願★4の高精錬を標準にしない |
| ★5武器の例外 | 配布「星鋒の剣」90・R3は使用可。全員が取得可能な恒常報酬であるため。未取得の将来R5は使わない |
| 聖遺物 | 適正メイン・セット・チャージを優先。比較規範はKQMSの40サブステ配分。会心だけを同じ値に固定しない |
| 確率・維持条件 | 流浪楽章の当たり効果だけ、黎明の神剣の常時HP90%以上、螭龍の剣の無損失維持などを無条件に保証しない |

武器・聖遺物の条件は**比較判断の基準**である。全77運用について、この条件の完全な最適化ビルドとDPSを新規計算したわけではない。外部の計算がこの基準と違う場合、数値を補正式で機械的に換算せず、採用範囲を限定した。

★4完凸は、低凸の限定★5と比較する際に結果を左右する。嘉明、レザー、ノエル、ファルザン、シュヴルーズ、イルーガ、プルーネなどは特に注意が必要。未完凸★4を多く使う条件への変更は、第7節に分けて扱う。

レベル90は現在の育成上限という意味ではない。100への強化は現行でも存在するが、無凸・一般的な完成育成の比較を保つため除いた。直接星反応ダメージと、レベル補正を使う反応ダメージも同一扱いにはしていない。

### 編成と操作

- 4人編成。★5の人数上限を設けず、全員無凸・非モチーフの範囲で、そのキャラに適した実用編成を認める。これは所持難度や獲得コストの比較ではないため。
- 回復・盾・自己回復など、連戦を可能にする生存手段を含む型を基準にする。無回復の最大火力型は別条件とする。ネフェルはラウマ・コロンビーナにヨォーヨ／白朮等を組み合わせる型を含めた。
- 同じ支援3人を全キャラに固定しない。キャラごとに反応とローテーションが違うので、固定すると特定系統を不当に有利にする。
- 通常のキャンセル、付着管理、敵の攻撃回避は認める。フレーム単位の最速操作、特殊な衝突挙動、何十回ものリセットを成功前提にはしない。
- 最初だけ満エネルギーの一巡で終わらず、次巡の回復と再始動を考慮。平均DPSを参照するときは90秒程度の連戦を比較規範とする。
- 個別欄の「代表編成」は最強固定の断定ではない。敵・装備・操作によって入れ替えを認める。同じ評価帯の代替候補も併記する。

### 対象環境

螺旋12層の星獲得、幽境の激戦エクストラの安定攻略と有利な相手でのアルティメット対応、幻想シアターの高難度公演・アルカナ挑戦を主対象とする。アルティメットの全期・全ボスを標準投資で必ずクリアできるという保証ではない。

単体静止ボス、移動する単体、密集複数敵、分散複数敵、複数ウェーブ、短い攻撃可能時間、付着回数や元素を要求するギミックを確認項目とした。これらを同じ実測データセットで全員に実施したわけではなく、キットと資料を当てはめる比較場面である。

通常の比較では、期間限定の地脈・淵月・開幕キャストの追加強化は外す。キャラと武器・聖遺物・恒常反応の効果は含む。キャラは相性のよい側に配置できるとし、水無効ボスへ水アタッカーを強制して点数をゼロにするような比較はしない。ただし、炎固定付着で反応を起こせない等の追加的な対応範囲の狭さは考慮する。

Ver.7.1にはTPS形式の「絶境挑戦」もあるが、通常の4人キャラ編成の強さを測るのに適さないため、通常メインDPSの採点には含めない。

## 4. 強さの評価体系

### 評価対象は「その前衛を中心にした編成が、どの程度の余裕で攻略できるか」

本人の最大ダメージとチーム全体のDPSを同じ点として二重加算しない。本人が敵に直接大ダメージを与える型に加え、付着・追撃起動・反応・支援によって編成火力を作る前衛も評価する。ただし、強い控え3人を置くだけで全ての前衛を同点にはしない。

具体的には、その前衛を似た代替キャラへ替えた場合に、付着、支援、エネルギー、防御、攻撃時間がどう変わるかを確認する。これは差分DPSを新規実測したという意味ではなく、編成内での役割を確認する比較である。

### 各モードを採点するときの確認項目

| 確認項目 | 攻略へ与える影響 | 二重計上を避ける扱い |
|---|---|---|
| 必要時間内に届く有効ダメージ | 瞬間火力、持続火力、初動、過剰ダメージ | 最終的な攻略余裕にまとめる |
| 命中・対象切替・範囲 | 射程、追跡、分散、増援、設置の移動 | 「範囲が広い」だけの独立加点にしない |
| ローテーション継続 | 粒子、爆発頻度、交代、強化状態の再始動 | 理論DPSから既に引かれた待ち時間を再減点しない |
| 生存と中断 | 回避による攻撃損失、盾・回復の枠、自己回復 | 盾の有無だけで安全性を決めない |
| 成立条件と適応範囲 | 必須元素、反応変換、固定付着、ドラフト制限 | 所持コストを減点せず、編成不成立の性能損失を扱う |

この5項目に別々の細かな点数を付けて合算する方法は採用しなかった。例えば範囲、命中率、操作容易性、安定性を別加点すると、同じ実戦上の利益を何度も数えやすいためである。

### モード点と重み

各モードで0〜5の序数コードを0.5刻みで付けた。5は現行の最上位候補、4は有力な攻略戦力、3は相性や運用条件を選ぶ競争力、2は大きな制約、1は標準条件では厳しい、0はその評価条件で機能しない、という目安である。

総合コード = 0.45 × 螺旋点 + 0.35 × 幽境点 + 0.20 × シアター点

| 統合先 | 総合コード |
|---|---|
| SS | 4.4以上 |
| S | 3.8以上4.4未満 |
| A | 3.2以上3.8未満 |
| B | 2.6以上3.2未満 |
| C | 2.0以上2.6未満 |
| D | 2.0未満 |

螺旋45%は、多ウェーブと複数部屋を含む一般的な攻略性能を重くするため。幽境35%は、高HP単体と固有ギミックを強く反映するため。シアター20%は、不完全編成での能力を反映しつつ、育成人数・所持範囲という本来の入手育成評価が総合表を支配しないためである。

この比率はプレイヤー人口から推定した値ではなく、依頼の目的に合わせた価値判断である。また序数を加重平均すること自体が近似であり、「4点は2点の2倍強い」「4.0と3.9に測定可能な差がある」とは解釈しない。小数は計算監査のために付録へ残すだけとする。

シアターは、そのキャラが出場可能な期を条件に、専用支援を欠く場合や支援の活力を温存する場合の戦力を考える。出場不可の月を0点にして特定元素を罰することはしない。専用支援が完全に揃う公演なら、この点は上がる。

## 5. 再検証した重要な論点

### 5.1 今期の数字をそのまま長期評価にしない

7.1の10月16日更新の公式告知保存版では、螺旋12層の前半は星反応ダメージ+75%、後半は氷元素ダメージ+75%。淵月の追加ダメージも氷・星反応に関連する［G05］。

この環境で星・氷系の採用率やクリア速度が高いことは、本体性能の上昇と期間補正が重なった観測になる。本表では期間補正を外し、専用反応の恒常的な火力・操作・編成の性質を残した。それでも上位に残るという判断であり、+75%をそのまま能力として採点したのではない。

### 5.2 公開DPSを横に並べると、味方の凸で結論が変わる

| 公開例 | 記載DPS | 検出した比較上の問題 | 採用判断 |
|---|---:|---|---|
| Gwistedのヴェスナ／ファルザン／ヴォジャニーツァ／オデット | 171.05K | 19秒、編成と武器は見えるがチャージ・粒子・敵などの完全条件の監査は未完 | 回しの比較材料。確定DPS序列には不採用 |
| Gwistedのサンドローネ／八重／オデット／七七 | 180.56K | 八重1凸・七七2凸で、本表の★5無凸と異なる | 無凸サンドローネの標準DPSとして不採用 |
| genshin.imのサンドローネ／ヴェスナ | 247K／223K | 複数巡計測との説明はあるが、装備・凸の統一や一部編成の情報が不足。「Estimated」も混在 | 採点数値に不採用 |

八重神子1凸には、現行の星電導編成で大きな意味を持つチーム支援がある。サンドローネだけ無凸でも、味方が1凸なら「全員無凸の比較」にはならない。無料の1凸選択が存在することは、それを全員の基準にしてよい根拠にはならない。

参考の感度例として、公開例の3.25M程度のダメージを19秒で出すと約171Kだが、同じダメージのまま立て直しに2秒増えると約155Kになる。これは**仮の算術例**であり、ヴェスナが実際に必ず2秒遅れるという測定結果ではない。数秒の条件差で公表値の小さな差を超えることを示している。

### 5.3 ヴェスナとサンドローネは「新しい方が自動的に上」ではない

採択した比較判断は、サンドローネは持続範囲火力と操作再現性、ヴェスナは星拡散の範囲火力と対応する支援の組み合わせに強みがある、というもの。総合では同じSSに置き、単純な新旧の上下関係は付けない。

中国語TapTapでは、ヴェスナの操作時間と粒子を細かく仮定してサンドローネと比較している。ただし外部バフを外した個人計算で、ファルザンの供給や実チームの支援を含む場合と一致しない。talah側はファルザンを含む編成で爆発頻度が変わる点を述べる。この食い違いは多数決で解消せず、「本人だけの計算」と「チーム供給込み」の前提差として扱った［G16、個別ヴェスナ資料］。

### 5.4 リオセスリの耐久強化は、単純な回復追加ではない

星電導型では、HP条件を満たして出す強化重撃が重要になる。過剰な外部回復は、その機会を減らす場合がある。従来型の「無凸は回復が必要」という一般説明を、星電導型にそのまま使うと誤る。

したがってニコ等の盾を評価し、回復最大の編成を自動的な安定最適とはしない。一方で被弾が激しく自己回復だけでは足りない対面なら、火力を落として回復を入れる判断も合理的である。単体への強さは高いが、分散敵・中断・HP管理の条件からSに留めた。八重1凸込みの数値を使わないことも同じ評価条件に含む。

### 5.5 瑞希とセノは、昔の弱点をそのまま持ち越さない

瑞希は星拡散に直接対応するようになり、回復と簡単な継続操作を両立する前衛としてSに評価した。セノもスキルから強化状態へ移る仕組みと星電導により、旧来の爆発だけに依存した評価が変わっている。

ただし、変換役や付着・支援は必要。瑞希1〜2凸の計算を無凸に置き換えず、セノの旧4.2ガイドを現行の最適編成の証拠にはしなかった。セノは武器・タイミング・専用支援への制約を残すのでAという判断である。

### 5.6 凍結不可と、氷アタッカー不適性は同じではない

スカークは水氷制約とエスコフィエへの依存が大きい。しかし通常の氷風セットだけに縛られるキャラではなく、凍結できないボスにも戦える。凍結不可という条件だけで大きく降格させない。

綾華は主力爆発を当て切れるか、甘雨は重撃や爆発の設置を成立させられるかがより重要になる。同じ氷でもダメージの出し方が違うため、元素だけで横並びに評価しなかった。

### 5.7 ローエンとタルタリヤは、個人DPSだけだと誤評価しやすい

ローエンは本人の氷攻撃だけでなく、控えのドゥリンに順溶解を起こさせる役割を持つ。タルタリヤも水付着で香菱の反応火力を作りつつ自分でも攻撃する。

一方、控えの火力を全て前衛個人の功績にするのも不適切である。その前衛の付着・攻撃列が実際に必要か、他の前衛で代替すると何が失われるかを確認する。この考え方で両者を評価し、本人の大きな一撃だけで優劣を決めなかった。

### 5.8 同じ支援役でも、強化できるダメージの範囲が違う

星反応扱いのダメージは、通常の元素ダメージバフ・共通ダメージバフと同じようには伸びない。敵防御を参照しない一方、元素耐性は参照する［G06］。

このため、風キャラだから風杯、氷キャラだから氷杯、強いダメージバフ役だから誰にでも最適、という選び方はできない。攻撃力・熟知・会心・耐性低下・専用反応バフを、実際に作用するダメージ成分へ結び付けて評価した。ただし、防御を無視するから自動的に他の攻撃の2倍強い、とは結論していない。

## 6. 各キャラクターの評価根拠

以下の「評価理由・留保・モード点」は筆者の比較判断。「仕様・回し」の参照先を末尾に付ける。代表編成の組み合わせには、別々の現行資料を接続した推論も含む。全てが同じ条件で実測された編成ではない。

H = 本人の継続攻撃、Q = 短い出場を繰り返す攻撃、D = 反応・付着を動かす前衛。複合は兼任。主対象／派生の区別はTierの上下とは関係しない。

### SS：完成編成で最上位候補

#### サンドローネ — SS（氷、H、主対象、確度中）

**判定：** 持続範囲火力と比較的単純な操作を両立。星電導を主軸とし、星拡散にも移行できる。

**制約・比較上の注意：** 八重1凸込みの公開値を無凸値として採用しない。敵の氷耐性と編成成立条件に注意。

**代表的な味方3枠：** 八重神子／オデット／エスコフィエ。

**モード点（螺旋／幽境／シアター）：** 5／5／3。参照：[C01]、[C02]、[C03]。

#### ヴェスナ — SS（風、H、主対象、確度中）

**判定：** 星拡散の範囲火力が強く、支援込みで攻撃継続と生存をまとめられる。氷側の控え火力も有効。

**制約・比較上の注意：** 後半の強化攻撃まで通す必要がある。非モチーフ武器での爆発毎回使用はエネルギー条件を確認。

**代表的な味方3枠：** オデット／ヴォジャニーツァ／ファルザン。

**モード点（螺旋／幽境／シアター）：** 5／4.5／3.5。参照：[C04]、[C05]、[C06]、[C07]。

#### フリンズ — SS（雷、H、主対象、確度中）

**判定：** 短い爆発を軸に高い月感電火力を出し、イネファの防御と控え火力も活かす。範囲にも対応。

**制約・比較上の注意：** 月反応と月兆を成立させる味方の制約があり、自由枠だけで完全に代替できるわけではない。

**代表的な味方3枠：** イネファ／コロンビーナ／スクロース。

**モード点（螺旋／幽境／シアター）：** 4.5／5／3.5。参照：[C08]、[C09]。

#### ネフェル — SS（草、H、主対象、確度中）

**判定：** 月開花を専用の重撃火力へ変換し、完成編成での攻略余裕が大きい。短い移動を挟む攻撃も実用的。

**制約・比較上の注意：** ラウマ等を欠くと下落が大きい。無回復スクロース型は攻撃偏重の別条件。炎付着固定の敵も苦手。

**代表的な味方3枠：** ラウマ／コロンビーナ／ヨォーヨまたは白朮。

**モード点（螺旋／幽境／シアター）：** 5／5／2。参照：[C10]、[C11]、[C09]、[C12]。

#### 兹白 — SS（岩、H、主対象、確度中）

**判定：** 月結晶の高い個人火力に、控えの月反応火力と支援を重ねられる。行動に調整余地がある。

**制約・比較上の注意：** 岩だから無条件に汎用的という評価はしない。水・月反応と専用支援が揃う条件での最上位。

**代表的な味方3枠：** イルーガ／リンネア／コロンビーナ。

**モード点（螺旋／幽境／シアター）：** 5／5／2.5。参照：[C13]、[C14]。

### S：極めて強い総合戦力

#### マーヴィカ — S（炎、H、主対象、確度中）

**判定：** 初撃の大火力とその後の持続範囲火力があり、爆発中の強い中断耐性が実戦の損失を抑える。

**制約・比較上の注意：** 戦意供給・反応・支援の時間管理が条件。最適化した特殊コンボの値は通常操作の値と分ける。

**代表的な味方3枠：** シロネン／シトラリ／ベネット。

**モード点（螺旋／幽境／シアター）：** 4.5／4.5／3.5。参照：[C15]、[C16]。

#### スカーク — S（氷、H/Q、主対象、確度中）

**判定：** 通常攻撃主体と短出場の爆発を使い分けられ、非凍結ボスでも戦える。自由な位置取りも長所。

**制約・比較上の注意：** 水氷制約とエスコフィエ依存がシアターの不完全編成で重い。凍結不可を一律の致命傷とはしない。

**代表的な味方3枠：** フリーナ／エスコフィエ／ヴォジャニーツァまたは夜蘭。

**モード点（螺旋／幽境／シアター）：** 4.5／4.5／2.5。参照：[C17]、[C18]。

#### ヌヴィレット — S（水、H、主対象、確度高）

**判定：** 広い射程、移動しながらの範囲攻撃、自前回復、分割できる攻撃時間が複数ウェーブで強い。

**制約・比較上の注意：** 無凸の中断リスクを計上。最高火力型と鍾離入り安定型を同じ火力として扱わない。高HP単体だけなら相対低下。

**代表的な味方3枠：** フリーナ／シロネン／楓原万葉、または鍾離＋異元素2枠型。

**モード点（螺旋／幽境／シアター）：** 4.5／3.5／5。参照：[C19]。

#### アルレッキーノ — S（炎、H、主対象、確度高）

**判定：** 高い炎火力と、交代・対象変更後も扱いやすい攻撃資源が実戦で有用。蒸発・溶解・過負荷も選べる。

**制約・比較上の注意：** 戦闘中の外部回復制限と無凸の被弾を考慮。回復目的の爆発使用には攻撃資源上の代償がある。

**代表的な味方3枠：** シトラリ／ベネット／楓原万葉またはシロネン。

**モード点（螺旋／幽境／シアター）：** 4.5／4／4。参照：[C20]。

#### ムアラニ — S（水、H、主対象、確度中）

**判定：** 蒸発を大きな一撃へ集中でき、短い攻撃可能時間や少ない手数で倒せるボスに強い。

**制約・比較上の注意：** 接触・マーク・反応の失敗が一撃分の大きな損失になる。多ウェーブでは過剰ダメージと準備時間を考慮。

**代表的な味方3枠：** マーヴィカ／シロネン／スクロース。

**モード点（螺旋／幽境／シアター）：** 4／5／3。参照：[C21]。

#### ヴァレサ — S（雷、H、主対象、確度中）

**判定：** 広い落下攻撃と柔軟な攻撃列が増援処理に強い。過負荷型などで高い火力を発揮する。

**制約・比較上の注意：** モチーフと代替武器の差が大きい。紀行R1・非モチーフ条件なので最高投資の値を移植しない。

**代表的な味方3枠：** ドゥリン／ニコ／イアンサ、またはシュヴルーズ・マーヴィカ型。

**モード点（螺旋／幽境／シアター）：** 4.5／4／3.5。参照：[C22]。

#### リオセスリ — S（氷、H、主対象、確度中）

**判定：** 強化後は星電導の有力アタッカー。爆発に偏らず、通常・重撃と自己回復で継続攻撃できる。

**制約・比較上の注意：** 主に単体向け。星電導型では過剰な回復が強化重撃を減らし得るため、防御は盾を中心に組む。

**代表的な味方3枠：** オデット／八重神子／ニコ。

**モード点（螺旋／幽境／シアター）：** 4／4.5／3。参照：[C23]、[C02]。

#### 夢見月瑞希 — S（風、H、主対象、確度中）

**判定：** 星拡散対応後は単なる低火力の回復ドライバーではない。簡単な継続操作と自前回復が長所。

**制約・比較上の注意：** 星拡散変換役を本人だけでは代替できない。無凸評価に1～2凸の公開計算を混ぜない。

**代表的な味方3枠：** オデット／氷主人公／スクロースまたはファルザン。

**モード点（螺旋／幽境／シアター）：** 4.5／4／3。参照：[C24]、[C25]。

#### キィニチ — S（草、H、主対象、確度中）

**判定：** 燃焼を維持しながら大砲を撃つ対単体戦力。ニコの全体支援と移動に追従する編成で実戦性が向上。

**制約・比較上の注意：** 大砲一発の欠落と操作・通信条件の影響が大きい。広く散った複数敵に一律に強いわけではない。

**代表的な味方3枠：** ドゥリン／ニコ／エミリエまたはイアンサ。

**モード点（螺旋／幽境／シアター）：** 4／4.5／3。参照：[C26]、[C27]。

#### ナヴィア — S（岩、H/Q、主対象、確度中）

**判定：** 短い時間にまとまったダメージを出し、交代を挟みやすい。月結晶型や従来型を使い分けられる。

**制約・比較上の注意：** 攻撃を外すと損失が集中。月結晶支援の利益と本人の岩直撃ダメージを混同しない。

**代表的な味方3枠：** リンネア／コロンビーナ／イネファ、またはシロネン軸。

**モード点（螺旋／幽境／シアター）：** 4／3.5／4。参照：[C28]。

#### クレー — S（炎、H、主対象、確度中）

**判定：** 魔導秘儀後は旧来の操作難と火力評価を引き継げない。多い炎付着で味方の反応火力も作る。

**制約・比較上の注意：** 無凸の位置。無料選択があることを理由に1凸を自動付与しない。魔導相方・エネルギー・吹き飛ばしが制約。

**代表的な味方3枠：** ニコ／フリーナ／シロネン、または魔導過負荷型。

**モード点（螺旋／幽境／シアター）：** 4／4／3。参照：[C29]、[C27]。

#### スクロース — S（風、D、派生・ドライバー、確度中）

**判定：** 能動的な拡散・翠緑・熟知配布で高い控え火力を動かす。魔導相方と組む型も成立する。

**制約・比較上の注意：** これは本人の直接ダメージが専任上位並みという意味ではない。前衛変更時の反応・支援差を根拠に評価。

**代表的な味方3枠：** イネファ／コロンビーナ／フィッシュル。

**モード点（螺旋／幽境／シアター）：** 4／4／3.5。参照：[C74]、[C09]。

### A：高難度で十分強い

#### ファルカ — A（風、H、主対象、確度中）

**判定：** 風と味方に応じた元素で攻撃し、炎型と魔導支援の組み合わせで高い総火力を得る。

**制約・比較上の注意：** 編成条件と適正4★武器の少なさを反映。複数元素を使えることと各元素型が同じ強さであることは別。

**代表的な味方3枠：** プルーネ／ドゥリン／ニコ。

**モード点（螺旋／幽境／シアター）：** 4／4／2.5。参照：[C30]。

#### コロンビーナ — A（水、H、主対象、確度中）

**判定：** 無凸でも月開花の特殊重撃で前に出る運用が成立し、月反応の混合型も組める。

**制約・比較上の注意：** 支援役としての価値をこの位置に加算しない。月開花の専任アタッカーとしてはネフェルに優位がある。

**代表的な味方3枠：** ラウマ／イネファ／アイノ。

**モード点（螺旋／幽境／シアター）：** 4／4／2.5。参照：[C09]。

#### ローエン — A（氷、H/D、主対象、確度中）

**判定：** 高頻度の氷付着により、本人の攻撃と控えのドゥリンの順溶解を両立する。単体で有力。

**制約・比較上の注意：** 総火力を本人の氷ダメージだけで判断しない。攻撃範囲、適正武器、ニコ等への依存を減点。

**代表的な味方3枠：** ドゥリン／ニコ／シトラリ。

**モード点（螺旋／幽境／シアター）：** 3.5／4／2.5。参照：[C31]。

#### 嘉明 — A（炎、H、主対象、確度中）

**判定：** 完凸と反応支援で大きな落下攻撃を反復できる。最新の氷付着・攻撃支援で選択肢も増えた。

**制約・比較上の注意：** 完凸前提。落下中の水付着や反応継続を確認し、見た目の水付着の多さだけで相方を選ばない。

**代表的な味方3枠：** シトラリ／閑雲／ベネット、またはオデット・ニコ型。

**モード点（螺旋／幽境／シアター）：** 4／4／2.5。参照：[C32]。

#### アルハイゼン — A（草、H/D、主対象、確度中）

**判定：** 本人の草火力と反応の両方で戦い、分割ローテーションも選べる。旧来の超開花だけに限定しない。

**制約・比較上の注意：** 現行最高峰との火力差はある。鏡・出場時間・ナヒーダの再付着などの実行条件を考慮。

**代表的な味方3枠：** ラウマ／フリーナ／久岐忍、またはナヒーダ激化型。

**モード点（螺旋／幽境／シアター）：** 3.5／3.5／3.5。参照：[C33]、[C11]、[C34]。

#### クロリンデ — A（雷、H/D、主対象、確度中）

**判定：** 移動・自己回復・通常攻撃連動を同時にこなし、反応と控え火力を引き出す。複数系統を選べる。

**制約・比較上の注意：** スキルの有効時間と待ち時間、中断、入力・遅延の影響を含める。理論最速の攻撃列を全員に要求しない。

**代表的な味方3枠：** イネファ／コロンビーナ／スクロース、または過負荷型。

**モード点（螺旋／幽境／シアター）：** 4／3.5／3.5。参照：[C35]、[C09]。

#### セノ — A（雷、H、主対象、確度中）

**判定：** 星電導強化とスキルからの強化状態移行で、以前の爆発依存・長時間拘束の評価が変わった。

**制約・比較上の注意：** 古い4.2クイックガイドを現行結論の根拠にしない。特殊スキルのタイミングと非モチーフ武器の条件が残る。

**代表的な味方3枠：** オデット／八重神子／ニコ。

**モード点（螺旋／幽境／シアター）：** 3.5／4／2.5。参照：[C36]、[C37]、[C02]。

#### 胡桃 — A（炎、H、主対象、確度中）

**判定：** 蒸発重撃を軸に対単体で強く、落下型も選べる。適正反応を保てる編成で戦力になる。

**制約・比較上の注意：** 無凸のスタミナとキャンセルの負担を計上。回復を一律に禁止せず、フリーナ・落下型は別の最適化として扱う。

**代表的な味方3枠：** 夜蘭／フリーナ／閑雲、または行秋・シロネン型。

**モード点（螺旋／幽境／シアター）：** 3.5／4／3。参照：[C38]、[C39]。

#### 魈 — A（風、H、主対象、確度中）

**判定：** 落下の範囲、移動、敵の怯ませを活かして複数敵を処理できる。専用支援で火力も十分。

**制約・比較上の注意：** 長い爆発出場とエネルギー、限られた支援枠が制約。吹き飛んだ小型敵への追跡も実戦に含む。

**代表的な味方3枠：** ファルザン／閑雲／フリーナ。

**モード点（螺旋／幽境／シアター）：** 3.5／3.5／2.5。参照：[C40]。

#### 雷電将軍 — A（雷、H/D、主対象、確度中）

**判定：** 本人の爆発火力だけでなく、味方の要求チャージを下げる利益を持つ。月感電型でも意味のある前衛。

**制約・比較上の注意：** 2凸の印象を無凸に移さない。熟知スキル設置だけの超開花運用は、このメインDPS評価の対象外。

**代表的な味方3枠：** イネファ／コロンビーナ／スクロース、または過負荷型。

**モード点（螺旋／幽境／シアター）：** 3.5／3.5／3。参照：[C41]、[C09]。

#### レザー — A（雷、H、主対象、確度中）

**判定：** 完凸と魔導秘儀によって、旧来の物理専任という分類から外れる。炎付与を使う過負荷型も有力。

**制約・比較上の注意：** 本人・シュヴルーズ・ベネットの凸を明示。未完凸版を同じ位置に置かず、旧物理型への評価でもない。

**代表的な味方3枠：** ニコ／シュヴルーズ／ベネット。

**モード点（螺旋／幽境／シアター）：** 3.5／3.5／2.5。参照：[C27]、[C42]。

#### ティナリ — A（草、Q、主対象、確度中）

**判定：** 短い出場と追尾する重撃で、単体・移動する敵・細かな攻撃可能時間に対応しやすい。

**制約・比較上の注意：** 広い多ウェーブでは付着や対象の再設定が必要。激化型の長所を活かし、低相性の月開花型の数値で代表させない。

**代表的な味方3枠：** 八重神子／ナヒーダ／鍾離。

**モード点（螺旋／幽境／シアター）：** 3.5／3.5／3。参照：[C43]、[C44]。

#### チャスカ — A（風、H、主対象、確度中）

**判定：** 射程と複数元素の攻撃で、接近しにくい敵や特定元素耐性に対応しやすい。味方の組み替えも可能。

**制約・比較上の注意：** 無凸は主に単体向け。複数元素弾が複数敵へ分散しても範囲火力が増えるとは限らず、2凸の長所と区別する。

**代表的な味方3枠：** シトラリ／ベネット／フリーナ、またはニコ型。

**モード点（螺旋／幽境／シアター）：** 3.5／4／4。参照：[C45]。

#### リネ — A（炎、H、主対象、確度中）

**判定：** 重撃とスキル・爆発を短い強化時間へまとめやすく、単体火力を伸ばせる。魔導支援を受ける型も候補。

**制約・比較上の注意：** 本人は魔導キャラではない。狙い撃ち中断、炎付着条件、近距離スキルへの移行を考慮する。

**代表的な味方3枠：** ニコ／ドゥリン／シトラリ、またはベネット・楓原万葉型。

**モード点（螺旋／幽境／シアター）：** 3.5／4／2.5。参照：[C46]、[C27]。

#### 神里綾華 — A（氷、H/Q、主対象、確度中）

**判定：** 爆発を当て切れる相手には高いまとまり火力。強い氷水支援で非凍結戦も改善する。

**制約・比較上の注意：** 爆発の空振り・移動・ウェーブをまたぐ過剰ダメージが主要制約。非凍結と氷無効は別に扱う。

**代表的な味方3枠：** フリーナ／エスコフィエ／ヴォジャニーツァ。

**モード点（螺旋／幽境／シアター）：** 3.5／3.5／2.5。参照：[C47]、[C18]。

#### 神里綾人 — A（水、H/D、主対象、確度中）

**判定：** 扱いやすい範囲水付着と短いスキル出場が反応編成で有用。月感電や氷水型への適応もある。

**制約・比較上の注意：** 瞬間火力とローテーション同期、非モチーフ武器との差が制約。単体の平均DPSだけで汎用性を否定しない。

**代表的な味方3枠：** イネファ／コロンビーナ／スクロース、または凍結型。

**モード点（螺旋／幽境／シアター）：** 3.5／3／4。参照：[C48]。

#### タルタリヤ — A（水、H/D、主対象、確度中）

**判定：** 密集相手への断流と高速水付着で、自分と香菱の両方の火力を作る。蒸発爆発も初動に寄与。

**制約・比較上の注意：** 敵を集められること、出場時間とクールタイム管理が前提。凍結編成の低い単体値だけで代表させない。

**代表的な味方3枠：** 香菱／ベネット／楓原万葉。

**モード点（螺旋／幽境／シアター）：** 3.5／3／3。参照：[C49]。

#### ディルック — A（炎、H、主対象、確度中）

**判定：** 高い落下倍率を活かした溶解・蒸発型なら、古い通常連打型より大きく改善する。

**制約・比較上の注意：** 閑雲等を欠く場合は下がる。古い3.6ガイドだけでは落下型を説明できないため、閑雲側の資料と照合する。

**代表的な味方3枠：** 閑雲／シトラリ／ベネット。

**モード点（螺旋／幽境／シアター）：** 3.5／3.5／2.5。参照：[C50]、[C51]。

#### 刻晴 — A（雷、H/D、主対象、確度中）

**判定：** 短い攻撃・交代・爆発無敵で状況に適応しやすく、付着回数を要求する相手にも対応する。

**制約・比較上の注意：** 本人の火力は新しい上位勢より控えめ。味方の反応火力を含める一方、刻晴固有の利益も別途確認する。

**代表的な味方3枠：** フィッシュル／ナヒーダ／楓原万葉、または月感電型。

**モード点（螺旋／幽境／シアター）：** 3.5／3／3.5。参照：[C52]。

#### 荒瀧一斗 — A（岩、H、主対象、確度中）

**判定：** 重撃の範囲と中断耐性を活かす。現行では純岩だけでなく月結晶・複合型も検討対象。

**制約・比較上の注意：** 月結晶編成でも本人の攻撃がすべて直接月反応化するわけではない。エネルギーと出場制約が残る。

**代表的な味方3枠：** リンネア／コロンビーナ／イルーガ、またはシロネン型。

**モード点（螺旋／幽境／シアター）：** 3.5／3.5／2.5。参照：[C53]、[C09]、[C14]。

#### ウェンティ — A（風、H/D、主対象、確度中）

**判定：** 魔導強化による風付与の前衛運用を含める。吸引可能な敵では集敵そのものがチームの有効火力を増やす。

**制約・比較上の注意：** 吸引不能ボスと無凸・非モチーフ条件では評価を抑える。支援専任時の価値と混同しない。

**代表的な味方3枠：** ドゥリン／ニコ／ファルザン。

**モード点（螺旋／幽境／シアター）：** 3.5／3／4。参照：[C54]。

#### 放浪者 — A（風、H、主対象、確度中）

**判定：** 射程と狙い先変更の容易さがあり、攻撃を分配しやすい。スキル主体で小戦闘にも入りやすい。

**制約・比較上の注意：** 無凸の空中被弾と中断が重い。盾入りと火力最大型の性能を同一視しない。新支援の寄与は推論を含む。

**代表的な味方3枠：** ファルザン／ニコ／ベネット、またはフリーナ型。

**モード点（螺旋／幽境／シアター）：** 3.5／3／3.5。参照：[C55]、[C27]。

#### 甘雨 — A（氷、H/Q、主対象、確度中）

**判定：** 溶解重撃と凍結・爆発型を選べ、射程と範囲が強み。攻撃可能時間を選んで撃てる。

**制約・比較上の注意：** 重撃中断と準備時間が制約。強い氷サポーターが増えた事実だけで専用星反応アタッカーと同じ扱いにはしない。

**代表的な味方3枠：** エミリエ／ドゥリン／ニコ、またはエスコフィエ型。

**モード点（螺旋／幽境／シアター）：** 3.5／3／3。参照：[C56]。

#### 宵宮 — A（炎、H/D、主対象、確度中）

**判定：** 遠距離の通常連打で攻撃・反応を成立させやすい。盾と組み合わせた安定性、動く単体への射程が長所。

**制約・比較上の注意：** 主に単体であり、攻撃列の中断は蒸発の対応にも影響。過負荷・控え範囲火力は検討するが本人の範囲とは分ける。

**代表的な味方3枠：** イネファ／コロンビーナ／ベネット、または過負荷型。

**モード点（螺旋／幽境／シアター）：** 3／3.5／3.5。参照：[C57]、[C09]。

#### ノエル — A（岩、H/D、主対象、確度中）

**判定：** 完凸の範囲攻撃、盾、全体回復を兼任し、現行の控え火力・月結晶を動かす。編成の防御枠を節約できる。

**制約・比較上の注意：** 高HP単体を速く倒す能力とエネルギーは上位専任に劣る。旧来の岩単色だけで評価しない。

**代表的な味方3枠：** コロンビーナ／リンネア／フィッシュルまたはフリーナ。

**モード点（螺旋／幽境／シアター）：** 3.5／3／4。参照：[C58]。

#### 主人公・氷 — A（氷、H/Q、主対象、確度中）

**判定：** 星反応変換、特殊重撃、爆発に加え、専用配布武器と任務由来の能力強化を含めて評価する。

**制約・比較上の注意：** 現行取得範囲の4凸で判定し、6凸の味方バフは使わない。上限はWikiの記載を採用し一次資料確認が残る。

**代表的な味方3枠：** オデット／八重神子／ニコまたはアリョーシャ。

**モード点（螺旋／幽境／シアター）：** 3.5／4／3。参照：[C60]、[C61]、[C62]。

#### ナヒーダ — A（草、D、派生・ドライバー、確度中）

**判定：** 能動的な草付着と追撃・熟知支援で反応を動かす。本人だけの通常攻撃倍率では測れない前衛。

**制約・比較上の注意：** 低耐久とウェーブごとの再マーキングに注意。控えでも発揮できる支援価値を前衛固有の加点として重複させない。

**代表的な味方3枠：** 行秋／久岐忍／ラウマ、またはニィロウ型。

**モード点（螺旋／幽境／シアター）：** 3.5／3.5／4。参照：[C73]、[C11]。

#### 珊瑚宮心海 — A（水、D、派生・ドライバー、確度中）

**判定：** 前衛の水付着と全体回復を一人で担い、開花・水主体編成で生存しながら反応を継続できる。

**制約・比較上の注意：** 会心不能を月反応で自動解決できるわけではない。高HPボスの速度は専任火力型に劣る。

**代表的な味方3枠：** ニィロウ／ラウマ／ナヒーダ、またはフリーナ水主体型。

**モード点（螺旋／幽境／シアター）：** 3.5／3／4.5。参照：[C75]。

#### イファ — A（風、D、派生・ドライバー、確度中）

**判定：** 前衛拡散と全体回復をまとめ、月感電対応の支援もある。射程・移動で実戦の攻撃継続を助ける。

**制約・比較上の注意：** 星拡散の瑞希と同じ固有火力は持たない。夜魂や反応条件を満たした型で評価する。

**代表的な味方3枠：** イネファ／コロンビーナ／オロルンまたはフィッシュル。

**モード点（螺旋／幽境／シアター）：** 3.5／3.5／4。参照：[C76]、[C09]。

#### 八重神子 — A（雷、D、派生・ドライバー、確度中）

**判定：** 強化後の星電導の高い控え火力を持ち、通常・重撃で前衛運用もできる。相方へ交代しやすい。

**制約・比較上の注意：** 主力は控えでも出せる。この位置は前衛型の攻略性能であり、サブDPSランキングではない。1凸は未採用。

**代表的な味方3枠：** オデット／ニコ／フィッシュル、または激化型。

**モード点（螺旋／幽境／シアター）：** 3.5／3.5／3.5。参照：[C80]。

#### ドゥリン — A（炎、H/Q、派生・ドライバー、確度中）

**判定：** 黒形態の反応火力を中心に、前衛に残って支援と炎付与通常・重撃を活かす運用が成立する。

**制約・比較上の注意：** 評価は前衛型。ローエンと組んで控えから溶解する場合の強さを、そのまま本人の前衛型の点数にはしない。

**代表的な味方3枠：** ベネット／ニコ／夜蘭、または氷付着型。

**モード点（螺旋／幽境／シアター）：** 3.5／3.5／3。参照：[C85]。

#### ラウマ — A（草、D、派生・ドライバー、確度中）

**判定：** 無凸でも草通常攻撃で開花を動かす前衛運用がある。控えでも使える支援に追加の付着を重ねる。

**制約・比較上の注意：** 主なダメージ所有者が水側になる編成もある。6凸の専用前衛火力を無凸に持ち込まない。

**代表的な味方3枠：** ニィロウ／行秋／白朮またはヨォーヨ。

**モード点（螺旋／幽境／シアター）：** 3.5／3.5／3。参照：[C11]。

#### リンネア — A（岩、Q/D、派生・ドライバー、確度低）

**判定：** 月結晶の短時間大火力と、必要に応じた岩重撃付着を使う派生型。回復も兼ねる。

**制約・比較上の注意：** 主役割は控え支援。短出場型の本人火力と長く居座る利益を区別し、通常攻撃を主火力とは評価しない。

**代表的な味方3枠：** コロンビーナ／イルーガ／ゴロー。

**モード点（螺旋／幽境／シアター）：** 3.5／3.5／3。参照：[C14]、[C09]。

### B：条件選択・運用上の工夫が増える

#### セトス — B（雷、H/Q、主対象、確度中）

**判定：** 完凸で通常入力型と短時間の狙い撃ち型を選べる。熟知・反応を活かし、出場時間を調節できる。

**制約・比較上の注意：** 二つの型でエネルギー消費と持続火力が異なる。最新反応型の順位は直接比較資料が少ない。

**代表的な味方3枠：** フィッシュル／ナヒーダ／楓原万葉、または月感電型。

**モード点（螺旋／幽境／シアター）：** 3／3／3.5。参照：[C59]、[C09]。

#### 煙緋 — B（炎、H/D、主対象、確度中）

**判定：** 射程と通常・重撃の反復で反応を起こせ、完凸ならスタミナと盾も補える。扱える相方は多い。

**制約・比較上の注意：** 攻撃準備とスタミナ、爆発回転、本人火力の差が高HP相手で表面化する。盾サポート評価ではない。

**代表的な味方3枠：** 行秋／ニコ／ベネット、または過負荷型。

**モード点（螺旋／幽境／シアター）：** 2.5／2.5／3.5。参照：[C63]、[C27]。

#### 凝光 — B（岩、H/Q、主対象、確度低）

**判定：** 短い交代と遠距離攻撃を活かし、月結晶支援を含む編成も選べる。単体に火力をまとめられる。

**制約・比較上の注意：** 狭い範囲と地形・遮蔽物の影響、現在の直接比較不足がある。月結晶型への再評価は推論の比率が高い。

**代表的な味方3枠：** リンネア／コロンビーナ／イルーガ。

**モード点（螺旋／幽境／シアター）：** 3／3／3。参照：[C64]、[C14]、[C09]。

#### 鹿野院平蔵 — B（風、H/D、主対象、確度中）

**判定：** 短い高倍率スキルと能動的な拡散で、前衛兼反応役として戦える。交代も挟みやすい。

**制約・比較上の注意：** 純風の個人火力とドライバー型は別。スクロースの全体支援や瑞希の専用星拡散火力をそのまま代替しない。

**代表的な味方3枠：** イネファ／コロンビーナ／フィッシュル、または激化拡散型。

**モード点（螺旋／幽境／シアター）：** 3／3／3.5。参照：[C65]、[C09]。

#### カーヴェ — B（草、D、主対象、確度中）

**判定：** 草付与と自分の開花被ダメージ回復を活かす前衛。ラウマ等の支援も受けられる。

**制約・比較上の注意：** 本人の開花起爆が反応所有権を奪うわけではない。前衛を他の草キャラにした場合との差とエネルギーが制約。

**代表的な味方3枠：** ラウマ／コロンビーナ／久岐忍、またはニィロウ型。

**モード点（螺旋／幽境／シアター）：** 2.5／2.5／3。参照：[C66]、[C11]。

#### フレミネ — B（氷／物理、H、主対象、確度中）

**判定：** 完凸で氷スキル型と物理型を選べ、新しい水氷支援も受けられる。小刻みなスキルを反復できる。

**制約・比較上の注意：** 氷砕きが成立しない相手、エネルギー、操作最適化で差が出る。従来の物理型だけには固定しない。

**代表的な味方3枠：** フリーナ／エスコフィエ／ヴォジャニーツァ、または超電導型。

**モード点（螺旋／幽境／シアター）：** 2.5／3／2.5。参照：[C68]。

#### モナ — B（水、D、派生・ドライバー、確度中）

**判定：** 魔導相方との水付着・デバフ維持により、控えの反応を動かす前衛型が成立する。

**制約・比較上の注意：** 無凸なので2凸の熟知支援等は使わない。爆発一撃型、サポート専任、6凸重撃型を混ぜない。

**代表的な味方3枠：** ドゥリン／ニコ／アルベド、または月感電型。

**モード点（螺旋／幽境／シアター）：** 3／3／3。参照：[C77]、[C27]。

#### バーバラ — B（水、D、派生・ドライバー、確度中）

**判定：** 能動的な水付着と回復で開花系を動かせる。個人会心火力を求めない型なら高難度でも役割を持つ。

**制約・比較上の注意：** スキルの自己水付着、射程と付着の管理が制約。会心蒸発型の最大値を標準運用にしない。

**代表的な味方3枠：** ニィロウ／ラウマ／ナヒーダ、または超開花型。

**モード点（螺旋／幽境／シアター）：** 2.5／2.5／3.5。参照：[C78]、[C11]。

#### リサ — B（雷、H/D、派生・ドライバー、確度中）

**判定：** 激化・燃焼混合や月感電で、元素付着と防御低下を活かす前衛。新しい控え火力との相性も検討。

**制約・比較上の注意：** 長押しスキルの隙と爆発回転が実戦上の制約。敵防御を参照しない反応部分へ防御低下の価値を過大に加算しない。

**代表的な味方3枠：** フィッシュル／ドゥリン／ナヒーダ、または月感電型。

**モード点（螺旋／幽境／シアター）：** 3／3／3。参照：[C79]。

#### リネット — B（風、D、派生・ドライバー、確度低）

**判定：** 完凸の風付与で能動的な拡散・反応ドライバーになる。挑発と交代のしやすさもある。

**制約・比較上の注意：** 完凸未満では同じ前衛運用にならない。最新月反応型は旧ガイドと反応資料からの推論を含む。

**代表的な味方3枠：** イネファ／コロンビーナ／フィッシュル、または超開花型。

**モード点（螺旋／幽境／シアター）：** 3／3／3。参照：[C81]、[C09]。

#### ドリー — B（雷、D、派生・ドライバー、確度低）

**判定：** 完凸の雷付与・回復と、雷怒等によるスキル反復で反応前衛を担う。

**制約・比較上の注意：** 短い付与時間と回転・範囲の管理が必要。最新編成の横断比較が乏しく、前衛としての評価確度は低め。

**代表的な味方3枠：** ナヒーダ／フリーナ／フィッシュル、または激化型。

**モード点（螺旋／幽境／シアター）：** 2.5／2.5／3。参照：[C82]。

#### 主人公・炎 — B（炎、H、派生・ドライバー、確度低）

**判定：** 完凸の炎転換と現行の旅人用武器・能力強化を使う前衛型。

**制約・比較上の注意：** 本来の控え付着役からの派生。新武器込みの最新比較は不足し、古い5.5時点の火力評価を直接移植していない。

**代表的な味方3枠：** シトラリ／ニコ／ベネット、または蒸発型。

**モード点（螺旋／幽境／シアター）：** 2.5／2.5／3。参照：[C83]、[C62]。

#### 主人公・岩 — B（岩、Q/D、派生・ドライバー、確度低）

**判定：** 短いスキル・爆発を使い、月結晶編成で前衛の岩付着も提供する。旅人用配布武器も利用。

**制約・比較上の注意：** 岩創造物による動線・狙いへの干渉と本人火力が制約。現行月結晶型の評価は支援側資料からの推論を含む。

**代表的な味方3枠：** リンネア／コロンビーナ／イルーガ。

**モード点（螺旋／幽境／シアター）：** 2.5／2.5／3。参照：[C84]、[C09]、[C62]。

#### キャンディス — B（水、D、派生・ドライバー、確度低）

**判定：** 自分の水付与と追加スキルで前衛運用でき、水氷支援や開花の反応役を担える。

**制約・比較上の注意：** 自分では自身の6凸追撃を発動できない。前衛型の個人火力は低く、支援型の全価値を加算しない。

**代表的な味方3枠：** フリーナ／エスコフィエ／ヴォジャニーツァ、または開花型。

**モード点（螺旋／幽境／シアター）：** 2.5／2.5／3。参照：[C86]。

#### ガイア — B（氷、H/Q、派生・ドライバー、確度低）

**判定：** 完凸の高頻度氷付着と爆発を活かし、前衛に残る氷水型や外部付与型を選べる。

**制約・比較上の注意：** 主力は爆発なので居座る利益は限定的。低相性の重雲型だけで全運用を代表させないが、専任上位との差は残る。

**代表的な味方3枠：** フリーナ／申鶴／エスコフィエ、または重雲型。

**モード点（螺旋／幽境／シアター）：** 3／2.5／3。参照：[C88]。

#### ロサリア — B（氷／物理、H/Q、派生・ドライバー、確度低）

**判定：** 溶解爆発を軸に、外部氷付与や物理通常を補う派生も持つ。短い交代で動ける。

**制約・比較上の注意：** 設置範囲と、本人が前に出る場合の上積みが制約。控えの溶解サブDPSとしての評価とは分ける。

**代表的な味方3枠：** フリーナ／エスコフィエ／重雲、または溶解短出場型。

**モード点（螺旋／幽境／シアター）：** 3／3／2.5。参照：[C89]。

#### フィッシュル — B（雷／物理、D、派生・ドライバー、確度低）

**判定：** 前衛の通常攻撃とオズを両立する派生。魔導強化は使用可能な相方がいる型で適用する。

**制約・比較上の注意：** 控えでほぼ同じ主火力を出せるため、前衛としての固有利益は小さい。物理武器の旧評価だけで判定しない。

**代表的な味方3枠：** イネファ／コロンビーナ／スクロース、または物理型。

**モード点（螺旋／幽境／シアター）：** 3／2.5／3。参照：[C91]、[C74]。

#### 鍾離 — B（岩／物理、D、派生・ドライバー、確度低）

**判定：** 強い盾と近距離の全耐性低下を維持し、通常攻撃で追撃・反応編成を動かす。

**制約・比較上の注意：** サポートとしての最上位評価ではない。本人の攻撃火力は低く、高HP戦は控え火力への依存が大きい。

**代表的な味方3枠：** イネファ／コロンビーナ／シロネン、または物理型。

**モード点（螺旋／幽境／シアター）：** 3／2.5／3.5。参照：[C92]、[C09]。

#### ベネット — B（炎、H/D、派生・ドライバー、確度低）

**判定：** 短いスキルを連発して反応とエネルギーを作る前衛型を評価する。

**制約・比較上の注意：** 基準は6凸。重雲の氷付与を使う5凸止めの順溶解型は別条件。支援役としての重要性は点数に入れない。

**代表的な味方3枠：** キャンディス／香菱／行秋、または炎落下型。

**モード点（螺旋／幽境／シアター）：** 3／2.5／2.5。参照：[C93]、[C86]。

#### 閑雲 — B（風、H/D、派生・ドライバー、確度低）

**判定：** 無凸にも自己落下型と回復を兼ねる風ドライバー型がある。前衛として継続生存を確保できる。

**制約・比較上の注意：** 6凸の連続スキル型は含めない。現行反応ドライバー型の判断は一般反応とキットからの推論が多い。

**代表的な味方3枠：** ファルザン／フリーナ／ベネット、または月感電ドライバー型。

**モード点（螺旋／幽境／シアター）：** 3／3／3.5。参照：[C51]、[C09]。

### C：攻略余裕を作るうえで大きな代償

#### エウルア — C（物理、H、主対象、確度中）

**判定：** 物理のまとまった爆発と範囲があり、現在の支援や星電導の物理耐性低下も利用できる。

**制約・比較上の注意：** 遅れて出る主砲、無敵移行・増援・エネルギーが同時に効く。大きな一発の画像を平均攻略性能にはしない。

**代表的な味方3枠：** 八重神子／オデット／ニコ、またはフリーナ・ミカ型。

**モード点（螺旋／幽境／シアター）：** 2.5／2.5／2。参照：[C67]、[C02]。

#### ディシア — C（炎、H、主対象、確度中）

**判定：** 強化爆発中の中断への強さと耐久を活かす。支援の改善により前衛型を成立させる余地がある。

**制約・比較上の注意：** 無凸の火力とエネルギー、通常攻撃連動との相性が制約。控えの耐久・燃焼役としての価値はこのTierに含めない。

**代表的な味方3枠：** ニコ／フリーナ／ベネット、または過負荷型。

**モード点（螺旋／幽境／シアター）：** 2／2／2.5。参照：[C69]、[C27]。

#### アーロイ — C（氷、H/Q、主対象、確度低）

**判定：** スキル・爆発の短時間ダメージと、条件付きの氷付与で攻撃役を担える。

**制約・比較上の注意：** 通常攻撃型はコイル獲得・付与の再現性が課題。凸による改善も基準にできず、短出場型を含めても制約が大きい。

**代表的な味方3枠：** シトラリ／ニコ／ベネット、または氷水型。

**モード点（螺旋／幽境／シアター）：** 2／2／2。参照：[C72]。

#### シロネン — C（岩、H、派生・ドライバー、確度低）

**判定：** 無凸にも岩攻撃を続ける分岐はある。月結晶支援を使う派生を評価範囲に入れた。

**制約・比較上の注意：** 通常の支援型とは必要な元素構成が異なる。無凸の本人火力は低く、6凸の前衛性能は対象外。

**代表的な味方3枠：** リンネア／イルーガ／コロンビーナ等、岩を多めにした型。

**モード点（螺旋／幽境／シアター）：** 2.5／2.5／2。参照：[C87]、[C14]。

#### 重雲 — C（氷、H/Q、派生・ドライバー、確度低）

**判定：** 氷付与と短い爆発で、氷通常型・反応爆発型の攻撃役になれる。

**制約・比較上の注意：** 支援として付与を渡す価値と本人の前衛火力は別。低い通常火力、場の制約と現行比較不足がある。

**代表的な味方3枠：** 申鶴／エスコフィエ／フリーナ、または溶解型。

**モード点（螺旋／幽境／シアター）：** 2.5／2.5／2.5。参照：[C90]。

### D：標準条件では特殊運用向け

#### 辛炎 — D（炎／物理、H/Q、主対象、確度低）

**判定：** 完凸の重撃・爆発型に加え、外部炎付与と落下を使う別型も検討できる。

**制約・比較上の注意：** 物理・炎・盾の要求が噛み合いにくい。最新支援下の比較が不足し、最下位近辺の並びは確定しない。

**代表的な味方3枠：** ベネット／閑雲／フリーナ、または物理型。

**モード点（螺旋／幽境／シアター）：** 1.5／1.5／2。参照：[C70]、[C51]。

#### アンバー — D（炎、H/Q、主対象、確度低）

**判定：** 手動起爆や溶解重撃で狙った瞬間の火力は作れる。弱点狙撃が機能する相手にも長所がある。

**制約・比較上の注意：** 主力操作の条件と範囲・時間効率が現行の高HP戦で重い。希少な成功動画から一般化しない。

**代表的な味方3枠：** シトラリ／ニコ／ベネット、または重撃・人形型。

**モード点（螺旋／幽境／シアター）：** 1.5／2／2。参照：[C71]。

## 7. 評価条件を変えるとどう動くか

### コンテンツの重みだけを変えた再集計

同じモード点を固定し、重みを変更した算術上の感度分析である。そのコンテンツだけの実測Tier表ではない。

| 設定 | 螺旋 | 幽境 | シアター | 基準からTierが変わる運用数 |
|---|---:|---:|---:|---:|
| 基準 | 45% | 35% | 20% | — |
| 螺旋重視 | 60% | 30% | 10% | 10 |
| 幽境重視 | 30% | 60% | 10% | 14 |
| シアター重視 | 30% | 20% | 50% | 28 |

| 代表例 | 基準 | 螺旋重視 | 幽境重視 | シアター重視 |
|---|---|---|---|---|
| サンドローネ | SS | SS | SS | S |
| ヴェスナ | SS | SS | SS | S |
| フリンズ | SS | SS | SS | S |
| ネフェル | SS | SS | SS | A |
| 兹白 | SS | SS | SS | A |
| マーヴィカ | S | SS | SS | S |
| スカーク | S | S | S | A |
| ヌヴィレット | S | S | S | SS |
| ムアラニ | S | S | SS | A |
| ファルカ | A | S | S | A |
| 嘉明 | A | S | S | A |
| チャスカ | A | A | S | S |
| 珊瑚宮心海 | A | A | A | S |

螺旋重視・幽境重視の再集計では、基準のSS5運用は全てSSに残る。ただし、モード点そのものを1軸0.5だけ見直せば、SS/S境界をまたぐ例がある。したがって「上位グループの候補は比較的安定」と「SS5運用の判定が測定で確定した」は別である。

シアターを半分の重みにすると、ヌヴィレットが上がり、専用支援を要求するネフェル・兹白等は下がる。この結果はシアター点に置いた“不完全編成への耐性”を強く反映する。専用支援を2戦とも確保できる公演では、実際の差はこれより小さくなる。

### 敵・操作・投資条件の変更

| 条件 | 上がりやすい候補 | 下がりやすい候補・留保 |
|---|---|---|
| 高HPの単体・短い弱点時間 | ムアラニ、キィニチ、ローエン、リネ、ティナリ等 | 範囲の利益は小さくなる。必要な反応や初動が通るかは別途確認 |
| 分散増援と頻繁な対象変更 | ヌヴィレット、ナヴィア、チャスカ等 | 特定の敵への準備・主砲の打ち切りに依存する型 |
| 密集し集敵が有効 | タルタリヤ、ウェンティ、魈、開花系前衛等 | 吸えない敵に対して同じ伸びは期待しない |
| 操作・通信遅延が大きい | 単純な継続操作、盾付き通常型、瑞希等 | 最適入力のクロリンデ、キィニチ、キャンセル依存型は理論値との差が増え得る |
| 専用支援を1枠欠く | ヌヴィレット等の代替編成が残る候補 | ネフェルのラウマ、スカークのエスコフィエ、星反応の変換役などは下落が大きい |
| ★4が0〜2凸中心 | 無凸★5の自己完結した型が相対上昇 | 嘉明・レザー・ノエル本人、ファルザン・シュヴルーズ・イルーガ等の支援に影響。全員同幅ではない |
| 1凸・モチーフを追加 | ヴェスナ、兹白、ヴァレサ、ファルカ、リオセスリ等に大きな変化の余地 | 伸び方は異なる。無凸表から同じ倍率で外挿できない |
| 今期7.1の補正込み | 星反応と氷主体の編成 | 補正がない時期の総合差とは区別 |
| 全員6凸・高精錬 | 多数のキャラで攻撃列・支援役・耐久が変わる | 本表の対象外。単に数段階ずつ上げて対応できない |

1凸・モチーフ追加の行は方向の予測であり、全員を同じ追加ガチャ予算で再計算した結果ではない。特定キャラを必ず何Tier上げるとまでは断定しない。

### 複数編成では、最強チームをそのまま並べられない

フリンズ、ネフェル、兹白はコロンビーナ等を共有しやすく、サンドローネ、リオセスリ、ヴェスナ、瑞希はオデット等を共有する。単体のTierが高いことと、螺旋2編成・幽境3編成の最適な組み合わせであることは異なる。

例えば、サンドローネ／八重神子／オデット／七七、フリンズ／イネファ／コロンビーナ／スクロース、マーヴィカ／シロネン／シトラリ／ベネットなら、支援の重複を避けて3編成を作れる。これは分配の説明例であり、今期の3ボスをその並びで攻略できると実測した例ではない。実際には各ボスのギミックへ割り当て直す必要がある。

このアカウント全体の最適化を、所持情報なしで各キャラの固定減点にしなかった。その代わり、本表が「同時に最高編成を組める保証」ではないことを明示する。

## 8. 特に重要だった独自の考察

1. **最大DPSより、ダメージを配り直せることが効く場面がある。** 高い一撃が敵の残りHPを大きく超えたり、次ウェーブに攻撃資源を持ち越せなければ、木桩DPSの差が攻略差にならない。ヌヴィレットやナヴィアを持続・短出場の性質込みで評価する理由になる。
2. **耐久の価値は、攻撃継続との因果関係で測る。** 盾は常に同じ加点ではない。中断で最後の主砲が失われる型ほど価値が高く、リオセスリのように回復が出力条件と競合する例もある。
3. **新反応の強さは、従来の支援市場を変える。** 会心・熟知・耐性・専用反応バフの適用先が変わるので、既存の「最強サポーター」を全キャラへ同じ価値で配れない。
4. **旧キャラの評価更新は、本人の強化と新しい控え火力の追加を分ける必要がある。** 瑞希・セノ・リオセスリ・クレー・レザー・ウェンティは、以前の運用と評価構造が変わっている。一方で、強い控え3人を借りているだけかも確認すべきである。
5. **「最新」と「比較可能」は別。** 最新の計算一覧に未実装キャラの事前計算が混ざることがある。更新日だけで正式環境の検証と判断せず、実装版・凸・回し・不具合修正前後を確認する方が重要だった。
6. **シアターを重くするほど、Tierは火力表から編成成立性の表へ近づく。** これは誤りではなく、目的が変わった結果である。ゆえに総合表にはコンテンツの重みを必ず添えるべきだと考える。

## 9. 不確実性・限界と今後の検証

### 確認済みの事実、他者の見解、本稿の推論

- **確認した事実：** 公式の7.1実装、告知保存版の当期補正と修正、参照した天賦・装備・反応の仕様、公開計算に書かれた凸・装備・回し。
- **他者の見解：** ガイドの最適編成・武器比較・相対評価。専門家の見解でも全条件へ一般化しない。
- **本稿の推論：** 全Tier、モード点、コンテンツ比率、実戦上の長短を統合した位置付け、資料を組み合わせた一部の派生編成。
- **未確認・不足：** 全編成を統一条件で再計算したDPS、公開動画の全装備と試行選別、ギミック別の成功率、未取得の計算シートの内部仮定。

特に、得点を固定した重み変更だけでは、元の得点が正しいことは検証できない。採点モデルの内部整合性の点検にすぎず、外部妥当性はゲーム内実測や統一計算で別に確かめる必要がある。

### 優先して追加検証すべきこと

| 優先 | 検証内容 | 判定に必要なデータ |
|---|---|---|
| 1 | SS5運用とマーヴィカ・スカーク・ヌヴィレットの統一比較 | 同じ育成・武器上限、各人の適正編成、初動と90秒、単体・複数・増援のログ |
| 2 | 無凸八重神子と1凸八重神子を分離した星電導比較 | 他3人固定、チャージと回しを維持した差分。単純に表示バフを引くだけにしない |
| 3 | ヴェスナの武器・粒子・爆発頻度 | 敵粒子少なめ、ファルザン有無、毎巡／隔巡の長期エネルギーログ |
| 4 | リオセスリの回復量と強化重撃回数 | 被弾あり／なし、盾型／回復型、HP時系列と中断・失敗回数 |
| 5 | 最新支援下の旧キャラ・派生型 | C0ニコ・ドゥリン・ラウマ・リンネア等を用いた同条件比較 |
| 6 | シアターの現実的な不完全編成 | 反応役や支援役が欠ける場合の複数デッキ・複数試行。架空の出現確率を置かない |
| 7 | 氷主人公の取得上限と恒常強化の一次確認 | 7.1ゲーム内の実取得状態、任務・神像報酬、武器精錬の記録 |

ゲーム内試験を行うなら、条件を固定したうえで成功した1回だけを選ばず、同じ部屋で複数回のクリア時間、失敗、被弾、中断、エネルギー不足を記録する。中央値と悪い試行側の時間を分け、装備画面と回しを公開する。これは今後の検証設計であり、本稿で実施済みとの主張ではない。

## 付録A. 採点一覧

小数点以下は加重平均の計算結果であり、実測精度を表していない。同Tier内の優劣や境界の僅差は確定しない。

| 対象 | 区分 | 螺旋 | 幽境 | シアター | 総合コード | Tier | 確度 |
|---|---|---:|---:|---:|---:|---|---|
| サンドローネ | 主 | 5.0 | 5.0 | 3.0 | 4.600 | SS | 中 |
| ヴェスナ | 主 | 5.0 | 4.5 | 3.5 | 4.525 | SS | 中 |
| フリンズ | 主 | 4.5 | 5.0 | 3.5 | 4.475 | SS | 中 |
| ネフェル | 主 | 5.0 | 5.0 | 2.0 | 4.400 | SS | 中 |
| 兹白 | 主 | 5.0 | 5.0 | 2.5 | 4.500 | SS | 中 |
| マーヴィカ | 主 | 4.5 | 4.5 | 3.5 | 4.300 | S | 中 |
| スカーク | 主 | 4.5 | 4.5 | 2.5 | 4.100 | S | 中 |
| ヌヴィレット | 主 | 4.5 | 3.5 | 5.0 | 4.250 | S | 高 |
| アルレッキーノ | 主 | 4.5 | 4.0 | 4.0 | 4.225 | S | 高 |
| ムアラニ | 主 | 4.0 | 5.0 | 3.0 | 4.150 | S | 中 |
| ヴァレサ | 主 | 4.5 | 4.0 | 3.5 | 4.125 | S | 中 |
| リオセスリ | 主 | 4.0 | 4.5 | 3.0 | 3.975 | S | 中 |
| 夢見月瑞希 | 主 | 4.5 | 4.0 | 3.0 | 4.025 | S | 中 |
| キィニチ | 主 | 4.0 | 4.5 | 3.0 | 3.975 | S | 中 |
| ナヴィア | 主 | 4.0 | 3.5 | 4.0 | 3.825 | S | 中 |
| クレー | 主 | 4.0 | 4.0 | 3.0 | 3.800 | S | 中 |
| ファルカ | 主 | 4.0 | 4.0 | 2.5 | 3.700 | A | 中 |
| コロンビーナ | 主 | 4.0 | 4.0 | 2.5 | 3.700 | A | 中 |
| ローエン | 主 | 3.5 | 4.0 | 2.5 | 3.475 | A | 中 |
| 嘉明 | 主 | 4.0 | 4.0 | 2.5 | 3.700 | A | 中 |
| アルハイゼン | 主 | 3.5 | 3.5 | 3.5 | 3.500 | A | 中 |
| クロリンデ | 主 | 4.0 | 3.5 | 3.5 | 3.725 | A | 中 |
| セノ | 主 | 3.5 | 4.0 | 2.5 | 3.475 | A | 中 |
| 胡桃 | 主 | 3.5 | 4.0 | 3.0 | 3.575 | A | 中 |
| 魈 | 主 | 3.5 | 3.5 | 2.5 | 3.300 | A | 中 |
| 雷電将軍 | 主 | 3.5 | 3.5 | 3.0 | 3.400 | A | 中 |
| レザー | 主 | 3.5 | 3.5 | 2.5 | 3.300 | A | 中 |
| ティナリ | 主 | 3.5 | 3.5 | 3.0 | 3.400 | A | 中 |
| チャスカ | 主 | 3.5 | 4.0 | 4.0 | 3.775 | A | 中 |
| リネ | 主 | 3.5 | 4.0 | 2.5 | 3.475 | A | 中 |
| 神里綾華 | 主 | 3.5 | 3.5 | 2.5 | 3.300 | A | 中 |
| 神里綾人 | 主 | 3.5 | 3.0 | 4.0 | 3.425 | A | 中 |
| タルタリヤ | 主 | 3.5 | 3.0 | 3.0 | 3.225 | A | 中 |
| ディルック | 主 | 3.5 | 3.5 | 2.5 | 3.300 | A | 中 |
| 刻晴 | 主 | 3.5 | 3.0 | 3.5 | 3.325 | A | 中 |
| 荒瀧一斗 | 主 | 3.5 | 3.5 | 2.5 | 3.300 | A | 中 |
| ウェンティ | 主 | 3.5 | 3.0 | 4.0 | 3.425 | A | 中 |
| 放浪者 | 主 | 3.5 | 3.0 | 3.5 | 3.325 | A | 中 |
| 甘雨 | 主 | 3.5 | 3.0 | 3.0 | 3.225 | A | 中 |
| 宵宮 | 主 | 3.0 | 3.5 | 3.5 | 3.275 | A | 中 |
| ノエル | 主 | 3.5 | 3.0 | 4.0 | 3.425 | A | 中 |
| セトス | 主 | 3.0 | 3.0 | 3.5 | 3.100 | B | 中 |
| 主人公・氷 | 主 | 3.5 | 4.0 | 3.0 | 3.575 | A | 中 |
| 煙緋 | 主 | 2.5 | 2.5 | 3.5 | 2.700 | B | 中 |
| 凝光 | 主 | 3.0 | 3.0 | 3.0 | 3.000 | B | 低 |
| 鹿野院平蔵 | 主 | 3.0 | 3.0 | 3.5 | 3.100 | B | 中 |
| カーヴェ | 主 | 2.5 | 2.5 | 3.0 | 2.600 | B | 中 |
| エウルア | 主 | 2.5 | 2.5 | 2.0 | 2.400 | C | 中 |
| フレミネ | 主 | 2.5 | 3.0 | 2.5 | 2.675 | B | 中 |
| ディシア | 主 | 2.0 | 2.0 | 2.5 | 2.100 | C | 中 |
| 辛炎 | 主 | 1.5 | 1.5 | 2.0 | 1.600 | D | 低 |
| アンバー | 主 | 1.5 | 2.0 | 2.0 | 1.775 | D | 低 |
| アーロイ | 主 | 2.0 | 2.0 | 2.0 | 2.000 | C | 低 |
| ナヒーダ | 派生 | 3.5 | 3.5 | 4.0 | 3.600 | A | 中 |
| スクロース | 派生 | 4.0 | 4.0 | 3.5 | 3.900 | S | 中 |
| 珊瑚宮心海 | 派生 | 3.5 | 3.0 | 4.5 | 3.525 | A | 中 |
| イファ | 派生 | 3.5 | 3.5 | 4.0 | 3.600 | A | 中 |
| モナ | 派生 | 3.0 | 3.0 | 3.0 | 3.000 | B | 中 |
| バーバラ | 派生 | 2.5 | 2.5 | 3.5 | 2.700 | B | 中 |
| リサ | 派生 | 3.0 | 3.0 | 3.0 | 3.000 | B | 中 |
| 八重神子 | 派生 | 3.5 | 3.5 | 3.5 | 3.500 | A | 中 |
| リネット | 派生 | 3.0 | 3.0 | 3.0 | 3.000 | B | 低 |
| ドリー | 派生 | 2.5 | 2.5 | 3.0 | 2.600 | B | 低 |
| 主人公・炎 | 派生 | 2.5 | 2.5 | 3.0 | 2.600 | B | 低 |
| 主人公・岩 | 派生 | 2.5 | 2.5 | 3.0 | 2.600 | B | 低 |
| ドゥリン | 派生 | 3.5 | 3.5 | 3.0 | 3.400 | A | 中 |
| ラウマ | 派生 | 3.5 | 3.5 | 3.0 | 3.400 | A | 中 |
| リンネア | 派生 | 3.5 | 3.5 | 3.0 | 3.400 | A | 低 |
| キャンディス | 派生 | 2.5 | 2.5 | 3.0 | 2.600 | B | 低 |
| シロネン | 派生 | 2.5 | 2.5 | 2.0 | 2.400 | C | 低 |
| ガイア | 派生 | 3.0 | 2.5 | 3.0 | 2.825 | B | 低 |
| ロサリア | 派生 | 3.0 | 3.0 | 2.5 | 2.900 | B | 低 |
| 重雲 | 派生 | 2.5 | 2.5 | 2.5 | 2.500 | C | 低 |
| フィッシュル | 派生 | 3.0 | 2.5 | 3.0 | 2.825 | B | 低 |
| 鍾離 | 派生 | 3.0 | 2.5 | 3.5 | 2.925 | B | 低 |
| ベネット | 派生 | 3.0 | 2.5 | 2.5 | 2.725 | B | 低 |
| 閑雲 | 派生 | 3.0 | 3.0 | 3.5 | 3.100 | B | 低 |

## 付録B. 全プレイアブルの役割確認と対象外の扱い

KQM TCLの実装済み一覧［下記URL］は主人公7元素を別項目とした127項目。本表はそのうち77運用を採点し、残り50項目（46キャラ＋主人公の他4元素）はNRとした。したがってキャラ一覧の見落としと、評価対象外の判断を区別している。

[KQM TCL Characters](https://library.keqingmains.com/characters)

NRはDより下という意味ではない。主な役割が控え火力・支援・耐久である、基準の無凸では専用前衛モードが解放されない、または本調査で前衛として継続使用する利益の検証が不足する、という範囲上の判断である。全キャラへ外部付与・物理通常を持たせる全派生までは対象にしていない。

| 主な役割で整理したNR対象 | この表での扱い |
|---|---|
| アルベド、北斗、エミリエ、エスコフィエ、オデット、オロルン、香菱、行秋、夜蘭、千織、イネファ | 主に控え火力。無凸前衛の個別評価はNR。千織等の高凸前衛化も基準外 |
| アイノ、アリョーシャ、シュヴルーズ、シトラリ、ファルザン、フリーナ、ゴロー、イアンサ、イルーガ、楓原万葉、九条裟羅、ニコ、ニィロウ、プルーネ、申鶴、雲菫 | 主に付着・バフ・反応変換・条件成立。支援としての強さは味方の評価に反映し、前衛Tierを付けない |
| 白朮、シャルロット、ダリア、ディオナ、ジン、綺良々、久岐忍、藍硯、レイラ、ミカ、七七、早柚、シグウィン、ヴォジャニーツァ、ヨォーヨ、トーマ | 主に耐久・付着支援。前衛の特殊型を全部網羅したとはしない |
| カチーナ、コレイ、ヤフォダ | 主に支援・控え。現在の前衛性能を採点する根拠を十分確保できずNR |
| 主人公・風／草／雷／水 | この研究では前衛としての採点をしない。控えの草付着等の価値を低評価と解釈しない |

ニィロウはチームの主な反応ダメージを成立させる核心だが、通常の短いスキル使用だけでは本表の前衛枠を占めない。ニィロウ開花編成の強さは、心海・ナヒーダ・ラウマ・カーヴェ等を前衛に置いた評価に含める。氷主人公と異なり他の主人公をすべて一つの順位へ合算することもしない。

## 付録C. 個別資料の参照先

本文のC番号は該当キャラの仕様・編成を追跡するためのもの。古いガイドは基礎キットや操作だけに使用し、現行の最適性は新しい支援側・反応側の資料と組み合わせて判断した。本文を取得できた範囲は資料によって異なる。

| ID | 資料 |
|---|---|
| C01 | [Sandrone Quick Guide - KQM](https://keqingmains.com/q/sandrone-quickguide/) |
| C02 | [Stellar Conduct Reaction Guide - Genshin Impact](https://mobalytics.gg/genshin-impact/guides/stellar-conduct) |
| C03 | [桑多涅 / 攻略](https://wiki.biligame.com/ys/%E6%A1%91%E5%A4%9A%E6%B6%85/%E6%94%BB%E7%95%A5) |
| C04 | [Vesna Build Guide - Weapons, Artifacts, & More - Genshin](https://mobalytics.gg/genshin-impact/characters/vesna-build-guide) |
| C05 | [〖V7.1〗详谈薇斯纳的玩法、配队、抽取建议（平民玩家视角） - 原神7.1版本攻略征集 - TapTap 原神论坛](https://www.taptap.cn/moment/851859733571699624) |
| C06 | [『原神』Ver.7.1アップデートを本日9月23日に実施。新★5「ヴェスナ」（CV:平野綾）、「ヴォジャニーツァ」（CV:伊藤かな恵）が登場！6周年記念の特典も盛りだくさん！ | 株式会社COGNOSPHEREのプレスリリース](https://prtimes.jp/main/html/rd/p/000000449.000096124.html) |
| C07 | [薇斯纳 / 攻略](https://wiki.biligame.com/ys/%E8%96%87%E6%96%AF%E7%BA%B3/%E6%94%BB%E7%95%A5) |
| C08 | [Flins Quick Guide - KQM](https://keqingmains.com/q/flins-quickguide/) |
| C09 | [Columbina Quick Guide - KQM](https://keqingmains.com/q/columbina-quickguide/) |
| C10 | [Nefer Quick Guide - KQM](https://keqingmains.com/q/nefer-quickguide/) |
| C11 | [Lauma Quick Guide - KQM](https://keqingmains.com/q/lauma-quickguide/) |
| C12 | [奈芙尔 / 攻略](https://wiki.biligame.com/ys/%E5%A5%88%E8%8A%99%E5%B0%94/%E6%94%BB%E7%95%A5) |
| C13 | [Zibai Quick Guide - KQM](https://keqingmains.com/q/zibai-quickguide/) |
| C14 | [Linnea Quick Guide - KQM](https://keqingmains.com/q/linnea-quickguide/) |
| C15 | [Mavuika Quick Guide - KQM](https://keqingmains.com/q/mavuika-quickguide/) |
| C16 | [DPSLeaders](https://dpsleaders.augmeneco.ru/?page=0) |
| C17 | [Skirk Quick Guide - KQM](https://keqingmains.com/q/skirk-quickguide/) |
| C18 | [Vodyanitsa Quick Guide - KQM](https://keqingmains.com/q/vodyanitsa-quickguide/) |
| C19 | [Neuvillette Quick Guide - KQM](https://keqingmains.com/q/neuvillette-quickguide/) |
| C20 | [Arlecchino Quick Guide - KQM](https://keqingmains.com/q/arlecchino-quickguide/) |
| C21 | [Mualani Quick Guide - KQM](https://keqingmains.com/q/mualani-quickguide/) |
| C22 | [Varesa Quick Guide - KQM](https://keqingmains.com/q/varesa-quickguide/) |
| C23 | [Wriothesley Quick Guide - KQM](https://keqingmains.com/q/wriothesley-quickguide/) |
| C24 | [Mizuki Quick Guide - KQM](https://keqingmains.com/q/mizuki-quickguide/) |
| C25 | [Stellar Swirl Reaction Guide - Genshin Impact](https://mobalytics.gg/genshin-impact/guides/stellar-swirl) |
| C26 | [Kinich Quick Guide - KQM](https://keqingmains.com/q/kinich-quickguide/) |
| C27 | [Nicole Quick Guide - KQM](https://keqingmains.com/q/nicole-quickguide/) |
| C28 | [Navia Guide: The Soaring Yellow Rose - KQM](https://keqingmains.com/navia/) |
| C29 | [Klee Quick Guide - KQM](https://keqingmains.com/q/klee-quickguide/) |
| C30 | [Varka Quick Guide - KQM](https://keqingmains.com/q/varka-quickguide/) |
| C31 | [Lohen Quick Guide - KQM](https://keqingmains.com/q/lohen-quickguide/) |
| C32 | [Gaming Quick Guide - KQM](https://keqingmains.com/q/gaming-quickguide/) |
| C33 | [Alhaitham Quick Guide - KQM](https://keqingmains.com/q/alhaitham-quickguide/) |
| C34 | [Lightkeepers](https://lightkeepers.moe/teams/configs/Alhaitham~C0~IronSting~R5__Furina~C0~FavoniusSword~R5__KukiShinobu~C6~IronSting~R1__Lauma~C0~FavoniusCodex~R5) |
| C35 | [Clorinde Quick Guide - KQM](https://keqingmains.com/q/clorinde-quickguide/) |
| C36 | [Cyno | KQM TCL](https://library.keqingmains.com/cyno/) |
| C37 | [Cyno Build Guide - Weapons, Artifacts, & More - Genshin](https://mobalytics.gg/genshin-impact/characters/cyno-build-guide) |
| C38 | [Hu Tao Guide: Butterfly's Embrace - KQM](https://keqingmains.com/hu-tao/) |
| C39 | [Hu Tao Quick Guide - KQM](https://keqingmains.com/q/hu-tao-quickguide/) |
| C40 | [Xiao Quick Guide - KQM](https://keqingmains.com/q/xiao-quickguide/) |
| C41 | [Raiden Shogun Quick Guide - KQM](https://keqingmains.com/q/raiden-quickguide/) |
| C42 | [Razor Build Guide - Weapons, Artifacts, & More - Genshin](https://mobalytics.gg/genshin-impact/characters/razor-build-guide) |
| C43 | [Tighnari Quick Guide - KQM](https://keqingmains.com/q/tighnari-quickguide/) |
| C44 | [Tighnari: Verdant Strider - KQM](https://keqingmains.com/tighnari/) |
| C45 | [Chasca Quick Guide - KQM](https://keqingmains.com/q/chasca-quickguide/) |
| C46 | [Lyney Quick Guide - KQM](https://keqingmains.com/q/lyney-quickguide/) |
| C47 | [Ayaka Quick Guide - KQM](https://keqingmains.com/q/ayaka-quickguide/) |
| C48 | [Ayato Quick Guide - KQM](https://keqingmains.com/q/ayato-quickguide/) |
| C49 | [Tartaglia Quick Guide - KQM](https://keqingmains.com/q/tartaglia-quickguide/) |
| C50 | [Diluc Quick Guide - KQM](https://keqingmains.com/q/diluc-quickguide/) |
| C51 | [Xianyun Quick Guide - KQM](https://keqingmains.com/q/xianyun-quickguide/) |
| C52 | [Keqing Guide | Endless Starlight - KQM](https://keqingmains.com/keqing/) |
| C53 | [Itto Quick Guide - KQM](https://keqingmains.com/q/itto-quickguide/) |
| C54 | [Venti Quick Guide - KQM](https://keqingmains.com/q/venti-quickguide/) |
| C55 | [Wanderer Quick Guide - KQM](https://keqingmains.com/q/wanderer-quickguide/) |
| C56 | [Ganyu Quick Guide - KQM](https://keqingmains.com/q/ganyu-quickguide/) |
| C57 | [Yoimiya Quick Guide - KQM](https://keqingmains.com/q/yoimiya-quickguide/) |
| C58 | [Noelle Quick Guide - KQM](https://keqingmains.com/q/noelle-quickguide/) |
| C59 | [Sethos Quick Guide - KQM](https://keqingmains.com/q/sethos-quickguide/) |
| C60 | [Traveler (Cryo) | KQM TCL](https://library.keqingmains.com/characters/cryo/traveler/) |
| C61 | [主人公/氷 - 原神 Wiki*](https://wikiwiki.jp/genshinwiki/%E4%B8%BB%E4%BA%BA%E5%85%AC/%E6%B0%B7) |
| C62 | [片手剣/星鋒の剣 - genshinwiki](https://wikiwiki.jp/genshinwiki/%E7%89%87%E6%89%8B%E5%89%A3/%E6%98%9F%E9%8B%92%E3%81%AE%E5%89%A3) |
| C63 | [Yanfei Quick Guide - KQM](https://keqingmains.com/q/yanfei-quickguide/) |
| C64 | [Ningguang Quick Guide - KQM](https://keqingmains.com/q/ningguang-quickguide/) |
| C65 | [Heizou Quick Guide - KQM](https://keqingmains.com/q/heizou-quickguide/) |
| C66 | [Kaveh Quick Guide - KQM](https://keqingmains.com/q/kaveh-quickguide/) |
| C67 | [Eula Quick Guide - KQM](https://keqingmains.com/q/eula-quickguide/) |
| C68 | [Freminet Quick Guide - KQM](https://keqingmains.com/q/freminet-quickguide/) |
| C69 | [Dehya Quick Guide - KQM](https://keqingmains.com/q/dehya-quickguide/) |
| C70 | [Xinyan Guide: Save Rock 'n' Roll - KQM](https://keqingmains.com/xinyan/) |
| C71 | [Amber Quick Guide - KQM](https://keqingmains.com/q/amber-quickguide/) |
| C72 | [Aloy Quick Guide - KQM](https://keqingmains.com/q/aloy-quickguide/) |
| C73 | [Nahida Quick Guide - KQM](https://keqingmains.com/q/nahida-quickguide/) |
| C74 | [Sucrose Quick Guide - KQM](https://keqingmains.com/q/sucrose-quickguide/) |
| C75 | [Kokomi Quick Guide - KQM](https://keqingmains.com/q/kokomi-quickguide/) |
| C76 | [Ifa Quick Guide - KQM](https://keqingmains.com/q/ifa-quickguide/) |
| C77 | [Mona Quick Guide - KQM](https://keqingmains.com/q/mona-quickguide/) |
| C78 | [Barbara Quick Guide - KQM](https://keqingmains.com/q/barbara-quickguide/) |
| C79 | [Lisa Quick Guide - KQM](https://keqingmains.com/q/lisa-quickguide/) |
| C80 | [Yae Miko Quick Guide - KQM](https://keqingmains.com/q/yae-quickguide/) |
| C81 | [Lynette Quick Guide - KQM](https://keqingmains.com/q/lynette-quickguide/) |
| C82 | [Dori Quick Guide - KQM](https://keqingmains.com/q/dori-quickguide/) |
| C83 | [Pyro Traveler Quick Guide - KQM](https://keqingmains.com/q/pyro-traveler-quickguide/) |
| C84 | [Geo Traveler Guide: Meteorite Impact - KQM](https://keqingmains.com/geo-traveler/) |
| C85 | [Durin Quick Guide - KQM](https://keqingmains.com/q/durin-quickguide/) |
| C86 | [Candace Quick Guide - KQM](https://keqingmains.com/q/candace-quickguide/) |
| C87 | [Xilonen Quick Guide - KQM](https://keqingmains.com/q/xilonen-quickguide/) |
| C88 | [Kaeya Quick Guide - KQM](https://keqingmains.com/q/kaeya-quickguide/) |
| C89 | [Rosaria Quick Guide - KQM](https://keqingmains.com/q/rosaria-quickguide/) |
| C90 | [Chongyun Quick Guide - KQM](https://keqingmains.com/q/chongyun-quickguide/) |
| C91 | [Fischl Quick Guide - KQM](https://keqingmains.com/q/fischl-quickguide/) |
| C92 | [Zhongli Quick Guide - KQM](https://keqingmains.com/q/zhongli-quickguide/) |
| C93 | [Bennett Quick Guide - KQM](https://keqingmains.com/q/bennett-quickguide/) |

---

本稿の結論は、期間補正を除き、育成・凸・編成を明示した場合の独自総合評価である。更新時には、上位の評判だけを差し替えるのではなく、反応仕様・支援の凸・実行可能な回し・敵条件から再点検する。

`,N=["SS","S","A","B","C","D"],y=[{name:"基準",weights:[45,35,20]},{name:"螺旋重視",weights:[60,30,10]},{name:"幽境重視",weights:[30,60,10]},{name:"シアター重視",weights:[30,20,50]}];function R(t,r){return Math.round(t.reduce((o,C,a)=>o+C*r[a]/100,0)*1e3)/1e3}function P(t){return t>=4.4?"SS":t>=3.8?"S":t>=3.2?"A":t>=2.6?"B":t>=2?"C":"D"}const j=["螺旋","幽境","シアター"],nn=["完成編成で最上位候補","極めて強い総合戦力","高難度で十分強い","条件選択・運用上の工夫が増える","攻略余裕を作るうえで大きな代償","標準条件では特殊運用向け"],I=[["overview","概要"],["explore","Tier探索"],["compare","比較"],["method","評価条件"],["research","論点と限界"],["library","資料室"]];function L({text:t}){const r=t.replace(/個別ヴェスナ資料/g,"[個別ヴェスナ資料（参照先未解決）](#source/individual-vesna)").replace(/\[([GC]\d{2})\](?!\()/g,"[$1](#source/$1)").replace(/［([^］]+)］/g,(o,C)=>"［"+C.replace(/\b([GC]\d{2})\b/g,"[$1](#source/$1)")+"］");return n.jsx("div",{className:"prose",children:n.jsx(z,{remarkPlugins:[Y],components:{table:({children:o})=>n.jsx("div",{className:"table-scroll",children:n.jsx("table",{children:o})})},children:r})})}function F({entry:t}){return n.jsxs("div",{className:"bars",children:[t.scores.map((r,o)=>n.jsxs("div",{className:"bar-row",children:[n.jsx("span",{children:j[o]}),n.jsx("div",{className:"track",children:n.jsx("i",{style:{width:`${r/5*100}%`}})}),n.jsxs("b",{children:[r,n.jsx("small",{children:" / 5"})]})]},o)),n.jsx("div",{className:"axis",children:"共通軸 0 ───────────── 5"})]})}function en(){const[t,r]=h.useState(location.hash.slice(1)||"overview"),[o,C]=h.useState(""),[a,d]=h.useState(""),[p,E]=h.useState(""),[G,H]=h.useState(""),[A,T]=h.useState(""),[c,f]=h.useState([]),[q,V]=h.useState(0),[x,S]=h.useState(""),[K,W]=h.useState("");h.useEffect(()=>{const e=()=>{r(location.hash.slice(1)||"overview"),window.scrollTo(0,0)};return window.addEventListener("hashchange",e),()=>window.removeEventListener("hashchange",e)},[]),h.useEffect(()=>{document.title=`${I.find(e=>e[0]===t)?.[1]||"資料詳細"} | 原神 メインDPS研究アトラス`,document.getElementById("main")?.focus()},[t]);const b=e=>{c.includes(e.id)?(f(c.filter(i=>i!==e.id)),S(`${e.name}を比較から解除しました`)):c.length<3?(f([...c,e.id]),S(`${e.name}を比較に追加しました`)):S("比較は最大3運用です。選択中の運用を解除してください。")},w=e=>n.jsx("button",{className:`compare-btn ${c.includes(e.id)?"selected":""}`,"aria-pressed":c.includes(e.id),onClick:()=>b(e),"aria-label":`${e.name}を比較${c.includes(e.id)?"から解除":"に追加"}`,children:c.includes(e.id)?"✓ 選択中":"＋ 比較"}),D=()=>{C(""),d(""),E(""),H(""),T("")},M=u.entries.filter(e=>(!o||e.name.normalize("NFKC").toLowerCase().includes(o.trim().normalize("NFKC").toLowerCase()))&&(!a||e.element.includes(a))&&(!p||e.category===p)&&(!G||e.confidence===G)&&(!A||e.tier===A)),s=u.entries.find(e=>t===`operation/${e.id}`),k=u.sources.find(e=>t===`source/${e.id}`),v=e=>u.sections.find(i=>i.title.startsWith(e)),Q=e=>{const i=v(e);return n.jsxs("article",{className:"chapter",children:[n.jsx("h2",{children:i.title}),n.jsx(L,{text:i.body})]},i.id)};function g(e,i,l){return n.jsxs("div",{className:"page-heading",children:[n.jsxs("span",{className:"eyebrow",children:["RESEARCH ATLAS / ",e]}),n.jsx("h1",{children:i}),n.jsx("p",{children:l})]})}return n.jsxs(n.Fragment,{children:[n.jsx("a",{className:"skip",href:"#main",onClick:e=>{e.preventDefault(),document.getElementById("main")?.focus()},children:"本文へ移動"}),n.jsxs("header",{children:[n.jsxs("a",{className:"brand",href:"#overview",children:[n.jsx("span",{className:"brand-star",children:"✧"}),n.jsxs("span",{children:["原神 ",n.jsx("b",{children:"研究アトラス"}),n.jsx("small",{children:"MAIN DPS · RESEARCH INDEX"})]})]}),n.jsxs("span",{className:"edition",children:["文献調査版 ",n.jsx("b",{children:"VER. 7.1"})]})]}),n.jsx("nav",{"aria-label":"メインナビゲーション",children:I.map(([e,i],l)=>n.jsxs("a",{href:`#${e}`,"aria-current":t===e?"page":void 0,children:[n.jsxs("small",{children:["0",l+1]}),i,e==="compare"&&c.length>0&&n.jsx("em",{children:c.length})]},e))}),n.jsxs("main",{id:"main",tabIndex:-1,children:[t==="overview"&&n.jsxs(n.Fragment,{children:[n.jsxs("section",{className:"hero",children:[n.jsxs("div",{className:"hero-copy",children:[n.jsx("span",{className:"eyebrow",children:"GENSHIN IMPACT / INDEPENDENT RESEARCH"}),n.jsxs("h1",{children:["強さの、その先にある",n.jsx("br",{}),n.jsx("span",{children:"条件を読む。"})]}),n.jsx("p",{children:"原神 メインDPS総合Tier研究"}),n.jsxs("div",{className:"hero-sub",children:["77の運用を、攻略余裕・編成・実行条件から比較する。",n.jsx("br",{}),"順位だけでは見えない強みと留保を、根拠とともに。"]}),n.jsxs("a",{className:"primary",href:"#explore",children:["Tierを探索する ",n.jsx("span",{children:"↗"})]}),n.jsx("a",{className:"text-link",href:"#method",children:"評価の前提を読む →"})]}),n.jsxs("div",{className:"atlas-visual","aria-hidden":"true",children:[n.jsx("div",{className:"orbit orbit-one"}),n.jsx("div",{className:"orbit orbit-two"}),n.jsx("div",{className:"orbit orbit-three"}),n.jsx("div",{className:"visual-cross"}),n.jsx("span",{className:"star s1",children:"✧"}),n.jsx("span",{className:"star s2",children:"✦"}),n.jsx("span",{className:"star s3",children:"✧"}),n.jsxs("div",{className:"visual-center",children:["✧",n.jsxs("small",{children:["THE CONDITIONS",n.jsx("br",{}),"BEHIND THE TIER"]})]}),n.jsx("span",{className:"coordinate",children:"45° ABYSS / 35° STYGIAN / 20° THEATER"})]}),n.jsxs("div",{className:"hero-bottom",children:[n.jsxs("span",{children:["調査基準日 ",n.jsx("b",{children:"2026.10.28 / JST"})]}),n.jsxs("span",{children:["対象バージョン ",n.jsx("b",{children:"Ver.7.1"})]}),n.jsx("span",{children:"独自の文献調査 · 非公式"})]})]}),n.jsxs("section",{className:"intro-grid",children:[n.jsxs("div",{children:[n.jsx("span",{className:"eyebrow",children:"SCOPE OF RESEARCH"}),n.jsxs("h2",{children:["ひとつの順位より、",n.jsx("br",{}),"選べる判断材料を。"]})]}),n.jsxs("div",{children:[n.jsx("p",{children:"評価対象は、その前衛を中心にした完成編成の攻略戦力。入手・育成の優先度や、支援役としての総合的な価値を示す表ではありません。"}),n.jsxs("div",{className:"metrics",children:[n.jsxs("span",{children:[n.jsx("b",{children:"77"}),"評価運用"]}),n.jsxs("span",{children:[n.jsxs("b",{children:["53",n.jsx("small",{children:" + "}),"24"]}),"主対象 / 派生"]}),n.jsxs("span",{children:[n.jsx("b",{children:"3"}),"攻略モード"]})]})]})]}),n.jsxs("section",{children:[n.jsxs("div",{className:"section-top",children:[n.jsxs("div",{children:[n.jsx("span",{className:"eyebrow",children:"THE TOP GROUP"}),n.jsx("h2",{children:"最上位の5運用"})]}),n.jsx("span",{className:"muted",children:"同Tier内に順位は付けません"})]}),n.jsx("div",{className:"top-grid",children:u.entries.slice(0,5).map(e=>n.jsxs("a",{className:"top-card",href:`#operation/${e.id}`,children:[n.jsxs("span",{className:"tiny",children:[e.element," / ",e.role]}),n.jsx("span",{className:"top-symbol","aria-hidden":"true",children:"✧"}),n.jsx("h3",{children:e.name}),n.jsx("span",{className:"tier gold",children:"SS"}),n.jsx("span",{className:"card-arrow",children:"↗"})]},e.id))}),n.jsxs("div",{className:"notice",children:[n.jsx("b",{children:"結論の読み方"}),n.jsx("p",{children:"SSとSの境界は確定的な性能差ではありません。マーヴィカはSS/S境界、ヌヴィレットはシアター重視でSSへ。無凸・非モチーフ条件での直接比較は不足しています。"})]})]}),n.jsxs("section",{className:"reading-grid",children:[n.jsxs("a",{href:"#method",children:[n.jsx("span",{children:"01 / ASSUMPTIONS"}),n.jsx("h3",{children:"どんな条件で比べたか"}),n.jsx("p",{children:"★5無凸・★4完凸、武器上限と生存手段。"}),"前提を確認 →"]}),n.jsxs("a",{href:"#research",children:[n.jsx("span",{children:"02 / DISCUSSION"}),n.jsx("h3",{children:"評価を変えた8つの論点"}),n.jsx("p",{children:"期間補正、味方の凸、反応と支援の相互作用。"}),"考察を読む →"]}),n.jsxs("a",{href:"#library",children:[n.jsx("span",{children:"03 / EVIDENCE"}),n.jsx("h3",{children:"根拠と、その限界まで"}),n.jsx("p",{children:"原資料の参照先と採用範囲、未確認事項。"}),"資料室へ →"]})]}),n.jsx("p",{className:"footnote",children:"ゲーム内での一斉実測・全編成の再シミュレーション・統計的勝率推定は行っていません。Tier・モード点は原資料筆者の判断です。"})]}),t==="explore"&&n.jsxs(n.Fragment,{children:[g("02","Tier探索","完成編成での攻略戦力を、77の運用から探す。原資料のTier・掲載順を保持しています。"),n.jsxs("div",{className:"filter-panel",children:[n.jsxs("label",{className:"search-label",children:["名前を検索",n.jsx("input",{type:"search",placeholder:"例：ヌヴィレット、主人公",value:o,onChange:e=>C(e.target.value)})]}),n.jsxs("label",{children:["元素",n.jsxs("select",{"aria-label":"元素",value:a,onChange:e=>d(e.target.value),children:[n.jsx("option",{value:"",children:"すべての元素"}),["炎","水","風","雷","草","氷","岩","物理"].map(e=>n.jsx("option",{children:e},e))]})]}),n.jsxs("label",{children:["区分",n.jsxs("select",{"aria-label":"区分",value:p,onChange:e=>E(e.target.value),children:[n.jsx("option",{value:"",children:"すべての区分"}),n.jsx("option",{value:"主",children:"主対象"}),n.jsx("option",{value:"派生",children:"派生・ドライバー"})]})]}),n.jsxs("label",{children:["確度",n.jsxs("select",{"aria-label":"確度",value:G,onChange:e=>H(e.target.value),children:[n.jsx("option",{value:"",children:"すべての確度"}),["高","中","低"].map(e=>n.jsx("option",{children:e},e))]})]}),n.jsx("button",{className:"reset",onClick:D,children:"条件をリセット ↺"})]}),n.jsx("div",{className:"tier-tabs","aria-label":"Tier絞り込み",children:["",...N].map(e=>n.jsx("button",{"aria-pressed":A===e,onClick:()=>T(e),children:e||"すべて"},e))}),n.jsxs("div",{className:"results-summary",children:[n.jsxs("span",{"aria-live":"polite",children:[n.jsx("b",{children:M.length})," / 77 運用"]}),n.jsx("span",{children:"確度は評価安定性の自己評価です"})]}),!M.length&&n.jsxs("div",{className:"empty",children:[n.jsx("h2",{children:"条件に合う運用がありません"}),n.jsx("p",{children:"名前や絞り込み条件を変更してください。"}),n.jsx("button",{onClick:D,children:"すべての条件を解除"})]}),N.map((e,i)=>{const l=M.filter(m=>m.tier===e);return l.length>0&&n.jsxs("section",{className:"tier-group",children:[n.jsxs("div",{className:"tier-heading",children:[n.jsx("b",{children:e}),n.jsx("h2",{children:nn[i]}),n.jsxs("span",{children:[l.length," 運用"]})]}),n.jsx("div",{className:"entry-grid",children:l.map(m=>n.jsxs("article",{className:"entry-card",children:[n.jsxs("div",{className:"entry-meta",children:[n.jsx("span",{className:`element el-${m.element[0]}`,children:m.element}),n.jsxs("span",{children:[m.category==="主"?"主対象":"派生"," · 確度",m.confidence]})]}),n.jsxs("a",{className:"entry-title",href:`#operation/${m.id}`,children:[n.jsx("h3",{children:m.name}),n.jsx("span",{children:"↗"})]}),n.jsx("p",{children:m.judgment}),n.jsxs("div",{className:"entry-bottom",children:[n.jsx("span",{children:m.scores.map((_,B)=>n.jsxs("span",{title:j[B],children:[j[B]," ",n.jsx("b",{children:_})," "]},B))}),w(m)]})]},m.id))})]},e)}),n.jsxs("div",{className:"notice",children:[n.jsx("b",{children:"低Tierは攻略不能を意味しません"}),n.jsx("p",{children:"前衛型の評価であり、支援運用の価値を否定するものではありません。H＝継続攻撃、Q＝短出場、D＝反応・付着を動かす前衛。"})]})]}),s&&n.jsxs(n.Fragment,{children:[g("OPERATION",s.name,`${s.element} / ${s.role} / ${s.category==="主"?"主対象":"派生・ドライバー"} / 確度${s.confidence}`),n.jsx("a",{className:"back",href:"#explore",children:"← Tier探索に戻る"}),n.jsxs("div",{className:"detail-layout",children:[n.jsxs("article",{className:"detail-content",children:[n.jsx("span",{className:"large-tier",children:s.tier}),n.jsx("h2",{children:"判定"}),n.jsx("p",{className:"lead",children:s.judgment}),n.jsx("h2",{children:"制約・比較上の注意"}),n.jsx("p",{children:s.constraint}),n.jsx("h2",{children:"代表的な味方3枠"}),n.jsx("p",{children:s.team}),n.jsx("p",{className:"muted",children:"最強固定の断定ではありません。複数資料を接続した推論を含み、同一条件の実測編成とは限りません。"}),n.jsx("h2",{children:"仕様・回しの参照先"}),n.jsx("div",{className:"ref-list",children:s.refs.map(e=>n.jsxs("a",{href:`#source/${e}`,children:[e," ↗"]},e))})]}),n.jsxs("aside",{className:"score-panel",children:[n.jsx("span",{className:"eyebrow",children:"MODE PROFILE"}),n.jsx("h2",{children:"3モードの評価"}),n.jsx(F,{entry:s}),n.jsx("p",{className:"muted",children:"0〜5の序数コード。実測DPSではありません。"}),w(s),n.jsxs("details",{children:[n.jsx("summary",{children:"計算監査用の詳細"}),n.jsxs("p",{children:["45% × ",s.scores[0]," ＋ 35% × ",s.scores[1]," ＋ 20% × ",s.scores[2]," ＝ ",s.code.toFixed(3)]}),n.jsx("p",{children:"小数は測定精度や同Tier内の順位を示しません。"})]})]})]})]}),t==="compare"&&n.jsxs(n.Fragment,{children:[g("03","運用を比較する","最大3運用の強みと制約を、同じモード軸で並べる。"),n.jsxs("div",{className:"notice",children:[n.jsxs("b",{children:[c.length," / 3 運用を選択中"]}),n.jsxs("p",{children:["代表編成は支援を共有する場合があります。同時に最高編成を組める保証ではありません。 ",n.jsx("a",{href:"#research",children:"編成共有の注意へ →"})]})]}),c.length===0?n.jsxs("div",{className:"empty",children:[n.jsx("span",{className:"empty-star",children:"✧"}),n.jsx("h2",{children:"比較したい運用を選びましょう"}),n.jsx("p",{children:"Tier探索で「＋ 比較」を押すと、ここに最大3運用が並びます。"}),n.jsx("a",{className:"primary",href:"#explore",children:"Tier探索へ →"})]}):n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"compare-grid",children:c.map(e=>{const i=u.entries.find(l=>l.id===e);return n.jsxs("article",{className:"comparison",children:[n.jsxs("div",{className:"entry-meta",children:[n.jsxs("span",{children:[i.element," / ",i.category==="主"?"主対象":"派生"]}),n.jsx("button",{onClick:()=>b(i),"aria-label":`${i.name}を比較から解除`,children:"解除 ×"})]}),n.jsx("h2",{children:n.jsx("a",{href:`#operation/${i.id}`,children:i.name})}),n.jsxs("span",{className:"tier",children:["原資料 ",i.tier]}),n.jsxs("p",{className:"muted",children:["確度",i.confidence]}),n.jsx(F,{entry:i}),n.jsx("h3",{children:"判定"}),n.jsx("p",{children:i.judgment}),n.jsx("h3",{children:"制約"}),n.jsx("p",{children:i.constraint}),n.jsx("h3",{children:"代表的な味方"}),n.jsx("p",{children:i.team}),n.jsx("div",{className:"ref-list",children:i.refs.map(l=>n.jsx("a",{href:`#source/${l}`,children:l},l))})]},e)})}),n.jsxs("div",{className:"compare-actions",children:[n.jsx("a",{href:"#explore",children:"＋ 探索から追加する"}),n.jsx("button",{onClick:()=>{f([]),S("比較をすべて解除しました")},children:"比較をすべて解除"})]})]})]}),t==="method"&&n.jsxs(n.Fragment,{children:[g("04","評価条件と感度分析","前提をそろえ、重みを変えたときの動きを確かめる。"),n.jsxs("section",{className:"sensitivity",children:[n.jsxs("div",{className:"section-top",children:[n.jsx("h2",{children:"重みを変えると、どう動く？"}),n.jsx("span",{className:"eyebrow",children:"SENSITIVITY ANALYSIS"})]}),n.jsx("p",{children:"同じモード点を固定した算術上の再集計です。そのモードだけの実測Tier表ではありません。"}),n.jsx("div",{className:"preset-tabs",children:y.map((e,i)=>n.jsx("button",{"aria-pressed":i===q,onClick:()=>V(i),children:e.name},e.name))}),n.jsxs("div",{className:"weight-summary",children:[y[q].weights.map((e,i)=>n.jsxs("div",{children:[n.jsx("span",{children:j[i]}),n.jsxs("b",{children:[e,n.jsx("small",{children:"%"})]})]},i)),n.jsxs("div",{className:"changed","aria-live":"polite",children:[n.jsx("span",{children:"基準からTier変動"}),n.jsxs("b",{children:[u.entries.filter(e=>P(R(e.scores,y[q].weights))!==e.tier).length,n.jsx("small",{children:" / 77運用"})]})]})]}),n.jsx("div",{className:"table-scroll sensitivity-table",children:n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"運用"}),n.jsx("th",{children:"原資料Tier"}),n.jsx("th",{children:"再集計Tier"})]})}),n.jsx("tbody",{children:u.entries.map(e=>{const i=P(R(e.scores,y[q].weights));return n.jsxs("tr",{className:i!==e.tier?"is-changed":"",children:[n.jsx("th",{children:n.jsx("a",{href:`#operation/${e.id}`,children:e.name})}),n.jsx("td",{children:e.tier}),n.jsxs("td",{children:[i,i!==e.tier&&n.jsx("span",{className:"change-label",children:" 変動"})]})]},e.id)})})]})}),n.jsx("p",{className:"footnote",children:"元の採点の正しさを検証する分析ではありません。外部妥当性には統一計算やゲーム内実測が必要です。"})]}),Q("3."),Q("4.")]}),t==="research"&&n.jsxs(n.Fragment,{children:[g("05","論点・方法・限界","評価の背景を読む。以下は原資料の章本文を保全して掲載しています。"),n.jsx("div",{className:"contents-links",children:["5.","7.","8.","9.","付録B"].map(e=>n.jsxs("a",{href:`#research-${e}`,onClick:i=>{i.preventDefault(),document.getElementById(`research-${e}`)?.scrollIntoView({behavior:"instant"})},children:[v(e).title," ↓"]},e))}),["5.","7.","8.","9.","付録B"].map(e=>n.jsx("div",{id:`research-${e}`,children:Q(e)},e))]}),t==="library"&&n.jsxs(n.Fragment,{children:[g("06","資料室","出典をたどり、採用範囲と留保を確かめる。"),n.jsxs("div",{className:"notice",children:[n.jsx("b",{children:"外部ページの到達性・本文は今回再確認していません"}),n.jsx("p",{children:"「確認済み」等の記述は原資料の調査記録です。本サイトが独自に検証した事実を意味しません。C資料の個別留保は調査方法・各運用も参照してください。"})]}),n.jsxs("div",{className:"library-actions",children:[n.jsx("a",{className:"primary",href:"#document",children:"原文全文を読む ↗"}),n.jsx("a",{className:"outline",href:"/report_2026-10-28.md",download:!0,children:"Markdownを取得 ↓"})]}),Q("2."),n.jsxs("section",{children:[n.jsxs("h2",{children:["参照先一覧 ",n.jsxs("span",{className:"muted",children:[u.sources.length," 定義"]})]}),n.jsxs("label",{className:"source-search",children:["資料ID・資料名を検索",n.jsx("input",{type:"search",placeholder:"例：G06、KQM",value:K,onChange:e=>W(e.target.value)})]}),n.jsx("div",{className:"source-list",children:u.sources.filter(e=>(e.id+" "+e.title).toLowerCase().includes(K.toLowerCase().trim())).map(e=>n.jsxs("a",{href:`#source/${e.id}`,children:[n.jsx("b",{children:e.id}),n.jsxs("span",{children:[e.title,n.jsx("small",{children:new URL(e.url).hostname})]}),n.jsx("span",{children:"↗"})]},e.id))}),!u.sources.some(e=>(e.id+" "+e.title).toLowerCase().includes(K.toLowerCase().trim()))&&n.jsx("p",{children:"該当する資料がありません。"})]}),n.jsxs("section",{className:"chapter",children:[n.jsx("h2",{children:"原資料との章対応"}),n.jsx(tn,{})]})]}),k&&n.jsxs(n.Fragment,{children:[g(k.id,k.title,"原資料の参照先定義"),n.jsx("a",{className:"back",href:"#library",children:"← 資料室へ"}),n.jsxs("div",{className:"source-detail",children:[n.jsx("h2",{children:"採用範囲・留保"}),n.jsx("p",{children:k.note}),n.jsx("p",{className:"notice",children:"外部ページの到達性・本文は今回再確認していません。原資料の記述をそのまま根拠記録として掲載しています。"}),n.jsxs("a",{href:k.url,className:"external-url",target:"_blank",rel:"noreferrer",children:[k.url," ↗"]}),n.jsx("h2",{children:"この資料を参照する運用"}),n.jsx("div",{className:"ref-list",children:u.entries.filter(e=>e.refs.includes(k.id)).map(e=>n.jsx("a",{href:`#operation/${e.id}`,children:e.name},e.id))}),!u.entries.some(e=>e.refs.includes(k.id))&&n.jsx("p",{children:"調査方法・評価条件・論点の共通資料です。"})]})]}),t.startsWith("source/")&&!k&&n.jsxs(n.Fragment,{children:[g("REFERENCE","参照先未解決",t.split("/")[1]),n.jsx("a",{href:"#library",children:"資料室へ戻る"})]}),t==="document"&&n.jsxs(n.Fragment,{children:[g("ORIGINAL REPORT","原資料全文","source/report_2026-10-28.md · 原文の内容を変更せず表示"),n.jsx("a",{className:"outline",href:"/report_2026-10-28.md",download:!0,children:"Markdownを取得 ↓"}),n.jsx("article",{className:"chapter",children:n.jsx(L,{text:J})})]}),!["overview","explore","compare","method","research","library","document"].includes(t)&&!t.startsWith("source/")&&!s&&n.jsxs(n.Fragment,{children:[g("404","ページが見つかりません","URLをご確認ください。"),n.jsx("a",{href:"#overview",children:"概要へ戻る"})]})]}),n.jsx("div",{className:"sr-only",role:"status",children:x}),c.length>0&&t!=="compare"&&n.jsxs("div",{className:"comparison-dock",children:[n.jsxs("span",{children:[n.jsx("b",{children:c.length})," / 3 運用を選択中"]}),n.jsx("a",{href:"#compare",children:"比較を見る →"}),x.startsWith("比較は最大")&&n.jsx("span",{className:"selection-message",children:x})]}),n.jsxs("footer",{children:[n.jsx("a",{className:"brand",href:"#overview",children:"✧ 原神 研究アトラス"}),n.jsxs("p",{children:["2026.10.28 · Ver.7.1 / 独自の文献調査版・非公式",n.jsx("br",{}),"Tierと採点は原資料筆者の判断。実測精度・入手優先度を示すものではありません。"]}),n.jsx("a",{href:"#library",children:"根拠と留保を読む ↗"})]})]})}function tn(){return n.jsx("div",{className:"table-scroll",children:n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"原資料"}),n.jsx("th",{children:"反映先"})]})}),n.jsx("tbody",{children:[["冒頭・第1章","概要・Tier探索"],["第2章・付録C","調査方法・資料室"],["第3〜4章","評価条件・採点の説明"],["第5章・第8章","重要論点・考察"],["第6章・付録A","個別詳細・比較"],["第7章","感度分析・編成共有の注意"],["第9章","限界・追加検証事項"],["付録B","NR対象と範囲の説明"]].map(([t,r])=>n.jsxs("tr",{children:[n.jsx("td",{children:t}),n.jsx("td",{children:r})]},t))})]})})}O.createRoot(document.getElementById("root")).render(n.jsx($.StrictMode,{children:n.jsx(en,{})}));
