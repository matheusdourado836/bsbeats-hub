import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Users, Camera, Star } from "lucide-react";

const Hero = () => {
  return (
    <section id="inicio" className="py-16 px-4 bg-gradient-to-br from-background to-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Bem-vindo ao suporte do{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  BSB Eats
                </span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                O BSB Eats é o seu companheiro perfeito para descobrir os melhores restaurantes de Brasília. 
                Encontre lugares incríveis para sair com amigos ou sozinho, e compartilhe suas experiências 
                gastronômicas com nossa comunidade.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="shadow-elegant"
                onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Ver FAQ
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Falar Conosco
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Restaurantes</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Comunidade</span>
              </div>
              <div className="flex items-center space-x-2">
                <Camera className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Fotos</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Avaliações</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <Card className="p-6 shadow-elegant">
              <div className="aspect-video bg-gradient-hero rounded-lg mb-4 flex items-center justify-center">
                <div className="text-white text-center space-y-2">
                  <div className="w-16 h-16 mx-auto bg-white/20 rounded-2xl flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold">B</span>
                  </div>
                  <h3 className="text-xl font-bold">BSB Eats</h3>
                  <p className="text-sm opacity-90">Descubra Brasília</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Disponível para iOS</span>
                  <span className="text-sm text-muted-foreground">App Store</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div className="bg-gradient-primary h-2 rounded-full w-3/4"></div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;