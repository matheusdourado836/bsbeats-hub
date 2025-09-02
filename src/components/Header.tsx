import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/605847a9-7bd7-4dc0-939c-f3e319bc11c7.png" 
              alt="BSB Eats Logo" 
              className="w-8 h-8 rounded-lg"
            />
            <span className="text-xl font-bold">BSB Eats</span>
            <span className="text-sm text-muted-foreground hidden sm:inline">Suporte</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a 
              href="#inicio" 
              className="text-foreground hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('inicio')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Início
            </a>
            <a 
              href="#faq" 
              className="text-foreground hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              FAQ
            </a>
            <a 
              href="#contato" 
              className="text-foreground hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contato
            </a>
            <a 
              href="#politicas" 
              className="text-foreground hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('politicas')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Políticas
            </a>
          </nav>

          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t">
            <nav className="flex flex-col space-y-3 mt-4">
              <a href="#inicio" className="text-foreground hover:text-primary transition-colors py-2">
                Início
              </a>
              <a href="#faq" className="text-foreground hover:text-primary transition-colors py-2">
                FAQ
              </a>
              <a href="#contato" className="text-foreground hover:text-primary transition-colors py-2">
                Contato
              </a>
              <a href="#politicas" className="text-foreground hover:text-primary transition-colors py-2">
                Políticas
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;