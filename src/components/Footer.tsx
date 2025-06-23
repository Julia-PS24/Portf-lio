
import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <img src="/lovable-uploads/41e7f6b6-6bda-4df3-81fd-5656033f0a31.png" alt="Clareia Logo" className="w-10 h-10 object-fill" />
            <span className="text-2xl font-bold gradient-text">Clareia</span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-slate-400 mb-2">
              IA e gamificação redefinindo a experiência de aprendizagem.
            </p>
            <p className="text-slate-500 text-sm">© 2025 Clareia.</p>
          </div>
        </div>
        
        <div className="mb-8 pt-8 border-t border-slate-800 text-center">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-400 mb-8">
            <a href="#overview" className="hover:text-clareia-cyan transition-colors">Como funciona</a>
            <a href="#problem" className="hover:text-clareia-cyan transition-colors">Desafios</a>
            <a href="#solution" className="hover:text-clareia-cyan transition-colors">Nossa solução</a>
            <a href="#team" className="hover:text-clareia-cyan transition-colors">Quem somos</a>
            <a href="#features" className="hover:text-clareia-cyan transition-colors">Diferenciais</a>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            {/* Instagram */}
            <a 
              href="https://instagram.com/clareia.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-3 bg-gradient-to-r from-clareia-violet/20 to-clareia-cyan/20 border border-clareia-violet/30 rounded-lg px-6 py-3 hover:from-clareia-violet/30 hover:to-clareia-cyan/30 transition-all duration-300 card-hover"
            >
              <Instagram className="w-6 h-6 text-clareia-cyan" />
              <span className="text-white font-medium">@clareia.ai</span>
            </a>

            {/* UFG */}
            <div className="flex items-center space-x-3 bg-gradient-to-r from-clareia-light-violet/20 to-clareia-violet/20 border border-clareia-light-violet/30 rounded-lg px-6 py-3">
              <div className="w-8 h-8 bg-gradient-to-br from-clareia-light-violet to-clareia-violet rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">UFG</span>
              </div>
              <div className="text-left">
                <p className="text-white font-medium text-sm">Desenvolvido por graduandos</p>
                <p className="text-clareia-light-violet text-xs">IA - Universidade Federal de Goiás</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
