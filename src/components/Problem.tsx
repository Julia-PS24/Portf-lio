import { Card, CardContent } from "@/components/ui/card";

const Problem = () => {
  return (
    <section id="problem" className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 bg-slate-800">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              <span className="gradient-text">Problemas</span> que buscamos <span className="gradient-text">resolver</span>
            </h2>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-clareia-violet to-clareia-cyan mx-auto mb-6 sm:mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <Card className="bg-slate-900 border-clareia-cyan/40 card-hover animate-slide-in-right">
              <CardContent className="p-6 sm:p-8">
                <div className="text-center mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-clareia-violet to-clareia-light-violet rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <span className="text-xl sm:text-2xl">😞</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">Baixa motivação</h3>
                </div>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed text-center">
                  Muitos estudantes enfrentam dificuldades em manter o foco e a motivação
                  para os estudos, especialmente durante a preparação para o ENEM.
                </p>
              </CardContent>
            </Card>

            <Card
              className="bg-slate-900 border-clareia-cyan/40 card-hover animate-slide-in-right"
              style={{ animationDelay: '0.3s' }}
            >
              <CardContent className="p-6 sm:p-8">
                <div className="text-center mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-clareia-cyan to-clareia-violet rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <span className="text-xl sm:text-2xl">⚠️</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">Métodos inadequados</h3>
                </div>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed text-center">
                  Falta de métodos de aprendizagem ativos e personalizados que se adaptem
                  ao ritmo individual de cada estudante.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <img
                src="/problema.png"
                alt="Estudante desmotivado"
                className="rounded-2xl shadow-2xl w-full h-60 sm:h-80 object-cover"
              />
            </div>

            <div className="animate-slide-in-right" style={{ animationDelay: '0.9s' }}>
              <Card className="bg-slate-900 border-clareia-cyan/40">
                <CardContent className="p-6 sm:p-8">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 gradient-text">O impacto real</h3>
                  <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed">
                    Esses desafios impactam diretamente o desempenho escolar dos alunos,
                    criando uma lacuna entre o potencial individual e os resultados obtidos.
                    É aqui que o <span className="text-clareia-cyan font-semibold">Clareia</span> entra
                    como uma solução inovadora e transformadora.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
