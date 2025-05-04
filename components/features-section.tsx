import { Tv, Smartphone, Clock, Zap, RefreshCw, Headphones } from "lucide-react";

const features = [
  {
    icon: <Tv className="h-10 w-10 text-violet-500" />,
    title: "+200 canais ao vivo",
    description: "Canais nacionais e internacionais em HD, incluindo filmes, séries e esportes."
  },
  {
    icon: <Clock className="h-10 w-10 text-violet-500" />,
    title: "Conteúdo on demand",
    description: "Filmes e séries atualizados diariamente. Assista quando e onde quiser."
  },
  {
    icon: <Zap className="h-10 w-10 text-violet-500" />,
    title: "Qualidade garantida",
    description: "Transmissão em HD sem travamentos. Experiência perfeita em todos os dispositivos."
  },
  {
    icon: <Smartphone className="h-10 w-10 text-violet-500" />,
    title: "Multi-dispositivos",
    description: "Smart TVs, celulares, computadores e TV Box. Assista em qualquer lugar."
  }
];

const advantages = [
  "Qualidade HD em todos os canais",
  "Conteúdo sempre atualizado",
  "Quantas telas desejar",
  "Suporte 24h via WhatsApp",
  "Sem fidelidade",
  "Instalação simples e rápida"
];

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-black">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Entretenimento sem limites
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="feature-card card-hover"
            >
              <div className="bg-violet-900/20 p-3 rounded-lg inline-block mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                {feature.title}
              </h3>
              <p className="text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-[#1a1a1a] rounded-xl p-8 border border-violet-900/20">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Vantagens exclusivas
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {advantages.map((advantage, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-violet-500"></div>
                <span className="text-gray-300">{advantage}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}