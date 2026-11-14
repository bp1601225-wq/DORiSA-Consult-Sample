
import { motion } from "framer-motion";
import {
CalendarDays,
Clock,
MapPin,
ArrowUpRight,
} from "lucide-react";

const VIDEO_ID = "JJkYDUx7a9s";

function UpcomingEventsSection() {

// Show only events that have not yet taken place.
const today = new Date();
today.setHours(0, 0, 0, 0);



return (
<section className="bg-slate-50 px-6 py-20 md:px-10 md:py-24">
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

{/* Featured 4th Edition */}
<motion.div
initial={{ opacity: 0, y: 25 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.7 }}
className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
>
<div className="grid lg:grid-cols-2">

{/* YouTube Video */}
<div className="relative aspect-video bg-slate-950 lg:aspect-auto lg:min-h-[420px]">
<iframe
src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}`}
title="DORiSA Consult 4th Edition Promotional Video"
className="absolute inset-0 h-full w-full"
allowFullScreen
loading="lazy"
referrerPolicy="strict-origin-when-cross-origin"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
/>
</div>

{/* Event Information */}
<div className="flex flex-col justify-center p-7 md:p-10">

<span className="mb-5 w-fit rounded-full bg-amber-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-amber-700">
4th Edition · Featured Event
</span>

<h3 className="text-2xl font-bold leading-tight text-slate-950 md:text-3xl">
Business Advocacy Forum & Counselling Series
</h3>

<p className="mt-5 text-lg font-semibold leading-relaxed text-amber-600">
Funding Your Growth: Navigating Loans, Grants & Investor
Readiness in Ghana
</p>

<p className="mt-4 text-sm leading-7 text-slate-500">
How can businesses access funding and prepare for growth?
Join us as we explore loans, grants and what SMEs need
to attract investors and build stronger businesses.
</p>

{/* Event Details */}
<div className="mt-7 space-y-4 border-t border-slate-100 pt-6">
y
<div className="flex items-center gap-3 text-sm text-slate-600">
<CalendarDays size={18} className="text-amber-600" />
Wednesday, 11 November 2026
</div>

<div className="flex items-center gap-3 text-sm text-slate-600">
<Clock size={18} className="text-amber-600" />
7:00 PM GMT
</div>

<div className="flex items-center gap-3 text-sm text-slate-600">
<MapPin size={18} className="text-amber-600" />
Microsoft Teams · Virtual
</div>

</div>

{/* Speakers Button */}
<a
href="/speakers"
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
