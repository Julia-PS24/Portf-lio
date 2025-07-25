import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-16 sm:pt-20 md:pt-24">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-hero-gradient opacity-90"></div>

      {/* Animated background elements - optimized for mobile */}
      <div className="absolute inset-0">
        <div className="absolute top-10 sm:top-20 left-4 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-clareia-violet/20 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-10 sm:bottom-20 right-4 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-clareia-cyan/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '1s' }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 sm:w-80 sm:h-80 bg-clareia-light-violet/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '2s' }}
        ></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10 flex flex-col justify-center min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-5rem)] md:min-h-[calc(100vh-6rem)]">
        <div className="max-w-4xl mx-auto flex flex-col justify-center flex-1 py-8 sm:py-12">
          {/* Logo */}
          <div className="mb-6 sm:mb-8 animate-fade-in flex justify-center">
            <img
              src="/lovable-uploads/logo.ico"
              alt="Clareia Logo"
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain filter drop-shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Brand and title */}
          <div className="mb-6 sm:mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              Transforme seus estudos<br />
              para o <span className="gradient-text">ENEM</span> com<br />
              <span className="text-clareia-violet">inteligência e clareza</span>
            </h1>
          </div>

          {/* Description */}
          <p
            className="text-slate-400 mb-6 sm:mb-8 max-w-3xl mx-auto animate-fade-in text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed px-2"
            style={{ animationDelay: '0.6s' }}
          >
            O <span className="text-clareia-cyan font-semibold">Clareia</span> é uma plataforma educacional que combina
            <span className="text-clareia-violet font-semibold"> IA avançada</span> e
            <span className="text-clareia-light-violet font-semibold"> gamificação</span> para revolucionar
            sua preparação para o vestibular.
          </p>

          {/* Pitch intro */}
          <div
            className="text-center mb-8 sm:mb-12 animate-fade-in"
            style={{ animationDelay: '0.9s' }}
          >
            <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed px-2">
              Desenvolvido por estudantes que conhecem os desafios reais do Ensino Médio,
              o Clareia oferece uma experiência de aprendizado personalizada e motivadora.
            </p>
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 sm:mb-16 animate-fade-in px-4"
            style={{ animationDelay: '1.2s' }}
          >
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-clareia-violet to-clareia-light-violet hover:from-clareia-light-violet hover:to-clareia-violet px-6 sm:px-8 py-4 sm:py-6 card-hover text-slate-50 text-lg sm:text-xl md:text-2xl lg:text-3xl rounded-lg font-medium"
            >
              <a href="https://clareia.xyz" target="_blank" rel="noopener noreferrer">
                Experimente o Clareia
              </a>
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="animate-bounce">
            <ArrowDown className="w-6 h-6 sm:w-8 sm:h-8 mx-auto text-clareia-cyan" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;