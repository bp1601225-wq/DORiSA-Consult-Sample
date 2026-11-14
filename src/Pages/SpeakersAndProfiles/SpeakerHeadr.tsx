
import SectionComponent from "../../Components/Sections";

export default function SpeakersHeader() {
  return (
    <SectionComponent>
      <section className="text-center">
        <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-orange-50 border border-orange-200 text-[#fd7e02] text-xs md:text-sm font-bold tracking-widest uppercase mb-5">
          DORiSA Business Advocacy Forum
        </span>

        <h1 className="text-3xl md:text-5xl font-bold text-blue-950 mb-5">
          Meet Our Speakers
        </h1>

        <p className="max-w-3xl mx-auto text-gray-600 text-base md:text-lg leading-relaxed">
          Get to know the professionals who have been part of our
          Business Advocacy Forum & Counselling Series. Explore
          their backgrounds, experience and qualifications, and
          learn more about the people who have shared their knowledge
          and insights with our audience.
        </p>

        <div className="mt-5 text-sm font-semibold text-blue-900">
          Past Editions & Featured Speakers
        </div>

        <div className="w-16 h-1 bg-[#fd7e02] mx-auto mt-7 rounded-full" />
      </section>
    </SectionComponent>
  );
}
