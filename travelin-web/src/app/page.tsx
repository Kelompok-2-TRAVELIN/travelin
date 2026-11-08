import { redirect } from "next/navigation";

// Halaman utama langsung diarahkan ke halaman login (frame 01).
export default function Home() {
  redirect("/login");
}
