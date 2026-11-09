import Image from "next/image";

export type AppUser = {
  name: string;
  avatar: string;
};

type AppHeaderProps = {
  user: AppUser;
};

/**
 * AppHeader — header putih 64px yang dipakai semua halaman dalam aplikasi.
 * Logo 32px, wordmark 20px Bold, tagline 12px, lalu avatar + nama di kanan.
 */
export function AppHeader({ user }: AppHeaderProps) {
  return (
    <header className="flex h-header shrink-0 items-center border-b border-line bg-surface px-4 lg:pl-6 lg:pr-0">
      <Image
        src="/assets/figma/logo.svg"
        alt="Logo Travelin"
        width={32}
        height={32}
        priority
      />
      <span className="ml-2 text-title font-bold text-ink">Travelin</span>
      <span className="ml-7 hidden text-label text-muted sm:block">
        Travel &amp; Taksi Online
      </span>

      <div className="ml-auto flex items-center gap-[10px] lg:pr-[41px]">
        <Image
          src={user.avatar}
          alt=""
          width={32}
          height={32}
          className="rounded-full"
        />
        <span className="whitespace-nowrap text-body font-medium text-ink">
          {user.name}
        </span>
      </div>
    </header>
  );
}
