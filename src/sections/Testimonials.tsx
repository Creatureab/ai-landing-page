"use client";

import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import Image from "next/image";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "This product has completely transformed how I manage my projects and deadlines",
    name: "Sophia Perez",
    title: "Director @ Quantum",
    avatarImg: avatar1,
  },
  {
    text: "These AI tools have completely revolutionized our SEO entire strategy overnight",
    name: "Jamie Lee",
    title: "Founder @ Pulse",
    avatarImg: avatar2,
  },
  {
    text: "The user interface is so intuitive and easy to use, it has saved us countless hours",
    name: "Alisa Hester",
    title: "Product @ Innovate",
    avatarImg: avatar3,
  },
  {
    text: "Our team's productivity has increased significantly since we started using this tool",
    name: "Alec Whitten",
    title: "CTO @ Tech Solutions",
    avatarImg: avatar4,
  },
];

export const Testimonials = () => {
  return (
    <section className="relative py-20 md:py-24 overflow-hidden">
      {/* 🌸 Pink/Purple Lamp Glow Background */}
      <div className="absolute inset-0 -z-10 flex justify-center">
        <div className="relative w-[500px] h-[500px]">
          {/* Main glow */}
          <div className="absolute inset-0 bg-pink-500/30 blur-[120px] rounded-full"></div>
          {/* Extra purple hue */}
          <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 bg-purple-500/20 blur-[160px] rounded-full"></div>
        </div>
      </div>

      <div className="container relative">
        <h2 className="text-5xl md:text-6xl text-center tracking-tighter font-medium">
          Beyond Expectations.
        </h2>
        <p className="text-white/70 text-lg md:text-xl tracking-tight text-center mt-5 max-w-sm mx-auto">
          Our Revolutionary AI SEO Tool Has Transformed Our Clients
        </p>

        {/* Testimonial Row */}
        <div className="overflow-hidden mt-10 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
          <motion.div
            className="flex gap-5 pr-5 flex-none"
            initial={{ x: 0 }}
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 20, ease: "linear", repeat: Infinity }}
          >
            {testimonials.concat(testimonials).map((testimonial, index) => (
              <motion.div
                key={index}
                className="relative border border-white/15 p-6 md:p-10 rounded-xl 
                  bg-[linear-gradient(to_bottom_left,rgba(140,69,255,0.3),black)] 
                  max-w-xs md:max-w-md flex-none backdrop-blur-sm overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                {/* ✨ Subtle card glow */}
                <div className="absolute inset-0 bg-pink-500/10 blur-2xl rounded-xl pointer-events-none"></div>

                <div className="relative z-10">
                  <div className="text-lg md:text-2xl tracking-tight font-medium">
                    {testimonial.text}
                  </div>
                  <div className="flex items-center gap-3 mt-5">
                    <div className="relative after:content-[''] after:absolute after:inset-0 after:bg-[rgb(140,69,255)] after:mix-blend-soft-light before:content-[''] before:absolute before:inset-0 before:border before:border-white/30 before:z-10 before:rounded-lg">
                      <Image
                        src={testimonial.avatarImg}
                        alt={testimonial.name}
                        className="h-11 w-11 rounded-lg grayscale"
                      />
                    </div>
                    <div>
                      <div>{testimonial.name}</div>
                      <div className="text-white/50 text-sm">
                        {testimonial.title}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
