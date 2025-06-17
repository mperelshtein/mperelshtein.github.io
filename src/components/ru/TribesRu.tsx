import { TrendingUp, Zap, Heart } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
const TribesRu = () => {
  const tribes = [{
    name: "tribe.growth",
    description: "Не останавливайте свой рост из-за переезда в новую страну",
    icon: TrendingUp,
    color: "bg-emerald-100 border-emerald-200",
    iconColor: "text-emerald-600",
    testimonial: "Я присоединился к growth tribe и получил теплое знакомство в Supercell!"
  }, {
    name: "tribe.energy",
    description: "Найдите новые виды спорта и продолжите старые хобби",
    icon: Zap,
    color: "bg-orange-100 border-orange-200",
    iconColor: "text-orange-600",
    testimonial: "Я присоединился к energy tribe и наконец записался на уроки тенниса!"
  }, {
    name: "tribe.support",
    description: "Получите поддержку сообщества как семьи или отдельные люди",
    icon: Heart,
    color: "bg-rose-100 border-rose-200",
    iconColor: "text-rose-600",
    testimonial: "Я присоединился к support tribe и нашел идеальный детский сад!"
  }];
  return <section className="bg-white py-[40px]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
            Найдите свое{" "}
            <span className="bg-clip-text gradient-warmth text-transparent">племя</span>
          </h2>
          <p className="text-lg text-foreground">
            Связывайтесь с единомышленниками, которые разделяют ваши цели и интересы
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {tribes.map((tribe, index) => <div key={index} className="group bg-card rounded-2xl border p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in" style={{
          animationDelay: `${index * 0.2}s`
        }}>
              <div className={`w-12 h-12 ${tribe.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <tribe.icon className={`w-6 h-6 ${tribe.iconColor}`} />
              </div>
              
              <h3 className="text-lg font-semibold mb-2 text-foreground">{tribe.name}</h3>
              <p className="text-foreground mb-4 text-sm">{tribe.description}</p>
              
              {/* Testimonial integrated into the card */}
              <div className="bg-muted/30 rounded-lg p-3 border-l-2 border-coral-accent">
                <p className="text-foreground italic text-left text-xs font-light">
                  "{tribe.testimonial}"
                </p>
              </div>
            </div>)}
        </div>

        {/* Mobile Slider */}
        <div className="md:hidden max-w-sm mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {tribes.map((tribe, index) => <CarouselItem key={index}>
                  <div className="group bg-card rounded-2xl border p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in" style={{
                animationDelay: `${index * 0.2}s`
              }}>
                    <div className={`w-12 h-12 ${tribe.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <tribe.icon className={`w-6 h-6 ${tribe.iconColor}`} />
                    </div>
                    
                    <h3 className="text-lg font-semibold mb-2 text-foreground">{tribe.name}</h3>
                    <p className="text-foreground mb-4 text-sm">{tribe.description}</p>
                    
                    {/* Testimonial integrated into the card */}
                    <div className="bg-muted/30 rounded-lg p-3 border-l-2 border-coral-accent">
                      <p className="text-foreground italic text-left text-xs font-light">
                        "{tribe.testimonial}"
                      </p>
                    </div>
                  </div>
                </CarouselItem>)}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>;
};
export default TribesRu;