import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, MessageSquare, FileText } from "lucide-react";

const Overview = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Quizzes e flashcards",
      description: "Estude com quizzes adaptativos e flashcards personalizados gerados com IA.",
      gradient: "from-clareia-violet to-clareia-light-violet"
    },
    {
      icon: MessageSquare,
      title: "Chatbot inteligente",
      description: "Tire dúvidas a qualquer momento com um chatbot treinado no conteúdo específico do ENEM.",
      gradient: "from-clareia-cyan to-clareia-violet"
    },
    {
      icon: FileText,
      title: "Gamificação",
      description: "Ganhe pontos e conquistas enquanto estuda, tornando o aprendizado mais divertido e motivador.",
      gradient: "from-clareia-light-violet to-clareia-cyan"
    }
  ];

  return (
    <section id="overview" className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 bg-slate-900">
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Como o <span className="gradient-text">Clareia</span> ajuda você? 💡
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-clareia-violet to-clareia-cyan mx-auto mb-6 sm:mb-8"></div>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed px-2">
            Uma plataforma completa que combina inteligência artificial e gamificação para transformar sua experiência de estudo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-slate-800 border-slate-700 card-hover animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-6 sm:p-8 text-center">
                <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${feature.gradient} rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6`}>
                  <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white leading-tight">
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
    </section>
  );
};

export default Overview;
