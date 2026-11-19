import { AppShell } from "@/components/layout/AppShell";
import { RatingHistoryList } from "@/components/rating/RatingHistoryList";
import { customerNav, users } from "@/lib/dummy-data";

/**
 * Riwayat & Rating pelanggan.
 * Frame desain belum tersedia; susunannya mengikuti kartu "Riwayat terakhir"
 * pada frame 02 (daftar di kiri, ringkasan di kanan).
 */
export default function RatingHistoryPage() {
  return (
    <AppShell
      user={users.customer}
      navItems={customerNav}
      activeHref="/riwayat-rating"
    >
      <h1 className="text-heading-lg font-bold text-ink">Riwayat &amp; Rating</h1>
      <p className="mt-1.5 text-body text-muted">
        Ulasan perjalanan yang sudah Anda selesaikan.
      </p>

      <RatingHistoryList />
    </AppShell>
  );
}
