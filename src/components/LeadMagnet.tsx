import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import ebookCover from "@/assets/ebook-cover.jpg";
const LeadMagnet = () => {
  const {
    toast
  } = useToast();
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !agreed) {
      toast({
        title: "Atenção",
        description: "Preencha o e-mail e aceite a política de privacidade.",
        variant: "destructive"
      });
      return;
    }
    toast({
      title: "E-book enviado!",
      description: "Confira seu e-mail para baixar o guia."
    });
  };
  return <section className="py-12 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container max-w-6xl mx-auto relative z-10 w-full px-4 sm:px-6">
        <div className="glass-dark rounded-2xl sm:rounded-[2rem] shadow-card overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0 items-center">
            {/* E-book image */}
            <div className="p-6 sm:p-8 lg:p-12 flex items-center justify-center bg-gradient-to-br from-secondary/30 to-background/50 backdrop-blur-sm">
              <div className="relative animate-float w-full max-w-[280px] sm:max-w-xs">
                <img src={ebookCover} alt="Guia de Nutrição Essencial" className="w-full h-auto rounded-xl sm:rounded-2xl shadow-glow" />
              </div>
            </div>
            
            {/* Form */}
            <div className="px-6 py-12 sm:px-8 sm:py-16 lg:px-16 lg:py-20 animate-fade-in">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                Guia gratuito:<br />
                Nutrição descomplicada para o dia a dia
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed text-sm sm:text-base">
                Descubra receitas práticas, dicas acessíveis e os primeiros passos para transformar sua alimentação sem pressa e sem pressão.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input type="email" placeholder="Seu e-mail" value={email} onChange={e => setEmail(e.target.value)} className="h-12 rounded-xl border-primary/30 focus-visible:ring-primary glass" />
                
                <Button type="submit" variant="pill" className="w-full h-12 sm:h-14 text-base sm:text-lg">
                  Quero baixar agora
                </Button>
                
                
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default LeadMagnet;