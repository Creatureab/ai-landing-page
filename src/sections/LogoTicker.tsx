"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import acme from "@/assets/logo-acme.png";
import apex from "@/assets/logo-apex.png";
import celestial from "@/assets/logo-celestial.png";
import echo from "@/assets/logo-echo.png";
import pulse from "@/assets/logo-pulse.png";
import quantum from "@/assets/logo-quantum.png";

export const LogoTicker = () => {
  const logos = [acme, apex, celestial, echo, pulse, quantum];

  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <div className="flex items-center gap-5">
          {/* Left side title */}
          <div className="flex-1 md:flex-none">
            <h2 className="text-lg md:text-xl font-semibold text-white/80">
              Trusted by top innovative teams
            </h2>
          </div>

          {/* Scrolling logo ticker */}
          <div className="flex flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20px,black_80%,transparent)]">
            <motion.div
              initial={{ x: "-50%" }}
              animate={{ x: 0 }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex flex-none gap-14 pr-14 -translate-x-1/2"
            >
              {[...logos, ...logos].map((logo, index) => (
                <Image
                  key={index}
                  src={logo}
                  alt="Company logo"
                  width={120}
                  height={40}
                  className="w-auto h-10 object-contain"
                  priority
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
