import Logo from "@/assets/logo.svg";
import Xsocial from "@/assets/social-x.svg";
import Instagramsocial from "@/assets/social-instagram.svg";
import YoutubeSocial from "@/assets/social-youtube.svg";

export const Footer = () => {
  return (
    <footer className="py-5 border-t border-white/15">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-5 items-center lg:gap-7 lg:flex-1">
          <div className="flex gap-2 items-center">
            <Logo className="h-6 w-6" />
            <div className="font-medium">AI startup landing page</div>
          </div>
          <div>
            <nav className="flex gap-5 flex-col lg:flex-row gap-5 lg:gap-7 lg:flex-1">
              <a href="#" className="hover:text-white transition">Features</a>
              <a href="#" className="hover:text-white transition">Developers</a>
              <a href="#" className="hover:text-white transition">Pricing</a>
              <a href="#" className="hover:text-white transition">Changelog</a>
            </nav>
          </div>
          <div className="flex gap-5 lg:flex-1 text-white/40">
            <Xsocial className="hover:text-white transition cursor-pointer" />
            <Instagramsocial className="hover:text-white transition cursor-pointer" />
            <YoutubeSocial className="hover:text-white transition cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};
