import { AlertCircle, CheckCircle } from "lucide-react";
const ProblemSolution = () => {
  const problems = [{
    icon: AlertCircle,
    title: "Feeling Lost & Isolated",
    description: "You're educated and ambitious, but feel stuck in Finland - underemployed, friendless, and homesick"
  }, {
    icon: AlertCircle,
    title: "Struggling to Integrate",
    description: "Despite speaking English well, you can't crack the Finnish social circle or find your professional footing"
  }, {
    icon: AlertCircle,
    title: "Missing Social Support",
    description: "You left your support network behind and haven't built a new one - facing life's challenges alone"
  }];
  const solutions = [{
    icon: CheckCircle,
    title: "Build Real Friendships",
    description: "Connect with fellow immigrants who truly understand your journey and become lifelong friends"
  }, {
    icon: CheckCircle,
    title: "Gain Integration Confidence",
    description: "Navigate Finnish culture and systems with guidance from those who've successfully made the transition"
  }, {
    icon: CheckCircle,
    title: "Create Your Support Network",
    description: "Build a chosen family in Finland - people who celebrate your wins and support you through challenges"
  }];
  return <section className="bg-muted/30 py-[30px]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
            From Isolation to Integration
          </h2>
          <p className="text-lg text-foreground">
            You're not alone in this journey. Here's how we transform your immigrant experience.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Problems */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-center mb-6 text-foreground">
              The Immigrant Struggle
            </h3>
            {problems.map((problem, index) => <div key={index} className="flex gap-4 p-6 bg-card rounded-xl border animate-fade-in" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <div className="flex-shrink-0">
                  <problem.icon className="w-6 h-6 text-foreground mt-1" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-foreground">{problem.title}</h4>
                  <p className="text-foreground">{problem.description}</p>
                </div>
              </div>)}
          </div>

          {/* Solutions */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-center mb-6 text-foreground">
              Your Path to Belonging
            </h3>
            {solutions.map((solution, index) => <div key={index} className="flex gap-4 p-6 bg-card rounded-xl border animate-fade-in" style={{
            animationDelay: `${(index + 3) * 0.1}s`
          }}>
                <div className="flex-shrink-0">
                  <solution.icon className="w-6 h-6 text-foreground mt-1" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-foreground">{solution.title}</h4>
                  <p className="text-foreground">{solution.description}</p>
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default ProblemSolution;