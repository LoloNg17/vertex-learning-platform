import type { InputHTMLAttributes, ReactNode } from "react";

export function TextField({
  leadingIcon,
  shortcut,
  className = "",
  ...inputProps
}: InputHTMLAttributes<HTMLInputElement> & {
  leadingIcon?: ReactNode;
  shortcut?: string;
}) {
  return (
    <div
      className={`flex h-11 items-center gap-2 rounded-md border border-neutral-200 bg-white px-4 focus-within:border-primary-400 ${className}`}
    >
      {leadingIcon}
      <input
        className="min-w-0 flex-1 border-0 bg-transparent outline-none placeholder:text-neutral-500"
        {...inputProps}
      />
      {shortcut && (
        <kbd className="rounded border border-neutral-200 px-1">{shortcut}</kbd>
      )}
    </div>
  );
}
