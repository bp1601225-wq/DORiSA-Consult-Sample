import Hero from "../../Components/Hero";
import ServicesPage from "../Services/Service";
import AboutPage from "../About/AboutPage";
import ContactUsPage from "../Contact/ContactUs";
import ApproachPage from "../Approach/ApproachPage";

function LandingPage() {
  return (
    <div className="flex flex-col gap-4">
      <Hero />

      <ServicesPage />

      <AboutPage />

      <ApproachPage />


      <ContactUsPage />

    </div>
  );
}

export default LandingPage;