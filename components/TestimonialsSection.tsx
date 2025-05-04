"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Silva",
    location: "São Paulo, SP",
    text: "Melhor serviço de IPTV que já usei! Qualidade HD impressionante e zero travamentos."
  },
  {
    name: "Ana Santos",
    location: "Rio de Janeiro, RJ",
    text: "Atendimento excelente e canais sempre funcionando. Recomendo muito!"
  },
  {
    name: "Pedro Costa",
    location: "Belo Horizonte, MG",
    text: "Instalação super fácil e rápida. O suporte responde na hora quando preciso."
  },
  {
    name: "Juliana Rocha",
    location: "Curitiba, PR",
    text: "Ótimo custo-benefício. Assisto meus canais favoritos sem interrupções."
  },
  {
    name: "Thiago Almeida",
    location: "Salvador, BA",
    text: "Interface intuitiva e fácil de usar. Me surpreendi com a qualidade."
  },
  {
    name: "Fernanda Lopes",
    location: "Fortaleza, CE",
    text: "Recomendo a todos! Muito melhor que os serviços tradicionais de TV."
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const testimonialRef = useRef<HTMLDivElement>(null);

  const showNextTestimonials = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const showPrevTestimonials = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  useEffect(() => {
    const interval = setInterval(showNextTestimonials, 10000); // Increased from 5000 to 10000 (10 seconds)
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-black py-12 border-t border-violet-900/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-white">O que nossos clientes dizem</h2>
        </div>
        
        <div className="max-w-3xl mx-auto relative">
          <button
            onClick={showPrevTestimonials}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-white transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div 
            ref={testimonialRef}
            className="overflow-hidden px-12"
          >
            <div className={`transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
              <p className="text-gray-300 text-lg italic text-center mb-4">
                "{testimonials[currentIndex].text}"
              </p>
              <p className="text-violet-400 text-sm text-center">
                {testimonials[currentIndex].name} - {testimonials[currentIndex].location}
              </p>
            </div>
          </div>

          <button
            onClick={showNextTestimonials}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-white transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}