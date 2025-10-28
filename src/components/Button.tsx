// Button.tsx

import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Button = ({ children, className = "", onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`
        relative 
        py-2 px-3 
        rounded-lg 
        font-medium text-sm 
        text-white
        bg-gradient-to-b from-[#190d2e] to-[#4a208a]
        hover:from-[#2a1a4a] hover:to-[#5a2f9a]
        border border-purple-400/30
        shadow-[0_0_20px_rgba(140,69,255,0.3)]
        hover:shadow-[0_0_25px_rgba(140,69,255,0.5)]
        transition-all duration-200
        overflow-hidden
        ${className}
      `}
    >
      {/* Soft pulsing glow layer */}
      <span
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(140,69,255,0.25)_0%,transparent_70%)] 
                   animate-pulse-slow blur-md"
      ></span>

      {/* Button text (kept above glow) */}
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default Button;
