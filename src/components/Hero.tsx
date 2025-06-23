import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
const Hero = () => {
  return <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-hero-gradient opacity-90"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-clareia-violet/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-clareia-cyan/20 rounded-full blur-3xl animate-float" style={{
        animationDelay: '1s'
      }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-clareia-light-violet/10 rounded-full blur-3xl animate-float" style={{
        animationDelay: '2s'
      }}></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Logo and brand */}
          <div className="mb-8 animate-fade-in">
            <img src="/lovable-uploads/41e7f6b6-6bda-4df3-81fd-5656033f0a31.png" alt="Clareia Logo" className="w-24 h-24 mx-auto mb-6 drop-shadow-2xl" />
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Prepare-se para<br />
              o <span className="gradient-text">ENEM</span> com<br />
              <span className="text-clareia-violet">inteligência</span> e <span className="text-clareia-cyan">clareza</span>
            </h1>
          </div>

          {/* Slogan */}
          <p className="text-xl md:text-2xl text-slate-300 mb-8 animate-fade-in" style={{
          animationDelay: '0.3s'
        }}>
            IA e gamificação redefinindo a experiência de aprendizagem.
          </p>

          {/* Description */}
          <p className="text-lg text-slate-400 mb-12 max-w-3xl mx-auto animate-fade-in" style={{
          animationDelay: '0.6s'
        }}>
            O <span className="text-clareia-cyan font-semibold">Clareia</span> é uma plataforma de estudo gamificada que 
            usa inteligência artificial para ajudar você a conquistar 
            a sua vaga na universidade.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in" style={{
          animationDelay: '0.9s'
        }}>
            <Button size="lg" className="bg-gradient-to-r from-clareia-violet to-clareia-light-violet hover:from-clareia-light-violet hover:to-clareia-violet text-lg px-8 py-6 card-hover font-normal text-slate-50">
              Começar agora
            </Button>
            <Button variant="outline" size="lg" className="border-clareia-cyan text-clareia-cyan hover:bg-clareia-cyan hover:text-slate-900 text-lg px-8 py-6">
              Já tenho conta
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="animate-bounce">
            <ArrowDown className="w-8 h-8 mx-auto text-clareia-cyan" />
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;