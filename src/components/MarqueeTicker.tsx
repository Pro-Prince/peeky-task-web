export function MarqueeTicker() {
  const items = [
    { label: "Lives on the edge", color: "#5B9BD5" },
    { label: "No taskbar clutter", color: "#43B08A" },
    { label: "100% local storage", color: "#8B6BD0" },
    { label: "No sign-up to try", color: "#D9A521" },
    { label: "Zero telemetry", color: "#D96E90" },
    { label: "No recurring subscription", color: "#DE9142" },
    { label: "Instant global hotkey", color: "#3F9EA8" },
    { label: "Always on top or Desktop mode", color: "#6E7E93" },
    { label: "Private by default", color: "#5B9BD5" },
    { label: "Zero busy polling", color: "#43B08A" },
  ];

  return (
    <div className="bg-smoke relative overflow-hidden border-y border-black/6 py-5">
      {/* Edge gradient masks */}
      <div className="from-smoke pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r to-transparent" />
      <div className="from-smoke pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l to-transparent" />

      {/* Infinite Scrolling Track */}
      <div
        className="flex w-max gap-10"
        style={{ animation: "pn-marquee 36s linear infinite" }}
      >
        {/* Set 1 */}
        <div className="flex shrink-0 gap-10" aria-hidden="false">
          {items.map((item, i) => (
            <span
              key={i}
              className="text-ink-muted flex shrink-0 items-center gap-3 text-[13px] whitespace-nowrap"
            >
              <span
                className="size-1.5 rounded-full"
                style={{ background: item.color }}
              />
              {item.label}
            </span>
          ))}
        </div>

        {/* Set 2 (Clone for infinite wrap) */}
        <div className="flex shrink-0 gap-10" aria-hidden="true">
          {items.map((item, i) => (
            <span
              key={`clone-${i}`}
              className="text-ink-muted flex shrink-0 items-center gap-3 text-[13px] whitespace-nowrap"
            >
              <span
                className="size-1.5 rounded-full"
                style={{ background: item.color }}
              />
              {item.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
