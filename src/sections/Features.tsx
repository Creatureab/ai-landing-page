"use client";

import { DotLottiePlayer } from "@dotlottie/react-player";
import productImage from "@/assets/product-image.png";
import Image from "next/image";
import {
  ComponentPropsWithoutRef,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
  ValueAnimationTransition,
} from "framer-motion";

const tabs = [
  {
    icon: "/assets/lottie/vroom.lottie",
    title: "User-friendly dashboard",
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    backgroundSizeX: 150,
  },
  {
    icon: "/assets/lottie/click.lottie",
    title: "One-click optimization",
    isNew: false,
    backgroundPositionX: 98,
    backgroundPositionY: 100,
    backgroundSizeX: 135,
  },
  {
    icon: "/assets/lottie/stars.lottie",
    title: "Smart keyword generator",
    isNew: true,
    backgroundPositionX: 100,
    backgroundPositionY: 27,
    backgroundSizeX: 177,
  },
];

const FeatureTab = (
  props: (typeof tabs)[number] &
    ComponentPropsWithoutRef<"div"> & { selected?: boolean }
) => {
  const tabRef = useRef<HTMLDivElement>(null);
  const dotLottiePlayer = useRef<any>(null);

  const xPercentage = useMotionValue(100);
  const yPercentage = useMotionValue(50);
  const maskImage = useMotionTemplate`radial-gradient(80px 80px at ${xPercentage}% ${yPercentage}%, black, transparent)`;

  useEffect(() => {
    if (!tabRef.current) return;
    const { height, width } = tabRef.current.getBoundingClientRect();
    const circumference = height * 2 + width * 2;
    const time = [
      0,
      width / circumference,
      (width + height) / circumference,
      (width * 2 + height) / circumference,
      1,
    ];

    const options: ValueAnimationTransition = {
      times: time,
      duration: 4,
      ease: "linear",
      repeat: Infinity,
      repeatType: "loop",
    };

    animate(xPercentage, [0, 100, 100, 0, 0], options);
    animate(yPercentage, [0, 0, 100, 100, 0], options);
  }, [xPercentage, yPercentage]);

  const handleHover = () => {
    dotLottiePlayer.current?.seek(0);
    dotLottiePlayer.current?.play();
  };

  return (
    <div
      ref={tabRef}
      onMouseEnter={handleHover}
      onClick={props.onClick}
      className="border border-white/15 flex p-2.5 rounded-xl gap-2.5 items-center relative cursor-pointer"
    >
      {props.selected && (
        <motion.div
          className="absolute inset-0 -m-px border border-[#A369ff] rounded-xl"
          style={{ maskImage }}
        ></motion.div>
      )}

      <div className="w-12 h-12 border border-white/15 rounded-lg inline-flex items-center justify-center">
        <DotLottiePlayer
          ref={dotLottiePlayer}
          src={props.icon}
          className="w-10 h-10"
          autoplay
        />
      </div>

      <div className="font-medium">{props.title}</div>

      {props.isNew && (
        <div className="text-xs rounded-full px-2 py-0.5 bg-[#8c44ff] text-black font-semibold">
          New
        </div>
      )}
    </div>
  );
};

export const Features = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const backgroundPositionX = useMotionValue(tabs[0].backgroundPositionX);
  const backgroundPositionY = useMotionValue(tabs[0].backgroundPositionY);
  const backgroundSizeX = useMotionValue(tabs[0].backgroundSizeX);

  const backgroundPosition = useMotionTemplate`${backgroundPositionX}% ${backgroundPositionY}%`;
  const backgroundSize = useMotionTemplate`${backgroundSizeX}% auto`;

  const handleSelectTab = (index: number) => {
    setSelectedTab(index);
    const animateOption: ValueAnimationTransition = {
      duration: 2,
      ease: "easeInOut",
    };

    animate(backgroundPositionX, tabs[index].backgroundPositionX, animateOption);
    animate(backgroundPositionY, tabs[index].backgroundPositionY, animateOption);
    animate(backgroundSizeX, tabs[index].backgroundSizeX, animateOption);
  };

  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <h2 className="text-5xl md:text-6xl max-w-2xl font-medium tracking-tighter text-center mx-auto">
          Elevate your SEO efforts.
        </h2>


        <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto tracking-tight text-center mt-5">
          From small startups to large enterprises, our AI-powered tools are
          designed to help you optimize your website for search engines and
          improve your online visibility.
        </p>

        <div className="mt-10 flex flex-col lg:flex-row gap-3 lg:flex-1 justify-center">
          {tabs.map((tab, tabIndex) => (
            <FeatureTab
              {...tab}
              selected={selectedTab === tabIndex}
              onClick={() => handleSelectTab(tabIndex)}
              key={tab.title} className="border border:white/15 flex p-2.5 rounded-xl gap-2.5"
            />
          ))}
        </div>

        {/* ✅ Fixed background image section */}
        <div className="border border-white/20 p-2.5 rounded-xl mt-3">
          <motion.div
            className="aspect-video bg-cover border-white/20 rounded-lg"
            style={{
              backgroundImage: `url(${productImage.src})`,
              backgroundPosition,
              backgroundSize,
            }}
          />
        </div>
      </div>
    </section>
  );
};
