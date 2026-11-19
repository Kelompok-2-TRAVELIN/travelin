"use client";

import { useMemo, useSyncExternalStore } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Chip } from "@/components/ui/Chip";
import { Stars } from "@/components/ui/Stars";
import {
  ratingHistory as seedRatings,
  type RatingEntry,
} from "@/lib/dummy-data";
import {
  getRatingsSnapshot,
  parseStoredRatings,
  subscribeToRatings,
} from "@/lib/ratings";

function formatAverage(ratings: RatingEntry[]) {
  if (ratings.length === 0) {
    return "—";
  }

  const total = ratings.reduce((sum, rating) => sum + rating.stars, 0);
  return (total / ratings.length).toFixed(1).replace(".", ",");
}

function averageStars(ratings: RatingEntry[]) {
  if (ratings.length === 0) {
    return 0;
  }

  const total = ratings.reduce((sum, rating) => sum + rating.stars, 0);
  return Math.round(total / ratings.length);
}

/**
 * RatingHistoryList — daftar ulasan pelanggan.
 * Contoh dari dummy-data digabung dengan rating yang dikirim dari frame 06.
 * localStorage dibaca lewat `useSyncExternalStore` supaya aman saat hidrasi
 * (server merender contoh, browser menambahkan rating tersimpan).
 */
export function RatingHistoryList() {
  const storedJson = useSyncExternalStore(
    subscribeToRatings,
    getRatingsSnapshot,
    () => "",
  );

  const ratings = useMemo(() => {
    const stored = parseStoredRatings(storedJson);
    return stored.length > 0 ? [...stored, ...seedRatings] : seedRatings;
  }, [storedJson]);

  const average = formatAverage(ratings);

  return (
    <div className="mt-[23px] grid gap-5 xl:grid-cols-[minmax(0,1fr)_320px]">
      <Card className="px-card pt-5 pb-2">
        <h2 className="text-subtitle font-semibold text-ink">Ulasan Anda</h2>

        <div className="mt-[17px] h-px w-full bg-line" />

        {ratings.length === 0 ? (
          <p className="py-6 text-body text-muted">
            Belum ada rating. Rating bisa dikirim setelah perjalanan selesai.
          </p>
        ) : (
          <ul className="divide-y divide-line">
            {ratings.map((rating) => (
              <li key={rating.id} className="py-4">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                  <Stars value={rating.stars} className="text-body" />
                  <span className="text-label font-medium text-muted">
                    {rating.date}
                  </span>
                  <Chip tone="primary" className="ml-auto">
                    {rating.driver}
                  </Chip>
                </div>

                <p className="mt-2 text-body font-medium text-ink">
                  {rating.route}
                </p>
                <p className="mt-1 text-body italic text-muted">
                  {rating.comment ? `“${rating.comment}”` : "Tanpa komentar"}
                </p>
              </li>
            ))}
          </ul>
        )}
      </Card>

      <Card className="h-fit px-card pt-5 pb-6">
        <h2 className="text-subtitle font-semibold text-ink">Ringkasan</h2>

        <p className="mt-4 text-display text-ink">
          <span className="font-bold">{average}</span>
          <span className="ml-1 text-body text-muted">dari 5</span>
        </p>
        <Stars
          value={averageStars(ratings)}
          label={`Rata-rata ${average} dari 5`}
          className="mt-2 text-subtitle"
        />
        <p className="mt-2 text-body text-muted">
          {ratings.length} ulasan tersimpan
        </p>

        <Button href="/status" size="sm" className="mt-5 w-full">
          Beri Rating Perjalanan
        </Button>
      </Card>
    </div>
  );
}
