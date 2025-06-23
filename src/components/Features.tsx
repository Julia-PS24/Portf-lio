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
      <section id="features" className="pt-16 pb-8">
        <div className="container mx-auto">
          <div className="rounded-3xl p-8 md:p-12 text-center animate-fade-in">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Pronto para revolucionar seus estudos?
            </h3>
            <p className="text-xl text-white mb-8 max-w-2xl mx-auto">Junte-se ao Clareia para alcançar seus objetivos acadêmicos e entenda como a IA e a gamificação podem redefinir sua experiência de aprendizagem.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-gradient-to-r from-clareia-violet to-clareia-cyan hover:from-clareia-light-violet hover:to-clareia-violet text-lg px-8 py-4 card-hover text-slate-50">Começar agora!</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Features;