import { Card, CardContent } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: "📈",
      title: "Melhoria na performance",
      description: "Aumento comprovado nas notas através de uma metodologia personalizada que se adapta ao seu ritmo de aprendizagem.",
      gradient: "from-clareia-violet to-clareia-light-violet"
    },
    {
      icon: "⚡",
      title: "Estudo mais eficiente",
      description: "Economize tempo com conteúdo direcionado e ferramentas que identificam exatamente onde você precisa focar.",
      gradient: "from-clareia-cyan to-clareia-violet"
    },
    {
      icon: "🎯",
      title: "Foco estratégico",
      description: "Identifique suas lacunas de conhecimento e concentre-se nos tópicos que mais impactam sua nota final.",
      gradient: "from-clareia-light-violet to-clareia-cyan"
    },
    {
      icon: "🔥",
      title: "Motivação sustentável",
      description: "Sistema gamificado que mantém você engajado e celebra cada conquista, tornando o estudo prazeroso.",
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
              Os <span className="gradient-text">resultados</span> que você alcança
            </h2>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-clareia-violet to-clareia-cyan mx-auto mb-4 sm:mb-6"></div>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed px-2">
              Benefícios comprovados que fazem a diferença na sua preparação para o ENEM
            </p>
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


      </div>
    </section>
  );
};

export default Features;