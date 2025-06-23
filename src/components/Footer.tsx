import React, { useState, useEffect } from "react";
import { Instagram } from "lucide-react";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";

const Footer = () => {
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [showTeamInfo, setShowTeamInfo] = useState(false);

  useEffect(() => {
    // Detecta se é um dispositivo touch
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  const handleTeamClick = () => {
    if (isTouchDevice) {
      setShowTeamInfo(!showTeamInfo);
    }
  };

  const TeamCard = () => (
    <div
      className="flex flex-1 min-w-[180px] max-w-xs sm:min-w-[200px] md:min-w-[260px] md:max-w-md items-center justify-center space-x-2 sm:space-x-3 md:space-x-4 bg-white/10 border-2 border-clareia-light-violet rounded-2xl px-4 sm:px-6 md:px-10 py-3 sm:py-4 md:py-6 min-h-[80px] sm:min-h-[90px] md:min-h-[120px] shadow-lg cursor-pointer transition-all duration-300 hover:bg-white/20"
      onClick={handleTeamClick}
    >
      <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-clareia-light-violet to-clareia-violet rounded-full flex items-center justify-center flex-shrink-0">
        <span className="text-white font-extrabold text-sm sm:text-base md:text-lg">UFG</span>
      </div>
      <div className="text-left min-w-0 flex-1">
        <p className="text-clareia-light-violet text-xs sm:text-sm md:text-base lg:text-lg leading-tight">
          Desenvolvido por estudantes
        </p>
        <p className="text-white font-bold text-xs sm:text-sm md:text-base lg:text-lg leading-tight">
          IA - Universidade Federal de Goiás
        </p>
      </div>
    </div>
  );

  return (
    <footer className="pt-6 sm:pt-8 pb-12 sm:pb-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center justify-center text-center gap-6 sm:gap-8 mb-8 sm:mb-10 w-full">
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6 w-full">
            {/* Instagram Card */}
            <a
              href="https://instagram.com/clareia.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 min-w-[180px] max-w-xs sm:min-w-[200px] md:min-w-[260px] md:max-w-md items-center justify-center space-x-2 sm:space-x-3 md:space-x-4 bg-white/10 border-2 border-clareia-cyan rounded-2xl px-4 sm:px-6 md:px-10 py-3 sm:py-4 md:py-6 min-h-[80px] sm:min-h-[90px] md:min-h-[120px] hover:bg-white/20 transition-all duration-300 card-hover shadow-lg"
            >
              <Instagram className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-clareia-cyan flex-shrink-0" />
              <span className="text-white font-bold text-sm sm:text-lg md:text-xl">@clareia.ai</span>
            </a>

            {/* Team Card - Desktop with Tooltip, Mobile with Click */}
            {isTouchDevice ? (
              <div className="relative flex-1">
                <TeamCard />
                {showTeamInfo && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 z-50 bg-slate-900 border border-clareia-cyan text-white rounded-xl px-4 py-3 shadow-lg min-w-[200px] text-center">
                    <span className="block text-sm font-bold bg-gradient-to-r from-clareia-violet to-clareia-cyan bg-clip-text text-transparent mb-2">
                      Equipe Clareia
                    </span>
                    <span className="block text-xs">Júlia Pereira Souza</span>
                    <span className="block text-xs">Gustavo Duarte</span>
                    <span className="block text-xs">Jamily Vieira</span>
                  </div>
                )}
              </div>
            ) : (
              <Tooltip delayDuration={0}>
                <TooltipTrigger asChild>
                  <TeamCard />
                </TooltipTrigger>
                <TooltipContent side="top" className="text-center border border-clareia-cyan bg-slate-900 text-white rounded-xl px-4 md:px-6 py-3 md:py-4 shadow-lg min-w-[180px] md:min-w-[220px]">
                  <div>
                    <span className="block text-sm md:text-base lg:text-lg font-bold bg-gradient-to-r from-clareia-violet to-clareia-cyan bg-clip-text text-transparent mb-1 md:mb-2">
                      Equipe Clareia
                    </span>
                    <span className="block text-xs md:text-sm">Júlia Pereira Souza</span>
                    <span className="block text-xs md:text-sm">Gustavo Duarte</span>
                    <span className="block text-xs md:text-sm">Jamily Vieira</span>
                  </div>
                </TooltipContent>
              </Tooltip>
            )}
          </div>

          {/* CTA Button */}
          <div className="w-full flex justify-center mt-4 sm:mt-6">
            <a
              href="https://clareia.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-xs sm:max-w-sm bg-gradient-to-r from-clareia-violet to-clareia-cyan text-white font-bold text-base sm:text-lg md:text-xl rounded-2xl px-6 py-3 sm:py-4 md:px-10 md:py-5 shadow-lg hover:from-clareia-light-violet hover:to-clareia-violet transition-all duration-300 text-center card-hover"
            >
              Começar agora
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 sm:mt-12 text-center">
          <p className="text-white text-xs sm:text-sm opacity-70">© 2025 Clareia</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
