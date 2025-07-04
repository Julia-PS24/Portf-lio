import { useState } from "react";
import { Menu } from "lucide-react";
import MobileSidebar from "./MobileSidebar.tsx";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
        <div className="container mx-auto px-4 py-3 sm:py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <img
              src="/lovable-uploads/logo.ico"
              alt="Clareia Logo"
              className="w-8 h-8 sm:w-10 sm:h-10 object-contain filter drop-shadow-sm hover:scale-105 transition-transform duration-200"
            />
            <span className="text-lg sm:text-xl md:text-2xl font-bold gradient-text">Clareia</span>
          </div>

          {/* Desktop Navigation - 5 links principais */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <a href="#hero" className="text-slate-300 hover:text-clareia-cyan transition-colors text-sm lg:text-base">
              Início
            </a>
            <a href="#team" className="text-slate-300 hover:text-clareia-cyan transition-colors text-sm lg:text-base">
              Por que o criamos?
            </a>
            <a href="#solution" className="text-slate-300 hover:text-clareia-cyan transition-colors text-sm lg:text-base">
              Como Funciona?
            </a>
            <a href="#overview" className="text-slate-300 hover:text-clareia-cyan transition-colors text-sm lg:text-base">
              Por que escolhê-lo?
            </a>
            <a href="#footer" className="text-slate-300 hover:text-clareia-cyan transition-colors text-sm lg:text-base">
              Contate-nos
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleSidebar}
            className="md:hidden p-2 rounded-lg hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-clareia-cyan"
            aria-label="Abrir menu"
            aria-expanded={isSidebarOpen}
          >
            <Menu className="w-6 h-6 text-slate-300" />
          </button>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <MobileSidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
    </>
  );
};

export default Header;
