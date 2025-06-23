
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Features = () => {
  const features = [
    {
      icon: "🎯",
      title: "Personalização com IA",
      description: "Respostas customizadas, baseadas no desempenho e nas dúvidas individuais de cada aluno.",
      gradient: "from-clareia-violet to-clareia-light-violet"
    },
    {
      icon: "🏆",
      title: "Gamificação estratégica",
      description: "Estímulo contínuo à participação, com design de recompensas e desafios progressivos.",
      gradient: "from-clareia-cyan to-clareia-violet"
    },
    {
      icon: "📚",
      title: "Metodologias ativas",
      description: "Incentivo à aprendizagem por meio de quizzes, flashcards e simulações interativas.",
      gradient: "from-clareia-light-violet to-clareia-cyan"
    },
    {
      icon: "💎",
      title: "Interface amigável",
      description: "Design pensado para a usabilidade de adolescentes, com navegação simples e intuitiva.",
      gradient: "from-clareia-violet to-clareia-cyan"
    }
  ];

  return (
    <section id="features" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Diferenciais <span className="gradient-text">competitivos</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-clareia-violet to-clareia-cyan mx-auto mb-8"></div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            O que torna o Clareia único no mercado de educação digital
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-card-gradient border-slate-700 card-hover animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-6 text-center h-full flex flex-col">
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <h3 className="text-lg font-bold mb-3 text-white">{feature.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed flex-grow">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-clareia-deep-purple/30 to-clareia-dark-blue/30 rounded-3xl p-8 md:p-12 text-center animate-fade-in">
          <h3 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
            Pronto para revolucionar seus estudos?
          </h3>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de estudantes que já estão usando o Clareia para 
            alcançar seus objetivos acadêmicos.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-clareia-violet to-clareia-cyan hover:from-clareia-light-violet hover:to-clareia-violet text-lg px-8 py-4 card-hover"
            >
              Começar gratuitamente
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-clareia-cyan text-clareia-cyan hover:bg-clareia-cyan hover:text-slate-900 text-lg px-8 py-4"
            >
              Saber mais
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
