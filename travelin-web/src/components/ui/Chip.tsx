import type { ReactNode } from "react";

type ChipTone = "neutral" | "success" | "danger" | "warning" | "primary";

type ChipProps = {
  children: ReactNode;
  tone?: ChipTone;
  className?: string;
};

// Warna chip sesuai frame 02: abu (Belum ada), hijau (Selesai), merah (Dibatalkan).
const tones: Record<ChipTone, string> = {
  neutral: "bg-line text-muted",
  success: "bg-success-soft text-success",
  danger: "bg-danger-soft text-danger",
  warning: "bg-warning-soft text-warning",
  primary: "bg-primary-soft text-primary",
};

/**
 * Chip — label status kecil: tinggi 26px, radius 13px, teks 12px Semi Bold.
 */
export function Chip({ children, tone = "neutral", className = "" }: ChipProps) {
  return (
    <span
      className={`inline-flex h-chip items-center rounded-lg px-3 text-label font-semibold whitespace-nowrap ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
