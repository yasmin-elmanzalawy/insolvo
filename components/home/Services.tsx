"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

type IconProps = { className?: string };

function PhoneIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M21 16.5V19a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3 5.18 2 2 0 0 1 5 3h2.5a2 2 0 0 1 2 1.72l.35 2.47a2 2 0 0 1-.57 1.7l-1.1 1.1a16 16 0 0 0 5.72 5.72l1.1-1.1a2 2 0 0 1 1.7-.57l2.47.35A2 2 0 0 1 21 16.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ClickIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 4a7 7 0 1 0 7 7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M15 3h6v6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 3 12 12"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MessageIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M20 15a3 3 0 0 1-3 3H9l-5 3V6a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v9Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 9h8M8 13h5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function DealIcon({ className = "h-7 w-7" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M8 12l2 2 6-6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const services = [
  {
    title: "Cold Calling Campaign",
    subtitle: "The High-Touch Approach",
    icon: PhoneIcon,
    description:
      "Stop wasting time with virtual assistants who read from a script with no emotion. Our cold calling campaign is a fully managed, high-volume outbound machine designed to fill your pipeline with motivated seller leads.",
    hoverPoints: [
      "An exclusively tailored, disciplined, and dedicated team aligned to achieving your goals.",
      "The team includes multiple agents, from callers to management and quality.",
      "No need to fret over data, we’ve got the lists.",
      "All of your leads will be stored in a straightforward and secure fashion using our CRM (chosen based on your preference)",
      "Feeling kept in the dark? Worry not as you’ll be receiving reports on the regular keeping you in the loop.",
    ],
  },
  {
    title: "PPC Campaign (Pay-Per-Click)",
    subtitle: "The High-Tech Approach",
    icon: ClickIcon,
    description:
      "If you want intent-based leads, you need to be where sellers are searching. Our PPC management service handles everything from the click to the capture.",
    hoverPoints: [
      "We give you the spotlight, allowing prospective leads a path directly to you.",
      "Complete optimization of social media platforms, consistently following up on the regular.",
      "Website creation and SEO optimization to turn traffic into opportunities.",
      "Multiple strategic approaches, by tailoring to your current infrastructure and building around it to get to the results we need.",
      "Reports will keep flowing, allowing you insight on obtained results.",
    ],
  },
  {
    title: "SMS Blasting Campaign",
    subtitle: "The High-Volume Approach",
    icon: MessageIcon,
    description:
      "Sellers are on their phones. Reach them instantly with targeted text message campaigns designed to generate conversations and opportunities.",
    hoverPoints: [
      "The faster approach, utilizing a trained team to reach out to prospective leads via text.",
      "We’ll always be checking in, making sure to not lose out on long lasting relationships.",
      "We’re using the best up to date tools and market strategies.",
      "The data will always be adding up, whilst reaching fruitful results.",
      "You’ll be aware of the volume coming in, and any new developments on the spot.",
    ],
  },
];

const addon = {
  title: "Sales Consulting Add-On Service",
  subtitle: "The Deal Closure Extension",
  icon: DealIcon,
  description:
    "You have the leads. Now you need them signed. For investors who want a true 'done-for-you' deal flow, we offer our Sales Consulting Service Add-on.",
  hoverPoints: [
    "Select from three different packages based on scalability (Basic, Advanced, Premium).",
    "This is for getting things done, in a precise manner. We’re talking about reviving and nurturing leads, gathering complete info, negotiating, building buyers lists, selling deals, etc.",
    "Keep your bank account flowing with funded deals and a high return on investment.",
  ],
};

const fadeUp = {
  initial: { opacity: 0, y: 35 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const serviceCardClass =
  "group relative flex h-full min-h-[460px] flex-col overflow-hidden rounded-[28px] border border-[#dcefeb] bg-white p-6 shadow-[0_12px_35px_rgba(34,63,119,0.08)] transition-all duration-300 hover:-translate-y-2 hover:border-[#00C2B8]/30 hover:shadow-[0_22px_55px_rgba(0,194,184,0.16)] sm:p-8";

const scrollAreaClass =
  "min-h-0 flex-1 overflow-y-auto pr-2 [scrollbar-gutter:stable] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-[#dff5f2] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#00C2B8]/70 hover:[&::-webkit-scrollbar-thumb]:bg-[#00C2B8]";

export default function Services() {
  const AddonIcon = addon.icon;
  const [openService, setOpenService] = useState<number | null>(null);
  const [openAddon, setOpenAddon] = useState(false);

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="bg-[#f8fbff] px-6 py-16 sm:px-8 lg:px-12 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <header className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#00C2B8]">
            Our Services
          </p>

          <h2
            id="services-heading"
            className="text-xl font-semibold leading-tight text-[#223f77] sm:text-2xl lg:text-3xl"
          >
            Scalable marketing systems built to generate real seller leads.
          </h2>

          <p className="mt-5 text-sm leading-7 text-gray-600">
            Insolvo combines high-touch outreach, high-tech marketing systems,
            and high-volume communication strategies to help real estate
            investors maintain a consistent pipeline of motivated sellers.
          </p>
        </header>

        <ul className="mt-14 grid items-stretch gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon;
            const isOpen = openService === i;

            return (
              <li key={service.title} className="list-none">
                <motion.article
                  {...fadeUp}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  className={serviceCardClass}
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-[#00C2B8]" />
                  <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#00C2B8]/6 blur-2xl transition-all duration-300 group-hover:bg-[#00C2B8]/10" />

                  <div
                    className={`relative flex h-full flex-col transition-opacity duration-300 ${
                      isOpen ? "opacity-0 md:opacity-100" : "opacity-100 group-hover:opacity-0"
                    }`}
                  >
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#00C2B8]/15 bg-[#00C2B8]/8 text-[#00C2B8] transition-all duration-300 group-hover:scale-105 group-hover:bg-[#00C2B8] group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </div>

                    <span className="inline-flex w-fit rounded-full bg-[#00C2B8]/8 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#00C2B8]">
                      Service {i + 1}
                    </span>

                    <h3 className="mt-5 text-lg font-semibold leading-snug text-[#223f77]">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-sm font-medium italic text-[#00C2B8]">
                      "{service.subtitle}"
                    </p>

                    <p className="mt-5 text-sm leading-7 text-gray-600">
                      {service.description}
                    </p>

                    <div className="mt-auto pt-6">
                      <button
                        type="button"
                        onClick={() =>
                          setOpenService((prev) => (prev === i ? null : i))
                        }
                        className="text-sm font-semibold text-[#00C2B8] md:pointer-events-none"
                      >
                        {isOpen ? "Close" : "See More"}
                      </button>
                    </div>
                  </div>

                  <div
                    className={`absolute inset-0 z-10 flex flex-col rounded-[28px] bg-[linear-gradient(180deg,rgba(255,255,255,0.92)_0%,rgba(240,253,251,0.98)_100%)] p-5 backdrop-blur-sm transition-all duration-300 sm:p-6 ${
                      isOpen
                        ? "opacity-100"
                        : "opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto"
                    } md:group-hover:opacity-100`}
                  >
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#00C2B8] text-white shadow-md">
                        <Icon className="h-5 w-5" />
                      </div>

                      <div>
                        <h3 className="text-sm font-semibold text-[#223f77]">
                          {service.title}
                        </h3>
                        <p className="text-[11px] uppercase tracking-[0.18em] text-[#00C2B8]">
                          {service.subtitle}
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => setOpenService(null)}
                        className="ml-auto rounded-full border border-[#00C2B8]/20 px-3 py-1 text-xs font-semibold text-[#00C2B8] md:hidden"
                      >
                        Close
                      </button>
                    </div>

                    <div className={scrollAreaClass}>
                      <ul className="space-y-3">
                        {service.hoverPoints.map((point) => (
                          <li
                            key={point}
                            className="flex items-start gap-3 rounded-2xl border border-[#00C2B8]/10 bg-white/80 px-4 py-3 text-sm leading-6 text-gray-700 shadow-sm"
                          >
                            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#00C2B8]" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="sticky bottom-0 mt-4 bg-gradient-to-t from-[#eefcf9] via-[#eefcf9]/95 to-transparent pt-4">
                        <Link
                          href="/contact"
                          className="inline-flex w-full items-center justify-center rounded-full bg-[#00C2B8] px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-[#00b2aa]"
                        >
                          Contact us
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.article>
              </li>
            );
          })}
        </ul>

        <motion.article
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="group relative mt-16 w-full overflow-hidden rounded-2xl bg-[#223f77] p-8 text-center text-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-lg sm:p-10"
        >
          <div
            className={`relative transition-opacity duration-300 ${
              openAddon ? "opacity-0 md:opacity-100" : "opacity-100 group-hover:opacity-0"
            }`}
          >
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-xl bg-white/10 text-[#00C2B8] transition group-hover:bg-[#00C2B8] group-hover:text-white">
              <AddonIcon className="h-7 w-7" />
            </div>

            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#00C2B8]">
              {addon.title}
            </p>

            <h3 className="mt-3 text-xl font-semibold">{addon.subtitle}</h3>

            <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-white/90">
              {addon.description}
            </p>

            <div className="mt-6">
              <button
                type="button"
                onClick={() => setOpenAddon((prev) => !prev)}
                className="text-sm font-semibold text-[#00C2B8] md:pointer-events-none"
              >
                {openAddon ? "Close" : "See More"}
              </button>
            </div>
          </div>

          <div
            className={`absolute inset-0 z-10 flex flex-col bg-[linear-gradient(180deg,rgba(34,63,119,0.96)_0%,rgba(20,34,67,0.98)_100%)] p-5 text-left backdrop-blur-sm transition-all duration-300 sm:p-6 ${
              openAddon
                ? "opacity-100"
                : "opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto"
            } md:group-hover:opacity-100`}
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#00C2B8] text-white shadow-md">
                <AddonIcon className="h-5 w-5" />
              </div>

              <div>
                <h3 className="text-sm font-semibold text-white">{addon.title}</h3>
                <p className="text-[11px] uppercase tracking-[0.18em] text-[#00C2B8]">
                  {addon.subtitle}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setOpenAddon(false)}
                className="ml-auto rounded-full border border-[#00C2B8]/20 px-3 py-1 text-xs font-semibold text-[#00C2B8] md:hidden"
              >
                Close
              </button>
            </div>

            <div className="min-h-0 flex-1 overflow-y-auto pr-2 [scrollbar-gutter:stable] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-white/10 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#00C2B8]/70 hover:[&::-webkit-scrollbar-thumb]:bg-[#00C2B8]">
              <ul className="space-y-3">
                {addon.hoverPoints.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/8 px-4 py-3 text-sm leading-6 text-white/90 shadow-sm"
                  >
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#00C2B8]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="sticky bottom-0 mt-4 bg-gradient-to-t from-[#223f77] via-[#223f77]/95 to-transparent pt-4">
                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center rounded-full bg-[#00C2B8] px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-[#00b2aa]"
                >
                  Contact us
                </Link>
              </div>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}