import type { CSSProperties } from 'react';
const paths: Record<string, React.ReactNode> = {
  star: (
    <>
      <path d="m12 2 2.8 6.5 7.2.7-5.4 4.7 1.6 7.1-6.2-3.7-6.2 3.7 1.6-7.1L2 9.2l7.2-.7Z" />
    </>
  ),
  compass: (
    <>
      <path d="m12 2 3 7 7 3-7 3-3 7-3-7-7-3 7-3Z" />
      <path d="m12 8 4 4-4 4-4-4Z" />
    </>
  ),
  grid: (
    <>
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </>
  ),
  compare: (
    <>
      <path d="M8 3v18M16 3v18M3 7h10M11 17h10" />
      <path d="m3 7 3-3m-3 3 3 3m15 7-3-3m3 3-3 3" />
    </>
  ),
  bookmark: <path d="M6 3h12v18l-6-4-6 4Z" />,
  book: (
    <>
      <path d="M12 5C8 2 4 3 2 4v15c4-2 7-1 10 1 3-2 6-3 10-1V4c-2-1-6-2-10 1Z" />
      <path d="M12 5v15" />
    </>
  ),
  arrow: (
    <>
      <path d="M4 12h16m-6-6 6 6-6 6" />
    </>
  ),
  external: (
    <>
      <path d="M14 3h7v7M21 3l-9 9M10 3H4v17h17v-6" />
    </>
  ),
  search: (
    <>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m16 16 5 5" />
    </>
  ),
  plus: <path d="M12 5v14M5 12h14" />,
  check: <path d="m5 12 4 4L19 6" />,
  close: <path d="m6 6 12 12M6 18 18 6" />,
  info: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v6M12 7v.5" />
    </>
  ),
  chevron: <path d="m8 5 7 7-7 7" />,
  list: (
    <>
      <path d="M8 5h13M8 12h13M8 19h13M3 5h.01M3 12h.01M3 19h.01" />
    </>
  ),
  share: (
    <>
      <circle cx="18" cy="4" r="3" />
      <circle cx="18" cy="20" r="3" />
      <circle cx="5" cy="12" r="3" />
      <path d="m8 10 7-4M8 14l7 4" />
    </>
  ),
  download: (
    <>
      <path d="M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5" />
    </>
  ),
  shield: (
    <>
      <path d="m12 2 8 3v7c0 5-5 8-8 10-3-2-8-5-8-10V5Z" />
      <path d="m8 12 3 3 5-6" />
    </>
  ),
  spark: (
    <>
      <path d="m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5Z" />
    </>
  ),
};
export function Icon({
  name,
  size = 20,
  className = '',
  style,
}: {
  name: string;
  size?: number;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      style={style}
    >
      {paths[name] || paths.spark}
    </svg>
  );
}
