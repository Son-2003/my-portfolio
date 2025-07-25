import { ArrowDown } from "lucide-react";
import Button from "./Button";

type HeroSectionProps = {
  isDarkMode: boolean;
};

export const HeroSection = ( { isDarkMode } : HeroSectionProps) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className={`animate-fade-in ${isDarkMode ? "text-white":"text-black"}`}> Hi, I'm</span>
            <span className="text-orange-500 animate-fade-in-delay-1">
              {" "}
              Đức Sơn
            </span>
          </h1>

          <p className={`${isDarkMode ? "text-white":"text-black"} text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3`}>
            I develop fullstack web applications with strong backends, modern
            frontends, and automated deployment pipelines.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4 hover:scale-105 transition-all">
            <Button href="#projects" content="View My Project" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className={`text-sm mb-2 ${isDarkMode ? "text-white":"text-black"}`}> Scroll </span>
        <ArrowDown className="h-5 w-5 text-orange-500" />
      </div>
    </section>
  );
};
