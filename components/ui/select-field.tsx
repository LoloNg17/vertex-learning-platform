import type { SelectHTMLAttributes } from "react";

export function SelectField({
  className = "",
  ...props
}: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      className={`h-11 w-full rounded-md border border-neutral-200 bg-white px-4 focus:border-primary-400 ${className}`}
      {...props}
    />
  );
}
