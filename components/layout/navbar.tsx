"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
    </svg>
  );
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full">
      <div
        className={`mx-auto flex w-full items-center justify-between bg-[#223f77] shadow-lg transition-all duration-300 rounded-b-xl ${
          isScrolled ? "px-5 py-3" : "px-6 py-4"
        }`}
      >
        <Link href="/" className="flex items-center gap-3" onClick={closeMenu}>
          <div className="flex h-10 w-10 items-center justify-center rounded-md">
            <span className="text-2xl font-bold text-cyan-200">H</span>
          </div>

          <span className="text-lg font-semibold tracking-[0.2em] text-white sm:text-xl">
            INSOLVO
          </span>
        </Link>

        <div className="hidden flex-1 items-center justify-end gap-10 lg:flex">
          <nav className="mr-4 flex items-center gap-8">
            <Link
              href="/#hero"
              className="text-sm font-medium text-white/90 transition hover:text-white"
            >
              Home
            </Link>

            <Link
              href="/#about"
              className="text-sm font-medium text-white/90 transition hover:text-white"
            >
              About
            </Link>

            <Link
              href="/#services"
              className="text-sm font-medium text-white/90 transition hover:text-white"
            >
              Services
            </Link>
          </nav>

          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-1 overflow-hidden rounded-full px-8 py-3 text-sm font-semibold text-white shadow-[0_0_0_2px_white] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:rounded-xl hover:text-black hover:shadow-[0_0_0_12px_transparent] active:scale-95 active:shadow-[0_0_0_4px_white]"
          >
            <span className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white opacity-0 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:h-[220px] group-hover:w-[220px] group-hover:opacity-100" />

            <ArrowIcon className="absolute right-4 z-10 h-5 w-5 text-white transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:-right-8 group-hover:text-black" />

            <span className="relative z-10 -translate-x-2 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-2">
              Contact Us
            </span>

            <ArrowIcon className="absolute -left-8 z-10 h-5 w-5 text-white transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:left-4 group-hover:text-black" />
          </Link>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg text-white lg:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span className="text-2xl leading-none">{isOpen ? "×" : "☰"}</span>
        </button>
      </div>

      {isOpen && (
        <div className="w-full rounded-b-xl bg-[#223f77] px-6 py-5 shadow-lg lg:hidden">
          <nav className="flex flex-col gap-4">
            <Link
              href="/#hero"
              onClick={closeMenu}
              className="text-sm font-medium text-white/90 transition hover:text-white"
            >
              Home
            </Link>

            <Link
              href="/#about"
              onClick={closeMenu}
              className="text-sm font-medium text-white/90 transition hover:text-white"
            >
              About
            </Link>

            <Link
              href="/#services"
              onClick={closeMenu}
              className="text-sm font-medium text-white/90 transition hover:text-white"
            >
              Services
            </Link>

            <Link
  href="/contact"
  className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-[#4aa3ff] px-6 py-3 text-sm font-semibold text-white transition-all duration-500 hover:bg-[#3797fb]"
>
  {/* expanding circle */}
  <span className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/30 opacity-0 transition-all duration-700 group-hover:h-[220px] group-hover:w-[220px] group-hover:opacity-100" />

  {/* arrow right */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="absolute right-4 h-5 w-5 transition-all duration-500 group-hover:-right-8"
    viewBox="0 0 24 24"
    fill="white"
  >
    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
  </svg>

  {/* text */}
  <span className="relative z-10 transition-all duration-500 group-hover:translate-x-2">
    Contact Us
  </span>

  {/* arrow left */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="absolute -left-8 h-5 w-5 transition-all duration-500 group-hover:left-4"
    viewBox="0 0 24 24"
    fill="white"
  >
    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
  </svg>
</Link>
          </nav>
        </div>
      )}
    </header>
  );
}