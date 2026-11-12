import type { ReactNode } from "react";
import { AppHeader, type AppUser } from "./AppHeader";
import { AppSidebar, type NavItem } from "./AppSidebar";

type AppShellProps = {
  children: ReactNode;
  user: AppUser;
  navItems: NavItem[];
  activeHref?: string;
  sidebarFooter?: ReactNode;
  /** Jarak bawah footer sidebar (frame 07/08: 116px). */
  sidebarFooterClassName?: string;
  /** Penyesuaian padding <main> (mis. jarak judul tiap frame berbeda 4px). */
  contentClassName?: string;
};

/**
 * AppShell — kerangka halaman: header 64px + sidebar 240px + konten.
 * Padding konten mengikuti frame: 24px kiri, 32px kanan, 24px atas.
 */
export function AppShell({
  children,
  user,
  navItems,
  activeHref,
  sidebarFooter,
  sidebarFooterClassName,
  contentClassName = "lg:pt-6",
}: AppShellProps) {
  return (
    <div className="flex min-h-screen flex-col bg-canvas">
      <AppHeader user={user} />

      <div className="flex flex-1 flex-col lg:flex-row">
        <AppSidebar
          items={navItems}
          activeHref={activeHref}
          footer={sidebarFooter}
          footerClassName={sidebarFooterClassName}
        />

        <main
          className={`flex-1 px-4 pb-8 pt-6 sm:px-6 lg:pl-6 lg:pr-8 ${contentClassName}`}
        >
          {children}
        </main>
      </div>
    </div>
  );
}
