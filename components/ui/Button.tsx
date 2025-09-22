"use client";

import Image from "next/image";
import { ReactNode } from "react";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  onClick?: () => void;
  className?: string;
  children?: ReactNode;
};

const Button = ({ type, title, icon, onClick, className = "", children }: ButtonProps) => {
  return (
    <button type={type} className={`flex items-center justify-center gap-2 ${className}`} onClick={onClick}>
      {children ?? <span>{title}</span>}
      {icon && <Image src={icon} alt={title} width={20} height={20} />}
    </button>
  );
};

export default Button;
