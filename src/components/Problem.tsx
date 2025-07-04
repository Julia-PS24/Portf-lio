import { Card, CardContent } from "@/components/ui/card";

const Problem = () => {
  return (
    <section id="problem" className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 bg-slate-800">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Os <span className="gradient-text">desafios reais</span> dos estudantes
            </h2>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-clareia-violet to-clareia-cyan mx-auto mb-6 sm:mb-8"></div>
            <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed px-2">
              Identificamos os principais obstáculos que impedem o sucesso no ENEM
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12">
            <Card className="bg-slate-900 border-clareia-cyan/40 card-hover animate-slide-in-right">
              <CardContent className="p-6 sm:p-8">
                <div className="text-center mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-clareia-violet to-clareia-light-violet rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <span className="text-xl sm:text-2xl">😴</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">Desmotivação e cansaço</h3>
                </div>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed text-center">
                  Estudar se torna uma tarefa cansativa e desmotivante, especialmente quando
                  não há feedback imediato ou senso de progresso visível.
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
                    <span className="text-xl sm:text-2xl">❓</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">Dúvidas sem resposta</h3>
                </div>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed text-center">
                  Dúvidas que surgem na última hora, falta de acesso a respostas rápidas
                  e personalizadas para o conteúdo específico do ENEM.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <Card className="bg-slate-900 border-clareia-cyan/40">
                <CardContent className="p-6 sm:p-8 text-center">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6 gradient-text">
                    Por que isso acontece?
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto">
                    Como estudantes que vivenciaram esses mesmos desafios, entendemos que os métodos tradicionais
                    de estudo não conseguem acompanhar as necessidades da geração atual.
                    É por isso que criamos o <span className="text-clareia-cyan font-semibold">Clareia</span> -
                    uma solução que fala a nossa linguagem e resolve problemas reais.
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
