import type { Ref, SetStateAction } from "react";
import "./Styles.scss";

interface props {
  type?: "text" | "password";
  placeholder?: string;
  value?: string;
  onChange?: (e: SetStateAction<string>) => void;
  ref?: Ref<HTMLInputElement>;
  className?: string;
}

export function Input({ type, placeholder = "Enter text..", ...rest }: props) {
  return (
    <input
      ref={rest.ref && rest.ref}
      value={rest.value}
      onChange={(e) => rest.onChange && rest.onChange(e.target.value)}
      className={`Input tr ${rest.className}`}
      type={type}
      placeholder={placeholder}
    />
  );
}
