"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { NAV_LINKS } from '@/constants';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpandedItems, setMobileExpandedItems] = useState<Record<string, boolean>>({});
  const dropdownRefs = useRef<Record<string, HTMLLIElement | null>>({});

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        activeDropdown &&
        dropdownRefs.current[activeDropdown] &&
        event.target instanceof Node &&
        !dropdownRefs.current[activeDropdown]?.contains(event.target)
      ) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside as EventListener);
    return () => document.removeEventListener("mousedown", handleClickOutside as EventListener);
  }, [activeDropdown]);

  const toggleMobileDropdown = (key: string) => {
    setMobileExpandedItems(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleDropdownToggle = (key: string) => {
    setActiveDropdown(activeDropdown === key ? null : key);
  };

  return (
    <>
      <nav className={`sticky top-0 z-40 w-full transition-all duration-300 backdrop-blur-md ${scrolled ? "bg-white/80 shadow-sm py-3" : "bg-white/60 py-4"}`}>
        <div className="max-container flexBetween padding-container">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image src="/logo/logoblueT.png" alt="logo" width={120} height={28} className="object-contain" />
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center flex-grow justify-end mr-10">
            <ul className="flex items-center gap-12">
              {NAV_LINKS.map((link) => (
                <li
                  key={link.key}
                  ref={el => {
                    if (link.dropdown) dropdownRefs.current[link.key] = el;
                  }}
                  className="relative"
                >
                  {link.dropdown ? (
                    <div>
                      <button
                        className="text-text-dark text-sm font-medium hover:text-secondary transition-all flex items-center"
                        onClick={() => handleDropdownToggle(link.key)}
                        aria-expanded={activeDropdown === link.key}
                      >
                        {link.label}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className={`ml-1 h-4 w-4 transition-transform duration-200 ${activeDropdown === link.key ? "rotate-180" : ""}`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      <div
                        className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-white rounded-md shadow-lg overflow-hidden transition-all duration-300 origin-top z-40 ${
                          activeDropdown === link.key ? "opacity-100 scale-100" : "opacity-0 scale-95 invisible"
                        }`}
                      >
                        <div className="py-1">
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.key}
                              href={item.href}
                              className="block px-4 py-2 text-xs text-gray-700 hover:bg-gray-100 hover:text-secondary transition-colors duration-200"
                              onClick={() => setActiveDropdown(null)}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link href={link.href} className="text-text-dark text-sm font-medium hover:text-secondary transition-all">
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button type="button" title="Contact Us" className="btn btn-outline-secondary text-xs px-6 py-2 rounded-full" />
          </div>

          {/* Mobile Menu Trigger */}
          <button className="lg:hidden cursor-pointer z-50" onClick={() => setMobileMenuOpen(true)}>
            <Image src="/icons/menu.svg" alt="menu" width={24} height={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 lg:hidden ${
          mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white z-50 shadow-xl p-6 overflow-y-auto transition-transform duration-300 ease-in-out transform lg:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flexBetween w-full mb-8">
          <Link href="/">
            <Image src="/logo/logoblueT.png" alt="logo" width={120} height={28} className="object-contain" />
          </Link>
          <button onClick={() => setMobileMenuOpen(false)} className="transition-transform hover:rotate-90 duration-300">
            <Image src="/icons/close.svg" alt="close" width={24} height={24} />
          </button>
        </div>

        <ul className="flex flex-col gap-6 mb-8">
          {NAV_LINKS.map((link, index) => (
            <li
              key={link.key}
              className={`transform transition-all duration-300 ${
                mobileMenuOpen ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {link.dropdown ? (
                <div>
                  <button
                    className="text-text-dark text-base font-medium hover:text-secondary transition-all flex items-center justify-between w-full"
                    onClick={() => toggleMobileDropdown(link.key)}
                  >
                    {link.label}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`ml-1 h-4 w-4 transition-transform duration-300 ${
                        mobileExpandedItems[link.key] ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      mobileExpandedItems[link.key] ? "max-h-64 mt-3" : "max-h-0"
                    }`}
                  >
                    <ul className="pl-4 border-l-2 border-gray-200 space-y-3">
                      {link.dropdown.map((item, itemIndex) => (
                        <li
                          key={item.key}
                          className="transition-all duration-300"
                          style={{
                            transitionDelay: `${itemIndex * 100}ms`,
                            opacity: mobileExpandedItems[link.key] ? 1 : 0,
                            transform: mobileExpandedItems[link.key] ? "translateX(0)" : "translateX(-1rem)",
                          }}
                        >
                          <Link
                            href={item.href}
                            className="text-text-dark text-sm hover:text-secondary transition-all flex items-center"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <Link
                  href={link.href}
                  className="text-text-dark text-base font-medium hover:text-secondary transition-all flex items-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <div
          className="transform transition-all duration-300"
          style={{
            transitionDelay: "500ms",
            opacity: mobileMenuOpen ? 1 : 0,
            transform: mobileMenuOpen ? "translateY(0)" : "translateY(1rem)",
          }}
        >
          <Button type="button" title="Contact Us" className="btn btn-outline-secondary text-xs w-full" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
