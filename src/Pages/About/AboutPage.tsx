import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Globe2,
  HeartHandshake,
  Lightbulb,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";
import SectionComponent from "../../Components/Sections";
import Navbar from "../NavBar/NavBar";
import LeadershipProfile from "../LeaderShip/LeaderShipProfile";


const values = [
  {
    letter: "D",
    title: "Diligence",
    description:
      "Professionalism and excellence to global standards.",
    icon: Target,
  },
  {
    letter: "O",
    title: "Objectivity & Integrity",
    description:
      "Ethical practice with international credibility.",
    icon: ShieldCheck,
  },
  {
    letter: "R",
    title: "Respect for People",
    description:
      "People-centered, inclusive and cross-culturally sensitive.",
    icon: HeartHandshake,
  },
  {
    letter: "I",
    title: "Innovation & Impact",
    description:
      "Globally informed, locally transformative solutions.",
    icon: Lightbulb,
  },
  {
    letter: "S",
    title: "Service & Stewardship",
    description:
      "Committed to mentoring next-generation global leaders.",
    icon: Users,
  },
  {
    letter: "A",
    title: "Accountability",
    description:
      "Transparent, results-driven and internationally accountable.",
    icon: Globe2,
  },
];

const perspectives = [
  {
    number: "01",
    title: "Global Standards, Local Solutions",
    description:
      "We align our interventions with international frameworks, including ISO standards, ILO conventions on Occupational Health & Safety, and global HR best practices, while tailoring solutions to Ghanaian and African realities.",
  },
  {
    number: "02",
    title: "International Experience",
    description:
      "Drawing from over 12 years of facilitating the Association of Business Executives (ABE), UK Programme and engaging with international professional bodies, we bring a cross-cultural understanding of business and management.",
  },
  {
    number: "03",
    title: "Global Competitiveness",
    description:
      "We prepare individuals, entrepreneurs and organizations to operate effectively in evolving global markets, digital economies and international regulatory environments.",
  },
  {
    number: "04",
    title: "Cross-Border Collaboration",
    description:
      "We build partnerships and networks that connect African institutions to global knowledge, talent and opportunities for institutional transformation.",
  },
];

function AboutPage() {
  return (


    <>

    <Navbar />
    <SectionComponent className="bg-white">
      {/* Header */}
      <div className="grid items-end gap-10 lg:grid-cols-[1fr_1.25fr]">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
            About{" "}
            <span className="text-blue-900">
              DORiSA
            </span>{" "}
            Consult
          </p>

          <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-slate-950 md:text-5xl">
            Building people.
            <br />
            <span className="text-amber-600">
              Transforming institutions.
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
          DORiSA Consult is a management consultancy rooted in Ghana and
          Africa, helping individuals and institutions harness their full
          potential, improve performance and achieve sustainable results
          through people-centered, globally relevant solutions.
        </motion.p>
      </div>

      {/* Purpose / Vision / Mission */}
      <div className="mt-20 grid gap-6 lg:grid-cols-3">
        {[
          {
            label: "Our Purpose",
            title:
              "Helping people and institutions reach their full potential.",
            text: "To help individuals and institutions in Ghana, across Africa, and globally harness their full potential, improve performance, and achieve sustainable results through people-centered, globally relevant solutions.",
          },
          {
            label: "Our Vision",
            title:
              "Africa-rooted. Globally respected.",
            text: "To be a globally respected management consultancy, rooted in Ghana and Africa, that builds purpose-driven, high-performing institutions capable of competing and collaborating on the international stage.",
          },
          {
            label: "Our Mission",
            title:
              "World-class expertise with local understanding.",
            text: "To provide world-class consultancy, training, coaching, and counselling services in Human Resource Management, Organizational Development, Leadership, and Administration — integrating international best practices, global standards, and local context.",
          },
        ].map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
            }}
            className="border-t-2 border-slate-200 pt-7 transition-colors duration-300 hover:border-amber-500"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">
              {item.label}
            </p>

            <h3 className="mt-4 text-xl font-bold leading-8 text-slate-950">
              {item.title}
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              {item.text}
            </p>
          </motion.div>
        ))}
      </div>

      {/* International Perspective */}
      <div className="mt-24 grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex h-12 w-12 items-center justify-center bg-blue-900 text-white">
            <Globe2 size={23} />
          </div>

          <p className="mt-7 text-sm font-semibold uppercase tracking-[0.18em] text-amber-600">
            Our International Perspective
          </p>

          <h3 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-slate-950 md:text-4xl">
            Global thinking.
            <br />
            <span className="text-blue-900">
              African context.
            </span>
          </h3>

          <p className="mt-6 max-w-md text-base leading-8 text-slate-600">
            We operate with a global mindset while remaining deeply conscious
            of the realities, opportunities and ambitions of Ghanaian and
            African organizations.
          </p>
        </motion.div>

        <div className="divide-y divide-slate-200 border-y border-slate-200">
          {perspectives.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className="grid gap-4 py-7 md:grid-cols-[70px_1fr]"
            >
              <span className="text-sm font-semibold text-amber-600">
                {item.number}
              </span>

              <div>
                <h4 className="text-lg font-bold text-slate-950">
                  {item.title}
                </h4>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Core Values */}
      <div className="mt-24 border-t border-slate-200 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-600">
            Our Core Values
          </p>

          <h3 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
            The values behind{" "}
            <span className="text-blue-900">
              DORiSA.
            </span>
          </h3>

          <p className="mt-4 text-base leading-8 text-slate-600">
            Six principles shape how we work, how we serve our clients and
            how we contribute to the development of the next generation of
            leaders.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <motion.div
                key={value.letter}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                className="group border-l-2 border-slate-200 pl-6 transition-colors duration-300 hover:border-amber-500"
              >
                <div className="flex items-center gap-4">
                  <span className="text-3xl font-bold text-blue-900">
                    {value.letter}
                  </span>

                  <div className="flex h-9 w-9 items-center justify-center bg-slate-100 text-slate-700 transition-colors group-hover:bg-amber-50 group-hover:text-amber-600">
                    <Icon size={17} />
                  </div>
                </div>

                <h4 className="mt-5 text-lg font-bold text-slate-950">
                  {value.title}
                </h4>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Closing Statement */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="mt-24 border-t border-slate-200 pt-14"
      >
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-600">
              Our Global Edge
            </p>

            <h3 className="mt-4 max-w-4xl text-3xl font-bold leading-tight tracking-tight text-slate-950 md:text-5xl">
              Connecting African potential to{" "}
              <span className="text-blue-900">
                global opportunity.
              </span>
            </h3>
          </div>

          <motion.button
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.98 }}
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-950"
          >
            Work with DORiSA
            <ArrowUpRight
              size={17}
              className="text-amber-600"
            />
          </motion.button>
        </div>

        <p className="mt-8 max-w-4xl text-lg font-medium leading-8 text-slate-600">
          Building People. Transforming Institutions. Connecting Africa to
          the World.
        </p>
      </motion.div>
    </SectionComponent>

    <LeadershipProfile />
    </>

  );
}

export default AboutPage;
