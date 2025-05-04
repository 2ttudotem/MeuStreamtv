import { Button } from "@/components/ui/button";
import { CalendarIcon, CheckIcon } from "lucide-react";

const plans = [
  {
    name: "Pacote completo 1 mês de acesso",
    price: "R$ 29,90",
    features: [
      "Qualidade SD/HD/FHD/HDR/4K",
      "Canais, Filmes e séries",
      "Servidores Dedicados",
      "Suporte 24 horas"
    ],
    cta: "Assinar agora",
    popular: false
  },
  {
    name: "Pacote completo 3 meses de acesso",
    price: "R$ 79,90",
    features: [
      "Qualidade SD/HD/FHD/HDR/4K",
      "Canais, Filmes e séries",
      "Servidores Dedicados",
      "Suporte 24 horas"
    ],
    cta: "Assinar agora",
    popular: true
  },
  {
    name: "Pacote completo 6 meses de acesso",
    price: "R$ 139,90",
    features: [
      "Qualidade SD/HD/FHD/HDR/4K",
      "Canais, Filmes e séries",
      "Servidores Dedicados",
      "Suporte 24 horas"
    ],
    cta: "Assinar agora",
    popular: false
  },
  {
    name: "Pacote completo 1 Ano de acesso",
    price: "R$ 279,90",
    features: [
      "Qualidade SD/HD/FHD/HDR/4K",
      "Canais, Filmes e séries",
      "Servidores Dedicados",
      "Suporte 24 horas"
    ],
    cta: "Assinar agora",
    popular: false,
    economical: true
  }
];

export default function PricingSection() {
  const whatsappLink = "https://wa.me/48992129200?text=Olá!%20Gostaria%20de%20assinar%20o%20";

  return (
    <section id="pricing" className="py-20 px-4 bg-black">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Escolha seu plano
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`pricing-card card-hover gradient-border ${
                plan.popular ? 'relative border-violet-500' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-violet-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                  + POPULAR
                </div>
              )}
              {plan.economical && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                  + ECONÔMICO
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-lg font-bold text-white mb-4">{plan.name}</h3>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold text-white">{plan.price}</span>
                </div>
              </div>
              
              <div className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-violet-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button 
                asChild
                className={`w-full ${
                  plan.popular || plan.economical
                    ? 'bg-violet-600 hover:bg-violet-700 text-white' 
                    : 'bg-violet-600/20 hover:bg-violet-600/30 text-white'
                } transition-all duration-300`}
              >
                <a 
                  href={`${whatsappLink}${encodeURIComponent(plan.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {plan.cta}
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}