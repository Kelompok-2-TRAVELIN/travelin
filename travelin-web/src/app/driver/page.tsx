import Link from "next/link";
import { AppShell } from "@/components/layout/AppShell";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Chip } from "@/components/ui/Chip";
import {
  driverAvailability,
  driverNav,
  driverStats,
  driverTripActions,
  incomingOrder,
  users,
} from "@/lib/dummy-data";

/**
 * Kartu statistik kecil (Pesanan masuk / Selesai hari ini).
 * Angka besar berwarna hijau sesuai frame 07.
 */
function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <Card className="px-5 pt-[17px] xl:h-[100px]">
      <p className="text-note font-semibold text-ink">{label}</p>
      <p className="mt-[10px] text-display font-bold text-success">{value}</p>
    </Card>
  );
}

/**
 * Frame 07 — Dashboard Driver
 * Desktop 1280x800: baris kartu status 480/240/232, kartu pesanan masuk
 * 984x300, lalu kartu update status 984x150.
 */
export default function DriverDashboardPage() {
  return (
    <AppShell
      user={users.driver}
      navItems={driverNav}
      activeHref="/driver"
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
      <h1 className="text-heading-lg font-bold text-ink">Dashboard Driver</h1>

      {/* Baris atas: status online + dua kartu statistik. */}
      <div className="mt-[18px] grid gap-4 md:grid-cols-2 xl:grid-cols-[480px_240px_232px]">
        <Card className="relative px-5 pt-[17px] pb-5 md:col-span-2 xl:col-span-1 xl:h-[100px] xl:pb-0">
          <p className="text-note font-semibold text-ink">
            {driverAvailability.title}
          </p>

          <div className="mt-4 flex items-center gap-[21px]">
            <Chip tone="success">{driverAvailability.status}</Chip>
            <p className="text-note text-muted">{driverAvailability.note}</p>
          </div>

          {/* Toggle online: hanya tampilan (belum ada backend). Di desktop
              diposisikan absolut agar teks catatan tetap satu baris. */}
          <span
            role="switch"
            aria-checked="true"
            aria-label="Status online driver"
            className="absolute right-5 top-[17px] flex h-[30px] w-14 shrink-0 items-center justify-end rounded-full bg-success p-1 xl:right-6 xl:top-[34px]"
          >
            <span className="size-[22px] rounded-full bg-surface" />
          </span>
        </Card>

        {driverStats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>

      {/* Kartu pesanan masuk. */}
      <Card className="mt-6 px-[23px] pt-[17px] pb-8 xl:h-[300px] xl:pb-0">
        <div className="flex items-center gap-4">
          <h2 className="text-subtitle font-semibold text-ink">Pesanan masuk</h2>
          <Chip tone="primary">{incomingOrder.id}</Chip>
        </div>

        <dl className="mt-[28px] space-y-[17px]">
          {incomingOrder.rows.map((row) => (
            <div key={row.label} className="flex items-center gap-4">
              <dt className="w-[100px] shrink-0 text-note text-muted">
                {row.label}
              </dt>
              <dd className="min-w-0 text-body font-medium text-ink">
                {row.value}
              </dd>
            </div>
          ))}
          <div className="-mt-1 flex items-center gap-4">
            <dt className="w-[100px] shrink-0 text-note text-muted">
              {incomingOrder.fareLabel}
            </dt>
            <dd className="text-subtitle font-bold text-ink">
              {incomingOrder.fare}
            </dd>
          </div>
        </dl>

        <div className="mt-[28px] flex flex-col gap-4 sm:flex-row">
          <Button type="button" className="w-full sm:w-[200px]">
            Terima
          </Button>
          <Button
            type="button"
            variant="outline"
            className="w-full sm:w-[200px]"
          >
            Tolak
          </Button>
        </div>
      </Card>

      {/* Kartu update status perjalanan. */}
      <Card className="mt-5 px-[23px] pt-[19px] pb-6 xl:h-[150px] xl:pb-0">
        <h2 className="text-subtitle font-semibold text-ink">
          Update status perjalanan
        </h2>

        <div className="mt-[30px] flex flex-col gap-4 sm:flex-row">
          {driverTripActions.map((action, index) => (
            <Button
              key={action}
              type="button"
              variant={index === driverTripActions.length - 1 ? "primary" : "outline"}
              className="w-full sm:w-[220px]"
            >
              {action}
            </Button>
          ))}
        </div>
      </Card>
    </AppShell>
  );
}
