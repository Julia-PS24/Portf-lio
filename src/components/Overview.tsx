
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
    <section id="overview" className="section-padding bg-gradient-to-br from-slate-800/50 to-slate-900/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Como o <span className="text-clareia-cyan">Clareia</span> ajuda você? 💡
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 border-slate-700/50 card-hover animate-fade-in" 
              style={{
                animationDelay: `${index * 0.2}s`
              }}
            >
              <CardContent className="p-8 text-center">
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">{feature.title}</h3>
                <p className="text-slate-300 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Overview;
