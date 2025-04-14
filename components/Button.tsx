"use client";

import Image from 'next/image';

type ButtonProps = {
  type: 'button' | 'submit';
  title: string;
  icon?: string;
  onClick?: () => void;
  className?: string;
};

const Button = ({ type, title, icon, onClick, className = '' }: ButtonProps) => {
  return (
    <button 
      type={type} 
      className={`flex items-center justify-center gap-2 ${className}`}
      onClick={onClick}
    >
      {icon && <Image src={icon} alt={title} width={20} height={20} />}
      <span className='font-sans font-medium text-xs'>{title}</span>
    </button>
  );
};

export default Button;