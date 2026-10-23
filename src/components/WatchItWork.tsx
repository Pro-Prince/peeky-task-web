"use client";

import React, { useEffect, useRef } from "react";

export function WatchItWork() {
  const watchVideoRef = useRef<HTMLVideoElement>(null);
  const words = ["Watch", "it", "work."];

  useEffect(() => {
    const vid = watchVideoRef.current;
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
    <section id="watch-it-work" className="text-ink relative isolate scroll-mt-20 overflow-clip bg-haze py-24 sm:py-32">
      <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-8">
        <div className="mx-auto max-w-[62ch] text-center">
          <h2 className="type-headline text-ink text-[clamp(1.95rem,4.4vw,3.4rem)]">
            <span className="sr-only">Watch it work.</span>
            <span aria-hidden="true" className="inline">
              {words.map((word, i) => (
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
                  {i < words.length - 1 ? " " : null}
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
            Peek. Hover. Open. Focus. Done. Watch the whole thing happen.
          </div>
        </div>
      </div>

      <div className="mt-14">
        <div>
          <div className="mx-auto w-full max-w-[1180px] overflow-hidden rounded-[18px] border border-black/8 bg-white px-5 shadow-[0_60px_120px_-60px_rgba(0,0,0,0.6)] sm:px-0">
            <div className="relative isolate overflow-hidden bg-black" style={{ aspectRatio: "16 / 9" }}>
              <video
                ref={watchVideoRef}
                src="/media/video/peeky-task-video.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                poster="/media/screenshots/hero-video-first-frame.png"
                className="h-full w-full object-cover"
                onEnded={(e) => {
                  e.currentTarget.currentTime = 0;
                  e.currentTarget.play().catch(() => {});
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
