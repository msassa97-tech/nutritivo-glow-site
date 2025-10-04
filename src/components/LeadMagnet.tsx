import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import ebookCover from "@/assets/ebook-cover.jpg";

const LeadMagnet = () => {
  return (
    <section className="py-20 px-6">
      <div className="container max-w-6xl mx-auto">
        <div className="bg-card rounded-[2rem] shadow-soft overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0 items-center">
            {/* E-book image */}
            <div className="p-16 flex items-center justify-center bg-gradient-to-br from-secondary/30 to-background">
              <div className="relative">
                <img 
                  src={ebookCover}
                  alt="Guia de Nutrição Essencial"
                  className="w-full max-w-sm rounded-2xl shadow-soft"
                />
              </div>
            </div>
            
            {/* Form */}
            <div className="px-8 py-16 lg:px-16 lg:py-20">
              <h2 className="text-4xl lg:text-5xl font-light text-primary mb-6 leading-tight">
                Baixe Meu<br />
                E-book Graturito
              </h2>
              <p className="text-primary/80 mb-8 leading-relaxed">
                Descubra segredos para ua vida mais saulável, receitas exclusives e mude sua alimentação para sernere.
              </p>
              
              <div className="space-y-4">
                <Input 
                  type="email"
                  placeholder="Seu e-mail"
                  className="h-12 rounded-xl border-primary/30 focus-visible:ring-primary"
                />
                
                <Button variant="pill" size="xl" className="w-full">
                  Babkar Agora
                </Button>
                
                <div className="flex items-center gap-2 pt-2">
                  <Checkbox id="privacy" className="border-primary/50 data-[state=checked]:bg-primary" />
                  <label 
                    htmlFor="privacy"
                    className="text-sm text-foreground/60 cursor-pointer"
                  >
                    Concordo um a política de prividade.
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnet;
