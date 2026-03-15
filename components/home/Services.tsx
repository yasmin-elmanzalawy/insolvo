"use client";

import { motion } from "framer-motion";

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
        d="M12 3v4M4.93 4.93l2.83 2.83M3 12h4M17 12l-4.5-8v17l3.2-3.2 2.8 2.2 1.5-1.9-2.8-2.2L21 13l-4 1Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
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
  },
  {
    title: "PPC Campaign (Pay-Per-Click)",
    subtitle: "The High-Tech Approach",
    icon: ClickIcon,
    description:
      "If you want intent-based leads, you need to be where sellers are searching. Our PPC management service handles everything from the click to the capture.",
  },
  {
    title: "SMS Blasting Campaign",
    subtitle: "The High-Volume Approach",
    icon: MessageIcon,
    description:
      "Sellers are on their phones. Reach them instantly with targeted text message campaigns designed to generate conversations and opportunities.",
  },
];

const addon = {
  title: "Wholesaling Add-On Service",
  subtitle: "The Deal Closure Extension",
  icon: DealIcon,
  description:
    "You have the leads. Now you need them signed. For investors who want a true 'done-for-you' deal flow, we offer our Wholesaling Service Add-on.",
};

const fadeUp = {
  initial: { opacity: 0, y: 35 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const serviceCardClass =
  "group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-[#dcefeb] bg-white p-8 shadow-[0_12px_35px_rgba(34,63,119,0.08)] transition-all duration-300 hover:-translate-y-2 hover:border-[#00C2B8]/30 hover:shadow-[0_22px_55px_rgba(0,194,184,0.16)]";

export default function Services() {
  const AddonIcon = addon.icon;

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

            return (
              <li key={service.title} className="list-none">
                <motion.article
                  {...fadeUp}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  className={serviceCardClass}
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-[#00C2B8]" />
                  <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#00C2B8]/6 blur-2xl transition-all duration-300 group-hover:bg-[#00C2B8]/10" />

                  <div className="relative flex flex-col">
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#00C2B8]/15 bg-[#00C2B8]/8 text-[#00C2B8] transition-all duration-300 group-hover:scale-105 group-hover:bg-[#00C2B8] group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </div>

                    <span className="inline-flex rounded-full bg-[#00C2B8]/8 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#00C2B8]">
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
                  </div>
                </motion.article>
              </li>
            );
          })}
        </ul>

        <motion.article
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="group mt-16 w-full rounded-2xl bg-[#223f77] p-10 text-center text-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
        >
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-xl bg-white/10 text-[#00C2B8] transition group-hover:bg-[#00C2B8] group-hover:text-white">
            <AddonIcon className="h-7 w-7" />
          </div>

          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#00C2B8]">
            {addon.title}
          </p>

          <h3 className="mt-3 text-xl font-semibold">
            {addon.subtitle}
          </h3>

          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-white/90">
            {addon.description}
          </p>
        </motion.article>
      </div>
    </section>
  );
}