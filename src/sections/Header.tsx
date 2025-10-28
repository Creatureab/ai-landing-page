import Logo from "@/assets/logo.svg";
import MenuIcon from "@/assets/icon-menu.svg";
import Button from "@/components/Button";

export const Header = () => {
  return (
    <header className="py-4 border-b border-white/15 md:border-none sticky top-0 z-10 relative md:backdrop-blur-none">
    <div className="absolute inset-0 backdrop-blur md:backdrop-blur -z-10 hidden md:block"></div>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-2xl mx-auto">
          <div>
            <Logo className="w-10 h-10 rounded-lg inline-flex justify-center items-center border border-white/15" />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 items-center">
            <nav className="flex gap-8">
              <a href="#" className="text-white/70 hover:text-white hover:brightness-125 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.9)] hover:scale-105 transition">Features</a>
              <a href="#" className="text-white/70 hover:text-white hover:brightness-125 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.9)] hover:scale-105 transition">Developers</a>
              <a href="#" className="text-white/70 hover:text-white hover:brightness-125 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.9)] hover:scale-105 transition">Pricing</a>
              <a href="#" className="text-white/70 hover:text-white hover:brightness-125 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.9)] hover:scale-105 transition">Changelog</a>
            </nav>
            
            <div className="flex gap-4 items-center">
              <Button>Join waitlist</Button>
              <MenuIcon className="w-7 h-7" />
            </div>
          </div>

          {/* Mobile Layout: Logo + Button + Menu */}
          <div className="md:hidden flex gap-4 items-center">
            <Button>Join waitlist</Button>
            <MenuIcon className="w-6 h-6" />
          </div>
        </div>
      </div>
    
    </header>
  );
};