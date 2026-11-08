import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  /** Padding default 24px; halaman login memakai p-panel (32px). */
  className?: string;
};

/**
 * Card — wadah putih dengan border tipis dan sudut 16px.
 * Dipakai untuk kartu login, kartu form, kartu ringkasan, dll.
 */
export function Card({ children, className = "" }: CardProps) {
  return (
    <section
      className={`rounded-2xl border border-line bg-surface ${className}`}
    >
      {children}
    </section>
  );
}
