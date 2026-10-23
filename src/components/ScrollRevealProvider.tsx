"use client";

import { useEffect, useRef } from "react";

export function ScrollRevealProvider({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Respect user's motion preferences
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      document.querySelectorAll("[data-reveal], [data-rise='scroll'], [data-anim='scroll']").forEach((el) => {
        el.classList.add("revealed");
        el.setAttribute("data-shown", "true");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            entry.target.setAttribute("data-shown", "true");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: "150px 0px 100px 0px",
        threshold: 0.01,
      }
    );

    const elements = document.querySelectorAll("[data-reveal], [data-rise='scroll'], [data-anim='scroll']");
    elements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight + 200) {
        el.classList.add("revealed");
        el.setAttribute("data-shown", "true");
      } else {
        observer.observe(el);
      }
    });

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  return <div ref={containerRef}>{children}</div>;
}
