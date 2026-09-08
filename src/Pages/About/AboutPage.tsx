import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Building2,
  CheckCircle2,
  Compass,
  Handshake,
  ShieldCheck,
} from "lucide-react";
import SectionComponent from "../../Components/Sections";



const principles = [
  {
    icon: Compass,
    title: "Clarity",
    description:
      "We bring structure and clarity to complex business challenges.",
  },
  {
    icon: Handshake,
    title: "Partnership",
    description:
      "We work alongside our clients to develop solutions that are practical and sustainable.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    description:
      "We are committed to professionalism, accountability, and responsible business practice.",
  },
];

function AboutPage() {
  return (
    <SectionComponent
      id="about"
      className="bg-white"
    >
      {/* Header */}
      <div className="grid items-end gap-10 lg:grid-cols-[1fr_1.3fr]">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-semibold tracking-[0.2em] text-amber-600">
            About 
            <span className="m-1 text-blue-900 font-bold">  
            DORiSA
            </span>
           Consult
          </p>

          <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-slate-950 md:text-5xl">
            Building stronger organizations through
            <span className="text-amber-600"> purposeful growth.</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-2xl text-base leading-8 text-slate-600 md:text-lg"
        >
          DORiSA Consult is a business consulting firm focused on helping
          organizations strengthen their strategy, people, systems, and
          operations. We work with leaders and teams to turn ideas into
          practical action and create foundations for sustainable growth.
        </motion.p>
      </div>

      {/* Main About Content */}
      <div className="mt-20 grid gap-14 lg:grid-cols-2 lg:items-center">
        {/* Corporate Visual */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-[2rem] bg-slate-950">
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85"
              alt="Business professionals collaborating in a meeting"
              className="h-[500px] w-full object-cover opacity-80"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-500 text-white">
                  <Building2 size={21} />
                </div>

                <div>
                  <p className="text-xs font-medium uppercase tracking-widest text-slate-300">
                    DORiSA Consult
                  </p>

                  <p className="mt-1 text-lg font-semibold text-white">
                    Strategy. People. Systems. Growth.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="absolute -bottom-7 -right-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-xl md:-right-8"
          >
            <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
              Our Focus
            </p>

            <p className="mt-2 text-sm font-bold text-slate-950">
              Sustainable Organizational Growth
            </p>
          </motion.div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-600">
            Who We Are
          </p>

          <h3 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
            Practical consulting for organizations ready to grow.
          </h3>

          <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
            <p>
              We believe that sustainable growth requires more than a good
              idea. Organizations need clear direction, capable people,
              effective systems, and disciplined execution.
            </p>

            <p>
              Our approach brings these elements together to help leaders
              understand their challenges, identify opportunities, and
              implement solutions that create measurable value.
            </p>

            <p>
              Whether an organization is establishing its foundation,
              navigating change, or preparing for its next stage of growth,
              we provide the strategic perspective and practical support
              needed to move forward with confidence.
            </p>
          </div>

          {/* Highlights */}
          <div className="mt-8 space-y-4">
            {[
              "Strategy aligned with organizational goals",
              "People and leadership development",
              "Systems designed for efficiency and accountability",
              "Practical solutions focused on sustainable results",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3"
              >
                <CheckCircle2
                  size={19}
                  className="mt-1 shrink-0 text-amber-500"
                />

                <span className="text-sm font-medium text-slate-700">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <motion.button
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.98 }}
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="mt-9 inline-flex items-center gap-2 text-sm font-semibold text-slate-950"
          >
            Learn more about working with us
            <ArrowUpRight
              size={17}
              className="text-amber-600"
            />
          </motion.button>
        </motion.div>
      </div>

      {/* Principles */}
      <div className="mt-24 border-t border-slate-200 pt-16">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-600">
            Our Principles
          </p>

          <h3 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
            How we create value for our clients.
          </h3>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {principles.map((principle, index) => {
            const Icon = principle.icon;

            return (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="border-l-2 border-slate-200 pl-6 transition-colors duration-300 hover:border-amber-500"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-800">
                  <Icon size={19} />
                </div>

                <h4 className="mt-5 text-lg font-bold text-slate-950">
                  {principle.title}
                </h4>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {principle.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionComponent>
  );
}

export default AboutPage;