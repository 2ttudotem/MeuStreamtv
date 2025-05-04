"use client";

import { Button } from "@/components/ui/button";
import { TvIcon } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b",
        isScrolled 
          ? "bg-black/95 backdrop-blur-sm border-violet-900/20" 
          : "bg-transparent border-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <TvIcon className="h-8 w-8 text-violet-500" />
              <span className="font-bold text-xl text-white">
                Stream TV Plus
              </span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              href="#"
              className="text-sm font-medium text-gray-300 hover:text-violet-400 transition-colors"
            >
              Início
            </Link>
            <Link 
              href="#movies"
              className="text-sm font-medium text-gray-300 hover:text-violet-400 transition-colors"
            >
              Filmes & Séries
            </Link>
            <Link 
              href="#pricing"
              className="text-sm font-medium text-gray-300 hover:text-violet-400 transition-colors"
            >
              Planos
            </Link>
          </nav>

          {/* CTA Button - Shown on both mobile and desktop */}
         <Button 
  asChild
  className="bg-violet-600 hover:bg-violet-700 text-white rounded-full px-6"
>
  <a
    href="https://wa.me/5548992129200"
    target="_blank"
    rel="noopener noreferrer"
  >
    Assinar
  </a>
</Button>
        </div>
      </div>
    </header>
  );
}