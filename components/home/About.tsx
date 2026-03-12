"use client";

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

export default function About() {
  return (
    <section id="about" className="bg-white px-6 py-16 sm:px-8 lg:px-12 lg:py-24 font-body">
      <div className="mx-auto max-w-6xl text-center">

        {/* About Title */}
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#4aa3ff]">
          About Insolvo
        </p>

        <h2 className="text-2xl font-semibold leading-tight text-[#223f77] sm:text-3xl">
          Real estate marketing and lead generation built to help investors scale smarter.
        </h2>

        {/* About Paragraphs */}
        <div className="mt-8 space-y-6 text-sm leading-7 text-gray-700 sm:text-base">
          {aboutText.map((para, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.3 }}
              viewport={{ once: true }}
            >
              {para}
            </motion.p>
          ))}
        </div>

        {/* Mission + Vision Cards */}
        <div className="mt-14 grid gap-8 md:grid-cols-2 justify-center items-stretch">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="card"
          >
            <div className="card-inner">
              <span className="inline-flex w-fit mx-auto rounded-full border border-[#b4edf7]/30 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#b4edf7]">
                Mission
              </span>
              <h3 className="mt-5 text-xl font-semibold text-white sm:text-2xl">
                Mission Statement
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/90">
                To empower US real estate professionals, investors, wholesalers,
                realtors, and developers with scalable, data-driven marketing
                solutions that deliver a consistent, predictable, and
                high-quality pipeline of seller leads.
              </p>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="card"
          >
            <div className="card-inner">
              <span className="inline-flex w-fit mx-auto rounded-full border border-[#b4edf7]/30 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#b4edf7]">
                Vision
              </span>
              <h3 className="mt-5 text-xl font-semibold text-white sm:text-2xl">
                Vision Statement
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/90">
                To become the leading global standard for real estate lead
                generation, proving that with the right systems, integration,
                and talent, geographical distance is irrelevant to market
                dominance.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Our Team Section */}
        <div className="mt-20 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#4aa3ff]">
            Our Team
          </p>
          <h2 className="text-2xl font-semibold leading-tight text-[#223f77] sm:text-3xl mb-10">
            Meet the Experts
          </h2>

          <div className="flex flex-wrap justify-center gap-12">
            {teamMembers.map((member, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.08, rotate: -1.5 }}
                transition={{ duration: 0.3 }}
                className="team-card max-w-xs text-center"
              >
                <img
                  src="/images/about/team/avatar.png"
                  alt={member.name}
                  className="rounded-full w-40 h-40 object-cover mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-[#223f77]">{member.name}</h3>
                <p className="text-sm text-gray-600 font-medium">{member.title}</p>
                <p className="text-sm text-gray-500 mt-2">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      <style jsx>{`
        /* Mission & Vision Cards */
        .card {
          position: relative;
          min-height: 320px;
          border-radius: 20px;
          overflow: hidden;
          cursor: pointer;
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }

        .card:hover {
          transform: scale(1.05) rotate(-2deg);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
        }

        .card-inner {
          position: relative;
          z-index: 1;
          background: #223f77;
          border-radius: 20px;
          padding: 28px;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          gap: 16px;
          height: 100%;
        }

        /* Team Cards */
        .team-card {
          background: #f9f9f9;
          border-radius: 20px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .team-card:hover {
          transform: scale(1.08) rotate(-1deg);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.12);
        }
      `}</style>
    </section>
  );
}