import type { HTMLAttributes } from "react";

type BadgeVariant = "video" | "lesson" | "popular";

const variantClasses: Record<BadgeVariant, string> = {
  video: "bg-[#fff0e8] text-[#f4511e]",
  lesson: "bg-[#f0effb] text-[#5955be]",
  popular: "bg-[#fff0e8] text-[#f4511e]",
};

export function Badge({
  variant,
  className = "",
  ...props
}: HTMLAttributes<HTMLSpanElement> & { variant: BadgeVariant }) {
  return (
    <span
      className={`inline-flex w-fit rounded-[3px] px-[5px] pb-[3px] pt-1 text-[8px] font-bold leading-none tracking-[.04em] ${variantClasses[variant]} ${className}`}
      {...props}
    />
  );
}
