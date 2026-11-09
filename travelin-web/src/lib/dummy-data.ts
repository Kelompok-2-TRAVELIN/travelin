import type { AppUser } from "@/components/layout/AppHeader";
import type { NavItem } from "@/components/layout/AppSidebar";

/*
 * Data contoh (dummy) — hanya untuk tampilan, belum ada backend.
 * Semua teks diambil dari frame Figma.
 */

export const users: Record<"customer" | "driver" | "admin", AppUser> = {
  customer: { name: "Andi Saputra", avatar: "/assets/figma/avatar.svg" },
  driver: { name: "Budi Santoso (Driver)", avatar: "/assets/figma/avatar.svg" },
  admin: { name: "Admin Travelin", avatar: "/assets/figma/avatar.svg" },
};

// Menu pelanggan (frame 02–06).
export const customerNav: NavItem[] = [
  { label: "Beranda", href: "/dashboard" },
  { label: "Pesan Perjalanan", href: "/pesan" },
  { label: "Riwayat & Rating" }, // frame belum tersedia
  { label: "Bantuan" }, // frame belum tersedia
];

// Menu driver (frame 07).
export const driverNav: NavItem[] = [
  { label: "Beranda", href: "/driver" },
  { label: "Pesanan Masuk" }, // frame belum tersedia
  { label: "Riwayat Perjalanan" }, // frame belum tersedia
];

// Menu admin (frame 08).
export const adminNav: NavItem[] = [
  { label: "Dashboard", href: "/admin" },
  { label: "Kelola User & Driver" }, // frame belum tersedia
  { label: "Kendaraan & Tarif" }, // frame belum tersedia
  { label: "Monitoring Trip" }, // frame belum tersedia
  { label: "Laporan Transaksi" }, // frame belum tersedia
];

export type TripStatus = "Selesai" | "Dibatalkan";

export type TripHistoryItem = {
  date: string;
  route: string;
  status: TripStatus;
  fare: string;
};

// Isi tabel "Riwayat terakhir" pada frame 02.
export const tripHistory: TripHistoryItem[] = [
  {
    date: "12 Okt 2026",
    route: "Jl. Ahmad Yani → Bandara Supadio",
    status: "Selesai",
    fare: "Rp 185.000",
  },
  {
    date: "08 Okt 2026",
    route: "Jl. Tanjungpura → Jl. Gajah Mada",
    status: "Selesai",
    fare: "Rp 42.000",
  },
  {
    date: "03 Okt 2026",
    route: "Jl. Sungai Raya → Jl. Imam Bonjol",
    status: "Dibatalkan",
    fare: "Rp 0",
  },
];
