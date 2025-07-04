import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, RotateCcw, ExternalLink, X } from 'lucide-react';

interface CompletionMessageProps {
  isVisible: boolean;
  onRestart: () => void;
  onClose: () => void;
}

const CompletionMessage = ({ isVisible, onRestart, onClose }: CompletionMessageProps) => {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setShowMessage(true);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setShowMessage(false);
    }
  }, [isVisible]);

  if (!showMessage) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-4 md:p-6">
      <Card className="bg-slate-800/95 border-clareia-violet/40 w-full max-w-xs sm:max-w-md md:max-w-lg max-h-[90vh] overflow-y-auto animate-fade-in">
        <CardContent className="p-4 sm:p-6 md:p-8 text-center relative">
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="absolute top-2 right-2 sm:top-4 sm:right-4 w-6 h-6 sm:w-8 sm:h-8 p-0 hover:bg-clareia-violet/20 text-slate-300 hover:text-white"
            aria-label="Fechar mensagem"
            title="Fechar (Esc)"
          >
            <X className="w-3 h-3 sm:w-4 sm:h-4" />
          </Button>

          <div className="mb-4 sm:mb-6">
            <CheckCircle className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-clareia-cyan mx-auto mb-3 sm:mb-4" />
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2">
              Apresentação Concluída! 🎉
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed px-2">
              Você navegou por todo o portfólio do Clareia. Esperamos que tenha gostado 
              da experiência e entendido como nossa plataforma tem potencial para transformar os estudos!
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <div className="bg-slate-700/50 rounded-lg p-3 sm:p-4">
              <h4 className="text-base sm:text-lg font-semibold text-clareia-cyan mb-2">
                Próximos Passos
              </h4>
              <p className="text-xs sm:text-sm text-slate-300">
                Que tal testar o Clareia na prática? Acesse nossa plataforma 
                e conheça o protótipo.
              </p>
            </div>

            <div className="flex flex-col gap-2 sm:gap-3 justify-center">
              <Button
                onClick={onRestart}
                variant="outline"
                className="w-full border-clareia-violet text-clareia-violet hover:bg-clareia-violet hover:text-white text-sm sm:text-base"
              >
                <RotateCcw className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                Revisar Portfólio
              </Button>
              
              <Button
                asChild
                className="w-full bg-gradient-to-r from-clareia-violet to-clareia-cyan hover:from-clareia-light-violet hover:to-clareia-violet text-white text-sm sm:text-base"
              >
                <a 
                  href="https://clareia.xyz" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                  Experimentar Clareia
                </a>
              </Button>
            </div>
          </div>

          <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-slate-600">
            <p className="text-xs text-slate-400">
              Obrigado por acompanhar nossa apresentação no Hub Goiás! 🚀
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CompletionMessage;
