import Image from "next/image";
import { AppShell } from "@/components/layout/AppShell";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Chip } from "@/components/ui/Chip";
import { TextField } from "@/components/ui/TextField";
import {
  customerNav,
  tripActiveStep,
  tripDetail,
  tripDriver,
  tripRating,
  tripSteps,
  users,
} from "@/lib/dummy-data";

/**
 * Stepper — lima tahap perjalanan dengan garis penghubung.
 * Langkah sebelum langkah aktif berwarna hijau, langkah aktif biru,
 * langkah setelahnya abu-abu. Label step sengaja memakai posisi absolut
 * agar tetap sejajar persis seperti frame 06 di Figma.
 */
function TripStepper() {
  return (
    // Di layar kecil stepper bisa digeser horizontal agar tidak terpotong.
    <div className="overflow-x-auto">
      <ol className="relative flex h-[68px] w-[504px] pl-1">
        {tripSteps.map((label, index) => {
          const done = index < tripActiveStep;
          const active = index === tripActiveStep;

          return (
            <li key={label} className="contents">
              {/* Garis penghubung: hijau bila sudah melewati langkah aktif. */}
              {index > 0 ? (
                <span
                  aria-hidden="true"
                  className={`mx-1 mt-[13px] h-[3px] w-[82px] shrink-0 rounded-full ${
                    index <= tripActiveStep ? "bg-success" : "bg-line"
                  }`}
                />
              ) : null}

              <div className="relative w-7 shrink-0">
                <span
                  className={`flex size-7 items-center justify-center rounded-full text-note font-semibold ${
                    done
                      ? "bg-success text-white"
                      : active
                        ? "bg-primary text-white"
                        : "border border-line bg-surface text-muted"
                  }`}
                >
                  {index + 1}
                </span>
                <span className="absolute -left-[10px] top-[38px] w-24 text-center text-label text-muted">
                  {label}
                </span>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

/**
 * Frame 06 — Status Trip dan Rating
 * Desktop 1280x800: kartu status 620x330 di kiri, kartu detail 344x330
 * di kanan, lalu kartu rating selebar 984px di bawahnya.
 */
export default function StatusTripPage() {
  return (
    <AppShell
      user={users.customer}
      navItems={customerNav}
      activeHref="/pesan"
    >
      <h1 className="text-heading-lg font-bold text-ink">Status Perjalanan</h1>
      <p className="mt-1.5 text-body text-muted">
        Pantau posisi proses pesanan Anda.
      </p>

      <div className="mt-[23px] grid gap-5 xl:grid-cols-[minmax(0,1fr)_344px]">
        {/* Kartu kiri: progres perjalanan + info driver. */}
        <Card className="px-[23px] pt-[19px] pb-6 xl:h-[330px] xl:pb-0">
          <h2 className="text-subtitle font-semibold text-ink">
            Status pesanan
          </h2>

          <div className="mt-[32px]">
            <TripStepper />
          </div>

          {/* Kartu driver memakai latar abu muda agar terpisah dari kartu putih. */}
          <div className="mt-7 flex items-start gap-4 rounded-md bg-canvas p-5 xl:h-[130px]">
            <Image
              src="/assets/figma/avatar.svg"
              alt=""
              width={56}
              height={56}
              className="shrink-0 rounded-full"
            />
            <div className="min-w-0">
              <p className="text-body-lg font-semibold text-ink">
                {tripDriver.name}
              </p>
              <p className="mt-[7px] text-body text-muted">
                {tripDriver.vehicle}
              </p>
              <div className="mt-[15px] flex flex-wrap gap-6">
                <Chip tone="warning">{tripDriver.rating}</Chip>
                <Chip tone="primary">{tripDriver.eta}</Chip>
              </div>
            </div>
          </div>
        </Card>

        {/* Kartu kanan: rincian perjalanan dan pembatalan. */}
        <Card className="px-[23px] pt-[19px] pb-6 xl:h-[330px] xl:pb-0">
          <h2 className="text-subtitle font-semibold text-ink">
            Detail perjalanan
          </h2>

          <p className="mt-[18px] text-body text-muted">
            {tripDetail.pickupLabel}
          </p>
          <p className="mt-[5px] text-body font-medium text-ink">
            {tripDetail.pickup}
          </p>

          <p className="mt-[17px] text-body text-muted">
            {tripDetail.destinationLabel}
          </p>
          <p className="mt-[5px] text-body font-medium text-ink">
            {tripDetail.destination}
          </p>

          <p className="mt-[9px] text-body text-muted">
            {tripDetail.fareLabel}
          </p>
          <p className="mt-[5px] text-title-lg font-bold text-ink">
            {tripDetail.fare}
          </p>

          <div className="mt-[13px]">
            <Chip tone="neutral">{tripDetail.paymentStatus}</Chip>
          </div>

          <Button
            href="/dashboard"
            variant="dangerGhost"
            size="sm"
            className="mt-4 w-full"
          >
            Batalkan Pesanan
          </Button>
        </Card>
      </div>

      {/* Kartu rating selebar dua kolom di atas. */}
      <Card className="mt-5 px-[23px] pt-[19px] pb-6 xl:h-[230px] xl:pb-0">
        <h2 className="text-body-lg font-semibold text-ink">
          {tripRating.title}
        </h2>

        {/* Bintang rating: 4 terisi, 1 kosong (sesuai desain). */}
        <div
          className="mt-[18px] flex gap-2 text-display-sm"
          aria-label={`Rating ${tripRating.filledStars} dari 5`}
        >
          {Array.from({ length: 5 }, (_, index) => (
            <span
              key={index}
              aria-hidden="true"
              className={`w-8 text-center ${
                index < tripRating.filledStars ? "text-star" : "text-line"
              }`}
            >
              ★
            </span>
          ))}
        </div>

        <div className="mt-4 flex flex-col gap-3 xl:flex-row xl:items-start xl:gap-9">
          <TextField
            id="komentar"
            name="komentar"
            label={tripRating.commentLabel}
            placeholder={tripRating.commentPlaceholder}
            className="xl:w-[680px]"
          />
          <Button type="button" size="sm" className="w-full xl:mt-5 xl:w-[220px]">
            Kirim Rating
          </Button>
        </div>
      </Card>
    </AppShell>
  );
}
