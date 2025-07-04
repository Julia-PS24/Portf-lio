import { ChevronUp, ChevronDown, Home, ArrowUp, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface NavigationIndicatorProps {
  currentSection: number;
  totalSections: number;
  progress: number;
  onPrevious: () => void;
  onNext: () => void;
  onHome: () => void;
  onNavigateToSection: (index: number) => void;
  sectionTitles: string[];
  isNavigating?: boolean;
}

const NavigationIndicator = ({
  currentSection,
  totalSections,
  progress,
  onPrevious,
  onNext,
  onHome,
  onNavigateToSection,
  sectionTitles,
  isNavigating = false
}: NavigationIndicatorProps) => {
  return (
    <>
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-slate-800 z-50">
        <div
          className={`h-full bg-gradient-to-r from-clareia-violet to-clareia-cyan transition-all duration-500 ease-out ${
            isNavigating ? 'animate-pulse' : ''
          }`}
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Navigation Controls - Hidden on mobile */}
      <div className="hidden md:flex fixed right-4 top-1/2 transform -translate-y-1/2 z-40 flex-col gap-2">
        <Card className="bg-slate-800/90 backdrop-blur-sm border-slate-700 p-2">
          <div className="flex flex-col gap-1">
            {/* Home Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={onHome}
              className="w-8 h-8 p-0 hover:bg-clareia-violet/20 text-slate-300 hover:text-white"
              title="Início (Home)"
            >
              <Home className="w-4 h-4" />
            </Button>

            {/* Previous Section */}
            <Button
              variant="ghost"
              size="sm"
              onClick={onPrevious}
              disabled={currentSection === 0}
              className="w-8 h-8 p-0 hover:bg-clareia-violet/20 text-slate-300 hover:text-white disabled:opacity-30"
              title="Seção anterior (↑)"
            >
              <ChevronUp className="w-4 h-4" />
            </Button>

            {/* Section Indicators */}
            <div className="flex flex-col gap-1 py-2">
              {Array.from({ length: totalSections }, (_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer hover:scale-110 ${
                    index === currentSection
                      ? 'bg-clareia-cyan scale-125'
                      : index < currentSection
                      ? 'bg-clareia-violet'
                      : 'bg-slate-600 hover:bg-slate-500'
                  }`}
                  title={sectionTitles[index]}
                  onClick={() => onNavigateToSection(index)}
                />
              ))}
            </div>

            {/* Next Section */}
            <Button
              variant="ghost"
              size="sm"
              onClick={onNext}
              disabled={currentSection === totalSections - 1}
              className="w-8 h-8 p-0 hover:bg-clareia-violet/20 text-slate-300 hover:text-white disabled:opacity-30"
              title="Próxima seção (↓)"
            >
              <ChevronDown className="w-4 h-4" />
            </Button>




          </div>
        </Card>
      </div>

      {/* Section Title Indicator */}
      <div className="fixed bottom-4 left-4 z-40">
        <Card className="bg-slate-800/90 backdrop-blur-sm border-slate-700 px-3 py-2 md:px-4">
          <div className="flex items-center gap-2">
            <span className="text-xs md:text-sm text-slate-400">
              {currentSection + 1}/{totalSections}
            </span>
            <span className="text-xs md:text-sm font-medium text-white truncate max-w-32 md:max-w-none">
              {sectionTitles[currentSection]}
            </span>
          </div>
        </Card>
      </div>

      {/* Keyboard Hints - Desktop */}
      <div className="hidden md:block fixed bottom-4 right-4 z-40">
        <Card className="bg-slate-800/90 backdrop-blur-sm border-slate-700 px-3 py-2">
          <div className="flex items-center gap-3 text-xs text-slate-400">
            <div className="flex items-center gap-1">
              <ArrowUp className="w-3 h-3" />
              <span>↓</span>
              <span>Navegar</span>
            </div>
            <div className="flex items-center gap-1">
              <Home className="w-3 h-3" />
              <span>Início</span>
            </div>
          </div>
        </Card>
      </div>

      {/* Mobile Swipe Hint */}
      <div className="md:hidden fixed bottom-16 right-4 z-40">
        <Card className="bg-slate-800/90 backdrop-blur-sm border-slate-700 px-3 py-2">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <div className="flex flex-col items-center">
              <ArrowUp className="w-3 h-3" />
              <ArrowDown className="w-3 h-3 -mt-1" />
            </div>
            <span>Deslize</span>
          </div>
        </Card>
      </div>
    </>
  );
};

export default NavigationIndicator;
