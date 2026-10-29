import { lazy, Suspense, useEffect, useMemo, useRef, useState } from 'react';
import research from './data/research.json';
import identities from './data/identities.json';
import {
  TIERS,
  PROFILES,
  MODES,
  TIER_DESCRIPTIONS,
  tierFor,
  normalize,
  parseRoute,
  routeHash,
  sharedMentions,
} from './model.mjs';
import { Icon } from './icons';
import type { Character, Library, Route } from './types';

const Report = lazy(() => import('./Report'));
const records: Character[] = research.records;
const validIds = records.map((c) => c.id);
const findName = (name: string) => records.find((c) => c.name === name)!;
const ELEMENTS = ['炎', '水', '風', '雷', '草', '氷', '岩', '物理'];
const NAV = [
  { page: 'atlas', label: 'Tierアトラス', icon: 'grid' },
  { page: 'compare', label: '運用を比較', icon: 'compare' },
  { page: 'saved', label: 'マイリスト', icon: 'bookmark' },
  { page: 'method', label: '評価の読み方', icon: 'book' },
];
const emptyLibrary: Library = { version: 1, saved: [], notes: {} };
function loadLibrary(): { library: Library; error: string } {
  try {
    const raw = localStorage.getItem('teyvat-atlas-v1');
    if (!raw) return { library: emptyLibrary, error: '' };
    const d = JSON.parse(raw);
    if (d.version !== 1 || !Array.isArray(d.saved) || !d.notes || typeof d.notes !== 'object')
      throw Error('invalid');
    return {
      library: {
        version: 1,
        saved: [
          ...new Set(
            d.saved.filter((id: unknown) => typeof id === 'string' && validIds.includes(id)),
          ),
        ] as string[],
        notes: Object.fromEntries(
          Object.entries(d.notes)
            .filter(([id, n]) => validIds.includes(id) && typeof n === 'string')
            .map(([id, n]) => [id, (n as string).slice(0, 5000)]),
        ),
      },
      error: '',
    };
  } catch {
    return {
      library: emptyLibrary,
      error: '端末の保存データを読み込めませんでした。新しい保存操作まで元データは変更しません。',
    };
  }
}
function Portrait({ c, large = false }: { c: Character; large?: boolean }) {
  const [failed, setFailed] = useState(false);
  return (
    <span className={`portrait element-${c.element.charAt(0)} ${large ? 'large' : ''}`}>
      {c.portrait && !failed ? (
        <img
          src={c.portrait}
          alt=""
          loading="lazy"
          width="128"
          height="128"
          onError={() => setFailed(true)}
        />
      ) : (
        <span className="portrait-fallback" aria-label="画像なし">
          {c.name.slice(0, 2)}
        </span>
      )}
    </span>
  );
}
function Tier({ value, small = false }: { value: string; small?: boolean }) {
  return <span className={`tier-badge tier-${value} ${small ? 'small' : ''}`}>{value}</span>;
}
function Element({ value }: { value: string }) {
  return (
    <span className={`element-label element-${value.charAt(0)}`}>
      <span className="element-mark" aria-hidden="true">
        ◆
      </span>
      {value}
    </span>
  );
}
function ScoreBars({ c }: { c: Character }) {
  return (
    <div className="score-bars">
      {c.scores.map((s, i) => (
        <div className="score-line" key={MODES[i]}>
          <span>{MODES[i]}</span>
          <div className={`score-track mode-${i}`}>
            <span style={{ width: `${s * 20}%` }} />
          </div>
          <strong>
            {s.toFixed(1)}
            <small> / 5</small>
          </strong>
        </div>
      ))}
    </div>
  );
}
function ProfilePicker({
  profile,
  onChange,
  compact = false,
}: {
  profile: string;
  onChange: (id: string) => void;
  compact?: boolean;
}) {
  const p = PROFILES.find((p) => p.id === profile)!;
  return (
    <section className={`profile-panel ${compact ? 'compact' : ''}`} aria-label="評価の重みを選ぶ">
      <div className="profile-top">
        <div>
          <span className="eyebrow">CHOOSE YOUR PERSPECTIVE</span>
          <h2>どの舞台で、比べる？</h2>
        </div>
        <span className="profile-help">モード点は固定。重みだけを変更します。</span>
      </div>
      <div className="profile-options">
        {PROFILES.map((p, i) => (
          <button
            key={p.id}
            className={profile === p.id ? 'active' : ''}
            aria-pressed={profile === p.id}
            onClick={() => onChange(p.id)}
          >
            <Icon name={['compass', 'shield', 'spark', 'star'][i]} size={19} />
            <span>{p.label}</span>
            {profile === p.id && <Icon name="check" size={15} />}
          </button>
        ))}
      </div>
      <div className="weight-summary">
        <div className="weight-bar" aria-hidden="true">
          {p.weights.map((w, i) => (
            <span className={`mode-${i}`} key={i} style={{ width: `${w}%` }} />
          ))}
        </div>
        <div className="weight-labels">
          {p.weights.map((w, i) => (
            <span key={i}>
              <i className={`mode-${i}`} />
              {['螺旋', '幽境', 'シアター'][i]} <b>{w}%</b>
            </span>
          ))}
        </div>
        <span className="weight-description">{p.description}</span>
      </div>
    </section>
  );
}

export default function App() {
  const [route, setRoute] = useState<Route>(() => parseRoute(location.hash, validIds));
  const [loaded] = useState(loadLibrary);
  const [library, setLibrary] = useState<Library>(loaded.library);
  const [storageError, setStorageError] = useState(loaded.error);
  const [notice, setNotice] = useState('');
  const [detail, setDetail] = useState<Character | null>(null);
  const [query, setQuery] = useState(route.query || '');
  const [element, setElement] = useState('すべて');
  const [group, setGroup] = useState('all');
  const [layout, setLayout] = useState('board');
  const [onlyChanged, setOnlyChanged] = useState(false);
  const [shareUrl, setShareUrl] = useState('');
  const dialogRef = useRef<HTMLDialogElement>(null);
  const prevPage = useRef(route.page);
  const profile = PROFILES.find((p) => p.id === route.profile)!;
  const chosen = route.compare.map((id) => records.find((c) => c.id === id)!).filter(Boolean);
  const tier = (c: Character) => tierFor(c.scores, profile.weights);
  const changed = records.filter((c) => tier(c) !== c.tier).length;

  useEffect(() => {
    const fn = () => setRoute(parseRoute(location.hash, validIds));
    window.addEventListener('hashchange', fn);
    return () => window.removeEventListener('hashchange', fn);
  }, []);
  useEffect(() => {
    if (prevPage.current !== route.page) {
      setNotice('');
      window.scrollTo({ top: 0, behavior: 'instant' });
      document.getElementById('main')?.focus();
      prevPage.current = route.page;
    }
  }, [route.page]);
  useEffect(() => {
    document.title = `${({ atlas: 'Tierアトラス', compare: '運用を比較', saved: 'マイリスト', method: '評価の読み方', report: '研究原文' } as Record<string, string>)[route.page]} — TEYVAT ATLAS`;
  }, [route.page]);
  useEffect(() => {
    if (!notice) return;
    const t = setTimeout(() => setNotice(''), 4500);
    return () => clearTimeout(t);
  }, [notice]);
  useEffect(() => {
    if (detail) {
      dialogRef.current?.showModal();
      document.body.classList.add('dialog-open');
    }
    return () => {
      dialogRef.current?.close();
      document.body.classList.remove('dialog-open');
    };
  }, [detail]);

  function updateRoute(patch: Partial<Route>, replace = false) {
    const next = { ...route, ...patch };
    setRoute(next);
    if (replace) history.replaceState(null, '', routeHash(next));
    else location.hash = routeHash(next);
  }
  function go(page: string, extra: Partial<Route> = {}) {
    setDetail(null);
    setShareUrl('');
    updateRoute({ page, focus: '', ...extra });
  }
  function changeProfile(id: string) {
    setOnlyChanged(false);
    updateRoute({ profile: id }, true);
  }
  function store(next: Library) {
    setLibrary(next);
    try {
      localStorage.setItem('teyvat-atlas-v1', JSON.stringify(next));
      setStorageError('');
      return true;
    } catch {
      setStorageError(
        'この端末に保存できません。ブラウザの保存設定を確認してください。現在の変更は画面内だけに保持しています。',
      );
      return false;
    }
  }
  function toggleSaved(c: Character) {
    const exists = library.saved.includes(c.id);
    const persisted = store({
      ...library,
      saved: exists ? library.saved.filter((id) => id !== c.id) : [...library.saved, c.id],
    });
    setNotice(
      persisted
        ? `${c.name}をマイリスト${exists ? 'から外しました' : 'に保存しました'}`
        : '変更はこの画面内に一時保持しています。端末への保存には失敗しました。',
    );
  }
  function toggleCompare(c: Character) {
    if (route.compare.includes(c.id)) {
      updateRoute({ compare: route.compare.filter((id) => id !== c.id) }, true);
      return;
    }
    if (route.compare.length >= 3) {
      setNotice('比較は3運用までです。選択済みの運用を外してから追加してください。');
      return;
    }
    updateRoute({ compare: [...route.compare, c.id] }, true);
  }
  function showSource(c?: Character) {
    go('report', { focus: c ? `source-${c.id}` : '' });
  }
  async function share() {
    const url = new URL(location.href);
    url.hash = routeHash({ ...route, page: 'compare', focus: '', query: '' });
    try {
      await navigator.clipboard.writeText(url.href);
      setNotice('比較条件のリンクをコピーしました。メモ・マイリストは共有されません。');
    } catch {
      setShareUrl(url.href);
    }
  }
  function exportLibrary() {
    const blob = new Blob(
      [
        JSON.stringify(
          { app: 'teyvat-atlas', sourceSha256: research.sourceSha256, ...library },
          null,
          2,
        ),
      ],
      { type: 'application/json' },
    );
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'teyvat-atlas-my-list.json';
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
    setNotice('マイリストとメモを書き出しました。');
  }
  const filtered = useMemo(
    () =>
      records.filter(
        (c) =>
          (route.page !== 'saved' || library.saved.includes(c.id)) &&
          (!query || normalize(c.name).includes(normalize(query))) &&
          (element === 'すべて' || c.element.includes(element)) &&
          (group === 'all' || c.group === (group === 'main' ? '主' : '派生')) &&
          (!onlyChanged || tierFor(c.scores, profile.weights) !== c.tier),
      ),
    [route.page, library.saved, query, element, group, onlyChanged, profile],
  );

  function renderCard(c: Character) {
    const isSelected = route.compare.includes(c.id);
    return (
      <article
        key={c.id}
        className={`character-card ${isSelected ? 'selected' : ''}`}
        data-character={c.name}
      >
        <button
          className={`card-save icon-button ${library.saved.includes(c.id) ? 'saved' : ''}`}
          aria-label={`${c.name}を${library.saved.includes(c.id) ? '保存解除' : '保存'}`}
          aria-pressed={library.saved.includes(c.id)}
          title="マイリストに保存"
          onClick={() => toggleSaved(c)}
        >
          <Icon name="bookmark" size={15} />
        </button>
        <button
          className="card-main"
          aria-label={`${c.name}の評価詳細`}
          onClick={() => setDetail(c)}
        >
          <Portrait c={c} />
          <span className="card-name">{c.name}</span>
          <span className="card-meta">
            <Element value={c.element} />
            <span>{c.group === '派生' ? '派生' : c.role.replaceAll('/', '・')}</span>
          </span>
        </button>
        <div className="card-bottom">
          {tier(c) !== c.tier ? (
            <span className="changed-tag">
              {c.tier}
              <span aria-hidden="true"> → </span>
              <span className="sr-only">から</span>
              {tier(c)}
            </span>
          ) : (
            <span className="confidence-text">確度 {c.confidence}</span>
          )}
          <button
            className={`card-compare ${isSelected ? 'active' : ''}`}
            aria-label={`${c.name}を比較${isSelected ? 'から外す' : 'に追加'}`}
            aria-pressed={isSelected}
            onClick={() => toggleCompare(c)}
          >
            <Icon name={isSelected ? 'check' : 'plus'} size={14} />
            <span>{isSelected ? '選択中' : '比較'}</span>
          </button>
        </div>
      </article>
    );
  }
  function renderFilters() {
    return (
      <>
        <div className="filter-bar">
          <label className="search-field">
            <Icon name="search" size={18} />
            <span className="sr-only">キャラクター名で検索</span>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="キャラクターを探す"
            />
            {query && (
              <button onClick={() => setQuery('')} aria-label="検索をクリア">
                <Icon name="close" size={16} />
              </button>
            )}
          </label>
          <label className="scope-field">
            <span className="sr-only">運用の区分</span>
            <select value={group} onChange={(e) => setGroup(e.target.value)}>
              <option value="all">すべての運用</option>
              <option value="main">主対象のみ</option>
              <option value="derived">派生・ドライバーのみ</option>
            </select>
          </label>
          <span className="filter-spacer" />
          <div className="view-switch" aria-label="一覧の表示形式">
            <button
              aria-label="Tierボード表示"
              aria-pressed={layout === 'board'}
              className={layout === 'board' ? 'active' : ''}
              onClick={() => setLayout('board')}
            >
              <Icon name="grid" size={18} />
            </button>
            <button
              aria-label="採点表表示"
              aria-pressed={layout === 'table'}
              className={layout === 'table' ? 'active' : ''}
              onClick={() => setLayout('table')}
            >
              <Icon name="list" size={19} />
            </button>
          </div>
        </div>
        <div className="element-filters" aria-label="元素で絞り込み">
          {['すべて', ...ELEMENTS].map((el) => (
            <button
              key={el}
              aria-pressed={element === el}
              className={`${element === el ? 'active' : ''} element-${el}`}
              onClick={() => setElement(el)}
            >
              {el !== 'すべて' && <span aria-hidden="true">◆</span>}
              {el}
            </button>
          ))}
        </div>
      </>
    );
  }

  return (
    <div className="app-shell">
      <a
        className="skip-link"
        href="#main"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById('main')?.focus();
        }}
      >
        本文へスキップ
      </a>
      <aside className="sidebar">
        <a
          className="brand"
          href={routeHash({ ...route, page: 'atlas', focus: '' })}
          aria-label="TEYVAT ATLAS ホーム"
        >
          <Icon name="compass" size={34} />
          <span>
            TEYVAT
            <span>
              ATLAS <i>戦力研究室</i>
            </span>
          </span>
        </a>
        <div className="sidebar-label">EXPLORE THE POSSIBILITIES</div>
        <nav aria-label="メインナビゲーション">
          {NAV.map((item) => (
            <a
              key={item.page}
              href={routeHash({ ...route, page: item.page, focus: '' })}
              className={route.page === item.page ? 'active' : ''}
              aria-current={route.page === item.page ? 'page' : undefined}
            >
              <Icon name={item.icon} size={20} />
              <span>{item.label}</span>
              {item.page === 'saved' && library.saved.length > 0 && <b>{library.saved.length}</b>}
              {item.page === 'compare' && chosen.length > 0 && <b>{chosen.length}</b>}
            </a>
          ))}
        </nav>
        <div className="sidebar-bottom">
          <div className="mini-compass">
            <Icon name="compass" size={35} />
            <span>
              順位よりも、
              <br />
              その理由を。
            </span>
          </div>
          <button className="text-link" onClick={() => showSource()}>
            研究原文を読む <Icon name="external" size={13} />
          </button>
          <p>
            非公式・文献調査版
            <br />
            RESEARCH SNAPSHOT
            <br />
            <b>2026.10.28</b>
          </p>
          <span className="sidebar-version">
            Ver.7.1 <span>ARCHIVE 01</span>
          </span>
        </div>
      </aside>
      <div className="main-shell">
        <header className="topbar">
          <div>
            <span className="topbar-game">GENSHIN IMPACT</span>
            <span className="topbar-divider" />
            <span>メインDPS 戦力研究</span>
          </div>
          <span className="snapshot">
            <i />
            2026.10.28 時点の資料
          </span>
        </header>
        <main id="main" tabIndex={-1}>
          {storageError && (
            <div className="storage-warning" role="alert">
              <Icon name="info" />
              {storageError}
            </div>
          )}
          {(route.page === 'atlas' || route.page === 'saved') && (
            <>
              {route.page === 'atlas' ? (
                <section className="hero">
                  <div className="hero-orbit orbit-one" />
                  <div className="hero-orbit orbit-two" />
                  <div className="hero-stars" aria-hidden="true">
                    ✧<span>✦</span>
                  </div>
                  <div className="hero-content">
                    <span className="hero-label">
                      <span />
                      THE MAIN DPS FIELD GUIDE
                    </span>
                    <h1>
                      強さは、
                      <br />
                      条件で変わる。
                    </h1>
                    <p>
                      77の運用を、3つの高難度から。
                      <br />
                      編成の可能性を、根拠とともに見渡そう。
                    </p>
                    <a
                      className="hero-cta"
                      href="#tier-board"
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('tier-board')?.scrollIntoView({
                          behavior: matchMedia('(prefers-reduced-motion: reduce)').matches
                            ? 'instant'
                            : 'smooth',
                        });
                      }}
                    >
                      Tierアトラスを探索 <Icon name="arrow" size={17} />
                    </a>
                    <div className="hero-foot">
                      <span className="hero-statline">53 主対象 ＋ 24 派生・ドライバー</span>
                      <span className="hero-foot-line" />
                      <span className="hero-order">同Tier内は順不同</span>
                    </div>
                  </div>
                  <img
                    className="hero-art"
                    src="/assets/neuvillette-splash.webp"
                    alt=""
                    width="900"
                    height="900"
                    fetchPriority="high"
                  />
                  <button
                    className="hero-insight"
                    onClick={() => {
                      changeProfile('theater');
                      setDetail(findName('ヌヴィレット'));
                    }}
                  >
                    <span>例えば、ヌヴィレットなら</span>
                    <strong>
                      <span>
                        S <small>基準</small>
                      </span>
                      <Icon name="arrow" size={22} />
                      <span>
                        SS <small>シアター重視</small>
                      </span>
                    </strong>
                    <span>
                      重みで変わる評価を知る <Icon name="chevron" size={13} />
                    </span>
                  </button>
                  <span className="hero-corner">PERSPECTIVE CHANGES EVERYTHING</span>
                </section>
              ) : (
                <div className="page-heading">
                  <span className="eyebrow">YOUR FIELD NOTES</span>
                  <h1>マイリスト</h1>
                  <p>気になる運用と、あなた自身の考察を残す場所。</p>
                  <div className="heading-actions">
                    <span className="local-tag">
                      <Icon name="shield" size={15} />
                      このブラウザに保存
                    </span>
                    <button className="button secondary" onClick={exportLibrary}>
                      <Icon name="download" size={16} />
                      メモごと書き出す
                    </button>
                  </div>
                </div>
              )}
              {route.page === 'atlas' && (
                <div className="premise-strip">
                  <Icon name="info" size={17} />
                  <span>
                    <b>完成編成での攻略戦力</b>
                    を比較する、原著者の独自評価です。実測DPS・入手育成優先度ではありません。
                  </span>
                  <button onClick={() => go('method')}>
                    評価条件 <Icon name="chevron" size={13} />
                  </button>
                </div>
              )}
              <ProfilePicker profile={route.profile} onChange={changeProfile} />
              <section className="atlas-section" id="tier-board" aria-labelledby="atlas-heading">
                <div className="section-heading">
                  <div>
                    <span className="eyebrow">
                      {route.page === 'saved' ? 'PERSONAL COLLECTION' : 'THE TIER ATLAS'}
                    </span>
                    <h2 id="atlas-heading">
                      {route.page === 'saved' ? '保存した運用' : 'メインDPS Tierアトラス'}
                      <span className="count-pill" aria-live="polite">
                        {filtered.length}
                        <small> / {route.page === 'saved' ? library.saved.length : 77} 運用</small>
                      </span>
                    </h2>
                  </div>
                  <span className="order-note">同Tier内は原文順・優劣なし</span>
                </div>
                <div className="conditions-chips">
                  <span>★5 無凸</span>
                  <span>★4 完凸</span>
                  <span>Lv.90</span>
                  <span>非モチーフ基準</span>
                  <button onClick={() => go('method')}>
                    例外・前提を見る <Icon name="external" size={12} />
                  </button>
                </div>
                {route.profile !== 'balanced' && (
                  <div className="change-summary">
                    <Icon name="compare" size={18} />
                    <span>
                      全77運用のうち <b>{changed}運用</b>{' '}
                      のTierが基準から変動。実測の再評価ではなく、同じ点数の重み変更です。
                    </span>
                    <label>
                      <input
                        type="checkbox"
                        checked={onlyChanged}
                        onChange={(e) => setOnlyChanged(e.target.checked)}
                      />
                      変動のみ
                    </label>
                  </div>
                )}
                {renderFilters()}
                {filtered.length === 0 ? (
                  <div className="empty-state">
                    <Icon
                      name={route.page === 'saved' && !library.saved.length ? 'bookmark' : 'search'}
                      size={37}
                    />
                    <h3>
                      {route.page === 'saved' && !library.saved.length
                        ? '気になる運用を、ここに。'
                        : '条件に合う運用が見つかりません'}
                    </h3>
                    <p>
                      {route.page === 'saved' && !library.saved.length
                        ? 'カードの保存ボタンから追加できます。詳細では自分用のメモも残せます。'
                        : '名前・元素・運用の区分を変えてみてください。未採点（NR）のキャラはTier一覧に含みません。'}
                    </p>
                    <button
                      className="button primary"
                      onClick={() => {
                        setQuery('');
                        setElement('すべて');
                        setGroup('all');
                        setOnlyChanged(false);
                        if (route.page === 'saved' && !library.saved.length) go('atlas');
                      }}
                    >
                      {route.page === 'saved' && !library.saved.length
                        ? 'アトラスを探索する'
                        : '絞り込みをリセット'}
                      <Icon name="arrow" size={16} />
                    </button>
                    <button className="text-link" onClick={() => go('method', { focus: 'nr' })}>
                      未採点（NR）の扱いを確認
                    </button>
                  </div>
                ) : layout === 'board' ? (
                  <div className="tier-board">
                    {TIERS.map((t) => {
                      const chars = filtered.filter((c) => tier(c) === t);
                      return (
                        chars.length > 0 && (
                          <section className={`tier-row row-${t}`} key={t} aria-label={`Tier ${t}`}>
                            <div className="tier-row-heading">
                              <Tier value={t} />
                              <span>{chars.length} 運用</span>
                              <p>{TIER_DESCRIPTIONS[t as keyof typeof TIER_DESCRIPTIONS]}</p>
                            </div>
                            <div className="tier-characters">{chars.map((c) => renderCard(c))}</div>
                          </section>
                        )
                      );
                    })}
                  </div>
                ) : (
                  <div className="data-table-scroll">
                    <table className="data-table">
                      <caption className="sr-only">
                        {profile.label}での採点一覧。モード点は0〜5の序数で実測DPSではありません。
                      </caption>
                      <thead>
                        <tr>
                          <th scope="col">運用</th>
                          <th scope="col">Tier</th>
                          {MODES.map((m) => (
                            <th scope="col" key={m}>
                              {m}
                            </th>
                          ))}
                          <th scope="col">確度</th>
                          <th scope="col">比較</th>
                        </tr>
                      </thead>
                      <tbody>
                        {TIERS.flatMap((t) => filtered.filter((c) => tier(c) === t)).map((c) => (
                          <tr key={c.id}>
                            <th scope="row">
                              <button onClick={() => setDetail(c)}>
                                <Portrait c={c} />
                                <span>
                                  {c.name}
                                  <small>
                                    {c.group === '主' ? '主対象' : '派生・ドライバー'} · {c.element}
                                  </small>
                                </span>
                              </button>
                            </th>
                            <td>
                              <Tier value={tier(c)} small />
                            </td>
                            {c.scores.map((s, i) => (
                              <td key={i}>{s.toFixed(1)}</td>
                            ))}
                            <td>{c.confidence}</td>
                            <td>
                              <button
                                className="icon-button table-compare"
                                aria-label={`${c.name}を比較${route.compare.includes(c.id) ? 'から外す' : 'に追加'}`}
                                aria-pressed={route.compare.includes(c.id)}
                                onClick={() => toggleCompare(c)}
                              >
                                <Icon
                                  name={route.compare.includes(c.id) ? 'check' : 'plus'}
                                  size={18}
                                />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
                <p className="role-legend">
                  H 継続攻撃 · Q 短出場 · D 反応・付着を動かす前衛。主対象・派生は同じTier基準です。
                </p>
                <div className="atlas-bottom-note">
                  <Icon name="info" size={16} />
                  <p>
                    低Tierは攻略不能・支援役として弱いという意味ではありません。主対象と派生は同じ基準です。モード点は著者の判断による序数で、火力の倍率を表しません。
                  </p>
                </div>
              </section>
              {route.page === 'atlas' && (
                <section className="discovery">
                  <div>
                    <span className="eyebrow">READ BETWEEN THE TIERS</span>
                    <h2>その評価には、理由がある。</h2>
                    <p>順位だけでは見えない、3つの視点。</p>
                  </div>
                  <button
                    onClick={() => {
                      changeProfile('theater');
                      setDetail(findName('ヌヴィレット'));
                    }}
                  >
                    <span className="insight-number">01</span>
                    <h3>
                      舞台が変われば、
                      <br />
                      強みも変わる。
                    </h3>
                    <p>ヌヴィレットの S → SS を読む</p>
                    <Icon name="arrow" />
                  </button>
                  <button onClick={() => setDetail(findName('スクロース'))}>
                    <span className="insight-number">02</span>
                    <h3>
                      本人の火力だけが、
                      <br />
                      前衛の価値ではない。
                    </h3>
                    <p>スクロースがSとなる理由</p>
                    <Icon name="arrow" />
                  </button>
                  <button onClick={() => go('method', { focus: 'evidence' })}>
                    <span className="insight-number">03</span>
                    <h3>
                      大きなDPSの数字を、
                      <br />
                      そのまま信じない。
                    </h3>
                    <p>171.05Kを順位に使わない理由</p>
                    <Icon name="arrow" />
                  </button>
                </section>
              )}
            </>
          )}

          {route.page === 'compare' && (
            <>
              <div className="page-heading">
                <span className="eyebrow">SIDE BY SIDE</span>
                <h1>違いがわかると、選び方が変わる。</h1>
                <p>最大3運用を、同じ評価条件で並べる。Tierの先にある強みと制約まで。</p>
                <div className="heading-actions">
                  <button className="button secondary" onClick={share}>
                    <Icon name="share" size={16} />
                    比較リンクを共有
                  </button>
                  {chosen.length > 0 && (
                    <button
                      className="text-link"
                      onClick={() => updateRoute({ compare: [] }, true)}
                    >
                      選択をクリア
                    </button>
                  )}
                </div>
                {shareUrl && (
                  <label className="share-fallback">
                    このURLをコピーしてください（メモ・保存リストは含まれません）
                    <input readOnly value={shareUrl} onFocus={(e) => e.target.select()} />
                  </label>
                )}
              </div>
              <ProfilePicker profile={route.profile} onChange={changeProfile} compact />
              <div className="compare-selectors">
                {[0, 1, 2].map((i) => (
                  <label key={i}>
                    <span>比較する運用 {String(i + 1).padStart(2, '0')}</span>
                    <select
                      aria-label={`比較する運用 ${i + 1}`}
                      value={chosen[i]?.id || ''}
                      onChange={(e) => {
                        const next = [...route.compare];
                        if (e.target.value) next[i] = e.target.value;
                        else next.splice(i, 1);
                        updateRoute({ compare: next.filter(Boolean) }, true);
                      }}
                    >
                      <option value="">運用を選択してください</option>
                      {records.map((c) => (
                        <option
                          key={c.id}
                          value={c.id}
                          disabled={route.compare.includes(c.id) && chosen[i]?.id !== c.id}
                        >
                          {c.name} · {c.group === '主' ? '主対象' : '派生'}
                        </option>
                      ))}
                    </select>
                  </label>
                ))}
              </div>
              {!chosen.length ? (
                <div className="compare-empty">
                  <Icon name="compare" size={36} />
                  <h2>気になる2人から、比べてみよう。</h2>
                  <p>上の選択欄か、アトラスの「＋ 比較」から追加できます。</p>
                  <button
                    className="button primary"
                    onClick={() =>
                      updateRoute(
                        { compare: [findName('ヌヴィレット').id, findName('スクロース').id] },
                        true,
                      )
                    }
                  >
                    ヌヴィレットとスクロースで試す
                    <Icon name="arrow" size={17} />
                  </button>
                </div>
              ) : (
                <>
                  <div className="mobile-compare-overview">
                    <h2>比較の要点</h2>
                    <div>
                      <table>
                        <caption className="sr-only">
                          選択した運用のTierとモード点。0〜5の序数で実測DPSではありません。
                        </caption>
                        <thead>
                          <tr>
                            <th scope="col">運用</th>
                            {chosen.map((c) => (
                              <th scope="col" key={c.id}>
                                <button onClick={() => setDetail(c)}>
                                  <Portrait c={c} />
                                  <span>{c.name}</span>
                                </button>
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">現在のTier</th>
                            {chosen.map((c) => (
                              <td key={c.id}>
                                <Tier value={tier(c)} small />
                              </td>
                            ))}
                          </tr>
                          {MODES.map((m, i) => (
                            <tr key={m}>
                              <th scope="row">{m}</th>
                              {chosen.map((c) => (
                                <td key={c.id}>{c.scores[i].toFixed(1)}</td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <p>モード点は0〜5の序数。各運用の強み・制約は下で確認できます。</p>
                  </div>
                  <div
                    className="compare-grid"
                    style={{ '--compare-cols': chosen.length } as React.CSSProperties}
                  >
                    {chosen.map((c) => (
                      <article className="compare-card" key={c.id}>
                        <div className="compare-card-top">
                          <button
                            className="icon-button"
                            aria-label={`${c.name}を比較から外す`}
                            onClick={() => toggleCompare(c)}
                          >
                            <Icon name="close" size={17} />
                          </button>
                          <Portrait c={c} large />
                          <Tier value={tier(c)} />
                        </div>
                        <button className="compare-name" onClick={() => setDetail(c)}>
                          {c.name}
                          <Icon name="chevron" size={16} />
                        </button>
                        <div className="compare-meta">
                          <Element value={c.element} />
                          <span>{c.group === '主' ? '主対象' : '派生・ドライバー'}</span>
                        </div>
                        <div className="compare-section">
                          <span className="mini-label">3つの舞台でのモード点</span>
                          <ScoreBars c={c} />
                          <small className="ordinal-note">
                            0〜5の序数。実測DPSではありません。
                          </small>
                        </div>
                        <div className="compare-section">
                          <span className="mini-label">強み / 原著者の判断</span>
                          <p>{c.verdict}</p>
                        </div>
                        <div className="compare-section caveat-section">
                          <span className="mini-label">制約・比較上の注意</span>
                          <p>{c.caveat}</p>
                        </div>
                        <div className="compare-section">
                          <span className="mini-label">代表的な味方3枠</span>
                          <p>{c.team}</p>
                          <small className="ordinal-note">
                            最強固定・実測済みを意味しない代表例。
                          </small>
                        </div>
                        <div className="compare-section">
                          <span className="mini-label">重みを変えたとき</span>
                          <div className="profile-tiers">
                            {PROFILES.map((p) => (
                              <div key={p.id}>
                                <span>{p.short}</span>
                                <Tier value={tierFor(c.scores, p.weights)} small />
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="compare-confidence">
                          評価の確度 <b>{c.confidence}</b>
                          <span>統計的な確率ではありません</span>
                        </div>
                        <button
                          className="button secondary full-width"
                          onClick={() => setDetail(c)}
                        >
                          編成・根拠・メモを見る
                          <Icon name="arrow" size={16} />
                        </button>
                      </article>
                    ))}
                  </div>
                  {chosen.length > 1 && (
                    <div className="support-notice">
                      <Icon name="info" />
                      <div>
                        <h3>高Tierを並べても、同時に編成できるとは限りません。</h3>
                        <p>
                          {(() => {
                            const common = sharedMentions(
                              chosen.map((c) => c.team),
                              identities,
                            );
                            return common.length
                              ? `代表例に共通する名前：${common.join('、')}。代替候補の記述も含む名前の照合であり、必須枠や同時編成可否の判定ではありません。`
                              : '代表例にある味方や代替枠を確認し、螺旋2編成・幽境3編成での支援重複を別に検討してください。';
                          })()}
                        </p>
                      </div>
                    </div>
                  )}
                </>
              )}
              <div className="comparison-premise">
                <Icon name="shield" size={20} />
                <p>
                  ★5は本人・味方とも無凸、★4は完凸、原則Lv.90・非モチーフ。主人公や配布武器などに例外があります。
                  <button className="text-link" onClick={() => go('method')}>
                    すべての評価条件を見る <Icon name="chevron" size={13} />
                  </button>
                </p>
              </div>
            </>
          )}

          {route.page === 'method' && (
            <Method
              go={go}
              setDetail={setDetail}
              profile={route.profile}
              changeProfile={changeProfile}
              focus={route.focus || ''}
            />
          )}
          {route.page === 'report' && (
            <Suspense
              fallback={
                <div className="page-heading">
                  <h1>研究原文を読み込んでいます…</h1>
                </div>
              }
            >
              <Report focus={route.focus || ''} go={go} />
            </Suspense>
          )}
          <footer className="footer">
            <div>
              <Icon name="compass" size={23} />
              <span>
                TEYVAT ATLAS <small>順位よりも、その理由を。</small>
              </span>
            </div>
            <p>
              非公式の研究資料をもとにしたファンサイト。ゲーム内実測・統一再計算は行っていません。
              <br />
              キャラクター画像 © HoYoverse.{' '}
              <button onClick={() => go('method', { focus: 'credits' })}>素材・出典について</button>
            </p>
            <span>ARCHIVE 01 / 2026</span>
          </footer>
        </main>
      </div>
      {chosen.length > 0 && route.page !== 'compare' && (
        <div className="compare-tray">
          <div className="tray-label">
            <Icon name="compare" size={20} />
            <b>比較リスト</b>
            <span>{chosen.length} / 3</span>
          </div>
          <div className="tray-characters">
            {chosen.map((c) => (
              <button
                key={c.id}
                onClick={() => toggleCompare(c)}
                aria-label={`${c.name}を比較から外す`}
                title={`${c.name}を外す`}
              >
                <Portrait c={c} />
                <span>{c.name}</span>
                <Icon name="close" size={13} />
              </button>
            ))}
          </div>
          <button className="button primary" onClick={() => go('compare')}>
            比較する
            <Icon name="arrow" size={16} />
          </button>
        </div>
      )}
      <div className={`toast ${notice ? 'visible' : ''}`} role="status" aria-live="polite">
        {notice && (
          <>
            <Icon name="check" size={17} />
            {notice}
          </>
        )}
      </div>
      <dialog
        ref={dialogRef}
        className="detail-dialog"
        aria-labelledby="detail-title"
        onCancel={() => setDetail(null)}
        onKeyDown={(event) => {
          if (event.key !== 'Tab') return;
          const controls = Array.from(
            event.currentTarget.querySelectorAll<HTMLElement>(
              'button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
            ),
          ).filter((element) => element.getClientRects().length > 0);
          const first = controls[0];
          const last = controls[controls.length - 1];
          if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last?.focus();
          } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first?.focus();
          }
        }}
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            const rect = e.currentTarget.getBoundingClientRect();
            if (
              e.clientX < rect.left ||
              e.clientX > rect.right ||
              e.clientY < rect.top ||
              e.clientY > rect.bottom
            )
              setDetail(null);
          }
        }}
      >
        {detail && (
          <>
            <div className={`detail-header element-${detail.element.charAt(0)}`}>
              <button
                className="dialog-close icon-button"
                aria-label="詳細を閉じる"
                onClick={() => setDetail(null)}
                autoFocus
              >
                <Icon name="close" size={22} />
              </button>
              <Portrait c={detail} large />
              <div>
                <span className="eyebrow">CHARACTER FIELD NOTE</span>
                <h2 id="detail-title">{detail.name}</h2>
                <div className="detail-meta">
                  <Element value={detail.element} />
                  <span>{detail.group === '主' ? '主対象' : '派生・ドライバー'}</span>
                  <span>確度 {detail.confidence}</span>
                </div>
              </div>
              <Tier value={tier(detail)} />
            </div>
            <div className="detail-body">
              <div className="detail-actions">
                <button
                  className={`button ${route.compare.includes(detail.id) ? 'primary' : 'secondary'}`}
                  onClick={() => toggleCompare(detail)}
                >
                  <Icon name={route.compare.includes(detail.id) ? 'check' : 'plus'} size={17} />
                  {route.compare.includes(detail.id) ? '比較リストに追加済み' : '比較リストに追加'}
                </button>
                <button
                  className={`button secondary ${library.saved.includes(detail.id) ? 'is-saved' : ''}`}
                  aria-pressed={library.saved.includes(detail.id)}
                  onClick={() => toggleSaved(detail)}
                >
                  <Icon name="bookmark" size={17} />
                  {library.saved.includes(detail.id)
                    ? storageError
                      ? '画面内で一時保持'
                      : '保存済み'
                    : 'マイリストに保存'}
                </button>
              </div>
              {storageError && (
                <p className="detail-storage-error" role="alert">
                  {storageError}
                </p>
              )}
              <div className="detail-profile">
                <span>
                  現在の見方 <b>{profile.label}</b>
                </span>
                <span>
                  基準 <Tier value={detail.tier} small /> <Icon name="arrow" size={14} /> 現在{' '}
                  <Tier value={tier(detail)} small />
                </span>
              </div>
              <p className="detail-lead">{detail.verdict}</p>
              <div className="detail-chart">
                <h3>3つの舞台でのモード点</h3>
                <ScoreBars c={detail} />
                <p>原著者による0〜5の序数。実測DPSや倍率ではありません。</p>
              </div>
              <div className="detail-caveat">
                <Icon name="info" size={18} />
                <div>
                  <h3>制約・比較上の注意</h3>
                  <p>{detail.caveat}</p>
                </div>
              </div>
              <section className="detail-section">
                <h3>代表的な味方3枠</h3>
                <div className="team-composition">
                  <span className="team-lead">
                    {detail.name}
                    <small>前衛</small>
                  </span>
                  <Icon name="plus" size={17} />
                  <p>{detail.team}</p>
                </div>
                <p className="subtle">
                  代表例であり最強固定ではありません。資料を接続した推論を含み、統一条件での実測済み編成を意味しません。
                </p>
              </section>
              <section className="detail-section">
                <h3>重みを変えると、どう見える？</h3>
                <div className="detail-profiles">
                  {PROFILES.map((p) => (
                    <button
                      key={p.id}
                      aria-pressed={route.profile === p.id}
                      className={route.profile === p.id ? 'active' : ''}
                      onClick={() => changeProfile(p.id)}
                    >
                      <span>{p.short}</span>
                      <Tier value={tierFor(detail.scores, p.weights)} small />
                    </button>
                  ))}
                </div>
                <p className="subtle">
                  点数を固定した算術上の感度分析です。元の点数の正しさを検証するものではありません。
                </p>
              </section>
              <section className="detail-section">
                <h3>評価の根拠をたどる</h3>
                <p className="subtle">
                  以下は原著者が仕様・回し等の参照に用いた資料です。このサイトで内容を独立に再検証したものではありません。
                </p>
                <div className="reference-links">
                  {detail.references.map((r) => (
                    <a href={r.url} target="_blank" rel="noreferrer" key={r.id}>
                      <span>{r.id}</span>
                      {r.title}
                      <Icon name="external" size={14} />
                      <span className="sr-only">（新しいタブ）</span>
                    </a>
                  ))}
                </div>
                <button className="text-link" onClick={() => showSource(detail)}>
                  研究原文の該当箇所へ <Icon name="arrow" size={15} />
                </button>
              </section>
              <section className="detail-section personal-note">
                <div>
                  <h3>自分用のメモ</h3>
                  <span>このブラウザだけに保存 · 共有されません</span>
                </div>
                <label>
                  <span className="sr-only">{detail.name}のメモ</span>
                  <textarea
                    maxLength={5000}
                    rows={3}
                    placeholder="試したい編成、気になる条件など…"
                    value={library.notes[detail.id] || ''}
                    onChange={(e) =>
                      store({
                        ...library,
                        notes: { ...library.notes, [detail.id]: e.target.value },
                      })
                    }
                  />
                </label>
                <span className="note-status">
                  {storageError
                    ? '端末への保存に失敗しています'
                    : library.notes[detail.id]
                      ? 'メモを端末に保存しました'
                      : '入力すると自動保存されます'}{' '}
                  · {(library.notes[detail.id] || '').length} / 5,000
                </span>
              </section>
            </div>
          </>
        )}
      </dialog>
    </div>
  );
}

function Method({
  go,
  setDetail,
  profile,
  changeProfile,
  focus,
}: {
  go: (page: string, extra?: Partial<Route>) => void;
  setDetail: (c: Character) => void;
  profile: string;
  changeProfile: (p: string) => void;
  focus: string;
}) {
  useEffect(() => {
    if (focus)
      requestAnimationFrame(() =>
        document.getElementById(focus)?.scrollIntoView({ block: 'start' }),
      );
  }, [focus]);
  return (
    <div className="method-page">
      <div className="page-heading">
        <span className="eyebrow">HOW TO READ THIS ATLAS</span>
        <h1>Tierは、結論の入口。</h1>
        <p>
          何を評価し、何を評価していないか。
          <br />
          同じ条件を共有してこそ、比較は意味を持ちます。
        </p>
      </div>
      <div className="method-intro">
        <Icon name="compass" size={44} />
        <div>
          <h2>
            その前衛を中心にした編成が、
            <br />
            どの程度の余裕で攻略できるか。
          </h2>
          <p>
            本人の大きな一撃だけではなく、付着・反応・支援も含めた編成の攻略戦力を比較しています。入手難度・育成優先度・所持コストの表ではありません。
          </p>
        </div>
      </div>
      <section className="method-section">
        <div className="method-section-title">
          <span>01</span>
          <div>
            <span className="eyebrow">SAME STARTING LINE</span>
            <h2>評価のスタートライン</h2>
          </div>
        </div>
        <div className="premise-grid">
          {[
            [
              '凸の条件',
              '★5は本人・味方とも無凸。★4は本人・味方とも6凸。恒常★5や無料選択があっても自動で凸を追加しません。',
            ],
            [
              '育成の条件',
              '原則Lv.90、天賦は基本9（凸由来+3は反映）。適正メイン・セット・チャージを優先し、聖遺物はKQMSの40サブステ配分を比較規範に。',
            ],
            [
              '武器の上限',
              '鍛造・配布・★3はR5、通常祈願★4はR3、紀行はR1が基本。限定祈願★4の高精錬・モチーフ武器を標準にしません。',
            ],
            [
              '重要な例外',
              '主人公は氷4凸、炎・岩6凸。配布★5「星鋒の剣」90・R3は使用可。将来R5や氷主人公6凸の効果は不採用です。',
            ],
            [
              '編成と操作',
              '生存手段を含む実用的な4人編成。通常のキャンセル・回避は認め、フレーム単位の最速操作やリセット成功を前提にしません。',
            ],
            [
              '戦闘と環境',
              '期間補正を外し、複数巡の回復・再始動を考慮。平均DPSを参照する場合は90秒程度の連戦を比較規範とします。',
            ],
          ].map(([h, p]) => (
            <article key={h}>
              <h3>{h}</h3>
              <p>{p}</p>
            </article>
          ))}
        </div>
        <p className="method-footnote">
          これらは比較判断の基準です。全77運用で最適化ビルド・DPSを新規計算したものではありません。未完凸★4・追加の凸・モチーフへ同じ倍率で外挿できません。
        </p>
      </section>
      <section className="method-section">
        <div className="method-section-title">
          <span>02</span>
          <div>
            <span className="eyebrow">A CHANGE OF PERSPECTIVE</span>
            <h2>重みが変わると、結論も変わる</h2>
          </div>
        </div>
        <ProfilePicker profile={profile} onChange={changeProfile} compact />
        <p>
          各モードの点数は、原著者が0〜5を0.5刻みで付けた序数です。これを重み付きで統合しています。
          <b>4点は2点の2倍強い、という意味ではありません。</b>
        </p>
        <div className="thresholds">
          {TIERS.map((t, i) => (
            <div key={t}>
              <Tier value={t} small />
              <span>{['4.4以上', '3.8以上', '3.2以上', '2.6以上', '2.0以上', '2.0未満'][i]}</span>
            </div>
          ))}
        </div>
        <p className="subtle">
          各帯の上限は次のTierの閾値未満。小数は算術の監査用で、実測精度を示しません。同Tier内の順番は付けていません。
        </p>
        <button className="method-example" onClick={() => setDetail(findName('ヌヴィレット'))}>
          <Portrait c={findName('ヌヴィレット')} />
          <div>
            <h3>ヌヴィレット：基準S、シアター重視SS</h3>
            <p>
              自前回復・範囲攻撃・分割できる攻撃時間が、不完全編成や複数ウェーブで評価されます。
            </p>
          </div>
          <Icon name="arrow" />
        </button>
        <p>
          幻想シアターは出場可能な期が条件。専用支援を欠く場合や活力を温存する場合を考え、出場不可の月を0点として採点していません。
        </p>
      </section>
      <section className="method-section" id="evidence">
        <div className="method-section-title">
          <span>03</span>
          <div>
            <span className="eyebrow">EVIDENCE, NOT JUST NUMBERS</span>
            <h2>「171.05K」を、そのまま順位にしない</h2>
          </div>
        </div>
        <div className="evidence-feature">
          <span className="dps-number">
            171.05<small>K DPS</small>
          </span>
          <div>
            <h3>数値が見えても、比較条件が揃うとは限らない。</h3>
            <p>
              公開されたヴェスナ編成の計算例は19秒。回し・装備は見えますが、チャージ・粒子・敵など全計算仮定の監査が未完のため、原著者は確定DPS序列に採用していません。
            </p>
          </div>
        </div>
        <p>
          別のサンドローネの公開計算は八重神子1凸・七七2凸を含み、全員無凸の基準と一致しません。違う条件の数値を補正式で換算せず、仕様・回しなど採用範囲を限定しています。
        </p>
        <button className="text-link" onClick={() => go('report', { focus: 'section-5' })}>
          公開計算の扱いを原文で読む <Icon name="arrow" size={16} />
        </button>
        <div className="confidence-grid">
          {[
            ['高', '2', '判断が比較的安定'],
            ['中', '57', '追加検証の余地あり'],
            ['低', '18', '資料・比較に不足が残る'],
          ].map(([level, n, desc]) => (
            <div key={level}>
              <span>確度 {level}</span>
              <strong>
                {n}
                <small>運用</small>
              </strong>
              <p>{desc}</p>
            </div>
          ))}
        </div>
        <p className="subtle">
          確度は原著者の自己評価であり、統計的確率ではありません。個別資料93件のうち79件はKQM本体・TCLで、情報源の偏りも残ります。
        </p>
      </section>
      <section className="method-section" id="nr">
        <div className="method-section-title">
          <span>04</span>
          <div>
            <span className="eyebrow">SCOPE MATTERS</span>
            <h2>NRは、「Dより下」ではありません。</h2>
          </div>
        </div>
        <p>
          この資料は127項目のうち77運用を採点し、残り50項目（46キャラ＋主人公の他4元素）を未採点（NR）としています。主な役割が控え・支援・耐久である、無凸では前衛モードが解放されない、または検証が不足する、という範囲上の判断です。
        </p>
        <div className="nr-callout">
          <b>例えば、香菱・行秋・夜蘭・楓原万葉・白朮など。</b>
          <p>
            一覧にいないことは、支援役として弱いことを意味しません。ベネット・鍾離・シロネンの低めの前衛Tierも、通常の支援運用の価値を否定しません。
          </p>
        </div>
        <button className="text-link" onClick={() => go('report', { focus: 'appendix-b' })}>
          未採点50項目の分類を原文で見る <Icon name="arrow" size={16} />
        </button>
      </section>
      <section className="method-section" id="credits">
        <div className="method-section-title">
          <span>05</span>
          <div>
            <span className="eyebrow">ABOUT THIS SNAPSHOT</span>
            <h2>資料と、このサイトについて</h2>
          </div>
        </div>
        <p>
          情報素材は「原神 メインDPS総合Tier研究
          Ver.7.1・2026年10月28日」。このサイトは提供された研究の主張・数値・留保を表示するもので、ゲーム内の事実や参照URLの正確性を独立に再検証したものではありません。
        </p>
        <p>
          キャラクター画像の権利はHoYoverseに帰属します。アイコンは公式CDN、ヌヴィレットのゲーム画像はEnka.Networkの公開アセットから取得し、表示用にWebPへ圧縮しています。名称と画像の対応は
          <a href="https://github.com/theBowja/genshin-db" target="_blank" rel="noreferrer">
            genshin-db（外部）
          </a>
          で照合しました。HoYoverseの公式サイト・公認ランキングではありません。
        </p>
        <p>
          マイリストとメモは、このブラウザのローカルストレージに保存します。アカウント連携・クラウド同期はありません。共有リンクに含むのは比較対象と重みだけです。端末の保存データを消すとメモも消えるため、必要に応じてJSONで書き出せます。
        </p>
        <button className="button primary" onClick={() => go('report')}>
          提供された研究原文を読む <Icon name="arrow" size={16} />
        </button>
        <p className="source-hash">
          SOURCE SHA-256
          <br />
          {research.sourceSha256}
        </p>
      </section>
    </div>
  );
}
