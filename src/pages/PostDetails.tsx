import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Apple, Smartphone } from "lucide-react";
import { useAppRedirect } from "@/hooks/useAppRedirect";

const PostDetails = () => {
  const { id } = useParams();
  useAppRedirect(`/post/${id}`);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">
              Baixe o App BSBeats
            </h1>
            <p className="text-xl text-muted-foreground">
              Para visualizar este post, baixe nosso aplicativo
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2" asChild>
              <a
                href="https://apps.apple.com/app/bsb-eats/id6751424005"
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

          <div className="pt-8 text-sm text-muted-foreground">
            <p>ID do Post: {id}</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PostDetails;
