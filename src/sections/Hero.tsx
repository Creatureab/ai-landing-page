"use client";
import { useRef } from "react";
import stars from "@/assets/stars.png";
import Button from "@/components/Button";
import { motion, useScroll, useTransform } from "framer-motion";

export const Hero = () => {
  const Sectionref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: Sectionref,
    offset: ["start end", "end start"],
  });
  const backgroundPosition = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  return (
    <motion.section
    ref={Sectionref}
      className="relative h-[492px] md:h-[800px] flex items-center overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"
      style={{
        backgroundImage: `url(${stars.src})`,
        backgroundPositionX: backgroundPosition,
      }}
      animate={{
        backgroundPositionX: stars.width,
      }}
      transition={{
        duration: 120,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {/* Background overlay */}
      <div className="absolute justify-center inset-0 bg-[radial-gradient(75%_75%_at_center,rgb(140,69,255,.5)_15%,rgb(14,0,36,.5)_78%,transparent)]"></div>
      <div className="absolute h-64 w-64 md:h-96 md:w-96 bg-purple-500 rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))] shadow-[-20px_-20px_50px_rgb(255,255,255,0.5),-20px_-20px_80px_rgb(255,255,255,0.1),0_0_50px_rgb(140,69,255)]"/>

      <motion.div
        style={{
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          rotate: "1turn",
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}

        className="absolute h-[344px] w-[344px] md:h-[580px] md:w-[580px] rounded-full border border-white/20 opacity-20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="absolute h-2 w-2 border border-white/20 opacity-30 rounded-full top-1/2 left-0 -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute h-2 w-2 bg-white opacity-30 rounded-full top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute h-2 w-2 bg-white opacity-30 rounded-full top-1/2 left-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center">
            <div className="h-2 w-2 bg-white opacity-30 rounded-full flex items-center justify-center">
            <div className="h-1 w-1 bg-white rounded-full"></div>
          </div>
          </div>
      </motion.div>
      <div className="absolute h-[444px] w-[444px] md:h-[780px] md:w-[780px] rounded-full border border-white/20 opacity-20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      <motion.div
      style={{
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        rotate: "1turn",
      }}
      transition={{
        duration: 30,
        repeat: Infinity,
        ease: "linear",
      }}
      className="absolute h-[544px] w-[544px] md:h-[980px] md:w-[980px] rounded-full border border-white/20 opacity-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
      <div className="absolute h-2 w-2 bg-white opacity-30 rounded-full top-1/2 left-0 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute h-2 w-2 bg-white opacity-30 rounded-full top-1/2 left-full -translate-x-1/2 -translate-y-1/2"></div>
        
      </motion.div>
      
      <div className="container relative z-10 text-center mt-16">
        <h1 className="text-8xl md:text-[168px] md:leanding-none font-semibold tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text text-cente justify-center">
          AI SEO
        </h1>

        <p className="text-lg md:text-xl text-white/70 text-center max-w-xl mx-auto">
          Elevate your site's visibility affordably with AI —
          where smart technology meets a user-friendly SEO tool.
        </p>

        <div className="flex justify-center mt-5">
          <Button>Join waitlist</Button>
        </div>
      </div>
    </motion.section>
  );
};
