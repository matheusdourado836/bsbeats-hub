import FAQ from "./FAQ";
import ContactForm from "./ContactForm";

const Support = () => {
  return (
    <section id="suporte" className="py-16 px-4 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Suporte e Ajuda
          </h2>
          <p className="text-lg text-muted-foreground">
            Estamos aqui para ajudar você com qualquer dúvida ou problema
          </p>
        </div>
        
        <div className="space-y-16">
          <FAQ />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Support;
