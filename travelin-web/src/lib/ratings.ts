import type { RatingEntry } from "@/lib/dummy-data";

/*
 * Penyimpanan rating di sisi klien.
 * Project ini belum punya backend, jadi rating disimpan di localStorage
 * agar tombol "Kirim Rating" dan halaman "Riwayat & Rating" saling terhubung.
 */

export const RATINGS_STORAGE_KEY = "travelin:ratings";

// Event internal agar komponen lain di tab yang sama ikut diperbarui.
const RATINGS_UPDATED_EVENT = "travelin:ratings-updated";

const MAX_STORED_RATINGS = 50;

function isRatingEntry(value: unknown): value is RatingEntry {
  if (!value || typeof value !== "object") {
    return false;
  }

  const entry = value as Record<string, unknown>;

  return (
    typeof entry.id === "string" &&
    typeof entry.date === "string" &&
    typeof entry.driver === "string" &&
    typeof entry.route === "string" &&
    typeof entry.stars === "number" &&
    entry.stars >= 1 &&
    entry.stars <= 5 &&
    typeof entry.comment === "string"
  );
}

/** Mengubah JSON dari localStorage menjadi daftar rating yang valid. */
export function parseStoredRatings(raw: string): RatingEntry[] {
  if (!raw) {
    return [];
  }

  try {
    const parsed: unknown = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.filter(isRatingEntry) : [];
  } catch {
    // Data rusak: anggap belum ada rating.
    return [];
  }
}

/** Nilai mentah localStorage; dipakai `useSyncExternalStore`. */
export function getRatingsSnapshot(): string {
  if (typeof window === "undefined") {
    return "";
  }

  try {
    return window.localStorage.getItem(RATINGS_STORAGE_KEY) ?? "";
  } catch {
    // localStorage diblokir (mode privat): anggap kosong.
    return "";
  }
}

/** Berlangganan perubahan rating dari tab lain maupun tab ini. */
export function subscribeToRatings(onChange: () => void): () => void {
  if (typeof window === "undefined") {
    return () => {};
  }

  const handleStorage = (event: StorageEvent) => {
    if (event.key === RATINGS_STORAGE_KEY) {
      onChange();
    }
  };

  window.addEventListener("storage", handleStorage);
  window.addEventListener(RATINGS_UPDATED_EVENT, onChange);

  return () => {
    window.removeEventListener("storage", handleStorage);
    window.removeEventListener(RATINGS_UPDATED_EVENT, onChange);
  };
}

/** Membaca rating yang pernah dikirim pengguna (terbaru di urutan pertama). */
export function readStoredRatings(): RatingEntry[] {
  return parseStoredRatings(getRatingsSnapshot());
}

/** Menyimpan rating baru dan mengembalikan daftar terbaru. */
export function saveRating(entry: RatingEntry): RatingEntry[] {
  const next = [entry, ...readStoredRatings()].slice(0, MAX_STORED_RATINGS);

  if (typeof window !== "undefined") {
    try {
      window.localStorage.setItem(RATINGS_STORAGE_KEY, JSON.stringify(next));
      window.dispatchEvent(new Event(RATINGS_UPDATED_EVENT));
    } catch {
      // localStorage penuh/diblokir: rating tetap tampil di state halaman.
    }
  }

  return next;
}
