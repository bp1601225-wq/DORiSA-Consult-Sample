
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  X,
  Download,
  ArrowUpRight,
  UserRound,
  GraduationCap,
  FileText,
  CalendarDays,
} from "lucide-react";
import SectionComponent from "../../Components/Sections";
import { editions } from "./SpeakersEditionData";
import SpeakersHeader from "./SpeakerHeadr";
export default function SpeakersAndProfiles() {
  const [selectedSpeaker, setSelectedSpeaker] = useState<any>(null);

  // ALL EDITION AND SPEAKER INFORMATION


  return (
    <>
      <SectionComponent className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6 py-16">

        {/* PAGE HEADER */}
     <SpeakersHeader />

        {/* ALL EDITIONS */}
        {editions.map((edition) => (
          <div key={edition.title} className="mb-16">

            {/* EDITION DETAILS */}
            <div className="border-l-4 border-[#fd7e02] pl-5 mb-8">
              <p className="text-xs uppercase tracking-wider font-semibold text-[#fd7e02] mb-2">
                Business Advocacy Forum & Counselling Series
              </p>

              <h2 className="text-2xl font-bold text-[#102b50]">
                {edition.title}
              </h2>

              <p className="text-sm md:text-base text-slate-600 mt-2 leading-relaxed">
                {edition.theme}
              </p>

              <div className="flex items-center gap-2 text-xs text-slate-400 mt-3">
                <CalendarDays size={14} />
                {edition.date}
              </div>
            </div>

            {/* SPEAKER CARDS */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {edition.speakers.map((speaker) => (
                <button
                  key={speaker.name}
                  onClick={() => setSelectedSpeaker(speaker)}
                  className="text-left border border-slate-200 bg-white rounded-xl overflow-hidden hover:border-[#fd7e02] transition group"
                >
                  {/* IMAGE */}
                  {speaker.image ? (
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      className="w-full h-64 object-cover object-top"
                    />
                  ) : (
                    <div className="w-full h-64 bg-slate-50 flex flex-col items-center justify-center text-slate-400">
                      <UserRound size={48} strokeWidth={1.2} />
                      <span className="text-xs mt-3">
                        Photograph unavailable
                      </span>
                    </div>
                  )}

                  <div className="p-5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-[#fd7e02] uppercase">
                        {speaker.role}
                      </span>

                      <ArrowUpRight
                        size={18}
                        className="text-slate-400 group-hover:text-[#fd7e02] transition"
                      />
                    </div>

                    <h3 className="font-bold text-lg text-[#102b50] mt-4">
                      {speaker.name}
                    </h3>

                    {/* FULL DESCRIPTION */}
                    <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                      {speaker.description}
                    </p>

                    {/* QUALIFICATIONS */}
                    <div className="mt-4">
                      <div className="flex items-center gap-2 text-[#102b50] mb-2">
                        <GraduationCap size={16} />
                        <span className="text-xs font-semibold">
                          Qualifications
                        </span>
                      </div>

                      <p className="text-xs text-slate-500 leading-relaxed">
                        {speaker.qualifications}
                      </p>
                    </div>

                    {/* BIOGRAPHY PREVIEW */}
                    <div className="mt-4">
                      <div className="flex items-center gap-2 text-[#102b50] mb-2">
                        <FileText size={15} />
                        <span className="text-xs font-semibold">
                          Biography
                        </span>
                      </div>

                      <p className="text-sm text-slate-500 leading-relaxed line-clamp-4 whitespace-pre-line">
                        {speaker.bio}
                      </p>
                    </div>

                    <p className="text-xs text-[#fd7e02] font-semibold mt-5">
                      View Full Professional Profile →
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
      </SectionComponent>

      {/* FULL PROFILE PANEL */}
      <AnimatePresence>
        {selectedSpeaker && (
          <>
            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedSpeaker(null)}
              className="fixed inset-0 bg-black/40 z-40"
            />

            {/* SLIDING PROFILE */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-full sm:max-w-lg bg-white z-50 shadow-xl overflow-y-auto"
            >
              {/* HEADER */}
              <div className="p-6 border-b border-slate-100 flex items-center justify-between sticky top-0 bg-white z-10">
                <div>
                  <p className="text-xs text-[#fd7e02] font-semibold">
                    DORiSA CONSULT
                  </p>

                  <h2 className="text-lg font-bold text-[#102b50] mt-1">
                    Professional Profile
                  </h2>
                </div>

                <button
                  onClick={() => setSelectedSpeaker(null)}
                  className="p-2 rounded-full hover:bg-slate-100 transition"
                  aria-label="Close profile"
                >
                  <X size={20} />
                </button>
              </div>

              {/* PROFILE INFORMATION */}
              <div className="p-6">

                {/* PHOTO */}
              <div className="w-44 h-44 md:w-52 md:h-52 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center mb-6 overflow-hidden">
  {selectedSpeaker.image ? (
    <img
      src={selectedSpeaker.image}
      alt={selectedSpeaker.name}
      className="w-full h-full object-contain object-center p-1"
    />
  ) : (
    <span className="text-6xl font-bold text-[#102b50]">
      {selectedSpeaker.name.charAt(0)}
    </span>
  )}
</div>

                {/* ROLE */}
                <span className="text-xs font-semibold text-[#fd7e02] uppercase">
                  {selectedSpeaker.role}
                </span>

                {/* NAME */}
                <h2 className="text-2xl font-bold text-[#102b50] mt-2">
                  {selectedSpeaker.name}
                </h2>

                {/* DESCRIPTION */}
                <p className="text-sm text-slate-500 mt-3 leading-relaxed">
                  {selectedSpeaker.description}
                </p>

                {/* QUALIFICATIONS */}
                {selectedSpeaker.qualifications && (
                  <div className="mt-7 border-t border-slate-100 pt-6">
                    <div className="flex items-center gap-2 mb-3">
                      <GraduationCap
                        size={19}
                        className="text-[#fd7e02]"
                      />

                      <h3 className="font-semibold text-[#102b50]">
                        Qualifications & Credentials
                      </h3>
                    </div>

                    <p className="text-sm text-slate-600 leading-7 whitespace-pre-line">
                      {selectedSpeaker.qualifications}
                    </p>
                  </div>
                )}

                {/* COMPLETE BIOGRAPHY */}
                {selectedSpeaker.bio && (
                  <div className="mt-7 border-t border-slate-100 pt-6">
                    <div className="flex items-center gap-2 mb-4">
                      <FileText
                        size={18}
                        className="text-[#fd7e02]"
                      />

                      <h3 className="font-semibold text-[#102b50]">
                        Professional Biography
                      </h3>
                    </div>

                    <p className="text-sm text-slate-600 leading-7 whitespace-pre-line">
                      {selectedSpeaker.bio}
                    </p>
                  </div>
                )}

                {/* CV */}
                {selectedSpeaker.cv && (
                  <a
                    href={selectedSpeaker.cv}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 flex items-center justify-center gap-2 w-full bg-[#102b50] text-white py-3 rounded-lg hover:bg-[#fd7e02] transition"
                  >
                    <Download size={17} />
                    Download Professional CV
                  </a>
                )}
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
