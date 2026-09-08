import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Award,
  BriefcaseBusiness,
  GraduationCap,
  HeartHandshake,
  Lightbulb,
  Target,
  Users,
} from "lucide-react";

import Image from "../../assets/der.jpeg";

const expertise = [
  "Strategic Human Resource Management",
  "Organizational Development",
  "Strategic Leadership",
  "Operations & Performance Management",
  "Employee Relations",
  "Entrepreneurship",
  "Administration & General Management",
  "Counselling Psychology",
  "Occupational Health & Safety",
  "Management Consultancy",
];

const memberships = [
  "Chartered Institute of Human Resource Management, Ghana",
  "Chartered Institute of Administrators and Management Consultants, Ghana",
  "Chartered Institute of Financial and Investment Analysts, Ghana",
  "Ghana Psychology Council",
  "Chartered Institute of Leadership and Governance",
  "Chartered Institute of Credit Management",
  "Ghana Academy of Christian Counsellors",
];

const values = [
  {
    letter: "D",
    title: "Diligence",
    description: "Professionalism and excellence to global standards.",
    icon: Target,
  },
  {
    letter: "O",
    title: "Objectivity & Integrity",
    description: "Ethical practice with international credibility.",
    icon: HeartHandshake,
  },
  {
    letter: "R",
    title: "Respect for People",
    description: "People-centered, inclusive and cross-culturally sensitive.",
    icon: Users,
  },
  {
    letter: "I",
    title: "Innovation & Impact",
    description: "Globally informed, locally transformative solutions.",
    icon: Lightbulb,
  },
];

function LeadershipProfile() {
  return (
    <section className="border-t border-slate-200 bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
            Leadership
          </p>

          <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-slate-950 md:text-5xl">
            Meet the leadership behind{" "}
            <span className="text-blue-900">
              DORiSA Consult.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
            Experience, expertise and a deep commitment to developing people
            and transforming institutions.
          </p>
        </motion.div>

        {/* Main Profile */}
        <div className="mt-16 grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="lg:sticky lg:top-28"
          >
            <div className="relative overflow-hidden bg-slate-100">

              <img
                src={Image}
                alt="Dr. Doris Aryee - Founder and Executive Director of DORiSA Consult"
                className="h-[520px] w-full object-cover object-top"
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

              {/* Name on Image */}
              <div className="absolute bottom-0 left-0 right-0 p-7 md:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">
                  Founder & Executive Director
                </p>

                <h3 className="mt-2 text-2xl font-bold text-white md:text-3xl">
                  Dr. Doris Aryee
                </h3>
              </div>

              {/* Experience Badge */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.4,
                }}
                className="absolute right-5 top-5 border border-white/30 bg-white/95 px-5 py-4 shadow-xl backdrop-blur-sm animate-bounce"
              >
                <p className="text-2xl font-bold text-blue-900">
                  20+
                </p>

                <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-500">
                  Years Experience
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Profile Content */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-600">
              Dr. Doris Aryee
            </p>

            <h3 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
              Founder & Executive Director
            </h3>

            <div className="mt-7 space-y-5 text-base leading-8 text-slate-600">
              <p>
                Dr. Doris Aryee is a Chartered Administrator, Management
                Expert, Counselling Psychologist, and Lecturer with over
                20 years of experience spanning academia, industry, and
                organizational development.
              </p>

              <p>
                She is the Founder and Executive Director of DORiSA Consult,
                a management consultancy driven by a vision to build
                people-centered institutions that lead with purpose, deliver
                with integrity, and grow through transformation.
              </p>

              <p>
                She is an experienced educator, facilitator, researcher,
                consultant, mentor, and coach with proven expertise in
                developing individuals and organizations to improve
                performance, solve problems, and achieve sustainable results.
              </p>

              <p>
                Dr. Aryee is a Full-time Lecturer at Pentecost University,
                Faculty of Business Administration, Department of Management
                Studies, where she focuses on institutional transformation
                through innovation in teaching and learning, talent
                management, and development strategy.
              </p>

              <p>
                She has served as a Course Facilitator for the Association
                of Business Executives (ABE), UK Programme for over 12 years
                and also serves as an Adjunct Lecturer at Accra Metropolitan
                University, KAAF University, and Crux Training Institute.
              </p>
            </div>

            {/* Education */}
            <div className="mt-12 border-t border-slate-200 pt-10">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center bg-blue-900 text-white">
                  <GraduationCap size={19} />
                </div>

                <h4 className="text-xl font-bold text-slate-950">
                  Educational Background
                </h4>
              </div>

              <div className="mt-6 space-y-3">
                {[
                  "Doctorate in Business Administration (DBA)",
                  "Master of Business Administration (MBA) – International Management",
                  "Graduate and Postgraduate Diploma in Management Practice",
                  "ACCA Part 1",
                  "Professional qualifications in Human Resource Development, Marketing Management, Counselling & Psychology, Leadership & Governance, Credit Management, and Finance & Investment Analysis",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />

                    <p className="text-sm leading-7 text-slate-600">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Academic & Administrative Experience */}
            <div className="mt-12 border-t border-slate-200 pt-10">
              <h4 className="text-xl font-bold text-slate-950">
                Academic & Administrative Experience
              </h4>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                Dr. Aryee has held several academic, professional, and
                administrative positions throughout her career, including:
              </p>

              <div className="mt-6 space-y-3">
                {[
                  "Administrative Assistant and Assistant Registrar, Vice Rector's Office and Faculty of Business Administration",
                  "Executive Secretary to the Dean of Graduate School",
                  "Pioneer Administrative Manager, Faculty of Law",
                  "Pioneer Manager, Church of Pentecost Chairman Education Foundation (COPCEF)",
                  "Pioneer Production Coordinator, PentVars Business Journal (International Refereed Journal)",
                  "Hall Tutor, Arnan Hall",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />

                    <p className="text-sm leading-7 text-slate-600">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Expertise */}
            <div className="mt-12 border-t border-slate-200 pt-10">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center bg-blue-900 text-white">
                  <BriefcaseBusiness size={18} />
                </div>

                <h4 className="text-xl font-bold text-slate-950">
                  Areas of Expertise
                </h4>
              </div>

              <div className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                {expertise.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />

                    <p className="text-sm leading-7 text-slate-600">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Professional Memberships */}
            <div className="mt-12 border-t border-slate-200 pt-10">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center bg-blue-900 text-white">
                  <Award size={18} />
                </div>

                <h4 className="text-xl font-bold text-slate-950">
                  Professional Memberships
                </h4>
              </div>

              <div className="mt-6 space-y-3">
                {memberships.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />

                    <p className="text-sm leading-7 text-slate-600">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mt-24 border-t border-slate-200 pt-14"
        >
          <div className="grid gap-8 lg:grid-cols-[0.35fr_1fr_auto] lg:items-end">

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-600">
                Philosophy
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold leading-tight tracking-tight text-slate-950 md:text-4xl">
                Developing people.
                <br />

                <span className="text-blue-900">
                  Unlocking potential.
                </span>
              </h3>

              <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
                Dr. Aryee is deeply committed to mentoring youth and helping
                people harness their full potential. Her philosophy reflects
                DORiSA Consult's broader commitment to building capable
                individuals and purpose-driven institutions.
              </p>
            </div>

            <motion.a
              href="#contact"
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-950"
            >
              Connect with DORiSA

              <ArrowUpRight
                size={17}
                className="text-amber-600"
              />
            </motion.a>
          </div>
        </motion.div>

        {/* Leadership Values */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mt-20 border-t border-slate-200 pt-14"
        >
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-600">
              Leadership Values
            </p>

            <h3 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
              Principles that shape{" "}
              <span className="text-blue-900">
                our leadership.
              </span>
            </h3>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <motion.div
                  key={value.letter}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="border-l-2 border-slate-200 pl-5 transition-colors duration-300 hover:border-amber-500"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-bold text-blue-900">
                      {value.letter}
                    </span>

                    <Icon
                      size={17}
                      className="text-amber-600"
                    />
                  </div>

                  <h4 className="mt-4 text-base font-bold text-slate-950">
                    {value.title}
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default LeadershipProfile;
