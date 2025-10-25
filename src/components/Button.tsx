interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Button = ({ children, className = "", onClick }: ButtonProps) => {
  return (
    <button 
      className={`relative py-2.5 px-6 rounded-lg font-medium text-sm bg-gradient-to-b from-[#190d2e] to-[#4a208a] hover:from-[#2a1a4a] hover:to-[#5a2f9a] transition-all duration-200 shadow-[0_0_20px_rgba(140,69,255,0.3)] hover:shadow-[0_0_25px_rgba(140,69,255,0.5)] border border-purple-400/30 ${className}`}
      onClick={onClick}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default Button;