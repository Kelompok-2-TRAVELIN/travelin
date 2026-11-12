import Link from "next/link";
import { AppShell } from "@/components/layout/AppShell";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { StatCard } from "@/components/ui/StatCard";
import {
  adminNav,
  adminStats,
  fareParameters,
  pendingOrders,
  users,
} from "@/lib/dummy-data";

/**
 * Frame 08 — Dashboard Admin
 * Desktop 1280x800: tiga kartu statistik (300/300/352), tabel pesanan
 * menunggu assignment 984x300, lalu kartu parameter tarif 984x150.
 */
export default function AdminDashboardPage() {
  return (
    <AppShell
      user={users.admin}
      navItems={adminNav}
      activeHref="/admin"
      sidebarFooterClassName="pb-[116px]"
      sidebarFooter={
        <Link
          href="/login"
          className="flex h-nav items-center rounded-xs px-4 text-body font-medium text-danger"
        >
          Keluar
        </Link>
      }
    >
      <h1 className="text-heading-lg font-bold text-ink">Dashboard Admin</h1>

      {/* Ringkasan: angka berwarna biru, hijau, dan oranye sesuai desain. */}
      <div className="mt-[18px] grid gap-4 md:grid-cols-3 xl:grid-cols-[300px_300px_minmax(0,1fr)]">
        {adminStats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>

      {/* Tabel pesanan yang belum punya driver. */}
      <Card className="mt-6 px-[23px] pt-[19px] pb-6 xl:h-[300px] xl:pb-0">
        <h2 className="flex h-10 items-start text-subtitle font-semibold text-ink">
          Pesanan menunggu assignment
        </h2>

        <ul className="border-t border-line">
          {pendingOrders.map((order) => (
            <li
              key={order.id}
              className="border-b border-line py-4 last:border-b-0 xl:h-[70px] xl:py-0 xl:pt-[9px]"
            >
              {/* Di mobile jadi dua kolom sederhana; di desktop lima kolom
                  persis seperti posisi teks pada frame 08. */}
              <div className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-x-4 gap-y-1 xl:h-full xl:grid-cols-[76px_400px_140px_140px_180px] xl:gap-0">
                <span className="text-body font-medium text-ink xl:pt-[10px]">
                  {order.id}
                </span>
                <span className="text-body text-ink xl:pt-[10px]">
                  {order.route}
                </span>
                <span className="text-body text-muted xl:pt-[10px] xl:text-ink">
                  {order.vehicle}
                </span>
                <span className="text-right text-body font-semibold text-ink xl:pt-[10px] xl:text-left xl:font-normal">
                  {order.fare}
                </span>
                <Button
                  type="button"
                  size="xs"
                  className="col-span-2 mt-1 w-full xl:col-span-1 xl:mt-0 xl:w-[180px]"
                >
                  Assign Driver
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </Card>

      {/* Parameter tarif: hanya admin yang bisa mengubah. */}
      <Card className="mt-5 px-[23px] pt-[19px] pb-6 xl:h-[150px] xl:pb-0">
        <h2 className="text-subtitle font-semibold text-ink">
          Parameter tarif (hanya admin)
        </h2>

        <div className="mt-[22px] grid grid-cols-2 gap-4 sm:grid-cols-4 xl:grid-cols-[200px_200px_200px_180px_156px] xl:gap-0">
          {fareParameters.map((parameter) => (
            <div key={parameter.label}>
              <p className="text-note text-muted">{parameter.label}</p>
              <p className="mt-[6px] text-subtitle font-semibold text-ink">
                {parameter.value}
              </p>
            </div>
          ))}

          <Button
            type="button"
            variant="outline"
            size="xs"
            className="col-span-2 w-full sm:col-span-4 xl:col-span-1 xl:mt-[22px] xl:w-[156px]"
          >
            Ubah Tarif
          </Button>
        </div>
      </Card>
    </AppShell>
  );
}
