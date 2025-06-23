
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, MessageSquare, FileText } from "lucide-react";

const Overview = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Quizzes e Flashcards",
      description: "Estude com quizzes adaptativos e flashcards personalizados gerados com IA."
    },
    {
      icon: MessageSquare,
      title: "Chatbot Inteligente",
      description: "Tire dúvidas a qualquer momento com um chatbot treinado no conteúdo específico do ENEM."
    },
    {
      icon: FileText,
      title: "Gamificação",
      description: "Ganhe pontos e conquistas enquanto estuda, tornando o aprendizado mais divertido e motivador."
    }
  ];

  return (
    <section id="overview" className="section-padding bg-slate-800/50">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Como o <span className="text-clareia-cyan">Clareia</span> ajuda você? 💡
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Uma plataforma digital inovadora voltada para o apoio ao aprendizado de estudantes do Ensino Médio. 
            Por meio da combinação de inteligência artificial, gamificação e recursos interativos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-card-gradient border-slate-700 card-hover animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-clareia-violet to-clareia-cyan rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">{feature.title}</h3>
                <p className="text-slate-300 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-clareia-violet/20 to-clareia-cyan/20 rounded-2xl p-8 md:p-12 animate-fade-in">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            Plataforma Educacional Gamificada com IA
          </h3>
          <p className="text-lg text-slate-300 text-center leading-relaxed">
            O projeto oferece uma experiência educacional personalizada, dinâmica e motivadora, 
            transformando a forma como os estudantes se preparam para o ENEM e outros desafios acadêmicos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Overview;
