import { TvIcon, MessageCircle, Phone, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappLink = "https://wa.me/48992129200?text=";

  const supportOptions = [
    {
      name: "Suporte Técnico",
      icon: <MessageCircle className="h-4 w-4" />,
      href: `${whatsappLink}${encodeURIComponent("Olá! Preciso de suporte técnico.")}`,
    },
    {
      name: "Dúvidas",
      icon: <Phone className="h-4 w-4" />,
      href: `${whatsappLink}${encodeURIComponent("Olá! Tenho algumas dúvidas sobre o serviço.")}`,
    },
    {
      name: "Renovação",
      icon: <Mail className="h-4 w-4" />,
      href: `${whatsappLink}${encodeURIComponent("Olá! Gostaria de renovar minha assinatura.")}`,
    },
  ];

  return (
    <footer className="bg-black border-t border-violet-900/20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2">
              <TvIcon className="h-6 w-6 text-violet-500" />
              <span className="font-bold text-lg text-white">
                Stream TV Plus
              </span>
            </div>
            <p className="text-gray-400 text-sm md:hidden text-center">
              Entretenimento sem limites
            </p>
          </div>

          <div className="flex gap-6">
            {supportOptions.map((option, index) => (
              <a
                key={index}
                href={option.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-violet-400 transition-colors"
              >
                {option.icon}
                <span className="text-sm">{option.name}</span>
              </a>
            ))}
          </div>

          <div className="flex flex-col items-center md:items-end text-sm">
            <p className="text-gray-400 text-center md:text-right">
              © {currentYear} Stream TV Plus. Todos os direitos reservados.
            </p>
            <div className="flex gap-4 mt-2">
              <Link 
                href="/privacy"
                className="text-gray-400 hover:text-violet-400 transition-colors"
              >
                Política de Privacidade
              </Link>
              <Link 
                href="/terms"
                className="text-gray-400 hover:text-violet-400 transition-colors"
              >
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}