import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAppRedirect } from "@/hooks/useAppRedirect";

const RestaurantDetails = () => {
  const { id } = useParams();
  useAppRedirect(`/restaurant/${id}/details`);

  useEffect(() => {
    console.log("Restaurant Details - ID:", id);
  }, [id]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl font-bold">Detalhes do Restaurante</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                ID do Restaurante: <span className="font-semibold text-foreground">{id}</span>
              </p>
              <p className="text-muted-foreground">
                Esta página mostra os detalhes do restaurante. Conecte com seu app mobile através de deep linking.
              </p>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default RestaurantDetails;
