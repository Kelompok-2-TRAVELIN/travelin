"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { TextField } from "@/components/ui/TextField";
import { saveRating } from "@/lib/ratings";

type RatingFormProps = {
  title: string;
  commentLabel: string;
  commentPlaceholder: string;
  /** Bintang yang terisi saat form pertama dibuka (mengikuti frame 06). */
  defaultStars?: number;
  driver: string;
  route: string;
};

const MAX_COMMENT_LENGTH = 200;

/**
 * RatingForm — kartu "Beri rating" pada frame 06.
 * Bintang bisa dipilih, komentar opsional, dan hasil kirim disimpan ke
 * localStorage lalu ditampilkan di halaman /riwayat-rating.
 */
export function RatingForm({
  title,
  commentLabel,
  commentPlaceholder,
  defaultStars = 0,
  driver,
  route,
}: RatingFormProps) {
  const [stars, setStars] = useState(defaultStars);
  const [comment, setComment] = useState("");
  const [saved, setSaved] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (stars < 1) {
      return;
    }

    saveRating({
      id:
        typeof crypto !== "undefined" && "randomUUID" in crypto
          ? crypto.randomUUID()
          : `rating-${Date.now()}`,
      date: new Date().toLocaleDateString("id-ID", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
      driver,
      route,
      stars,
      comment: comment.trim(),
    });

    setComment("");
    setSaved(true);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-body-lg font-semibold text-ink">{title}</h2>

      <div className="mt-[18px] flex flex-wrap items-center gap-x-4 gap-y-2">
        <div
          className="flex gap-2 text-display-sm"
          role="group"
          aria-label="Pilih jumlah bintang"
        >
          {Array.from({ length: 5 }, (_, index) => {
            const value = index + 1;
            const active = value <= stars;

            return (
              <button
                key={value}
                type="button"
                onClick={() => {
                  setStars(value);
                  setSaved(false);
                }}
                aria-label={`Beri ${value} dari 5 bintang`}
                aria-pressed={value === stars}
                className={`w-8 cursor-pointer rounded-xs text-center transition-colors focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                  active ? "text-star" : "text-line hover:text-star"
                }`}
              >
                ★
              </button>
            );
          })}
        </div>

        <span className="text-note font-medium text-muted">
          {stars > 0 ? `${stars} dari 5 bintang` : "Pilih bintang"}
        </span>
      </div>

      <div className="mt-4 flex flex-col gap-3 xl:flex-row xl:items-start xl:gap-9">
        <TextField
          id="komentar"
          name="komentar"
          label={commentLabel}
          placeholder={commentPlaceholder}
          value={comment}
          onChange={(event) => {
            setComment(event.target.value);
            setSaved(false);
          }}
          maxLength={MAX_COMMENT_LENGTH}
          className="xl:w-[680px]"
        />
        <Button
          type="submit"
          size="sm"
          disabled={stars < 1}
          className="w-full xl:mt-5 xl:w-[220px]"
        >
          Kirim Rating
        </Button>
      </div>

      {/* Ruang tetap supaya kartu tidak "melompat" saat pesan muncul. */}
      <div className="mt-3 min-h-[16px]">
        {saved ? (
          <p role="status" className="text-note font-medium text-success">
            Rating tersimpan.{" "}
            <Link href="/riwayat-rating" className="underline">
              Lihat Riwayat &amp; Rating
            </Link>
          </p>
        ) : null}
      </div>
    </form>
  );
}
