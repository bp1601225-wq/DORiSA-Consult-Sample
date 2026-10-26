import { motion } from "framer-motion";
import { Share2, Sparkles } from "lucide-react";
import { useState } from "react";

import Navbar from "../NavBar/NavBar";
import MotivationQuoteData from "./MotivationalQuotes";
import ImageModal from "../../Components/Modal";

function DailyMotivation() {
  // Store the currently selected image and its title.
  // null means that no image is selected and the modal is closed.
  const [selectedImage, setSelectedImage] = useState<{
    image: string;
    title: string;
  } | null>(null);

  // Share the quote associated with a picture.
  const shareQuote = async (quote: string) => {
    const text = `"${quote}"\n\n— Dr. Doris Aryee\nDORiSA Consult`;

    try {
      // Use the device's native sharing options when available.
      if (navigator.share) {
        await navigator.share({
          title: "Business Motivation | DORiSA Consult",
          text,
          url: window.location.href,
        });
      } else {
        // Otherwise, copy the quote to the clipboard.
        await navigator.clipboard.writeText(text);
        alert("Quote copied! You can now share it.");
      }
    } catch (error) {
      // Ignore errors when the user cancels the share window.
      if (error instanceof Error && error.name !== "AbortError") {
        console.error("Unable to share quote:", error);
      }
    }
  };

  // Get the motivational pictures and their associated quotes.
  const quotes = MotivationQuoteData();

  return (
    <>
      <Navbar />

      <section
        id="daily-motivation"
        className="relative isolate overflow-hidden bg-slate-50 px-3 py-10 sm:px-6 sm:py-16"
      >
        {/* Decorative amber background glow */}
        <div className="pointer-events-none absolute -right-32 -top-32 -z-10 h-96 w-96 rounded-full bg-amber-100/60 blur-3xl" />

        {/* Decorative blue background glow */}
        <div className="pointer-events-none absolute -bottom-32 -left-32 -z-10 h-96 w-96 rounded-full bg-blue-100/50 blur-3xl" />

        <div className="mx-auto max-w-[1600px]">
          {/* Main page heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto mb-10 max-w-3xl text-center sm:mb-14"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-2">
              <Sparkles size={15} className="text-amber-600" />

              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-800 sm:text-xs">
                Business Inspiration
              </span>
            </div>

            <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-5xl md:text-6xl">
              Think bigger.
              <span className="block text-amber-600">
                Build better.
              </span>
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-600 sm:mt-5 sm:text-lg sm:leading-7">
              Powerful business motivation to inspire bold decisions,
              stronger leadership and sustainable growth.
            </p>
          </motion.div>

          {/* Featured DORiSA Consult banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative mb-10 overflow-hidden rounded-2xl bg-slate-950 p-6 text-white sm:mb-14 sm:rounded-3xl sm:p-10 md:p-14"
          >
            {/* Banner background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-slate-950 to-slate-900" />

            {/* Decorative circular outlines */}
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full border border-amber-400/20 sm:h-80 sm:w-80" />

            <div className="absolute -right-4 top-8 h-48 w-48 rounded-full border border-amber-400/20 sm:h-60 sm:w-60" />

            {/* Subtle amber glow */}
            <div className="absolute bottom-0 left-0 h-1/2 w-full bg-gradient-to-t from-amber-600/15 to-transparent" />

       <div className="relative z-10 max-w-3xl">
  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-400 sm:text-xs">
    DORiSA Consult
  </span>

  <h2 className="mt-4 text-2xl font-extrabold leading-tight sm:mt-5 sm:text-4xl md:text-5xl">
    “The plans of the diligent lead surely to abundance.”
  </h2>

  <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-300 sm:mt-5 sm:text-base sm:leading-7">
    Lasting success is built through careful planning, consistent effort,
    and wise decisions.
  </p>

  <div className="mt-6 flex items-center gap-3 sm:mt-8">
    <span className="h-px w-8 shrink-0 bg-amber-400 sm:w-10" />

    <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-300 sm:text-xs">
      Proverbs 21:5
    </span>
  </div>
</div>
          </motion.div>

          {/* Gallery section heading */}
          <div className="mb-5 sm:mb-7">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-700 sm:text-xs">
              Ideas that inspire action
            </p>

            <h2 className="mt-2 text-xl font-extrabold text-slate-950 sm:text-3xl">
              Business Motivation
            </h2>
          </div>

          {/* Responsive gallery:
              Mobile: 2 columns
              Small screens/tablets: 3 columns
              Large screens: 4 columns
              Extra-wide screens: 5 columns
          */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 xl:grid-cols-5">
            {quotes.map((item, index) => (
              <motion.article
                key={item.image || index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: Math.min(index * 0.04, 0.2),
                }}
                className="group min-w-0 overflow-hidden rounded-xl border border-slate-200 bg-white transition-colors duration-300 hover:border-amber-400 sm:rounded-2xl"
              >
                {/* Clickable picture:
                    Clicking it selects the image and opens the modal.
                */}
                {item.image && (
                  <button
                    type="button"
                    onClick={() =>
                      setSelectedImage({
                        image: item.image!,
                        title:
                          item.theme ||
                          "Business inspiration by Dr. Doris Aryee",
                      })
                    }
                    aria-label={`View ${
                      item.theme || "business inspiration"
                    } image`}
                    className="relative block aspect-[4/5] w-full cursor-zoom-in overflow-hidden bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-amber-500"
                  >
                    <img
                      src={item.image}
                      alt={
                        item.theme ||
                        "Business inspiration by Dr. Doris Aryee"
                      }
                      loading={index < 5 ? "eager" : "lazy"}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </button>
                )}

                {/* Name and Share button stay beneath the picture */}
                <div className="flex items-center justify-between gap-1.5 p-2 sm:gap-2 sm:p-3">
                  <div className="min-w-0">
                    <p className="truncate text-[10px] font-extrabold leading-tight text-slate-950 sm:text-xs">
                      Dr. Doris Aryee
                    </p>

                    <p className="mt-1 truncate text-[9px] text-slate-500 sm:text-[10px]">
                      DORiSA Consult
                    </p>
                  </div>

                  {/* Stop the share button from triggering any parent click */}
                  <button
                    type="button"
                    onClick={() => shareQuote(item.quote || "")}
                    aria-label="Share quote by Dr. Doris Aryee"
                    title="Share quote"
                    className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-950 text-white transition-colors hover:bg-amber-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 sm:h-9 sm:w-9"
                  >
                    <Share2 size={15} />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Footer */}
          <footer className="mt-10 border-t border-slate-200 pt-6 text-center sm:mt-14 sm:pt-8">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-amber-400 sm:w-10" />

              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500 sm:text-xs">
                DORiSA Consult
              </p>

              <span className="h-px w-8 bg-amber-400 sm:w-10" />
            </div>

            <p className="mt-3 text-xs text-slate-600 sm:text-sm">
              Strategic Consulting for Sustainable Growth
            </p>
          </footer>
        </div>
      </section>

      {/* Full-screen image preview modal.
          A null selectedImage closes the modal.
      */}
      <ImageModal
        image={selectedImage?.image ?? null}
        title={selectedImage?.title}
        onClose={() => setSelectedImage(null)}
      />
    </>
  );
}

export default DailyMotivation;