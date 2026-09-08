import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import SectionComponent from "../../Components/Sections";


function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <SectionComponent className="min-h-[calc(100vh-80px)]">




      <div className="grid min-h-[75vh] items-center gap-16 lg:grid-cols-2">

        {/* LEFT SIDE */}
        <div>


          {/* Small badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-2"
          >
            <Sparkles
              size={15}
              className="text-amber-600"
            />

            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">
              Strategic Business Consulting
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
            }}
            className="max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight text-slate-950 md:text-6xl lg:text-7xl"
          >
            Transforming
            <span className="block text-amber-600">
              ideas into
            </span>
            lasting impact.
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.3,
            }}
            className="mt-7 max-w-xl text-base leading-8 text-slate-600 md:text-lg"
          >
            We help businesses and organizations develop clear
            strategies, stronger teams, effective systems, and
            sustainable paths to growth.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.45,
            }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={scrollToContact}
              className="group flex items-center justify-center gap-2 rounded-full bg-slate-950 px-7 py-4 text-sm font-semibold text-white shadow-xl shadow-slate-900/10"
            >
              Start a Conversation

              <motion.span
                whileHover={{
                  x: 4,
                  y: -3,
                }}
              >
                <ArrowUpRight
                  size={17}
                  className="text-amber-400"
                />
              </motion.span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={scrollToServices}
              className="rounded-full border border-slate-200 bg-white px-7 py-4 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
            >
              Explore Services
            </motion.button>
          </motion.div>

          {/* Trust points */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.7,
            }}
            className="mt-9 flex flex-wrap gap-x-6 gap-y-3"
          >
            {[
              "Strategic Planning",
              "Team Development",
              "Business Growth",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-sm text-slate-500"
              >
                <CheckCircle2
                  size={16}
                  className="text-amber-500"
                />

                {item}
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT SIDE — CONSULTING VISUAL */}
        <motion.div
          initial={{
            opacity: 0,
            x: 60,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.9,
            delay: 0.2,
          }}
          className="relative"
        >

          {/* Main image */}
          <motion.div
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100 shadow-2xl shadow-slate-900/10"
          >
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85"
              alt="Business consulting team in a meeting"
              className="h-[520px] w-full object-cover"
            />

            {/* Image overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

            {/* Image content */}
            <div className="absolute bottom-0 left-0 right-0 p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
                DORiSA Consult
              </p>

              <h2 className="mt-2 max-w-sm text-2xl font-semibold leading-tight text-white">
                Helping organizations make better decisions.
              </h2>
            </div>
          </motion.div>

          {/* Floating statistic card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: 0.8,
            }}
            className="absolute -bottom-7 -left-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-xl md:-left-10"
          >
            <p className="text-xs font-medium text-slate-400">
              Our philosophy
            </p>

            <p className="mt-1 text-sm font-bold text-slate-900">
              Clarity → Strategy → Growth
            </p>
          </motion.div>

          {/* Floating badge */}
          <motion.div
            animate={{
              y: [0, 6, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -right-4 top-10 rounded-2xl border border-amber-100 bg-white px-5 py-4 shadow-xl md:-right-8"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-50">
                <CheckCircle2
                  size={18}
                  className="text-amber-600"
                />
              </div>

              <div>
                <p className="text-xs text-slate-400">
                  Focused on
                </p>

                <p className="text-sm font-semibold text-slate-900">
                  Sustainable Growth
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </SectionComponent>
  );
}

export default Hero;