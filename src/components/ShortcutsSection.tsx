export function ShortcutsSection() {
  return (
    <section id="shortcuts" className="text-ink relative isolate scroll-mt-16 overflow-clip bg-smoke py-24 sm:py-32">
      <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-[62ch] text-center">
          <h2 className="type-headline text-ink text-[clamp(1.95rem,4.4vw,3.4rem)]">
            Three keys, and you never touch the mouse.
          </h2>
          <p className="text-ink-muted mt-5 text-[clamp(1rem,1.35vw,1.14rem)] leading-relaxed mx-auto">
            Bring Peeky Task up from anywhere, even while full-screen in code, browser, or games.
          </p>
        </div>

        {/* 4 Shortcut Category Cards */}
        <div className="mt-16 grid gap-4 md:grid-cols-2">
          {/* Card 1: Anywhere in Windows */}
          <div className="rounded-3xl border border-black/6 bg-white p-7 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
            <p className="text-[15px] font-semibold tracking-[-0.015em]">Anywhere in Windows</p>
            <p className="text-ink-muted mt-1 text-[13px]">Registered system-wide</p>

            <div className="mt-6 space-y-3.5">
              <div className="flex items-center justify-between gap-4">
                <span className="text-ink-muted text-[13.5px]">Quick add task</span>
                <span className="flex shrink-0 items-center gap-1">
                  <kbd className="bg-smoke text-ink inline-flex h-7 min-w-7 items-center justify-center rounded-[7px] border border-black/8 px-2 font-sans text-[11.5px] font-semibold">Ctrl</kbd>
                  <kbd className="bg-smoke text-ink inline-flex h-7 min-w-7 items-center justify-center rounded-[7px] border border-black/8 px-2 font-sans text-[11.5px] font-semibold">Alt</kbd>
                  <kbd className="bg-smoke text-ink inline-flex h-7 min-w-7 items-center justify-center rounded-[7px] border border-black/8 px-2 font-sans text-[11.5px] font-semibold">T</kbd>
                </span>
              </div>

              <div className="flex items-center justify-between gap-4">
                <span className="text-ink-muted text-[13.5px]">Toggle task pill</span>
                <span className="flex shrink-0 items-center gap-1">
                  <kbd className="bg-smoke text-ink inline-flex h-7 min-w-7 items-center justify-center rounded-[7px] border border-black/8 px-2 font-sans text-[11.5px] font-semibold">Alt</kbd>
                  <kbd className="bg-smoke text-ink inline-flex h-7 min-w-7 items-center justify-center rounded-[7px] border border-black/8 px-2 font-sans text-[11.5px] font-semibold">Space</kbd>
                </span>
              </div>

              <div className="flex items-center justify-between gap-4">
                <span className="text-ink-muted text-[13.5px]">All tasks manager</span>
                <span className="flex shrink-0 items-center gap-1">
                  <kbd className="bg-smoke text-ink inline-flex h-7 min-w-7 items-center justify-center rounded-[7px] border border-black/8 px-2 font-sans text-[11.5px] font-semibold">Ctrl</kbd>
                  <kbd className="bg-smoke text-ink inline-flex h-7 min-w-7 items-center justify-center rounded-[7px] border border-black/8 px-2 font-sans text-[11.5px] font-semibold">Alt</kbd>
                  <kbd className="bg-smoke text-ink inline-flex h-7 min-w-7 items-center justify-center rounded-[7px] border border-black/8 px-2 font-sans text-[11.5px] font-semibold">A</kbd>
                </span>
              </div>
            </div>
          </div>

          {/* Card 2: In the task widget */}
          <div className="rounded-3xl border border-black/6 bg-white p-7 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
            <p className="text-[15px] font-semibold tracking-[-0.015em]">Inside the task widget</p>
            <p className="text-ink-muted mt-1 text-[13px]">While navigating tasks</p>

            <div className="mt-6 space-y-3.5">
              <div className="flex items-center justify-between gap-4">
                <span className="text-ink-muted text-[13.5px]">Close / hide widget</span>
                <span className="flex shrink-0 items-center gap-1">
                  <kbd className="bg-smoke text-ink inline-flex h-7 min-w-7 items-center justify-center rounded-[7px] border border-black/8 px-2 font-sans text-[11.5px] font-semibold">Esc</kbd>
                </span>
              </div>

              <div className="flex items-center justify-between gap-4">
                <span className="text-ink-muted text-[13.5px]">Cycle task color</span>
                <span className="flex shrink-0 items-center gap-1">
                  <kbd className="bg-smoke text-ink inline-flex h-7 min-w-7 items-center justify-center rounded-[7px] border border-black/8 px-2 font-sans text-[11.5px] font-semibold">Ctrl</kbd>
                  <kbd className="bg-smoke text-ink inline-flex h-7 min-w-7 items-center justify-center rounded-[7px] border border-black/8 px-2 font-sans text-[11.5px] font-semibold">.</kbd>
                </span>
              </div>

              <div className="flex items-center justify-between gap-4">
                <span className="text-ink-muted text-[13.5px]">Check off task</span>
                <span className="flex shrink-0 items-center gap-1">
                  <kbd className="bg-smoke text-ink inline-flex h-7 min-w-7 items-center justify-center rounded-[7px] border border-black/8 px-2 font-sans text-[11.5px] font-semibold">Space</kbd>
                </span>
              </div>

              <div className="flex items-center justify-between gap-4">
                <span className="text-ink-muted text-[13.5px]">Delete (10s undo)</span>
                <span className="flex shrink-0 items-center gap-1">
                  <kbd className="bg-smoke text-ink inline-flex h-7 min-w-7 items-center justify-center rounded-[7px] border border-black/8 px-2 font-sans text-[11.5px] font-semibold">Ctrl</kbd>
                  <kbd className="bg-smoke text-ink inline-flex h-7 min-w-7 items-center justify-center rounded-[7px] border border-black/8 px-2 font-sans text-[11.5px] font-semibold">Backspace</kbd>
                </span>
              </div>
            </div>
          </div>

          {/* Card 3: During the 10s countdown */}
          <div className="rounded-3xl border border-black/6 bg-white p-7 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
            <p className="text-[15px] font-semibold tracking-[-0.015em]">During the countdown</p>
            <p className="text-ink-muted mt-1 text-[13px]">Ten seconds after any deletion</p>

            <div className="mt-6 space-y-3.5">
              <div className="flex items-center justify-between gap-4">
                <span className="text-ink-muted text-[13.5px]">Restore deleted task</span>
                <span className="flex shrink-0 items-center gap-1">
                  <kbd className="bg-smoke text-ink inline-flex h-7 min-w-7 items-center justify-center rounded-[7px] border border-black/8 px-2 font-sans text-[11.5px] font-semibold">Ctrl</kbd>
                  <kbd className="bg-smoke text-ink inline-flex h-7 min-w-7 items-center justify-center rounded-[7px] border border-black/8 px-2 font-sans text-[11.5px] font-semibold">Z</kbd>
                </span>
              </div>
            </div>
          </div>

          {/* Card 4: Pinning & Window Controls */}
          <div className="rounded-3xl border border-black/6 bg-white p-7 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
            <p className="text-[15px] font-semibold tracking-[-0.015em]">Pinning & Window</p>
            <p className="text-ink-muted mt-1 text-[13px]">Customizing layer behavior</p>

            <div className="mt-6 space-y-3.5">
              <div className="flex items-center justify-between gap-4">
                <span className="text-ink-muted text-[13.5px]">Toggle Always-on-Top</span>
                <span className="flex shrink-0 items-center gap-1">
                  <kbd className="bg-smoke text-ink inline-flex h-7 min-w-7 items-center justify-center rounded-[7px] border border-black/8 px-2 font-sans text-[11.5px] font-semibold">Ctrl</kbd>
                  <kbd className="bg-smoke text-ink inline-flex h-7 min-w-7 items-center justify-center rounded-[7px] border border-black/8 px-2 font-sans text-[11.5px] font-semibold">P</kbd>
                </span>
              </div>

              <div className="flex items-center justify-between gap-4">
                <span className="text-ink-muted text-[13.5px]">Pin to Desktop Layer</span>
                <span className="flex shrink-0 items-center gap-1">
                  <kbd className="bg-smoke text-ink inline-flex h-7 min-w-7 items-center justify-center rounded-[7px] border border-black/8 px-2 font-sans text-[11.5px] font-semibold">Ctrl</kbd>
                  <kbd className="bg-smoke text-ink inline-flex h-7 min-w-7 items-center justify-center rounded-[7px] border border-black/8 px-2 font-sans text-[11.5px] font-semibold">D</kbd>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
