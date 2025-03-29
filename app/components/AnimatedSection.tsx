"use client";

import { useState, useEffect, ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  withTranslate?: boolean;
}

export function AnimatedSection({
  children,
  className = "",
  delay = 0,
  withTranslate = false
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 10); // Pequeno atraso para garantir que a animação ocorra após a montagem

    return () => clearTimeout(timer);
  }, []);

  const baseClasses = "transition-all duration-700 ease-in-out";
  const delayClass = delay ? `delay-${delay}` : "";
  const visibilityClasses = isVisible ? "opacity-100" : "opacity-0";
  const translateClasses =
    withTranslate && isVisible
      ? "translate-y-0"
      : withTranslate
      ? "translate-y-4"
      : "";

  return (
    <div
      className={`${baseClasses} ${delayClass} ${visibilityClasses} ${translateClasses} ${className}`}
    >
      {children}
    </div>
  );
}
