"use client"

import { Search } from "lucide-react";
import { twMerge } from "tailwind-merge";

type SearchBoxProps = {
  placeholder?: string;
  defaultValue?: string;
  className?: string;
  inputName?: string;
  action?: string;
};

export default function SearchBox({
  placeholder = "Search...",
  defaultValue = "",
  className = "",
  inputName = "q",
  action = "/blog",
}: SearchBoxProps) {
  return (
    <form 
      method="GET" 
      action={action} 
      className={twMerge(
        "flex justify-between bg-white border border-secondary shadow-[-7px_7px_0px_#144272] transition-all duration-150 ease-out active:shadow-[-3px_3px_0px_#144272] active:translate-x-1 active:translate-y-1 active:scale-[0.98]", 
        className
      )}
    >
      <input 
        name={inputName} 
        type="text" 
        placeholder={placeholder} 
        className="pl-4 outline-none flex-1 bg-transparent" 
        defaultValue={defaultValue} 
      />
      <button 
        type="submit" 
        className="border-l border-secondary py-4 px-4 text-gray-500 hover:text-black transition-colors flex items-center justify-center" 
        aria-label="Search"
      >
        <Search className="w-5 h-5" />
      </button>
    </form>
  );
}