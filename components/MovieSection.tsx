"use client";

import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const movies = [
  { image: "https://i.pinimg.com/736x/13/59/ae/1359aed33f16bfed80c4dad1980e1070.jpg", title: "Karate Kid" },
  { image: "https://i.pinimg.com/736x/83/b7/49/83b749d9fda276d2174aba2061b00429.jpg", title: "Superman: Legacy" },
  { image: "https://i.pinimg.com/736x/0e/22/65/0e2265ed9824f1430d6b044e74df4533.jpg", title: "Duna: Parte 2" },
  { image: "https://i.pinimg.com/736x/06/3c/cd/063ccd1c28a7f67084942ffba71a94a9.jpg", title: "Furiosa" },
  { image: "https://i.pinimg.com/736x/4a/bd/eb/4abdebbbbf5eddcf3fa23ce8cbde6a6f.jpg", title: "Deadpool & Wolverine" },
  { image: "https://i.pinimg.com/736x/f4/68/14/f4681437421ed6e326f4a3c411e2ce90.jpg", title: "Divertida Mente 2" },
];

const series = [
  { image: "https://i.pinimg.com/736x/28/91/9b/28919b43b7833b54a87737cf9d03b459.jpg", title: "The Last of Us", season: "Season 2" },
  { image: "https://i.pinimg.com/736x/e1/08/44/e10844de36a7ebea19de69728a8b0d7e.jpg", title: "The Boys", season: "Season 4" },
  { image: "https://i.pinimg.com/736x/91/17/75/9117751636528b25a7b4687cab63572d.jpg", title: "Stranger Things", season: "Season 5" },
  { image: "https://i.pinimg.com/736x/b5/dc/45/b5dc454ef1256fecce002193e72e193e.jpg", title: "A casa do Dragão", season: "Season 2" },
  { image: "https://i.pinimg.com/736x/61/33/0f/61330f41ff341d15d971725f494fc13b.jpg", title: "Bridgerton", season: "Season 3" },
  { image: "https://i.pinimg.com/736x/33/39/9d/33399df9faacc5de9e3928f52fabbacf.jpg", title: "Grey's Anatomy", season: "Season 21" },
];

export default function MovieSection() {
  const [activeTab, setActiveTab] = useState<'movies' | 'series'>('movies');
  const moviesRef = useRef<HTMLDivElement>(null);
  const seriesRef = useRef<HTMLDivElement>(null);

  const scrollLeft = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollBy({ left: -250, behavior: 'smooth' });
    }
  };

  const scrollRight = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollBy({ left: 250, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const ref = activeTab === 'movies' ? moviesRef.current : seriesRef.current;
      if (ref) {
        const maxScrollLeft = ref.scrollWidth - ref.clientWidth;
        if (ref.scrollLeft >= maxScrollLeft) {
          ref.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          ref.scrollBy({ left: 250, behavior: 'smooth' });
        }
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [activeTab]);

  const renderItems = (items: typeof movies | typeof series, isSeries = false) =>
    items.map((item, index) => (
      <div key={index} className="min-w-[250px] max-w-[250px] snap-start group">
        <div className="relative h-[350px] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-violet-900/20">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
          <div className="relative w-full h-full">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover object-center transition-all duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
            <h3 className="text-white font-semibold">{item.title}</h3>
            {isSeries && 'season' in item && (
  <p className="text-violet-400 text-sm">{item.season}</p>
)}
          </div>
        </div>
      </div>
    ));

  return (
    <section id="movies" className="py-20 bg-black">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block bg-violet-900/20 rounded-full px-4 py-2 mb-4">
            <span className="text-violet-400">🎬 Lançamentos imperdíveis</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Filmes e Séries em 2025
          </h2>
        </div>

        <div className="flex justify-center mb-8">
          <div className="bg-[#1a1a1a] rounded-full p-1 border border-violet-900/20">
            <button
              className={cn("px-6 py-2 rounded-full text-sm font-medium transition-all duration-200",
                activeTab === 'movies' ? "bg-violet-600 text-white" : "text-gray-400 hover:text-violet-400")}
              onClick={() => setActiveTab('movies')}
            >
              Filmes
            </button>
            <button
              className={cn("px-6 py-2 rounded-full text-sm font-medium transition-all duration-200",
                activeTab === 'series' ? "bg-violet-600 text-white" : "text-gray-400 hover:text-violet-400")}
              onClick={() => setActiveTab('series')}
            >
              Séries
            </button>
          </div>
        </div>

        {['movies', 'series'].map((tab) => {
          const isActive = activeTab === tab;
          const ref = tab === 'movies' ? moviesRef : seriesRef;
          const items = tab === 'movies' ? movies : series;
          return (
            <div key={tab} className={`relative ${isActive ? 'block' : 'hidden'}`}>
              <button
                onClick={() => scrollLeft(ref)}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-black/80 p-2 rounded-full shadow-lg hover:bg-violet-600/80 transition-all"
                aria-label="Scroll left"
              >
                <ChevronLeft className="h-6 w-6 text-white" />
              </button>

              <div
                ref={ref}
                className="flex overflow-x-auto gap-6 py-6 px-8 hide-scrollbar snap-x snap-mandatory"
              >
                {renderItems(items, tab === 'series')}
              </div>

              <button
                onClick={() => scrollRight(ref)}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-black/80 p-2 rounded-full shadow-lg hover:bg-violet-600/80 transition-all"
                aria-label="Scroll right"
              >
                <ChevronRight className="h-6 w-6 text-white" />
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
