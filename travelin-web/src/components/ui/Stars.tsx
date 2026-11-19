type StarsProps = {
  /** Jumlah bintang terisi (0–5). */
  value: number;
  /** Label pembaca layar; default "Rating X dari 5". */
  label?: string;
  className?: string;
};

/**
 * Stars — tampilan bintang rating tanpa interaksi.
 * Untuk memilih rating, gunakan RatingForm.
 */
export function Stars({ value, label, className = "" }: StarsProps) {
  return (
    <span
      className={`inline-flex gap-1 ${className}`}
      role="img"
      aria-label={label ?? `Rating ${value} dari 5`}
    >
      {Array.from({ length: 5 }, (_, index) => (
        <span
          key={index}
          aria-hidden="true"
          className={index < value ? "text-star" : "text-line"}
        >
          ★
        </span>
      ))}
    </span>
  );
}
