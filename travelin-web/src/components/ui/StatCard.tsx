import { Card } from "./Card";

type StatTone = "primary" | "success" | "warning";

type StatCardProps = {
  label: string;
  value: string;
  /** Warna angka besar; tiap kartu bisa berbeda (frame 08). */
  tone?: StatTone;
  className?: string;
};

const tones: Record<StatTone, string> = {
  primary: "text-primary",
  success: "text-success",
  warning: "text-warning",
};

/**
 * StatCard — kartu ringkasan angka: label 13px di atas, angka 32px Bold.
 * Tinggi 100px di desktop sesuai frame 07 dan 08.
 */
export function StatCard({
  label,
  value,
  tone = "success",
  className = "",
}: StatCardProps) {
  return (
    <Card className={`px-5 pt-[17px] xl:h-[100px] ${className}`}>
      <p className="text-note font-semibold text-ink">{label}</p>
      <p className={`mt-[10px] text-display font-bold ${tones[tone]}`}>
        {value}
      </p>
    </Card>
  );
}
