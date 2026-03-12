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
        className={`bg-[#223f77]/95 backdrop-blur-md border-b border-white/10 transition-all duration-300 ${
          isScrolled ? "py-3" : "py-4"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3"
            onClick={closeMenu}
          >
            <img
              src="/images/hero/logo.png"
              alt="INSOLVO Logo"
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-10 lg:flex">
            <nav className="flex items-center gap-8 ">
              <Link
                href="/#hero"
                className="relative text-sm font-bold text-white/80 transition hover:text-white after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-cyan-300 after:transition-all after:duration-300 hover:after:w-full"
              >
                Home
              </Link>

              <Link
                href="/#about"
                className="relative text-sm font-bold text-white/80 transition hover:text-white after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-cyan-300 after:transition-all after:duration-300 hover:after:w-full"
              >
                About
              </Link>

              <Link
                href="/#services"
                className="relative text-sm font-bold text-white/80 transition hover:text-white after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-cyan-300 after:transition-all after:duration-300 hover:after:w-full"
              >
                Services
              </Link>
            </nav>

            {/* Contact Button */}
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-white hover:text-[#223f77]"
            >
              Contact Us
              <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col gap-1 lg:hidden"
            aria-label="Toggle Menu"
          >
            <span
              className={`h-[2px] w-6 bg-white transition ${
                isOpen ? "translate-y-[6px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-[2px] w-6 bg-white transition ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-[2px] w-6 bg-white transition ${
                isOpen ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-b border-white/10 bg-[#223f77] lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-6">

            <Link
              href="/#hero"
              onClick={closeMenu}
              className="text-white/90 transition hover:text-white"
            >
              Home
            </Link>

            <Link
              href="/#about"
              onClick={closeMenu}
              className="text-white/90 transition hover:text-white"
            >
              About
            </Link>

            <Link
              href="/#services"
              onClick={closeMenu}
              className="text-white/90 transition hover:text-white"
            >
              Services
            </Link>

            <Link
              href="/contact"
              onClick={closeMenu}
              className="mt-2 inline-flex w-fit items-center gap-2 rounded-full border border-white/40 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white hover:text-[#223f77]"
            >
              Contact Us
              <ArrowIcon className="h-4 w-4" />
            </Link>

          </div>
        </div>
      )}
    </header>
  );
}