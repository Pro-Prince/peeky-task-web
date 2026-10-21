import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Check, ShieldCheck, Laptop, RotateCcw, HelpCircle, Key, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Buy Peeky Task - one key, yours for good",
  description: "Buy Peeky Task once and keep it. No subscription, no account, and no server standing between you and the app.",
};

const CHECKOUT_URL =
  "https://checkout.dodopayments.com/buy/pdt_0NqCUIWS9mwMJkq06Opw3?quantity=1&showDiscounts=false";

export default function BuyPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-paper-bg pt-28 pb-20 sm:pt-36">
        <div className="mx-auto w-full max-w-[980px] px-5 sm:px-8">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Link
              href="/"
              className="text-ink-muted hover:text-ink text-[13px] font-medium transition-colors"
            >
              ← Back to Peeky Task
            </Link>
          </div>

          {/* Top Hero Container */}
          <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
            {/* Left: Purchase Hero Card */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="bg-note-butter text-note-ink inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11.5px] font-semibold tracking-[-0.01em] mb-4">
                  Lifetime License
                </span>
                <h1 className="type-headline text-ink text-[clamp(2.2rem,4.5vw,3.6rem)] leading-[1.08]">
                  One key. Yours for good.
                </h1>
                <p className="text-ink-muted mt-4 text-[clamp(1rem,1.3vw,1.15rem)] leading-relaxed">
                  Buy Peeky Task once and keep it. No subscription, no account, and no server standing between you and your work.
                </p>
              </div>

              {/* Price Box */}
              <div className="rounded-3xl border border-black/8 bg-white p-7 shadow-sm">
                <div className="flex items-baseline gap-3">
                  <span className="type-display text-ink text-[clamp(2.6rem,5vw,3.4rem)]">
                    $5.99
                  </span>
                  <span className="text-ink-muted text-[14px]">
                    once · personal licence
                  </span>
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a
                    href={CHECKOUT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-ink hover:bg-ink/88 inline-flex h-12 flex-1 items-center justify-center rounded-full px-7 text-[15px] font-medium text-white shadow-md transition-all active:scale-[0.98]"
                  >
                    Buy Peeky Task
                    <ArrowRight className="ml-2 size-4" />
                  </a>
                  <Link
                    href="/#download"
                    className="text-ink inline-flex h-12 items-center justify-center rounded-full border border-black/15 bg-white px-6 text-[14.5px] font-medium transition-all hover:border-black/30 hover:bg-black/5"
                  >
                    Try free for 7 days
                  </Link>
                </div>

                <ul className="mt-7 space-y-3 border-t border-black/8 pt-6">
                  <li className="flex items-start gap-2.5">
                    <Check className="mt-0.5 size-4 shrink-0 text-note-ink stroke-[2.4]" />
                    <span className="text-[13.5px] text-ink-muted">
                      A perpetual licence — not a subscription or rental
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="mt-0.5 size-4 shrink-0 text-note-ink stroke-[2.4]" />
                    <span className="text-[13.5px] text-ink-muted">
                      Verified offline — Peeky Task never needs to phone home
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="mt-0.5 size-4 shrink-0 text-note-ink stroke-[2.4]" />
                    <span className="text-[13.5px] text-ink-muted">
                      Valid on up to 2 devices simultaneously
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="mt-0.5 size-4 shrink-0 text-note-ink stroke-[2.4]" />
                    <span className="text-[13.5px] text-ink-muted">
                      Move it between your own PCs anytime from Settings
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="mt-0.5 size-4 shrink-0 text-note-ink stroke-[2.4]" />
                    <span className="text-[13.5px] text-ink-muted">
                      All future updates to this version are included
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right: Key Card Preview */}
            <div className="lg:col-span-5 space-y-5">
              <div className="rounded-3xl border border-black/8 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-2.5 text-ink font-semibold text-[14px]">
                  <Key className="size-4 text-note-ink" />
                  <span>How your license works</span>
                </div>
                <p className="text-ink-muted mt-2 text-[13px] leading-relaxed">
                  Your license key arrives by email instantly after checkout. Copy the key and paste it directly into Peeky Task.
                </p>

                {/* Key Format Display Box */}
                <div className="mt-4 rounded-xl border border-black/10 bg-paper-bg p-3.5 font-mono text-[12px] text-ink break-all select-all">
                  PEEKY-040GK-8ZC1M-QR7VT-9WDXN-2HJ5B-…
                </div>
                <p className="text-ink-muted mt-2 text-[11.5px]">
                  Copy the key exactly as it arrives. Paste it in Settings &gt; Licence or click &quot;Enter a key&quot; on the top banner.
                </p>
              </div>

              {/* Guarantees Box */}
              <div className="rounded-3xl border border-note-mint/60 bg-note-mint/20 p-6">
                <div className="flex items-center gap-2.5 text-ink font-semibold text-[14px]">
                  <ShieldCheck className="size-4 text-note-ink" />
                  <span>Your tasks are never held hostage</span>
                </div>
                <p className="text-ink-muted mt-2 text-[13px] leading-relaxed">
                  If your trial ends, Peeky Task becomes read-only. Your tasks always stay visible, searchable, copyable, and exportable.
                </p>
              </div>
            </div>
          </div>

          {/* Section: What happens after you pay */}
          <section className="mt-20 border-t border-black/8 pt-16">
            <h2 className="type-headline text-ink text-[clamp(1.6rem,3vw,2.2rem)]">
              What happens after you pay.
            </h2>

            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              <div className="rounded-2xl border border-black/8 bg-white p-6 shadow-xs">
                <div className="size-8 rounded-full bg-note-butter/60 flex items-center justify-center text-note-ink font-bold text-[13px]">
                  1
                </div>
                <h3 className="mt-4 text-[16px] font-semibold text-ink">You pay</h3>
                <p className="text-ink-muted mt-2 text-[13.5px] leading-relaxed">
                  Checkout is handled securely by Dodo Payments, our merchant of record. Your payment credentials are encrypted and never stored by Peeky Task.
                </p>
              </div>

              <div className="rounded-2xl border border-black/8 bg-white p-6 shadow-xs">
                <div className="size-8 rounded-full bg-note-sky/60 flex items-center justify-center text-note-ink font-bold text-[13px]">
                  2
                </div>
                <h3 className="mt-4 text-[16px] font-semibold text-ink">The key arrives</h3>
                <p className="text-ink-muted mt-2 text-[13.5px] leading-relaxed">
                  Your licence key arrives by email within seconds. Copy the key exactly as received — line wrapping and spacing do not matter.
                </p>
              </div>

              <div className="rounded-2xl border border-black/8 bg-white p-6 shadow-xs">
                <div className="size-8 rounded-full bg-note-mint/60 flex items-center justify-center text-note-ink font-bold text-[13px]">
                  3
                </div>
                <h3 className="mt-4 text-[16px] font-semibold text-ink">You paste it in</h3>
                <p className="text-ink-muted mt-2 text-[13.5px] leading-relaxed">
                  Open Peeky Task, click &quot;Enter a key&quot; on the top banner or in Settings, paste your key, and you are done. Zero internet connection required.
                </p>
              </div>
            </div>
          </section>

          {/* Section: Common Questions */}
          <section className="mt-16 border-t border-black/8 pt-14">
            <h2 className="type-headline text-ink text-[clamp(1.5rem,2.8vw,2rem)]">
              Licensing FAQ
            </h2>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-black/8 bg-white p-6 shadow-xs">
                <div className="flex items-center gap-2 text-ink font-semibold text-[15px]">
                  <HelpCircle className="size-4 text-note-ink" />
                  <span>Your key isn&apos;t working?</span>
                </div>
                <p className="text-ink-muted mt-2.5 text-[13.5px] leading-relaxed">
                  Email support with your order email or key, and we will verify it and issue a replacement if needed. Keys are linked to your purchase record.
                </p>
              </div>

              <div className="rounded-2xl border border-black/8 bg-white p-6 shadow-xs">
                <div className="flex items-center gap-2 text-ink font-semibold text-[15px]">
                  <Laptop className="size-4 text-note-ink" />
                  <span>Moving to a new PC</span>
                </div>
                <p className="text-ink-muted mt-2.5 text-[13.5px] leading-relaxed">
                  You can transfer your license between your computers anytime. Simply enter the same key in Peeky Task on your new PC.
                </p>
              </div>

              <div className="rounded-2xl border border-black/8 bg-white p-6 shadow-xs">
                <div className="flex items-center gap-2 text-ink font-semibold text-[15px]">
                  <RotateCcw className="size-4 text-note-ink" />
                  <span>Lost your key?</span>
                </div>
                <p className="text-ink-muted mt-2.5 text-[13.5px] leading-relaxed">
                  Email support from the address used during purchase and we will re-send your key immediately. Your license is securely recorded with Dodo Payments.
                </p>
              </div>

              <div className="rounded-2xl border border-black/8 bg-white p-6 shadow-xs">
                <div className="flex items-center gap-2 text-ink font-semibold text-[15px]">
                  <ShieldCheck className="size-4 text-note-ink" />
                  <span>Questions before you buy?</span>
                </div>
                <p className="text-ink-muted mt-2.5 text-[13.5px] leading-relaxed">
                  Reach out directly to{" "}
                  <a
                    href="mailto:princepatel5807@gmail.com"
                    className="text-ink font-medium underline"
                  >
                    princepatel5807@gmail.com
                  </a>
                  . We are happy to help answer any questions.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
