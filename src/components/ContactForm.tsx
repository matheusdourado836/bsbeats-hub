import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: formData
      });

      if (error) {
        throw error;
      }

      toast({
        title: "Mensagem enviada!",
        description: "Recebemos sua mensagem e responderemos em até 24 horas.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Erro ao enviar mensagem",
        description: "Ocorreu um erro. Tente novamente mais tarde.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="py-16 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Entre em Contato
          </h2>
          <p className="text-lg text-muted-foreground">
            Precisa de ajuda? Nossa equipe está aqui para você
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <Card className="p-6 shadow-elegant">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Email de Suporte</h3>
                  <p className="text-muted-foreground">suporte@bsbeats.com</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Para questões gerais e problemas técnicos
                  </p>
                </div>
              </div>
            </Card>

          </div>

          <Card className="p-6 shadow-elegant">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome Completo</Label>
                  <Input 
                    id="name" 
                    placeholder="Seu nome" 
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    required 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Tipo de Problema</Label>
                <Select 
                  value={formData.subject}
                  onValueChange={(value) => setFormData(prev => ({ ...prev, subject: value }))}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o tipo de problema" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="login">Problema de Login</SelectItem>
                    <SelectItem value="app">Erro no Aplicativo</SelectItem>
                    <SelectItem value="restaurant">Problema com Restaurante</SelectItem>
                    <SelectItem value="account">Problema na Conta</SelectItem>
                    <SelectItem value="suggestion">Sugestão</SelectItem>
                    <SelectItem value="other">Outro</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Mensagem</Label>
                <Textarea 
                  id="message" 
                  placeholder="Descreva seu problema ou dúvida em detalhes..."
                  className="min-h-[120px]"
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  required 
                />
              </div>

              <Button 
                type="submit" 
                className="w-full shadow-elegant" 
                disabled={isSubmitting}
              >
                {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;