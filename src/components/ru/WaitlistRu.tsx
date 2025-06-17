import { Button } from "@/components/ui/button";
import { Users, Home } from "lucide-react";
const WaitlistRu = () => {
  const handleJoinWaitlist = () => {
    window.open('https://t.me/unlonely_waitlist_bot', '_blank');
  };
  const handleFeedback = () => {
    window.open('https://tally.so/r/woaYEN', '_blank');
  };
  return <section id="waitlist" className="gradient-hero py-[40px]">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-card rounded-3xl p-8 border shadow-xl">
            <div className="flex justify-center items-center gap-2 mb-4">
              <Home className="w-8 h-8 text-foreground" />
              <Users className="w-8 h-8 text-foreground" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-foreground">
              Готовы построить свой новый дом в Финляндии?
            </h3>
            <p className="text-base text-foreground mb-6">Присоединяйтесь к тысячам иммигрантов, которые трансформируют свой опыт в Финляндии от изоляции к интеграции</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={handleJoinWaitlist} className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 h-12 rounded-xl">Подписаться (Telegram)</Button>
              
              <Button onClick={handleFeedback} variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 h-12 rounded-xl">Форма обратной связи</Button>
            </div>

            <p className="text-xs text-foreground mt-4">Ваша конфиденциальность важна для нас. Никакого спама, только строительство сообщества.</p>
          </div>
        </div>
      </div>
    </section>;
};
export default WaitlistRu;