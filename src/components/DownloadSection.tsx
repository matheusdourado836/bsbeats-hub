import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Apple, Smartphone } from "lucide-react";

const DownloadSection = () => {
  return (
    <section id="download" className="py-16 px-4 bg-gradient-to-br from-primary/10 to-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <Card className="p-8 md:p-12 shadow-elegant">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Baixe agora e comece a explorar
              </h2>
              <p className="text-lg text-muted-foreground">
                Disponível gratuitamente para iOS e Android. Junte-se a milhares de usuários que já descobriram os melhores lugares de Brasília.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="gap-2 shadow-elegant" asChild>
                  <a
                    href="https://apps.apple.com/br/app/bsbeats/id6738654939"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Apple className="h-5 w-5" />
                    App Store
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="gap-2" asChild>
                  <a
                    href="https://play.google.com/store/apps/details?id=br.bsbEats.bsb_eats"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Smartphone className="h-5 w-5" />
                    Google Play
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-hero rounded-2xl flex items-center justify-center">
                <div className="text-white text-center space-y-4">
                  <div className="w-24 h-24 mx-auto bg-white/20 rounded-3xl flex items-center justify-center">
                    <img 
                      src="/lovable-uploads/605847a9-7bd7-4dc0-939c-f3e319bc11c7.png" 
                      alt="BSB Eats Logo" 
                      className="w-20 h-20 rounded-2xl"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">BSB Eats</h3>
                    <p className="text-sm opacity-90">Descubra Brasília</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default DownloadSection;
