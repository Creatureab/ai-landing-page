"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Button from "@/components/Button";
import stars from "@/assets/stars.png";
import gridlines from "@/assets/grid-lines.png";

export const CallToAction = () => {
  const sectionRef = useRef<HTMLElement>(null);

  // Framer-motion scroll tracking
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Smooth vertical parallax
  const backgroundPositionY = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-24 relative overflow-hidden flex justify-center items-center"
    >
      <div className="container relative">
        <motion.div
          className="relative border border-white/15 py-24 rounded-xl overflow-hidden bg-black flex flex-col justify-center items-center"
          animate={{
            backgroundPositionX: [0, stars.width || 800], // fallback width
          }}
          transition={{
            repeat: Infinity,
            duration: 60,
            ease: "linear",
          }}
          style={{
            backgroundImage: `url(${stars.src})`,
            backgroundSize: "cover",
            backgroundPositionY,
            backgroundPositionX: "center",
          }}
        >
          {/* 💡 Animated Purple Lamp Glow */}
          <div className="absolute inset-0 flex justify-center items-center">
            <motion.div
              className="w-[700px] h-[700px] bg-purple-600/40 blur-[160px] rounded-full"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            ></motion.div>
          </div>

          {/* 💜 Grid overlay with radial mask */}
          <div
            className="absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay"
            style={{
              backgroundImage: `url(${gridlines.src})`,
              maskImage:
                "radial-gradient(60% 60% at 50% 40%, black 60%, transparent 100%)",
              WebkitMaskImage:
                "radial-gradient(60% 60% at 50% 40%, black 60%, transparent 100%)",
            }}
          ></div>

          {/* ✨ Text content */}
          <div className="relative z-10 text-center">
            <h2 className="text-5xl md:text-6xl max-w-xl mx-auto tracking-tighter font-medium text-white">
              AI-driven SEO for everyone.
            </h2>
            <p className="text-lg md:text-xl max-w-md mx-auto text-white/70 mt-5 tracking-tight">
              Achieve clear, impactful results without the complexity.
            </p>
            <div className="flex justify-center mt-8">
              <Button className="bg-purple-500/20 border border-purple-400/50 hover:bg-purple-500/30 transition shadow-[0_0_25px_rgba(168,85,247,0.6)]">
                Join waitlist
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
