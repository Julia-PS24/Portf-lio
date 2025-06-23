
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img src="/lovable-uploads/41e7f6b6-6bda-4df3-81fd-5656033f0a31.png" alt="Clareia Logo" className="w-10 h-10 object-cover" />
          <span className="text-2xl font-bold gradient-text">Clareia</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#overview" className="text-slate-300 hover:text-clareia-cyan transition-colors">
            Como funciona
          </a>
          <a href="#problem" className="text-slate-300 hover:text-clareia-cyan transition-colors">
            Desafios
          </a>
          <a href="#solution" className="text-slate-300 hover:text-clareia-cyan transition-colors">
            Nossa solução
          </a>
          <a href="#team" className="text-slate-300 hover:text-clareia-cyan transition-colors">
            Quem somos
          </a>
          <a href="#features" className="text-slate-300 hover:text-clareia-cyan transition-colors">
            Diferenciais
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          
        </div>
      </div>
    </header>
  );
};

export default Header;
