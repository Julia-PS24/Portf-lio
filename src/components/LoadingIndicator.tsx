import { Loader2 } from 'lucide-react';

interface LoadingIndicatorProps {
  isVisible: boolean;
  message?: string;
}

const LoadingIndicator = ({ isVisible, message = "Navegando..." }: LoadingIndicatorProps) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 flex items-center justify-center">
      <div className="bg-slate-800/90 backdrop-blur-sm border border-clareia-violet/40 rounded-lg px-6 py-4 flex items-center gap-3">
        <Loader2 className="w-5 h-5 text-clareia-cyan animate-spin" />
        <span className="text-white font-medium">{message}</span>
      </div>
    </div>
  );
};

export default LoadingIndicator;
