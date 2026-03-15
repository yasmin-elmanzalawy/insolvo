"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const aboutText = [
  "Most real estate investors hit a wall. They either have the time to find deals but lack the marketing skills, or they have the skills but no time to pick up the phone. Insolvo LLC was built to solve that equation.",
  "Headquartered in Egypt and operating exclusively on USA time zones, we bridge international operational excellence with the American real estate market. We do not just offer services. We provide a full-scale marketing department that integrates directly into your existing CRM, lead generation system, and workflow.",
  "We believe productivity, measured through the hard numbers of calls, follow-ups, and leads, and creativity, expressed through strategy, PPC, messaging, and campaign execution, are not opposites. They are partners. That is how we help real estate investors, wholesalers, realtors, and developers build a more consistent and predictable pipeline.",
  "We call it Scaling Smarter.",
];

const teamMembers = [
  { name: "Member 1", title: "Title 1", description: "Description 1" },
  { name: "Member 2", title: "Title 2", description: "Description 2" },
  { name: "Member 3", title: "Title 3", description: "Description 3" },
];

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="bg-white px-6 py-16 sm:px-8 lg:px-12 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">
        {/* Top Section */}
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Text */}
          <header className="text-center lg:text-left">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#00C2B8]">
              About Insolvo
            </p>

            <h2
              id="about-heading"
              className="text-2xl font-semibold leading-tight text-[#223f77] sm:text-3xl"
            >
              Real estate marketing and lead generation built to help investors scale smarter.
            </h2>

            <div className="mt-8 space-y-6 text-sm leading-7 text-gray-700">
              {aboutText.map((para, i) => (
                <motion.p
                  key={i}
                  {...fadeUp}
                  transition={{ duration: 0.7, delay: i * 0.12 }}
                >
                  {para}
                </motion.p>
              ))}
            </div>
          </header>

          {/* Image */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.8 }}
            className="relative mx-auto w-full max-w-[520px]"
          >
            <div className="relative overflow-hidden rounded-[24px] shadow-[0_18px_50px_rgba(34,63,119,0.10)]">
              <Image
                src="/images/about/about.png"
                alt="About Insolvo real estate marketing team"
                width={900}
                height={1100}
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Mission + Vision */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <motion.article
            {...fadeUp}
            transition={{ duration: 0.6 }}
            className="group rounded-[28px] bg-[#223f77] p-8 text-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
          >
            <span className="inline-flex rounded-full border border-[#00C2B8]/20 bg-[#00C2B8]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#00C2B8]">
              Mission
            </span>

            <h3 className="mt-5 text-xl font-semibold">
              Mission Statement
            </h3>

            <p className="mt-4 text-sm leading-7 text-white/90">
              To empower US real estate professionals, investors, wholesalers,
              realtors, and developers with scalable, data-driven marketing
              solutions that deliver a consistent, predictable, and
              high-quality pipeline of seller leads.
            </p>
          </motion.article>

          <motion.article
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group rounded-[28px] bg-[#223f77] p-8 text-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
          >
            <span className="inline-flex rounded-full border border-[#00C2B8]/20 bg-[#00C2B8]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#00C2B8]">
              Vision
            </span>

            <h3 className="mt-5 text-xl font-semibold">
              Vision Statement
            </h3>

            <p className="mt-4 text-sm leading-7 text-white/90">
              To become the leading global standard for real estate lead
              generation, proving that with the right systems, integration,
              and talent, geographical distance is irrelevant to market
              dominance.
            </p>
          </motion.article>
        </div>

        {/* Team */}
        <div className="mt-20">
          <header className="text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#00C2B8]">
              Our Team
            </p>

            <h2 className="text-2xl font-semibold leading-tight text-[#223f77] sm:text-3xl">
              Meet the Experts
            </h2>
          </header>

          <ul className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {teamMembers.map((member, i) => (
              <li key={i} className="list-none">
                <motion.article
                  {...fadeUp}
                  transition={{ duration: 0.55, delay: i * 0.1 }}
                  className="group rounded-[28px] border border-[#dcefeb] bg-white p-8 text-center shadow-[0_12px_35px_rgba(34,63,119,0.08)] transition-all duration-300 hover:-translate-y-2 hover:border-[#00C2B8]/30 hover:shadow-[0_22px_55px_rgba(0,194,184,0.14)]"
                >
                  <Image
                    src="/images/about/team/avatar.png"
                    alt={member.name}
                    width={160}
                    height={160}
                    className="mx-auto mb-4 h-40 w-40 rounded-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />

                  <h3 className="text-lg font-semibold text-[#223f77]">
                    {member.name}
                  </h3>

                  <p className="text-sm font-medium text-[#00C2B8]">
                    {member.title}
                  </p>

                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    {member.description}
                  </p>
                </motion.article>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}