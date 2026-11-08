import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { TextField } from "@/components/ui/TextField";

// Tiga poin keunggulan pada panel kiri (teks persis dari frame 01).
const benefits = [
  "Estimasi tarif instan",
  "Status perjalanan real-time",
  "Pembayaran fleksibel",
];

/**
 * Frame 01 — Login / Daftar
 * Desktop 1280x800: panel navy 640px di kiri, kartu login 480px di kanan.
 * Mobile (adaptasi): panel navy di atas, kartu login di bawah.
 */
export default function LoginPage() {
  return (
    <main className="min-h-screen bg-canvas lg:grid lg:grid-cols-2">
      {/* Panel kiri: branding Travelin */}
      <section className="bg-navy px-6 py-10 sm:px-10 lg:flex lg:min-h-screen lg:flex-col lg:px-16 lg:py-16">
        <p className="text-heading-lg font-bold text-white">Travelin</p>

        <h1 className="mt-12 max-w-[500px] text-display font-bold text-white sm:text-display-lg lg:mt-[122px]">
          Pesan travel dan taksi online dengan mudah
        </h1>

        <p className="mt-8 max-w-[480px] text-body-lg text-mist lg:mt-16">
          Estimasi tarif instan, status perjalanan real-time, dan pembayaran
          fleksibel di seluruh Kalimantan Barat.
        </p>

        <ul className="mt-8 space-y-[18px] lg:mt-[60px]">
          {benefits.map((benefit) => (
            <li key={benefit} className="flex items-center gap-3">
              <Image
                src="/assets/figma/dot-primary.svg"
                alt=""
                width={10}
                height={10}
                aria-hidden
              />
              <span className="text-body-md font-medium text-white">
                {benefit}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* Panel kanan: kartu login */}
      <section className="flex items-center justify-center px-6 py-10 sm:px-10 lg:px-0 lg:py-0">
        <Card className="w-full max-w-[480px] p-6 sm:p-panel lg:h-[580px]">
          <h2 className="text-heading font-bold text-ink">
            Masuk ke Travelin
          </h2>
          <p className="mt-[7px] text-body text-muted">
            Gunakan email atau nomor HP Anda.
          </p>

          <div className="mt-[27px] space-y-5">
            <TextField
              id="email"
              name="email"
              label="Email / No. HP"
              placeholder="nama@email.com"
              autoComplete="username"
            />
            <TextField
              id="password"
              name="password"
              type="password"
              label="Password"
              placeholder="••••••••"
              autoComplete="current-password"
            />
          </div>

          <Button href="/dashboard" size="md" className="mt-[30px] w-full">
            Masuk
          </Button>

          <p className="mt-[18px] text-body text-muted">
            Belum punya akun?{" "}
            <Link
              href="/login"
              className="font-semibold text-primary"
              aria-label="Daftar akun baru"
            >
              Daftar
            </Link>
          </p>

          <div className="mt-[31px] h-px w-full bg-line" />

          <p className="mt-[19px] text-label font-medium text-muted">
            Demo peran lain (untuk prototype)
          </p>

          <div className="mt-[13px] grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
            <Button href="/driver" variant="outline" size="sm">
              Masuk sebagai Driver
            </Button>
            <Button href="/admin" variant="outline" size="sm">
              Masuk sebagai Admin
            </Button>
          </div>
        </Card>
      </section>
    </main>
  );
}
