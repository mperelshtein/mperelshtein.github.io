
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { useNavigate } from "react-router-dom";

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();
  const navigate = useNavigate();

  const handleLanguageChange = (newLanguage: 'en' | 'ru') => {
    setLanguage(newLanguage);
    
    // Navigate to appropriate page
    if (newLanguage === 'ru') {
      navigate('/ru');
    } else {
      navigate('/');
    }
  };

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-1 bg-white/90 backdrop-blur-sm p-1 rounded-full border shadow-lg">
      <Button
        variant={language === 'en' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => handleLanguageChange('en')}
        className="rounded-full px-3 py-1 text-xs font-medium"
      >
        EN
      </Button>
      <Button
        variant={language === 'ru' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => handleLanguageChange('ru')}
        className="rounded-full px-3 py-1 text-xs font-medium"
      >
        RU
      </Button>
    </div>
  );
};

export default LanguageToggle;
