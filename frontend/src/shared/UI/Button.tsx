import type { Ref } from "react";
import "./Styles.scss";

interface props {
  label?: string;
  bg?: "bgPrimary" | "bgNone";
  loading?: boolean;
  disabled?: boolean;
  type?: "submit" | "reset" | "button";
  onClick?: () => void;
  className?: string;

  isLoading?: boolean;
  ref?: Ref<HTMLButtonElement>;
}

export function Button({
  label = "label",
  bg = "bgPrimary",
  disabled,
  type = "button",
  onClick,
  className,
  isLoading = false,
  ...rest
}: props) {
  return (
    <button
      ref={rest.ref && rest.ref}
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={`Button ${className} el cp ${bg}`}
    >
      {isLoading ? "загрузка.." : label}
    </button>
  );
}
