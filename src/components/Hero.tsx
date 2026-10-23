"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown } from "lucide-react";

export function Hero() {
  const heroVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const vid = heroVideoRef.current;
    if (!vid) return;

    vid.muted = true;
    vid.defaultMuted = true;
    vid.playsInline = true;
    vid.loop = true;

    const tryPlay = () => {
      vid.muted = true;
      const playPromise = vid.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // If browser restricted unmuted autoplay, mute and resume on first interaction
          const resume = () => {
            vid.muted = true;
            vid.play().catch(() => {});
            window.removeEventListener("pointerdown", resume);
            window.removeEventListener("scroll", resume);
            window.removeEventListener("keydown", resume);
          };
          window.addEventListener("pointerdown", resume, { once: true, passive: true });
          window.addEventListener("scroll", resume, { once: true, passive: true });
          window.addEventListener("keydown", resume, { once: true, passive: true });
        });
      }
    };

    tryPlay();
    vid.addEventListener("canplay", tryPlay);
    vid.addEventListener("loadeddata", tryPlay);

    return () => {
      vid.removeEventListener("canplay", tryPlay);
      vid.removeEventListener("loadeddata", tryPlay);
    };
  }, []);
  return (
    <section id="top" className="bg-paper-bg relative isolate overflow-clip pt-26 pb-16 sm:pt-28 sm:pb-24">
      {/* Background Gradients & Delicate Grid */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_-12%,#f1effa_0%,#fbfbfd_56%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(46%_38%_at_22%_18%,rgba(194,221,246,0.55)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(42%_36%_at_78%_26%,rgba(220,201,242,0.50)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(52%_34%_at_50%_86%,rgba(251,224,141,0.28)_0%,transparent_72%)]" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: "linear-gradient(to right,#1d1d1f 1px,transparent 1px),linear-gradient(to bottom,#1d1d1f 1px,transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage: "radial-gradient(72% 55% at 50% 22%,#000 0%,transparent 78%)",
          }}
        />
      </div>

      {/* Floating Colored Pill Accents (Drift Animation) */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden lg:block">
        <span
          className="absolute flex overflow-hidden rounded-[12px] opacity-45"
          style={{
            top: "18%",
            left: "6%",
            width: "96px",
            height: "69px",
            background: "#FBE08D",
            animation: "pn-drift 9s ease-in-out 0s infinite",
          }}
        >
          <span className="h-full w-[13%] shrink-0" style={{ background: "#F6D272" }} />
        </span>
        <span
          className="absolute flex overflow-hidden rounded-[12px] opacity-45"
          style={{
            top: "34%",
            left: "2%",
            width: "68px",
            height: "49px",
            background: "#C2DDF6",
            animation: "pn-drift 9s ease-in-out 1.2s infinite",
          }}
        >
          <span className="h-full w-[13%] shrink-0" style={{ background: "#AFD1F1" }} />
        </span>
        <span
          className="absolute flex overflow-hidden rounded-[12px] opacity-45"
          style={{
            top: "62%",
            left: "9%",
            width: "78px",
            height: "56px",
            background: "#B9E7D0",
            animation: "pn-drift 9s ease-in-out 2.4s infinite",
          }}
        >
          <span className="h-full w-[13%] shrink-0" style={{ background: "#A4DCC0" }} />
        </span>
        <span
          className="absolute flex overflow-hidden rounded-[12px] opacity-45"
          style={{
            top: "16%",
            right: "7%",
            width: "88px",
            height: "63px",
            background: "#F9C9D6",
            animation: "pn-drift 9s ease-in-out 0.6s infinite",
          }}
        >
          <span className="h-full w-[13%] shrink-0" style={{ background: "#F3B6C7" }} />
        </span>
        <span
          className="absolute flex overflow-hidden rounded-[12px] opacity-45"
          style={{
            top: "40%",
            right: "3%",
            width: "62px",
            height: "45px",
            background: "#DCC9F2",
            animation: "pn-drift 9s ease-in-out 1.8s infinite",
          }}
        >
          <span className="h-full w-[13%] shrink-0" style={{ background: "#CCB6EA" }} />
        </span>
        <span
          className="absolute flex overflow-hidden rounded-[12px] opacity-45"
          style={{
            top: "66%",
            right: "10%",
            width: "82px",
            height: "59px",
            background: "#FBD4A8",
            animation: "pn-drift 9s ease-in-out 3s infinite",
          }}
        >
          <span className="h-full w-[13%] shrink-0" style={{ background: "#F6C48E" }} />
        </span>
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1180px] px-5 text-center sm:px-8">
        {/* Release Pill Badge */}
        <div data-rise="load" style={{ "--rise-delay": "0s", "--rise-y": "12px", "--rise-dur": "0.8s" } as React.CSSProperties}>
          <a
            href="#features"
            className="text-ink-muted hover:text-ink mb-7 inline-flex items-center gap-2 rounded-full border border-black/8 bg-white/70 py-1.5 pr-4 pl-1.5 text-[12.5px] shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-all hover:border-black/16"
          >
            <span className="bg-note-butter text-note-ink rounded-full px-2 py-0.5 text-[11px] font-semibold">
              New for Windows
            </span>
            Floating daily tasks at the edge
          </a>
        </div>

        {/* Headline */}
        <h1 className="type-display text-ink mx-auto max-w-[21ch] text-[clamp(2.35rem,5.5vw,4.35rem)]">
          <span>Daily to-dos for Windows that live on the edge of your screen.</span>
        </h1>

        {/* Subhead */}
        <div data-rise="load" style={{ "--rise-delay": "0.62s", "--rise-y": "18px", "--rise-dur": "0.9s" } as React.CSSProperties}>
          <p className="text-ink-muted mx-auto mt-6 max-w-[54ch] text-[clamp(0.98rem,1.35vw,1.13rem)] leading-relaxed">
            Capture your focus, check off tasks in seconds, and get straight back to what you were doing.
          </p>
        </div>

        {/* CTA Buttons */}
        <div data-rise="load" style={{ "--rise-delay": "0.76s", "--rise-y": "18px", "--rise-dur": "0.85s" } as React.CSSProperties}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#download"
              className="bg-ink hover:bg-ink/88 inline-flex h-12 items-center rounded-full px-7 text-[15px] font-medium tracking-[-0.01em] text-white shadow-[0_12px_34px_-12px_rgba(0,0,0,0.6)] transition-all active:scale-[0.98]"
            >
              Start the 7-day trial
            </a>
            <a
              href="#dock"
              className="text-ink inline-flex h-12 items-center rounded-full border border-black/15 bg-white/80 px-7 text-[15px] font-medium tracking-[-0.01em] transition-all hover:border-black/30 hover:bg-black/5"
            >
              See how it works
            </a>
          </div>
        </div>

        {/* Social Proof */}
        <div data-rise="load" style={{ "--rise-delay": "0.86s", "--rise-y": "10px", "--rise-dur": "0.85s" } as React.CSSProperties}>
          <div className="mt-7 inline-flex items-center gap-3">
            <span aria-hidden="true" className="flex -space-x-1.5">
              <span className="size-5 rounded-full ring-2 ring-white" style={{ background: "#FBE08D" }} />
              <span className="size-5 rounded-full ring-2 ring-white" style={{ background: "#C2DDF6" }} />
              <span className="size-5 rounded-full ring-2 ring-white" style={{ background: "#F9C9D6" }} />
              <span className="size-5 rounded-full ring-2 ring-white" style={{ background: "#B9E7D0" }} />
            </span>
            <p className="text-ink-muted text-[13px]">
              <span><span className="text-ink font-semibold">2,000+</span> installs</span>
              <span><span className="mx-1.5">·</span><span className="text-ink font-semibold">4.9/5</span> on Microsoft Store</span>
            </p>
          </div>
        </div>

        {/* Store Trust line */}
        <div data-rise="load" style={{ "--rise-delay": "0.92s", "--rise-y": "10px", "--rise-dur": "0.85s" } as React.CSSProperties}>
          <p className="text-ink-muted/80 mt-4 text-[12.5px]">
            From the Microsoft Store · 100% offline · nothing leaves your PC
          </p>
        </div>
      </div>

      {/* Laptop Mockup with Floating Peek Widget */}
      <div id="dock" className="relative z-10 mx-auto mt-10 w-full max-w-[980px] scroll-mt-24 px-5 sm:mt-12 sm:px-8">
        <div id="deck" className="scroll-mt-24">
          <div className="relative w-full">
            {/* Ambient Glows */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-x-[18%] -top-[14%] bottom-[6%] -z-10 rounded-[50%] blur-[70px]"
              style={{ background: "radial-gradient(closest-side,rgba(150,132,222,0.30),transparent 72%)" }}
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-[12%] top-[30%] bottom-0 -z-10 rounded-[50%] blur-[60px]"
              style={{ background: "radial-gradient(closest-side,rgba(246,210,114,0.30),transparent 70%)" }}
            />

            {/* Laptop Screen Content: Floating Bar Demo Video */}
            <div
              className="absolute overflow-hidden bg-black"
              style={{
                left: "12.75%",
                top: "3.80%",
                width: "74.30%",
                height: "71.20%",
              }}
            >
              <div className="relative isolate overflow-hidden h-full w-full flex items-center justify-center bg-black">
                <video
                  ref={heroVideoRef}
                  src="/media/video/peeky-task-video.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  poster="/media/screenshots/hero-video-first-frame.png"
                  className="h-full w-full object-contain"
                  onEnded={(e) => {
                    e.currentTarget.currentTime = 0;
                    e.currentTarget.play().catch(() => {});
                  }}
                />
              </div>
            </div>

            {/* Laptop Frame Image */}
            <Image
              src="/media/windows-laptop-front-view-mockup.png"
              alt="Windows Laptop Mockup"
              width={1536}
              height={1024}
              priority
              className="pointer-events-none relative block w-full"
            />

            {/* Drop Shadow beneath Laptop */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-[10%] bottom-[1%] -z-10 h-[4%] rounded-[50%] blur-[22px]"
              style={{ background: "rgba(29,29,31,0.30)" }}
            />
          </div>
        </div>
      </div>

      {/* Bounce Down Indicator */}
      <div className="relative z-10 mt-12 flex justify-center">
        <a
          href="#features"
          aria-label="Scroll to features"
          className="text-ink-muted hover:text-ink flex size-10 items-center justify-center rounded-full border border-black/10 bg-white/60 transition-colors"
          style={{ animation: "pn-nudge 2.4s ease-in-out infinite" }}
        >
          <ArrowDown className="size-4" />
        </a>
      </div>
    </section>
  );
}
