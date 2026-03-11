"use client";

export default function About() {
  return (
    <section
      id="about"
      className="bg-white px-6 py-16 sm:px-8 lg:px-12 lg:py-24"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-7xl">
        {/* TOP CONTENT */}
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#4aa3ff]">
            About Insolvo
          </p>

          <h2
            id="about-heading"
            className="text-3xl font-semibold leading-tight text-[#223f77] sm:text-4xl lg:text-4xl"
          >
            Real estate marketing and lead generation built to help investors
            scale smarter.
          </h2>

          <div className="mt-6 space-y-5 text-base leading-8 text-gray-700 sm:text-lg">
            <p>
              Most real estate investors hit a wall. They either have the time
              to find deals but lack the marketing skills, or they have the
              skills but no time to pick up the phone.{" "}
              <strong>Insolvo LLC</strong> was built to solve that equation.
            </p>

            <p>
              Headquartered in Egypt and operating exclusively on USA time
              zones, we bridge international operational excellence with the
              American real estate market. We do not just offer services. We
              provide a full-scale marketing department that integrates directly
              into your existing CRM, lead generation system, and workflow.
            </p>

            <p>
              We believe productivity, measured through the hard numbers of
              calls, follow-ups, and leads, and creativity, expressed through
              strategy, PPC, messaging, and campaign execution, are not
              opposites. They are partners. That is how we help real estate
              investors, wholesalers, realtors, and developers build a more
              consistent and predictable pipeline.
            </p>

            <p>
              We call it <strong>Scaling Smarter</strong>.
            </p>
          </div>
        </div>

        {/* MISSION + VISION */}
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <article className="about-glow-card group">
            <div className="about-card-inner">
              <span className="inline-flex w-fit rounded-full border border-[#b4edf7]/30 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#b4edf7]">
                Mission
              </span>

              <h3 className="mt-5 text-2xl font-semibold text-white sm:text-3xl">
                Mission Statement
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/85 sm:text-base">
                To empower US real estate professionals, investors,
                wholesalers, realtors, and developers with scalable,
                data-driven marketing solutions that deliver a consistent,
                predictable, and high-quality pipeline of seller leads.
              </p>
            </div>
          </article>

          <article className="about-glow-card group">
            <div className="about-card-inner">
              <span className="inline-flex w-fit rounded-full border border-[#b4edf7]/30 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#b4edf7]">
                Vision
              </span>

              <h3 className="mt-5 text-2xl font-semibold text-white sm:text-3xl">
                Vision Statement
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/85 sm:text-base">
                To become the leading global standard for real estate lead
                generation, proving that with the right systems, integration,
                and talent, geographical distance is irrelevant to market
                dominance.
              </p>
            </div>
          </article>
        </div>
      </div>

      <style jsx>{`
        .about-glow-card {
          position: relative;
          min-height: 320px;
          border-radius: 20px;
          cursor: pointer;
          background: #223f77;
          display: flex;
          overflow: hidden;
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }

        .about-glow-card::before {
          content: "";
          position: absolute;
          inset: 0;
          left: -4px;
          right: -4px;
          top: -4px;
          bottom: -4px;
          margin: auto;
          border-radius: 22px;
          background: linear-gradient(
            -45deg,
            #4aa3ff 0%,
            #b4edf7 50%,
            #223f77 100%
          );
          z-index: -2;
          pointer-events: none;
          transition: transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .about-glow-card::after {
          content: "";
          position: absolute;
          inset: 0;
          z-index: -1;
          border-radius: 22px;
          background: linear-gradient(
            -45deg,
            rgba(74, 163, 255, 0.45) 0%,
            rgba(180, 237, 247, 0.35) 50%,
            rgba(34, 63, 119, 0.65) 100%
          );
          transform: translate3d(0, 0, 0) scale(0.96);
          filter: blur(22px);
          transition: filter 0.35s ease, transform 0.35s ease;
        }

        .about-glow-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 24px 60px rgba(34, 63, 119, 0.18);
        }

        .about-glow-card:hover::before {
          transform: rotate(-2deg) scale(1.02);
        }

        .about-glow-card:hover::after {
          filter: blur(30px);
          transform: translate3d(0, 0, 0) scale(0.98);
        }

        .about-card-inner {
          position: relative;
          z-index: 1;
          display: flex;
          min-height: 320px;
          width: 100%;
          flex-direction: column;
          justify-content: flex-end;
          gap: 0.25rem;
          border-radius: 20px;
          background:
            linear-gradient(
              180deg,
              rgba(255, 255, 255, 0.06) 0%,
              rgba(255, 255, 255, 0.02) 100%
            ),
            #223f77;
          padding: 24px;
        }

        @media (max-width: 767px) {
          .about-glow-card {
            min-height: 280px;
          }

          .about-card-inner {
            min-height: 280px;
            padding: 20px;
          }
        }
      `}</style>
    </section>
  );
}