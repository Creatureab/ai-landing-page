"use client";
import { useEffect, useState, useRef } from "react";
import Button from "@/components/Button";
import stars from "@/assets/stars.png";
import { motion, useScroll, useMotionValueEvent, useTransform } from "framer-motion";

export const Hero = () => {
  const Sectionref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: Sectionref,
    offset: ["start end","end start"],
  });
  const backgroundPosition = useTransform(scrollYProgress, [0, 1], [-300,300]);
  return (
    <motion.section
      ref={Sectionref} 
      className="h-[492px] md:h-[800px] flex items-center overflow-hidden relative md:border-none"
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
      <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center-center,rgb(140,69,255,.5)_15,rgb(14,0,36,.5)_78%,transparent) mx-auto black-drop-blur-lg]"></div>
      {/* Start planet */}
      <div className="absolute h-64 w-64 md:h-96 md:w-96 bg-purple-500 rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,rgb(184,148,255),rgb(74,32,138))] shadow-[0_0_500px_rgb(255,255,255,0.3),0_0_700px_rgb(255,255,255,0.2),0_0_500px_rgb(255,255,255,0.1),0_0_50px_rgb(140,69,255,0.8),0_0_80px_rgb(140,69,255,0.6),0_0_120px_rgb(140,69,255,0.4)]"></div>
      
      {/* start ring 1*/}
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
      
      className="absolute h-[300px] w-[300px] md:h-[450px] md:w-[450px] border border-white rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="absolute h-3 w-3 bg-white rounded-full top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      </motion.div>
      
      {/* start ring 2 */}
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
      className="absolute h-[500px] w-[500px] md:h-[500px] md:w-[500px] border border-white rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="absolute h-3 w-3 bg-white rounded-full top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      </motion.div>
      
      {/* Third ring */}
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
      className="absolute h-[544px] w-[544px] md:h-[600px] md:w-[600px] border border-white rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="absolute h-3 w-3 bg-white rounded-full top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      </motion.div>
      
      {/* Content - Centered */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-center">
        <h1 className="text-6xl md:text-7xl lg:text-8xl md:leading-none font-semibold tracking-tighter bg-[radial-gradient(100%_100%_at_top_left,white,white,rgba(74,32,138,0.5))] text-transparent bg-clip-text max-w-2xl mx-auto">
          AI SEO
        </h1>
        <p className="text-lg md:text-xl text-white/70 mt-5 max-w-2xl mx-auto">
          AI SEO is a tool that helps you optimize your website for search engines using artificial intelligence.
        </p>
        <div className="flex justify-center mt-8">
          <Button className="text-lg md:text-2xl">Join waitlist</Button>
        </div>
      </div>
    </motion.section>
  );
};