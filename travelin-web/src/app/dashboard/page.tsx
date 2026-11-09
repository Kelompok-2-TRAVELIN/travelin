import { AppShell } from "@/components/layout/AppShell";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Chip } from "@/components/ui/Chip";
import { TextField } from "@/components/ui/TextField";
import { customerNav, tripHistory, users } from "@/lib/dummy-data";

/**
 * Frame 02 — Dashboard Pelanggan
 * Desktop 1280x800: kartu form 640px + kartu pesanan aktif 320px,
 * lalu kartu riwayat 984px di bawahnya.
 */
export default function DashboardPage() {
  return (
    <AppShell
      user={users.customer}
      navItems={customerNav}
      activeHref="/dashboard"
      contentClassName="lg:pt-7"
    >
      <h1 className="text-heading-lg font-bold text-ink">Halo, Andi</h1>
      <p className="mt-1.5 text-body text-muted">
        Mau pergi ke mana hari ini?
      </p>

      <div className="mt-[23px] grid gap-6 xl:grid-cols-[minmax(0,1fr)_320px]">
        {/* Kartu pesan sekarang */}
        <Card className="px-card pt-5 pb-[27px]">
          <h2 className="text-subtitle font-semibold text-ink">
            Pesan sekarang
          </h2>

          <div className="mt-[21px] grid gap-4 sm:grid-cols-2">
            <TextField
              id="pickup"
              name="pickup"
              label="Lokasi jemput"
              defaultValue="Jl. Ahmad Yani No. 12, Pontianak"
            />
            <TextField
              id="destination"
              name="destination"
              label="Tujuan"
              defaultValue="Jl. Tanjungpura No. 45, Pontianak"
            />
          </div>

          <Button href="/pesan" className="mt-9 w-full">
            Cari Tarif
          </Button>
        </Card>

        {/* Kartu pesanan aktif */}
        <Card className="px-card pt-5 pb-[27px]">
          <h2 className="text-subtitle font-semibold text-ink">
            Pesanan aktif
          </h2>

          <div className="mt-[21px]">
            <Chip>Belum ada</Chip>
          </div>

          <p className="mt-[18px] text-body text-muted">
            Pesanan yang sedang berjalan akan muncul di sini beserta status dan
            info driver.
          </p>
        </Card>
      </div>

      {/* Kartu riwayat terakhir */}
      <Card className="mt-6 px-card pt-5 pb-7">
        <h2 className="text-subtitle font-semibold text-ink">
          Riwayat terakhir
        </h2>

        <div className="mt-[17px] h-px w-full bg-line" />

        <ul className="divide-y divide-line">
          {tripHistory.map((trip) => (
            <li
              key={trip.date}
              className="grid gap-2 py-4 xl:h-[70px] xl:grid-cols-[176px_minmax(0,1fr)_180px_140px] xl:items-start xl:gap-0 xl:py-0 xl:pt-[17px]"
            >
              <span className="text-body font-medium text-muted">
                {trip.date}
              </span>
              <span className="text-body font-medium text-ink">
                {trip.route}
              </span>

              {/* Di desktop chip & tarif menjadi kolom terpisah (display: contents). */}
              <div className="flex items-center justify-between gap-3 xl:contents">
                <Chip
                  tone={trip.status === "Selesai" ? "success" : "danger"}
                  className="xl:-mt-1 xl:justify-self-start"
                >
                  {trip.status}
                </Chip>
                <span className="text-body font-semibold text-ink xl:self-start">
                  {trip.fare}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </Card>
    </AppShell>
  );
}
