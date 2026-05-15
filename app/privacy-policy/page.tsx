"use client";

import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function PrivacyPolicyPage() {
  return (
    <section className="bg-[#f8fbff] px-6 py-16 sm:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#00C2B8]">
            Privacy Policy
          </p>

          <h1 className="text-3xl font-semibold leading-tight text-[#223f77] sm:text-5xl">
            Insolvo LLC Privacy Policy
          </h1>

          <p className="mt-5 text-sm leading-7 text-gray-600 sm:text-base">
            Effective Date: 2025-2030
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-14 rounded-[32px] border border-[#dcefeb] bg-white p-8 shadow-[0_12px_35px_rgba(34,63,119,0.08)] sm:p-12"
        >
          <div className="space-y-12">
            {/* Section */}
            <div>
              <h2 className="text-2xl font-semibold text-[#223f77]">
                1. Introduction
              </h2>

              <p className="mt-4 text-sm leading-8 text-gray-600">
                We at Insolvo LLC ("we," "our," "us") value your privacy and
                are committed to protecting your personal information. This
                Privacy Policy explains how we collect, use, disclose, and
                safeguard your data, especially in relation to SMS (A2P)
                communications.
              </p>
            </div>

            {/* Section */}
            <div>
              <h2 className="text-2xl font-semibold text-[#223f77]">
                2. Information We Collect
              </h2>

              <div className="mt-4 space-y-4 text-sm leading-8 text-gray-600">
                <p>
                  <span className="font-semibold text-[#223f77]">
                    Contact Information:
                  </span>{" "}
                  Name, phone number, email—especially when you submit it
                  through our website, forms, or SMS opt-in processes.
                </p>

                <p>
                  <span className="font-semibold text-[#223f77]">
                    Usage Data:
                  </span>{" "}
                  IP address, browser type, device identifiers, and cookies
                  when you visit our site.
                </p>
              </div>
            </div>

            {/* Section */}
            <div>
              <h2 className="text-2xl font-semibold text-[#223f77]">
                3. How We Use Your Information
              </h2>

              <ul className="mt-4 space-y-3 text-sm leading-8 text-gray-600">
                <li>
                  • To provide and improve our services.
                </li>

                <li>
                  • To send you SMS messages you’ve opted in to receive—and
                  only after you've explicitly given consent.
                </li>

                <li>
                  • To respond to requests, support inquiries, and provide
                  customer service.
                </li>

                <li>
                  • To analyze site usage and enhance user experience.
                </li>
              </ul>
            </div>

            {/* Section */}
            <div>
              <h2 className="text-2xl font-semibold text-[#223f77]">
                4. SMS (A2P) Communications & Compliance
              </h2>

              <div className="mt-6 space-y-6 text-sm leading-8 text-gray-600">
                <div>
                  <h3 className="font-semibold text-[#223f77]">
                    Program Description
                  </h3>

                  <p className="mt-2">
                    We send SMS communications such as appointment reminders,
                    updates, offers, as part of the Insolvo LLC messaging
                    program.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-[#223f77]">
                    Opt-In Consent
                  </h3>

                  <p className="mt-2">
                    You expressly consent to receive messages by providing your
                    phone number and agreeing to our terms. Messages are sent
                    only with your consent.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-[#223f77]">
                    Opt-Out Instructions
                  </h3>

                  <p className="mt-2">
                    Text STOP to [sender shortcode or number] to unsubscribe.
                    You will receive confirmation, and no further messages will
                    be sent.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-[#223f77]">
                    Rejoin Instructions
                  </h3>

                  <p className="mt-2">
                    To re-opt in after opting out, simply sign up again via the
                    same method you originally used (e.g., form, keyword).
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-[#223f77]">
                    Help Instructions
                  </h3>

                  <p className="mt-2">
                    For assistance, text HELP or contact us at [support email
                    or number].
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-[#223f77]">
                    Message & Data Rates
                  </h3>

                  <p className="mt-2">
                    Message and data rates may apply, depending on your carrier.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-[#223f77]">
                    Carrier Disclaimer
                  </h3>

                  <p className="mt-2">
                    Carriers are not liable for delays or failures in message
                    delivery.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-[#223f77]">
                    Compliance Assurance
                  </h3>

                  <p className="mt-2">
                    This program follows applicable laws, industry standards
                    (e.g., CTIA), and carrier policies.
                  </p>
                </div>

                <div className="rounded-2xl border border-[#00C2B8]/10 bg-[#f8fffe] p-6">
                  <p className="text-sm leading-8 text-gray-700">
                    No mobile information will be shared with third
                    parties/affiliates for marketing/promotional purposes.
                    Information sharing to subcontractors (e.g., for customer
                    service) is permitted. All other use categories exclude
                    text-message opt-in data and consent; such information will
                    not be shared with any third parties.
                  </p>
                </div>
              </div>
            </div>

            {/* Section */}
            <div>
              <h2 className="text-2xl font-semibold text-[#223f77]">
                5. How Information May Be Disclosed
              </h2>

              <p className="mt-4 text-sm leading-8 text-gray-600">
                We do not sell or share your personal information with third
                parties for marketing or promotional purposes. However, we may
                share your data with trusted service providers essential to
                deliver services or for technical support (e.g., hosting,
                customer service). Any such sharing is limited to necessary
                processing and under strict confidentiality terms.
              </p>
            </div>

            {/* Section */}
            <div>
              <h2 className="text-2xl font-semibold text-[#223f77]">
                6. Cookies & Tracking
              </h2>

              <p className="mt-4 text-sm leading-8 text-gray-600">
                We use cookies, web beacons, or similar technologies to improve
                site performance, remember preferences, and analyze traffic.
                You may disable cookies via your browser settings, though this
                may impact usability.
              </p>
            </div>

            {/* Section */}
            <div>
              <h2 className="text-2xl font-semibold text-[#223f77]">
                7. Your Choices & Rights
              </h2>

              <div className="mt-4 space-y-4 text-sm leading-8 text-gray-600">
                <p>
                  <span className="font-semibold text-[#223f77]">
                    Access & Update:
                  </span>{" "}
                  You can request access to or correction of your information
                  by contacting us at privacy-email@insolvo-llc.com.
                </p>

                <p>
                  <span className="font-semibold text-[#223f77]">
                    Opt-Out:
                  </span>{" "}
                  You can stop SMS messages anytime by texting STOP.
                </p>

                <p>
                  <span className="font-semibold text-[#223f77]">
                    Unsubscribe from Emails:
                  </span>{" "}
                  Use the "unsubscribe" link or contact us.
                </p>
              </div>
            </div>

            {/* Section */}
            <div>
              <h2 className="text-2xl font-semibold text-[#223f77]">
                8. Children’s Privacy
              </h2>

              <p className="mt-4 text-sm leading-8 text-gray-600">
                Our services are not directed at individuals under the age of
                18, and we do not knowingly collect personal information from
                minors. If we learn that a minor has provided us with personal
                information without parental consent, we will promptly delete
                it.
              </p>
            </div>

            {/* Section */}
            <div>
              <h2 className="text-2xl font-semibold text-[#223f77]">
                9. Changes to This Policy
              </h2>

              <p className="mt-4 text-sm leading-8 text-gray-600">
                We may update this Privacy Policy from time to time. If changes
                are made, the new version and updated effective date will be
                posted here. Continued use of our services after changes
                constitutes acceptance.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}