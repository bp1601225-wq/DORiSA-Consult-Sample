
import { motion } from "framer-motion";
import {
  Video,
  ArrowUpRight,
  // Youtube,
  Radio,
  CalendarDays,
  Sparkles,
} from "lucide-react";

import SectionComponent from "../../Components/Sections";
import { videos } from "./Sessions";

function Dorisa_Sessions() {
  const featuredVideo = videos[0];

  if (!featuredVideo) return null;

  return (
    <>
      <SectionComponent className="bg-white">

        {/* INTRODUCTION */}
        <section className="relative overflow-hidden bg-[#f8f9fb]">

          <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-amber-50/70 to-transparent" />

          <div className="relative mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-3xl"
            >

              <div className="mb-7 flex items-center gap-3">
                <span className="h-[2px] w-10 bg-amber-500" />
                <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-blue-900">
                  DORiSA Consult / Media
                </span>
              </div>

              <h1 className="text-5xl font-extrabold leading-[1.1] tracking-tight text-[#102b50] md:text-7xl">
                Conversations
                <br />
                That <span className="text-amber-500">Create</span>
                <br />
                <span className="font-light">Possibilities.</span>
              </h1>

              <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">

                <p className="max-w-xl text-base leading-8 text-slate-600">
                  Welcome to the DORiSA Consult media space. Discover
                  meaningful conversations, expert perspectives and
                  business insights through our programmes and
                  professional engagements.
                </p>

                <div className="shrink-0 border-l-2 border-amber-500 pl-5">
                  <p className="text-sm font-bold text-blue-950">
                    Knowledge. Perspective. Growth.
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Strategic Consulting for Sustainable Growth
                  </p>
                </div>

              </div>

            </motion.div>

          </div>
        </section>

        {/* FEATURED VIDEO */}
        <section className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-9 flex items-center justify-between"
          >
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-amber-600">
                Featured Recording
              </p>

              <h2 className="mt-3 text-2xl font-bold text-[#102b50] md:text-3xl">
                Watch Our Latest Session
              </h2>
            </div>

            <div className="hidden items-center gap-2 border border-slate-200 px-4 py-2 sm:flex">
              <Radio size={14} className="text-amber-500" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600">
                Video Feature
              </span>
            </div>
          </motion.div>

          {/* CINEMATIC VIDEO */}
    
{/* CINEMATIC VIDEO */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
  className="group relative"
>
  <div className="absolute -inset-2 border border-amber-200/70" />

  <div className="relative z-10 aspect-video overflow-hidden bg-[#102b50]">
    <iframe
      className="absolute inset-0 h-full w-full"
      src={`https://www.youtube-nocookie.com/embed/${featuredVideo.youtubeId}?rel=0`}
      title={featuredVideo.title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    />
  </div>
</motion.div>


          {/* VIDEO STORY */}
          <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_300px]">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >

              <div className="mb-5 flex items-center gap-3">
                <span className="h-8 w-1 bg-amber-500" />
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-900">
                  About This Session
                </p>
              </div>

              <h2 className="max-w-2xl text-2xl font-bold leading-snug text-[#102b50] md:text-3xl">
                {featuredVideo.title}
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-8 text-slate-600 md:text-base">
                {featuredVideo.description}
              </p>

              <p className="mt-5 max-w-2xl text-sm leading-8 text-slate-600">
                At DORiSA Consult, we believe that meaningful
                conversations can shape better decisions and create
                opportunities for sustainable business growth.
                Through our Business Advocacy Forum and Counselling
                Series, we bring together professionals, entrepreneurs
                and industry experts to explore ideas that matter.
              </p>

            </motion.div>

            {/* SESSION DETAILS */}
            <motion.aside
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="h-fit border border-slate-200 bg-[#fafafa] p-7"
            >

              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-600">
                Session Information
              </p>

              <div className="mt-7 space-y-6">

                <div className="flex items-start gap-4">
                  <Video size={19} className="mt-1 text-amber-500" />
                  <div>
                    <p className="text-xs text-slate-400">
                      Programme
                    </p>
                    <p className="mt-1 text-sm font-semibold text-blue-950">
                      Business Advocacy Forum
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CalendarDays size={19} className="mt-1 text-amber-500" />
                  <div>
                    <p className="text-xs text-slate-400">
                      Year
                    </p>
                    <p className="mt-1 text-sm font-semibold text-blue-950">
                      {featuredVideo.date}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Sparkles size={19} className="mt-1 text-amber-500" />
                  <div>
                    <p className="text-xs text-slate-400">
                      Presented by
                    </p>
                    <p className="mt-1 text-sm font-semibold text-blue-950">
                      DORiSA Consult
                    </p>
                  </div>
                </div>

              </div>

              <a
                href={`https://www.youtube.com/watch?v=${featuredVideo.youtubeId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-9 flex w-full items-center justify-center gap-3 bg-[#102b50] px-5 py-4 text-sm font-bold text-white transition hover:bg-amber-500"
              >
                Watch Full Video
                <ArrowUpRight size={17} />
              </a>

            </motion.aside>

          </div>

        </section>

        {/* BRAND CLOSING */}
        <section className="border-t border-slate-100 bg-[#fafafa]">

          <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-16 md:flex-row md:items-center md:justify-between md:px-10">

            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-amber-600">
                DORiSA Consult
              </p>

              <h2 className="mt-3 text-2xl font-bold text-[#102b50] md:text-3xl">
                Strategic Consulting for Sustainable Growth.
              </h2>

              <p className="mt-3 text-sm text-slate-500">
                Follow our journey and stay connected to conversations
                that inspire progress.
              </p>
            </div>

            <a

              href="https://www.youtube.com/@DORiSAConsult-v2q"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-3 border border-[#102b50] px-7 py-4 text-sm font-bold text-[#102b50] transition hover:bg-[#102b50] hover:text-white"
            >
              {/* <Youtube size={19} /> */}
              Visit Our YouTube Channel
              <ArrowUpRight size={17} />
            </a>

          </div>

        </section>

      </SectionComponent>
    </>
  );
}

export default Dorisa_Sessions;
