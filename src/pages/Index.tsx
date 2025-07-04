import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Overview from "@/components/Overview";
import Solution from "@/components/Solution";
import Team from "@/components/Team";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import NavigationInstructions from "@/components/NavigationInstructions";
import CompletionMessage from "@/components/CompletionMessage";
import { useNavigation, Section } from "@/hooks/use-navigation";

const Index = () => {
  // Definindo as seções seguindo o fluxo do pitch sem Problem
  const sections: Section[] = [
    { id: "hero", title: "Apresentação", component: Hero },
    { id: "team", title: "Solução Empática", component: Team },
    { id: "solution", title: "Como Funciona?", component: Solution },
    { id: "features", title: "Tecnologias", component: Features },
    { id: "overview", title: "Por que escolhê-lo?", component: Overview },
    { id: "footer", title: "Contato", component: Footer }
  ];

  const {
    showCompletion,
    restartNavigation,
    closeCompletion
  } = useNavigation(sections);

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />

      {/* Navigation Instructions */}
      <NavigationInstructions />

      {/* Completion Message */}
      <CompletionMessage
        isVisible={showCompletion}
        onRestart={restartNavigation}
        onClose={closeCompletion}
      />

      {/* Sections - Nova sequência sem Problem */}
      <section id="hero">
        <Hero />
      </section>

      <section id="team">
        <Team />
      </section>

      <section id="solution">
        <Solution />
      </section>

      <section id="features">
        <Features />
      </section>

      <section id="overview">
        <Overview />
      </section>

      <div className="bg-hero-gradient">
        <section id="footer">
          <Footer />
        </section>
      </div>
    </div>
  );
};

export default Index;
