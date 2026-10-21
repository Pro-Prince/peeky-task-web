import Link from "next/link";

export function DownloadCta() {
  return (
    <section id="download" className="text-ink isolate scroll-mt-16 overflow-clip bg-paper-bg relative pt-28 pb-20 sm:pt-36">
      {/* Floating Pill Accents Rising in Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[64%] overflow-hidden"
        style={{
          maskImage: "linear-gradient(to bottom, transparent 0%, #000 18%, #000 58%, transparent 96%)",
        }}
      >
        <span
          className="absolute flex overflow-hidden rounded-[13px] opacity-40"
          style={{
            left: "5%",
            width: "118px",
            height: "87px",
            background: "#FBE08D",
            animation: "pn-float-up 30s linear 0s infinite",
          }}
        >
          <span className="h-full w-[13%] shrink-0" style={{ background: "#F6D272" }} />
        </span>
        <span
          className="absolute flex overflow-hidden rounded-[13px] opacity-40"
          style={{
            left: "22%",
            width: "86px",
            height: "63px",
            background: "#C2DDF6",
            animation: "pn-float-up 36s linear 5s infinite",
          }}
        >
          <span className="h-full w-[13%] shrink-0" style={{ background: "#AFD1F1" }} />
        </span>
        <span
          className="absolute flex overflow-hidden rounded-[13px] opacity-40"
          style={{
            left: "45%",
            width: "74px",
            height: "55px",
            background: "#B9E7D0",
            animation: "pn-float-up 27s linear 11s infinite",
          }}
        >
          <span className="h-full w-[13%] shrink-0" style={{ background: "#A4DCC0" }} />
        </span>
        <span
          className="absolute flex overflow-hidden rounded-[13px] opacity-40"
          style={{
            left: "68%",
            width: "98px",
            height: "72px",
            background: "#F9C9D6",
            animation: "pn-float-up 33s linear 3s infinite",
          }}
        >
          <span className="h-full w-[13%] shrink-0" style={{ background: "#F3B6C7" }} />
        </span>
        <span
          className="absolute flex overflow-hidden rounded-[13px] opacity-40"
          style={{
            left: "86%",
            width: "84px",
            height: "62px",
            background: "#DCC9F2",
            animation: "pn-float-up 30s linear 8s infinite",
          }}
        >
          <span className="h-full w-[13%] shrink-0" style={{ background: "#CCB6EA" }} />
        </span>
      </div>

      {/* Content */}
      <div data-reveal className="mx-auto w-full max-w-[1180px] px-5 sm:px-8 relative z-10 text-center" style={{ "--reveal-y": "28px" } as React.CSSProperties}>
        <h2 className="type-display text-ink mx-auto max-w-[16ch] text-[clamp(2.3rem,6vw,4.4rem)]">
          Put them at the edge and never lose focus.
        </h2>

        <p className="text-ink-muted mx-auto mt-6 max-w-[50ch] text-[clamp(0.98rem,1.35vw,1.13rem)] leading-relaxed">
          Available now on the Microsoft Store for Windows 10 and 11. Start your 7-day free trial with zero card or registration needed.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://apps.microsoft.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-ink hover:bg-ink/88 inline-flex h-12 items-center rounded-full px-8 text-[15px] font-medium tracking-[-0.01em] text-white shadow-[0_12px_34px_-12px_rgba(0,0,0,0.6)] transition-all active:scale-[0.98]"
          >
            Download on Microsoft Store
          </a>
          <Link
            href="/buy"
            className="text-ink inline-flex h-12 items-center rounded-full border border-black/15 bg-white/80 px-8 text-[15px] font-medium tracking-[-0.01em] transition-all hover:border-black/30 hover:bg-black/5"
          >
            Buy Lifetime License ($5.99)
          </Link>
        </div>

        <p className="text-ink-muted/80 mt-6 text-[12.5px]">
          Runs on Windows 10 and 11 (64-bit & ARM64)
        </p>
      </div>
    </section>
  );
}
