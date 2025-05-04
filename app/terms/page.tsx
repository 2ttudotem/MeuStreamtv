export default function TermsOfService() {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-3xl font-bold mb-8 text-white">Termos de Uso</h1>
      
      <div className="prose prose-invert max-w-none">
        <p className="text-gray-300 mb-6">
          Ao acessar e usar nossos serviços, você aceita e concorda em cumprir os termos e condições estabelecidos neste acordo.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-white mt-8">1. Serviços</h2>
        <p className="text-gray-300 mb-6">
          Fornecemos acesso a conteúdo de streaming de TV e vídeo através de nossa plataforma. O serviço é fornecido "como está" e "conforme disponível".
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-white mt-8">2. Conta do Usuário</h2>
        <p className="text-gray-300 mb-6">
          Você é responsável por manter a confidencialidade de sua conta e senha. Você concorda em não compartilhar suas credenciais de acesso com terceiros.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-white mt-8">3. Pagamentos e Reembolsos</h2>
        <ul className="list-disc list-inside text-gray-300 mb-6">
          <li>Os pagamentos são processados de forma segura</li>
          <li>Não oferecemos reembolsos após o período de teste</li>
          <li>Os planos são cobrados antecipadamente</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 text-white mt-8">4. Uso Aceitável</h2>
        <p className="text-gray-300 mb-6">
          Você concorda em usar o serviço apenas para fins legais e de acordo com estes termos. É proibido compartilhar ou revender o acesso ao serviço.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-white mt-8">5. Limitação de Responsabilidade</h2>
        <p className="text-gray-300 mb-6">
          Não nos responsabilizamos por interrupções no serviço causadas por problemas técnicos fora de nosso controle.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-white mt-8">6. Modificações</h2>
        <p className="text-gray-300">
          Reservamos o direito de modificar ou descontinuar o serviço a qualquer momento, com ou sem aviso prévio.
        </p>
      </div>
    </div>
  );
}