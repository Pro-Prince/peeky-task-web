import { Check, LockOpen, Sparkles } from "lucide-react";

export function PricingSection() {
  return (
    <section id="pricing" className="text-ink relative isolate scroll-mt-16 overflow-clip bg-white py-24 sm:py-32">
      <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-8">
        {/* Section Heading */}
        <div className="mx-auto max-w-[62ch] text-center">
          <h2 className="type-headline text-ink text-[clamp(1.95rem,4.4vw,3.4rem)]">
            Pay once. Keep it forever.
          </h2>
          <p className="text-ink-muted mt-5 text-[clamp(1rem,1.35vw,1.14rem)] leading-relaxed mx-auto">
            Try everything free for seven days. Then pay once for a perpetual licence — no subscription, and nothing standing between you and your work.
          </p>
        </div>

        {/* Read-Only Guarantee Alert */}
        <div className="border-note-mint/60 bg-note-mint/25 mx-auto mt-12 flex max-w-[760px] items-start gap-4 rounded-2xl border p-6">
          <span className="bg-note-mint grid size-9 shrink-0 place-items-center rounded-full">
            <LockOpen className="text-note-ink size-4.5" />
          </span>
          <div>
            <p className="text-[15px] font-semibold tracking-[-0.015em]">
              When the trial ends, nothing is held hostage
            </p>
            <p className="text-ink-muted mt-1.5 text-[14px] leading-relaxed">
              The app simply enters read-only mode. All your existing tasks remain visible, searchable, and exportable forever.
            </p>
          </div>
        </div>

        {/* 2 Pricing Tier Cards */}
        <div className="mx-auto mt-10 grid max-w-[760px] gap-5 sm:grid-cols-2">
          {/* Card 1: 7-Day Free Trial */}
          <div className="relative flex h-full flex-col rounded-3xl border border-black/8 bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 shadow-xs">
            <p className="text-[13px] font-semibold text-ink-muted">Free trial</p>
            <p className="type-display mt-3 text-[clamp(2.2rem,4vw,2.8rem)]">Free</p>
            <p className="mt-2.5 text-[13px] text-ink-muted">for 7 days</p>
            <p className="mt-5 text-[14.5px] leading-relaxed text-ink-muted">
              Everything unlocked, no credit card, no registration.
            </p>

            <ul className="mt-6 flex-1 space-y-3">
              <li className="flex items-start gap-2.5">
                <Check className="mt-0.5 size-4 shrink-0 text-note-ink/40 stroke-[2.4]" />
                <span className="text-[13.5px] leading-relaxed text-ink-muted">
                  The complete app for seven days
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="mt-0.5 size-4 shrink-0 text-note-ink/40 stroke-[2.4]" />
                <span className="text-[13.5px] leading-relaxed text-ink-muted">
                  No sign-up and no email required
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="mt-0.5 size-4 shrink-0 text-note-ink/40 stroke-[2.4]" />
                <span className="text-[13.5px] leading-relaxed text-ink-muted">
                  When trial ends, tasks stay readable & exportable
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="mt-0.5 size-4 shrink-0 text-note-ink/40 stroke-[2.4]" />
                <span className="text-[13.5px] leading-relaxed text-ink-muted">
                  Only adding new tasks locks after 7 days
                </span>
              </li>
            </ul>

            <div className="mt-7">
              <a
                href="#download"
                className="inline-flex items-center justify-center rounded-full font-medium tracking-[-0.01em] transition-all h-10 px-5 text-[14px] text-ink border border-black/15 hover:border-black/30 hover:bg-black/5 w-full text-center"
              >
                Get it from Microsoft Store
              </a>
            </div>
          </div>

          {/* Card 2: Lifetime Personal License */}
          <div className="relative flex h-full flex-col rounded-3xl border border-ink bg-ink p-7 text-white shadow-[0_40px_90px_-40px_rgba(0,0,0,0.7)] transition-all duration-300 hover:-translate-y-1.5">
            <p className="text-[13px] font-semibold text-white/60">Lifetime License</p>
            <div className="flex flex-col items-start gap-1 mt-3">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="type-display text-[clamp(2.2rem,4vw,2.8rem)]">$5.99</span>
              </div>
            </div>

            <p className="mt-2 text-[13px] text-white/50">one-time payment, yours forever</p>
            <p className="mt-4 text-[14.5px] leading-relaxed text-white/70">
              One perpetual licence for your personal computers.
            </p>

            <ul className="mt-6 flex-1 space-y-3">
              <li className="flex items-start gap-2.5">
                <Check className="mt-0.5 size-4 shrink-0 text-note-butter stroke-[2.4]" />
                <span className="text-[13.5px] leading-relaxed text-white/80">
                  Perpetual licence — never a subscription
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="mt-0.5 size-4 shrink-0 text-note-butter stroke-[2.4]" />
                <span className="text-[13.5px] leading-relaxed text-white/80">
                  Instant license key delivered by email
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="mt-0.5 size-4 shrink-0 text-note-butter stroke-[2.4]" />
                <span className="text-[13.5px] leading-relaxed text-white/80">
                  Valid on up to 2 devices simultaneously
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="mt-0.5 size-4 shrink-0 text-note-butter stroke-[2.4]" />
                <span className="text-[13.5px] leading-relaxed text-white/80">
                  All updates included for life
                </span>
              </li>
            </ul>

            {/* Checkout Action Button */}
            <div className="mt-8 border-t border-white/10 pt-6">
              <a
                href="https://checkout.dodopayments.com/buy/pdt_0NqCUIWS9mwMJkq06Opw3?quantity=1&showDiscounts=false"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full font-medium tracking-[-0.01em] transition-all h-10 px-5 text-[14px] bg-white text-black hover:bg-white/90 w-full text-center cursor-pointer shadow-md"
              >
                Buy a lifetime license
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
