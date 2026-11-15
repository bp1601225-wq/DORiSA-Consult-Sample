
import { motion } from "framer-motion";
import {
  CalendarDays,
  Clock,
  MapPin,
  Sparkles,
  ArrowRight,
} from "lucide-react";

function UnEstablishedUpcomingEvent() {
  return (
    <section className="bg-white px-4 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-600">
            DORiSA Consult
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight text-[#102B50] md:text-4xl">
            Exciting Things Are Coming!
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
            Our next Business Advocacy Forum is coming this December.
            Get ready for another insightful conversation designed to
            support business growth and development.
          </p>
        </div>

        {/* Event Announcement */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-2xl border border-amber-200 bg-white shadow-sm"
        >
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-amber-100/70 blur-3xl" />

          <div className="relative grid items-center gap-10 p-6 md:p-10 lg:grid-cols-2 lg:gap-16">
            {/* Announcement */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-amber-700">
                <Sparkles size={15} />
                Coming 9th December 2026
              </span>

              <h3 className="mt-6 text-3xl font-bold leading-tight text-[#102B50] md:text-4xl">
                Another Opportunity to Learn, Connect and Grow.
              </h3>

              <p className="mt-5 max-w-lg text-sm leading-7 text-slate-600">
                DORiSA Consult is preparing another engaging edition
                of its Business Advocacy Forum & Counselling Series.
                Stay connected for event announcements and registration
                details.
              </p>

              <div className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#102B50] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#183e70]">
                Stay Connected
                <ArrowRight size={17} />
              </div>
            </div>

            {/* December Event Card */}
            <div className="rounded-2xl border border-amber-100 bg-[#FFFBF3] p-6 md:p-8">
              <div className="flex items-center justify-between">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-700">
                  Save the Date
                </p>
                <CalendarDays className="text-amber-600" size={22} />
              </div>

              <p className="mt-6 text-5xl font-bold tracking-tight text-[#102B50] md:text-6xl">
                9<sup className="text-2xl">th</sup> December
              </p>

              <p className="mt-2 text-lg font-semibold text-slate-500">
                2026
              </p>

              <div className="mt-8 space-y-5 border-t border-amber-200 pt-6">
                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <CalendarDays size={19} className="shrink-0 text-amber-600" />
                  Date to be announced
                </div>

                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <Clock size={19} className="shrink-0 text-amber-600" />
                  Time to be announced
                </div>

                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <MapPin size={19} className="shrink-0 text-amber-600" />
                  Event venue to be announced
                </div>
              </div>

              <div className="mt-8 rounded-lg border border-amber-100 bg-white px-4 py-3">
                <p className="text-sm font-medium text-[#102B50]">
                  Full event details coming soon.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default UnEstablishedUpcomingEvent;
