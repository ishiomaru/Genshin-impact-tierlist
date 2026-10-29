import { useEffect, useMemo } from 'react';
import { marked, Renderer } from 'marked';
import raw from '../web-quality-research/source/report.md?raw';
import data from './data/research.json';
import { Icon } from './icons';
import type { Route } from './types';

export default function Report({
  focus,
  go,
}: {
  focus: string;
  go: (page: string, extra?: Partial<Route>) => void;
}) {
  const { html, toc } = useMemo(() => {
    const renderer = new Renderer();
    const toc: { id: string; label: string }[] = [];
    let headingIndex = 0;
    renderer.html = ({ text }) =>
      text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    renderer.heading = function (token) {
      const record = data.records.find((c) => token.text.startsWith(c.name + ' —'));
      const n = token.depth === 2 ? token.text.match(/^(\d+)\./) : null;
      const appendix = token.depth === 2 ? token.text.match(/^付録([A-Z])/) : null;
      const id = record
        ? `source-${record.id}`
        : n
          ? `section-${n[1]}`
          : appendix
            ? `appendix-${appendix[1].toLowerCase()}`
            : `heading-${headingIndex++}`;
      if (token.depth === 2) toc.push({ id, label: token.text });
      return `<h${token.depth} id="${id}">${this.parser.parseInline(token.tokens)}</h${token.depth}>`;
    };
    renderer.link = function (token) {
      const safe = /^https?:\/\//.test(token.href);
      const escaped = token.href
        .replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/</g, '&lt;');
      return safe
        ? `<a href="${escaped}" target="_blank" rel="noreferrer">${this.parser.parseInline(token.tokens)}<span class="sr-only">（外部・新しいタブ）</span></a>`
        : this.parser.parseInline(token.tokens);
    };
    return { html: marked.parse(raw, { renderer, async: false }) as string, toc };
  }, []);
  useEffect(() => {
    if (focus) {
      requestAnimationFrame(() => {
        const target = document.getElementById(focus);
        target?.scrollIntoView({ block: 'start' });
        target?.setAttribute('tabindex', '-1');
        target?.focus({ preventScroll: true });
      });
    }
  }, [focus, html]);
  function scroll(id: string) {
    const target = document.getElementById(id);
    target?.scrollIntoView({ block: 'start' });
    target?.setAttribute('tabindex', '-1');
    target?.focus({ preventScroll: true });
  }
  return (
    <div className="report-page">
      <div className="page-heading">
        <span className="eyebrow">THE ORIGINAL RESEARCH</span>
        <h1>判断の、その根拠へ。</h1>
        <p>提供資料を、省略せずに。全評価・条件・参照先を確認できます。</p>
        <button className="text-link" onClick={() => go('atlas')}>
          <Icon name="arrow" size={15} style={{ transform: 'rotate(180deg)' }} />
          アトラスに戻る
        </button>
      </div>
      <div className="report-notice">
        <Icon name="info" size={18} />
        <p>
          以下は原著者の研究原文です。記載の「確認済み」は原著者の調査範囲であり、このサイトでの独立検証を意味しません。外部リンクは別タブで開きます。
        </p>
      </div>
      <div className="report-layout">
        <nav className="report-toc" aria-label="研究原文の目次">
          <span className="mini-label">CONTENTS</span>
          {toc.map((h) => (
            <button key={h.id} onClick={() => scroll(h.id)}>
              {h.label}
            </button>
          ))}
        </nav>
        <article className="report-content" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
  );
}
