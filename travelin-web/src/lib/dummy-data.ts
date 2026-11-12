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

// Ringkasan pesanan pada frame 04 (kartu kiri).
export const tripSummary = [
  { label: "Lokasi jemput", value: "Jl. Ahmad Yani No. 12, Pontianak" },
  { label: "Tujuan", value: "Jl. Tanjungpura No. 45, Pontianak" },
  { label: "Jenis kendaraan", value: "Mobil Economy" },
  { label: "Jumlah penumpang", value: "2 penumpang, 2 bagasi" },
  { label: "Jadwal jemput", value: "14 Okt 2026, 14:30" },
  {
    label: "Catatan",
    value: "Tunggu di depan minimarket, bawa 1 koper",
  },
  { label: "Driver", value: "Menunggu assignment dari admin" },
];

// Rincian tarif pada frame 04 (kartu kanan).
export const fareBreakdown = [
  { label: "Tarif dasar", value: "Rp 30.000" },
  { label: "Jarak (4,8 km)", value: "Rp 8.000" },
  { label: "Biaya layanan", value: "Rp 2.000" },
  { label: "Pajak", value: "Rp 2.000" },
];

// Pilihan metode pembayaran pada frame 05.
export type PaymentMethodItem = {
  name: string;
  description: string;
  popular?: boolean;
};

export const paymentMethods: PaymentMethodItem[] = [
  {
    name: "QRIS (semua e-wallet)",
    description: "Bayar dengan aplikasi e-wallet",
    popular: true,
  },
  {
    name: "E-Wallet",
    description: "DANA, OVO, GoPay, ShopeePay",
  },
  {
    name: "Transfer Bank",
    description: "BCA, BRI, BNI, Mandiri",
  },
  {
    name: "Kartu Debit / Kredit",
    description: "Visa, Mastercard, JCB",
  },
  {
    name: "Tunai ke driver",
    description: "Dibayar langsung setelah perjalanan selesai",
  },
];

// Ringkasan singkat pada frame 05 (kartu kanan).
export const paymentSummary = {
  route: ["Jl. Ahmad Yani No. 12", "ke Jl. Tanjungpura No. 45"],
  vehicle: "Mobil Economy, 2 penumpang",
  total: "Rp 42.000",
};

// Tahapan perjalanan pada frame 06.
export const tripSteps = [
  "Menunggu Driver",
  "Driver Ditugaskan",
  "Menuju Lokasi",
  "Dalam Perjalanan",
  "Selesai",
];

// Langkah aktif (0-based): frame 06 menampilkan langkah ke-3 "Menuju Lokasi".
export const tripActiveStep = 2;

// Data driver contoh pada kartu status (frame 06).
export const tripDriver = {
  name: "Budi Santoso (contoh data)",
  vehicle: "Mobil Economy, KB 1234 AB",
  rating: "Rating 4,8",
  eta: "Tiba sekitar 5 menit",
};

// Detail perjalanan pada frame 06.
export const tripDetail = {
  pickupLabel: "Jemput",
  pickup: "Jl. Ahmad Yani No. 12",
  destinationLabel: "Tujuan",
  destination: "Jl. Tanjungpura No. 45",
  fareLabel: "Total tarif",
  fare: "Rp 42.000",
  paymentStatus: "Lunas",
};

// Kartu rating pada frame 06: 4 dari 5 bintang terisi.
export const tripRating = {
  title: "Beri rating (aktif setelah perjalanan selesai)",
  filledStars: 4,
  commentLabel: "Komentar (opsional)",
  commentPlaceholder: "Driver ramah dan tepat waktu",
};

// Data dashboard driver (frame 07).
export const driverAvailability = {
  title: "Status ketersediaan",
  status: "ONLINE",
  note: "Hanya driver online yang menerima pesanan.",
};

export const driverStats = [
  { label: "Pesanan masuk", value: "03" },
  { label: "Selesai hari ini", value: "05" },
];

export const incomingOrder = {
  id: "Order #001",
  rows: [
    { label: "Jemput", value: "Jl. Ahmad Yani No. 12, Pontianak" },
    { label: "Tujuan", value: "Jl. Tanjungpura No. 45, Pontianak" },
    { label: "Jadwal", value: "14 Okt 2026, 14:30, 2 penumpang" },
  ],
  fareLabel: "Tarif",
  fare: "Rp 42.000",
};

// Tombol update status pada frame 07 (dua pertama outline, terakhir utama).
export const driverTripActions = [
  "Menuju Lokasi",
  "Jemput Penumpang",
  "Selesaikan Trip",
];

// Ringkasan angka dashboard admin (frame 08). Warna angka berbeda per kartu.
export const adminStats: Array<{
  label: string;
  value: string;
  tone: "primary" | "success" | "warning";
}> = [
  { label: "Pesanan aktif", value: "12", tone: "primary" },
  { label: "Driver online", value: "08", tone: "success" },
  { label: "Menunggu assignment", value: "03", tone: "warning" },
];

// Tabel pesanan yang menunggu assignment (frame 08).
export const pendingOrders = [
  {
    id: "#001",
    route: "Jl. Ahmad Yani → Jl. Tanjungpura",
    vehicle: "Mobil Economy",
    fare: "Rp 42.000",
  },
  {
    id: "#002",
    route: "Bandara Supadio → Jl. Gajah Mada",
    vehicle: "Mobil MPV",
    fare: "Rp 185.000",
  },
  {
    id: "#003",
    route: "Jl. Sungai Raya → Jl. Imam Bonjol",
    vehicle: "Travel",
    fare: "Rp 320.000",
  },
];

// Parameter tarif yang hanya bisa diubah admin (frame 08).
export const fareParameters = [
  { label: "Tarif dasar", value: "Rp 30.000" },
  { label: "Tarif per km", value: "Rp 1.667" },
  { label: "Biaya layanan", value: "Rp 2.000" },
  { label: "Pajak", value: "Rp 2.000" },
];
