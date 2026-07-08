import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  children: ReactNode;
};

const styles = {
  primary: "bg-orange-500 text-white hover:bg-orange-600",
  secondary: "bg-navy-900 text-white hover:bg-navy-800",
  outline: "border border-navy-200 bg-white text-navy-900 hover:border-orange-500 hover:text-orange-600"
};

export function Button({ href, variant = "primary", className = "", children, ...props }: ButtonProps) {
  const classes = `focus-ring inline-flex min-h-11 items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold shadow-sm transition ${styles[variant]} ${className}`;

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");

    if (isExternal) {
      return (
        <a className={classes} href={href}>
          {children}
        </a>
      );
    }

    return (
      <Link className={classes} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
