import { AppShell } from "@/components/layout/AppShell";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { customerNav, helpContacts, helpFaqs, users } from "@/lib/dummy-data";

/**
 * Halaman Bantuan pelanggan.
 * Frame desain belum tersedia; memakai pola kartu yang sama dengan frame 02.
 * FAQ memakai <details> sehingga tetap bisa dibuka walau JavaScript mati.
 */
export default function BantuanPage() {
  return (
    <AppShell user={users.customer} navItems={customerNav} activeHref="/bantuan">
      <h1 className="text-heading-lg font-bold text-ink">Bantuan</h1>
      <p className="mt-1.5 text-body text-muted">
        Pertanyaan umum dan cara menghubungi tim Travelin.
      </p>

      <div className="mt-[23px] grid gap-5 xl:grid-cols-[minmax(0,1fr)_344px]">
        <Card className="px-card pt-5 pb-2">
          <h2 className="text-subtitle font-semibold text-ink">
            Pertanyaan umum
          </h2>

          <div className="mt-[17px] h-px w-full bg-line" />

          <div className="divide-y divide-line">
            {helpFaqs.map((faq) => (
              <details key={faq.question} className="group py-4">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-body font-semibold text-ink [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <span
                    aria-hidden="true"
                    className="text-title leading-none text-muted transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-2 max-w-[65ch] text-body text-muted">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </Card>

        <Card className="h-fit px-card pt-5 pb-6">
          <h2 className="text-subtitle font-semibold text-ink">Hubungi kami</h2>
          <p className="mt-2 text-body text-muted">
            Tim bantuan siap setiap hari, 07.00–22.00 WIB.
          </p>

          <ul className="mt-4 space-y-3">
            {helpContacts.map((contact) => (
              <li
                key={contact.label}
                className="rounded-sm border border-line p-4"
              >
                <p className="text-label font-medium text-muted">
                  {contact.label}
                </p>
                <p className="mt-1 text-body font-semibold text-ink">
                  {contact.value}
                </p>
                <p className="mt-1 text-note text-muted">{contact.note}</p>
                <Button
                  href={contact.href}
                  variant="outline"
                  size="xs"
                  className="mt-3 w-full"
                >
                  Hubungi via {contact.label}
                </Button>
              </li>
            ))}
          </ul>

          <Button href="/riwayat-rating" size="sm" className="mt-4 w-full">
            Lihat Riwayat &amp; Rating
          </Button>
        </Card>
      </div>
    </AppShell>
  );
}
