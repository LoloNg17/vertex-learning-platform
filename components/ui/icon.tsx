import type { ReactNode } from "react";

export type IconName =
  | "bell"
  | "search"
  | "play"
  | "file"
  | "bookmark"
  | "bars"
  | "clock"
  | "user"
  | "chevron"
  | "check"
  | "lock"
  | "folder"
  | "external"
  | "eye"
  | "grid"
  | "target"
  | "accessibility";

export function Icon({
  name,
  size = 16,
  filled = false,
}: {
  name: IconName;
  size?: number;
  filled?: boolean;
}) {
  const paths: Record<IconName, ReactNode> = {
    bell: (
      <>
        <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
        <path d="M10 21h4" />
      </>
    ),
    search: (
      <>
        <circle cx="10.7" cy="10.7" r="6.7" />
        <path d="m16 16 5 5" />
      </>
    ),
    play: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="m10 8 6 4-6 4z" fill={filled ? "white" : "none"} />
      </>
    ),
    file: (
      <>
        <path d="M6 2h8l5 5v15H6z" />
        <path d="M14 2v5h5M9 12h7M9 16h7" />
      </>
    ),
    bookmark: <path d="M5 3h14v18l-7-4-7 4z" />,
    bars: <path d="M4 17h2v4H4zM9 13h2v8H9zM14 9h2v12h-2zM19 4h2v17h-2z" />,
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    user: (
      <>
        <circle cx="12" cy="7" r="3" />
        <path d="M5 21v-2a7 7 0 0 1 14 0v2z" />
      </>
    ),
    chevron: <path d="m9 5 7 7-7 7" />,
    check: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="m8 12 3 3 5-6" />
      </>
    ),
    lock: (
      <>
        <rect x="5" y="10" width="14" height="11" rx="2" />
        <path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3" />
      </>
    ),
    folder: <path d="M2 6h8l2 2h10v12H2z" />,
    external: (
      <>
        <path d="M13 4h7v7M20 4l-9 9" />
        <path d="M19 14v6H4V5h6" />
      </>
    ),
    eye: (
      <>
        <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Z" />
        <circle cx="12" cy="12" r="3" />
      </>
    ),
    grid: (
      <>
        <rect x="2" y="2" width="8" height="8" rx="1" />
        <rect x="14" y="2" width="8" height="8" rx="1" />
        <rect x="2" y="14" width="8" height="8" rx="1" />
        <rect x="14" y="14" width="8" height="8" rx="1" />
      </>
    ),
    target: (
      <>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1" />
        <path d="m16 8 5-5" />
      </>
    ),
    accessibility: (
      <>
        <circle cx="12" cy="3" r="2" />
        <path d="M4 8h16M12 8v5m0 0-5 8m5-8 5 8M8 8l4 4 4-4" />
      </>
    ),
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
