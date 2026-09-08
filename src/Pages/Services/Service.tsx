import { motion } from "framer-motion";
import {
  BarChart3,
  Users,
  Settings2,
  Target,
  ArrowUpRight,
} from "lucide-react";
import SectionComponent from "../../Components/Sections";


const services = [
  {
    number: "01",
    icon: Target,
    title: "Strategic Planning",
    description:
      "We help organizations define clear priorities, make better decisions, and build practical strategies that move the business forward.",
    points: [
      "Business strategy",
      "Strategic planning",
      "Growth planning",
    ],
  },
  {
    number: "02",
    icon: Users,
    title: "Team & Leadership Development",
    description:
      "We strengthen teams and leaders through better communication, delegation, accountability, and leadership practices.",
    points: [
      "Leadership development",
      "Team building",
      "Performance improvement",
    ],
  },
  {
    number: "03",
    icon: Settings2,
    title: "Systems & Operations",
    description:
      "We help businesses build simple and effective systems that improve efficiency, accountability, and everyday operations.",
    points: [
      "Business systems",
      "Process improvement",
      "Operational efficiency",
    ],
  },
  {
    number: "04",
    icon: BarChart3,
    title: "Business Growth & Advisory",
    description:
      "We provide practical guidance to help businesses identify opportunities, solve challenges, and build sustainable growth.",
    points: [
      "Business advisory",
      "Growth opportunities",
      "Performance analysis",
    ],
  },
];

function ServicesPage() {
  return (
    <SectionComponent
      id="services"
      className="bg-slate-50"
    >
      {/* Section Header */}
      <div className="mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-5 inline-flex items-center rounded-full border border-amber-200 bg-amber-50 px-4 py-2"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">
            What We Do
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl"
        >
          Solutions designed to move
          <span className="text-amber-600"> your business forward.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg"
        >
          We work with businesses and organizations to turn challenges
          into opportunities through practical strategy, stronger teams,
          effective systems, and sustainable growth.
        </motion.p>
      </div>

      {/* Services Grid */}
      <div className="mt-16 grid gap-6 md:grid-cols-2">
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 transition-shadow duration-300 hover:shadow-xl hover:shadow-slate-900/5 md:p-8"
            >
              {/* Number */}
              <div className="absolute right-7 top-6 text-5xl font-bold text-slate-100 transition-colors duration-300 group-hover:text-amber-50">
                {service.number}
              </div>

              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.08, rotate: 3 }}
                className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-white"
              >
                <Icon size={25} strokeWidth={1.8} />
              </motion.div>

              {/* Content */}
              <div className="relative mt-7">
                <h3 className="text-2xl font-bold text-slate-950">
                  {service.title}
                </h3>

                <p className="mt-4 max-w-lg text-sm leading-7 text-slate-600">
                  {service.description}
                </p>

                {/* Points */}
                <div className="mt-6 space-y-3">
                  {service.points.map((point) => (
                    <div
                      key={point}
                      className="flex items-center gap-3 text-sm font-medium text-slate-700"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                      {point}
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Arrow */}
              <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-6">
                <span className="text-sm font-semibold text-slate-500 transition-colors group-hover:text-slate-900">
                  Learn more
                </span>

                <motion.div
                  whileHover={{ x: 4, y: -4 }}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition-colors group-hover:border-amber-300 group-hover:bg-amber-50"
                >
                  <ArrowUpRight size={18} />
                </motion.div>
              </div>

              {/* Hover accent */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-amber-500 transition-all duration-500 group-hover:w-full" />
            </motion.div>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="mt-14 rounded-3xl bg-slate-950 px-7 py-10 md:px-10"
      >
        <div className="flex flex-col items-start justify-between gap-7 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-amber-400">
              Let's build something better
            </p>

            <h3 className="mt-2 max-w-2xl text-2xl font-bold text-white md:text-3xl">
              Have a challenge your organization needs to solve?
            </h3>
          </div>

          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-amber-50"
          >
            Let's Talk
            <ArrowUpRight size={17} />
          </motion.button>
        </div>
      </motion.div>
    </SectionComponent>
  );
}

export default ServicesPage;