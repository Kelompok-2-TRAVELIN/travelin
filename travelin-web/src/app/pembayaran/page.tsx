import { AppShell } from "@/components/layout/AppShell";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Chip } from "@/components/ui/Chip";
import { TextField } from "@/components/ui/TextField";
import {
  customerNav,
  paymentMethods,
  paymentSummary,
  users,
} from "@/lib/dummy-data";

type PaymentMethodProps = {
  name: string;
  description: string;
  selected: boolean;
  popular?: boolean;
};

/**
 * Satu baris metode pembayaran: tinggi 58px, radio 18px di kiri,
 * nama + keterangan di tengah, chip opsional di kanan.
 */
function PaymentMethod({
  name,
  description,
  selected,
  popular,
}: PaymentMethodProps) {
  return (
    <div
      className={`relative flex min-h-[58px] items-start rounded-sm border px-4 py-[10px] xl:h-[58px] xl:py-0 xl:pt-[10px] ${
        selected
          ? "border-primary bg-primary-soft"
          : "border-line bg-surface"
      }`}
    >
      {/* Radio: cincin 18px; titik 8px hanya muncul saat terpilih. */}
      <span
        className={`mt-[10px] flex size-[18px] shrink-0 items-center justify-center rounded-full border-2 ${
          selected ? "border-primary" : "border-mist"
        }`}
        aria-hidden="true"
      >
        {selected ? <span className="size-2 rounded-full bg-primary" /> : null}
      </span>

      <div className="ml-[14px] min-w-0 flex-1">
        <p className="text-body font-medium text-ink max-sm:pr-[116px]">
          {name}
        </p>
        <p className="mt-[5px] text-label text-muted">{description}</p>
      </div>

      {popular ? (
        <Chip tone="primarySolid" className="absolute right-6 top-4">
          Paling populer
        </Chip>
      ) : null}
    </div>
  );
}

/**
 * Frame 05 — Pembayaran
 * Desktop 1280x800: kartu metode pembayaran 620x580 di kiri,
 * kartu ringkasan 344x290 + tombol bayar/kembali di kanan.
 */
export default function PembayaranPage() {
  return (
    <AppShell
      user={users.customer}
      navItems={customerNav}
      activeHref="/pesan"
    >
      <h1 className="text-heading-lg font-bold text-ink">Pembayaran</h1>
      <p className="mt-1.5 text-body text-muted">
        Pilih metode pembayaran yang paling mudah untukmu.
      </p>

      <div className="mt-[23px] grid gap-5 xl:grid-cols-[minmax(0,1fr)_344px]">
        {/* Kartu kiri: daftar metode, kode promo, dan catatan. */}
        <Card className="px-[23px] pt-[19px] pb-[21px] xl:h-[580px]">
          <h2 className="text-subtitle font-semibold text-ink">
            Metode pembayaran
          </h2>

          <div className="mt-[22px] space-y-2.5">
            {paymentMethods.map((method, index) => (
              <PaymentMethod
                key={method.name}
                {...method}
                // Frame 05 menampilkan QRIS sebagai metode terpilih.
                selected={index === 0}
              />
            ))}
          </div>

          <p className="mt-[26px] text-label font-medium text-muted">
            Kode promo
          </p>

          <div className="mt-[5px] flex flex-col gap-3 sm:flex-row sm:gap-4">
            <TextField
              id="promo"
              name="promo"
              placeholder="Masukkan kode promo"
              className="flex-1"
            />
            <Button
              variant="outline"
              size="sm"
              className="w-full sm:w-[136px]"
            >
              Gunakan
            </Button>
          </div>

          <div className="mt-[26px] flex h-12 items-center rounded-xs bg-warning-soft px-4 text-label text-warning">
            Jika pembayaran gagal, Anda dapat mencoba lagi atau memilih metode
            lain.
          </div>
        </Card>

        {/* Kolom kanan: ringkasan pesanan lalu tombol aksi. */}
        <div className="flex flex-col">
          <Card className="px-[23px] pt-[19px] pb-6 xl:h-[290px] xl:pb-0">
            <h2 className="text-subtitle font-semibold text-ink">
              Ringkasan pesanan
            </h2>

            <div className="mt-[22px] text-body text-muted">
              <p>{paymentSummary.route[0]}</p>
              <p className="mt-[7px]">{paymentSummary.route[1]}</p>
              <p className="mt-[17px] font-medium text-ink">
                {paymentSummary.vehicle}
              </p>
            </div>

            <div className="mt-[25px] border-t border-line" />

            <p className="mt-[19px] text-body font-medium text-muted">
              Total pembayaran
            </p>
            <p className="mt-[9px] text-display-sm font-bold text-ink">
              {paymentSummary.total}
            </p>
          </Card>

          <Button href="/status" className="mt-5 w-full">
            Bayar Sekarang
          </Button>
          <Button
            href="/konfirmasi"
            variant="outline"
            size="sm"
            className="mt-3 w-full"
          >
            Kembali
          </Button>
        </div>
      </div>
    </AppShell>
  );
}
