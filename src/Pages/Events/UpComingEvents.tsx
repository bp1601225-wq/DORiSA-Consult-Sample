
import { motion } from "framer-motion";
import {
  CalendarDays,
  Clock,
  MapPin,
  ArrowUpRight,
  PlayCircle,
} from "lucide-react";
import { EventsNews } from "./EventsData";



function UpcomingEventsSection() {

const {UpComingEvents} = EventsNews

    const extracted = UpComingEvents();

const event = extracted[0]


  return (
    <section className="px-6 py-20 md:px-10 md:py-24">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-600">
            DORiSA Consult Events
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-950 md:text-4xl">
            Upcoming Events
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500">
            Join our business forums and professional conversations.
            Learn, connect and discover new opportunities for growth.
          </p>
        </div>

        {/* Featured Event */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
        >
          <div className="grid lg:grid-cols-2">

            {/* YouTube Video */}
            {/* <div className="relative aspect-video bg-slate-950 lg:aspect-auto lg:min-h-[420px]">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${event.videoId}`}
                title="DORiSA Consult Promotional Video"
                className="absolute inset-0 h-full w-full"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              />
            </div> */}


<div className="relative flex aspect-video items-center justify-center overflow-hidden rounded-xl border border-amber-500/20 bg-slate-950 lg:aspect-auto lg:min-h-[420px]">
  <div className="text-center">
    <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-amber-400/40 bg-amber-400/10">
      <PlayCircle className="h-8 w-8 text-amber-400" />
    </div>

    <h3 className="text-xl font-bold text-white">
      Promotional Video Coming Soon
    </h3>

    <p className="mt-2 text-sm text-slate-400">
      Our video will be available here shortly.
    </p>
  </div>
</div>


            {/* Event Information */}
            <div className="flex flex-col justify-center p-7 md:p-10">

              <span className="mb-5 w-fit rounded-full bg-amber-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-amber-700">
                {event.category}
              </span>

              <h3 className="text-2xl font-bold leading-tight text-slate-950 md:text-3xl">
                Business Advocacy Forum & Counselling Series
              </h3>

              <p className="mt-5 text-lg font-semibold leading-relaxed text-amber-600">
                {event.title}
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-500">
                {event.description}
              </p>

              {/* Event Details */}
              <div className="mt-7 space-y-4 border-t border-slate-100 pt-6">

                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <CalendarDays size={18} className="text-amber-600" />
                  {event.date} {event.month} {event.year}
                </div>

                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <Clock size={18} className="text-amber-600" />
                  {event.time}
                </div>

                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <MapPin size={18} className="text-amber-600" />
                  {event.location} · Virtual
                </div>

              </div>

              {/* Speakers Button */}
              <a
                href={event.link}
                className="mt-8 inline-flex w-fit items-center gap-2 rounded-lg bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-amber-600"
              >
                Meet the Speakers
                <ArrowUpRight size={17} />
              </a>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default UpcomingEventsSection;
