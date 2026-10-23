"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface SurfaceCard {
  id: string;
  image: string;
  alt: string;
  title: string;
  description: string;
}

const SURFACES: SurfaceCard[] = [
  {
    id: "deck",
    image: "/media/screenshots/deck-peeked-3.png",
    alt: "The deck fanned out as leaning tabs at the right edge of the screen",
    title: "The deck",
    description: "Your tasks, waiting at the edge.",
  },
  {
    id: "hover",
    image: "/media/screenshots/note-expanded-4.png",
    alt: "One task expanded in place while the others stay tabbed",
    title: "Hover to expand",
    description: "Peek without opening.",
  },
  {
    id: "edit",
    image: "/media/screenshots/click-to-edit.png",
    alt: "Task list window, click to edit",
    title: "Click a task to edit",
    description: "A task list becomes its own window.",
  },
  {
    id: "archived",
    image: "/media/screenshots/manager-dark-2.png",
    alt: "The Archived Tasks window in dark theme",
    title: "Archived tasks",
    description: "Out of sight, never out of reach.",
  },
  {
    id: "settings",
    image: "/media/screenshots/settings-2.png",
    alt: "The settings pane showing theme, screen edge and shortcuts",
    title: "Settings",
    description: "Make Peeky Task yours.",
  },
  {
    id: "licence",
    image: "/media/screenshots/licence-2.png",
    alt: "The licence pane with the activation box",
    title: "Your licence",
    description: "Buy once. Keep it yours.",
  },
];

export function EverySurface() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLUListElement>(null);
  const [translateX, setTranslateX] = useState(0);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (containerRef.current && trackRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            const totalScroll = rect.height - window.innerHeight;
            if (totalScroll > 0) {
              const progress = Math.min(Math.max(-rect.top / totalScroll, 0), 1);
              const maxTrack = trackRef.current.scrollWidth - window.innerWidth;
              if (maxTrack > 0) {
                setTranslateX(progress * maxTrack);
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const headlineWords = ["Every", "surface,", "at", "a", "glance."];

  return (
    <section id="surfaces" className="text-ink relative isolate scroll-mt-20 overflow-clip bg-haze pt-24 sm:pt-32">
      <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-8">
        <div className="mx-auto max-w-[62ch] text-center">
          <h2 className="type-headline text-ink text-[clamp(1.95rem,4.4vw,3.4rem)]">
            <span className="sr-only">Every surface, at a glance.</span>
            <span aria-hidden="true" className="inline">
              {headlineWords.map((word, i) => (
                <React.Fragment key={word}>
                  <span className="inline-block overflow-hidden pb-[0.12em] align-bottom">
                    <span
                      data-rise="scroll"
                      className="inline-block"
                      style={{
                        "--rise-delay": `${(i * 0.045).toFixed(3)}s`,
                        "--rise-y": "0.9em",
                        "--rise-dur": "0.9s",
                      } as React.CSSProperties}
                    >
                      {word}
                    </span>
                  </span>
                  {i < headlineWords.length - 1 ? " " : null}
                </React.Fragment>
              ))}
            </span>
          </h2>
          <div
            data-rise="scroll"
            className="text-ink-muted mt-5 text-[clamp(1rem,1.35vw,1.14rem)] leading-relaxed mx-auto"
            style={{
              "--rise-delay": "0.12s",
              "--rise-y": "20px",
              "--rise-dur": "0.9s",
            } as React.CSSProperties}
          >
            Everything Peeky Task can do, laid out in one place. No hidden screens, no unnecessary complexity.
          </div>
        </div>
      </div>

      <div ref={containerRef} className="relative mt-14 h-[320vh]">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <ul
            ref={trackRef}
            className="flex gap-6 px-[6vw] will-change-transform"
            style={{
              transform: `translate3d(-${translateX}px, 0, 0)`,
              transition: "transform 0.05s ease-out",
            }}
          >
            {SURFACES.map((card, idx) => (
              <li key={card.id} className="w-[74vw] shrink-0 sm:w-[52vw] lg:w-[40vw]">
                <div className="overflow-hidden rounded-2xl border border-black/8 bg-white shadow-[0_40px_90px_-45px_rgba(0,0,0,0.5)]">
                  <div className="relative isolate overflow-hidden bg-black/5" style={{ aspectRatio: "16 / 10" }}>
                    <Image
                      src={card.image}
                      alt={card.alt}
                      width={1100}
                      height={688}
                      priority
                      loading="eager"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                <div className="mt-4 flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:gap-3">
                  <h3 className="text-ink text-[15px] font-semibold tracking-[-0.015em]">{card.title}</h3>
                  <p className="text-ink-muted text-[13.5px]">{card.description}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="from-[#ffffff55] pointer-events-none absolute inset-y-0 left-0 w-[5vw] bg-gradient-to-r to-transparent" />
          <div className="from-[#ffffff55] pointer-events-none absolute inset-y-0 right-0 w-[5vw] bg-gradient-to-l to-transparent" />
        </div>
      </div>
    </section>
  );
}
