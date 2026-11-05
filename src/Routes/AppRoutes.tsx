import { Routes, Route } from "react-router";
import LandingPage from "../Pages/Home/LandingPage";
import Events from "../Pages/Events/Events";
import AboutPage from "../Pages/About/AboutPage";
import DailyMotivation from "../Pages/DailyMotivations/DailyMotivations";
import Dorisa_Sessions from "../Pages/Dorisa_TV/DORiSA_Sessions";
import Navbar from "../Components/Navigation/NavBar";
import SpeakersAndProfiles from "../Pages/SpeakersAndProfiles/SpeakersAndProfiles";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />

      <Route path="/about" element={<h1>About</h1>} />

      <Route path="/animations" element={<h1>Animations</h1>} />

      <Route path="/contact" element={<h1>Contact</h1>} />
    
      <Route path="/events" element={<Events />} />

      <Route
        path="/about-us"
        element={
          <>
            <Navbar />
            <AboutPage />
          </>
        }
      />

      <Route path="/dorisa-tv" element={<Dorisa_Sessions />} />

      <Route
        path="/speakers"
        element={
          <>
            <Navbar />
            <SpeakersAndProfiles />
          </>
        }
      />



    <Route path="/daily-motivations" element={<DailyMotivation />} />



      <Route path="*" element={<h1>404 - Page Not Found</h1>} />


    </Routes>
  );
}
