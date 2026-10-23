"use client";

import Link from "next/link";
import Image from "next/image";

export function Footer() {
  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      history.pushState(null, "", "#top");
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
    }
  };

  return (
    <footer className="border-t border-black/8 bg-white py-14 text-[13px] text-ink-muted">
      <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          {/* Brand Info with scroll-to-top */}
          <div className="max-w-[34ch]">
            <Link
              href="#top"
              onClick={scrollToTop}
              className="text-ink group inline-flex items-center gap-2.5 text-[15px] font-semibold tracking-[-0.015em] transition-opacity hover:opacity-85"
            >
              <Image
                src="/app-icon.png"
                alt="Peeky Task"
                width={28}
                height={28}
                className="shrink-0 rounded-[22%] shadow-sm transition-transform duration-300 group-hover:scale-105"
                style={{ width: 28, height: 28 }}
              />
              Peeky Task
            </Link>
            <p className="text-ink-muted mt-3 text-[13px] leading-relaxed">
              Floating daily task and to-do widget. Built for Windows 10 and 11.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex gap-14">
            <div>
              <p className="text-ink mb-3.5 text-[12px] font-semibold">Product</p>
              <ul className="space-y-2.5">
                <li>
                  <Link
                    href="/#dock"
                    onClick={(e) => scrollToSection(e, "dock")}
                    className="text-ink-muted hover:text-ink text-[13px] transition-colors"
                  >
                    The deck
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#features"
                    onClick={(e) => scrollToSection(e, "features")}
                    className="text-ink-muted hover:text-ink text-[13px] transition-colors"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#speed"
                    onClick={(e) => scrollToSection(e, "speed")}
                    className="text-ink-muted hover:text-ink text-[13px] transition-colors"
                  >
                    Speed
                  </Link>
                </li>
                <li>
                  <Link href="/buy" className="text-ink-muted hover:text-ink text-[13px] transition-colors">
                    Buy a licence
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-ink mb-3.5 text-[12px] font-semibold">Support</p>
              <ul className="space-y-2.5">
                <li>
                  <Link
                    href="/#faq"
                    onClick={(e) => scrollToSection(e, "faq")}
                    className="text-ink-muted hover:text-ink text-[13px] transition-colors"
                  >
                    Questions
                  </Link>
                </li>
                <li>
                  <a
                    href="mailto:princepatel5807@gmail.com"
                    className="text-ink-muted hover:text-ink text-[13px] transition-colors"
                  >
                    princepatel5807@gmail.com
                  </a>
                </li>
                <li>
                  <Link href="/privacy" className="text-ink-muted hover:text-ink text-[13px] transition-colors">
                    Privacy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright only (No inspired by text as requested) */}
        <div className="text-ink-muted/85 mt-12 pt-6 flex flex-col gap-3 border-t border-black/6 pb-2 text-[11.5px] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Peeky Task. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/terms" className="hover:text-ink transition-colors">
              Terms of Service
            </Link>
            <span>·</span>
            <Link href="/privacy" className="hover:text-ink transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
