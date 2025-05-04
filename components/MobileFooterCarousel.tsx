"use client";

import { useEffect, useRef } from "react";

const mobileFeedbacks = [
  "👍 Excelente curadoria de filmes!",
  "🚀 Muito rápido e fácil de usar.",
  "🎥 Os lançamentos estão incríveis.",
  "💬 Atendimento ao cliente nota 10.",
  "❤️ Interface muito amigável no celular!",
];

export default function MobileFooterCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const el = scrollRef.current;
      if (!el) return;

      const maxScroll = el.scrollWidth - el.clientWidth;
      const atEnd = el.scrollLeft >= maxScroll;

      el.scrollBy({ left: 200, behavior: "smooth" });

      if (atEnd) {
        setTimeout(() => el.scrollTo({ left: 0, behavior: "smooth" }), 500);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm text-white py-2 px-3 sm:hidden border-t border-violet-900/20">
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-4 scroll-smooth snap-x snap-mandatory hide-scrollbar"
      >
        {mobileFeedbacks.map((text, index) => (
          <div
            key={index}
            className="snap-start min-w-[250px] bg-[#1a1a1a] text-sm rounded-md px-4 py-2 flex-shrink-0 border border-violet-900/20"
          >
            {text}
          </div>
        ))}
      </div>
    </div>
  );
}