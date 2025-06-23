import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  background?: "default" | "slate-800" | "slate-900" | "gradient";
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  showDivider?: boolean;
}

const Section = ({ id, className, children, background = "default" }: SectionProps) => {
  const backgroundClasses = {
    default: "",
    "slate-800": "bg-slate-800",
    "slate-900": "bg-slate-900",
    gradient: "bg-gradient-to-br from-slate-800/30 to-slate-900/50"
  };

  return (
    <section 
      id={id}
      className={cn(
        "px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24",
        backgroundClasses[background],
        className
      )}
    >
      {children}
    </section>
  );
};

const SectionHeader = ({ title, subtitle, className, showDivider = true }: SectionHeaderProps) => {
  return (
    <div className={cn("text-center mb-12 sm:mb-16 animate-fade-in", className)}>
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
        {title}
      </h2>
      {showDivider && (
        <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-clareia-violet to-clareia-cyan mx-auto mb-6 sm:mb-8"></div>
      )}
      {subtitle && (
        <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed px-2">
          {subtitle}
        </p>
      )}
    </div>
  );
};

const SectionContainer = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <div className={cn("container mx-auto", className)}>
      {children}
    </div>
  );
};

export { Section, SectionHeader, SectionContainer };
