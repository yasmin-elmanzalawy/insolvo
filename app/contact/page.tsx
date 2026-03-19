"use client";

import { motion } from "framer-motion";
import { useState } from "react";

type IconProps = { className?: string };

function PhoneIcon({ className = "h-5 w-5" }: IconProps) {
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

function MailIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M4 6.5h16A1.5 1.5 0 0 1 21.5 8v8A1.5 1.5 0 0 1 20 17.5H4A1.5 1.5 0 0 1 2.5 16V8A1.5 1.5 0 0 1 4 6.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="m3 8 8.06 5.37a1.7 1.7 0 0 0 1.88 0L21 8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LocationIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 21s7-4.35 7-11a7 7 0 1 0-14 0c0 6.65 7 11 7 11Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

const fadeUp = {
  initial: { opacity: 0, y: 35 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

type FormDataState = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

const initialFormData: FormDataState = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

export default function ContactPage() {
  const [formData, setFormData] = useState<FormDataState>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      const submitData = new FormData();
      submitData.append("access_key", "91cff093-768a-4bd2-b889-dc847e36a19d");
      submitData.append("subject", "New Contact Form Submission");
      submitData.append("from_name", "Insolvo LLC Website");
      submitData.append("name", formData.name);
      submitData.append("email", formData.email);
      submitData.append("phone", formData.phone);
      submitData.append("service", formData.service);
      submitData.append("message", formData.message);
      submitData.append("botcheck", "");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: submitData,
      });

      const result = await response.json();

      if (result.success) {
        setStatus({
          type: "success",
          message: "Your message has been sent successfully.",
        });
        setFormData(initialFormData);
      } else {
        setStatus({
          type: "error",
          message: result.message || "Something went wrong. Please try again.",
        });
      }
    } catch {
      setStatus({
        type: "error",
        message: "Network error. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-[#f8fbff] px-6 py-16 sm:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-stretch gap-8 lg:grid-cols-[1fr_1.15fr]">
          <motion.form
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.16 }}
            onSubmit={handleSubmit}
            className="relative overflow-hidden rounded-[28px] border border-[#dcefeb] bg-white p-6 shadow-[0_12px_35px_rgba(34,63,119,0.08)] sm:p-8"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-[#00C2B8]" />
            <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#00C2B8]/6 blur-2xl" />

            <div className="relative">
              <span className="inline-flex rounded-full bg-[#00C2B8]/8 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#00C2B8]">
                Send a message
              </span>

              <h2 className="mt-5 text-xl font-semibold text-[#223f77]">
                Tell us about your business.
              </h2>

              <p className="mt-4 text-sm leading-7 text-gray-600">
                Fill out the form below and we’ll get back to you with the best next step.
              </p>

              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <label className="text-sm font-medium text-[#223f77]">Name</label>
                  <input
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="mt-2 h-12 w-full rounded-2xl border border-[#dcefeb] bg-[#f8fbff] px-4 text-sm text-[#223f77] outline-none transition-all duration-200 placeholder:text-gray-400 hover:border-[#00C2B8]/40 focus:border-[#00C2B8] focus:ring-4 focus:ring-[#00C2B8]/10"
                  />
                </div>

                <div className="sm:col-span-1">
                  <label className="text-sm font-medium text-[#223f77]">Email</label>
                  <input
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    className="mt-2 h-12 w-full rounded-2xl border border-[#dcefeb] bg-[#f8fbff] px-4 text-sm text-[#223f77] outline-none transition-all duration-200 placeholder:text-gray-400 hover:border-[#00C2B8]/40 focus:border-[#00C2B8] focus:ring-4 focus:ring-[#00C2B8]/10"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="text-sm font-medium text-[#223f77]">Phone</label>
                  <input
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone number"
                    className="mt-2 h-12 w-full rounded-2xl border border-[#dcefeb] bg-[#f8fbff] px-4 text-sm text-[#223f77] outline-none transition-all duration-200 placeholder:text-gray-400 hover:border-[#00C2B8]/40 focus:border-[#00C2B8] focus:ring-4 focus:ring-[#00C2B8]/10"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="text-sm font-medium text-[#223f77]">Service Needed</label>
                  <select
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="mt-2 h-12 w-full rounded-2xl border border-[#dcefeb] bg-[#f8fbff] px-4 text-sm text-[#223f77] outline-none transition focus:border-[#00C2B8] focus:ring-4 focus:ring-[#00C2B8]/10"
                  >
                    <option value="">Choose a service</option>
                    <option value="Cold Calling Campaign">Cold Calling Campaign</option>
                    <option value="PPC Campaign">PPC Campaign</option>
                    <option value="SMS Blasting Campaign">SMS Blasting Campaign</option>
                    <option value="Sales Consulting Add-On Service">
                      Sales Consulting Add-On Service
                    </option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label className="text-sm font-medium text-[#223f77]">Message</label>
                  <textarea
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your goals"
                    className="mt-2 w-full rounded-2xl border border-[#dcefeb] bg-[#f8fbff] px-4 py-3 text-sm text-[#223f77] outline-none transition-all duration-200 placeholder:text-gray-400 hover:border-[#00C2B8]/40 focus:border-[#00C2B8] focus:ring-4 focus:ring-[#00C2B8]/10"
                  />
                </div>

                <input
                  type="checkbox"
                  name="botcheck"
                  className="hidden"
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              {status && (
                <div
                  className={`mt-6 rounded-2xl px-4 py-3 text-sm font-medium ${
                    status.type === "success"
                      ? "border border-green-200 bg-green-50 text-green-700"
                      : "border border-red-200 bg-red-50 text-red-700"
                  }`}
                >
                  {status.message}
                </div>
              )}

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
               
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center rounded-full bg-[#00C2B8] px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-[#00b2aa] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>
            </div>
          </motion.form>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="relative p-2 sm:p-4"
          >
            <div className="relative">
              <span className="inline-flex rounded-full bg-[#00C2B8]/8 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#00C2B8]">
                Reach us directly
              </span>

              <h2 className="mt-5 text-xl font-semibold text-[#223f77]">
                We’re ready to talk strategy.
              </h2>

              <p className="mt-4 text-sm leading-7 text-gray-600">
                Send us a message or contact us directly using the details below.
                We’ll get back to you as soon as possible.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-4 rounded-2xl border border-[#00C2B8]/10 bg-[#f8fffe] px-4 py-4 shadow-sm">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#00C2B8]/15 bg-[#00C2B8]/8 text-[#00C2B8]">
                    <LocationIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00C2B8]">
                      Address
                    </p>
                    <p className="mt-2 text-sm text-gray-700">
                      2636 Capitol Avenue, Cheyenne, WY 82001
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-2xl border border-[#00C2B8]/10 bg-[#f8fffe] px-4 py-4 shadow-sm">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#00C2B8]/15 bg-[#00C2B8]/8 text-[#00C2B8]">
                    <PhoneIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00C2B8]">
                      Phone
                    </p>
                    <a
                      href="tel:+15676543691"
                      className="mt-2 inline-block text-sm text-gray-700 hover:text-[#00C2B8]"
                    >
                      +1 (567) 654-3691
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-2xl border border-[#00C2B8]/10 bg-[#f8fffe] px-4 py-4 shadow-sm">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#00C2B8]/15 bg-[#00C2B8]/8 text-[#00C2B8]">
                    <MailIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00C2B8]">
                      Email
                    </p>
                    <a
                      href="mailto:info@insolvo-llc.com"
                      className="mt-2 inline-block text-sm text-gray-700 hover:text-[#00C2B8]"
                    >
                      info@insolvo-llc.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}