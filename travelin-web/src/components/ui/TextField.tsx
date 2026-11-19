import type { ChangeEvent, HTMLInputTypeAttribute } from "react";

type TextFieldProps = {
  id: string;
  /** Opsional: input tanpa label (mis. kolom kode promo). */
  label?: string;
  name?: string;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  defaultValue?: string;
  /** Isi `value` + `onChange` untuk input terkendali (controlled). */
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  maxLength?: number;
  disabled?: boolean;
  autoComplete?: string;
  /** Kelas tambahan untuk pembungkus (mis. flex-1 di baris promo). */
  className?: string;
};

/**
 * TextField — label kecil 12px di atas input 44px.
 * Border memakai --color-line, radius 8px, teks 14px (sesuai Figma).
 */
export function TextField({
  id,
  label,
  name,
  type = "text",
  placeholder,
  defaultValue,
  value,
  onChange,
  maxLength,
  disabled = false,
  autoComplete,
  className = "",
}: TextFieldProps) {
  return (
    <div className={className}>
      {label ? (
        <label
          htmlFor={id}
          className="mb-[5px] block text-label font-medium text-muted"
        >
          {label}
        </label>
      ) : null}
      <input
        id={id}
        name={name ?? id}
        type={type}
        placeholder={placeholder}
        {...(value === undefined ? { defaultValue } : { value, onChange })}
        maxLength={maxLength}
        disabled={disabled}
        autoComplete={autoComplete}
        aria-label={label ?? placeholder}
        className="h-field w-full rounded-xs border border-line bg-surface px-[13px] text-body text-ink placeholder:text-ink focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-primary disabled:bg-canvas disabled:text-muted"
      />
    </div>
  );
}
