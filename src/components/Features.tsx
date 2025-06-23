import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
const Features = () => {
  const features = [{
    icon: "🎯",
    title: "Personalização com IA",
    description: "Respostas customizadas, baseadas no desempenho e nas dúvidas individuais de cada aluno.",
    gradient: "from-clareia-violet to-clareia-light-violet"
  }, {
    icon: "🏆",
    title: "Gamificação estratégica",
    description: "Estímulo contínuo à participação, com design de recompensas e desafios progressivos.",
    gradient: "from-clareia-cyan to-clareia-violet"
  }, {
    icon: "📚",
    title: "Metodologias ativas",
    description: "Incentivo à aprendizagem por meio de quizzes, flashcards e simulações interativas.",
    gradient: "from-clareia-light-violet to-clareia-cyan"
  }, {
    icon: "💎",
    title: "Interface amigável",
    description: "Design pensado para a usabilidade de adolescentes, com navegação simples e intuitiva.",
    gradient: "from-clareia-violet to-clareia-cyan"
  }];
  return (
    <>
      <section id="features" className="pt-10 pb-6 md:pt-16 md:pb-8">
        <div className="container mx-auto px-2 sm:px-4">
          <div className="rounded-2xl md:rounded-3xl p-4 md:p-12 text-center animate-fade-in">
            <h3 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 text-white">
              Pronto para revolucionar seus estudos?
            </h3>
            <p className="text-base md:text-xl text-white mb-6 md:mb-8 max-w-xs sm:max-w-2xl mx-auto">Junte-se ao Clareia para alcançar seus objetivos acadêmicos e entenda como a IA e a gamificação podem redefinir sua experiência de aprendizagem.</p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
              <Button asChild size="lg" className="w-full sm:w-auto bg-gradient-to-r from-clareia-violet to-clareia-cyan hover:from-clareia-light-violet hover:to-clareia-violet text-base md:text-lg px-6 md:px-8 py-3 md:py-4 card-hover text-slate-50">
                <a href="https://clareia.xyz" target="_blank" rel="noopener noreferrer">Começar agora!</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Features;