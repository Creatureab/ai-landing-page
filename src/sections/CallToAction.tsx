"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import Button from "@/components/Button";
import stars from "@/assets/stars.png";
import gridlines from "@/assets/grid-lines.png";

export const CallToAction = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  // scroll parallax
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const backgroundPositionY = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  // motion values for cursor position (percent)
  const mouseX = useMotionValue(50); // percent
  const mouseY = useMotionValue(40); // percent

  // smooth them
  const smoothX = useSpring(mouseX, { stiffness: 150, damping: 30 });
  const smoothY = useSpring(mouseY, { stiffness: 150, damping: 30 });

  // combine into a single mask CSS string
  const mask = useTransform([smoothX, smoothY], ([mouseX, mouseY]) =>
    // adjust size (40% 40%) and inner stop (60%) to taste
    // produce both -webkit-mask-image and mask-image compatible value
    `radial-gradient(50% 50% at ${mouseX}% ${mouseY}%, black 60%, transparent 100%)`
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    // clamp to 0..100 just in case
    mouseX.set(Math.max(0, Math.min(100, x)));
    mouseY.set(Math.max(0, Math.min(100, y)));
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="py-20 md:py-24 relative overflow-hidden flex justify-center items-center"
    >
      <div className="container relative">
        <motion.div
          className="relative border border-white/15 py-24 rounded-xl overflow-hidden bg-black flex flex-col justify-center items-center group-hover:opcity-0 transition duration-700"
          animate={{ backgroundPositionX: stars.width }} // harmless fallback
          transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
          style={{
            backgroundImage: `url(${stars.src})`,
            backgroundSize: "cover",
            backgroundPositionY,
            backgroundPositionX: "center",
          }}
        >
          {/* Purple lamp glow */}
          <div className="absolute inset-0 inset-0 bg-[rgb(74,32,138) max-w-sm bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_0px_0px,black,transparent opcity-0 group-hover:opcity-100 transition duration-700">
            <motion.div
              className="w-[700px] h-[700px] bg-purple-600/40 blur-[160px] rounded-full"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          {/* Grid overlay that follows cursor */}
          <motion.div
            className="absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay pointer-events-none"
            style={{
              backgroundImage: `url(${gridlines.src})`,
              // apply both webkit and standard mask styles
              WebkitMaskImage: mask as unknown as string,
              maskImage: mask as unknown as string,
              maskRepeat: "no-repeat",
              WebkitMaskRepeat: "no-repeat",
              // smooth visual transition when the mask changes position/size
              transition: "mask-position 0.08s linear, -webkit-mask-position 0.08s linear",
            }}
          />
          
          {/* Content */}
          <div className="relative z-10 text-center">
            <h2 className="text-5xl md:text-6xl max-w-xl mx-auto tracking-tighter font-medium text-white">
              AI-driven SEO for everyone.
            </h2>
            <p className="text-center text-lg px-4 md:text-xl max-w-xs mx-auto text-white/70 mt-5 tracking-tight">
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
