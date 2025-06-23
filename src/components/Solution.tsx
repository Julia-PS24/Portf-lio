
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Solution = () => {
  return (
    <section id="solution" className="section-padding bg-gradient-to-br from-slate-800/30 to-slate-900/20">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Nossa <span className="gradient-text">solução</span> inovadora
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-clareia-violet to-clareia-cyan mx-auto mb-8"></div>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Desenvolvemos uma plataforma que atua como um assistente de estudos inteligente
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-fade-in">
              <Card className="bg-gradient-to-br from-clareia-violet/10 to-clareia-cyan/10 border-clareia-violet/20 card-hover">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-clareia-violet to-clareia-cyan rounded-lg flex items-center justify-center mr-4">
                      <span className="text-xl">🤖</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white">Assistente inteligente</h3>
                  </div>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    Capaz de interagir com os alunos, responder dúvidas em tempo real e 
                    sugerir materiais personalizados com base em suas necessidades específicas.
                  </p>
                  <p className="text-slate-400 text-sm">
                    Utilizando modelos de linguagem natural (IA) para fornecer respostas 
                    contextualizadas a partir de uma base de conteúdos educativos.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="animate-slide-in-right">
              <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop" alt="Inteligência Artificial e Educação" className="rounded-2xl shadow-2xl w-full h-80 object-cover" />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 lg:order-1 animate-slide-in-right">
              <img src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=600&fit=crop" alt="Gamificação e Tecnologia" className="rounded-2xl shadow-2xl w-full h-80 object-cover" />
            </div>

            <div className="order-1 lg:order-2 animate-fade-in">
              <Card className="bg-gradient-to-br from-clareia-cyan/10 to-clareia-light-violet/10 border-clareia-cyan/20 card-hover">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-clareia-cyan to-clareia-light-violet rounded-lg flex items-center justify-center mr-4">
                      <span className="text-xl">🎮</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white">Gamificação estratégica</h3>
                  </div>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    Elementos de gamificação para estimular o engajamento dos usuários, 
                    transformando o processo de aprendizagem em uma experiência envolvente.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-clareia-violet/20 text-clareia-violet px-3 py-1 rounded-full text-sm">Conquistas</span>
                    <span className="bg-clareia-cyan/20 text-clareia-cyan px-3 py-1 rounded-full text-sm">Desafios</span>
                    <span className="bg-clareia-light-violet/20 text-clareia-light-violet px-3 py-1 rounded-full text-sm">Rankings</span>
                    <span className="bg-slate-500/20 text-slate-300 px-3 py-1 rounded-full text-sm">Recompensas</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="text-center animate-fade-in">
            <Button size="lg" className="bg-gradient-to-r from-clareia-violet to-clareia-cyan hover:from-clareia-light-violet hover:to-clareia-violet text-lg px-8 py-4 card-hover text-slate-50">
              Experimente nossa solução
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
