import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Home, Search, HelpCircle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <Card className="w-full max-w-md p-8 text-center shadow-elegant">
        <div className="mb-6">
          <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-2xl flex items-center justify-center mb-4">
            <span className="text-2xl font-bold text-primary-foreground">B</span>
          </div>
          <h1 className="text-6xl font-bold text-primary mb-2">404</h1>
          <h2 className="text-xl font-semibold mb-2">Página não encontrada</h2>
          <p className="text-muted-foreground">
            A página que você está procurando não existe ou foi movida.
          </p>
        </div>
        
        <div className="space-y-3">
          <Button 
            onClick={() => window.location.href = '/'}
            className="w-full shadow-elegant"
          >
            <Home className="w-4 h-4 mr-2" />
            Voltar ao Início
          </Button>
          
          <div className="grid grid-cols-2 gap-3">
            <Button variant="outline" size="sm">
              <Search className="w-4 h-4 mr-1" />
              FAQ
            </Button>
            <Button variant="outline" size="sm">
              <HelpCircle className="w-4 h-4 mr-1" />
              Ajuda
            </Button>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t text-sm text-muted-foreground">
          <p>BSB Eats - Suporte e Ajuda</p>
        </div>
      </Card>
    </div>
  );
};

export default NotFound;
