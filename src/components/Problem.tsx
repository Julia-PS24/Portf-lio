import { Card, CardContent } from "@/components/ui/card";
const Problem = () => {
  return <section id="problem" className="section-padding">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto bg-[clareia-deep-purple] bg-transparent">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Problemas</span> que buscamos <span className="gradient-text">resolver</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-clareia-violet to-clareia-cyan mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-clareia-violet/20 to-clareia-light-violet/20 border-clareia-violet/30 card-hover animate-slide-in-right">
              <CardContent className="p-8 bg-[clareia-dark-blue] bg-violet-950">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-clareia-violet to-clareia-light-violet rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">😞</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">Baixa motivação</h3>
                </div>
                <p className="text-slate-300 leading-relaxed text-center">
                  Muitos estudantes enfrentam dificuldades em manter o foco e a motivação 
                  para os estudos, especialmente durante a preparação para o ENEM.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-clareia-cyan/20 to-clareia-violet/20 border-clareia-cyan/30 card-hover animate-slide-in-right" style={{
            animationDelay: '0.3s'
          }}>
              <CardContent className="p-8 bg-violet-950">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-clareia-cyan to-clareia-violet rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">⚠️</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">Métodos inadequados</h3>
                </div>
                <p className="text-slate-300 leading-relaxed text-center">
                  Falta de métodos de aprendizagem ativos e personalizados que se adaptem 
                  ao ritmo individual de cada estudante.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center animate-fade-in" style={{
          animationDelay: '0.6s'
        }}>
            <Card className="bg-gradient-to-r from-clareia-light-violet/20 to-clareia-cyan/20 border-clareia-light-violet/30">
              <CardContent className="p-8 bg-indigo-950">
                <h3 className="text-2xl font-bold mb-4 gradient-text">O impacto real</h3>
                <p className="text-lg text-slate-300 leading-relaxed">
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
    </section>;
};
export default Problem;