"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const words = [
  { text: "Where", x: -500, y: -200 },
  { text: "Productivity", x: 500, y: -300 },
  { text: "Meets", x: -400, y: 250 },
  { text: "Creativity", x: 600, y: 300 },
];

function AnimatedLogo() {
  const fall = (delay: number) => ({
    initial: { y: -180, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: {
      duration: 0.36,
      delay,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  });

  return (
    <div className="flex flex-col items-center">
     <svg
  viewBox="0 0 360 470"
  className="w-[140px] sm:w-[100px] md:w-[115px] lg:w-[180px] h-auto overflow-visible"
  fill="none"
>
        <defs>
          <linearGradient id="barLight" x1="0" y1="0" x2="0" y2="470" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#cbfffe" />
            <stop offset="100%" stopColor="#cbfffe" />
          </linearGradient>

          <linearGradient id="barMid" x1="0" y1="0" x2="0" y2="470" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#b6e2ea" />
            <stop offset="100%" stopColor="#a7d8f2" />
          </linearGradient>

          <linearGradient id="barBlue" x1="0" y1="0" x2="0" y2="470" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ABE5FF" />
            <stop offset="100%" stopColor="#9cdbf8ff" />
          </linearGradient>

          <linearGradient id="diagGrad" x1="40" y1="200" x2="280" y2="340" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#cbfffe" />
            <stop offset="100%" stopColor="#cbfffe" />
          </linearGradient>

          <linearGradient id="insText" x1="0" y1="0" x2="320" y2="50" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#cbfffe" />
            <stop offset="100%" stopColor="#e8ffffff" />
          </linearGradient>
        </defs>

        {/* 9 back diagonal (darker) */}
        <motion.polygon
          {...fall(1.08)}
          points="82,186 260,288 260,320 82,218"
          fill="#ABE5FF"
          opacity="0.75"
        />

        {/* 1 */}
        <motion.rect
          {...fall(0.42)}
          x="54"
          y="110"
          width="30"
          height="350"
          fill="url(#barBlue)"
        />

        {/* 2 */}
        <motion.rect
          {...fall(0.50)}
          x="58"
          y="128"
          width="25"
          height="300"
          fill="url(#barLight)"
        />

        {/* 4 */}
        <motion.rect
          {...fall(0.66)}
          x="120"
          y="-10"
          width="30"
          height="340"
          fill="url(#barBlue)"
        />

        {/* 3 */}
        <motion.rect
          {...fall(0.58)}
          x="105"
          y="30"
          width="25"
          height="282"
          fill="url(#barLight)"
        />

        {/* 5 */}
        <motion.rect
          {...fall(0.74)}
          x="160"
          y="60"
          width="30"
          height="330"
          fill="url(#barLight)"
        />

        {/* 6 */}
        <motion.rect
          {...fall(0.82)}
          x="189"
          y="30"
          width="30"
          height="390"
          fill="url(#barBlue)"
        />

        {/* 7 */}
        <motion.rect
          {...fall(0.90)}
          x="226"
          y="60"
          width="25"
          height="330"
          fill="url(#barLight)"
        />

        {/* 8 */}
        <motion.rect
          {...fall(0.98)}
          x="258"
          y="30"
          width="30"
          height="390"
          fill="url(#barBlue)"
        />

        {/* 10 front diagonal (light) */}
        <motion.polygon
          {...fall(1.14)}
          points="82,198 248,292 248,318 82,224"
          fill="url(#diagGrad)"
        />
      </svg>

      {/* TEXT */}
      <motion.div
        initial={{ y: -90, opacity: 0, filter: "blur(6px)" }}
        animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
        transition={{
          duration: 0.34,
          delay: 0.06,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="mt-2 lg:mt-3"
      >
        <svg
          viewBox="0 0 340 52"
          className="w-[175px] sm:w-[128px] md:w-[148px] lg:w-[220px] h-auto"
          fill="none"
        >
          <text
            x="170"
            y="38"
            textAnchor="middle"
            fontSize="35"
            fontWeight="500"
            letterSpacing="0.24em"
            fill="url(#insText)"
            style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
          >
            INSOLVO
          </text>
        </svg>
      </motion.div>
    </div>
  );
}

export default function Hero() {
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 500], [0, 120]);

  return (
    <section
      id="hero"
      className="relative w-full h-[calc(100svh-72px)] sm:h-[calc(100svh-76px)] lg:h-[calc(100svh-84px)] overflow-hidden"
    >
      {/* BACKGROUND IMAGE */}
      <motion.div
        style={{ y: bgY }}
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 3, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src="/images/hero/hero-image2.webp"
          alt="Insolvo hero image"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </motion.div>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40 z-[5]" />

      {/* CONTENT */}
      <div className="absolute inset-0 z-10 flex items-center justify-center px-6">
        <div className="flex flex-col items-center text-center gap-6 md:gap-0 md:block w-full max-w-7xl">
          {/* LOGO */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="relative md:absolute md:left-16 md:top-1/2 md:-translate-y-1/2"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <AnimatedLogo />
            </motion.div>
          </motion.div>

          {/* TEXT */}
          <div
            className="
              text-white uppercase font-semibold
              tracking-[0.18em] leading-[1.2]
              text-[18px] sm:text-[28px] md:text-[28px] lg:text-[44px]
              max-w-[900px]
              md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2
            "
          >
            <h1>
              <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
                {words.slice(0, 2).map((word, i) => (
                  <motion.span
                    key={word.text}
                    initial={{
                      opacity: 0,
                      x: word.x,
                      y: word.y,
                      rotate: i % 2 === 0 ? -25 : 25,
                      scale: 0.7,
                      filter: "blur(10px)",
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      y: 0,
                      rotate: 0,
                      scale: 1,
                      filter: "blur(0px)",
                    }}
                    transition={{
                      duration: 0.7,
                      delay: i * 0.18,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className={
                      word.text === "Where"
                        ? "text-[#b4edf7] drop-shadow-[0_0_12px_rgba(180,237,247,0.6)] inline-block"
                        : "inline-block"
                    }
                  >
                    {word.text}
                  </motion.span>
                ))}
              </div>

              <div className="block h-2" />

              <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
                {words.slice(2).map((word, i) => (
                  <motion.span
                    key={word.text}
                    initial={{
                      opacity: 0,
                      x: word.x,
                      y: word.y,
                      rotate: i % 2 === 0 ? 20 : -20,
                      scale: 0.7,
                      filter: "blur(10px)",
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      y: 0,
                      rotate: 0,
                      scale: 1,
                      filter: "blur(0px)",
                    }}
                    transition={{
                      duration: 0.7,
                      delay: 0.4 + i * 0.18,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className={
                      word.text === "Meets"
                        ? "text-[#b4edf7] drop-shadow-[0_0_12px_rgba(180,237,247,0.6)] inline-block"
                        : "inline-block"
                    }
                  >
                    {word.text}
                  </motion.span>
                ))}
              </div>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}