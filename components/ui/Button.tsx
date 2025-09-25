"use client";

import Image from "next/image";
import { ReactNode } from "react";

type ButtonProps = {
  type?: "button" | "submit";
  title: string;
  icon?: string;
  onClick?: () => void;
  className?: string;
  children?: ReactNode;
  disabled?: boolean;
  loading?: boolean;
};

const Button = ({
  type = "button",
  title,
  icon,
  onClick,
  className = "",
  children,
  disabled = false,
  loading = false,
}: ButtonProps) => {
  const isDisabled = disabled || loading;

  return (
    <button
      type={type}
      className={`flex items-center justify-center gap-2 px-4 py-2 rounded-lg transition-all duration-300
        ${isDisabled ? "opacity-60 cursor-not-allowed" : "hover:scale-105"}
        ${className}
      `}
      onClick={onClick}
      disabled={isDisabled}
    >
      {loading ? (
        // spinner replaces content while loading
        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
      ) : (
        <>
          {children ?? <span>{title}</span>}
          {icon && <Image src={icon} alt={title} width={20} height={20} />}
        </>
      )}
    </button>
  );
};

export default Button;
