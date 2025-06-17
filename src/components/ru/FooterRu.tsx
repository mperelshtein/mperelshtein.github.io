
import { Heart } from "lucide-react";
import { Send } from "lucide-react";

const FooterRu = () => {
  const handleTelegramClick = () => {
    window.open('https://t.me/unlonely_club', '_blank');
  };

  return (
    <footer className="text-white bg-[#f6f3ef] py-[30px]">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="text-xl font-bold mb-3 flex items-center justify-center gap-2 text-white">unlonely.</h3>
          <p className="text-white/70 mb-4 max-w-md mx-auto text-sm">Строим эмоциональную безопасность, значимые связи и практическую поддержку для всех, кто начинает новую жизнь в Финляндии</p>
          <div className="flex justify-center">
            <button onClick={handleTelegramClick} className="flex items-center gap-2 text-sm text-white hover:text-white/80 transition-colors">
              <Send className="w-4 h-4" />
              <span>@unlonely_club</span>
            </button>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-6 pt-4 text-center">
          <p className="text-white/70 text-sm">
            © 2025 unlonely.club. Сделано с <Heart className="w-4 h-4 inline text-white" /> для финского экспатского сообщества.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterRu;
