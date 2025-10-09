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
              href="#recursos" 
              className="text-foreground hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('recursos')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Recursos
            </a>
            <a 
              href="#download" 
              className="text-foreground hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Download
            </a>
            <a 
              href="#suporte" 
              className="text-foreground hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('suporte')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Suporte
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
              <a 
                href="#inicio" 
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </a>
              <a 
                href="#recursos" 
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Recursos
              </a>
              <a 
                href="#download" 
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Download
              </a>
              <a 
                href="#suporte" 
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Suporte
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;