"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full h-[calc(100svh-72px)] sm:h-[calc(100svh-76px)] lg:h-[calc(100svh-84px)] overflow-hidden"
    >
      {/* BACKGROUND IMAGE WITH ZOOM OUT */}
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 6, ease: "easeOut" }}
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

      {/* CONTENT */}
      <div className="absolute inset-0 z-10 flex items-center justify-center px-6">
        <div className="flex flex-col items-center text-center gap-6 md:gap-0 md:block w-full max-w-7xl">

          {/* LOGO */}
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative md:absolute md:left-16 md:top-1/2 md:-translate-y-1/2"
          >
            <Image
              src="/images/hero/logo.webp"
              alt="Insolvo logo"
              width={250}
              height={250}
              priority
              className="w-[170px] sm:w-[110px] md:w-[140px] lg:w-[250px]"
            />
          </motion.div>

          {/* TEXT */}
          <motion.h1
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="
              text-white uppercase font-semibold
              tracking-[0.18em] leading-[1.2]
              text-[18px] sm:text-[28px] md:text-[28px] lg:text-[44px]
              max-w-[900px]
              md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2
            "
          >
            <span className="text-[#b4edf7]">Where</span> Productivity
            <br />
            <span className="text-[#b4edf7]">Meets</span> Creativity
          </motion.h1>

        </div>
      </div>
    </section>
  );
}