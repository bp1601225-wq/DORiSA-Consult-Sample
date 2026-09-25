import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  CheckCircle2,
  Globe2,
} from "lucide-react";

import SectionComponent from "../../Components/Sections";

function ContactUsPage() {
  return (
    <SectionComponent id="contact" className="bg-slate-950">
      {/* Background Details */}
      <div className="pointer-events-none absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-amber-500/10 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-slate-800/60 blur-3xl" />

      <div className="relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/5 px-3 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">
              Contact Us
            </p>
          </div>

          <h2 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
            Let's discuss what's
            <span className="block text-amber-400">
              next for your organization.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
            Whether you are looking to strengthen your strategy, develop your
            team, improve your systems, or pursue new opportunities, our team
            is ready to have a conversation.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-stretch">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 md:p-9"
          >
            {/* Decorative element */}
            <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full border border-amber-400/10" />

            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Start a conversation
              </p>

              <h3 className="mt-3 text-2xl font-bold text-white md:text-3xl">
                We would be pleased to hear from you.
              </h3>

              <p className="mt-4 max-w-lg text-sm leading-7 text-slate-400">
                Tell us a little about your organization, your current
                challenge, or the opportunity you are exploring. We would be
                pleased to discuss how DORiSA Consult can support your next
                step.
              </p>

              {/* Contact Details */}
              <div className="mt-9 space-y-4">
                {/* Email */}
                <div className="group flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.025] p-4 transition duration-300 hover:border-amber-400/20 hover:bg-white/[0.05]">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-400/10 text-amber-400 transition group-hover:bg-amber-400 group-hover:text-slate-950">
                    <Mail size={18} />
                  </div>

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                      Email
                    </p>

                    <a
                      href="mailto:info@dorisaconsult.com"
                      className="mt-1 block text-sm font-medium text-white transition hover:text-amber-400"
                    >
                      info@dorisaconsult.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="group flex items-start gap-4 rounded-2xl border border-white/5 bg-white/[0.025] p-4 transition duration-300 hover:border-amber-400/20 hover:bg-white/[0.05]">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-400/10 text-amber-400 transition group-hover:bg-amber-400 group-hover:text-slate-950">
                    <Phone size={18} />
                  </div>

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                      Phone
                    </p>

                    <div className="mt-1 space-y-1">
                      <a
                        href="tel:+233243704298"
                        className="block text-sm font-medium text-white transition hover:text-amber-400"
                      >
                        +233 24 370 4298
                      </a>

                      <a
                        href="tel:+233209122063"
                        className="block text-sm font-medium text-white transition hover:text-amber-400"
                      >
                        +233 20 912 2063
                      </a>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="group flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.025] p-4 transition duration-300 hover:border-amber-400/20 hover:bg-white/[0.05]">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-400/10 text-amber-400 transition group-hover:bg-amber-400 group-hover:text-slate-950">
                    <MapPin size={18} />
                  </div>

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                      Location
                    </p>

                    <p className="mt-1 text-sm font-medium text-white">
                      Accra, Ghana
                    </p>
                  </div>
                </div>

                {/* Website */}
                <div className="group flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.025] p-4 transition duration-300 hover:border-amber-400/20 hover:bg-white/[0.05]">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-400/10 text-amber-400 transition group-hover:bg-amber-400 group-hover:text-slate-950">
                    <Globe2 size={18} />
                  </div>

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                      Website
                    </p>

                    <a
                      href="https://www.dorisaconsult.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 block text-sm font-medium text-white transition hover:text-amber-400"
                    >
                      www.dorisaconsult.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Trust Statement */}
              <div className="mt-8 border-t border-white/10 pt-7">
                <div className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-amber-400"
                  />

                  <p className="text-sm leading-6 text-slate-400">
                    Every conversation begins with understanding your
                    objectives, challenges, and priorities.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* =========================================================
              CONTACT FORM — COMMENTED OUT FOR NOW
              =========================================================

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="rounded-[2rem] bg-white p-7 shadow-2xl shadow-black/20 md:p-9"
          >
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-amber-600">
                Get in touch
              </p>

              <h3 className="mt-2 text-2xl font-bold text-slate-950">
                Tell us how we can help.
              </h3>
            </div>

            <form className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Full Name
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="Your full name"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-500/10"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Business Email
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="you@company.com"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-500/10"
                />
              </div>

              <div>
                <label
                  htmlFor="organization"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Organization
                </label>

                <input
                  id="organization"
                  type="text"
                  placeholder="Organization name"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-500/10"
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Area of Interest
                </label>

                <select
                  id="service"
                  defaultValue=""
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-700 outline-none transition focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-500/10"
                >
                  <option value="" disabled>
                    Select a service
                  </option>

                  <option value="strategy">
                    Strategic Planning
                  </option>

                  <option value="leadership">
                    Team & Leadership Development
                  </option>

                  <option value="systems">
                    Systems & Operations
                  </option>

                  <option value="growth">
                    Business Growth & Advisory
                  </option>

                  <option value="other">
                    Other
                  </option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  How Can We Help?
                </label>

                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell us briefly about your objectives or challenge..."
                  className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-500/10"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-slate-950 px-6 py-4 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                <ArrowUpRight
                  size={17}
                  className="text-amber-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />

                Submit Details
              </motion.button>

              <p className="text-center text-xs leading-5 text-slate-400">
                Your information will be treated with confidentiality and
                used only to respond to your inquiry.
              </p>
            </form>
          </motion.div>

          ========================================================= */}

          {/* Consultation CTA */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative flex min-h-[480px] flex-col justify-between overflow-hidden rounded-[2rem] border border-amber-400/10 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-7 md:p-9"
          >
            {/* Decorative circles */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-amber-400/10" />

            <div className="pointer-events-none absolute -bottom-32 -left-20 h-64 w-64 rounded-full bg-amber-400/5 blur-3xl" />

            <div className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-400 text-slate-950">
                <ArrowUpRight size={22} />
              </div>

              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-amber-400">
                Let's Build Forward
              </p>

              <h3 className="mt-3 max-w-md text-3xl font-bold leading-tight text-white md:text-4xl">
                Meaningful change begins with the right conversation.
              </h3>

              <p className="mt-5 max-w-md text-sm leading-7 text-slate-400">
                From strategic direction to people and organizational
                development, we work with organizations to turn challenges
                into purposeful opportunities for growth.
              </p>
            </div>

            <div className="relative mt-10">
              <div className="border-t border-white/10 pt-6">
                <p className="text-xs uppercase tracking-[0.16em] text-slate-600">
                  DORiSA Consult
                </p>

                <p className="mt-2 text-sm font-medium text-slate-300">
                  Strategy · People · Systems · Growth
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mt-16 border-t border-white/10 pt-7"
        >
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <p className="text-sm text-slate-500">
              DORiSA Consult — Strategy, People, Systems & Growth.
            </p>

            <p className="text-xs uppercase tracking-[0.15em] text-slate-600">
              Building organizations that last
            </p>
          </div>
        </motion.div>
      </div>
    </SectionComponent>
  );
}

export default ContactUsPage;