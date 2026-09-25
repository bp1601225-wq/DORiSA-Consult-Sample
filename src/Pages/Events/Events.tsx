import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CalendarDays,
  Users,
} from "lucide-react";
import Navbar from "../NavBar/NavBar";
import EventsSection from "./EventsSection";
import Logo from "../../assets/Logo.jpg"


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

            <h1 className="mt-5 text-5xl font-bold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl animate-pulse">
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




            <p className="max-w-xl text-sm leading-7 text-slate-500 flex flex-col">

<span className="animate-bounce">

    <img src={Logo} alt=""  width={250}/>
</span>


              Explore upcoming DORiSA Consult events and reserve your
              place for our next business and leadership conversations.

            </p>


          </div>

          <div className="mt-12 space-y-6">
     <EventsSection />
         
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
<section className="relative overflow-hidden bg-slate-950 px-6 py-24 md:px-10">
  {/* Background Glow */}
  <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-amber-500/10 blur-[120px]" />

  <div className="pointer-events-none absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-slate-800/60 blur-3xl" />

  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.8 }}
    className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.07] via-white/[0.035] to-transparent px-7 py-10 md:px-12 md:py-14"
  >
    {/* Decorative Line */}
    <div className="absolute left-0 top-0 h-px w-40 bg-gradient-to-r from-amber-400 to-transparent" />

    <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
      {/* Content */}
      <div className="max-w-2xl">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-amber-400" />

          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-400">
            Stay Connected
          </p>
        </div>

        <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
          Let's shape the future of your
          <span className="text-amber-400"> organization together.</span>
        </h2>

        <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400 md:text-base">
          Follow DORiSA Consult for thoughtful insights, professional
          perspectives, upcoming events, and conversations focused on
          strategy, people, systems, and sustainable growth.
        </p>
      </div>

      {/* Brand Mark / Message */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="relative shrink-0"
      >
        <div className="flex h-32 w-32 items-center justify-center rounded-full border border-amber-400/20 bg-amber-400/5 md:h-40 md:w-40">
          <div className="flex h-24 w-24 items-center justify-center rounded-full border border-white/10 md:h-30 md:w-30">
            <div className="text-center">
              <p className="text-lg font-bold tracking-tight text-white">
                DORiSA
              </p>

              <p className="mt-1 text-[9px] font-medium uppercase tracking-[0.2em] text-amber-400">
                Consult
              </p>
            </div>
          </div>
        </div>

        {/* Small Accent */}
        <span className="absolute -right-1 top-5 h-2.5 w-2.5 rounded-full bg-amber-400 shadow-lg shadow-amber-400/30" />
      </motion.div>
    </div>

    {/* Bottom Divider */}
    <div className="mt-10 border-t border-white/10 pt-6">
      <div className="flex flex-col gap-3 text-xs md:flex-row md:items-center md:justify-between">
        <p className="text-slate-500">
          DORiSA Consult — Strategy, People, Systems & Growth.
        </p>

        <p className="font-medium uppercase tracking-[0.16em] text-slate-600">
          Building organizations that last
        </p>
      </div>
    </div>
  </motion.div>
</section>
    </main>

</>

  );
}

export default Events;