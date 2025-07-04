import React, { useState, useEffect } from "react";
import { Instagram } from "lucide-react";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";

const Footer = () => {
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [showTeamInfo, setShowTeamInfo] = useState(false);

  useEffect(() => {
    // Simplificada: considera touch device apenas para telas pequenas
    const checkTouchDevice = () => {
      const isSmallScreen = window.innerWidth < 768; // md breakpoint
      return isSmallScreen;
    };

    const isTouchResult = checkTouchDevice();
    setIsTouchDevice(isTouchResult);

    // Recheck on resize
    const handleResize = () => {
      const isTouchResult = checkTouchDevice();
      setIsTouchDevice(isTouchResult);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleTeamClick = () => {
    if (isTouchDevice) {
      setShowTeamInfo(!showTeamInfo);
    }
  };

  // Separate components for touch and non-touch devices
  const TouchTeamCard = () => (
    <div
      className="flex w-full min-w-[180px] max-w-xs sm:min-w-[200px] md:min-w-[260px] md:max-w-md items-center justify-center space-x-2 sm:space-x-3 md:space-x-4 bg-white/10 border-2 border-clareia-light-violet rounded-2xl px-4 sm:px-6 md:px-10 py-3 sm:py-4 md:py-6 min-h-[80px] sm:min-h-[90px] md:min-h-[120px] shadow-lg cursor-pointer transition-all duration-300 hover:bg-white/20 mx-auto"
      onClick={handleTeamClick}
    >
      <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-clareia-light-violet to-clareia-violet rounded-full flex items-center justify-center flex-shrink-0">
        <span className="text-white font-extrabold text-sm sm:text-base md:text-lg">UFG</span>
      </div>
      <div className="text-left min-w-0 flex-1">
        <p className="text-slate-200 text-xs sm:text-sm md:text-base lg:text-lg leading-tight">
          Desenvolvido por estudantes
        </p>
        <p className="text-white font-bold text-xs sm:text-sm md:text-base lg:text-lg leading-tight">
          IA - Universidade Federal de Goiás
        </p>
      </div>
    </div>
  );

  const DesktopTeamCard = () => (
    <div className="flex flex-1 min-w-[180px] max-w-xs sm:min-w-[200px] md:min-w-[260px] md:max-w-md items-center justify-center space-x-2 sm:space-x-3 md:space-x-4 bg-white/10 border-2 border-clareia-light-violet rounded-2xl px-4 sm:px-6 md:px-10 py-3 sm:py-4 md:py-6 min-h-[80px] sm:min-h-[90px] md:min-h-[120px] shadow-lg cursor-pointer transition-all duration-300 hover:bg-white/20">
      <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-clareia-light-violet to-clareia-violet rounded-full flex items-center justify-center flex-shrink-0">
        <span className="text-white font-extrabold text-sm sm:text-base md:text-lg">UFG</span>
      </div>
      <div className="text-left min-w-0 flex-1">
        <p className="text-slate-200 text-xs sm:text-sm md:text-base lg:text-lg leading-tight">
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
          {/* CTA Card - Transferido do Features */}
          <div className="w-full max-w-4xl mb-6 sm:mb-8">
            <div className="bg-white/10 border-2 border-clareia-light-violet rounded-2xl p-6 sm:p-8 md:p-12 text-center shadow-lg hover:bg-white/20 transition-all duration-300">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-white">
                Pronto para revolucionar seus estudos?
              </h3>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-200 mb-6 sm:mb-8 max-w-xs sm:max-w-lg md:max-w-2xl mx-auto leading-relaxed">
                Junte-se ao Clareia para alcançar seus objetivos acadêmicos e entenda como ele pode redefinir sua experiência de aprendizagem.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
                <a
                  href="https://clareia.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-gradient-to-r from-clareia-violet to-clareia-cyan hover:from-clareia-light-violet hover:to-clareia-violet text-sm sm:text-base md:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-white font-medium transition-all duration-300 hover:scale-105 inline-block"
                >
                  Começar agora!
                </a>
              </div>
            </div>
          </div>

          {/* Contact Card */}
          <div className="w-full max-w-4xl mb-6 sm:mb-8">
            <div className="bg-white/10 border-2 border-clareia-cyan rounded-2xl p-6 sm:p-8 text-center shadow-lg hover:bg-white/20 transition-all duration-300">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6 text-white">
                Contate-nos:
              </h3>
              <div className="space-y-2 sm:space-y-3">
                <p className="text-sm sm:text-base text-slate-200">
                  <a href="mailto:clareiaenem@gmail.com" className="hover:text-clareia-cyan transition-colors">
                    clareiaenem@gmail.com
                  </a>
                </p>
                <p className="text-sm sm:text-base text-slate-200">
                  <a href="mailto:souzajulia@discente.ufg.br" className="hover:text-clareia-cyan transition-colors">
                    souzajulia@discente.ufg.br
                  </a>
                </p>
                <p className="text-sm sm:text-base text-slate-200">
                  <a href="mailto:gustavoduarte@discente.ufg.br" className="hover:text-clareia-cyan transition-colors">
                    gustavoduarte@discente.ufg.br
                  </a>
                </p>
                <p className="text-sm sm:text-base text-slate-200">
                  <a href="mailto:vieira_jamily@discente.ufg.br" className="hover:text-clareia-cyan transition-colors">
                    vieira_jamily@discente.ufg.br
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6 w-full">
            {/* Instagram Card Container */}
            <div className="flex-1 flex justify-center">
              <a
                href="https://instagram.com/clareia.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full min-w-[180px] max-w-xs sm:min-w-[200px] md:min-w-[260px] md:max-w-md items-center justify-center space-x-2 sm:space-x-3 md:space-x-4 bg-white/10 border-2 border-clareia-cyan rounded-2xl px-4 sm:px-6 md:px-10 py-3 sm:py-4 md:py-6 min-h-[80px] sm:min-h-[90px] md:min-h-[120px] hover:bg-white/20 transition-all duration-300 card-hover shadow-lg"
              >
                <Instagram className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-clareia-cyan flex-shrink-0" />
                <span className="text-white font-bold text-sm sm:text-lg md:text-xl">@clareia.ai</span>
              </a>
            </div>

            {/* UFG Card Container */}
            <div className="flex-1 flex justify-center relative">
              {/* Mobile version - visible only on small screens */}
              <div className="md:hidden w-full flex justify-center relative">
                <TouchTeamCard />
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

              {/* Desktop version - visible only on medium+ screens with CSS hover tooltip */}
              <div className="hidden md:block w-full relative group">
                <div className="flex w-full min-w-[180px] max-w-xs sm:min-w-[200px] md:min-w-[260px] md:max-w-md items-center justify-center space-x-2 sm:space-x-3 md:space-x-4 bg-white/10 border-2 border-clareia-light-violet rounded-2xl px-4 sm:px-6 md:px-10 py-3 sm:py-4 md:py-6 min-h-[80px] sm:min-h-[90px] md:min-h-[120px] shadow-lg cursor-pointer transition-all duration-300 hover:bg-white/20 mx-auto">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-clareia-light-violet to-clareia-violet rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-extrabold text-sm sm:text-base md:text-lg">UFG</span>
                  </div>
                  <div className="text-left min-w-0 flex-1">
                    <p className="text-slate-200 text-xs sm:text-sm md:text-base lg:text-lg leading-tight">
                      Desenvolvido por estudantes
                    </p>
                    <p className="text-white font-bold text-xs sm:text-sm md:text-base lg:text-lg leading-tight">
                      IA - Universidade Federal de Goiás
                    </p>
                  </div>
                </div>

                {/* CSS Hover Tooltip */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50">
                  <div className="bg-slate-900 border border-clareia-cyan text-white rounded-xl px-4 py-3 shadow-lg min-w-[200px] text-center">
                    <span className="block text-sm font-bold bg-gradient-to-r from-clareia-violet to-clareia-cyan bg-clip-text text-transparent mb-2">
                      Equipe Clareia
                    </span>
                    <span className="block text-xs">Júlia Pereira Souza</span>
                    <span className="block text-xs">Gustavo Duarte</span>
                    <span className="block text-xs">Jamily Vieira</span>
                  </div>
                  {/* Arrow */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-900"></div>
                </div>
              </div>
            </div>
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
