
import { motion } from "framer-motion";
import {
  CalendarDays,
  Clock,
  MapPin,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

function UnEstablishedUpcomingEvent() {
  return (
    <section className="bg-white px-6 py-20 md:px-10 md:py-24">
      <div className="mx-auto max-w-7xl">

        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-600">
            DORiSA Consult Events
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-950 md:text-4xl">
            What's Coming Next?
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500">
            Our next Business Advocacy Forum is coming this December.
            Get ready for another insightful conversation designed to
            support business growth and development.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-2xl bg-slate-950 p-8 md:p-14"
        >
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-amber-500/10 blur-3xl" />

          <div className="relative grid items-center gap-10 lg:grid-cols-2">

            {/* Announcement */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-amber-400">
                <Sparkles size={14} />
                Coming 9th December 2026
              </span>

              <h3 className="mt-7 text-3xl font-bold leading-tight text-white md:text-4xl">
                Another Opportunity to Learn, Connect and Grow.
              </h3>

              <p className="mt-5 max-w-lg text-sm leading-7 text-slate-300">
                DORiSA Consult is preparing another engaging edition
                of its Business Advocacy Forum & Counselling Series.
                Stay connected for event announcements and registration
                details.
              </p>

              <a
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-400"
              >
                Stay Connected
                <ArrowUpRight size={17} />
              </a>
            </div>

            {/* December Event Card */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm md:p-9">
              <p className="text-sm font-semibold uppercase tracking-widest text-amber-400">
                Save the Month
              </p>

              <p className="mt-4 text-6xl font-bold text-white md:text-7xl">
                9<sup>th</sup>  December 
              </p>

              <p className="mt-2 text-lg font-semibold text-slate-300">
                2026
              </p>

              <div className="mt-8 space-y-5 border-t border-white/10 pt-7">

                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <CalendarDays size={19} className="text-amber-400" />
                  Date to be announced
                </div>

                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <Clock size={19} className="text-amber-400" />
                  Time to be announced
                </div>

                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <MapPin size={19} className="text-amber-400" />
                  Event venue to be announced
                </div>

              </div>

              <div className="mt-8 rounded-lg bg-amber-500/10 px-4 py-3">
                <p className="text-sm font-medium text-amber-400">
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
