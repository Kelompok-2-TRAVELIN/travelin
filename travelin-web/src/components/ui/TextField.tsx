import type { HTMLInputTypeAttribute } from "react";

type TextFieldProps = {
  id: string;
  label: string;
  name?: string;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  defaultValue?: string;
  autoComplete?: string;
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
  autoComplete,
}: TextFieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-[5px] block text-label font-medium text-muted"
      >
        {label}
      </label>
      <input
        id={id}
        name={name ?? id}
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        autoComplete={autoComplete}
        className="h-field w-full rounded-xs border border-line bg-surface px-[13px] text-body text-ink placeholder:text-ink focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-primary"
      />
    </div>
  );
}
