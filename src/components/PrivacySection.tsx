import { Check, Monitor, WifiOff, X } from "lucide-react";

export function PrivacySection() {
  return (
    <section id="privacy" className="text-ink relative isolate scroll-mt-16 overflow-clip bg-paper-bg py-24 sm:py-32">
      <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-8 grid items-center gap-14 lg:grid-cols-2">
        {/* Left Column: Privacy Explanation */}
        <div>
          <div className="max-w-[58ch]">
            <h2 className="type-headline text-ink text-[clamp(1.95rem,4.4vw,3.4rem)]">
              Your tasks never leave your PC.
            </h2>
            <p className="text-ink-muted mt-5 text-[clamp(1rem,1.35vw,1.14rem)] leading-relaxed">
              No cloud accounts, no sync servers, no telemetry. Your tasks stay on your computer, saved in a simple local file and ready whenever you need them.
            </p>
          </div>

          <div className="mt-9 space-y-5">
            <div className="flex items-start gap-3">
              <span className="bg-note-mint mt-0.5 grid size-5 shrink-0 place-items-center rounded-full">
                <Check className="text-note-ink size-3 stroke-[3]" />
              </span>
              <div>
                <p className="text-ink text-[15px] font-semibold tracking-[-0.015em]">
                  Nothing to sign up for to try it
                </p>
                <p className="text-ink-muted mt-1 max-w-[46ch] text-[14.5px] leading-relaxed">
                  Install and start organizing immediately. No email, no password, no profiling.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="bg-note-mint mt-0.5 grid size-5 shrink-0 place-items-center rounded-full">
                <Check className="text-note-ink size-3 stroke-[3]" />
              </span>
              <div>
                <p className="text-ink text-[15px] font-semibold tracking-[-0.015em]">
                  Turn Wi-Fi off, nothing changes
                </p>
                <p className="text-ink-muted mt-1 max-w-[46ch] text-[14.5px] leading-relaxed">
                  Works 100% offline. You never need an active internet connection to see, edit, or check off your to-dos.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="bg-note-mint mt-0.5 grid size-5 shrink-0 place-items-center rounded-full">
                <Check className="text-note-ink size-3 stroke-[3]" />
              </span>
              <div>
                <p className="text-ink text-[15px] font-semibold tracking-[-0.015em]">
                  Instant atomic local save
                </p>
                <p className="text-ink-muted mt-1 max-w-[46ch] text-[14.5px] leading-relaxed">
                  Every keystroke is saved locally to your disk with zero risk of corruption.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="bg-note-mint mt-0.5 grid size-5 shrink-0 place-items-center rounded-full">
                <Check className="text-note-ink size-3 stroke-[3]" />
              </span>
              <div>
                <p className="text-ink text-[15px] font-semibold tracking-[-0.015em]">
                  Always yours to export
                </p>
                <p className="text-ink-muted mt-1 max-w-[46ch] text-[14.5px] leading-relaxed">
                  Stored as a readable JSON file. Back it up, export to Markdown, or move it to another computer whenever you wish.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Privacy Card */}
        <div>
          <div className="relative overflow-hidden rounded-3xl border border-black/6 bg-white p-6 shadow-[0_30px_80px_-50px_rgba(0,0,0,0.5)] sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
              <span className="text-ink flex items-center gap-2 text-[13px] font-medium whitespace-nowrap">
                <Monitor className="size-4" />
                Your PC
              </span>
              <span className="text-ink-muted flex items-center gap-2 text-[12px] whitespace-nowrap">
                <WifiOff className="size-3.5" />
                On airplane mode? Still works.
              </span>
            </div>

            {/* Local Task Mockup */}
            <div className="bg-smoke mt-5 rounded-2xl p-4 sm:p-5">
              <div className="space-y-2.5">
                <div className="flex items-center gap-3 rounded-xl bg-white px-3.5 py-3 shadow-xs">
                  <span className="h-6 w-1.5 shrink-0 rounded-full bg-note-butter" />
                  <span className="text-ink text-[13.5px] font-medium">Review Q3 goals</span>
                  <span className="text-ink-muted ml-auto text-[11.5px]">just now</span>
                </div>
                <div className="flex items-center gap-3 rounded-xl bg-white px-3.5 py-3 shadow-xs">
                  <span className="h-6 w-1.5 shrink-0 rounded-full bg-note-blue" />
                  <span className="text-ink text-[13.5px] font-medium">Client sync call</span>
                  <span className="text-ink-muted ml-auto text-[11.5px]">this morning</span>
                </div>
                <div className="flex items-center gap-3 rounded-xl bg-white px-3.5 py-3 shadow-xs">
                  <span className="h-6 w-1.5 shrink-0 rounded-full bg-note-lilac" />
                  <span className="text-ink text-[13.5px] font-medium">Ship desktop update</span>
                  <span className="text-ink-muted ml-auto text-[11.5px]">yesterday</span>
                </div>
              </div>

              {/* Animated Save Line */}
              <div className="mt-5">
                <div className="text-ink-muted mb-2.5 flex items-center justify-between text-[11.5px]">
                  <span>you check off a task</span>
                  <span>saved locally to this PC</span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-white">
                  <span
                    className="bg-note-ink block h-full origin-left rounded-full"
                    style={{ animation: "pn-save 3.2s ease-in-out infinite" }}
                  />
                </div>
              </div>
            </div>

            {/* The Barrier Dotted Line */}
            <div className="relative my-7">
              <div className="border-t border-dashed border-black/15" />
              <span className="text-ink-muted absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-3 text-[11.5px] whitespace-nowrap">
                nothing crosses this line
              </span>
            </div>

            {/* Negative confirmation badges */}
            <div className="flex flex-wrap gap-2">
              <span className="text-ink-muted bg-smoke flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[12px]">
                <X className="size-3 stroke-[2.5]" /> No cloud upload
              </span>
              <span className="text-ink-muted bg-smoke flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[12px]">
                <X className="size-3 stroke-[2.5]" /> No telemetry
              </span>
              <span className="text-ink-muted bg-smoke flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[12px]">
                <X className="size-3 stroke-[2.5]" /> No account needed
              </span>
              <span className="text-ink-muted bg-smoke flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[12px]">
                <X className="size-3 stroke-[2.5]" /> No third-party ads
              </span>
            </div>

            {/* File Path */}
            <div className="mt-6">
              <p className="text-ink-muted text-[12.5px] leading-relaxed">
                Your data is stored right here on your machine:
              </p>
              <div className="text-ink-muted/70 mt-2 flex items-center gap-2 font-mono text-[11.5px] bg-smoke px-3 py-2 rounded-lg border border-black/5">
                <span className="opacity-60">~/</span>
                <code>Documents\Peeky Task\tasks.json</code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
