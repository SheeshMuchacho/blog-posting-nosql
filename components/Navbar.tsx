"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./ui/Button";
import { NAV_LINKS } from "@/constants";

const SCROLL_THRESHOLD = 24; // small buffer to avoid jitter at top

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpandedItems, setMobileExpandedItems] = useState<Record<string, boolean>>({});
  const dropdownRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock body when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  // click outside to close desktop dropdown
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
    setMobileExpandedItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <>
      <nav
        className={[
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          scrolled
            ? "bg-white/95 backdrop-blur-lg shadow-lg border border-white/20"
            : "bg-white/60 backdrop-blur-md shadow-none border-transparent",
        ].join(" ")}
      >
        <div
          className={[
            "mx-auto transition-all duration-300",
            scrolled ? "w-[92vw] max-w-6xl rounded-full px-8 pb-6 pt-2 mt-3" : "max-w-7xl px-6 sm:px-8 py-4",
          ].join(" ")}
        >
          <div className={["flex items-center", scrolled ? "justify-between" : "justify-between"].join(" ")}>
            <Link href="/" className="flex-shrink-0">
              <Image src="/logo/logoblueT.png" alt="logo" width={120} height={28} className="object-contain" priority />
            </Link>

            {/* Desktop nav + dropdowns */}
            <div className="hidden lg:flex items-center">
              <ul className={["flex items-center transition-all duration-300", scrolled ? "gap-9 ml-8" : "gap-12 ml-10"].join(" ")}>
                {NAV_LINKS.map((link) => (
                  <li key={link.key} className="relative">
                    {link.dropdown ? (
                      <div
                        ref={(el: HTMLDivElement | null) => {
                          dropdownRefs.current[link.key] = el;
                        }}
                        onMouseEnter={() => setActiveDropdown(link.key)}
                        onMouseLeave={() => setActiveDropdown(null)}
                        className="relative"
                      >
                        <Link
                          href={link.href}
                          className="text-text-dark text-sm font-medium hover:text-secondary transition-colors flex items-center whitespace-nowrap"
                          aria-expanded={activeDropdown === link.key}
                        >
                          {link.label}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                              activeDropdown === link.key ? "rotate-180" : ""
                            }`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </Link>

                        {/* Dropdown panel */}
                        <div
                          className={[
                            "absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-white rounded-md shadow-lg overflow-hidden",
                            "transition-all duration-200 origin-top z-40",
                            activeDropdown === link.key ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible",
                          ].join(" ")}
                        >
                          <ul className="py-1">
                            {link.dropdown.map((item) => (
                              <li key={item.key}>
                                <Link
                                  href={item.href}
                                  className="block px-4 py-2 text-xs text-gray-700 hover:bg-gray-100 hover:text-secondary transition-colors"
                                  onClick={() => setActiveDropdown(null)}
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
                        className="text-text-dark text-sm font-medium hover:text-secondary transition-colors whitespace-nowrap"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <Button
                type="button"
                title="Contact Us"
                className={["btn btn-outline-secondary rounded-full transition-all duration-300", scrolled ? "text-sm px-5 py-2" : "text-xs px-6 py-2"].join(
                  " "
                )}
              />
            </div>

            {/* Mobile trigger */}
            <button className="lg:hidden cursor-pointer z-50" onClick={() => setMobileMenuOpen(true)} aria-label="Open menu">
              <Image src="/icons/menu.svg" alt="menu" width={24} height={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Constant spacer: prevents layout jump & threshold oscillation */}
      <div className="h-20 w-full" />

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 lg:hidden ${
          mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile sidebar */}
      <aside
        className={`fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white z-50 shadow-xl p-6 overflow-y-auto transition-transform duration-300 ease-in-out transform lg:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Mobile navigation"
      >
        <div className="flex items-center justify-between w-full mb-8">
          <Link href="/" onClick={() => setMobileMenuOpen(false)}>
            <Image src="/logo/logoblueT.png" alt="logo" width={120} height={28} className="object-contain" />
          </Link>
          <button onClick={() => setMobileMenuOpen(false)} className="transition-transform hover:rotate-90 duration-300" aria-label="Close menu">
            <Image src="/icons/close.svg" alt="close" width={24} height={24} />
          </button>
        </div>

        <ul className="flex flex-col gap-6 mb-8">
          {NAV_LINKS.map((link, index) => (
            <li
              key={link.key}
              className={`transform transition-all duration-300 ${mobileMenuOpen ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {link.dropdown ? (
                <div>
                  <button
                    className="text-text-dark text-base font-medium hover:text-secondary transition-colors flex items-center justify-between w-full"
                    onClick={() => toggleMobileDropdown(link.key)}
                    aria-expanded={!!mobileExpandedItems[link.key]}
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
                            className="text-text-dark text-sm hover:text-secondary transition-colors flex items-center"
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
                  className="text-text-dark text-base font-medium hover:text-secondary transition-colors flex items-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <Button type="button" title="Contact Us" className="btn btn-outline-secondary text-xs w-full" />
      </aside>
    </>
  );
};

export default Navbar;
