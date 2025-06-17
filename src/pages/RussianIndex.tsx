
import HeroRu from "@/components/ru/HeroRu";
import ProblemSolutionRu from "@/components/ru/ProblemSolutionRu";
import ServicesRu from "@/components/ru/ServicesRu";
import TribesRu from "@/components/ru/TribesRu";
import WaitlistRu from "@/components/ru/WaitlistRu";
import FooterRu from "@/components/ru/FooterRu";
import LanguageToggle from "@/components/LanguageToggle";
import { Separator } from "@/components/ui/separator";

const RussianIndex = () => {
  return <div className="min-h-screen">
      <LanguageToggle />
      <HeroRu />
      <Separator className="h-[2px] opacity-100 bg-transparent" />
      <ProblemSolutionRu />
      <Separator className="h-[2px] opacity-100 bg-zinc-100" />
      <ServicesRu />
      <Separator className="h-[2px] opacity-100 bg-zinc-100" />
      <TribesRu />
      <Separator className="h-[2px] opacity-100 bg-zinc-100" />
      <WaitlistRu />
      <Separator className="h-[2px] opacity-100 bg-transparent" />
      <FooterRu />
    </div>;
};

export default RussianIndex;
