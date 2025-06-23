
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
    <section id="team" className="section-padding bg-gradient-to-br from-slate-800/30 to-slate-900/50">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Uma plataforma feita por quem vive os <span className="gradient-text">mesmos desafios</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-clareia-violet to-clareia-cyan mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-fade-in">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop" 
                alt="Estudantes colaborando" 
                className="rounded-2xl shadow-2xl w-full h-80 object-cover"
              />
            </div>

            <div className="animate-slide-in-right">
              <Card className="bg-gradient-to-br from-clareia-violet/10 to-clareia-cyan/10 border-clareia-violet/20 card-hover">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-clareia-violet to-clareia-cyan rounded-lg flex items-center justify-center mr-4">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Nossa história</h3>
                  </div>
                  <p className="text-slate-300 leading-relaxed mb-4">
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

            <div className="grid md:grid-cols-3 gap-8">
              {experiences.map((experience, index) => (
                <Card 
                  key={index} 
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/50 card-hover animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardContent className="p-6 text-center h-full flex flex-col">
                    <div className={`w-16 h-16 bg-gradient-to-br ${experience.gradient} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <experience.icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-bold mb-3 text-white">{experience.title}</h4>
                    <p className="text-slate-300 text-sm leading-relaxed flex-grow">{experience.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center animate-fade-in">
            <Card className="bg-gradient-to-r from-clareia-deep-purple/30 to-clareia-dark-blue/30 border-clareia-violet/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 gradient-text">
                  Uma ponte entre tecnologia e vivência estudantil
                </h3>
                <p className="text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto">
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
