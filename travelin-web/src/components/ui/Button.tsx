import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "outline" | "danger" | "dangerGhost";
type ButtonSize = "md" | "sm" | "xs";

type ButtonProps = {
  children: ReactNode;
  /** Jika diisi, tombol dirender sebagai tautan (Link). URL http(s) dibuka di tab baru. */
  href?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  type?: "button" | "submit";
  disabled?: boolean;
  className?: string;
};

// Gaya dasar tombol: teks 14px Semi Bold, sudut 8px (sesuai desain).
const base =
  "inline-flex items-center justify-center rounded-xs font-semibold text-body whitespace-nowrap";

const sizes: Record<ButtonSize, string> = {
  md: "h-action px-6", // 48px — tombol aksi utama
  sm: "h-action-sm px-4", // 44px — tombol sekunder/demo
  xs: "h-action-xs px-4", // 40px — tombol di dalam tabel (frame 08)
};

const variants: Record<ButtonVariant, string> = {
  primary: "bg-primary text-white",
  outline: "border border-line bg-surface text-ink",
  danger: "border border-danger bg-surface text-danger",
  // Tombol teks merah tanpa border (frame 06 "Batalkan Pesanan").
  dangerGhost: "text-danger",
};

/**
 * Button — dipakai untuk semua tombol di aplikasi.
 * Kalau `href` diberikan, komponen ini menjadi tautan agar navigasi
 * antar halaman tetap memakai <Link> (tanpa reload).
 */
export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  type = "button",
  disabled = false,
  className = "",
}: ButtonProps) {
  const classes = [
    base,
    sizes[size],
    variants[variant],
    disabled ? "cursor-not-allowed opacity-60" : "",
    className,
  ].join(" ");

  if (href) {
    // Tautan eksternal (WhatsApp, email, telepon) tidak memakai router Next.
    if (/^https?:\/\//.test(href)) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} disabled={disabled}>
      {children}
    </button>
  );
}
