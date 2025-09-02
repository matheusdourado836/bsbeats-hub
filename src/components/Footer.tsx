import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer id="politicas" className="bg-secondary/50 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/605847a9-7bd7-4dc0-939c-f3e319bc11c7.png" 
                alt="BSB Eats Logo" 
                className="w-8 h-8 rounded-lg"
              />
              <span className="text-xl font-bold">BSB Eats</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Descubra os melhores restaurantes de Brasília e compartilhe suas experiências gastronômicas.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Suporte</h4>
            <div className="space-y-2 text-sm">
              <a href="#faq" className="block text-muted-foreground hover:text-primary transition-colors">
                FAQ
              </a>
              <a href="#contato" className="block text-muted-foreground hover:text-primary transition-colors">
                Contato
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Reportar Problema
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Status do Sistema
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Empresa</h4>
            <div className="space-y-2 text-sm">
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Sobre Nós
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Parcerias
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Carreiras
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Imprensa
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Aplicativo</h4>
            <div className="space-y-2 text-sm">
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Download iOS
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Download Android
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Atualizações
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Requisitos do Sistema
              </a>
            </div>
          </div>
        </div>

        <Separator className="mb-8" />

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h4 className="font-semibold">Políticas e Termos</h4>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Política de Cookies
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Diretrizes da Comunidade
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Informações Legais</h4>
            <div className="text-sm text-muted-foreground space-y-1">
              <p>BSB Eats Tecnologia Ltda.</p>
              <p>Brasília, DF - Brasil</p>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="text-center text-sm text-muted-foreground">
          <p>&copy; 2024 BSB Eats. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;