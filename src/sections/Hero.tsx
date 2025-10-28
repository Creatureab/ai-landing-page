"use client";
import { useRef } from "react";
import Button from "@/components/Button";
import stars from "@/assets/stars.png";
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
      className="relative flex items-center justify-center h-[492px] md:h-[800px] overflow-hidden"
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
      <div className="absolute justify-center inset-0 bg-[radial-gradient(75%_75%_at_center,rgb(140,69,255,.5)_17%,rgb(14,0,36,.5)_75%,transparent)]"></div>

      {/* Main planet */}
      <div className="absolute h-64 w-64 md:h-96 md:w-96 rounded-full border border-white/50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,rgb(184,148,255),rgb(74,32,138))] shadow-[0_0_50px_rgb(255,255,255,0.7),0_0_700px_rgb(255,255,255,0.2),0_0_500px_rgb(255,255,255,0.1),0_0_50px_rgb(140,69,255,0.8),0_0_80px_rgb(140,69,255,0.6),0_0_120px_rgb(140,69,255,0.4)]"></div>
    {/* Ring 1 */}
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
        className="absolute h-[344px] w-[344px] md:h-[450px] md:w-[450px] border border-white/20 opacity-20 rounded-full top-1/2 left-1/2"
      >
        <div className="absolute h-2 w-2 bg-white opacity-30 rounded-full top-1/2 left-0 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute h-2 w-2 bg-white opacity-30 rounded-full top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute h-5 w-5 bg-white opacity-30 rounded-full top-1/2 left-full -translate-x-1/2 -translate-y-1/2"></div>
      </motion.div>

      {/* Ring 2 */}
      <motion.div
        style={{
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          rotate: "-1turn",
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-[444px] w-[444px] md:h-[500px] md:w-[500px] border border-white/20 opacity-20 rounded-full top-1/2 left-1/2"
      >
        <div className="absolute h-2 w-2 bg-white opacity-30 rounded-full top-1/2 left-0 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute h-2 w-2 bg-white opacity-30 rounded-full top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute h-5 w-5 bg-white opacity-30 rounded-full top-1/2 left-full -translate-x-1/2 -translate-y-1/2"></div>
      </motion.div>

      {/* Ring 3 */}
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
        className="absolute h-[600px] w-[600px] md:h-[600px] md:w-[600px] border border-white/20 opacity-20 rounded-full top-1/2 left-1/2"
      >
        <div className="absolute h-2 w-2 bg-white opacity-30 rounded-full top-1/2 left-0 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute h-2 w-2 bg-white opacity-30 rounded-full top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute h-5 w-5 bg-white opacity-30 rounded-full top-1/2 left-full -translate-x-1/2 -translate-y-1/2"></div>
      </motion.div>

      {/* Center content */}
      <div className="absolute z-10 text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <h1 className="text-10xl md:text-10xl lg:text-8xl md:leading-none font-semibold tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgba(74,32,138,.5))] text-transparent bg-clip-text max-w-2xl mx-auto">
        AI SEO
      </h1>

        <p className="text-lg md:text-xl text-white/70 mt-5">
          AI SEO is a tool that helps you optimize your website for search engines using artificial intelligence.
        </p>
        <div className="flex justify-center mt-6">
          <Button>Join waitlist</Button>
        </div>
      </div>
    </motion.section>
  );
};
