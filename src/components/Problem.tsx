
import { Card, CardContent } from "@/components/ui/card";

const Problem = () => {
  return (
    <section id="problem" className="section-padding">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Problemas</span> que Buscamos <span className="gradient-text">Resolver</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-clareia-violet to-clareia-cyan mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border-red-500/20 card-hover animate-slide-in-right">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">😞</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">Baixa Motivação</h3>
                </div>
                <p className="text-slate-300 leading-relaxed text-center">
                  Muitos estudantes enfrentam dificuldades em manter o foco e a motivação 
                  para os estudos, especialmente durante a preparação para o ENEM.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-yellow-500/10 to-red-500/10 border-yellow-500/20 card-hover animate-slide-in-right" style={{ animationDelay: '0.3s' }}>
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">⚠️</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">Métodos Inadequados</h3>
                </div>
                <p className="text-slate-300 leading-relaxed text-center">
                  Falta de métodos de aprendizagem ativos e personalizados que se adaptem 
                  ao ritmo individual de cada estudante.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Card className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 border-slate-600">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 gradient-text">O Impacto Real</h3>
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
    </section>
  );
};

export default Problem;
