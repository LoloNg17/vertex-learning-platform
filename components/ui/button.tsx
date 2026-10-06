import type { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "tertiary" | "text";

const variantClasses: Record<ButtonVariant, string> = {
  primary: "border-transparent bg-primary-500 text-white hover:bg-[#e9540b]",
  secondary: "border-[#ffad83] bg-white text-[#f4511e] hover:bg-[#fff4ed]",
  tertiary: "border-[#e7e5e4] bg-white text-[#171717] hover:bg-[#f5f5f4]",
  text: "border-transparent bg-transparent text-[#f4511e] hover:text-[#d6450b]",
};

export function Button({
  variant = "primary",
  className = "",
  type = "button",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: ButtonVariant }) {
  return (
    <button
      type={type}
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-md border px-4 font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-[.38] ${variantClasses[variant]} ${className}`}
      {...props}
    />
  );
}
