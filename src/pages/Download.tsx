import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Apple, Download as DownloadIcon } from "lucide-react";

const Download = () => {
  const handleIOSDownload = () => {
    window.location.href = "https://apps.apple.com/app/bsbeats/id_do_seu_app";
  };

  const handleAndroidDownload = () => {
    window.location.href = "https://play.google.com/store/apps/details?id=br.bsbEats.bsb_eats";
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center">Baixe o App bsbEats</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-center text-muted-foreground">
              Para acessar este conteúdo, você precisa ter o aplicativo instalado.
            </p>
            
            <div className="space-y-4">
              <Button 
                onClick={handleIOSDownload}
                className="w-full"
                size="lg"
                variant="default"
              >
                <Apple className="mr-2 h-5 w-5" />
                Baixar na App Store
              </Button>

              <Button 
                onClick={handleAndroidDownload}
                className="w-full"
                size="lg"
                variant="default"
              >
                <DownloadIcon className="mr-2 h-5 w-5" />
                Baixar no Google Play
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default Download;
