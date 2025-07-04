import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { X, ArrowUp, ArrowDown, Home, Mouse } from 'lucide-react';

const NavigationInstructions = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has seen instructions before
    const hasSeenInstructions = localStorage.getItem('clareia-portfolio-instructions-seen');

    if (!hasSeenInstructions) {
      // Show instructions after a brief delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 3000);

      // Auto-hide after 12 seconds
      const autoHideTimer = setTimeout(() => {
        setIsVisible(false);
        localStorage.setItem('clareia-portfolio-instructions-seen', 'true');
      }, 15000);

      return () => {
        clearTimeout(timer);
        clearTimeout(autoHideTimer);
      };
    }
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="bg-slate-800/95 border-clareia-violet/40 max-w-md w-full animate-fade-in">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-white">
              Como navegar no portfólio
            </h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsVisible(false)}
              className="w-8 h-8 p-0 hover:bg-clareia-violet/20 text-slate-300 hover:text-white"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          <div className="space-y-4 text-sm text-slate-300">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 bg-slate-700 px-2 py-1 rounded">
                <ArrowUp className="w-3 h-3" />
                <ArrowDown className="w-3 h-3" />
              </div>
              <span>Use as setas do teclado para navegar entre seções</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-slate-700 px-2 py-1 rounded">
                <Home className="w-3 h-3" />
              </div>
              <span>Pressione Home para voltar ao início</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-slate-700 px-2 py-1 rounded">
                <Mouse className="w-3 h-3" />
              </div>
              <span>Clique nos indicadores laterais para navegar diretamente</span>
            </div>

            <div className="pt-2 border-t border-slate-600">
              <p className="text-xs text-slate-400">
                Este portfólio foi sincronizado com o pitch do Hub Goiás.
                Use a navegação para acompanhar a apresentação.
              </p>
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <Button
              onClick={() => {
                setIsVisible(false);
                localStorage.setItem('clareia-portfolio-instructions-seen', 'true');
              }}
              className="bg-gradient-to-r from-clareia-violet to-clareia-cyan hover:from-clareia-light-violet hover:to-clareia-violet text-white"
            >
              Entendi!
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NavigationInstructions;
