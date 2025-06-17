import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import Services from "@/components/Services";
import Tribes from "@/components/Tribes";
import Waitlist from "@/components/Waitlist";
import Footer from "@/components/Footer";
import LanguageToggle from "@/components/LanguageToggle";
import { Separator } from "@/components/ui/separator";
const Index = () => {
  return <div className="min-h-screen">
      <LanguageToggle />
      <Hero />
      <Separator className="h-[2px] opacity-100 bg-transparent" />
      <ProblemSolution />
      <Separator className="h-[2px] opacity-100 bg-zinc-100" />
      <Services />
      <Separator className="h-[2px] opacity-100 bg-zinc-100" />
      <Tribes />
      <Separator className="h-[2px] opacity-100 bg-transparent" />
      <Waitlist />
      <Separator className="h-[2px] opacity-100 bg-black" />
      <Footer />
    </div>;
};
export default Index;