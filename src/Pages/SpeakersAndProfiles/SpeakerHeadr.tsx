import SectionComponent from "../../Components/Sections";

export default function SpeakersHeader() {
  return (

    <>
    <SectionComponent>


      <section className=" text-center">
  <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-orange-50 border border-orange-200 text-[#fd7e02] text-xs md:text-sm font-bold tracking-widest uppercase mb-5">
  <span className="w-2 h-2 rounded-full bg-[#fd7e02] animate-pulse" />
  DORiSA Business Advocacy Forum
  <span className="text-blue-900">|</span>
  <span className="text-blue-900">4th Edition</span>
</span>

        <h1 className="text-3xl md:text-5xl font-bold text-blue-950 mb-5">
          Meet Our Speakers
        </h1>

        <p className="max-w-3xl mx-auto text-gray-600 text-base md:text-lg leading-relaxed">
          Meet the experienced professionals leading our 4th Edition Business
          Advocacy Forum & Counselling Series. They will share practical
          knowledge and useful ideas on how businesses can access funding,
          secure loans, explore grants and prepare to attract investors.
          Join us as we explore how to move from business growth to
          financial readiness.
        </p>

        <div className="mt-5 text-sm font-semibold text-blue-900">
          Theme: Funding Your Growth – Navigating Loans, Grants & Investor
          Readiness in Ghana
        </div>

        <div className="w-16 h-1 bg-[#fd7e02] mx-auto mt-7 rounded-full" />
      </section>
    </SectionComponent>
    </>

  );
}