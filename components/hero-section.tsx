"use client";

import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden pt-16">
      {/* Background video and overlay */}
      <div className="absolute inset-0 z-0">
        <iframe
          src="https://www.youtube.com/embed/_zHPsmXCjB0?autoplay=1&mute=1&loop=1&playlist=_zHPsmXCjB0&controls=0&modestbranding=1&showinfo=0"
          title="The Last of Us Season 2 Trailer"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
          className="absolute inset-0 w-full h-full object-cover"
        ></iframe>
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Conteúdo do banner */}
      <div className="container relative z-20 text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          🎬 StreamTV - Tudo o que você quer assistir, em um só lugar!
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Mais de 200 canais, filmes, séries e muito mais em qualidade HD.
        </p>
        <a
          href="#pricing"
          className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-4 rounded-full text-lg transition-all duration-300"
        >
          Ver Planos
        </a>
      </div>
    </section>
  );
}