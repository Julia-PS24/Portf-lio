import { Card, CardContent } from "@/components/ui/card";
import { Users, Heart, BookOpen, Target } from "lucide-react";

const Team = () => {
  const experiences = [
    {
      icon: BookOpen,
      title: "Respostas rápidas e acessíveis",
      description: "Para dúvidas escolares que surgem na última hora",
      gradient: "from-clareia-violet to-clareia-light-violet"
    },
    {
      icon: Heart,
      title: "Ambiente não cansativo",
      description: "Um espaço de estudo que motiva ao invés de desestimular",
      gradient: "from-clareia-cyan to-clareia-violet"
    },
    {
      icon: Target,
      title: "Aprendizado interativo",
      description: "De maneira leve e que faça sentido para nossa rotina",
      gradient: "from-clareia-light-violet to-clareia-cyan"
    }
  ];

  return (
    <section id="team" className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-slate-800/30 to-slate-900/50">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Uma plataforma feita por quem vive os <span className="gradient-text">mesmos desafios</span>
            </h2>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-clareia-violet to-clareia-cyan mx-auto mb-6 sm:mb-8"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16">
            <div className="animate-fade-in">
              <img
                src="/grupo.webp"
                alt="Estudantes colaborando"
                className="rounded-2xl shadow-2xl w-full h-60 sm:h-64 md:h-80 object-cover"
              />
            </div>

            <div className="animate-slide-in-right">
              <Card className="bg-slate-800 border-slate-700 card-hover">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-center mb-4 sm:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-clareia-violet to-clareia-cyan rounded-lg flex items-center justify-center mr-3 sm:mr-4">
                      <Users className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">Nossa história</h3>
                  </div>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-3 sm:mb-4">
                    O <span className="text-clareia-cyan font-semibold">Clareia</span> não é apenas uma plataforma educacional com inteligência artificial – é o resultado de uma iniciativa desenvolvida por estudantes que conhecem de perto os desafios do Ensino Médio.
                  </p>
                  <p className="text-slate-400 leading-relaxed">
                    Sabemos o que é sentir-se desmotivado antes de uma prova, ter dúvidas de última hora e não encontrar um conteúdo que realmente fale a nossa linguagem.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mb-16">
            <div className="text-center mb-12 animate-fade-in">
              <h3 className="text-3xl font-bold mb-4 gradient-text">
                Cada funcionalidade pensada em experiências reais
              </h3>
              <p className="text-xl text-slate-300">
                Por já termos passado por esse processo, construímos uma solução empática
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              {experiences.map((experience, index) => (
                <Card
                  key={index}
                  className="bg-slate-800 border-slate-700 card-hover animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardContent className="p-4 sm:p-6 text-center h-full flex flex-col">
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${experience.gradient} rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4`}>
                      <experience.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <h4 className="text-base sm:text-lg font-bold mb-2 sm:mb-3 text-white leading-tight">{experience.title}</h4>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed flex-grow">{experience.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center animate-fade-in">
            <Card className="bg-slate-800 border-slate-700 card-hover">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 gradient-text">
                  Uma ponte entre tecnologia e vivência estudantil
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto">
                  O <span className="text-clareia-cyan font-semibold">Clareia</span> é a prova de que
                  quem vive o problema é também quem pode criar a solução.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
