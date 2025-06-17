import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Users, MapPin, Home } from "lucide-react";
const HeroRu = () => {
  const scrollToWaitlist = () => {
    const waitlistSection = document.getElementById('waitlist');
    waitlistSection?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section className="relative overflow-hidden gradient-hero bg-[#f6f3ef]">
      <div className="container mx-auto px-4 lg:py-16 py-[60px] bg-transparent">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          <div className="flex justify-center items-center gap-2 mb-4">
            <MapPin className="w-5 h-5 text-black" />
            <span className="text-sm font-medium text-black tracking-wide uppercase">
              Строим вашу новую жизнь в Финляндии
            </span>
          </div>
          
          <div className="flex justify-center items-center gap-4 mb-4">
            <img src="/lovable-uploads/b2e5218d-c6b9-4001-a854-11b708779dd5.png" alt="unlonely.club логотип" className="h-12 w-auto" />
            <h2 className="text-4xl lg:text-6xl font-bold leading-tight text-black">От Чужого к Родному</h2>
          </div>
          
          <p className="text-xl lg:text-2xl text-black mb-6 leading-relaxed">
            Мы справляемся с социальным, практическим и эмоциональным хаосом начала жизни в Финляндии — чтобы вам не пришлось
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
              <Home className="w-4 h-4 text-black" />
              <span className="text-sm font-medium text-black">Чувствуйте себя как дома</span>
            </div>
            <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
              <Users className="w-4 h-4 text-black" />
              <span className="text-sm font-medium text-black">Заводите дружбу</span>
            </div>
            <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
              <Heart className="w-4 h-4 text-black" />
              <span className="text-sm font-medium text-black">Обретайте уверенность</span>
            </div>
          </div>
          
          <Button onClick={scrollToWaitlist} size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl">
            Начните свое путешествие интеграции
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          
          <p className="text-sm text-black mt-4">Присоединяйтесь к тысячам иммигрантов, строящих новую жизнь в Финляндии</p>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-50 pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-coral-accent/20 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-coral-accent/20 rounded-full blur-xl"></div>
      </div>
    </section>;
};
export default HeroRu;