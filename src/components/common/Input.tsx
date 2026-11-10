
import { useId, useState, type InputHTMLAttributes, type ReactNode } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
  icon?: ReactNode;
  loading?: boolean;
  wrapperClassName?: string;
}

function Input({
  label,
  error,
  hint,
  icon,
  loading = false,
  wrapperClassName = "",
  className = "",
  id,
  type = "text",
  disabled,
  ...props
}: InputProps) {
  const generatedId = useId();
  const inputId = id || generatedId;

  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";
  const inputType = isPassword
    ? showPassword
      ? "text"
      : "password"
    : type;

  return (
    <div className={`w-full ${wrapperClassName}`}>
      {label && (
        <label
          htmlFor={inputId}
          className="mb-2 block text-sm font-medium text-gray-300"
        >
          {label}
          {props.required && (
            <span className="mr-1 text-red-400">*</span>
          )}
        </label>
      )}

      <div className="relative">
        {icon && (
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
            {icon}
          </div>
        )}

        <input
          id={inputId}
          type={inputType}
          disabled={disabled || loading}
          aria-invalid={Boolean(error)}
          aria-describedby={
            error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined
          }
          {...props}
          className={`
            w-full rounded-xl border bg-luxury-card px-4 py-3
            text-white outline-none transition
            placeholder:text-gray-500
            focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold/30
            disabled:cursor-not-allowed disabled:opacity-50
            ${icon ? "pr-11" : ""}
            ${isPassword ? "pl-16" : ""}
            ${error ? "border-red-500" : "border-luxury-border"}
            ${className}
          `}
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-xs text-luxury-gold"
          >
            {showPassword ? "مخفی کردن" : "نمایش"}
          </button>
        )}

        {loading && (
          <span className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 animate-spin rounded-full border-2 border-luxury-gold border-t-transparent" />
        )}
      </div>

      {error && (
        <p id={`${inputId}-error`} className="mt-2 text-sm text-red-400">
          {error}
        </p>
      )}

      {!error && hint && (
        <p id={`${inputId}-hint`} className="mt-2 text-sm text-gray-500">
          {hint}
        </p>
      )}
    </div>
  );
}

export default Input;
