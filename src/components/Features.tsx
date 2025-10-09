import { Card } from "@/components/ui/card";
import { MapPin, Users, Camera, Star, Utensils, Heart } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: MapPin,
      title: "Descubra Lugares",
      description: "Encontre os melhores restaurantes de Brasília com filtros inteligentes de localização, tipo de comida e preço."
    },
    {
      icon: Star,
      title: "Avaliações Reais",
      description: "Veja avaliações honestas de outros usuários e compartilhe suas próprias experiências gastronômicas."
    },
    {
      icon: Camera,
      title: "Rede Social",
      description: "Compartilhe fotos dos pratos que você experimentou e inspire outras pessoas a descobrirem novos sabores."
    },
    {
      icon: Users,
      title: "Comunidade Ativa",
      description: "Conecte-se com outros amantes da boa comida e descubra dicas exclusivas da comunidade."
    },
    {
      icon: Utensils,
      title: "Cardápios Completos",
      description: "Explore cardápios detalhados e preços antes de visitar o restaurante."
    },
    {
      icon: Heart,
      title: "Favoritos",
      description: "Salve seus restaurantes preferidos e crie listas personalizadas para diferentes ocasiões."
    }
  ];

  return (
    <section id="recursos" className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tudo que você precisa em um só app
          </h2>
          <p className="text-lg text-muted-foreground">
            Recursos pensados para tornar sua experiência gastronômica ainda melhor
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="p-6 hover-scale shadow-elegant">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
