import React from "react";
import { Instagram } from "lucide-react";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";

const Footer = () => {
  return (
    <footer className="pt-8 pb-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center gap-8 mb-10">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 w-full">
            <a 
              href="https://instagram.com/clareia.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-1 min-w-[260px] max-w-md items-center justify-center space-x-4 bg-white/10 border-2 border-clareia-cyan rounded-2xl px-10 py-6 min-h-[120px] hover:bg-white/20 transition-all duration-300 card-hover shadow-lg"
            >
              <Instagram className="w-10 h-10 text-clareia-cyan" />
              <span className="text-white font-bold text-xl">@clareia.ai</span>
            </a>
            <Tooltip delayDuration={0}>
              <TooltipTrigger asChild>
                <div className="flex flex-1 min-w-[260px] max-w-md items-center justify-center space-x-4 bg-white/10 border-2 border-clareia-light-violet rounded-2xl px-10 py-6 min-h-[120px] shadow-lg cursor-pointer">
                  <div className="w-12 h-12 bg-gradient-to-br from-clareia-light-violet to-clareia-violet rounded-full flex items-center justify-center">
                    <span className="text-white font-extrabold text-lg">UFG</span>
                  </div>
                  <div className="text-left">
                    <p className="text-clareia-light-violet text-lg">Desenvolvido por estudantes</p>
                    <p className="text-white font-bold text-lg">IA - Universidade Federal de Goiás</p>
                  </div>
                </div>
              </TooltipTrigger>
              <TooltipContent side="top" className="text-center border border-clareia-cyan bg-slate-900 text-white rounded-xl px-6 py-4 shadow-lg min-w-[220px]">
                <div>
                  <span className="block text-lg font-bold bg-gradient-to-r from-clareia-violet to-clareia-cyan bg-clip-text text-transparent mb-2">Equipe Clareia</span>
                  <span className="block">Júlia Pereira Souza</span>
                  <span className="block">Gustavo Duarte</span>
                  <span className="block">Jamily Vieira</span>
                </div>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
        <div className="mt-12 text-center">
          <p className="text-white text-sm opacity-70">© 2025 Clareia</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
