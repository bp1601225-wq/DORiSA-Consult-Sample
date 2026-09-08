import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CalendarDays,
  Clock3,
  MapPin,
  Users,
} from "lucide-react";
import Navbar from "../NavBar/NavBar";

const upcomingEvents = [
  {
    date: "09",
    month: "SEP",
    year: "2026",
    title: "Building Teams That Last",
    category: "Business Advocacy Forum & Counseling Series",
    description:
      "A practical conversation on HR, systems, delegation, and the foundations required to build teams that perform and organizations that last.",
    time: "7:00 PM – 8:00 PM GMT",
    location: "Google Meet",
  },
  {
    date: "14",
    month: "OCT",
    year: "2026",
    title: "Business Advocacy Forum",
    category: "Business Advocacy Forum & Counseling Series",
    description:
      "An engaging session focused on practical business challenges, leadership, and sustainable organizational growth.",
    time: "7:00 PM – 8:00 PM GMT",
    location: "Google Meet",
  },
  {
    date: "11",
    month: "NOV",
    year: "2026",
    title: "Business Advocacy Forum",
    category: "Business Advocacy Forum & Counseling Series",
    description:
      "A strategic discussion designed to equip business leaders with practical insights for improving organizational performance.",
    time: "7:00 PM – 8:00 PM GMT",
    location: "Google Meet",
  },
];

function Events() {




  return (

<>

    <main className="min-h-screen bg-slate-50">
      {/* Hero */}
<Navbar />

      <section className="relative overflow-hidden bg-slate-950 px-6 py-24 md:px-10 md:py-32">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-amber-500/10 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-slate-800 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">
              DORiSA Consult Events
            </p>

            <h1 className="mt-5 text-5xl font-bold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl">
              Conversations that
              <span className="block text-amber-400">
                create impact.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
              Join our business forums, leadership conversations, and
              counseling sessions designed to provide practical insights
              for individuals, teams, and organizations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-600">
                Upcoming Events
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
                Join the conversation.
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-7 text-slate-500">
              Explore upcoming DORiSA Consult events and reserve your
              place for our next business and leadership conversations.
            </p>
          </div>

          <div className="mt-12 space-y-6">
            {upcomingEvents.map((event, index) => (
              <motion.article
                key={`${event.date}-${event.month}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -3 }}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white transition-shadow duration-300 hover:shadow-xl hover:shadow-slate-900/5"
              >
                <div className="grid lg:grid-cols-[150px_1fr_auto] lg:items-center">
                  {/* Date */}
                  <div className="flex items-center gap-4 border-b border-slate-100 p-6 lg:flex-col lg:items-start lg:border-b-0 lg:border-r">
                    <div>
                      <p className="text-5xl font-bold leading-none text-slate-950">
                        {event.date}
                      </p>

                      <p className="mt-1 text-sm font-bold tracking-widest text-amber-600">
                        {event.month}
                      </p>
                    </div>

                    <p className="text-sm font-medium text-slate-400 lg:mt-2">
                      {event.year}
                    </p>
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8">
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-amber-600">
                      {event.category}
                    </p>

                    <h3 className="mt-3 text-2xl font-bold text-slate-950 md:text-3xl">
                      {event.title}
                    </h3>

                    <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600">
                      {event.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-5">
                      <div className="flex items-center gap-2 text-sm text-slate-500">
                        <Clock3
                          size={16}
                          className="text-amber-600"
                        />
                        {event.time}
                      </div>

                      <div className="flex items-center gap-2 text-sm text-slate-500">
                        <MapPin
                          size={16}
                          className="text-amber-600"
                        />
                        {event.location}
                      </div>
                    </div>
                  </div>

                  {/* Action */}
                  <div className="border-t border-slate-100 p-6 lg:border-l lg:border-t-0 lg:p-8">
                    <motion.button
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.97 }}
                      className="flex w-full items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800 lg:w-auto"
                    >
                      Register
                      <ArrowUpRight
                        size={17}
                        className="text-amber-400"
                      />
                    </motion.button>
                  </div>
                </div>

                <div className="h-1 w-0 bg-amber-500 transition-all duration-500 group-hover:w-full" />
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Attend */}
      <section className="bg-white px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-600">
                Why Attend
              </p>

              <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-slate-950 md:text-5xl">
                More than events.
                <span className="block text-amber-600">
                  Meaningful conversations.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-base leading-8 text-slate-600">
                Our events bring together business leaders, professionals,
                entrepreneurs, and emerging leaders to exchange ideas,
                explore challenges, and discover practical approaches to
                growth.
              </p>
            </motion.div>

            <div className="grid gap-5 sm:grid-cols-2">
              {[
                {
                  icon: Users,
                  title: "Connect",
                  text: "Engage with professionals and business leaders.",
                },
                {
                  icon: CalendarDays,
                  title: "Learn",
                  text: "Gain practical insights you can apply immediately.",
                },
                {
                  icon: ArrowUpRight,
                  title: "Discover",
                  text: "Explore new perspectives and opportunities.",
                },
                {
                  icon: Users,
                  title: "Grow",
                  text: "Develop the capabilities needed for sustainable growth.",
                },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1,
                    }}
                    className="rounded-2xl border border-slate-200 p-6"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-950 text-amber-400">
                      <Icon size={20} />
                    </div>

                    <h3 className="mt-5 text-lg font-bold text-slate-950">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {item.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 px-6 py-20 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-7xl rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12"
        >
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-400">
                Stay Connected
              </p>

              <h2 className="mt-3 text-3xl font-bold text-white">
                Be part of our next conversation.
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-7 text-slate-400">
                Follow DORiSA Consult for upcoming events, business
                insights, and opportunities to connect.
              </p>
            </div>

            <button className="flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-slate-950 transition hover:bg-amber-50">
              Contact Us
              <ArrowUpRight size={17} />
            </button>
          </div>
        </motion.div>
      </section>
    </main>

</>

  );
}

export default Events;