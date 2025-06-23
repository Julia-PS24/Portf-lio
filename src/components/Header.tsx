import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
      <div className="container mx-auto px-4 py-3 sm:py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2 sm:space-x-3">
          <img
            src="/lovable-uploads/41e7f6b6-6bda-4df3-81fd-5656033f0a31.png"
            alt="Clareia Logo"
            className="w-8 h-8 sm:w-10 sm:h-10 object-cover"
          />
          <span className="text-lg sm:text-xl md:text-2xl font-bold gradient-text">Clareia</span>
        </div>

        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <a href="#overview" className="text-slate-300 hover:text-clareia-cyan transition-colors text-sm lg:text-base">
            Como funciona
          </a>
          <a href="#problem" className="text-slate-300 hover:text-clareia-cyan transition-colors text-sm lg:text-base">
            Desafios
          </a>
          <a href="#solution" className="text-slate-300 hover:text-clareia-cyan transition-colors text-sm lg:text-base">
            Nossa solução
          </a>
          <a href="#team" className="text-slate-300 hover:text-clareia-cyan transition-colors text-sm lg:text-base">
            Quem somos
          </a>
          <a href="#features" className="text-slate-300 hover:text-clareia-cyan transition-colors text-sm lg:text-base">
            Saiba mais
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
