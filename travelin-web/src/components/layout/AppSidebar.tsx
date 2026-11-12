import Link from "next/link";
import type { ReactNode } from "react";

export type NavItem = {
  label: string;
  /** Kosongkan kalau halaman tujuan belum ada di desain. */
  href?: string;
};

type AppSidebarProps = {
  items: NavItem[];
  /** Menu yang sedang dibuka, dicocokkan dengan href. */
  activeHref?: string;
  /** Konten di bagian bawah sidebar (contoh: tombol Keluar untuk driver/admin). */
  footer?: ReactNode;
  /** Jarak bawah footer; tiap frame bisa berbeda (frame 07/08: 116px). */
  footerClassName?: string;
};

/**
 * AppSidebar — menu samping 240px pada desktop.
 * Di layar kecil menu berubah menjadi baris tab yang bisa digeser ke samping
 * (adaptasi mobile, karena desain Figma hanya menyediakan versi desktop).
 */
export function AppSidebar({
  items,
  activeHref,
  footer,
  footerClassName = "pb-5",
}: AppSidebarProps) {
  return (
    <aside className="flex shrink-0 flex-col border-line bg-surface max-lg:border-b lg:w-sidebar lg:border-r">
      <ul className="flex flex-wrap gap-2 px-4 py-3 lg:flex-col lg:flex-nowrap lg:py-5">
        {items.map((item) => {
          const isActive = item.href === activeHref;

          const className = [
            "flex h-nav shrink-0 items-center rounded-xs px-4 text-body whitespace-nowrap",
            isActive
              ? "bg-primary-soft font-semibold text-primary"
              : "font-medium text-muted",
          ].join(" ");

          return (
            <li key={item.label}>
              {item.href ? (
                <Link href={item.href} className={className}>
                  {item.label}
                </Link>
              ) : (
                // Menu tanpa frame desain: ditampilkan, tapi belum bisa diklik.
                <span className={className} aria-disabled="true">
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ul>

      {footer ? (
        <div className={`mt-auto hidden px-4 lg:block ${footerClassName}`}>
          {footer}
        </div>
      ) : null}
    </aside>
  );
}
