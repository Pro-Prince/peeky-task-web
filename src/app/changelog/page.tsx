import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Changelog - Peeky Task",
  description: "Release history and updates for Peeky Task.",
};

export default function ChangelogPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto w-full max-w-[820px] px-5 py-32 text-ink">
        <div className="mb-10">
          <Link
            href="/"
            className="text-ink-muted hover:text-ink text-[13px] font-medium transition-colors"
          >
            ← Back to Peeky Task
          </Link>
          <h1 className="type-headline mt-4 text-[clamp(2rem,4vw,2.8rem)]">
            Changelog
          </h1>
          <p className="text-ink-muted mt-2 text-[14px]">
            Every release and what changed.
          </p>
        </div>

        <div className="space-y-12">
          {/* Release 1.0.0 */}
          <div className="border-l-2 border-black/10 pl-6 space-y-4">
            <div className="flex items-center gap-3">
              <span className="bg-note-butter text-note-ink font-semibold text-[12px] px-2.5 py-0.5 rounded-full">
                v1.0.0
              </span>
              <span className="text-ink-muted text-[13px]">Initial Release · October 2026</span>
            </div>
            <h2 className="text-[20px] font-semibold text-ink">
              Welcome to Peeky Task
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-ink-muted text-[14.5px]">
              <li>Floating desktop task pill pinned to screen edge or wallpaper layer.</li>
              <li>Global keyboard hotkey (<kbd className="bg-smoke px-1.5 py-0.5 rounded border border-black/10 font-mono text-[12px]">Alt + Space</kbd>) to toggle visibility.</li>
              <li>Eight custom task color markers with quick cycle hotkey (<kbd className="bg-smoke px-1.5 py-0.5 rounded border border-black/10 font-mono text-[12px]">Ctrl + .</kbd>).</li>
              <li>Instant task deletion with 10-second non-blocking undo countdown.</li>
              <li>100% offline local JSON storage with zero telemetry and zero cloud sync.</li>
              <li>Automatic 7-day free trial and lifetime license unlock integration.</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
