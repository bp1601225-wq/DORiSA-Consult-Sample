import { motion } from "framer-motion";
import {
  ArrowRight,
  Search,
  Compass,
  Settings2,
  TrendingUp,
} from "lucide-react";

import SectionComponent from "../../Components/Sections";

const approachSteps = [
  {
    number: "01",
    icon: Search,
    title: "Understand",
    description:
      "We begin by understanding your organization, objectives, challenges, and the environment in which you operate.",
  },
  {
    number: "02",
    icon: Compass,
    title: "Strategize",
    description:
      "We translate our understanding into clear priorities and practical strategies aligned with your organizational goals.",
  },
  {
    number: "03",
    icon: Settings2,
    title: "Implement",
    description:
      "We work with your team to turn strategy into action through effective systems, processes, leadership, and execution.",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Grow",
    description:
      "We help establish the structures, capabilities, and discipline needed to achieve sustainable performance and long-term growth.",
  },
];

function ApproachPage() {
  return (
    <SectionComponent
      id="approach"
      className="bg-slate-50"
    >
      {/* Header */}
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
            Our Approach
          </p>

          <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-slate-950 md:text-5xl">
            A structured approach to
            <span className="text-amber-600">
              {" "}
              meaningful results.
            </span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-2xl text-base leading-8 text-slate-600 md:text-lg"
        >
          We believe effective consulting should lead to action. Our
          approach combines strategic thinking with practical execution,
          ensuring that recommendations are relevant, achievable, and
          aligned with the realities of your organization.
        </motion.p>
      </div>

      {/* Process */}
      <div className="relative mt-20">
        {/* Connecting Line */}
        <div className="absolute left-[27px] top-10 hidden h-px w-[calc(100%-54px)] bg-slate-200 lg:block" />

        <div className="grid gap-12 lg:grid-cols-4 lg:gap-6">
          {approachSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.12,
                }}
                className="relative"
              >
                {/* Number / Icon */}
                <div className="relative z-10 flex items-center gap-4">
                  <motion.div
                    whileHover={{
                      scale: 1.08,
                    }}
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-900 shadow-sm"
                  >
                    <Icon size={22} strokeWidth={1.8} />
                  </motion.div>

                  <span className="text-sm font-bold tracking-widest text-amber-600">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="mt-7">
                  <h3 className="text-xl font-bold text-slate-950">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {step.description}
                  </p>
                </div>

                {/* Arrow */}
                {index !== approachSteps.length - 1 && (
                  <div className="mt-6 hidden lg:block">
                    <ArrowRight
                      size={18}
                      className="text-slate-300"
                    />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Philosophy */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="mt-20 overflow-hidden rounded-[2rem] bg-slate-950"
      >
        <div className="grid lg:grid-cols-[1fr_0.8fr]">
          {/* Left */}
          <div className="p-8 md:p-12 lg:p-14">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-400">
              Our Philosophy
            </p>

            <h3 className="mt-4 max-w-2xl text-3xl font-bold leading-tight text-white md:text-4xl">
              Good strategy is only valuable when it can be translated
              into meaningful action.
            </h3>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-400 md:text-base md:leading-8">
              We do not believe in one-size-fits-all solutions. Every
              organization has its own ambitions, people, culture,
              challenges, and opportunities. Our role is to understand
              those realities and develop solutions that work within them.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Practical",
                "Collaborative",
                "Strategic",
                "Sustainable",
              ].map((value) => (
                <span
                  key={value}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-slate-300"
                >
                  {value}
                </span>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="relative flex min-h-[300px] items-center justify-center overflow-hidden border-t border-white/10 bg-slate-900 p-8 lg:border-l lg:border-t-0">
            <div className="absolute h-64 w-64 rounded-full border border-amber-500/20" />

            <div className="absolute h-44 w-44 rounded-full border border-amber-500/20" />

            <div className="absolute h-24 w-24 rounded-full bg-amber-500/10 blur-xl" />

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="relative flex h-28 w-28 items-center justify-center rounded-full border border-amber-500/40"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-500 text-slate-950">
                <TrendingUp size={27} />
              </div>
            </motion.div>

            <div className="absolute bottom-8 left-8 right-8 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Our Commitment
              </p>

              <p className="mt-2 text-sm font-semibold text-white">
                Turning insight into sustainable progress.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Bottom Statement */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-14 flex flex-col gap-4 border-t border-slate-200 pt-8 md:flex-row md:items-center md:justify-between"
      >
        <p className="max-w-2xl text-sm leading-6 text-slate-500">
          From initial assessment to implementation and growth, we remain
          focused on creating practical value for the organizations we
          serve.
        </p>

        <button
          onClick={() =>
            document
              .getElementById("contact")
              ?.scrollIntoView({
                behavior: "smooth",
              })
          }
          className="group flex shrink-0 items-center gap-2 text-sm font-semibold text-slate-950"
        >
          Discuss your objectives
          <ArrowRight
            size={17}
            className="text-amber-600 transition-transform duration-300 group-hover:translate-x-1"
          />
        </button>
      </motion.div>
    </SectionComponent>
  );
}

export default ApproachPage;