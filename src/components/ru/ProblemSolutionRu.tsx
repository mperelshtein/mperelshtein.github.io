import { AlertCircle, CheckCircle } from "lucide-react";

const ProblemSolutionRu = () => {
  const problems = [
    {
      icon: AlertCircle,
      title: "Чувство потерянности и изоляции",
      description: "Вы образованы и амбициозны, но чувствуете себя застрявшими в Финляндии — без хорошей работы, без друзей и тоскующими по дому"
    },
    {
      icon: AlertCircle,
      title: "Сложности с интеграцией",
      description: "Несмотря на хорошее знание английского, вы не можете проникнуть в финский социальный круг или найти профессиональную опору"
    },
    {
      icon: AlertCircle,
      title: "Отсутствие социальной поддержки",
      description: "Вы оставили свою сеть поддержки позади и не построили новую — сталкиваетесь с жизненными вызовами в одиночку"
    }
  ];

  const solutions = [
    {
      icon: CheckCircle,
      title: "Построение близких отношений",
      description: "Связывайтесь с другими иммигрантами, которые действительно понимают ваш путь"
    },
    {
      icon: CheckCircle,
      title: "Обретение уверенности в интеграции",
      description: "Ориентируйтесь в финской культуре и системах с поддержкой тех, кто успешно совершил переход"
    },
    {
      icon: CheckCircle,
      title: "Создание сети поддержки",
      description: "Постройте близкий круг общения в Финляндии — людей, которые отмечают ваши победы и поддерживают в трудностях"
    }
  ];

  return (
    <section className="bg-muted/30 py-[30px]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
            От изоляции к интеграции
          </h2>
          <p className="text-lg text-foreground">
            Вы не одни в этом путешествии. Вот как мы трансформируем ваш иммигрантский опыт.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Problems */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-center mb-6 text-foreground">
              Борьба иммигранта
            </h3>
            {problems.map((problem, index) => (
              <div key={index} className="flex gap-4 p-6 bg-card rounded-xl border animate-fade-in" style={{
                animationDelay: `${index * 0.1}s`
              }}>
                <div className="flex-shrink-0">
                  <problem.icon className="w-6 h-6 text-foreground mt-1" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-foreground">{problem.title}</h4>
                  <p className="text-foreground">{problem.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Solutions */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-center mb-6 text-foreground">
              Ваш путь к принадлежности
            </h3>
            {solutions.map((solution, index) => (
              <div key={index} className="flex gap-4 p-6 bg-card rounded-xl border animate-fade-in" style={{
                animationDelay: `${(index + 3) * 0.1}s`
              }}>
                <div className="flex-shrink-0">
                  <solution.icon className="w-6 h-6 text-foreground mt-1" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-foreground">{solution.title}</h4>
                  <p className="text-foreground">{solution.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionRu;
