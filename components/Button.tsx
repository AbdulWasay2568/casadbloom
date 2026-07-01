import Link from "next/link";

export interface ButtonProps {
  label: string;
  href: string;
  variant?: "solid" | "outline";
  className?: string;
}

const baseClasses =
  "inline-flex items-center justify-center rounded-2xl px-9 py-4 text-sm font-medium uppercase tracking-[0.12em] transition-colors duration-200";

const variantClasses: Record<NonNullable<ButtonProps["variant"]>, string> = {
  solid:
    "bg-[#f9e2e6] text-[#1c2340] border border-transparent hover:bg-[#f3d3d9]",
  outline:
    "bg-transparent border-2 border-[#D4AF37] hover:bg-[#D4AF37]/10",
};

export const Button = ({
  label,
  href,
  variant = "solid",
  className,
}: ButtonProps) => {
  return (
    <Link
      href={href}
      className={`${baseClasses} ${variantClasses[variant]} ${className ?? ""}`.trim()}
    >
      {label}
    </Link>
  );
};