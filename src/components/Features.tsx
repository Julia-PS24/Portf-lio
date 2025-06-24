import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Features = () => {
  const features = [
    {
      icon: "🚀",
      title: "Resultados comprovados",
      description: "Melhore sua performance no ENEM com uma metodologia que se adapta ao seu ritmo de aprendizagem.",
      gradient: "from-clareia-violet to-clareia-light-violet"
    },
    {
      icon: "⏰",
      title: "Economia de tempo",
      description: "Estude de forma mais eficiente com conteúdo direcionado às suas necessidades específicas.",
      gradient: "from-clareia-cyan to-clareia-violet"
    },
    {
      icon: "🎯",
      title: "Foco no que importa",
      description: "Identifique suas lacunas de conhecimento e concentre-se nos tópicos que mais impactam sua nota.",
      gradient: "from-clareia-light-violet to-clareia-cyan"
    },
    {
      icon: "💪",
      title: "Motivação constante",
      description: "Mantenha-se engajado com um sistema que celebra seu progresso e torna o estudo prazeroso.",
      gradient: "from-clareia-violet to-clareia-cyan"
    }
  ];

  return (
    <section id="features" className="pt-8 pb-6 sm:pt-10 sm:pb-6 md:pt-16 md:pb-8">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Features Cards Grid */}
        <div className="mb-12 sm:mb-16">
          <div className="text-center mb-8 sm:mb-12 animate-fade-in">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-white">
              Por que escolher o <span className="gradient-text">Clareia</span>?
            </h2>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-clareia-violet to-clareia-cyan mx-auto mb-4 sm:mb-6"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-slate-800/80 border-slate-700 card-hover animate-fade-in backdrop-blur-sm"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${feature.gradient} rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6`}>
                    <span className="text-xl sm:text-2xl">{feature.icon}</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-white leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 text-center animate-fade-in bg-slate-800/30 backdrop-blur-sm">
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-white">
            Pronto para revolucionar seus estudos?
          </h3>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white mb-6 sm:mb-8 max-w-xs sm:max-w-lg md:max-w-2xl mx-auto leading-relaxed">
            Junte-se ao Clareia para alcançar seus objetivos acadêmicos e entenda como ele pode redefinir sua experiência de aprendizagem.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-clareia-violet to-clareia-cyan hover:from-clareia-light-violet hover:to-clareia-violet text-sm sm:text-base md:text-lg px-6 sm:px-8 py-3 sm:py-4 card-hover text-slate-50 font-medium"
            >
              <a href="https://clareia.xyz" target="_blank" rel="noopener noreferrer">
                Começar agora!
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;