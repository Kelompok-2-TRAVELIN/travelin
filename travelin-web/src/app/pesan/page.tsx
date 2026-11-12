import { AppShell } from "@/components/layout/AppShell";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { TextField } from "@/components/ui/TextField";
import { customerNav, users } from "@/lib/dummy-data";

// Empat pilihan kendaraan pada langkah 2 (frame 03).
const vehicles = [
  { name: "Mobil Economy", seats: "4 penumpang", selected: true },
  { name: "Mobil MPV", seats: "6 penumpang", selected: false },
  { name: "Mobil Premium", seats: "6 penumpang", selected: false },
  { name: "Travel", seats: "10-16 penumpang", selected: false },
];

// Baris ringkasan pada kartu estimasi tarif.
const fareRows = [
  { label: "Jarak", value: "4,8 km" },
  { label: "Estimasi waktu", value: "15 menit" },
  { label: "Jenis kendaraan", value: "Mobil Economy" },
];

type VehicleOptionProps = {
  name: string;
  seats: string;
  selected: boolean;
};

/** Kartu pilihan kendaraan: 92px, radius 10px, state terpilih biru. */
function VehicleOption({ name, seats, selected }: VehicleOptionProps) {
  return (
    <div
      className={`h-[92px] rounded-sm border px-[11px] pt-[17px] ${
        selected
          ? "border-primary bg-primary-soft"
          : "border-line bg-surface"
      }`}
    >
      <p className="text-note font-semibold text-ink">{name}</p>
      <p className="mt-[22px] text-label text-muted">{seats}</p>
    </div>
  );
}

/**
 * Frame 03 — Pesan Perjalanan
 * Desktop 1280x800: form 640px di kiri; peta 320x200, kartu tarif 320x250,
 * dan tombol lanjut di kolom kanan.
 */
export default function PesanPerjalananPage() {
  return (
    <AppShell
      user={users.customer}
      navItems={customerNav}
      activeHref="/pesan"
    >
      <h1 className="text-heading-lg font-bold text-ink">Pesan Perjalanan</h1>
      <p className="mt-1.5 text-body text-muted">
        Tentukan lokasi, pilih kendaraan, lalu lihat estimasi tarif.
      </p>

      <div className="mt-[23px] grid gap-6 xl:grid-cols-[minmax(0,1fr)_320px]">
        {/* Form pemesanan */}
        <Card className="px-[23px] pt-5 pb-[37px]">
          <h2 className="text-body-lg font-semibold text-ink">
            1. Lokasi jemput dan tujuan
          </h2>

          <div className="mt-3 space-y-4">
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

          <h2 className="mt-[26px] text-body-lg font-semibold text-ink">
            2. Pilih jenis kendaraan
          </h2>

          <div className="mt-[13px] grid grid-cols-2 gap-2.5 sm:grid-cols-[repeat(4,140px)]">
            {vehicles.map((vehicle) => (
              <VehicleOption key={vehicle.name} {...vehicle} />
            ))}
          </div>

          <h2 className="mt-5 text-body-lg font-semibold text-ink">
            3. Jadwal dan catatan (opsional)
          </h2>

          <div className="mt-[13px] space-y-4">
            <TextField
              id="schedule"
              name="schedule"
              label="Tanggal dan waktu jemput"
              defaultValue="14 Okt 2026, 14:30"
            />
            <TextField
              id="notes"
              name="notes"
              label="Catatan tambahan"
              defaultValue="Contoh: tunggu di depan minimarket, bawa 1 koper"
            />
          </div>
        </Card>

        {/* Kolom kanan: peta, estimasi tarif, tombol lanjut */}
        <div className="flex flex-col gap-4">
          <div className="flex h-[200px] items-start rounded-2xl bg-line-strong px-6 pt-[84px]">
            <p className="text-body-lg font-semibold text-muted">Peta rute</p>
          </div>

          <Card className="px-[23px] pt-[19px] pb-[5px]">
            <p className="text-body font-medium text-muted">Estimasi tarif</p>
            <p className="mt-[7px] text-display font-bold text-ink">
              Rp 42.000
            </p>

            <dl className="mt-[19px] space-y-[13px]">
              {fareRows.map((row) => (
                <div
                  key={row.label}
                  className="flex items-center justify-between gap-3 text-body"
                >
                  <dt className="text-muted">{row.label}</dt>
                  <dd className="text-right font-medium text-ink">
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-[17px] flex h-12 items-start rounded-xs bg-success-soft px-3 pt-3">
              <p className="text-label font-medium text-success">
                Harga sudah termasuk biaya layanan dan pajak.
              </p>
            </div>
          </Card>

          <Button href="/konfirmasi" className="w-full">
            Lanjut ke Konfirmasi
          </Button>
        </div>
      </div>
    </AppShell>
  );
}
