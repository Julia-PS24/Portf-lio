import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
const Hero = () => {
  return <section className="relative overflow-hidden pt-24">
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

      <div className="container mx-auto px-4 text-center relative z-10 flex flex-col justify-center min-h-[calc(100vh-6rem)]">
        <div className="max-w-4xl mx-auto flex flex-col justify-center flex-1">
          {/* Logo and brand */}
          <div className="mb-8 animate-fade-in">
            
            <h1 className="text-5xl font-bold mb-6 md:text-6xl px-4 py-0 my-0">
              Prepare-se para<br />
              o <span className="gradient-text">ENEM</span> com<br />
              <span className="text-clareia-violet">inteligência</span> e <span className="text-clareia-cyan">clareza</span>
            </h1>
          </div>

          {/* Slogan */}
          

          {/* Description */}
          <p style={{
          animationDelay: '0.6s'
        }} className="text-slate-400 mb-12 max-w-3xl mx-auto animate-fade-in text-3xl my-[35px]">
            O <span className="text-clareia-cyan font-semibold">Clareia</span> é uma plataforma de estudo gamificada que 
            usa inteligência artificial para ajudar você a conquistar 
            a sua vaga na universidade.
          </p>

          {/* CTA Buttons */}
          <div style={{
          animationDelay: '0.9s'
        }} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in my-[52px] px-[36px] py-[22px] mx-[12px]">
            <a href="https://clareia.xyz" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-gradient-to-r from-clareia-violet to-clareia-light-violet hover:from-clareia-light-violet hover:to-clareia-violet px-8 py-6 card-hover text-slate-50 text-3xl rounded-lg font-medium">Conheça o Clareia!</Button>
            </a>
            
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