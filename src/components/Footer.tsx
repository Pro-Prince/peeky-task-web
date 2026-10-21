import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-black/8 bg-white py-12 text-[13px] text-ink-muted">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col items-center justify-between gap-6 px-5 sm:flex-row sm:px-8">
        {/* Brand & Copyright */}
        <div className="flex items-center gap-3">
          <div className="size-6 overflow-hidden rounded-[22%]">
            <Image
              src="/app-icon.png"
              alt="Peeky Task"
              width={24}
              height={24}
              className="object-cover"
            />
          </div>
          <p className="text-ink font-semibold">Peeky Task</p>
          <span>·</span>
          <p>© 2026 Peeky Task. Made for Windows.</p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center gap-6 text-[13px]">
          <Link href="/privacy" className="hover:text-ink transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-ink transition-colors">
            Terms of Service
          </Link>
          <Link href="/changelog" className="hover:text-ink transition-colors">
            Changelog
          </Link>
          <a
            href="mailto:princepatel5807@gmail.com"
            className="hover:text-ink transition-colors"
          >
            princepatel5807@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}
