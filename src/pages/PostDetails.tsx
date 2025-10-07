import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PostDetails = () => {
  const { id } = useParams();

  useEffect(() => {
    console.log("Post Details - ID:", id);
  }, [id]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl font-bold">Detalhes do Post</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                ID do Post: <span className="font-semibold text-foreground">{id}</span>
              </p>
              <p className="text-muted-foreground">
                Esta página mostra os detalhes do post. Conecte com seu app mobile através de deep linking.
              </p>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default PostDetails;
