"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Does it need an account?",
      a: "Not to try it. The 7-day trial requires no account, no email, and no credit card. When you buy a lifetime license, you receive a license key instantly via email to paste into the app. Your tasks are stored locally on your PC and are never uploaded.",
    },
    {
      q: "What happens when the 7-day trial ends?",
      a: "The app enters read-only mode, but your tasks always stay yours. You can still view, search, check off, and export everything you've written. Only creating new tasks requires an unlocked license.",
    },
    {
      q: "Is it a subscription?",
      a: "No. You pay once for a perpetual lifetime license. There are no recurring monthly or annual fees, and no remote server deciding whether your app still launches.",
    },
    {
      q: "How many PCs can I use it on?",
      a: "A single license covers two devices at once (for example, your desktop PC and your laptop). You can also transfer your license to a new PC anytime from the Settings pane.",
    },
    {
      q: "Does it keep working offline?",
      a: "Yes, 100%. Peeky Task runs locally on Windows. It never requires an active internet connection to organize or view your daily to-dos.",
    },
    {
      q: "Will it get in the way of games or presentations?",
      a: "No. Peeky Task features an automatic 'Hide over full-screen apps' mode. Whenever a game, PowerPoint, or video player goes full-screen, Peeky Task automatically steps aside and returns when you are back at the desktop.",
    },
    {
      q: "Does it clutter my taskbar or Alt+Tab switcher?",
      a: "No. Peeky Task lives as a subtle floating pill or edge dock with an icon in your system tray. It does not create an annoying taskbar entry or clutter Alt+Tab.",
    },
    {
      q: "Can I export my tasks?",
      a: "Anytime. Your tasks are stored locally in plain JSON. You can export them to Markdown or standard text anytime with a single click in Settings.",
    },
  ];

  return (
    <section id="faq" className="text-ink relative isolate scroll-mt-16 overflow-clip bg-smoke py-24 sm:py-32">
      <div className="mx-auto w-full px-5 sm:px-8 max-w-[820px]">
        {/* Section Heading */}
        <div className="mx-auto max-w-[62ch] text-center">
          <h2 className="type-headline text-ink text-[clamp(1.95rem,4.4vw,3.4rem)]">
            The things people actually want to know.
          </h2>
        </div>

        {/* Accordion Container */}
        <div className="mt-12 flex flex-col divide-y divide-black/8 border-y border-black/8">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="py-2">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between py-4 text-left transition-colors cursor-pointer group"
                >
                  <span className="text-[16px] font-medium tracking-[-0.015em] text-ink group-hover:text-black">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`size-4 text-ink-muted transition-transform duration-300 shrink-0 ml-4 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="pb-4 pt-1 text-ink-muted text-[14.5px] leading-relaxed max-w-[70ch]">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
