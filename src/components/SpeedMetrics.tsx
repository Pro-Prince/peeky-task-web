export function SpeedMetrics() {
  return (
    <section id="speed" className="text-ink relative isolate scroll-mt-16 overflow-clip bg-white py-24 sm:py-32">
      <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-8">
        {/* Section Heading */}
        <div data-reveal className="mx-auto max-w-[62ch] text-center" style={{ "--reveal-y": "24px" } as React.CSSProperties}>
          <h2 className="type-headline text-ink text-[clamp(1.95rem,4.4vw,3.4rem)]">
            It does nothing, extremely well.
          </h2>
          <p className="text-ink-muted mt-5 text-[clamp(1rem,1.35vw,1.14rem)] leading-relaxed mx-auto">
            Peeky Task spends most of its life doing nothing — and that’s the point. It stays quiet, uses almost zero RAM, and springs to life the instant you want to check a task.
          </p>
        </div>

        {/* 4 Big Stat Cards */}
        <div data-reveal className="bg-hairline mt-16 grid gap-px overflow-hidden rounded-3xl border border-black/8 sm:grid-cols-2 lg:grid-cols-4" style={{ "--reveal-delay": "0.15s" } as React.CSSProperties}>
          <div className="h-full bg-white">
            <div className="flex h-full flex-col justify-between p-7">
              <p className="type-display text-ink text-[clamp(2.4rem,5vw,3.4rem)]">
                <span>6</span>
                <span className="text-ink-muted"> MB</span>
              </p>
              <div className="mt-6">
                <p className="text-ink text-[14px] font-medium">RAM working set</p>
                <p className="text-ink-muted mt-1 text-[13px] leading-relaxed">
                  Idle, 10 tasks, 25s after launch
                </p>
              </div>
            </div>
          </div>

          <div className="h-full bg-white">
            <div className="flex h-full flex-col justify-between p-7">
              <p className="type-display text-ink text-[clamp(2.4rem,5vw,3.4rem)]">
                <span>0</span>
                <span className="text-ink-muted"> %</span>
              </p>
              <div className="mt-6">
                <p className="text-ink text-[14px] font-medium">CPU while idle</p>
                <p className="text-ink-muted mt-1 text-[13px] leading-relaxed">
                  No polling, no background busy loops
                </p>
              </div>
            </div>
          </div>

          <div className="h-full bg-white">
            <div className="flex h-full flex-col justify-between p-7">
              <p className="type-display text-ink text-[clamp(2.4rem,5vw,3.4rem)]">
                <span>0</span>
                <span className="text-ink-muted"></span>
              </p>
              <div className="mt-6">
                <p className="text-ink text-[14px] font-medium">Background timers</p>
                <p className="text-ink-muted mt-1 text-[13px] leading-relaxed">
                  Nothing waking up your CPU cores
                </p>
              </div>
            </div>
          </div>

          <div className="h-full bg-white">
            <div className="flex h-full flex-col justify-between p-7">
              <p className="type-display text-ink text-[clamp(2.4rem,5vw,3.4rem)]">
                <span>0</span>
                <span className="text-ink-muted"> MB</span>
              </p>
              <div className="mt-6">
                <p className="text-ink text-[14px] font-medium">Data uploaded</p>
                <p className="text-ink-muted mt-1 text-[13px] leading-relaxed">
                  No cloud sync, zero telemetry, no tracking
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Detail Cards */}
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          <div className="border-hairline bg-paper-bg h-full rounded-2xl border p-6">
            <h3 className="text-ink text-[14.5px] font-semibold">No busy polling</h3>
            <p className="text-ink-muted mt-2 text-[13.5px] leading-relaxed">
              Peeky Task doesn’t constantly wake up to check what’s happening. It listens natively for system events and stays dormant otherwise.
            </p>
          </div>

          <div className="border-hairline bg-paper-bg h-full rounded-2xl border p-6">
            <h3 className="text-ink text-[14.5px] font-semibold">Windows are released, not hidden</h3>
            <p className="text-ink-muted mt-2 text-[13.5px] leading-relaxed">
              When you collapse a window, Peeky Task frees graphical memory. Nothing stays secretly rendering in the background.
            </p>
          </div>

          <div className="border-hairline bg-paper-bg h-full rounded-2xl border p-6">
            <h3 className="text-ink text-[14.5px] font-semibold">Hardware-accelerated rendering</h3>
            <p className="text-ink-muted mt-2 text-[13.5px] leading-relaxed">
              Glassmorphism and edge peeks are powered by the native Windows DirectComposition engine for butter-smooth 120Hz animations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
