"use client";

import { TestTube2, Lightbulb, Target } from "lucide-react";

const steps = [
  {
    icon: <TestTube2 className="h-10 w-10 text-violet-500" />,
    title: "1 – Teste Grátis",
    description: "Primeiro disponibilizamos um teste grátis para que você conheça nosso conteúdos, para testar e comprovar a qualidade antes da contratação."
  },
  {
    icon: <Lightbulb className="h-10 w-10 text-violet-500" />,
    title: "2 – Instrução",
    description: "Nosso suporte vai ajudar você durante todo processo de instalação até finalizar a compra de forma rápida e 100% segura."
  },
  {
    icon: <Target className="h-10 w-10 text-violet-500" />,
    title: "3 – Escolha",
    description: "Depois de conhecer o produto você poderá escolher algum dos planos; Mensal, Trimestral, Semestral, Anual. E quantas Telas deseja assistir."
  }
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-black">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Como funciona a contratação?
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="feature-card card-hover"
            >
              <div className="bg-violet-900/20 p-3 rounded-lg inline-block mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                {step.title}
              </h3>
              <p className="text-gray-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}