import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

const FAQ = () => {
  const faqItems = [
    {
      question: "Como funciona o BSB Eats?",
      answer: "O BSB Eats é um aplicativo que ajuda você a descobrir restaurantes em Brasília. Você pode buscar por tipo de comida, localização, preço e muito mais. Além disso, nossa rede social permite que você compartilhe fotos e experiências dos lugares que visitou."
    },
    {
      question: "O app tem custo?",
      answer: "O BSB Eats é gratuito para download e uso. Algumas funcionalidades premium podem estar disponíveis através de assinatura, mas as principais features são totalmente gratuitas."
    },
    {
      question: "Como posso avaliar um restaurante?",
      answer: "Após visitar um restaurante encontrado através do app, você pode avaliá-lo dando estrelas (1 a 5) e escrevendo um comentário. Você também pode compartilhar fotos da sua experiência na nossa rede social."
    },
    {
      question: "Posso usar o app sem cadastro?",
      answer: "Você pode navegar e buscar restaurantes sem cadastro, mas para avaliar, comentar, compartilhar fotos e usar a rede social, é necessário criar uma conta gratuita."
    },
    {
      question: "Como faço para compartilhar fotos?",
      answer: "Na seção social do app, toque no botão '+' ou 'Nova Postagem', selecione as fotos da sua galeria, adicione uma descrição e marque o restaurante visitado. Sua postagem será compartilhada com a comunidade BSB Eats."
    },
    {
      question: "Posso sugerir um restaurante?",
      answer: "Sim! Use a função 'Sugerir Restaurante' no menu do app. Preencha as informações do estabelecimento e nossa equipe verificará e adicionará ao catálogo."
    },
    {
      question: "Como reportar um problema?",
      answer: "Você pode reportar problemas diretamente no app através do menu 'Ajuda' ou entrar em contato conosco através do formulário de contato neste site de suporte."
    },
    {
      question: "Minha conta foi suspensa, o que fazer?",
      answer: "Se sua conta foi suspensa, entre em contato conosco através do formulário de contato explicando a situação. Nossa equipe analisará o caso e responderá em até 24 horas."
    }
  ];

  return (
    <section id="faq" className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-muted-foreground">
            Encontre respostas para as dúvidas mais comuns sobre o BSB Eats
          </p>
        </div>

        <Card className="p-6 shadow-elegant">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left hover:text-primary">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Card>
      </div>
    </section>
  );
};

export default FAQ;