import { useEffect } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileSidebar = ({ isOpen, onClose }: MobileSidebarProps) => {
  const navigationLinks = [
    { href: "#overview", label: "Como funciona" },
    { href: "#problem", label: "Desafios" },
    { href: "#team", label: "Quem somos" },
    { href: "#solution", label: "Tecnologia" },
    { href: "#features", label: "Por que escolher" }
  ];

  // Fechar sidebar com tecla Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  // Prevenir scroll do body quando sidebar estiver aberta
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleLinkClick = (href: string) => {
    onClose();
    // Pequeno delay para permitir que a sidebar feche antes do scroll
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 300);
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Sidebar */}
      <div
        className={cn(
          "fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-slate-900/95 backdrop-blur-md border-l border-slate-700 z-50 transition-transform duration-300 ease-in-out md:hidden",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navegação"
      >
        {/* Header da Sidebar */}
        <div className="flex items-center justify-between p-6 border-b border-slate-700">
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/41e7f6b6-6bda-4df3-81fd-5656033f0a31.png" 
              alt="Clareia Logo" 
              className="w-8 h-8 object-cover" 
            />
            <span className="text-xl font-bold gradient-text">Clareia</span>
          </div>
          
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-clareia-cyan"
            aria-label="Fechar menu"
          >
            <X className="w-6 h-6 text-slate-300" />
          </button>
        </div>

        {/* Links de Navegação */}
        <nav className="flex flex-col p-6 space-y-4">
          {navigationLinks.map((link, index) => (
            <button
              key={link.href}
              onClick={() => handleLinkClick(link.href)}
              className={cn(
                "text-left p-4 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800/50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-clareia-cyan animate-fade-in",
                "border border-transparent hover:border-clareia-cyan/30"
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="text-lg font-medium">{link.label}</span>
            </button>
          ))}
        </nav>

        {/* CTA Button na Sidebar */}
        <div className="absolute bottom-6 left-6 right-6">
          <a
            href="https://clareia.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-gradient-to-r from-clareia-violet to-clareia-cyan text-white font-bold text-center py-4 px-6 rounded-xl shadow-lg hover:from-clareia-light-violet hover:to-clareia-violet transition-all duration-300 card-hover"
            onClick={onClose}
          >
            Acesse o site!
          </a>
        </div>
      </div>
    </>
  );
};

export default MobileSidebar;
