"use client";

import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-[#C9A14A] text-black hover:scale-105 hover:shadow-[0_0_25px_rgba(201,161,74,.35)]"
      : "border border-white/30 text-white hover:bg-white hover:text-black";

  const common =
    `inline-flex items-center justify-center rounded-full px-8 py-4 text-sm uppercase tracking-[0.25em] transition-all duration-300 ${styles} ${className}`;

  if (href) {
    return (
      <Link href={href} className={common}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={common}>
      {children}
    </button>
  );
}