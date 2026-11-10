
import type { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "gold" | "outline";
};

function Button({ children, variant = "gold", className = "", ...props }: Props) {
  const styles =
    variant === "gold"
      ? "bg-luxury-gold text-luxury-dark hover:bg-luxury-goldDark"
      : "border border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-dark";

  return (
    <button
      {...props}
      className={`rounded-xl px-6 py-3 font-bold transition ${styles} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
