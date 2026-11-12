import { AppShell } from "@/components/layout/AppShell";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import {
  customerNav,
  fareBreakdown,
  tripSummary,
  users,
} from "@/lib/dummy-data";

/**
 * Frame 04 — Konfirmasi Pesanan
 * Desktop 1280x800: kartu ringkasan 620x520 di kiri, kartu rincian tarif
 * 344x380 + tiga tombol aksi di kolom kanan.
 */
export default function KonfirmasiPesananPage() {
  return (
    <AppShell
      user={users.customer}
      navItems={customerNav}
      activeHref="/pesan"
    >
      <h1 className="text-heading-lg font-bold text-ink">Konfirmasi Pesanan</h1>
      <p className="mt-1.5 text-body text-muted">
        Periksa kembali detail perjalanan sebelum melanjutkan ke pembayaran.
      </p>

      <div className="mt-[23px] grid gap-5 xl:grid-cols-[minmax(0,1fr)_344px]">
        {/* Kartu kiri: ringkasan 7 baris, tiap baris dipisah garis tipis. */}
        <Card className="px-[23px] pt-[19px] xl:h-[520px]">
          <h2 className="text-subtitle font-semibold text-ink">
            Ringkasan perjalanan
          </h2>

          <dl className="mt-4">
            {tripSummary.map((row) => (
              <div
                key={row.label}
                className="flex flex-col gap-1 border-t border-line pb-4 pt-[15px] text-body sm:flex-row sm:gap-0 sm:pb-[27px]"
              >
                <dt className="text-muted sm:w-[196px] sm:shrink-0">{row.label}</dt>
                <dd className="min-w-0 flex-1 font-medium text-ink">
                  {row.value}
                </dd>
              </div>
            ))}
          </dl>
        </Card>

        {/* Kolom kanan: rincian tarif lalu tombol-tombol aksi. */}
        <div className="flex flex-col">
          <Card className="px-[23px] pt-[19px] pb-6 xl:h-[380px] xl:pb-0">
            <h2 className="text-subtitle font-semibold text-ink">
              Rincian tarif
            </h2>

            <dl className="mt-[28px] space-y-[21px] text-body">
              {fareBreakdown.map((row) => (
                <div key={row.label} className="flex justify-between gap-3">
                  <dt className="text-muted">{row.label}</dt>
                  <dd className="text-right font-medium text-ink">
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-[31px] border-t border-line" />

            <div className="mt-[13px] flex items-center justify-between gap-3">
              <p className="text-body font-medium text-muted">Total</p>
              <p className="text-heading-md font-bold text-ink">Rp 42.000</p>
            </div>

            <p className="mt-[29px] text-label text-muted">
              Estimasi, bisa berubah sesuai kondisi lalu lintas.
            </p>
          </Card>

          <Button href="/pembayaran" className="mt-5 w-full">
            Konfirmasi Pesanan
          </Button>
          <Button
            href="/pesan"
            variant="outline"
            size="sm"
            className="mt-3 w-full"
          >
            Kembali
          </Button>
          <Button
            href="/dashboard"
            variant="danger"
            size="sm"
            className="mt-3 w-full"
          >
            Batalkan pesanan
          </Button>
        </div>
      </div>
    </AppShell>
  );
}
