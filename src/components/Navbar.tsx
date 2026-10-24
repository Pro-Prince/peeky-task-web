"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      history.pushState(null, "", "#top");
      setMobileMenuOpen(false);
    }
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (window.location.pathname === "/") {
      e.preventDefault();
      const el = document.getElementById(id);
      if (el) {
        const yOffset = -72;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
        history.pushState(null, "", `#${id}`);
      }
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-paper-bg/85 backdrop-blur-xl transition-[background-color,border-color] duration-500">
      <nav className="mx-auto flex h-14 w-full max-w-[1180px] items-center justify-between px-5 sm:px-8">
        {/* Brand */}
        <Link
          href="/"
          onClick={scrollToTop}
          className="text-ink flex items-center gap-2.5 text-[15px] font-semibold tracking-[-0.02em] hover:opacity-85 transition-opacity"
        >
          <div className="relative size-[26px] overflow-hidden rounded-[22%] shadow-sm">
            <Image
              src="/app-icon.png"
              alt="Peeky Task Icon"
              width={26}
              height={26}
              className="object-cover"
              priority
            />
          </div>
          Peeky Task
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden items-center gap-8 md:flex">
          <li>
            <Link
              href="/#dock"
              onClick={(e) => scrollToSection(e, "dock")}
              className="group text-ink-muted hover:text-ink relative text-[13px] transition-colors"
            >
              The dock
              <span className="bg-note-ink absolute -bottom-1.5 left-0 h-px w-0 transition-[width] duration-300 ease-out group-hover:w-full" />
            </Link>
          </li>
          <li>
            <Link
              href="/#features"
              onClick={(e) => scrollToSection(e, "features")}
              className="group text-ink-muted hover:text-ink relative text-[13px] transition-colors"
            >
              Features
              <span className="bg-note-ink absolute -bottom-1.5 left-0 h-px w-0 transition-[width] duration-300 ease-out group-hover:w-full" />
            </Link>
          </li>
          <li>
            <Link
              href="/#shortcuts"
              onClick={(e) => scrollToSection(e, "shortcuts")}
              className="group text-ink-muted hover:text-ink relative text-[13px] transition-colors"
            >
              Shortcuts
              <span className="bg-note-ink absolute -bottom-1.5 left-0 h-px w-0 transition-[width] duration-300 ease-out group-hover:w-full" />
            </Link>
          </li>
          <li>
            <Link
              href="/#speed"
              onClick={(e) => scrollToSection(e, "speed")}
              className="group text-ink-muted hover:text-ink relative text-[13px] transition-colors"
            >
              Speed
              <span className="bg-note-ink absolute -bottom-1.5 left-0 h-px w-0 transition-[width] duration-300 ease-out group-hover:w-full" />
            </Link>
          </li>
          <li>
            <Link
              href="/#privacy"
              onClick={(e) => scrollToSection(e, "privacy")}
              className="group text-ink-muted hover:text-ink relative text-[13px] transition-colors"
            >
              Privacy
              <span className="bg-note-ink absolute -bottom-1.5 left-0 h-px w-0 transition-[width] duration-300 ease-out group-hover:w-full" />
            </Link>
          </li>
          <li>
            <Link
              href="/#pricing"
              onClick={(e) => scrollToSection(e, "pricing")}
              className="group text-ink-muted hover:text-ink relative text-[13px] transition-colors"
            >
              Pricing
              <span className="bg-note-ink absolute -bottom-1.5 left-0 h-px w-0 transition-[width] duration-300 ease-out group-hover:w-full" />
            </Link>
          </li>
          <li>
            <Link
              href="/#faq"
              onClick={(e) => scrollToSection(e, "faq")}
              className="group text-ink-muted hover:text-ink relative text-[13px] transition-colors"
            >
              FAQ
              <span className="bg-note-ink absolute -bottom-1.5 left-0 h-px w-0 transition-[width] duration-300 ease-out group-hover:w-full" />
            </Link>
          </li>
        </ul>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <Link
            href="/buy"
            className="text-ink hover:text-ink/75 hidden h-9 items-center px-4 text-[13px] font-medium transition-colors sm:inline-flex"
          >
            Buy once
          </Link>
          <Link
            href="/#download"
            onClick={(e) => scrollToSection(e, "download")}
            className="bg-ink hover:bg-ink/88 inline-flex h-9 items-center rounded-full px-4 text-[13px] font-medium tracking-[-0.01em] text-white shadow-[0_4px_14px_rgba(0,0,0,0.15)] transition-all active:scale-[0.98]"
          >
            Start free trial
          </Link>

          {/* Mobile menu trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="text-ink hover:bg-black/5 ml-1 grid size-9 place-items-center rounded-lg transition-colors md:hidden"
          >
            {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="border-t border-black/8 bg-white/95 px-5 py-4 backdrop-blur-xl md:hidden">
          <ul className="flex flex-col gap-2">
            <li>
              <Link
                href="/#dock"
                onClick={(e) => scrollToSection(e, "dock")}
                className="text-ink-muted hover:text-ink block rounded-lg px-3 py-2 text-[14px]"
              >
                The dock
              </Link>
            </li>
            <li>
              <Link
                href="/#features"
                onClick={(e) => scrollToSection(e, "features")}
                className="text-ink-muted hover:text-ink block rounded-lg px-3 py-2 text-[14px]"
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                href="/#shortcuts"
                onClick={(e) => scrollToSection(e, "shortcuts")}
                className="text-ink-muted hover:text-ink block rounded-lg px-3 py-2 text-[14px]"
              >
                Shortcuts
              </Link>
            </li>
            <li>
              <Link
                href="/#speed"
                onClick={(e) => scrollToSection(e, "speed")}
                className="text-ink-muted hover:text-ink block rounded-lg px-3 py-2 text-[14px]"
              >
                Speed
              </Link>
            </li>
            <li>
              <Link
                href="/#privacy"
                onClick={(e) => scrollToSection(e, "privacy")}
                className="text-ink-muted hover:text-ink block rounded-lg px-3 py-2 text-[14px]"
              >
                Privacy
              </Link>
            </li>
            <li>
              <Link
                href="/#pricing"
                onClick={(e) => scrollToSection(e, "pricing")}
                className="text-ink-muted hover:text-ink block rounded-lg px-3 py-2 text-[14px]"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                href="/buy"
                onClick={() => setMobileMenuOpen(false)}
                className="text-ink-muted hover:text-ink block rounded-lg px-3 py-2 text-[14px] font-medium"
              >
                Buy once
              </Link>
            </li>
            <li className="pt-2 border-t border-black/5">
              <Link
                href="/#download"
                onClick={(e) => scrollToSection(e, "download")}
                className="bg-ink block w-full rounded-full py-2.5 text-center text-[13px] font-medium text-white"
              >
                Start free trial
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
