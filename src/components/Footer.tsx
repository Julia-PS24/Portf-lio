
const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <img 
              src="/lovable-uploads/41e7f6b6-6bda-4df3-81fd-5656033f0a31.png" 
              alt="Clareia Logo" 
              className="w-10 h-10"
            />
            <span className="text-2xl font-bold gradient-text">Clareia</span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-slate-400 mb-2">
              IA e gamificação redefinindo a experiência de aprendizagem.
            </p>
            <p className="text-slate-500 text-sm">
              © 2024 Clareia. Transformando o futuro da educação.
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-slate-800 text-center">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-400">
            <a href="#overview" className="hover:text-clareia-cyan transition-colors">Visão geral</a>
            <a href="#problem" className="hover:text-clareia-cyan transition-colors">Problema</a>
            <a href="#solution" className="hover:text-clareia-cyan transition-colors">Solução</a>
            <a href="#features" className="hover:text-clareia-cyan transition-colors">Recursos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
