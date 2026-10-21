"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Command,
  Monitor,
  Maximize,
  Search,
  CheckCircle2,
  Power,
  RotateCcw,
  Sun,
  Moon,
} from "lucide-react";

export function FeaturesBento() {
  // State for interactive color bar
  const [selectedColor, setSelectedColor] = useState("Butter");

  // State for interactive theme preview
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const colors = [
    { name: "Blue", bg: "#C2DDF6", border: "#AFD1F1" },
    { name: "Mint", bg: "#B9E7D0", border: "#A4DCC0" },
    { name: "Lilac", bg: "#DCC9F2", border: "#CCB6EA" },
    { name: "Butter", bg: "#FBE08D", border: "#F6D272" },
    { name: "Blush", bg: "#F9C9D6", border: "#F3B6C7" },
    { name: "Peach", bg: "#FBD4A8", border: "#F6C48E" },
    { name: "Sky", bg: "#BAE4E7", border: "#A5D8DD" },
    { name: "Slate", bg: "#D9DFE8", border: "#C8D1DD" },
  ];

  return (
    <section id="features" className="text-ink relative isolate scroll-mt-16 overflow-clip bg-white py-24 sm:py-32">
      <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-8">
        {/* Section Heading */}
        <div data-reveal className="mx-auto max-w-[62ch] text-center" style={{ "--reveal-y": "24px" } as React.CSSProperties}>
          <h2 className="type-headline text-ink text-[clamp(1.95rem,4.4vw,3.4rem)]">
            A complete task system, hiding at the edge.
          </h2>
          <p className="text-ink-muted mt-5 text-[clamp(1rem,1.35vw,1.14rem)] leading-relaxed">
            Everything you need to keep daily tasks in view, without having another giant app taking over your screen.
          </p>
        </div>

        {/* Bento Grid Top Section */}
        <div className="mt-16 grid gap-4 md:grid-cols-6">
          {/* Bento Card 1: All Tasks Manager */}
          <div data-reveal className="flex flex-col overflow-hidden rounded-3xl border border-black/6 bg-white p-7 shadow-[0_1px_2px_rgba(0,0,0,0.04)] md:col-span-4" style={{ "--reveal-delay": "0.1s" } as React.CSSProperties}>
            <h3 className="text-[19px] font-semibold tracking-[-0.02em]">
              All Tasks, with everything organized
            </h3>
            <p className="text-ink-muted mt-2.5 max-w-[46ch] text-[14.5px] leading-relaxed">
              See, search, sort, and manage your to-dos across days from one clean pane.
            </p>
            <div className="mt-6 overflow-hidden rounded-xl border border-black/8 bg-white shadow-[0_20px_60px_-30px_rgba(0,0,0,0.35)]">
              <div className="relative isolate overflow-hidden" style={{ aspectRatio: "16 / 10" }}>
                <Image
                  src="/media/screenshots/manager-all-notes-2.png"
                  alt="All Tasks Manager Window"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Bento Card 2: Floating Pill View */}
          <div data-reveal className="flex flex-col overflow-hidden rounded-3xl border border-black/6 bg-white p-7 shadow-[0_1px_2px_rgba(0,0,0,0.04)] md:col-span-2" style={{ "--reveal-delay": "0.2s" } as React.CSSProperties}>
            <h3 className="text-[19px] font-semibold tracking-[-0.02em]">
              Subtle desktop pill
            </h3>
            <p className="text-ink-muted mt-2.5 max-w-[46ch] text-[14.5px] leading-relaxed">
              Floats silently on your wallpaper or over other windows. Expands when you peek.
            </p>
            <div className="mt-6 overflow-hidden rounded-xl border border-black/8 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.35)]">
              <div className="relative isolate overflow-hidden" style={{ aspectRatio: "4 / 5" }}>
                <Image
                  src="/media/screenshots/note-window-4.png"
                  alt="Floating Task Pill Window"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Bento Card 3: Delete with 10s Undo Demo */}
          <div data-reveal className="flex flex-col overflow-hidden rounded-3xl border border-black/6 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04)] md:col-span-2" style={{ "--reveal-delay": "0.15s" } as React.CSSProperties}>
            <div className="p-7 pb-0">
              <h3 className="text-[19px] font-semibold tracking-[-0.02em]">
                Delete never asks
              </h3>
              <p className="text-ink-muted mt-2.5 max-w-[46ch] text-[14.5px] leading-relaxed">
                Check off or delete instantly. No pop-up dialogs. 10 seconds to undo if needed.
              </p>
            </div>
            {/* Animated interactive card matching peekynotes */}
            <div className="flex h-full items-center justify-center p-6">
              <div
                className="w-full max-w-[260px] overflow-hidden rounded-[14px] shadow-[0_18px_44px_-18px_rgba(0,0,0,0.45)]"
                style={{
                  background: "#F9C9D6",
                  animation: "pn-undo-note 7.2s linear 0s infinite",
                }}
              >
                <div
                  className="flex items-center justify-between px-3.5"
                  style={{ background: "#F3B6C7", height: "30px" }}
                >
                  <span className="font-hand text-[13px]" style={{ color: "#2A3442" }}>
                    Finish project proposal
                  </span>
                  <span className="text-[10px]" style={{ color: "#66748A" }}>
                    today
                  </span>
                </div>
                <div className="px-3.5 pt-3 pb-2">
                  <p className="font-hand text-[13px] leading-relaxed" style={{ color: "#2A3442" }}>
                    Send final PDF to team
                  </p>
                </div>
                <div className="relative h-[42px] px-3.5 pb-3">
                  <div
                    className="absolute inset-x-3.5 top-0 flex h-full items-center gap-2"
                    style={{ animation: "pn-undo-bar 7.2s linear 0s infinite" }}
                  >
                    <span className="rounded-full px-2.5 py-1 text-[10.5px]" style={{ color: "#66748A", background: "rgba(0,0,0,0.06)" }}>
                      Pin
                    </span>
                    <span className="rounded-full px-2.5 py-1 text-[10.5px]" style={{ color: "#66748A", background: "rgba(0,0,0,0.06)" }}>
                      Color
                    </span>
                    <span className="rounded-full px-2.5 py-1 text-[10.5px]" style={{ color: "#B93A33", background: "rgba(0,0,0,0.06)" }}>
                      Complete
                    </span>
                  </div>
                  <div
                    className="absolute inset-x-3.5 top-0 flex h-full flex-col justify-center gap-2"
                    style={{ animation: "pn-undo-count 7.2s linear 0s infinite" }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[11px]" style={{ color: "#B93A33" }}>
                        Done. 10s to undo.
                      </span>
                      <span
                        className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-medium"
                        style={{ background: "rgba(0,0,0,0.10)", color: "#2A3442" }}
                      >
                        <RotateCcw className="size-2.5" /> Undo
                      </span>
                    </div>
                    <span className="block h-[3px] overflow-hidden rounded-full bg-black/10">
                      <span
                        className="block h-full origin-left rounded-full"
                        style={{ background: "#B93A33", animation: "pn-undo-drain 7.2s linear 0s infinite" }}
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bento Card 4: Interactive 8 Colors */}
          <div data-reveal className="flex flex-col overflow-hidden rounded-3xl border border-black/6 bg-white p-7 shadow-[0_1px_2px_rgba(0,0,0,0.04)] md:col-span-2" style={{ "--reveal-delay": "0.2s" } as React.CSSProperties}>
            <h3 className="text-[19px] font-semibold tracking-[-0.02em]">
              Eight task colors, Ctrl+. apart
            </h3>
            <p className="text-ink-muted mt-2.5 max-w-[46ch] text-[14.5px] leading-relaxed">
              Color-code by project, urgency, or mood with a single quick keyboard tap.
            </p>
            <div className="mt-7 flex flex-1 flex-col justify-end">
              <div className="flex gap-1.5">
                {colors.map((c) => {
                  const isSelected = selectedColor === c.name;
                  return (
                    <button
                      key={c.name}
                      type="button"
                      aria-label={c.name}
                      onClick={() => setSelectedColor(c.name)}
                      className="relative h-16 flex-1 overflow-hidden rounded-lg transition-all duration-300 ease-out cursor-pointer hover:opacity-90"
                      style={{
                        background: c.bg,
                        flexGrow: isSelected ? 2.4 : 1,
                        transform: isSelected ? "translateY(-4px)" : "none",
                      }}
                    >
                      <span
                        className="absolute inset-y-0 left-0 w-[22%]"
                        style={{ background: c.border }}
                      />
                    </button>
                  );
                })}
              </div>
              <p className="text-ink-muted mt-3 text-[12.5px]">
                Active color: <span className="text-ink font-semibold">{selectedColor}</span>
              </p>
            </div>
          </div>

          {/* Bento Card 5: Interactive Light & Dark Switcher */}
          <div data-reveal className="flex flex-col overflow-hidden rounded-3xl border border-black/6 bg-white p-7 shadow-[0_1px_2px_rgba(0,0,0,0.04)] md:col-span-2" style={{ "--reveal-delay": "0.25s" } as React.CSSProperties}>
            <h3 className="text-[19px] font-semibold tracking-[-0.02em]">
              Light and dark Fluent themes
            </h3>
            <p className="text-ink-muted mt-2.5 max-w-[46ch] text-[14.5px] leading-relaxed">
              Follows your Windows system preferences or toggles to your choice instantly.
            </p>
            <div className="mt-7 flex flex-1 flex-col justify-end">
              <div
                className="relative overflow-hidden rounded-xl border p-4 transition-colors duration-400 ease-out"
                style={{
                  backgroundColor: isDarkTheme ? "#1b1b1f" : "#ffffff",
                  borderColor: isDarkTheme ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.08)",
                }}
              >
                <div className="flex items-center gap-3">
                  <span
                    className="h-2 w-16 rounded-full transition-colors duration-400"
                    style={{ backgroundColor: isDarkTheme ? "#38383e" : "#e6e6ea" }}
                  />
                  <span
                    className="h-2 w-10 rounded-full transition-colors duration-400"
                    style={{ backgroundColor: isDarkTheme ? "#2c2c30" : "#f0f0f4" }}
                  />
                </div>
                <div className="mt-4 flex gap-2">
                  <div className="flex h-12 flex-1 flex-col justify-center gap-1 rounded-lg px-2.5" style={{ background: "#FBE08D" }}>
                    <span className="font-hand text-[11px]" style={{ color: "#2A3442" }}>Deep Work</span>
                    <span className="h-1 w-3/4 rounded-full" style={{ background: "#F6D272" }} />
                  </div>
                  <div className="flex h-12 flex-1 flex-col justify-center gap-1 rounded-lg px-2.5" style={{ background: "#C2DDF6" }}>
                    <span className="font-hand text-[11px]" style={{ color: "#2A3442" }}>Review PR</span>
                    <span className="h-1 w-3/4 rounded-full" style={{ background: "#AFD1F1" }} />
                  </div>
                  <div className="flex h-12 flex-1 flex-col justify-center gap-1 rounded-lg px-2.5" style={{ background: "#B9E7D0" }}>
                    <span className="font-hand text-[11px]" style={{ color: "#2A3442" }}>Ship Build</span>
                    <span className="h-1 w-3/4 rounded-full" style={{ background: "#A4DCC0" }} />
                  </div>
                </div>
              </div>

              {/* Theme Toggle Button */}
              <button
                type="button"
                onClick={() => setIsDarkTheme(!isDarkTheme)}
                className="bg-smoke hover:bg-smoke/70 mt-3 inline-flex w-fit items-center gap-2 rounded-full px-3 py-1.5 text-[12.5px] font-medium transition-colors cursor-pointer"
              >
                {isDarkTheme ? (
                  <>
                    <Moon className="size-3.5" /> Dark mode preview
                  </>
                ) : (
                  <>
                    <Sun className="size-3.5" /> Light mode preview
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* 6 Sub-Feature Cards */}
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div data-reveal className="group rounded-2xl border border-black/6 bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg" style={{ "--reveal-delay": "0.05s" } as React.CSSProperties}>
            <div className="bg-smoke text-ink group-hover:bg-note-butter mb-4 grid size-9 place-items-center rounded-xl transition-colors">
              <Command className="size-4.5" />
            </div>
            <h3 className="text-[15px] font-semibold tracking-[-0.015em]">Registered system-wide</h3>
            <p className="text-ink-muted mt-2 text-[14px] leading-relaxed">
              Summon or hide Peeky Task from anywhere with a single global shortcut (<kbd className="font-mono text-[12px] bg-smoke px-1.5 py-0.5 rounded border border-black/10">Alt+Space</kbd>).
            </p>
          </div>

          <div data-reveal className="group rounded-2xl border border-black/6 bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg" style={{ "--reveal-delay": "0.1s" } as React.CSSProperties}>
            <div className="bg-smoke text-ink group-hover:bg-note-butter mb-4 grid size-9 place-items-center rounded-xl transition-colors">
              <Monitor className="size-4.5" />
            </div>
            <h3 className="text-[15px] font-semibold tracking-[-0.015em]">Any screen edge</h3>
            <p className="text-ink-muted mt-2 text-[14px] leading-relaxed">
              Left, right, top, or docked to your desktop wallpaper. You choose where your tasks stay.
            </p>
          </div>

          <div data-reveal className="group rounded-2xl border border-black/6 bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg" style={{ "--reveal-delay": "0.15s" } as React.CSSProperties}>
            <div className="bg-smoke text-ink group-hover:bg-note-butter mb-4 grid size-9 place-items-center rounded-xl transition-colors">
              <Maximize className="size-4.5" />
            </div>
            <h3 className="text-[15px] font-semibold tracking-[-0.015em]">Out of the way of fullscreen</h3>
            <p className="text-ink-muted mt-2 text-[14px] leading-relaxed">
              Auto-hides during gaming or presentations, then returns smoothly when you’re back on desktop.
            </p>
          </div>

          <div data-reveal className="group rounded-2xl border border-black/6 bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg" style={{ "--reveal-delay": "0.2s" } as React.CSSProperties}>
            <div className="bg-smoke text-ink group-hover:bg-note-butter mb-4 grid size-9 place-items-center rounded-xl transition-colors">
              <Search className="size-4.5" />
            </div>
            <h3 className="text-[15px] font-semibold tracking-[-0.015em]">Instant search and filter</h3>
            <p className="text-ink-muted mt-2 text-[14px] leading-relaxed">
              Filter by today, completed, or backlog in milliseconds with zero lag.
            </p>
          </div>

          <div data-reveal className="group rounded-2xl border border-black/6 bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg" style={{ "--reveal-delay": "0.25s" } as React.CSSProperties}>
            <div className="bg-smoke text-ink group-hover:bg-note-butter mb-4 grid size-9 place-items-center rounded-xl transition-colors">
              <CheckCircle2 className="size-4.5" />
            </div>
            <h3 className="text-[15px] font-semibold tracking-[-0.015em]">The Rule of 3</h3>
            <p className="text-ink-muted mt-2 text-[14px] leading-relaxed">
              Optional focus filter: pins only your top 3 daily tasks so you avoid overwhelm and ship real work.
            </p>
          </div>

          <div data-reveal className="group rounded-2xl border border-black/6 bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg" style={{ "--reveal-delay": "0.3s" } as React.CSSProperties}>
            <div className="bg-smoke text-ink group-hover:bg-note-butter mb-4 grid size-9 place-items-center rounded-xl transition-colors">
              <Power className="size-4.5" />
            </div>
            <h3 className="text-[15px] font-semibold tracking-[-0.015em]">Start with Windows</h3>
            <p className="text-ink-muted mt-2 text-[14px] leading-relaxed">
              Launches quietly into background memory the instant your desktop boots up.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
