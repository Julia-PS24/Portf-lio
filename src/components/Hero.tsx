import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
const Hero = () => {
  return <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-hero-gradient opacity-90"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-clareia-violet/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-clareia-cyan/20 rounded-full blur-3xl animate-float" style={{
        animationDelay: '1s'
      }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-clareia-light-violet/10 rounded-full blur-3xl animate-float" style={{
        animationDelay: '2s'
      }}></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        
      </div>
    </section>;
};
export default Hero;