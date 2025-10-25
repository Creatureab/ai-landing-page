"use client";
import acme from "@/assets/logo-acme.png";
import apex from "@/assets/logo-apex.png";
import celestial from "@/assets/logo-celestial.png";
import echo from "@/assets/logo-echo.png";
import pulse from "@/assets/logo-pulse.png";
import quantum from "@/assets/logo-quantum.png";

import { motion } from "framer-motion";


export const LogoTicker = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <div className="flex items-center gap-20">
          <div className="flex-1 md:flex-none">
            <h2>Trusted by top innovative teams</h2>
          </div>
          <div className="flex flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20px,black_80%,transparent)]">
            <motion.div 
              initial={{ translateX: "-50%" }}
              animate={{ translateX: "0%" }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex flex-none gap-14 pr-14 -translate-x-1/2"
            >
              {[acme, apex, celestial, echo, pulse, quantum, acme, apex, celestial, echo, pulse, quantum].map((logo) => (
                <img src={logo.src} key={logo.src} alt="Company logo" className="w-auto h-10" />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};