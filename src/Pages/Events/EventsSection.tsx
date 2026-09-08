import { motion } from "framer-motion";
import {
  CalendarDays,
  ExternalLink,
  Image,
  Newspaper,
} from "lucide-react";
import SectionComponent from "../../Components/Sections";
import { EventsNews } from "./EventsData";

import { useState } from "react";
import ImageModal from "../../Components/Modal";


function EventsSection() {

const [selectedImage, setSelectedImage] = useState<string | null>(null);

console.log(`selected image is`, selectedImage)


  return (
<>
    <SectionComponent id="events" className="bg-slate-50">
      {/* Header */}
      <div className="mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-2"
        >
          <CalendarDays size={16} className="text-amber-600" />

          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">
            DORiSA Events
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl"
        >
          Conversations that create
          <span className="text-amber-600"> impact.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-5 text-base leading-8 text-slate-600 md:text-lg"
        >
          Discover upcoming events, insights, photos and conversations
          from DORiSA Consult.
        </motion.p>
      </div>

      {/* Posts */}
<div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
  {EventsNews.EventsPost().map((post, index) => (
    <motion.article
      key={post.title}
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
      }}
      whileHover={{ y: -6 }}
      className="group overflow-hidden rounded-3xl border border-slate-200 bg-white"
    >
      {/* Image */}
      <div className="relative h-60 overflow-hidden">
  {post.image ? (
    <img
      src={post.image}
      alt={post.title}
      onClick={() => setSelectedImage(post.image)}
      className="relative z-10 h-full w-full cursor-pointer object-cover transition duration-700 group-hover:scale-105"
    />
  ) : (
    <div className="flex h-full items-center justify-center bg-slate-100">
      <Image size={40} className="text-slate-400" />
    </div>
  )}

  {/* Image Overlay */}
  <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

  {/* News Label */}
  <div className="pointer-events-none absolute left-5 top-5 z-30">
    <span className="inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-2 text-xs font-semibold text-slate-800 backdrop-blur">
      <Newspaper size={14} />
      Media Coverage
    </span>
  </div>
</div>

      {/* Content */}
      <div className="p-6">
        {/* Date */}
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-amber-600">
          {post.date}
        </p>

        {/* Title */}
        <h3 className="mt-3 text-xl font-bold leading-tight text-slate-950">
          {post.title}
        </h3>

        {/* Description */}
        <p className="mt-3 text-sm leading-7 text-slate-600">
          {post.description}
        </p>

        {/* Media Sources */}
        {post.sources && post.sources.length > 0 && (
          <div className="mt-6 border-t border-slate-100 pt-5">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
              Read the Coverage
            </p>

            <div className="flex flex-wrap gap-2">
              {post.sources.map((source) => (
                <a
                  key={source.name}
                  href={source.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-amber-400 hover:text-amber-600"
                >
                  {source.name}

                  <ExternalLink
                    size={12}
                    className="transition-transform duration-300 group-hover:translate-x-0.5"
                  />
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.article>
  ))}
</div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-14 flex flex-col items-center justify-between gap-5 rounded-3xl border border-slate-200 bg-white p-7 md:flex-row md:p-9"
      >
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-amber-600">
            Stay Connected
          </p>

          <h3 className="mt-2 text-2xl font-bold text-slate-950">
            Follow our latest events and insights.
          </h3>
        </div>

        <a
          href="#"
          className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          View More
          <ExternalLink size={16} />
        </a>
      </motion.div>





    </SectionComponent>


<ImageModal
  image={selectedImage}
  title="Event Preview"
  onClose={() => setSelectedImage(null)}
/>
</>


  );
}

export default EventsSection;