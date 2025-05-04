import { StarIcon } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Carlos Silva",
    location: "São Paulo, SP",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 5,
    text: "Melhor serviço de IPTV que já usei! Qualidade HD impressionante e zero travamentos.",
  },
  {
    name: "Ana Santos",
    location: "Rio de Janeiro, RJ",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 5,
    text: "Atendimento excelente e canais sempre funcionando. Recomendo muito!",
  },
  {
    name: "Pedro Costa",
    location: "Belo Horizonte, MG",
    avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 5,
    text: "Instalação super fácil e rápida. O suporte responde na hora quando preciso.",
  },
  {
    name: "Mariana Lima",
    location: "Curitiba, PR",
    avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 5,
    text: "Excelente variedade de canais! Uso no celular, tablet e TV. Imagem perfeita sempre.",
  },
  {
    name: "Roberto Alves",
    location: "Salvador, BA",
    avatar: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 5,
    text: "Melhor custo-benefício! Muitos canais em HD e filmes atualizados diariamente.",
  },
  {
    name: "Fernanda Santos",
    location: "Florianópolis, SC",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 5,
    text: "Assinei o plano trimestral e estou muito satisfeita. Vale cada centavo!",
  },
];

export default function TestimonialSection() {
  return (
    <section className="py-20 bg-black">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-violet-900/20 rounded-full px-4 py-2 mb-4">
            <span className="text-violet-400">⭐ Clientes satisfeitos</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            O que dizem nossos assinantes
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Mais de 10.000 clientes já aproveitam a melhor experiência em TV online. Veja alguns depoimentos:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card card-hover"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="relative h-14 w-14 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    sizes="56px"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-400">{testimonial.location}</p>
                  <div className="flex mt-1">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon
                        key={i}
                        className={`h-4 w-4 ${
                          i < testimonial.rating
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-600"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-300 italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
